import requests
import pandas as pd

from bs4 import BeautifulSoup as BS

def get_moves(category):
    return list_of_dictionaries_of_move_name_and_properties

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
            'peach', 'pichu', 'pikachu', 'piranha plant', 'pit', 'squirtle',
            'ivysaur', 'charizard', 'richter', 'ridley', 'rob', 'robin',
            'rosalina and luma', 'roy', 'ryu', 'samus', 'sheik', 'shulk',
            'simon', 'snake', 'sonic', 'toon link', 'villager', 'wario',
            'wolf', 'yoshi', 'young link', 'zelda', 'zero suit samus']
for character in characters:
    name = character.replace(' ', '_')
    url = f'https://ultimateframedata.com/{name}'
    page = requests.get(url)
    if page.text:
        page = BS(page.text, 'html.parser')
        # Make these into classes
        groundattacks = get_moves(page.find('h2', id='groundattacks'))
        arialattacks = get_moves(page.find('h2', id='arialattacks'))
        specialattacks = get_moves(page.find('h2', id='specialattacks'))
        grabs = get(movespage.find('h2', id='grabs'))
        dodges = page.find('h2', id='dodges')
        misc = page.find('h2', id='misc')




