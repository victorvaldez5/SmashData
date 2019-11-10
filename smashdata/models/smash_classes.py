class BaseMove:
    move_name = None
    total_frames = None

    def __init__(self, move_name, total_frames, *args, **kwargs):
        self.move_name = move_name
        self.total_frames = total_frames


class BaseAttack(BaseMove):
    startup = None
    base_damage = None

    def __init__(self, startup, base_damage, *args, **kwargs):
        self.startup = startup
        self.base_damage = base_damage

        super().__init__(*args, **kwargs)
        if 'Jab' not in self.move_name:
            self._set_type_and_direction()

    def _set_type_and_direction(self):
        print(self.move_name)
        data = self.move_name.lower().split(' ')
        setattr(self, 'type', data[1])
        setattr(self, 'direction', data[0])


class BaseArielMove(BaseMove):
    frames_landing_lag = None

    def __init__(self, frames_landing_lag, *args, **kwargs):
        self.frames_landing_lag = frames_landing_lag
        super().__init__(*args, **kwargs)


class GroundAttack(BaseAttack):
    shield_stun = None
    shield_lag = None
    active_frames = None
    advantage = None

    def __init__(self, shield_stun, shield_lag, active_frames, advantage, *args, **kwargs):
        self.shield_stun = shield_stun
        self.shield_lag = shield_lag
        self.active_frames = active_frames
        self.advantage = advantage

        super().__init__(*args, **kwargs)


class AerialAttack(BaseArielMove, GroundAttack):
    pass


class Dodge(BaseMove):
    invulnerable_frames = None

    def __init__(self, invulnerable_frames, *args, **kwargs):
        self.invulnerable_frames = invulnerable_frames
        super().__init__(*args, **kwargs)


class BaseArielDodge(BaseArielMove, Dodge):
    direction = None

    def __init__(self, direction, *args, **kwargs):
        self.direction = direction

        super().__init__(*args, **kwargs)


class TiltSet:
    forward_tilt = None
    up_tilt = None
    down_tilt = None

    def __init__(self, forward_tilt, up_tilt, down_tilt):
        self.forward_tilt = forward_tilt
        self.up_tilt = up_tilt
        self.down_tilt = down_tilt


class SmashSet:
    up_smash = None
    down_smash = None
    forward_smash = None

    def __init__(self, up_smash, down_smash, forward_smash):
        self.up_smash = up_smash
        self.down_smash = down_smash
        self.side_smash = forward_smash


class ArielAttackSet:
    neutral_air = None
    down_air = None
    up_air = None
    forward_air = None
    back_air = None
    z_air = None

    def __init__(self, neutral_air, down_air, up_air, forward_air, back_air, z_air=None):
        self.neutral_air = neutral_air
        self.down_air = down_air
        self.up_air = up_air
        self.forward_air = forward_air
        self.back_air = back_air
        self.z_air = z_air


class SpecialMoveSet:
    up_b = None
    side_b = None
    down_b = None
    neutral_b = None

    def __init__(self, up_b, side_b, down_b, neutral_b):
        self.up_b = up_b
        self.side_b = side_b
        self.down_b = down_b
        self.neutral_b = neutral_b

class GrabSet:
    grab = None
    dash_grab = None
    pivot_grab = None

    def __init__(self, grab, dash_grab, pivot_grab):
        self.grab = grab
        self.dash_grab = dash_grab
        self.pivot_grab = pivot_grab

class ThrowSet:
    forward_throw = None
    backward_throw = None
    up_throw = None
    down_throw = None
    pummel = None

    def __init__(self, forward_throw, backward_throw, up_throw, down_throw, pummel):
        self.forward_throw = forward_throw
        self.backward_throw = backward_throw
        self.up_throw = up_throw
        self.down_throw = down_throw
        self.pummel = pummel

class AirDodgeSet:
    neutral = None
    air_dodge_down = None
    air_dodge_diagonal_down = None
    air_dodge_side = None
    air_dodge_diagonal_up = None
    air_dodge_up = None

    def __init__(self, neutral, air_dodge_down, air_dodge_diagonal_down, air_dodge_side, air_dodge_diagonal_up, air_dodge_up):
        self.neutral = neutral
        self.air_dodge_down = air_dodge_down
        self.air_dodge_diagonal_down = air_dodge_diagonal_down
        self.air_dodge_side = air_dodge_side
        self.air_dodge_diagonal_up = air_dodge_diagonal_up
        self.air_dodge_up = air_dodge_up

class DodgeSet:
    spot_dodge = None
    forward_roll = None
    backward_roll = None
    air_dodges = None

    def __init__(self, spot_dodge, forward_roll, backward_roll, air_dodges):
        self.spot_dodge = spot_dodge
        self.forward_roll = forward_roll
        self.backward_roll = backward_roll
        self.air_dodges = air_dodges

    def __init__(self, dodges, air_dodges, out_of_shield_options):
        self.dodges = dodges
        self.air_dodges = air_dodges
        self.out_of_shield_options = out_of_shield_options


class Offensive:
    tilt_set = None
    smash_set = None
    special_attacks = None
    aerial_set = None

    def __init__(self, tilt_set, smash_set, special_moves, aerial_set):
        self.tilt_set = tilt_set
        self.smash_set = smash_set
        self.special_moves = special_moves
        self.aerial_attacks = aerial_set

class Grabs:
    grab_set = None
    throw_set = None

    def __init__(self, grab_set, throw_set):
        self.grab_set = grab_set
        self.throw_set = throw_set


class CharacterStats:
    weight = None
    gravity = None
    walk_speed = None
    run_speed = None
    initial_dash = None
    air_speed = None
    total_air_acceleration = None
    short_hop = None
    full_hop = None
    full_hop_ff = None
    short_hop_ff = None
    fall_speed = None
    fast_fall_speed = None
    ariel_mobility = None
    shield_grab = None
    jump_squat = 3
    shield_drop = 11
    out_of_shield = {}

    def __init__(self, stat_dict):
        for k, v in stat_dict.items():
            setattr(self, k.lower().replace(' ', '_'), v)


class Moveset:
    offensive = None
    dodge_set = None
    grabs = None

    def __init__(self, offensive, dodge_set, grabs):
        self.offensive = offensive
        self.dodge_set = dodge_set
        self.grabs = grabs


class Character:
    name = None
    moveset = None
    stats = None

    def __init__(self, name, moveset, stats):
        self.name = name
        self.moveset = moveset
        self.stats = stats

