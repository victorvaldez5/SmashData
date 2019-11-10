import requests
import pandas as pd
import json

from bs4 import BeautifulSoup as BS

base_classes = ['movename', 'totalframes', 'landinglag', 'notes']
move_classes = base_classes + ['startup', 'basedamage']
attack_classes = move_classes + ['shieldlag', 'shieldstun', 'advantage', 'activeframes']


def get_moves(category, class_name_list):
    moves_list = category.next_sibling.next_sibling.find_all('div', class_='movecontainer')
    moves_data = []
    for m in moves_list:
        move = {}
        for c in class_name_list:
            data = m.find('div', class_=c)
            if data:
                move[c] = data.text.strip()
            else:
                move[c] = 'No Data'
        moves_data.append(move)
    return moves_data

def get_stats(container):
    stats_list = container.next_sibling.next_sibling.find('div', class_='movecontainer').find_all('div')
    stats = {}
    for stat in stats_list:
        data_string = stat.text.split('—')
        name = data_string[0].strip()
        val = data_string[1].strip()
        stats[name] = val
    return stats

characters = ['banjo and kazooie', 'bayonetta',
            'bowser', 'bowser jr', 'captain falcon',
            'chrom', 'cloud', 'corrin', 'daisy', 'dark pit',
            'dark samus', 'diddy kong', 'donkey kong', 'dr mario',
            'duck hunt', 'falco', 'fox', 'ganondorf', 'greninja',
            'hero', 'ice climbers', 'ike', 'incineroar',
            'inkling', 'isabelle', 'jigglypuff', 'joker',
            'ken', 'king dedede', 'king k rool', 'kirby',
            'link', 'little mac', 'lucario', 'lucas', 'lucina',
            'luigi', 'mario', 'marth', 'mega man', 'meta knight',
            'mewtwo', 'mii brawler', 'mii gunner', 'mii swordfighter',
            'mr game and watch', 'ness', 'olimar', 'pac man', 'palutena',
            'peach', 'pichu', 'pikachu', 'piranha plant', 'pit', 'pt_squirtle',
            'pt_ivysaur', 'pt_charizard', 'richter', 'ridley', 'rob', 'robin',
            'rosalina and luma', 'roy', 'ryu', 'samus', 'sheik', 'shulk',
            'simon', 'snake', 'sonic', 'toon link', 'villager', 'wario',
            'wolf', 'yoshi', 'young link', 'zelda', 'zero suit samus']

characters_data = {}
for character in characters:
    character_data_dict = {}
    name = character.replace(' ', '_')
    url = f'https://ultimateframedata.com/{name}'
    page = requests.get(url)
    if page.text:
        page = BS(page.text, 'html.parser')
        # Make these into classes
        groundattacks = get_moves(page.find('h2', id='groundattacks'), attack_classes)
        aerialattacks = get_moves(page.find('h2', id='aerialattacks'), attack_classes)
        specialattacks = get_moves(page.find('h2', id='specialattacks'), attack_classes)
        grabs = get_moves(page.find('h2', id='grabs'), move_classes)
        dodges = get_moves(page.find('h2', id='dodges'), base_classes)
        misc = get_stats(page.find('h2', id='misc'))
        characters_data[name.replace(" ", "_")] = {
            'ground_attacks': groundattacks,
            'aerial_attacks': aerialattacks,
            'special_attacks': specialattacks,
            'grabs': grabs,
            'dodges': dodges,
            'stats': misc
        }
with open('characters.json', 'w') as f:
    data = json.dumps(characters_data)
    f.write(data)



