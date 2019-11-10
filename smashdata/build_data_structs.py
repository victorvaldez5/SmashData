from smashdata.models.smash_classes import CharacterStats
from smashdata.utils.dodge_factory import *
from smashdata.utils.offense_factories import *
import json
import pprint

pp = pprint.PrettyPrinter(indent=2)


def get_offensive(moveset):
    ground_attacks = moveset['ground_attacks']
    aerial_attacks = moveset['aerial_attacks']
    special_attacks = moveset['special_attacks']
    tilts, smashes = create_ground_attacks(ground_attacks)
    aerialset = create_aerial_attacks(aerial_attacks)
    specials = create_special_attacks(special_attacks)
    tilts = create_directional_attacks(tilts)
    tilt_set = create_tilt_set(tilts)
    smash_set = create_smash_set(smashes)
    aerial_set = create_aerial_set(aerialset)
    return {'tilt_set': tilt_set, 'smash_set': smash_set, 'aerial_set': aerial_set, 'special_attacks': specials}


def format_stats(stats):
    jumps = stats['SH / FH / SHFF / FHFF Frames'].split('/')
    stats['short_hop'] = jumps[0].strip()
    stats['full_hop'] = jumps[1].strip()
    stats['short_hop_ff'] = jumps[2].strip()
    stats['full_hop_ff'] = jumps[3].strip()
    del stats['SH / FH / SHFF / FHFF Frames']
    fall_speed = stats['Fall Speed / Fast Fall Speed'].split('/')
    stats['fall_speed'] = fall_speed[0].strip()
    stats['fast_fall_speed'] = fall_speed[1].strip()
    del stats['Fall Speed / Fast Fall Speed']
    out_of_shield = {}
    keys_to_delete = []
    for k, v in stats.items():
        if 'Out of Shield' in k:
            move = k.split(',')[1].strip()
            out_of_shield[move] = v.split(' ')[0]
            keys_to_delete.append(k)
    for k in keys_to_delete:
        del stats[k]
    stats['out_of_shield'] = out_of_shield
    stats['shield_grab'] = stats['Shield Grab (Grab, post-Shieldstun)']
    del stats['Shield Grab (Grab, post-Shieldstun)']
    stats = CharacterStats(stats)
    return stats


def get_dodges(dodges):
    for dodge in dodges:
        dodge['invulnerable_frames'] = dodge['notes']
        del dodge['notes']
    dodges_set = create_dodges(dodges)
    return dodges_set


def main():
    with open('characters.json', 'r') as f:
        data = json.load(f)
        for character, moveset in data.items():
            offensive = get_offensive(moveset)
            stats = format_stats(moveset['stats'])
            dodges = get_dodges(moveset['dodges'])

            moveset = {
                'dodge_set': dodges,
                'offensive': offensive
            }


