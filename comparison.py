import pandas as pd
import numpy as np
import json

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

    print(control)
    print(opponent)

    control['win'] = np.where(control.totalframes < opponent.totalframes, 'yes', 'no')

    return control.to_json()

print(compare(get_characters('link', 'ness')))
