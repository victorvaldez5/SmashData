from smashdata.models.smash_classes import GroundAttack, SpecialMoveSet, TiltSet, SmashSet, ArielAttackSet, \
    AerialAttack, Offensive

directions = ['Down B', 'Side B', 'Up B', 'Neutral B']


def create_ground_attacks(data):
    tilts = []
    smashes = []
    for attack in data:
        if 'Jab' in attack['move_name'] or 'Tilt' in attack['move_name']:
            tilts.append(create_ground_attack(attack))
        elif 'Smash' in attack['move_name']:
            smashes.append(create_ground_attack(attack))
    return tilts, smashes


def create_special_attacks(data):
    attacks = []
    for attack in data:
        for d in directions:
            if d in attack['move_name']:
                attack['move_name'] = d
                attacks.append(GroundAttack(**attack))
    attack_set = create_directional_attacks(attacks)
    special_set = SpecialMoveSet(**attack_set)
    return special_set


def create_aerial_attacks(data):
    attacks = []
    for attack in data:
        attacks.append(create_aerial_attack(attack))
    return attacks


def create_tilt_set(tilts):
    tilt_set = TiltSet(**tilts)
    return tilt_set


def create_smash_set(smashes):
    smashes = create_directional_attacks(smashes)
    return SmashSet(**smashes)


def create_aerial_set(aerials):
    airs = create_directional_attacks(aerials)
    return ArielAttackSet(**airs)


def create_aerial_attack(data):
    aerial_attack = AerialAttack(**data)
    return aerial_attack


def create_ground_attack(data):
    ground_attack = GroundAttack(**data)
    return ground_attack


def create_directional_attacks(attack_set):
    attacks = {}
    for attack in attack_set:
        if hasattr(attack, 'direction'):
            attacks[f'{attack.direction}_{attack.type}'] = attack
    return attacks


def create_special_attack(data):
    special_attack = GroundAttack(**data)
    return special_attack


def create_offensive_set(offensive_set):
    return Offensive(**offensive_set)