
import os.path
import binascii
import struct
import requests
import json
import os
import numpy as np
import pandas as pd
from PIL import Image
import operator

ground_attack_types = ['Jab 1', 'Jab 2', 'Jab 3', 'Forward Tilt',
                       'Up Tilt', 'Down Tilt', 'Dash Attack',
                       'Forward Smash', 'Up Smash', 'Down Smash']

def get_character_from_json(character):
    f = open('characters.json', 'r')
    characters = json.load(f)
    for c in characters:
        if str(c).lower() == str(character).lower():
            character = characters[c] # control is now json for posted character
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
        control_moves = list(cga_df['movename'])
        opponent_moves = list(oga_df['movename'])
        removed = False
        for move in control_moves:
            if move not in opponent_moves:
                print(move)
                cga_df = cga_df[cga_df.movename != move]

    cga_df = cga_df.reset_index(drop=True)

    if cga_df.shape[0] < oga_df.shape[0]:
        control_moves = list(cga_df['movename'])
        opponent_moves = list(oga_df['movename'])

        for move in opponent_moves:
            if move not in control_moves:
                print(move)
                oga_df = oga_df[oga_df.movename != move]

    oga_df = oga_df.reset_index(drop=True)

    #check diff again lol
    if cga_df.shape[0] > oga_df.shape[0]:
        control_moves = list(cga_df['movename'])
        opponent_moves = list(oga_df['movename'])
        removed = False
        for move in control_moves:
            if move not in opponent_moves:
                print(move)
                cga_df = cga_df[cga_df.movename != move]

    cga_df = cga_df.reset_index(drop=True)

    return[cga_df[['movename', 'totalframes', 'activeframes']], oga_df[['movename', 'totalframes', 'activeframes']]]

def compare(attack_set):
    control = attack_set[0]
    opponent = attack_set[1]

    control['win'] = np.where(control.totalframes < opponent.totalframes, 'yes', 'no')
    control['diff'] = np.where(control.totalframes != opponent.totalframes, control.totalframes.astype(int) - opponent.totalframes.astype(int), 0)

    return control.to_json()

def weakest_strongest(control_name):
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
    return json.dumps({'weakest':char_power[0], 'strongest':char_power[len(char_power) - 1]})

def get_battle(control_name, oppponent_name):
    #look for character in dataset somehow..
    return(compare(get_characters(control_name, opponent_name)))

def get_rgb_values(pixel_value):
    red = pixel_value%256
    pixel_value //= 256
    green = pixel_value%256
    pixel_value //= 256
    blue = pixel_value
    return [red,green,blue]

print(weakest_strongest("palutena"))
