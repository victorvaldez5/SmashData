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

         super().__init__(*args,**kwargs)

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

class AreilAttack(BaseArielMove, GroundAttack):
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


class SmashSet:
    up_smash = None
    down_smash = None
    side_smash = None

class ArielAttackSet:
    neutral_air = None
    down_air = None
    up_air = None
    forward_air = None
    back_air = None
    z_air = None

class SpecialMoveSet:
    up_b = None
    side_b = None
    down_b = None
    neutral_b = None

class GrabSet:
    grab = None
    dash_grab = None
    pivot_grab = None

class ThrowSet:
    forward_throw = None
    backward_throw = None
    up_throw = None
    down_throw = None
    pummel = None

class AirDodgeSet:
    neutral = BaseArielDodge('neutral')
    air_dodge_down = BaseArielDodge(move_name='down')
    air_dodge_diagonal_down = BaseArielDodge('diagonal_down')
    air_dodge_side = BaseArielDodge('side')
    air_dodge_diagonal_up = BaseArielDodge('diagonal_up')
    air_dodge_up = BaseArielDodge('up')

class DodgeSet:
    spot_dodge = Dodge()
    forward_roll = Dodge()
    backward_roll = Dodge()

class Defensive:
    dodges = DodgeSet()
    air_dodges = AirDodgeSet()
    out_of_shield_options = OutOfShield()

class Offensive:
    tilt_set = TiltSet()
    smash_set = SmashSet()
    special_moves = SpecialMoveSet()
    ariel_attacks = ArielAttackSet()

class Grabs:
    grab_set = GrabSet
    throw_set = ThrowSet

class CharacterStats:
    weight = None
    gravity = None
    walk_speed_ None
    run_speed = None
    initial_dash = None
    air_speed = None
    total_air_acceleration = None
    short_hop = None
    full_hop = None
    short_hop_ff = None
    short_hop_ff = None
    ariel_mobility = None
    shield_grab = None
    jump_squat = 3
    shield_drop = 11

class Moveset:
    offensive = Offensive()
    defensive = Defensive()
    grabs = Grabs()

class Character:
    name = None
    moveset = Moveset()
    stats = CharacterStats()
