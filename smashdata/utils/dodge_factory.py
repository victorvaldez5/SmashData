from smashdata.models.smash_classes import Dodge, DodgeSet, BaseArielDodge, AirDodgeSet


def create_dodges(data):
    dodges = []
    air_dodges = []
    for dodge in data:
        if 'Air' in dodge['move_name']:
            air_dodges.append(create_air_dodge(dodge))
        else:
            dodges.append(create_dodge(dodge))
    air_dodges = create_air_dodge_set(air_dodges)
    dodge_set = create_dodge_set(dodges, air_dodges)
    return dodge_set


def create_dodge_set(dodges,air_dodges):
    dodge_set = {}
    for dodge in dodges:
        dodge_set[dodge.move_name.lower().replace(' ', '_')] = dodge
    dodge_set['air_dodges'] = air_dodges
    return DodgeSet(**dodge_set)


def create_dodge(data):
    return Dodge(**data)


def create_air_dodge(dodge):
    if ',' in dodge['move_name']:
        dodge['direction'] = dodge['move_name'].split(',')[1].lower().strip().replace(' ', '_').replace('left/right', 'side')
    else:
        dodge['direction'] = 'neutral'
    return BaseArielDodge(**dodge)


def create_air_dodge_set(dodges):
    air_dodge_set = {}
    for dodge in dodges:
        if dodge.direction != 'neutral':
            air_dodge_set[f'air_dodge_{dodge.direction}'] = dodge
        else:
            air_dodge_set[dodge.direction] = dodge
    return AirDodgeSet(**air_dodge_set)