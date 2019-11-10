from flask import Flask
from flask import request
from flask_pymongo import PyMongo
import json
import os
import numpy as np
import pandas as pd
import operator

app = Flask(__name__, static_url_path='/dist/')
app.config["MONGO_URI"] = "mongodb://yoda:theforce@0.0.0.0:27017/minecraftapp"
mongo = PyMongo(app)
ROOTDIR = os.path.dirname(os.path.abspath(__file__))


ground_attack_types = ['Jab 1', 'Jab 2', 'Jab 3', 'Forward Tilt',
                       'Up Tilt', 'Down Tilt', 'Dash Attack',
                       'Forward Smash', 'Up Smash', 'Down Smash']


def get_character_from_json(character):
    f = open('characters.json', 'r')
    characters = json.load(f)
    for c in characters:
        if str(c).lower() == str(character).lower():
            character = characters[c]  # control is now json for posted character
    return character


def get_all_characters():
    f = open('characters.json', 'r')
    characters = json.load(f)
    return characters


def get_characters(control_name, opponent_name):
    control = get_character_from_json(control_name)
    opponent = get_character_from_json(opponent_name)

    cga = [ga for ga in control['ground_attacks']]
    oga = [ga for ga in opponent['ground_attacks']]
    results = {}

    cga_df = pd.DataFrame(cga)
    oga_df = pd.DataFrame(oga)

    if cga_df.shape[0] > oga_df.shape[0]:
        control_moves = list(cga_df['move_name'])
        opponent_moves = list(oga_df['move_name'])
        removed = False
        for move in control_moves:
            if move not in opponent_moves:
                print(move)
                cga_df = cga_df[cga_df.move_name != move]

    cga_df = cga_df.reset_index(drop=True)

    if cga_df.shape[0] < oga_df.shape[0]:
        control_moves = list(cga_df['move_name'])
        opponent_moves = list(oga_df['move_name'])

        for move in opponent_moves:
            if move not in control_moves:
                print(move)
                oga_df = oga_df[oga_df.move_name != move]

    oga_df = oga_df.reset_index(drop=True)

    #check diff again lol
    if cga_df.shape[0] > oga_df.shape[0]:
        control_moves = list(cga_df['move_name'])
        opponent_moves = list(oga_df['move_name'])
        removed = False
        for move in control_moves:
            if move not in opponent_moves:
                print(move)
                cga_df = cga_df[cga_df.move_name != move]

    cga_df = cga_df.reset_index(drop=True)

    return[cga_df[['move_name', 'total_frames', 'active_frames']], oga_df[['move_name', 'total_frames', 'active_frames']]]


def compare(attack_set):

    control = attack_set[0]
    opponent = attack_set[1]

    control['win'] = np.where(control.total_frames < opponent.total_frames, 'yes', 'no')
    control['diff'] = np.where(control.total_frames != opponent.total_frames, control.total_frames.astype(int) - opponent.total_frames.astype(int), 0)

    return control.to_json()


@app.route('/threats/', methods=['GET'])
def weakest_strongest():
    control_name = request.args.get('control')
    char_power = {}
    for c in get_all_characters():
        if str(c).lower() != control_name:
            resp = 0
            try:
                resp = compare(get_characters(control_name, str(c).lower()))
                char_power[c] = sum(json.loads(resp)['diff'].values())
            except:
                break

    char_power = sorted(char_power.items(), key=operator.itemgetter(1))
    return json.dumps({'weakest': char_power[0], 'strongest': char_power[len(char_power) - 1]})


@app.route('/compare/', methods=['GET'])
def get_battle():
    control_name = request.args.get('control')
    opponent_name = request.args.get('opponent')

    #look for character in dataset somehow..
    return compare(get_characters(control_name, opponent_name))
    
@app.route('/')
def index():
    return app.send_static_file('index.html')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port="4000", debug=True)
