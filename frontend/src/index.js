import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Select from 'react-select';
import { Collapse, Container, Row, Col, Card, CardBody } from 'reactstrap';
import styled from 'styled-components';
//import './node_modules/bootstrap/dist/css/bootstrap.min.css';

const Button = styled.button`
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  background: #1b2a49;
  color: white;`

document.body.style = 'background: #465881;';
const characters = [
    {'label': 'Banjo and Kazooie', 'value': 'banjo_and_kazooie'},
    {'label': 'Bayonetta', 'value': 'bayonetta'},
    {'label': 'Bowser', 'value': 'bowser'},
    {'label': 'Bowser Jr', 'value': 'bowser_jr'},
    {'label': 'Captain Falcon', 'value': 'captain_falcon'},
    {'label': 'Chrom', 'value': 'chrom'},
    {'label': 'Cloud', 'value': 'cloud'},
    {'label': 'Corrin', 'value': 'corrin'},
    {'label': 'Daisy', 'value': 'daisy'},
    {'label': 'Dark Pit', 'value': 'dark_pit'},
    {'label': 'Dark Samus', 'value': 'dark_samus'},
    {'label': 'Diddy Kong', 'value': 'diddy_kong'},
    {'label': 'Donkey Kong', 'value': 'donkey_kong'},
    {'label': 'Dr. Mario', 'value': 'dr_mario'},
    {'label': 'Duck Hunt', 'value': 'duck_hunt'},
    {'label': 'Falco', 'value': 'falco'},
    {'label': 'Fox', 'value': 'fox'},
    {'label': 'Ganondorf', 'value': 'ganondorf'},
    {'label': 'Greninja', 'value': 'greninja'},
    {'label': 'Hero', 'value': 'hero'},
    {'label': 'Ice Climbers', 'value': 'ice_climbers'},
    {'label': 'Ike', 'value': 'ike'},
    {'label': 'Incineroar', 'value': 'incineroar'},
    {'label': 'Inkling', 'value': 'inkling'},
    {'label': 'Isabelle', 'value': 'isabelle'},
    {'label': 'Jigglypuff', 'value': 'jigglypuff'},
    {'label': 'Joker', 'value': 'joker'},
    {'label': 'Ken', 'value': 'ken'},
    {'label': 'King Dedede', 'value': 'king_dedede'},
    {'label': 'King K Rool', 'value': 'king_k_rool'},
    {'label': 'Kirby', 'value': 'kirby'},
    {'label': 'Link', 'value': 'link'},
    {'label': 'Little Mac', 'value': 'little_mac'},
    {'label': 'Lucario', 'value': 'lucario'},
    {'label': 'Lucas', 'value': 'lucas'},
    {'label': 'Lucina', 'value': 'lucina'},
    {'label': 'Luigi', 'value': 'luigi'},
    {'label': 'Mario', 'value': 'mario'},
    {'label': 'Marth', 'value': 'marth'},
    {'label': 'Mega Man', 'value': 'mega_man'},
    {'label': 'Meta Knight', 'value': 'meta_knight'},
    {'label': 'Mewtwo', 'value': 'mewtwo'},
    {'label': 'Mii Brawler', 'value': 'mii_brawler'},
    {'label': 'Mii Gunner', 'value': 'mii_gunner'},
    {'label': 'Mii Swordfighter', 'value': 'mii_swordfighter'},
    {'label': 'Mr. Game And Watch', 'value': 'mr_game_and_watch'},
    {'label': 'Ness', 'value': 'ness'},
    {'label': 'Olimar', 'value': 'olimar'},
    {'label': 'Pac Man', 'value': 'pac_man'},
    {'label': 'Palutena', 'value': 'palutena'},
    {'label': 'Peach', 'value': 'peach'},
    {'label': 'Pichu', 'value': 'pichu'},
    {'label': 'Pikachu', 'value': 'pikachu'},
    {'label': 'Piranha Plant', 'value': 'piranha_plant'},
    {'label': 'Pit', 'value': 'pit'},
    {'label': 'Pokemon Trainer Squirtle', 'value': 'pt_squirtle'},
    {'label': 'Pokemon Trainer Ivysaur', 'value': 'pt_ivysaur'},
    {'label': 'Pokemon Trainer Charizard', 'value': 'pt_charizard'},
    {'label': 'Richter', 'value': 'richter'},
    {'label': 'Ridley', 'value': 'ridley'},
    {'label': 'Rob', 'value': 'rob'},
    {'label': 'Robin', 'value': 'robin'},
    {'label': 'Rosalina and Luna', 'value': 'rosalina_and_luna'},
    {'label': 'Roy', 'value': 'roy'},
    {'label': 'Ryu', 'value': 'ryu'},
    {'label': 'Samus', 'value': 'samus'},
    {'label': 'Sheik', 'value': 'sheik'},
    {'label': 'Shulk', 'value': 'shulk'},
    {'label': 'Simon', 'value': 'simon'},
    {'label': 'Snake', 'value': 'snake'},
    {'label': 'Sonic', 'value': 'sonic'},
    {'label': 'Toon Link', 'value': 'toon_link'},
    {'label': 'Villager', 'value': 'villager'},
    {'label': 'Wario', 'value': 'wario'},
    {'label': 'Wolf', 'value': 'wolf'},
    {'label': 'Yoshi', 'value': 'yoshi'},
    {'label': 'Young Link', 'value': 'young_link'},
    {'label': 'Zelda', 'value': 'zelda'},
    {'label': 'Zero Suit Samus', 'value': 'zero_suit_samus'}
]
const Everything = {
  "banjo_and_kazooie": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 8",
        "startup": "4",
        "basedamage": "2.2",
        "shieldlag": "8",
        "shieldstun": "3",
        "advantage": "-20",
        "activeframes": "4\u20146"
      },
      {
        "movename": "Jab 2",
        "totalframes": "24",
        "landinglag": "--",
        "notes": "Transitions to Jab 3 as early as frame 10 or Rapid on 9.",
        "startup": "4",
        "basedamage": "2.2",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-17",
        "activeframes": "4\u20146"
      },
      {
        "movename": "Jab 3",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "3.8",
        "shieldlag": "10",
        "shieldstun": "5",
        "advantage": "-21",
        "activeframes": "5\u20147"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "5/7/9...",
        "basedamage": "0.4",
        "shieldlag": "4",
        "shieldstun": "3",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "1.6",
        "shieldlag": "9",
        "shieldstun": "3",
        "advantage": "-31",
        "activeframes": "7\u20148"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "28",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "9.0/7.0",
        "shieldlag": "8/7",
        "shieldstun": "9/7",
        "advantage": "-12/-14",
        "activeframes": "7\u20149"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "10.0",
        "shieldlag": "8",
        "shieldstun": "10",
        "advantage": "-10",
        "activeframes": "11\u201414"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "6.0/5.0/4.0",
        "shieldlag": "7/6/6",
        "shieldstun": "6/6/5",
        "advantage": "-19/-19",
        "activeframes": "12\u201417(18\u201421)"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "12.0/8.0",
        "shieldlag": "10/7",
        "shieldstun": "11/8",
        "advantage": "-16",
        "activeframes": "9\u201412(13\u201420)"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "52",
        "landinglag": "--",
        "notes": "Charge hold is frame 9",
        "startup": "19",
        "basedamage": "16.0",
        "shieldlag": "12",
        "shieldstun": "11",
        "advantage": "-22",
        "activeframes": "19\u201422"
      },
      {
        "movename": "Up Smash",
        "totalframes": "65",
        "landinglag": "--",
        "notes": "Charge hold is frame 6",
        "startup": "9/13/15/17/19/21/23/25/26",
        "basedamage": "1.0/1.5/3.6",
        "shieldlag": "4/4/10",
        "shieldstun": "2/**/4",
        "advantage": "-35",
        "activeframes": "9\u201410/13/15/17/19/21/23/25/26\u201427"
      },
      {
        "movename": "Down Smash",
        "totalframes": "46",
        "landinglag": "--",
        "notes": "Charge hold is frame 2",
        "startup": "13",
        "basedamage": "15.0",
        "shieldlag": "10",
        "shieldstun": "10",
        "advantage": "-23",
        "activeframes": "13\u201417"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "47",
        "landinglag": "16",
        "notes": "Autocancels on frame 1-9 and 39 onward",
        "startup": "10/13/16/19/22/25/28/31",
        "basedamage": "0.8/4.2",
        "shieldlag": "4/10",
        "shieldstun": "2/3",
        "advantage": "-14/-13",
        "activeframes": "10-11/13-14/16-17/19-20/22-23/25-26/28-29/31-32"
      },
      {
        "movename": "Forward Air",
        "totalframes": "51",
        "landinglag": "11",
        "notes": "Autocancels on frame 1-2 and 37 onward",
        "startup": "15",
        "basedamage": "15.0/12.0",
        "shieldlag": "13/10",
        "shieldstun": "5/5",
        "advantage": "-6/-6",
        "activeframes": "15\u201417(18)"
      },
      {
        "movename": "Back Air",
        "totalframes": "43",
        "landinglag": "18",
        "notes": "Autocancels on frame 1-7 and 37 onward",
        "startup": "8/12/16",
        "basedamage": "1.6/4.8",
        "shieldlag": "4/6",
        "shieldstun": "2/3",
        "advantage": "-16/-15",
        "activeframes": "8\u20149/12\u201413/16\u201417"
      },
      {
        "movename": "Up Air",
        "totalframes": "33",
        "landinglag": "12",
        "notes": "Autocancels on frame 35 onward",
        "startup": "7/9",
        "basedamage": "1.6/5.8",
        "shieldlag": "4/6",
        "shieldstun": "2/3",
        "advantage": "-10/-9",
        "activeframes": "7\u20148/9\u201411"
      },
      {
        "movename": "Down Air",
        "totalframes": "56",
        "landinglag": "27",
        "notes": "Landing hit on frame 1. Autocancels on frame 55 onward",
        "startup": "15",
        "basedamage": "10.0/2.0",
        "shieldlag": "8/4",
        "shieldstun": "4/3",
        "advantage": "-23",
        "activeframes": "15\u201417(18\u201445)/1\u20143"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Egg Firing)",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Transitions to Blaster on frame 20.",
        "startup": "13",
        "basedamage": "5.4/4.6/3.8",
        "shieldlag": "6/6/5",
        "shieldstun": "3/3/2",
        "advantage": "-27",
        "activeframes": "13\u201422(23\u201452/53\u2014102)"
      },
      {
        "movename": "Breegull Blaster",
        "totalframes": "24",
        "landinglag": "--",
        "notes": "Taking out Kazooie is a 28 frame animation. Putting her away is 11 frames.",
        "startup": "4(+28)",
        "basedamage": "2.4 \u2014 0.8",
        "shieldlag": "5\u20144",
        "shieldstun": "2\u20142",
        "advantage": "-13 \u2014 -14",
        "activeframes": "4\u20146/7\u20149/10\u201415/16\u201418"
      },
      {
        "movename": "Side B (Wonderwing)",
        "totalframes": "82",
        "landinglag": "--",
        "notes": "Invincible on frames 18-53. Wonderwing is specially designed to lose to grab trades.",
        "startup": "18",
        "basedamage": "22.0/16.0",
        "shieldlag": "16/11",
        "shieldstun": "10/5",
        "advantage": "-54",
        "activeframes": "18\u201430(31\u201453)"
      },
      {
        "movename": "Up B (Shock Spring Jump)",
        "totalframes": "42",
        "landinglag": "42",
        "notes": "Invulnerable on frame 15-17. Can be charged an additional 16 frames. Does not place Banjo in a helpless state.",
        "startup": "15",
        "basedamage": "3.0",
        "shieldlag": "5",
        "shieldstun": "2",
        "advantage": "-20",
        "activeframes": "**"
      },
      {
        "movename": "Down B (Rear Egg)",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "Damage varies slightly based on velocity. Explodes 1 frame after contact.",
        "startup": "10",
        "basedamage": "0.5/8.5",
        "shieldlag": "--/-7",
        "shieldstun": "--/-3",
        "advantage": "-23",
        "activeframes": "10\u2014143/1"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "total frames includes 14 frames of hitlag (plus one in 1v1)",
        "startup": "1",
        "basedamage": "1.4"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "9/11",
        "basedamage": "5.4/3.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "53",
        "landinglag": "--",
        "notes": "--",
        "startup": "36",
        "basedamage": "11.4"
      },
      {
        "movename": "Up Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "13/15",
        "basedamage": "5.4/3.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "--",
        "startup": "34",
        "basedamage": "5.6"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "45",
        "landinglag": "**",
        "notes": "Invulnerable on frame 3-30"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "62",
        "landinglag": "**",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "69",
        "landinglag": "**",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "75",
        "landinglag": "**",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "88",
        "landinglag": "**",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "97",
        "landinglag": "**",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "106",
      "Gravity": "0.11",
      "Walk Speed": "1.06",
      "Run Speed": "2.18",
      "Initial Dash": "1.68",
      "Air Speed": "0.92",
      "Total Air Acceleration": "**",
      "SH / FH / SHFF / FHFF Frames": "36 / 44 / 25 / 31",
      "Fall Speed / Fast Fall Speed": "1.76 / 2.816",
      "Out of Shield, Up Smash": "9 frames",
      "Out of Shield, Up Air": "10 frames",
      "Out of Shield, Back Air": "11 frames",
      "Shield Grab (Grab, post-Shieldstun)": "11 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "bayonetta": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "Transitions to jab 2 as early as frame 15",
        "startup": "9",
        "basedamage": "1.4",
        "shieldlag": "4",
        "shieldstun": "3",
        "advantage": "-19",
        "activeframes": "9\u201412"
      },
      {
        "movename": "Jab 2",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "Transitions to jab 3 as early as frame 14",
        "startup": "7",
        "basedamage": "1.4",
        "shieldlag": "4",
        "shieldstun": "3",
        "advantage": "-21",
        "activeframes": "7\u20148"
      },
      {
        "movename": "Jab 3",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "Transitions to rapid jab as early as frame 17",
        "startup": "7",
        "basedamage": "2.2",
        "shieldlag": "6",
        "shieldstun": "3",
        "advantage": "-29",
        "activeframes": "7\u20148"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "6/10/14",
        "basedamage": "0.5/0.2",
        "shieldlag": "4",
        "shieldstun": "4",
        "advantage": "**",
        "activeframes": "**"
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "62",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "5.0",
        "shieldlag": "10",
        "shieldstun": "6",
        "advantage": "-45",
        "activeframes": "11\u201412"
      },
      {
        "movename": "Forward Tilt 1",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "Transitions to next hit as early as frame 16",
        "startup": "12",
        "basedamage": "3.0",
        "shieldlag": "5",
        "shieldstun": "4",
        "advantage": "-15",
        "activeframes": "12"
      },
      {
        "movename": "Forward Tilt 2",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "Transitions to next hit as early as frame 16",
        "startup": "12",
        "basedamage": "3.0",
        "shieldlag": "5",
        "shieldstun": "4",
        "advantage": "-23",
        "activeframes": "12"
      },
      {
        "movename": "Forward Tilt 3",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "14",
        "basedamage": "7.0",
        "shieldlag": "7",
        "shieldstun": "7",
        "advantage": "-21",
        "activeframes": "14\u201415"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "9/15",
        "basedamage": "1.5/6.0",
        "shieldlag": "--",
        "shieldstun": "4/9",
        "advantage": "-19/-10",
        "activeframes": "9\u201411(12\u201413)/15"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "28",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "5.0/6.0",
        "shieldlag": "6/6",
        "shieldstun": "6/6",
        "advantage": "-15",
        "activeframes": "7\u20148"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "10.0/8.0",
        "shieldlag": "8/7",
        "shieldstun": "10/8",
        "advantage": "-17",
        "activeframes": "15\u201420(21\u201426)"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "66",
        "landinglag": "--",
        "notes": "Charge hold is frame 2",
        "startup": "17",
        "basedamage": "16.0/14.0",
        "shieldlag": "14/10",
        "shieldstun": "11/10",
        "advantage": "-38/-39",
        "activeframes": "17\u201419"
      },
      {
        "movename": "Up Smash",
        "totalframes": "64",
        "landinglag": "--",
        "notes": "Charge hold is frame 6",
        "startup": "18",
        "basedamage": "17.0/16.0/15.0",
        "shieldlag": "11/10/10",
        "shieldstun": "11/11/10",
        "advantage": "-35",
        "activeframes": "18\u201419(20\u201421/22\u201423)"
      },
      {
        "movename": "Down Smash",
        "totalframes": "68",
        "landinglag": "--",
        "notes": "First hit refers to Bayonetta's stomp and is ground only. Charge hold is frame 8.",
        "startup": "20/25",
        "basedamage": "5.0/16.0/15.0",
        "shieldlag": "6/13/12",
        "shieldstun": "4/11/10",
        "advantage": "-32",
        "activeframes": "20\u201421/25(26\u201428)"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "32",
        "landinglag": "10/18",
        "notes": "Second landing lag is extended version. Autocancels on frame 34 onward",
        "startup": "9",
        "basedamage": "8.0/6.0/3.0",
        "shieldlag": "7/6/5",
        "shieldstun": "4/3/2",
        "advantage": "-6/-7/-16",
        "activeframes": "9\u201417(18\u201425) (full extended 26\u201466)"
      },
      {
        "movename": "Forward Air 1",
        "totalframes": "37",
        "landinglag": "12",
        "notes": "Autocancels on frame 1-2 and 30 onward",
        "startup": "7",
        "basedamage": "4.0",
        "shieldlag": "5",
        "shieldstun": "5",
        "advantage": "-7",
        "activeframes": "7\u20149"
      },
      {
        "movename": "Forward Air 2",
        "totalframes": "39",
        "landinglag": "12",
        "notes": "Autocancels on frame 32 onward",
        "startup": "7",
        "basedamage": "3.3",
        "shieldlag": "5",
        "shieldstun": "4",
        "advantage": "-8",
        "activeframes": "7\u20149"
      },
      {
        "movename": "Forward Air 3",
        "totalframes": "46",
        "landinglag": "12",
        "notes": "Autocancels on frame 35 onward",
        "startup": "12",
        "basedamage": "7.0",
        "shieldlag": "10",
        "shieldstun": "7",
        "advantage": "-5",
        "activeframes": "12\u201415"
      },
      {
        "movename": "Back Air",
        "totalframes": "34",
        "landinglag": "10",
        "notes": "Autocancels on frame 29 onward",
        "startup": "11",
        "basedamage": "13.0/10.0",
        "shieldlag": "9/8",
        "shieldstun": "5/4",
        "advantage": "-5/-6",
        "activeframes": "11\u201414"
      },
      {
        "movename": "Up Air",
        "totalframes": "29",
        "landinglag": "8/16",
        "notes": "Second landing lag is extended version. Autocancels on frame 1-2 and 26 onward",
        "startup": "9",
        "basedamage": "7.5/3.0",
        "shieldlag": "7/5",
        "shieldstun": "3/2",
        "advantage": "-5/-14",
        "activeframes": "9\u201418 (full extended 21\u201465)"
      },
      {
        "movename": "Down Air",
        "totalframes": "52",
        "landinglag": "30",
        "notes": "Landing hit on frame 1. Autocancels on frame 50 onward",
        "startup": "18",
        "basedamage": "7.0/8.0/9.0/5.0",
        "shieldlag": "7/7/7/6",
        "shieldstun": "3/3/4/6",
        "advantage": "-23",
        "activeframes": "18\u201424(25\u201435)/1\u20142"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Bullet Climax)",
        "totalframes": "75",
        "landinglag": "--",
        "notes": "Reaches full charge on 42. Can only shield cancel as early as frame 45. Repeated shots occur on the same pattern. Alternating 10 and 5 frames later.",
        "startup": "17/22/32/37",
        "basedamage": "1.3",
        "shieldlag": "4",
        "shieldstun": "2",
        "advantage": "-32",
        "activeframes": "17\u201426/22\u201431/32\u201441/37\u201446"
      },
      {
        "movename": "Neutral B, Full Charge (Bullet Climax, Full Charge)",
        "totalframes": "100",
        "landinglag": "--",
        "notes": "Repeated shots occur on the same pattern. Alternating 10 and 5 frames later.",
        "startup": "42/47/57/62",
        "basedamage": "2.7",
        "shieldlag": "7",
        "shieldstun": "2",
        "advantage": "-29",
        "activeframes": "**"
      },
      {
        "movename": "Side B (Heel Slide)",
        "totalframes": "71/72",
        "landinglag": "--",
        "notes": "Second kick occurs only when button is held. Will not occur if first is blocked. 33 endlag when slide is blocked.",
        "startup": "15/51",
        "basedamage": "8.0/7.0/5.0",
        "shieldlag": "7/7/6",
        "shieldstun": "8/7/6",
        "advantage": "-25/-26/-15",
        "activeframes": "15\u201416/**/51\u201455"
      },
      {
        "movename": "After Burner Kick",
        "totalframes": "31",
        "landinglag": "20",
        "notes": "--",
        "startup": "7",
        "basedamage": "6.0/7.0/6.0",
        "shieldlag": "9/9/9",
        "shieldstun": "6/7/6",
        "advantage": "-18",
        "activeframes": "**"
      },
      {
        "movename": "After Burner Kick, Down",
        "totalframes": "43",
        "landinglag": "40",
        "notes": "21 endlag on hit. Landing hit occurs on frame 1-2",
        "startup": "8",
        "basedamage": "6.5/5.0",
        "shieldlag": "8/7",
        "shieldstun": "7/6",
        "advantage": "-14/-33",
        "activeframes": "**"
      },
      {
        "movename": "Up B (Witch Twist)",
        "totalframes": "31",
        "landinglag": "18",
        "notes": "Aerial version has 1.0 less damage on air version first hit.",
        "startup": "6/11/14/17/20/23/27",
        "basedamage": "3.0/0.2/3.0",
        "shieldlag": "5/4/5",
        "shieldstun": "4/2/4",
        "advantage": "+0",
        "activeframes": "6/11/14/17/20/23/27\u201428"
      },
      {
        "movename": "Down B (Witch Time)",
        "totalframes": "66",
        "landinglag": "--",
        "notes": "Counters on frames 8-17. Bat Within reduced counter 18-29",
        "startup": "8 (start of counter)",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "8\u201417 (counter)"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "**"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "**"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "**"
      },
      {
        "movename": "Pummel",
        "totalframes": "25",
        "landinglag": "--",
        "notes": "Startup and Total frames includes 20 frames of hitlag",
        "startup": "1/13",
        "basedamage": "0.6/0.7"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "14/15",
        "basedamage": "7.0/3.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "14-15",
        "basedamage": "3.0/6.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "9/10",
        "basedamage": "3.0/4.5"
      },
      {
        "movename": "Down Throw",
        "totalframes": "46",
        "landinglag": "--",
        "notes": "--",
        "startup": "20/21",
        "basedamage": "3.0/5.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 6-17. Bat within on frame 2-5."
      },
      {
        "movename": "Forward Roll",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "Invulnerable on frame 6-15. Bat within on frame 2-5."
      },
      {
        "movename": "Backward Roll",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "Invulnerable on frame 7-16. Bat within on frame 3-6."
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "45",
        "landinglag": "10",
        "notes": "Invulnerable on frame 5-31. Bat within on frame 1-4."
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "63",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 5-21. Bat within on frame 1-4."
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "69",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 5-21. Bat within on frame 1-4."
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "74",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 5-21. Bat within on frame 1-4."
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "85",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 5-21. Bat within on frame 1-4."
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "93",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 5-21. Bat within on frame 1-4."
      }
    ],
    "stats": {
      "Weight": "81",
      "Gravity": "0.120",
      "Walk Speed": "0.945",
      "Run Speed": "1.76",
      "Initial Dash": "1.936",
      "Air Speed": "1.019",
      "Total Air Acceleration": "0.095",
      "SH / FH / SHFF / FHFF Frames": "38 / 50 / 27 / 35",
      "Fall Speed / Fast Fall Speed": "1.77 / 2.832",
      "Out of Shield, Up B": "6 frames",
      "Out of Shield, Forward Air or Side B": "10 frames",
      "Out of Shield, Neutral Air or Up Air": "12 frames",
      "Shield Grab (Grab, post-Shieldstun)": "11 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "bowser": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "25",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 10. Arm intangibility on frame 7-8",
        "startup": "7",
        "basedamage": "4.0",
        "shieldlag": "8",
        "shieldstun": "5",
        "advantage": "-13",
        "activeframes": "7\u20148"
      },
      {
        "movename": "Jab 2",
        "totalframes": "25",
        "landinglag": "--",
        "notes": "Arm intangibility on frame 9-11",
        "startup": "9",
        "basedamage": "7.0",
        "shieldlag": "12",
        "shieldstun": "7",
        "advantage": "-9",
        "activeframes": "9\u201411"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "Damage based heavy armor (4%) on frame 7-9. Arm intangibility on frame 10-14",
        "startup": "10",
        "basedamage": "13.0",
        "shieldlag": "9",
        "shieldstun": "12",
        "advantage": "-15",
        "activeframes": "10\u201414"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "Damage based heavy armor (4%) on frame 8-10. Arm intangibility on frame 11-16",
        "startup": "11",
        "basedamage": "11.0",
        "shieldlag": "8",
        "shieldstun": "10",
        "advantage": "-19",
        "activeframes": "11\u201416"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "Damage based heavy armor (4%) on frame 7-9. Arm intangibility on frame 10-12 and 15-17",
        "startup": "10/15",
        "basedamage": "7.0/8.0",
        "shieldlag": "7/7",
        "shieldstun": "-/8",
        "advantage": "-22",
        "activeframes": "10\u201412/15\u201417"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "12.0/10.0",
        "shieldlag": "9/8",
        "shieldstun": "11/10",
        "advantage": "-33",
        "activeframes": "11\u201414/15\u201420"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "69",
        "landinglag": "--",
        "notes": "Damage based heavy armor (10%) frame 17-19. Leg Invincible 20-25. Charge hold frame 3",
        "startup": "22",
        "basedamage": "23.0",
        "shieldlag": "14",
        "shieldstun": "15",
        "advantage": "-32",
        "activeframes": "22\u201423"
      },
      {
        "movename": "Up Smash",
        "totalframes": "57",
        "landinglag": "--",
        "notes": "Damage based heavy armor (8%) frame 11-13 and 28-31. Invincible 14-27. Charge hold frame 9",
        "startup": "16/37",
        "basedamage": "22.0/16.0/12.0",
        "shieldlag": "13/10/9",
        "shieldstun": "14/11/8",
        "advantage": "-27/-30/-12",
        "activeframes": "16\u201423/37"
      },
      {
        "movename": "Down Smash",
        "totalframes": "72",
        "landinglag": "--",
        "notes": "Damage based heavy armor (8%) frame 5-11. Charge hold is frame 4",
        "startup": "12/28",
        "basedamage": "16.0/15.0",
        "shieldlag": "10/10",
        "shieldstun": "11/10",
        "advantage": "-49/-34",
        "activeframes": "12\u201413/28\u201429"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "47",
        "landinglag": "15",
        "notes": "Autocancels on frame 1-3 and 41 onward",
        "startup": "8/14/18/**",
        "basedamage": "6.0",
        "shieldlag": "6",
        "shieldstun": "3",
        "advantage": "-12",
        "activeframes": "8\u201429/14\u201429/18\u201429/18\u201429"
      },
      {
        "movename": "Forward Air",
        "totalframes": "41",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-3 and 31 onward",
        "startup": "11",
        "basedamage": "13.0/12.0",
        "shieldlag": "9/8",
        "shieldstun": "5/4",
        "advantage": "-9/-10",
        "activeframes": "11\u201414"
      },
      {
        "movename": "Back Air",
        "totalframes": "44",
        "landinglag": "24",
        "notes": "Autocancels on frame 1-2 and 31 onward",
        "startup": "9",
        "basedamage": "19.0",
        "shieldlag": "12",
        "shieldstun": "7",
        "advantage": "-17",
        "activeframes": "9\u201411"
      },
      {
        "movename": "Up Air",
        "totalframes": "44",
        "landinglag": "17",
        "notes": "Head intangibility on frame 3-13. Autocancels on frame 1-2 and 40 onward",
        "startup": "9",
        "basedamage": "15.0",
        "shieldlag": "10",
        "shieldstun": "5",
        "advantage": "-12",
        "activeframes": "9\u201413"
      },
      {
        "movename": "Down Air",
        "totalframes": "77",
        "landinglag": "35",
        "notes": "Landing hit on frame 1. Autocancels on frame 1-13 and 70 onward",
        "startup": "17",
        "basedamage": "16.0/**/2.0",
        "shieldlag": "10/**/4",
        "shieldstun": "6/**/3",
        "advantage": "-31",
        "activeframes": "17\u201424/25\u201449/1\u20146"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Fire Breath)",
        "totalframes": "77",
        "landinglag": "--",
        "notes": "Total frames is minimum usage. Endlag is 31 frames on release.",
        "startup": "23/30/37/44...",
        "basedamage": "1.8",
        "shieldlag": "4",
        "shieldstun": "2",
        "advantage": "--",
        "activeframes": "23/30/37/44..."
      },
      {
        "movename": "Side B (Flying Slam)",
        "totalframes": "52",
        "landinglag": "--",
        "notes": "40 frames endlag after a slam, but can be cancelled by landing on a platform. 23 frames of invulnerability after a successful grab. Whether Bowsor or his opponent has more control over the direction of the slam is determined by whoever has less damage.",
        "startup": "6",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "6"
      },
      {
        "movename": "Up B (Whirling Fortress)",
        "totalframes": "81",
        "landinglag": "18",
        "notes": "--",
        "startup": "6/11/16/21/26/31/36/39",
        "basedamage": "1.0/6.0",
        "shieldlag": "4/6",
        "shieldstun": "2/6",
        "advantage": "-36",
        "activeframes": "6/11/16/21/26/31/36/39"
      },
      {
        "movename": "Up B, Air (Whirling Fortress, Air)",
        "totalframes": "--",
        "landinglag": "36",
        "notes": "Mash special button for more height",
        "startup": "6/8/12/16/20/24/28/32/36/40/44/48",
        "basedamage": "7.0/1.0/2.0",
        "shieldlag": "7/3/6",
        "shieldstun": "-/2/3",
        "advantage": "--",
        "activeframes": "6/8/12/16/20/24/28/32/36/40/44/48"
      },
      {
        "movename": "Down B (Bowser Bomb)",
        "totalframes": "66",
        "landinglag": "--",
        "notes": "Landing hit on frame 1.",
        "startup": "11/37.../1",
        "basedamage": "4.0/20.0/11.0",
        "shieldlag": "5/12/8",
        "shieldstun": "5/18/-",
        "advantage": "--",
        "activeframes": "11/37.../1\u20142"
      },
      {
        "movename": "Down B, Air (Bowser Bomb, Air)",
        "totalframes": "--",
        "landinglag": "55",
        "notes": "Landing hit on frame 1.",
        "startup": "31.../1",
        "basedamage": "20.0/11.0",
        "shieldlag": "12/8",
        "shieldstun": "18/-",
        "advantage": "--",
        "activeframes": "31.../1\u20142"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "21",
        "landinglag": "--",
        "notes": "Total frames include 15 frames of hitlag",
        "startup": "2",
        "basedamage": "1.6"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "58",
        "landinglag": "--",
        "notes": "--",
        "startup": "36",
        "basedamage": "12.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "19",
        "basedamage": "12.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "74",
        "landinglag": "--",
        "notes": "--",
        "startup": "21/25/29/33/37/41/45/49/57",
        "basedamage": "0.5/2.0/6.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "84",
        "landinglag": "--",
        "notes": "--",
        "startup": "35/37",
        "basedamage": "10.0/4.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "23/28",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-18"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-16"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-17"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "46",
        "landinglag": "10",
        "notes": "Invulnerable on frame 4-32"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "63",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "67",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "75",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "88",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "95",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22"
      }
    ],
    "stats": {
      "Weight": "135",
      "Gravity": "0.125",
      "Walk Speed": "0.901",
      "Run Speed": "1.971",
      "Initial Dash": "2.255",
      "Air Speed": "1.155",
      "Total Air Acceleration": "0.058",
      "SH / FH / SHFF / FHFF Frames": "31 / 45 / 22 / 31",
      "Fall Speed / Fast Fall Speed": "1.77 / 2.832",
      "Out of Shield, Up B": "6 frames",
      "Out of Shield, Side B (Air)": "9 frames",
      "Out of Shield, Neutral Air": "11 frames",
      "Shield Grab (Grab, post-Shieldstun)": "12 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "bowser_jr": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Transitions to jab 2 as early as frame 7",
        "startup": "4",
        "basedamage": "2.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-12",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Jab 2",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Transitions to rapid jab as early as frame 7",
        "startup": "4",
        "basedamage": "2.0",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-22",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "4/7/10...",
        "basedamage": "0.5",
        "shieldlag": "4",
        "shieldstun": "5",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "3.0",
        "shieldlag": "10",
        "shieldstun": "4",
        "advantage": "-32",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "6.0/8.0",
        "shieldlag": "6/7",
        "shieldstun": "6/8",
        "advantage": "-18/-16",
        "activeframes": "7\u20149"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "6.0",
        "shieldlag": "7",
        "shieldstun": "6",
        "advantage": "-19",
        "activeframes": "7\u201414"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "4/12/23",
        "basedamage": "2.0/6.0",
        "shieldlag": "4/7",
        "shieldstun": "3/6",
        "advantage": "-11",
        "activeframes": "4\u20146/12\u201414/23\u201425"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "8/11/14/17/20/25",
        "basedamage": "1.8/4.0",
        "shieldlag": "4/8",
        "shieldstun": "3/5",
        "advantage": "-17",
        "activeframes": "8/11/14/17/20/25\u201426"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "Charge hold is frame 5",
        "startup": "18/21/24/27/30/35",
        "basedamage": "1.0/11.0",
        "shieldlag": "4/13",
        "shieldstun": "2/8",
        "advantage": "-12",
        "activeframes": "18/21/24/27/30/35\u201437"
      },
      {
        "movename": "Up Smash",
        "totalframes": "53",
        "landinglag": "--",
        "notes": "Charge hold is frame 4",
        "startup": "7/9/12/15/18/22",
        "basedamage": "1.0/1.3/6.0",
        "shieldlag": "4/4/11",
        "shieldstun": "-/2/5",
        "advantage": "-26",
        "activeframes": "7\u20148/9/12/15/18/22\u201423"
      },
      {
        "movename": "Down Smash",
        "totalframes": "59",
        "landinglag": "--",
        "notes": "Charge hold is frame 2",
        "startup": "15",
        "basedamage": "18.0",
        "shieldlag": "14",
        "shieldstun": "12",
        "advantage": "-32",
        "activeframes": "15\u201417"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "43",
        "landinglag": "9",
        "notes": "Autocancels on frame 1-6 and 42 onward",
        "startup": "7",
        "basedamage": "6.5/5.5/3.5/8.0/7.0/5.0",
        "shieldlag": "6/6/5/7/7/6",
        "shieldstun": "3/3/2/4/3/3",
        "advantage": "-6/-7/-7/-5/-6/-6",
        "activeframes": "7\u20148(9\u201413/14\u201419)"
      },
      {
        "movename": "Forward Air",
        "totalframes": "43",
        "landinglag": "16",
        "notes": "Landing hit on frame 2. Autocancels on frame 1-2 and 34 onward",
        "startup": "10",
        "basedamage": "11.0/7.0/2.0",
        "shieldlag": "8/7/9",
        "shieldstun": "4/3/3",
        "advantage": "-11",
        "activeframes": "10\u201413(14\u201417/18\u201423)/2"
      },
      {
        "movename": "Back Air",
        "totalframes": "45",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-11 and 30 onward",
        "startup": "12",
        "basedamage": "14.0/8.0",
        "shieldlag": "10/7",
        "shieldstun": "5/4",
        "advantage": "-9/-10",
        "activeframes": "12\u201413(14\u201418)"
      },
      {
        "movename": "Up Air",
        "totalframes": "25",
        "landinglag": "9",
        "notes": "Autocancels on frame 16 onward",
        "startup": "6",
        "basedamage": "10.0",
        "shieldlag": "8",
        "shieldstun": "4",
        "advantage": "-5",
        "activeframes": "6\u20149(10\u201413)"
      },
      {
        "movename": "Down Air",
        "totalframes": "56",
        "landinglag": "15",
        "notes": "Landing hit on frame 1. Autocancels on frame 55 onward",
        "startup": "15/18/21/24/27/30/33/36/39",
        "basedamage": "1.5/2.5/2.0",
        "shieldlag": "4/10/9",
        "shieldstun": "2/2/3",
        "advantage": "-11",
        "activeframes": "15/18/21/24/27/30/33/36/39/1\u20142"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Clown Cannon)",
        "totalframes": "72-132",
        "landinglag": "--",
        "notes": "\"late\" hitbox is when the cannonball starts losing altitude",
        "startup": "37-97",
        "basedamage": "10.0\u201420.0/7.0\u201414.0",
        "shieldlag": "8\u201412/7\u201410",
        "shieldstun": "4\u20136/3\u20145",
        "advantage": "-23 to -17",
        "activeframes": "**"
      },
      {
        "movename": "Side B (Clown Kart Dash)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "Damage based heavy armor begins on frame 20. Kart Jump can be cancelled into any attack on any frame but is otherwise a 33 frame animation. Damage depends on travel speed",
        "startup": "23",
        "basedamage": "4.0\u20147.3",
        "shieldlag": "7\u20148",
        "shieldstun": "5\u20147",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Clown Kart Dash (spinout)",
        "totalframes": "58",
        "landinglag": "--",
        "notes": "Damage also depends on travel speed",
        "startup": "3",
        "basedamage": "16.3\u201410.0",
        "shieldlag": "11\u20148",
        "shieldstun": "15\u201410",
        "advantage": "-40",
        "activeframes": "3\u201414"
      },
      {
        "movename": "Up B (Abandon Ship)",
        "totalframes": "--",
        "landinglag": "26",
        "notes": "Earliest you can hammer or dodge is on frame 26",
        "startup": "21/56",
        "basedamage": "5.0/13.0",
        "shieldlag": "6/9",
        "shieldstun": "3/5",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Abandon Ship (Hammer)",
        "totalframes": "39",
        "landinglag": "37",
        "notes": "--",
        "startup": "8/13",
        "basedamage": "5.0/13.0",
        "shieldlag": "6/9",
        "shieldstun": "3/5",
        "advantage": "--",
        "activeframes": "8\u20149/13\u201414"
      },
      {
        "movename": "Down B (Mechakoopa)",
        "totalframes": "67",
        "landinglag": "--",
        "notes": "Mechakoopa activates on frame 48. Explodes 28 frames after latching. Deactivates when contacting a shield",
        "startup": "--",
        "basedamage": "4.0",
        "shieldlag": "2",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "--",
        "startup": "14",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Total frames include 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "14/16",
        "basedamage": "3.0/7.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "61",
        "landinglag": "--",
        "notes": "--",
        "startup": "24",
        "basedamage": "11.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "18",
        "basedamage": "7.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "77",
        "landinglag": "--",
        "notes": "--",
        "startup": "16/21/26/31/36/41/46/50",
        "basedamage": "1.2/4.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "48",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-30"
      },
      {
        "movename": "Abandon Ship Air Dodge",
        "totalframes": "33",
        "landinglag": "33",
        "notes": "Invulnerable on frame 3-30"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "67",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "77",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "82",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "93",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "108",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "108",
      "Gravity": "0.092",
      "Walk Speed": "0.924",
      "Run Speed": "1.566",
      "Initial Dash": "1.76",
      "Air Speed": "1.134",
      "Total Air Acceleration": "0.08",
      "SH / FH / SHFF / FHFF Frames": "38 / 52 / 26 / 36",
      "Fall Speed / Fast Fall Speed": "1.65 / 2.64",
      "Out of Shield, Up Smash": "7 frames",
      "Out of Shield, Up Air": "9 frames",
      "Out of Shield, Neutral Air": "10 frames",
      "Shield Grab (Grab, post-Shieldstun)": "15 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "captain_falcon": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "17",
        "landinglag": "--",
        "notes": "Transition to Jab 2 as early as frame 5.",
        "startup": "3",
        "basedamage": "1.5",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-11",
        "activeframes": "3"
      },
      {
        "movename": "Jab 2",
        "totalframes": "18",
        "landinglag": "--",
        "notes": "Transitions to Jab 3 or Rapid Jab as early as frame 8.",
        "startup": "5",
        "basedamage": "1.5",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-10",
        "activeframes": "5"
      },
      {
        "movename": "Jab 3",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "5.0",
        "shieldlag": "12",
        "shieldstun": "6",
        "advantage": "-20",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "5/7/9",
        "basedamage": "0.6",
        "shieldlag": "4",
        "shieldstun": "-",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "3.0",
        "shieldlag": "10",
        "shieldstun": "4",
        "advantage": "-39",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Damage and shieldstun increases by 1.0 when angled",
        "startup": "7",
        "basedamage": "8.0/9.0",
        "shieldlag": "7/7",
        "shieldstun": "8/9",
        "advantage": "-14/-13",
        "activeframes": "7\u201410"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "Right foot invincible frames 14-17.",
        "startup": "14",
        "basedamage": "11.0",
        "shieldlag": "8",
        "shieldstun": "10",
        "advantage": "-12",
        "activeframes": "14\u201417"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "10.0",
        "shieldlag": "8",
        "shieldstun": "10",
        "advantage": "-13",
        "activeframes": "11\u201412"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "10.0/6.0",
        "shieldlag": "10/8",
        "shieldstun": "17/11",
        "advantage": "-13",
        "activeframes": "7\u20149(10\u201416)"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "59",
        "landinglag": "--",
        "notes": "Charge hold is frame 11",
        "startup": "19",
        "basedamage": "19.0/20.0",
        "shieldlag": "12/12",
        "shieldstun": "13/13",
        "advantage": "-27",
        "activeframes": "19\u201422"
      },
      {
        "movename": "Up Smash",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "Right foot is invincible frames 22-23, left foot invincible frames 28-29. Charge hold is frame 8.",
        "startup": "22/28",
        "basedamage": "7.0/12.0/14.0",
        "shieldlag": "7/9/10",
        "shieldstun": "6/8/10",
        "advantage": "-7",
        "activeframes": "22(23)/28\u201429"
      },
      {
        "movename": "Down Smash",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "Charge hold is frame 11",
        "startup": "19/29",
        "basedamage": "14.0/18.0",
        "shieldlag": "10/11",
        "shieldstun": "10/12",
        "advantage": "-19/-7",
        "activeframes": "19\u201420/29\u201430"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "39",
        "landinglag": "7",
        "notes": "Autocancels on frame 1-3 and 32 onward",
        "startup": "7/13",
        "basedamage": "4.0/6.0",
        "shieldlag": "5/6",
        "shieldstun": "3/3",
        "advantage": "-4/-4",
        "activeframes": "7\u20148/13\u201415"
      },
      {
        "movename": "Forward Air",
        "totalframes": "45",
        "landinglag": "18",
        "notes": "Autocancels on frame 1-4 and 42 onward",
        "startup": "14",
        "basedamage": "22.0/3.0",
        "shieldlag": "17/5",
        "shieldstun": "7/2",
        "advantage": "-11/-15",
        "activeframes": "14(15\u201430)"
      },
      {
        "movename": "Back Air",
        "totalframes": "35",
        "landinglag": "10",
        "notes": "Autocancels on frame 1-4 and 19 onward",
        "startup": "10",
        "basedamage": "13.0/8.0",
        "shieldlag": "9/6",
        "shieldstun": "5/3",
        "advantage": "-5/-7",
        "activeframes": "10\u201411(12\u201415)"
      },
      {
        "movename": "Up Air",
        "totalframes": "31",
        "landinglag": "10",
        "notes": "Autocancels on frame 24 onward",
        "startup": "7",
        "basedamage": "10.0/9.0/8.0",
        "shieldlag": "8/7/7",
        "shieldstun": "4/4/4",
        "advantage": "-6/-6/-6",
        "activeframes": "7\u201410(11\u201412)"
      },
      {
        "movename": "Down Air",
        "totalframes": "44",
        "landinglag": "12",
        "notes": "Autocancels on frame 1-3 and 39 onward",
        "startup": "16",
        "basedamage": "14.0",
        "shieldlag": "10",
        "shieldstun": "5",
        "advantage": "-7",
        "activeframes": "16\u201418"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Falcon Punch)",
        "totalframes": "103/117",
        "landinglag": "--",
        "notes": "--",
        "startup": "53/62",
        "basedamage": "25.0/28.0",
        "shieldlag": "17/17",
        "shieldstun": "22/24",
        "advantage": "-28/-31",
        "activeframes": "53\u201457/62\u201466"
      },
      {
        "movename": "Side B (Raptor Boost)",
        "totalframes": "27/71",
        "landinglag": "--",
        "notes": "Startup is 5 upon reaching target. On hit total frames is 27. Proximity sensor is active starting on 10. Total frames on a miss is 71. The light armor activates on frame 1 of reaching a target.",
        "startup": "5(+10)",
        "basedamage": "10.0",
        "shieldlag": "12",
        "shieldstun": "10",
        "advantage": "-12",
        "activeframes": "**"
      },
      {
        "movename": "Side B, Air (Raptor Boost, Air)",
        "totalframes": "--",
        "landinglag": "22",
        "notes": "39 endlag on hit. Startup is 5 upon reaching a target. Proximity sensor active starting on 19.",
        "startup": "5(+19)",
        "basedamage": "10.0",
        "shieldlag": "12",
        "shieldstun": "10",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Up B (Falcon Dive)",
        "totalframes": "--",
        "landinglag": "24",
        "notes": "54 frames endlag when successful.",
        "startup": "14",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "14\u201430"
      },
      {
        "movename": "Down B (Falcon Kick)",
        "totalframes": "70/67",
        "landinglag": "--",
        "notes": "Total frames is 70 on the ground or 67 if you go over an edge.",
        "startup": "15",
        "basedamage": "15.0/11.0/7.0",
        "shieldlag": "10/8/7",
        "shieldstun": "14/10/7",
        "advantage": "-51",
        "activeframes": "15\u201418(19\u201425/26\u201435)"
      },
      {
        "movename": "Down B, Air (Falcon Kick, Air)",
        "totalframes": "58",
        "landinglag": "35",
        "notes": "Landing hit on frame 1.",
        "startup": "16",
        "basedamage": "15.0/9.0",
        "shieldlag": "12/7",
        "shieldstun": "14/9",
        "advantage": "-25",
        "activeframes": "16\u201420(21\u201426/27\u201429)/1\u20142"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "11/13",
        "basedamage": "3.5/4.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "12/13",
        "basedamage": "3.5/4.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "12/14",
        "basedamage": "4.0/5.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "6.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "21/26",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "42",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-30"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "62",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "66",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "72",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "85",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "94",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "104",
      "Gravity": "0.120",
      "Walk Speed": "0.987",
      "Run Speed": "2.552",
      "Initial Dash": "1.98",
      "Air Speed": "1.218",
      "Total Air Acceleration": "0.075",
      "SH / FH / SHFF / FHFF Frames": "34 / 48 / 24 / 34",
      "Fall Speed / Fast Fall Speed": "1.865 / 2.984",
      "Out of Shield, Neutral Air or Up Air": "10 frames",
      "Out of Shield, Back Air": "13 frames",
      "Out of Shield, Up B or Jab": "14 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "chrom": {
    "ground_attacks": [
      {
        "movename": "Jab",
        "totalframes": "22",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "6.5",
        "shieldlag": "9",
        "shieldstun": "7",
        "advantage": "-10",
        "activeframes": "5\u20147"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "10.9",
        "shieldlag": "8",
        "shieldstun": "10",
        "advantage": "-15",
        "activeframes": "8\u201410"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "10.4",
        "shieldlag": "8",
        "shieldstun": "10",
        "advantage": "-22",
        "activeframes": "6/7\u20148/9\u201411"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "21",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "9.0",
        "shieldlag": "7",
        "shieldstun": "9",
        "advantage": "-5",
        "activeframes": "7\u20148"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "12.0",
        "shieldlag": "12",
        "shieldstun": "11",
        "advantage": "-21",
        "activeframes": "13\u201416"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "53",
        "landinglag": "--",
        "notes": "Charge hold is frame 6",
        "startup": "13",
        "basedamage": "18.0",
        "shieldlag": "15",
        "shieldstun": "12",
        "advantage": "-28",
        "activeframes": "13\u201414"
      },
      {
        "movename": "Up Smash",
        "totalframes": "58",
        "landinglag": "--",
        "notes": "Forearm intangibility on frame 10-23. Charge hold is frame 4",
        "startup": "12/13/15/17/19/22",
        "basedamage": "1.0/2.0/10.0",
        "shieldlag": "5/4/9",
        "shieldstun": "2/-/7",
        "advantage": "-29",
        "activeframes": "12/13/15/17/19/22\u201423"
      },
      {
        "movename": "Down Smash",
        "totalframes": "62",
        "landinglag": "--",
        "notes": "Charge hold is frame 3",
        "startup": "6/21",
        "basedamage": "12.3/14.2",
        "shieldlag": "9/10",
        "shieldstun": "9/10",
        "advantage": "-47/-31",
        "activeframes": "6\u20147/21\u201422"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "45",
        "landinglag": "9",
        "notes": "Autocancels on frame 47 onward",
        "startup": "6/15",
        "basedamage": "4.7/6.6",
        "shieldlag": "6/6",
        "shieldstun": "3/3",
        "advantage": "-6/-6",
        "activeframes": "6\u20147/15\u201421"
      },
      {
        "movename": "Forward Air",
        "totalframes": "29",
        "landinglag": "8",
        "notes": "Autocancels on frame 31 onward",
        "startup": "10",
        "basedamage": "9.0",
        "shieldlag": "7",
        "shieldstun": "4",
        "advantage": "-4",
        "activeframes": "10\u201412"
      },
      {
        "movename": "Back Air",
        "totalframes": "35",
        "landinglag": "10",
        "notes": "Autocancels on frame 1-2 and 32 onward",
        "startup": "8",
        "basedamage": "10.9",
        "shieldlag": "10",
        "shieldstun": "4",
        "advantage": "-6",
        "activeframes": "8\u201410"
      },
      {
        "movename": "Up Air",
        "totalframes": "41",
        "landinglag": "8",
        "notes": "Autocancels on frame 1-2 and 38 onward",
        "startup": "5",
        "basedamage": "7.6",
        "shieldlag": "7",
        "shieldstun": "4",
        "advantage": "-4",
        "activeframes": "5\u201412"
      },
      {
        "movename": "Down Air",
        "totalframes": "51",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-2 and 52 onward",
        "startup": "16",
        "basedamage": "14.2",
        "shieldlag": "12",
        "shieldstun": "5",
        "advantage": "-9",
        "activeframes": "16\u201417"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Flare Blade)",
        "totalframes": "44-283",
        "landinglag": "--",
        "notes": "Startup is 10 from release. 11 frames to enter charge state.",
        "startup": "21-260",
        "basedamage": "8.0\u201450.0",
        "shieldlag": "7\u201421",
        "shieldstun": "8\u2014...",
        "advantage": "-15\u2014Shieldbreak",
        "activeframes": "21\u201424 (or 10\u201414 from release)"
      },
      {
        "movename": "Side B, Hit 1 (Double Edged Dance, Hit 1)",
        "totalframes": "39/29",
        "landinglag": "--",
        "notes": "Second total frames is from the air. Can transition to next slash as early as frame 12.",
        "startup": "9",
        "basedamage": "2.8",
        "shieldlag": "5",
        "shieldstun": "4",
        "advantage": "-26/-16(air)",
        "activeframes": "9\u201411"
      },
      {
        "movename": "Double Edged Dance, Hit 2 Neutral",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "Can transition to next slash as early as frame 8.",
        "startup": "5",
        "basedamage": "2.8",
        "shieldlag": "5",
        "shieldstun": "4",
        "advantage": "-29",
        "activeframes": "5\u20147"
      },
      {
        "movename": "Double Edged Dance, Hit 3 Neutral",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "Can transition to next slash as early as frame 7.",
        "startup": "4",
        "basedamage": "3.8",
        "shieldlag": "5",
        "shieldstun": "5",
        "advantage": "-34",
        "activeframes": "4\u20146"
      },
      {
        "movename": "Double Edged Dance, Hit 4 Neutral",
        "totalframes": "58",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "5.2",
        "shieldlag": "9",
        "shieldstun": "6",
        "advantage": "-45",
        "activeframes": "7\u20149"
      },
      {
        "movename": "Double Edged Dance, Hit 2 Up",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "Can transition to next slash as early as frame 8.",
        "startup": "4",
        "basedamage": "2.8",
        "shieldlag": "5",
        "shieldstun": "4",
        "advantage": "-30",
        "activeframes": "4\u20146"
      },
      {
        "movename": "Double Edged Dance, Hit 3 Up",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "Can transition to next slash as early as frame 8.",
        "startup": "5",
        "basedamage": "3.8",
        "shieldlag": "5",
        "shieldstun": "5",
        "advantage": "-33",
        "activeframes": "5\u20147"
      },
      {
        "movename": "Double Edged Dance, Hit 4 Up",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "6.4",
        "shieldlag": "8",
        "shieldstun": "7",
        "advantage": "-31",
        "activeframes": "6\u201410"
      },
      {
        "movename": "Double Edged Dance, Hit 3 Down",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "Can transition to next slash as early as frame 8",
        "startup": "5",
        "basedamage": "3.8",
        "shieldlag": "5",
        "shieldstun": "5",
        "advantage": "-34",
        "activeframes": "5\u20147"
      },
      {
        "movename": "Double Edged Dance, Hit 4 Down",
        "totalframes": "71",
        "landinglag": "--",
        "notes": "--",
        "startup": "7/10/13/16/19",
        "basedamage": "2.0/4.2",
        "shieldlag": "4/8",
        "shieldstun": "-/5",
        "advantage": "-47",
        "activeframes": "7/10/13/16/19\u201421"
      },
      {
        "movename": "Up B (Soaring Slash)",
        "totalframes": "--",
        "landinglag": "36",
        "notes": "Landing hit on frame 1, Super armor on frame 10-30. Ending just before he ascends",
        "startup": "10/39/53/**",
        "basedamage": "6.0/1.5/6.0/6.0",
        "shieldlag": "10/4/6/7",
        "shieldstun": "6/3/6/6",
        "advantage": "-29",
        "activeframes": "10\u201411/39.../53.../1\u20144"
      },
      {
        "movename": "Down B (Counter)",
        "totalframes": "67",
        "landinglag": "--",
        "notes": "Invulnerable on frame 7. Counters on 8-29 from 8-27.",
        "startup": "8 (Start of Counter)",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "--"
      },
      {
        "movename": "Counter, Attack",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "Invulnerable on frame 1-5. In addition to counter freeze frames",
        "startup": "4",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "4\u20145"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "5.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "5.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "6.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "16",
        "basedamage": "5.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "44",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-29"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "62",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "68",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "74",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "87",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "97",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "95",
      "Gravity": "0.114",
      "Walk Speed": "1.208",
      "Run Speed": "2.145",
      "Initial Dash": "2.2",
      "Air Speed": "1.302",
      "Total Air Acceleration": "0.05",
      "SH / FH / SHFF / FHFF Frames": "30 / 44 / 20 / 31",
      "Fall Speed / Fast Fall Speed": "1.8 / 2.88",
      "Out of Shield, Up Air": "8 frames",
      "Out of Shield, Neutral Air": "9 frames",
      "Out of Shield, Up B": "10 frames",
      "Shield Grab (Grab, post-Shieldstun)": "11 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "cloud": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Transitions to jab 2 as early as frame 8",
        "startup": "4",
        "basedamage": "2.5",
        "shieldlag": "7",
        "shieldstun": "4",
        "advantage": "-21",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Jab 2",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "Transitions to jab 3 as early as frame 9",
        "startup": "5",
        "basedamage": "2.0",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-24",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Jab 3",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "3.5",
        "shieldlag": "10",
        "shieldstun": "4",
        "advantage": "-27",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "11.0",
        "shieldlag": "8",
        "shieldstun": "10",
        "advantage": "-16",
        "activeframes": "9\u201410"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "8.0",
        "shieldlag": "7",
        "shieldstun": "8",
        "advantage": "-18",
        "activeframes": "6\u20149"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "7.0",
        "shieldlag": "7",
        "shieldstun": "7",
        "advantage": "-26",
        "activeframes": "7\u20148(9\u201417)"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "11.0/8.0",
        "shieldlag": "8/7",
        "shieldstun": "10/8",
        "advantage": "-26",
        "activeframes": "9\u201413(14\u201418)"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "Charge hold is frame 5",
        "startup": "19/24/28",
        "basedamage": "3.0/2.0/(13.0/12.0)",
        "shieldlag": "7/7/(16/15)",
        "shieldstun": "3/3/(9/8)",
        "advantage": "-29/-30",
        "activeframes": "19/24/28"
      },
      {
        "movename": "Up Smash",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "Charge hold is frame 6",
        "startup": "15",
        "basedamage": "13.0/8.0",
        "shieldlag": "10/7",
        "shieldstun": "9/6",
        "advantage": "-24",
        "activeframes": "15(16\u201417/18\u201419)"
      },
      {
        "movename": "Down Smash",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Charge hold is frame 2",
        "startup": "8/21",
        "basedamage": "3.0/11.0",
        "shieldlag": "5/11",
        "shieldstun": "3/8",
        "advantage": "-38/-20",
        "activeframes": "8\u20149/21\u201423"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "38",
        "landinglag": "9",
        "notes": "Autocancels on frame 31 onward",
        "startup": "5",
        "basedamage": "8.0",
        "shieldlag": "7",
        "shieldstun": "4",
        "advantage": "-5",
        "activeframes": "5\u201415"
      },
      {
        "movename": "Forward Air",
        "totalframes": "53",
        "landinglag": "11",
        "notes": "Autocancels on frame 1-2 and 43 onward",
        "startup": "18",
        "basedamage": "13.0/14.0/11.0",
        "shieldlag": "12/12/8",
        "shieldstun": "5/5/4",
        "advantage": "-6/-6/-7",
        "activeframes": "18\u201419(20\u201425)"
      },
      {
        "movename": "Back Air",
        "totalframes": "42",
        "landinglag": "8",
        "notes": "Autocancels on frame 1-4 and 37 onward",
        "startup": "11",
        "basedamage": "13.0",
        "shieldlag": "9",
        "shieldstun": "5",
        "advantage": "-3",
        "activeframes": "11\u201412"
      },
      {
        "movename": "Up Air",
        "totalframes": "44",
        "landinglag": "9",
        "notes": "Autocancels on frame 32 onward",
        "startup": "8",
        "basedamage": "11.0/8.0",
        "shieldlag": "10/7",
        "shieldstun": "4/4",
        "advantage": "-5/-5",
        "activeframes": "8\u20149(10\u201423)"
      },
      {
        "movename": "Down Air",
        "totalframes": "64",
        "landinglag": "16",
        "notes": "Autocancels on frame 1-4 and 46 onward",
        "startup": "11",
        "basedamage": "13.0/8.0",
        "shieldlag": "14/9",
        "shieldstun": "5/4",
        "advantage": "-11/-12",
        "activeframes": "11\u201413(14\u201439)"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Blade Beam)",
        "totalframes": "53(60)",
        "landinglag": "--",
        "notes": "--",
        "startup": "18(18)",
        "basedamage": "8.0/6.0(6.4/4.8)",
        "shieldlag": "7/6(6/6)",
        "shieldstun": "3/3(3/3)",
        "advantage": "-25(-33)",
        "activeframes": "18\u201435(36\u201468)"
      },
      {
        "movename": "Limit Blade Beam",
        "totalframes": "60",
        "landinglag": "--",
        "notes": "Invulnerable on frame 10-17",
        "startup": "16 (1/7/13/19/25/28)",
        "basedamage": "6.0/2.0/3.0 (Air: 4.8/1.6/2.4)",
        "shieldlag": "-/4/5",
        "shieldstun": "-/2/2",
        "advantage": "-9",
        "activeframes": "16\u201463 (1/7/13/19/25/28\u201429)"
      },
      {
        "movename": "Side B, Hit 1 (Cross Slash, Hit 1)",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "Transitions to next slash as early as frame 10 if you hit",
        "startup": "10",
        "basedamage": "4.0",
        "shieldlag": "5",
        "shieldstun": "5",
        "advantage": "-25",
        "activeframes": "10\u201411"
      },
      {
        "movename": "Cross Slash, Hit 2",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "Transitiions to next slash as early as frame 14 if you hit",
        "startup": "2",
        "basedamage": "3.0",
        "shieldlag": "5",
        "shieldstun": "4",
        "advantage": "-25",
        "activeframes": "2\u20143"
      },
      {
        "movename": "Cross Slash, Hit 3",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "--",
        "startup": "2/11/25",
        "basedamage": "3.0/3.0/6.0",
        "shieldlag": "0/5/12",
        "shieldstun": "4/4/6",
        "advantage": "-24",
        "activeframes": "2\u20143/11\u201412/25\u201426"
      },
      {
        "movename": "Limit Cross Slash",
        "totalframes": "60",
        "landinglag": "--",
        "notes": "Invulnerable on frame 6-11",
        "startup": "10/15/21/28/38",
        "basedamage": "5.0/3.0/10.0",
        "shieldlag": "6/5/19",
        "shieldstun": "-/4/10",
        "advantage": "-12",
        "activeframes": "10\u201411/15\u201416/21\u201422/28/38\u201439"
      },
      {
        "movename": "Up B (Climhazzard)",
        "totalframes": "--",
        "landinglag": "20",
        "notes": "Transitions to followup as early as frame 20",
        "startup": "7/10",
        "basedamage": "3.0/4.0",
        "shieldlag": "12/6",
        "shieldstun": "-/5",
        "advantage": "**",
        "activeframes": "7/10(11/12\u201415/**)"
      },
      {
        "movename": "Climhazzard, Followup",
        "totalframes": "--",
        "landinglag": "26",
        "notes": "--",
        "startup": "12",
        "basedamage": "6.0/7.0",
        "shieldlag": "15/16",
        "shieldstun": "-/7",
        "advantage": "**",
        "activeframes": "12\u2014**"
      },
      {
        "movename": "Limit Climhazzard",
        "totalframes": "--",
        "landinglag": "20",
        "notes": "Invulnerable on frame 5-12 Transitions to followup as early as frame 33",
        "startup": "7/10",
        "basedamage": "4.5/3.5",
        "shieldlag": "7/7",
        "shieldstun": "5/4",
        "advantage": "-21",
        "activeframes": "7\u20149/10(11\u201416)/1\u20143"
      },
      {
        "movename": "Down B (Limit Charge)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "Takes 7 frames to cancel. About 7 seconds to fully charge",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Down B (Finishing Touch)",
        "totalframes": "86/89",
        "landinglag": "--",
        "notes": "--",
        "startup": "14 (ground) // 16 (air)",
        "basedamage": "1.0",
        "shieldlag": "8",
        "shieldstun": "2",
        "advantage": "-70/-71",
        "activeframes": "14(15\u201416)/24\u201428 // 16\u201417(19)/27\u201431"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "18",
        "landinglag": "--",
        "notes": "Total frames includes 13 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "7/9",
        "basedamage": "4.0/3.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "13/15",
        "basedamage": "3.0/3.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "50",
        "landinglag": "--",
        "notes": "--",
        "startup": "8/13/15",
        "basedamage": "2.0/2.5/4.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "--",
        "startup": "18",
        "basedamage": "7.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "47",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-30"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "64",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "72",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "79",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "94",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "104",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "100",
      "Gravity": "0.098",
      "Walk Speed": "1.155",
      "Run Speed": "2.167",
      "Initial Dash": "2.145",
      "Air Speed": "1.155",
      "Total Air Acceleration": "0.07",
      "SH / FH / SHFF / FHFF Frames": "37 / 49 / 26 / 34",
      "Fall Speed / Fast Fall Speed": "1.68 / 2.688",
      "Out of Shield, Up B": "7 frames",
      "Out of Shield, Neutral Air": "8 frames",
      "Out of Shield, Up Air": "11 frames",
      "Shield Grab (Grab, post-Shieldstun)": "13 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "corrin": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "Transitions to jab 2 as early as frame 9",
        "startup": "5",
        "basedamage": "2.0/2.5",
        "shieldlag": "7/8",
        "shieldstun": "3/4",
        "advantage": "-19/-18",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Jab 2",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Transitions to jab 3 as early as frame 9 and rapid as early as 8.",
        "startup": "4",
        "basedamage": "2.0",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-22",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Jab 3",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "3.0/4.0",
        "shieldlag": "9/10",
        "shieldstun": "4/5",
        "advantage": "-20/-19",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "12/16/20...",
        "basedamage": "0.5",
        "shieldlag": "4",
        "shieldstun": "--",
        "advantage": "**",
        "activeframes": "**"
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "3",
        "basedamage": "3.0",
        "shieldlag": "14",
        "shieldstun": "4",
        "advantage": "-32",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "10.5",
        "shieldlag": "8",
        "shieldstun": "10",
        "advantage": "-16",
        "activeframes": "8\u20149"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "9.0",
        "shieldlag": "7",
        "shieldstun": "9",
        "advantage": "-19",
        "activeframes": "7\u20148(9\u201416)"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "7.5",
        "shieldlag": "7",
        "shieldstun": "8",
        "advantage": "-17",
        "activeframes": "5\u20147"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "12/14/16/18/20/23",
        "basedamage": "2.0/3.0",
        "shieldlag": "4/9",
        "shieldstun": "--/4",
        "advantage": "-22",
        "activeframes": "12/14/16/18/20/23"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "56",
        "landinglag": "--",
        "notes": "Charging hold is frame 12 and includes a hitbox that hits every 5 frames",
        "startup": "12/17",
        "basedamage": "0.5/11.0/12.0/15.2",
        "shieldlag": "4/9/9/15",
        "shieldstun": "2/8/8/10",
        "advantage": "-31/-31/-29",
        "activeframes": "12\u2014**/17\u201418"
      },
      {
        "movename": "Up Smash",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "Charge hold is frame 9",
        "startup": "13",
        "basedamage": "10.0/13.0/15.0",
        "shieldlag": "8/9/14",
        "shieldstun": "7/9/10",
        "advantage": "-31/-29/-28",
        "activeframes": "13\u201417"
      },
      {
        "movename": "Down Smash",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "Charge hold is frame 8",
        "startup": "13",
        "basedamage": "11.0/9.0/14.0",
        "shieldlag": "8/7/14",
        "shieldstun": "8/7/10",
        "advantage": "-27/-28/-25",
        "activeframes": "13\u201415"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "46",
        "landinglag": "10",
        "notes": "Autocancels on frame 1-5 and 47 onward",
        "startup": "6",
        "basedamage": "7.0/5.5",
        "shieldlag": "7/6",
        "shieldstun": "3/3",
        "advantage": "-7/-7",
        "activeframes": "6\u20147(8\u201419)"
      },
      {
        "movename": "Forward Air",
        "totalframes": "35",
        "landinglag": "8",
        "notes": "Autocancels on frame 1-8 and 30 onward",
        "startup": "9",
        "basedamage": "7.5",
        "shieldlag": "6",
        "shieldstun": "3",
        "advantage": "-5",
        "activeframes": "9\u201412"
      },
      {
        "movename": "Back Air",
        "totalframes": "41",
        "landinglag": "13",
        "notes": "Autocancels on frame 1-5 and 42 onward",
        "startup": "13",
        "basedamage": "11.0/9.0",
        "shieldlag": "8/7",
        "shieldstun": "4/4",
        "advantage": "-9/-9",
        "activeframes": "13(14\u201416)"
      },
      {
        "movename": "Up Air",
        "totalframes": "37",
        "landinglag": "9",
        "notes": "Autocancels on frame 1-3 and 38 onward",
        "startup": "7",
        "basedamage": "9.0",
        "shieldlag": "7",
        "shieldstun": "4",
        "advantage": "-5",
        "activeframes": "7\u201412"
      },
      {
        "movename": "Down Air",
        "totalframes": "51",
        "landinglag": "26",
        "notes": "Landing hit on frame 1. Autocancels on frame 1-11 and 41 onward",
        "startup": "12/14/16/18/20/22/24/26/28",
        "basedamage": "2.0/3.0",
        "shieldlag": "4/5",
        "shieldstun": "2/4",
        "advantage": "-21",
        "activeframes": "12/14/16/18/20/22/24/26/28/1\u20145"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Dragon Fang Shot)",
        "totalframes": "61\u201495",
        "landinglag": "--",
        "notes": "--",
        "startup": "17\u201447",
        "basedamage": "4.0\u201411.0",
        "shieldlag": "5\u20148",
        "shieldstun": "2\u20144",
        "advantage": "**",
        "activeframes": "17\u201471"
      },
      {
        "movename": "Dragon Fang Shot (chomp)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "Chomp can be charged an additional 30 frames independently of shot for more damage.",
        "startup": "24-54-85",
        "basedamage": "10.0\u201420.0",
        "shieldlag": "8\u201420",
        "shieldstun": "10\u201418",
        "advantage": "-31 to -19",
        "activeframes": "24\u201425/**/85\u201486"
      },
      {
        "movename": "Side B (Dragon Lunge, Pin)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "After pinning the ground, 13 frame waiting period before you can select one of the options. Empty hop on the ground without Pin is 45 frames. Cannot pin a shielding target.",
        "startup": "4",
        "basedamage": "7.0",
        "shieldlag": "7",
        "shieldstun": "7",
        "advantage": "-6",
        "activeframes": "**"
      },
      {
        "movename": "Side B (Dragon Lunge, Air)",
        "totalframes": "41",
        "landinglag": "22",
        "notes": "--",
        "startup": "10",
        "basedamage": "8.0/15.0",
        "shieldlag": "7/10",
        "shieldstun": "8/14",
        "advantage": "--",
        "activeframes": "10"
      },
      {
        "movename": "Dragon Lunge, Pin Cancel",
        "totalframes": "~35/19",
        "landinglag": "19",
        "notes": "Second total frames is if you don't land on the ground",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Dragon Lunge, Pin Jump",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "Invulnerable on frame 2-7",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Dragon Lunge, Pin Kick",
        "totalframes": "56/45",
        "landinglag": "19",
        "notes": "Second total frames is if you go over an edge.",
        "startup": "10",
        "basedamage": "12.0/7.0",
        "shieldlag": "10/7",
        "shieldstun": "11/7",
        "advantage": "-35",
        "activeframes": "10\u201417(18\u201424)"
      },
      {
        "movename": "Dragon Lunge, Back Kick",
        "totalframes": "60/45",
        "landinglag": "19",
        "notes": "Second total frames is if you go over an edge.",
        "startup": "6",
        "basedamage": "5.0/7.0",
        "shieldlag": "6/7",
        "shieldstun": "6/7",
        "advantage": "-48",
        "activeframes": "6/14\u201421(22\u201428)"
      },
      {
        "movename": "Up B (Dragon Ascent)",
        "totalframes": "--",
        "landinglag": "30",
        "notes": "Invulnerable on frame 7-17",
        "startup": "18/20/22/24/26/28/29",
        "basedamage": "4.5/1.2/3.0",
        "shieldlag": "8/4/10",
        "shieldstun": "-/2/4",
        "advantage": "--",
        "activeframes": "18\u201419/20/22/24/26/28/29\u201430"
      },
      {
        "movename": "Down B (Counter Surge)",
        "totalframes": "66",
        "landinglag": "--",
        "notes": "Invulnerable on frame 6. Counters on 7-26",
        "startup": "7 (Start of Counter)",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "7\u201426 (counter)"
      },
      {
        "movename": "Counter Surge, Attack",
        "totalframes": "66",
        "landinglag": "--",
        "notes": "Invulnerable on frame 1-50.  Attacker frozen until frame 12",
        "startup": "27",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "27\u201431"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "--",
        "basedamage": "--"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "14/15",
        "basedamage": "--"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "12/13",
        "basedamage": "--"
      },
      {
        "movename": "Up Throw",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "--",
        "startup": "12/13",
        "basedamage": "--"
      },
      {
        "movename": "Down Throw",
        "totalframes": "54",
        "landinglag": "--",
        "notes": "--",
        "startup": "26/27",
        "basedamage": "--"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "49",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-29"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "67",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "75",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "81",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "97",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "107",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "98",
      "Gravity": "0.092",
      "Walk Speed": "1.208",
      "Run Speed": "1.595",
      "Initial Dash": "1.892",
      "Air Speed": "1.019",
      "Total Air Acceleration": "0.05",
      "SH / FH / SHFF / FHFF Frames": "37 / 50 / 26 / 35",
      "Fall Speed / Fast Fall Speed": "1.65 / 2.64",
      "Out of Shield, Neutral Air": "9 frames",
      "Out of Shield, Up Air": "10 frames",
      "Out of Shield, Forward Air": "12 frames",
      "Shield Grab (Grab, post-Shieldstun)": "11 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "daisy": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 7.",
        "startup": "2",
        "basedamage": "2.0",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-22",
        "activeframes": "2"
      },
      {
        "movename": "Jab 2",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "2",
        "basedamage": "3.0",
        "shieldlag": "9",
        "shieldstun": "4",
        "advantage": "-23",
        "activeframes": "2\u20143"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "7.0/8.0/6.0",
        "shieldlag": "7/4/**",
        "shieldstun": "7/8/**",
        "advantage": "-22/-21",
        "activeframes": "7/8\u20149/10\u201415"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "8.0/10.0",
        "shieldlag": "7/8",
        "shieldstun": "8/10",
        "advantage": "-20/-18",
        "activeframes": "9\u201413"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "23",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "7.0",
        "shieldlag": "7",
        "shieldstun": "7",
        "advantage": "-8",
        "activeframes": "8\u20149"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "First hit blockstrings into second hit",
        "startup": "6/17",
        "basedamage": "4.0/6.0",
        "shieldlag": "5/7",
        "shieldstun": "-/6",
        "advantage": "-14",
        "activeframes": "6\u20149/17\u201419"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "Can make directional inputs to change weapon. Charge hold is frame 5.",
        "startup": "15",
        "basedamage": "15.0/13.5/18.0",
        "shieldlag": "10/10/11",
        "shieldstun": "10/9/12",
        "advantage": "-20/-21/-18",
        "activeframes": "15\u201417/15\u201417/15\u201417"
      },
      {
        "movename": "Up Smash",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "Head and arm intangibility on frame 14-20. Charge hold is frame 9",
        "startup": "14",
        "basedamage": "12.0/17.0",
        "shieldlag": "10/11",
        "shieldstun": "10/11",
        "advantage": "-20/-19",
        "activeframes": "14\u201416/17\u201420"
      },
      {
        "movename": "Down Smash",
        "totalframes": "54",
        "landinglag": "--",
        "notes": "Charge hold is frame 2",
        "startup": "6/10/14/18/22/26/30",
        "basedamage": "2.0/3.0",
        "shieldlag": "4/15",
        "shieldstun": "3/3",
        "advantage": "-21",
        "activeframes": "6\u20147/10\u201411/14\u201415/18\u201419/ 22\u201423/26\u201427/30\u201431"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "48",
        "landinglag": "7",
        "notes": "Autocancels on frame 1-4 and 36 onward",
        "startup": "5",
        "basedamage": "13.0/6.0",
        "shieldlag": "9/6",
        "shieldstun": "5/3",
        "advantage": "-2/-4",
        "activeframes": "5\u20148/9\u201419"
      },
      {
        "movename": "Forward Air",
        "totalframes": "57",
        "landinglag": "13",
        "notes": "Autocancels on frame 1-9 and 41 onward",
        "startup": "16",
        "basedamage": "14.0/15.0",
        "shieldlag": "10/10",
        "shieldstun": "5/5",
        "advantage": "-8/-8",
        "activeframes": "16\u201420"
      },
      {
        "movename": "Back Air",
        "totalframes": "53",
        "landinglag": "11",
        "notes": "Autocancels on frame 1-4 and 30 onward",
        "startup": "6",
        "basedamage": "12.0/7.0",
        "shieldlag": "9/7",
        "shieldstun": "5/3",
        "advantage": "-6/-8",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Up Air",
        "totalframes": "45",
        "landinglag": "7",
        "notes": "Autocancels on frame 1-4 and 41 onward",
        "startup": "10/15",
        "basedamage": "4.0/6.0",
        "shieldlag": "6/7",
        "shieldstun": "3/3",
        "advantage": "-4/-4",
        "activeframes": "(10/11/12\u201413)(15/16\u201419)"
      },
      {
        "movename": "Down Air",
        "totalframes": "38",
        "landinglag": "8",
        "notes": "Autocancels on frame 1-11 and 38 onward",
        "startup": "12/18/24/30",
        "basedamage": "2.0/5.0",
        "shieldlag": "4/6",
        "shieldstun": "2/3",
        "advantage": "-6/-5",
        "activeframes": "12\u201413/18\u201419/24\u201425/30\u201431"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Toad)",
        "totalframes": "62",
        "landinglag": "--",
        "notes": "Counter window 9-34 from 10-35. Also invulnerable on frame 8.",
        "startup": "9 (Start of Counter)",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "--"
      },
      {
        "movename": "Toad, Attack",
        "totalframes": "59",
        "landinglag": "--",
        "notes": "--",
        "startup": "2/6/8/12/14/17",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Side B (daisy Bomber)",
        "totalframes": "62/87",
        "landinglag": "--",
        "notes": "Startup is 2 upon reaching a target. 18 endlag on hit. Total frames is 62 on level ground when you miss. And 87 if you miss and go over an edge",
        "startup": "13",
        "basedamage": "12.0",
        "shieldlag": "9",
        "shieldstun": "11",
        "advantage": "-13",
        "activeframes": "13\u201427(detector)"
      },
      {
        "movename": "Side B, Air (daisy Bomber, Air)",
        "totalframes": "87",
        "landinglag": "35",
        "notes": "Startup is 2 upon reaching a target. 18 endlag on hit.",
        "startup": "13",
        "basedamage": "12.0",
        "shieldlag": "9",
        "shieldstun": "11",
        "advantage": "-13",
        "activeframes": "13\u201436(detector)"
      },
      {
        "movename": "Up B (daisy Parasol)",
        "totalframes": "--",
        "landinglag": "26/40",
        "notes": "40 landing lag from special fall. Or 26 if still holding umbrella",
        "startup": "7/11/16/21/26/31",
        "basedamage": "3.0/1.0/4.0",
        "shieldlag": "5/4/15",
        "shieldstun": "4/2/5",
        "advantage": "--",
        "activeframes": "7/11/16/21/26/31"
      },
      {
        "movename": "Down B (Turnip Pull)",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "Turnip damage depends both on the type and how it is thrown. Z-Drop damage depends on distance fallen. Turnip chances are: Normal(88.7%), Winking(6.89%), Dot Eye(1.7%), Stitchface(1.7%), Bob-omb(0.4%), Mr. Saturn(0.6%).",
        "startup": "--",
        "basedamage": "8.3\u201427.6",
        "shieldlag": "7\u201415",
        "shieldstun": "3\u20148",
        "advantage": "--",
        "activeframes": "**"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "14/16",
        "basedamage": "2.0/6.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "20/21",
        "basedamage": "2.0/9.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "19/26",
        "basedamage": "2.0/6.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "64",
        "landinglag": "--",
        "notes": "--",
        "startup": "34/43",
        "basedamage": "1.0/7.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "21/26",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "61",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-30"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "86",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "92",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "103",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "124",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "141",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "89",
      "Gravity": "0.070",
      "Walk Speed": "0.924",
      "Run Speed": "1.595",
      "Initial Dash": "1.826",
      "Air Speed": "1.029",
      "Total Air Acceleration": "0.12",
      "SH / FH / SHFF / FHFF Frames": "41 / 57 / 28 / 40",
      "Fall Speed / Fast Fall Speed": "1.19 / 1.904",
      "Out of Shield, Up B": "7 frames",
      "Out of Shield, Neutral Air": "8 frames",
      "Out of Shield, Back Air": "9 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "dark_pit": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "26",
        "landinglag": "--",
        "notes": "Transitions to jab 2 as early as frame 8",
        "startup": "4",
        "basedamage": "2.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-18",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Jab 2",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Transitions to jab 3 as early as frame 8. To rapid jab as early as 7",
        "startup": "5",
        "basedamage": "2.0",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-21",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Jab 3",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "3",
        "basedamage": "4.0",
        "shieldlag": "11",
        "shieldstun": "5",
        "advantage": "-23",
        "activeframes": "3"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "6/8/10...",
        "basedamage": "0.5",
        "shieldlag": "4",
        "shieldstun": "3",
        "advantage": "--",
        "activeframes": "6/8/10..."
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "2.0",
        "shieldlag": "9",
        "shieldstun": "3",
        "advantage": "-40",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "7.0/10.0",
        "shieldlag": "7/10",
        "shieldstun": "7/10",
        "advantage": "-22/-19",
        "activeframes": "10\u201414"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "6/15",
        "basedamage": "4.0/5.0",
        "shieldlag": "5/6",
        "shieldstun": "5/6",
        "advantage": "-23/-13",
        "activeframes": "6\u20148/15\u201416"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "25",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "6.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-13",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "11.0",
        "shieldlag": "8",
        "shieldstun": "14",
        "advantage": "-17",
        "activeframes": "7\u20149"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "54",
        "landinglag": "--",
        "notes": "Charge hold is frame 3",
        "startup": "10/21",
        "basedamage": "5.0/10.0",
        "shieldlag": "6/8",
        "shieldstun": "4/7",
        "advantage": "-26",
        "activeframes": "10/21\u201422"
      },
      {
        "movename": "Up Smash",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "Charge hold is frame 2",
        "startup": "6/7/10/18",
        "basedamage": "3.0/*/2.0/8.0",
        "shieldlag": "5/*/4/9",
        "shieldstun": "3/*/3/6",
        "advantage": "-27",
        "activeframes": "6/7/10/18"
      },
      {
        "movename": "Down Smash",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "Charge hold is frame 2",
        "startup": "5/18",
        "basedamage": "12.0/10.0",
        "shieldlag": "9/8",
        "shieldstun": "8/7",
        "advantage": "-27/-28/-14/-15",
        "activeframes": "5\u20146/18\u201420"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "54",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-3 and 30 onward",
        "startup": "4/7/10/13/16/19/22/25",
        "basedamage": "0.7/4.5",
        "shieldlag": "4/10",
        "shieldstun": "2/3",
        "advantage": "-12/-11",
        "activeframes": "4\u20145/7\u20148/10\u201411/13\u201414/16\u201417/19\u201420/22\u201423/25"
      },
      {
        "movename": "Forward Air",
        "totalframes": "46",
        "landinglag": "12",
        "notes": "Autocancels on frame 28 onward",
        "startup": "11/14/18",
        "basedamage": "2.5/6.0",
        "shieldlag": "5/14",
        "shieldstun": "2/3",
        "advantage": "-10/-9",
        "activeframes": "11\u201412/14\u201415/18\u201419"
      },
      {
        "movename": "Back Air",
        "totalframes": "40",
        "landinglag": "9",
        "notes": "Autocancels on frame 28 onward",
        "startup": "10",
        "basedamage": "8.0/12.0",
        "shieldlag": "8/11",
        "shieldstun": "4/5",
        "advantage": "-5/-4",
        "activeframes": "10\u201412"
      },
      {
        "movename": "Up Air",
        "totalframes": "49",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-4 and 37 onward",
        "startup": "12/15/18/21/24",
        "basedamage": "1.5/5.0",
        "shieldlag": "4/11",
        "shieldstun": "2/3",
        "advantage": "-12/-11",
        "activeframes": "12\u201413/15\u201416/18\u201419/21\u201422/24\u201425"
      },
      {
        "movename": "Down Air",
        "totalframes": "36",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-6 and 36 onward",
        "startup": "10",
        "basedamage": "10.0",
        "shieldlag": "8",
        "shieldstun": "4",
        "advantage": "-10",
        "activeframes": "10/11\u201412"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Silver Bow)",
        "totalframes": "46\u2014106",
        "landinglag": "--",
        "notes": "Total frames reduced by 3 in the air.",
        "startup": "16\u201476",
        "basedamage": "5.5\u201414.0",
        "shieldlag": "6\u201410",
        "shieldstun": "3\u20145",
        "advantage": "-21 to -15",
        "activeframes": "**"
      },
      {
        "movename": "Side B (Electroshock Arm)",
        "totalframes": "79/49",
        "landinglag": "--",
        "notes": "Startup is 2 upon reaching a target. 47 endlag on the swing. Super Armor begins on frame 11 and ends on the frame he begins swing.",
        "startup": "18",
        "basedamage": "12.0",
        "shieldlag": "16",
        "shieldstun": "11",
        "advantage": "-36",
        "activeframes": "16\u201435(detector)"
      },
      {
        "movename": "Side B, Air (Electrodash Arm, Air)",
        "totalframes": "104/51",
        "landinglag": "30",
        "notes": "Startup is 2 upon reaching a target. 55 endlag on the swing if you don't land",
        "startup": "21",
        "basedamage": "9.5",
        "shieldlag": "12",
        "shieldstun": "9",
        "advantage": "-40",
        "activeframes": "19\u201435(detector)"
      },
      {
        "movename": "Up B (Power of Flight)",
        "totalframes": "--",
        "landinglag": "40",
        "notes": "invulnerable on frame 9-19, 15-19 in the air.",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "--"
      },
      {
        "movename": "Down B (Guardian Orbitars)",
        "totalframes": "49\u2014129",
        "landinglag": "--",
        "notes": "Reflects/blocks as early as frame 7. 23 endlag on release.",
        "startup": "7 (Start of Reflect)",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "--"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "--",
        "startup": "12/14",
        "basedamage": "6.0/4.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "29",
        "basedamage": "8.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "13/15",
        "basedamage": "4.0/7.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "13/16",
        "basedamage": "2.0/4.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "52",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-29"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "73",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "82",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "89",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "110",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "119",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "96",
      "Gravity": "0.081",
      "Walk Speed": "1.259",
      "Run Speed": "1.828",
      "Initial Dash": "2.09",
      "Air Speed": "0.935",
      "Total Air Acceleration": "0.075",
      "SH / FH / SHFF / FHFF Frames": "38 / 52 / 26 / 37",
      "Fall Speed / Fast Fall Speed": "1.48 / 2.368",
      "Out of Shield, Up Smash": "6 frames",
      "Out of Shield, Neutral Air": "7 frames",
      "Out of Shield, Down Air": "13 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "dark_samus": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "17",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 15.",
        "startup": "3",
        "basedamage": "3.0",
        "shieldlag": "5",
        "shieldstun": "4",
        "advantage": "-10",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Jab 2",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "8.0",
        "shieldlag": "7",
        "shieldstun": "8",
        "advantage": "-15",
        "activeframes": "6\u20149"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "Deals 1.0 more damage when angled.",
        "startup": "8",
        "basedamage": "8.0/9.0/10.0",
        "shieldlag": "7/7/8",
        "shieldstun": "78/9/10",
        "advantage": "-17/-16/-15",
        "activeframes": "8\u201410"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "13.0",
        "shieldlag": "9",
        "shieldstun": "12",
        "advantage": "-12",
        "activeframes": "15\u201418"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "12.0",
        "shieldlag": "9",
        "shieldstun": "11",
        "advantage": "-27",
        "activeframes": "6\u20148"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "7.0/10.0/6.0",
        "shieldlag": "7/8/6",
        "shieldstun": "7/10/6",
        "advantage": "-26",
        "activeframes": "8\u20149(10\u201413/14\u201418)"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "Deals 1.0 more damage when angled up, 1.0 less when angled down. Charge hold frame is 3.",
        "startup": "10",
        "basedamage": "12.0/14.0",
        "shieldlag": "9/10",
        "shieldstun": "8/10",
        "advantage": "-30/-28",
        "activeframes": "10\u201411"
      },
      {
        "movename": "Up Smash",
        "totalframes": "56",
        "landinglag": "--",
        "notes": "Charge hold frame is 6",
        "startup": "11/15/19/23/27",
        "basedamage": "3.0/6.0",
        "shieldlag": "5/6",
        "shieldstun": "3/5",
        "advantage": "-24",
        "activeframes": "11\u201412/15\u201416/19\u201420/23\u201424/27\u201428"
      },
      {
        "movename": "Down Smash",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "Charge hold frame is 3",
        "startup": "9/17",
        "basedamage": "10.0/12.0",
        "shieldlag": "8/9",
        "shieldstun": "7/8",
        "advantage": "-28/-19",
        "activeframes": "9\u201410/17\u201418"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "45",
        "landinglag": "9",
        "notes": "Autocancels on frame 1-7 and 35 onward",
        "startup": "8/14",
        "basedamage": "10.0/9.0",
        "shieldlag": "8/7",
        "shieldstun": "4/4",
        "advantage": "-5/-5",
        "activeframes": "8\u201411/14\u201415(16\u201422)"
      },
      {
        "movename": "Forward Air",
        "totalframes": "59",
        "landinglag": "14",
        "notes": "Autocancels on frame 47 onward",
        "startup": "6/12/18/24/30",
        "basedamage": "3.0/1.6/5.0",
        "shieldlag": "5/4/12",
        "shieldstun": "2/2/3",
        "advantage": "-12/-12/-11",
        "activeframes": "6\u20147/12\u201413/18\u201419/24\u201425/30\u201431"
      },
      {
        "movename": "Back Air",
        "totalframes": "41",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-8 and 42 onward",
        "startup": "9",
        "basedamage": "14.0/9.0",
        "shieldlag": "11/7",
        "shieldstun": "5/4",
        "advantage": "-9/-10",
        "activeframes": "9\u201410(11\u201414)"
      },
      {
        "movename": "Up Air",
        "totalframes": "39",
        "landinglag": "18",
        "notes": "Autocancels on frame 1-2 and 34 onward",
        "startup": "5/7/10/13/16",
        "basedamage": "3.0/1.2/4.0",
        "shieldlag": "5/3/10",
        "shieldstun": "2/2/3",
        "advantage": "-16/-16/-15",
        "activeframes": "5/7/10/13/16\u201417"
      },
      {
        "movename": "Down Air",
        "totalframes": "48",
        "landinglag": "12",
        "notes": "Autocancels on frame 1-3 and 34 onward",
        "startup": "17",
        "basedamage": "10.0/14.0",
        "shieldlag": "8/10",
        "shieldstun": "4/5",
        "advantage": "-8/-7",
        "activeframes": "17\u201418/19\u201421/22\u201423"
      },
      {
        "movename": "Z Air",
        "totalframes": "59",
        "landinglag": "8",
        "notes": "--",
        "startup": "8/16",
        "basedamage": "1.5",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-5",
        "activeframes": "8\u201415/16\u201417"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Charge Shot)",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "Startup is 3 from charge state. Takes 13 frames to enter charge state.",
        "startup": "3(+13)",
        "basedamage": "5.0\u201426.1",
        "shieldlag": "9\u201424",
        "shieldstun": "3\u20148",
        "advantage": "-16 to +4",
        "activeframes": "16\u201474"
      },
      {
        "movename": "Charge Shot, Full Charge",
        "totalframes": "50",
        "landinglag": "--",
        "notes": "Takes 125 frames to reach full charge",
        "startup": "16",
        "basedamage": "28.0",
        "shieldlag": "24",
        "shieldstun": "8",
        "advantage": "-2",
        "activeframes": "16\u201474"
      },
      {
        "movename": "Side B (Homing Missle)",
        "totalframes": "54/59",
        "landinglag": "--",
        "notes": "Projectile lasts until frame 118. Total frames is 59 in the air for either missile type.",
        "startup": "18",
        "basedamage": "8.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-26",
        "activeframes": "18\u2014135"
      },
      {
        "movename": "Side B (Super Missle)",
        "totalframes": "57/59",
        "landinglag": "30",
        "notes": "Projectile lasts until frame 87. Starts moving forward around frame 50, allowing for followups.",
        "startup": "21",
        "basedamage": "12.0",
        "shieldlag": "9",
        "shieldstun": "4",
        "advantage": "-24",
        "activeframes": "21\u201496"
      },
      {
        "movename": "Up B (Screw Attack)",
        "totalframes": "--",
        "landinglag": "24",
        "notes": "Invulnerable on frame 3-6",
        "startup": "4/7/10/12/15/18/21/24/25/27",
        "basedamage": "3.0/1.0/2.0",
        "shieldlag": "5/4",
        "shieldstun": "4/2",
        "advantage": "--",
        "activeframes": "4\u20146/7/10/12/15/18/21/24/25\u201426"
      },
      {
        "movename": "Up B, Air (Screw Attack, Air)",
        "totalframes": "--",
        "landinglag": "24",
        "notes": "Invulnerable on frame 3-4",
        "startup": "5/7/9/11/13/15/17/19/21/23/25/27",
        "basedamage": "1.0",
        "shieldlag": "4",
        "shieldstun": "2",
        "advantage": "--",
        "activeframes": "5/7/9/11/13/15/17/19/21/23/25/27\u201428"
      },
      {
        "movename": "Down B (Bomb)",
        "totalframes": "47/44/48",
        "landinglag": "--",
        "notes": "\"Explosion occurs one frame after touching a target. Bomb explodes automatically on frame 81. Total frames is 44 if the player is holding down.  And 48 in the air with no way to reduce it",
        "startup": "33\u201480",
        "basedamage": "4.0/5.0",
        "shieldlag": "5",
        "shieldstun": "2",
        "advantage": "--",
        "activeframes": "33\u201480/1\u201418"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "59",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "67",
        "landinglag": "--",
        "notes": "--",
        "startup": "17",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "62",
        "landinglag": "--",
        "notes": "--",
        "startup": "18",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Total frames includes 15 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "16",
        "basedamage": "10.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "10.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "15/16",
        "basedamage": "5.0/7.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "21",
        "basedamage": "8.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "21/26",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-18"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-20"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "56",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-29"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "80",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "86",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "96",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "113",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "130",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "108",
      "Gravity": "0.075",
      "Walk Speed": "1.115",
      "Run Speed": "1.654",
      "Initial Dash": "1.87",
      "Air Speed": "1.103",
      "Total Air Acceleration": "0.09",
      "SH / FH / SHFF / FHFF Frames": "44 / 61 / 31 / 43",
      "Fall Speed / Fast Fall Speed": "1.33 / 2.168",
      "Out of Shield, Up B": "4 frames",
      "Out of Shield, Up Air": "8 frames",
      "Out of Shield, Neutral Air or Z Air or Up Smash": "11 frames",
      "Shield Grab (Grab, post-Shieldstun)": "19 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "diddy_kong": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Transitions to jab 2 as ealy as frame 6",
        "startup": "3",
        "basedamage": "2.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-13",
        "activeframes": "3"
      },
      {
        "movename": "Jab 2",
        "totalframes": "20",
        "landinglag": "--",
        "notes": "Transitions to jab 3 as early as frame 6",
        "startup": "5",
        "basedamage": "1.5",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-12",
        "activeframes": "5"
      },
      {
        "movename": "Jab 3",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "4.0",
        "shieldlag": "11",
        "shieldstun": "5",
        "advantage": "-24",
        "activeframes": "5"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "10.0/7.0",
        "shieldlag": "8",
        "shieldstun": "10",
        "advantage": "-16",
        "activeframes": "10\u201411(12/13\u201414)"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "6.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-17",
        "activeframes": "6\u201411"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "18",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "5.5",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-8",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "8/16/22",
        "basedamage": "2.0/3.0",
        "shieldlag": "4/5",
        "shieldstun": "3/4",
        "advantage": "-14",
        "activeframes": "8\u20149/16\u201417/22\u201423"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "50",
        "landinglag": "--",
        "notes": "Charge hold is frame 4",
        "startup": "12/21",
        "basedamage": "5.0/11.0",
        "shieldlag": "6/10",
        "shieldstun": "4/8",
        "advantage": "-21",
        "activeframes": "12(13)/21\u201423"
      },
      {
        "movename": "Up Smash",
        "totalframes": "53",
        "landinglag": "--",
        "notes": "Charge hold is frame 1",
        "startup": "5/12/19",
        "basedamage": "2.5/6.0",
        "shieldlag": "5/6",
        "shieldstun": "3/5",
        "advantage": "-29",
        "activeframes": "5(6\u20148)/12\u201414(15)/19\u201423"
      },
      {
        "movename": "Down Smash",
        "totalframes": "52",
        "landinglag": "--",
        "notes": "Charge hold frame is 2",
        "startup": "9/14",
        "basedamage": "12.0/15.0",
        "shieldlag": "9/10",
        "shieldstun": "8/10",
        "advantage": "-35/-28",
        "activeframes": "9\u201410/14"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "48",
        "landinglag": "8",
        "notes": "Autocancels on frame 1-3 and 27 onward",
        "startup": "8",
        "basedamage": "6.0",
        "shieldlag": "6",
        "shieldstun": "3",
        "advantage": "-5",
        "activeframes": "8\u201420"
      },
      {
        "movename": "Forward Air",
        "totalframes": "46",
        "landinglag": "16",
        "notes": "Autocancels on frame 1-2 and 26 onward",
        "startup": "6",
        "basedamage": "10.0/8.0",
        "shieldlag": "8/7",
        "shieldstun": "4/4",
        "advantage": "-12/-12",
        "activeframes": "6\u20149(10\u201416)"
      },
      {
        "movename": "Back Air",
        "totalframes": "30",
        "landinglag": "7",
        "notes": "Autocancels on frame 1-2 and 20 onward",
        "startup": "5",
        "basedamage": "9.0",
        "shieldlag": "7",
        "shieldstun": "4",
        "advantage": "-3",
        "activeframes": "5\u20148"
      },
      {
        "movename": "Up Air",
        "totalframes": "36",
        "landinglag": "13",
        "notes": "Autocancels on frame 27 onward",
        "startup": "4",
        "basedamage": "7.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-10",
        "activeframes": "4\u20147"
      },
      {
        "movename": "Down Air",
        "totalframes": "46",
        "landinglag": "17",
        "notes": "Autocancels on frame 1-16 and 37 onward",
        "startup": "15",
        "basedamage": "13.0/10.0",
        "shieldlag": "9/8",
        "shieldstun": "5/4",
        "advantage": "-26",
        "activeframes": "15\u201416"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Peanut Popgun)",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "Melee hitbox generated after projectile. Diddy does not suffer hitlag from melee attack",
        "startup": "16/17\u2014121/124",
        "basedamage": "3.3\u201415.0/2.0",
        "shieldlag": "5\u201410/10\u201414",
        "shieldstun": "2\u20145/2\u20142",
        "advantage": "-25 to -17/-19 to -13",
        "activeframes": "**"
      },
      {
        "movename": "Peanut Popgun, Misfire",
        "totalframes": "228",
        "landinglag": "--",
        "notes": "You can cancel charge into shield/air dodge as early as frame 14.",
        "startup": "123",
        "basedamage": "23.0",
        "shieldlag": "16",
        "shieldstun": "20",
        "advantage": "-85",
        "activeframes": "**"
      },
      {
        "movename": "Side B (Monkey Flip)",
        "totalframes": "47/61",
        "landinglag": "26",
        "notes": "First total frames is in the air, second is along level ground.",
        "startup": "18",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "18\u201436"
      },
      {
        "movename": "Monkey Flip, Attack",
        "totalframes": "32",
        "landinglag": "18",
        "notes": "Total frames is in the air.",
        "startup": "6",
        "basedamage": "14.0/10.0",
        "shieldlag": "10/8",
        "shieldstun": "13/10",
        "advantage": "-5/-8",
        "activeframes": "6\u201410(11\u201425)"
      },
      {
        "movename": "Monkey Flip, Grab Success",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "11/29/59...",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Monkey Flip, Grab Attack",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "18/21",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Monkey Flip, Grab Jump",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "18/27",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Up B (Rocketbarrel Boost)",
        "totalframes": "--",
        "landinglag": "30",
        "notes": "Touching a solid surface during boost activates explosion",
        "startup": "8\u201468",
        "basedamage": "10.0/8.0/6.0",
        "shieldlag": "8/7/6",
        "shieldstun": "10/8/6",
        "advantage": "--",
        "activeframes": "8\u20149(10\u201416/17\u201435)"
      },
      {
        "movename": "Rocketbarrel Boost, Explosion",
        "totalframes": "57-59",
        "landinglag": "--",
        "notes": "Total frames assumes exploding on level ground, Diddy does not suffer hitlag from explosion",
        "startup": "1",
        "basedamage": "18.0",
        "shieldlag": "11",
        "shieldstun": "6",
        "advantage": "-39 to -41",
        "activeframes": "1\u20142"
      },
      {
        "movename": "Down B (Banana Peel)",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "Item generated on frame 20",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "--",
        "activeframes": "20 (banana appears)"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "16",
        "landinglag": "--",
        "notes": "Total frames includes 11 frames of hitlag",
        "startup": "1",
        "basedamage": "1.0"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "21",
        "basedamage": "9.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "--",
        "startup": "18",
        "basedamage": "12.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "26",
        "landinglag": "--",
        "notes": "--",
        "startup": "17/18",
        "basedamage": "1.0/4.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "22",
        "basedamage": "7.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "19/24",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-16"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "28",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-14"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "44",
        "landinglag": "10",
        "notes": "Invulnerable on frame 2-27"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "62",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "68",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "74",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "86",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "96",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      }
    ],
    "stats": {
      "Weight": "90",
      "Gravity": "0.125",
      "Walk Speed": "1.313",
      "Run Speed": "2.006",
      "Initial Dash": "2.09",
      "Air Speed": "0.924",
      "Total Air Acceleration": "0.05",
      "SH / FH / SHFF / FHFF Frames": "36 / 51 / 26 / 36",
      "Fall Speed / Fast Fall Speed": "1.75 / 2.8",
      "Out of Shield, Up Smash": "5 frames",
      "Out of Shield, Up B or Back Air": "8 frames",
      "Out of Shield, Forward Air": "9 frames",
      "Shield Grab (Grab, post-Shieldstun)": "11 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "donkey_kong": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "24",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 8.",
        "startup": "5",
        "basedamage": "4.0",
        "shieldlag": "8",
        "shieldstun": "5",
        "advantage": "-14",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Jab 2",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "6.0",
        "shieldlag": "11",
        "shieldstun": "6",
        "advantage": "-24",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Arm intangibility on frame 6-9",
        "startup": "7",
        "basedamage": "8.0/9.0",
        "shieldlag": "7/7",
        "shieldstun": "8/9",
        "advantage": "-19/-18",
        "activeframes": "7\u20149"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "Arm intangibility on frame 5-11",
        "startup": "5",
        "basedamage": "10.0",
        "shieldlag": "8",
        "shieldstun": "10",
        "advantage": "-23",
        "activeframes": "5\u201411"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "24",
        "landinglag": "--",
        "notes": "Arm intangibility on frame 5-7",
        "startup": "6",
        "basedamage": "6.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-12",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "12.0/9.0",
        "shieldlag": "11/9",
        "shieldstun": "11/9",
        "advantage": "-14",
        "activeframes": "9\u201412/13\u201424"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "54",
        "landinglag": "--",
        "notes": "Arm and head intangibility on frame 20-26. Charge hold is frame 14.",
        "startup": "22",
        "basedamage": "22.0/21.0",
        "shieldlag": "16",
        "shieldstun": "14",
        "advantage": "-18",
        "activeframes": "22\u201423"
      },
      {
        "movename": "Up Smash",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Arm and head intangibility on frame 12-15. Charge hold is frame 6",
        "startup": "14",
        "basedamage": "19.0",
        "shieldlag": "12",
        "shieldstun": "13",
        "advantage": "-22",
        "activeframes": "14\u201415"
      },
      {
        "movename": "Down Smash",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "Arm intangibility on frame 11-14. Charge hold is frame 2",
        "startup": "11",
        "basedamage": "17.0",
        "shieldlag": "11",
        "shieldstun": "11",
        "advantage": "-33",
        "activeframes": "11\u201412/13\u201414"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "38",
        "landinglag": "10",
        "notes": "Autocancels on frame 1-9 and 27 onward",
        "startup": "10",
        "basedamage": "11.0/8.0",
        "shieldlag": "8/7",
        "shieldstun": "4/4",
        "advantage": "-6",
        "activeframes": "10\u201413/14\u201426"
      },
      {
        "movename": "Forward Air",
        "totalframes": "55",
        "landinglag": "17",
        "notes": "Autocancels on frame 56 onward",
        "startup": "18",
        "basedamage": "16.0/15.0",
        "shieldlag": "10/15",
        "shieldstun": "6/5",
        "advantage": "-11/-12",
        "activeframes": "18\u201420/21\u201423"
      },
      {
        "movename": "Back Air",
        "totalframes": "31",
        "landinglag": "11",
        "notes": "Autocancels on frame 1-6 and 31 onward",
        "startup": "7",
        "basedamage": "13.0/8.0",
        "shieldlag": "9/7",
        "shieldstun": "5/4",
        "advantage": "-6/-7",
        "activeframes": "7\u20148/9\u201416"
      },
      {
        "movename": "Up Air",
        "totalframes": "37",
        "landinglag": "15",
        "notes": "Head intangibility on frame 5-10. Autocancels on frame 1-5 and 26 onward",
        "startup": "6",
        "basedamage": "13.0",
        "shieldlag": "9",
        "shieldstun": "5",
        "advantage": "-10",
        "activeframes": "6\u201410"
      },
      {
        "movename": "Down Air",
        "totalframes": "54",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-2 and 50 onward",
        "startup": "14",
        "basedamage": "16.0",
        "shieldlag": "10",
        "shieldstun": "6",
        "advantage": "-8",
        "activeframes": "14\u201416"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Giant Punch)",
        "totalframes": "62",
        "landinglag": "--",
        "notes": "Entering charge window takes 7 frames. 4 to cancel with shield. Arm intangibility on frame 4-20.",
        "startup": "19(+7)",
        "basedamage": "10.0\u201427.0",
        "shieldlag": "8\u201414",
        "shieldstun": "10\u201422",
        "advantage": "-33 to -21",
        "activeframes": "26\u201427 (19\u201420 after starting charge)"
      },
      {
        "movename": "Giant Punch, Full Charge",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "Super armor on frame 11-20 on the ground. Takes 131 frames to reach full charge",
        "startup": "19",
        "basedamage": "28.0",
        "shieldlag": "15",
        "shieldstun": "24",
        "advantage": "-4",
        "activeframes": "19\u201420"
      },
      {
        "movename": "Side B (Headbutt)",
        "totalframes": "62",
        "landinglag": "--",
        "notes": "Super armor on frame 5-14 on the ground and in the air.",
        "startup": "20",
        "basedamage": "10.0",
        "shieldlag": "8",
        "shieldstun": "10",
        "advantage": "-32",
        "activeframes": "20\u201421"
      },
      {
        "movename": "Up B (Spinning Kong)",
        "totalframes": "104",
        "landinglag": "--",
        "notes": "Super armor on frame 8-17. Arm intangibility on frame 19-24",
        "startup": "19/25/32/40/49/55/62",
        "basedamage": "5.0/1.3/4.0",
        "shieldlag": "6/4/11",
        "shieldstun": "6/3/5",
        "advantage": "-37",
        "activeframes": "\u00af\\_(\u30c4)_/\u00af"
      },
      {
        "movename": "Spinning Kong, Air",
        "totalframes": "--",
        "landinglag": "38",
        "notes": "Past frame 12, this move hits once every 1, 2, or 3 frames, seems inconsistent. Arm intangibility from frame 10-38",
        "startup": "4/12...",
        "basedamage": "5.0/1.0/2.0",
        "shieldlag": "6/4/4",
        "shieldstun": "6/2/3",
        "advantage": "**",
        "activeframes": "\u00af\\_(\u30c4)_/\u00af"
      },
      {
        "movename": "Down B (Hand Slap)",
        "totalframes": "57",
        "landinglag": "--",
        "notes": "Each additional rep takes another 27 frames as you mash.",
        "startup": "15/26",
        "basedamage": "14.0",
        "shieldlag": "10",
        "shieldstun": "8",
        "advantage": "-23",
        "activeframes": "15\u201416/26\u201427..."
      },
      {
        "movename": "Hand Slap, Air",
        "totalframes": "49",
        "landinglag": "10",
        "notes": "--",
        "startup": "19/28",
        "basedamage": "5.0/6.0",
        "shieldlag": "6/6",
        "shieldstun": "6/6",
        "advantage": "-4",
        "activeframes": "19\u201421/28\u201430"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "46",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "21",
        "landinglag": "--",
        "notes": "Total frames includes 16 frames of hitlag",
        "startup": "2",
        "basedamage": "1.6"
      },
      {
        "movename": "Cargo Forward Throw",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "12.0"
      },
      {
        "movename": "Cargo Backward Throw",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "16",
        "basedamage": "13.0"
      },
      {
        "movename": "Cargo Up Throw",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "12.0"
      },
      {
        "movename": "Cargo Down Throw",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "17",
        "basedamage": "11.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "11.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "--",
        "startup": "14",
        "basedamage": "9.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "54",
        "landinglag": "--",
        "notes": "--",
        "startup": "19",
        "basedamage": "7.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "21/26",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "48",
        "landinglag": "10",
        "notes": "Invulnerable on frame 4-32"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "66",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "73",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "82",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "88",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "109",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22"
      }
    ],
    "stats": {
      "Weight": "127",
      "Gravity": "0.085",
      "Walk Speed": "1.365",
      "Run Speed": "1.873",
      "Initial Dash": "2.09",
      "Air Speed": "1.208",
      "Total Air Acceleration": "0.06",
      "SH / FH / SHFF / FHFF Frames": "40 / 53 / 27 / 37",
      "Fall Speed / Fast Fall Speed": "1.63 / 2.608",
      "Out of Shield, Up B (Air)": "7 frames",
      "Out of Shield, Up Air": "9 frames",
      "Out of Shield, Back Air": "10 frames",
      "Shield Grab (Grab, post-Shieldstun)": "12 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "dr_mario": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 5",
        "startup": "2",
        "basedamage": "2.9",
        "shieldlag": "9",
        "shieldstun": "4",
        "advantage": "-13",
        "activeframes": "2\u20143"
      },
      {
        "movename": "Jab 2",
        "totalframes": "21",
        "landinglag": "--",
        "notes": "Transitions to Jab 3 as early as frame 6",
        "startup": "2",
        "basedamage": "1.7",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-16",
        "activeframes": "2\u20143"
      },
      {
        "movename": "Jab 3",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "3",
        "basedamage": "4.7",
        "shieldlag": "12",
        "shieldstun": "5",
        "advantage": "-25",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "25",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "8.2",
        "shieldlag": "7",
        "shieldstun": "8",
        "advantage": "-12",
        "activeframes": "5\u20147"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "7.4",
        "shieldlag": "7",
        "shieldstun": "7",
        "advantage": "-17",
        "activeframes": "5\u201411"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "8.2/5.8",
        "shieldlag": "7/6",
        "shieldstun": "8/6",
        "advantage": "-14/-16",
        "activeframes": "5\u20147"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "11.5/7.0",
        "shieldlag": "9/7",
        "shieldstun": "19/12",
        "advantage": "-12",
        "activeframes": "6\u20149/10\u201425"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "Charge hold is frame 5.",
        "startup": "15",
        "basedamage": "20.9/17.2",
        "shieldlag": "16/15",
        "shieldstun": "14/12",
        "advantage": "-18/-20",
        "activeframes": "15\u201417"
      },
      {
        "movename": "Up Smash",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "Head Invulnerability on frame 9-13. Charge hold is frame 6.",
        "startup": "9",
        "basedamage": "16.4",
        "shieldlag": "11",
        "shieldstun": "11",
        "advantage": "-19",
        "activeframes": "9\u201413"
      },
      {
        "movename": "Down Smash",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "Charge hold is frame 2.",
        "startup": "5/14",
        "basedamage": "11.7/14.1",
        "shieldlag": "9/10",
        "shieldstun": "8/10",
        "advantage": "-30/-19",
        "activeframes": "5\u20146/14"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "45",
        "landinglag": "7",
        "notes": "Autocancels on frame 1-2 and 34 onward. Stronger the longer it's out (opposite of most \"sex kicks\").",
        "startup": "3",
        "basedamage": "5.8/9.4",
        "shieldlag": "6/8",
        "shieldstun": "3/4",
        "advantage": "-4/-3",
        "activeframes": "3\u201410/11\u201427"
      },
      {
        "movename": "Forward Air",
        "totalframes": "59",
        "landinglag": "17",
        "notes": "Auto cancels on frame 1-2 and frame 43 onward.",
        "startup": "16",
        "basedamage": "11.7/17.6/10.5",
        "shieldlag": "11/9/*",
        "shieldstun": "6/5/*",
        "advantage": "-11/-12",
        "activeframes": "16/17\u201420/21"
      },
      {
        "movename": "Back Air",
        "totalframes": "33",
        "landinglag": "10",
        "notes": "Auto cancels on frame 1-5 and frame 19 onward.",
        "startup": "6",
        "basedamage": "14.1/8.2",
        "shieldlag": "10/7",
        "shieldstun": "5/4",
        "advantage": "-5/-6",
        "activeframes": "6\u20148/9\u201413"
      },
      {
        "movename": "Up Air",
        "totalframes": "30",
        "landinglag": "8",
        "notes": "Auto cancels on frame 17 onward.",
        "startup": "4",
        "basedamage": "10.2",
        "shieldlag": "8",
        "shieldstun": "4",
        "advantage": "-4",
        "activeframes": "4\u20147"
      },
      {
        "movename": "Down Air",
        "totalframes": "44",
        "landinglag": "13",
        "notes": "Auto cancels on frame 1-5 and frame 35 onward.",
        "startup": "16",
        "basedamage": "14.1",
        "shieldlag": "10",
        "shieldstun": "5",
        "advantage": "-8",
        "activeframes": "16\u201417"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Megavitamin Pill)",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "17",
        "basedamage": "5.8/4.7",
        "shieldlag": "6/6",
        "shieldstun": "3/3",
        "advantage": "-23",
        "activeframes": "17\u201446/47\u201486"
      },
      {
        "movename": "Side B (Super Sheet)",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "Reflects on frame 7-22.",
        "startup": "12",
        "basedamage": "8.2",
        "shieldlag": "7",
        "shieldstun": "8",
        "advantage": "-15",
        "activeframes": "12\u201414"
      },
      {
        "movename": "Up B (Super Jump Punch)",
        "totalframes": "--",
        "landinglag": "30",
        "notes": "--",
        "startup": "3/7/9/11/13/15/17",
        "basedamage": "14.1 / 7.0",
        "shieldlag": "10/7",
        "shieldstun": "13/7",
        "advantage": "--",
        "activeframes": "3\u20145/6\u201419"
      },
      {
        "movename": "Down B (Dr. Tornado)",
        "totalframes": "74",
        "landinglag": "--",
        "notes": "Armor on frame 5-9 but only on the ground.",
        "startup": "10/14/18/22/26/30/40",
        "basedamage": "1.8/3.5",
        "shieldlag": "4/11",
        "shieldstun": "3/4",
        "advantage": "-30",
        "activeframes": "10/14/18/22/26/30/40\u201441"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "Total frames includes 14 frames of hitlag.",
        "notes": "--",
        "startup": "1",
        "basedamage": "1.5"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "9.4"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "59",
        "landinglag": "--",
        "notes": "--",
        "startup": "40",
        "basedamage": "12.9"
      },
      {
        "movename": "Up Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "18",
        "basedamage": "8.2"
      },
      {
        "movename": "Down Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "18",
        "basedamage": "5.8"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17."
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15."
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16."
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "52",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-29."
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "71",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "81",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "87",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "100",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "116",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      }
    ],
    "stats": {
      "Weight": "98",
      "Gravity": "0.087",
      "Walk Speed": "0.917301",
      "Run Speed": "1.397792",
      "Initial Dash": "1.936",
      "Air Speed": "0.9238784",
      "Total Air Acceleration": "0.061184",
      "SH / FH / SHFF / FHFF Frames": "34 / 51 / 23 / 35",
      "Fall Speed / Fast Fall Speed": "1.5 / 2.4",
      "Out of Shield, Up B": "3 frames",
      "Out of Shield, Neutral Air": "6 frames",
      "Out of Shield, Up Air": "7 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "duck_hunt": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "25",
        "landinglag": "--",
        "notes": "Transitions to jab 2 as early as frame 7.",
        "startup": "4",
        "basedamage": "1.5",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-18",
        "activeframes": "4"
      },
      {
        "movename": "Jab 2",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "Transitions to jab 3 as early as frame 8 and rapid jab as early as frame 7",
        "startup": "5",
        "basedamage": "1.5",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-19",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Jab 3",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "5.0",
        "shieldlag": "12",
        "shieldstun": "6",
        "advantage": "-21",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "5/7/9/...",
        "basedamage": "0.4",
        "shieldlag": "4",
        "shieldstun": "3",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "3.0",
        "shieldlag": "10",
        "shieldstun": "4",
        "advantage": "-36",
        "activeframes": "5"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "8.0",
        "shieldlag": "7",
        "shieldstun": "8",
        "advantage": "-15",
        "activeframes": "8\u201411"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "7.0",
        "shieldlag": "7",
        "shieldstun": "7",
        "advantage": "-13",
        "activeframes": "7\u201411"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "8.0",
        "shieldlag": "7",
        "shieldstun": "8",
        "advantage": "-13",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "10.0/7.0",
        "shieldlag": "8/7",
        "shieldstun": "10/7",
        "advantage": "-23",
        "activeframes": "10\u201413(14\u201419)"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "66",
        "landinglag": "--",
        "notes": "Charge hold is frame 5.",
        "startup": "17/23/29",
        "basedamage": "4.0/9.0",
        "shieldlag": "5/7",
        "shieldstun": "4/7",
        "advantage": "-30",
        "activeframes": "17\u201418/23\u201424/29\u201430"
      },
      {
        "movename": "Up Smash",
        "totalframes": "57",
        "landinglag": "--",
        "notes": "Charge hold is frame 5.",
        "startup": "12/20/28",
        "basedamage": "2.5/10",
        "shieldlag": "5/8",
        "shieldstun": "3/7",
        "advantage": "-22",
        "activeframes": "12\u201413/20\u201421/28\u201429"
      },
      {
        "movename": "Down Smash",
        "totalframes": "57",
        "landinglag": "--",
        "notes": "Charge hold is frame 2.",
        "startup": "12/20/28",
        "basedamage": "5.0/6.0",
        "shieldlag": "6/6",
        "shieldstun": "4/5",
        "advantage": "-24",
        "activeframes": "12\u201413/20\u201421/28\u201429"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "55",
        "landinglag": "10",
        "notes": "Autocancels on frame 1-3 and 44 onward",
        "startup": "6",
        "basedamage": "11./5.0",
        "shieldlag": "8/6",
        "shieldstun": "4/3",
        "advantage": "-6/-7",
        "activeframes": "6\u20148(9\u201437)"
      },
      {
        "movename": "Forward Air",
        "totalframes": "44",
        "landinglag": "9",
        "notes": "Autocancels on frame 1-5 and 46 onward",
        "startup": "7",
        "basedamage": "10.0/6.5/7.5",
        "shieldlag": "10/6/8",
        "shieldstun": "4/3/3",
        "advantage": "-5/-6/-6",
        "activeframes": "7(8\u20149/10\u201411)"
      },
      {
        "movename": "Back Air",
        "totalframes": "41",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-3 and 35 onward",
        "startup": "7",
        "basedamage": "12.5/10.0",
        "shieldlag": "11/8",
        "shieldstun": "5/4",
        "advantage": "-9/-10",
        "activeframes": "7\u20148(9\u201410)"
      },
      {
        "movename": "Up Air",
        "totalframes": "39",
        "landinglag": "11",
        "notes": "Autocancels on frame 32 onward",
        "startup": "6/12/20",
        "basedamage": "3.0/6.0",
        "shieldlag": "5/6",
        "shieldstun": "2/3",
        "advantage": "-9/-8",
        "activeframes": "6\u20147/12\u201413/20\u201421"
      },
      {
        "movename": "Down Air",
        "totalframes": "49",
        "landinglag": "15",
        "notes": "Autocancels on frame 1-3 and 45 onward",
        "startup": "14/20",
        "basedamage": "5.0/10.0",
        "shieldlag": "6/8",
        "shieldstun": "3/4",
        "advantage": "-12/-11",
        "activeframes": "14\u201415/20\u201421"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Trick Shot)",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "Explodes next frame after making contact. Can shoot the can every 12 frames. Can generates on frame 1. After eighth shot, can will auto explode after 76 frames but can still be manipulated.",
        "startup": "1 / 16 / 1\u20142",
        "basedamage": "~2.0/10.0",
        "shieldlag": "-/8",
        "shieldstun": "-/4",
        "advantage": "--",
        "activeframes": "1 / 16\u2014** / 1\u20142"
      },
      {
        "movename": "Side B (Clay Shooting)",
        "totalframes": "64",
        "landinglag": "--",
        "notes": "Can only detonate when clay is immobile or rebounding after a hit. \"Missed shots\" occur on frame 4.",
        "startup": "17",
        "basedamage": "2.0",
        "shieldlag": "9",
        "shieldstun": "2",
        "advantage": "--",
        "activeframes": "17\u2014**"
      },
      {
        "movename": "Clay Shooting, Detonate",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "4/5/14/23",
        "basedamage": "2.5/3.0",
        "shieldlag": "7/5",
        "shieldstun": "2/2",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Up B (Duck Jump)",
        "totalframes": "--",
        "landinglag": "30",
        "notes": "Can cancel into air dodge or attacks as early as frame 51. Cancels will avoid the special fall state and landing lag.",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Down B (Wild Gunman)",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "Gunman appears on frame 6",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Wild Gunman, Leader in brown coat",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "Disappears on frame 151",
        "startup": "55",
        "basedamage": "10.0",
        "shieldlag": "12",
        "shieldstun": "4",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Wild Gunman, Black suit",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "Disappears on frame 163",
        "startup": "67",
        "basedamage": "9.0",
        "shieldlag": "11",
        "shieldstun": "4",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Wild Gunman, Sombrero guy",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "Disappears on frame 170",
        "startup": "73",
        "basedamage": "11.0",
        "shieldlag": "13",
        "shieldstun": "4",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Wild Gunman, Short cowboy",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "Disappears on frame 175",
        "startup": "79",
        "basedamage": "8.0",
        "shieldlag": "11",
        "shieldstun": "3",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Wild Gunman, Tall cowboy",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "Disappears on frame 187",
        "startup": "91",
        "basedamage": "8.0",
        "shieldlag": "11",
        "shieldstun": "3",
        "advantage": "--",
        "activeframes": "**"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "Total frames includes 14 frames of hitlag.",
        "notes": "--",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "18",
        "basedamage": "8.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "9.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "18",
        "basedamage": "6.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "24",
        "basedamage": "5.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17."
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15."
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16."
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "49",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-27."
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "66",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "78",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "83",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "100",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "113",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      }
    ],
    "stats": {
      "Weight": "86",
      "Gravity": "0.076",
      "Walk Speed": "1.213",
      "Run Speed": "1.793",
      "Initial Dash": "1.76",
      "Air Speed": "1.155",
      "Total Air Acceleration": "0.08",
      "SH / FH / SHFF / FHFF Frames": "41 / 55 / 28 / 37",
      "Fall Speed / Fast Fall Speed": "1.65 / 2.64",
      "Out of Shield, Neutral Air or Up Air": "9 frames",
      "Out of Shield, Forward Air or Back Air": "10 frames",
      "Out of Shield, Up Smash": "12 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "falco": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "22",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 5.",
        "startup": "2",
        "basedamage": "1.5",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-17",
        "activeframes": "2"
      },
      {
        "movename": "Jab 2",
        "totalframes": "25",
        "landinglag": "--",
        "notes": "Transitions to Rapid Jab as early as frame 7.",
        "startup": "3",
        "basedamage": "1.5",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-19",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "5/7/9/...",
        "basedamage": "0.3",
        "shieldlag": "4",
        "shieldstun": "3",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "3.0",
        "shieldlag": "10",
        "shieldstun": "4",
        "advantage": "-31",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "24",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "6.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-12",
        "activeframes": "6\u20148"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "5/12",
        "basedamage": "3.5/2.7/4.0",
        "shieldlag": "5/5/8",
        "shieldstun": "4/4/5",
        "advantage": "-12",
        "activeframes": "5(6\u20149)/12(13\u201418)"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "13.0/12.0/10.5",
        "shieldlag": "9/9/8",
        "shieldstun": "12/11/10",
        "advantage": "-9/-10/-11",
        "activeframes": "10\u201412"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "9.0/6.0",
        "shieldlag": "7/6",
        "shieldstun": "9/6",
        "advantage": "-22",
        "activeframes": "8\u201411"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "Charge hold is frame 9",
        "startup": "17",
        "basedamage": "16.0",
        "shieldlag": "10",
        "shieldstun": "11",
        "advantage": "-20",
        "activeframes": "17\u201419"
      },
      {
        "movename": "Up Smash",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Leg intangibility on frame 7-18. Charge hold is frame 3",
        "startup": "7/13",
        "basedamage": "4.0/13.0",
        "shieldlag": "5/12",
        "shieldstun": "4/9",
        "advantage": "-27",
        "activeframes": "7(8\u201412)/13\u201418"
      },
      {
        "movename": "Down Smash",
        "totalframes": "46",
        "landinglag": "--",
        "notes": "Leg intangibility on frame 3-8. Charge hold is frame 1",
        "startup": "8",
        "basedamage": "15.0",
        "shieldlag": "10",
        "shieldstun": "10",
        "advantage": "-28",
        "activeframes": "8\u201410"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "48",
        "landinglag": "9",
        "notes": "Autocancels on frame 1-2 and 43",
        "startup": "3/6/10/19",
        "basedamage": "3.0/2.0/4.0",
        "shieldlag": "5/4/11",
        "shieldstun": "2/2/3",
        "advantage": "-7/-6",
        "activeframes": "3\u20145/6\u20149/10\u201413/19\u201420"
      },
      {
        "movename": "Forward Air",
        "totalframes": "49",
        "landinglag": "15",
        "notes": "Landing hit on frame 1. Autocancels on frame 1-4 and 42 onward",
        "startup": "7/11/15/19/23/26",
        "basedamage": "1.0/4.0/3.0",
        "shieldlag": "4/14/10",
        "shieldstun": "2/3/4",
        "advantage": "-10",
        "activeframes": "7/11/15/19/23/26\u201427"
      },
      {
        "movename": "Back Air",
        "totalframes": "37",
        "landinglag": "13",
        "notes": "Autocancels on frame 1-3 and 20 onward",
        "startup": "9",
        "basedamage": "13.0/7.0",
        "shieldlag": "9/7",
        "shieldstun": "5/3",
        "advantage": "-8/-10",
        "activeframes": "9\u201410"
      },
      {
        "movename": "Up Air",
        "totalframes": "33",
        "landinglag": "9",
        "notes": "Autocancels on frame 1-3 and 23 onward",
        "startup": "7",
        "basedamage": "9.0",
        "shieldlag": "7",
        "shieldstun": "4",
        "advantage": "-5",
        "activeframes": "7\u201411"
      },
      {
        "movename": "Down Air",
        "totalframes": "51",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-3 and 30 onward",
        "startup": "10",
        "basedamage": "13.0/8.0",
        "shieldlag": "12/7",
        "shieldstun": "5/4",
        "advantage": "-9/-10",
        "activeframes": "10\u201414/15\u201424"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Blaster)",
        "totalframes": "41/38",
        "landinglag": "--",
        "notes": "Fire rate of one shot per 26 frames.",
        "startup": "8/7",
        "basedamage": "3.0",
        "shieldlag": "7",
        "shieldstun": "2",
        "advantage": "-24/-22",
        "activeframes": "8\u201434/7\u201433"
      },
      {
        "movename": "Side B (Falco Phantasm)",
        "totalframes": "55/66",
        "landinglag": "16",
        "notes": "A frame 18 hit is impossible unless unnaturally inside of an opponent. Endlag is 31 when blocked on the ground, and 24 from the air. At lowest possible altitude Falco does not suffer hitlag from this attack.",
        "startup": "18/18",
        "basedamage": "7.0",
        "shieldlag": "9/7",
        "shieldstun": "3/3",
        "advantage": "-19/-14",
        "activeframes": "(18\u201421/21\u201424)/(18\u201424)"
      },
      {
        "movename": "Up B (Fire Bird)",
        "totalframes": "85",
        "landinglag": "18",
        "notes": "Starts traveling on 44. That hit is the only one that deals 3 damage. Total frames assumes travel along the ground",
        "startup": "20/26/28/30/32/34/36/38/44/49/51/53/55/57/59/61",
        "basedamage": "2.0/3.0",
        "shieldlag": "4",
        "shieldstun": "3",
        "advantage": "-21",
        "activeframes": "20/26/28/30/32/34/36/38/44/49/51/53/55/57/59/61"
      },
      {
        "movename": "Down B (Reflector)",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "Reflects on frame 1-33",
        "startup": "5",
        "basedamage": "5.0",
        "shieldlag": "9",
        "shieldstun": "6",
        "advantage": "-33",
        "activeframes": "5\u201414"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "Total frames includes 14 frames of hitlag.",
        "notes": "--",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "10/12",
        "basedamage": "4.0/3.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "Victim thrown at 9. Shoots blaster on 18.",
        "startup": "9",
        "basedamage": "6.0/3.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "Victim thrown at 7. Shoots blaster on 18.",
        "startup": "7",
        "basedamage": "4.0/4.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "--",
        "startup": "26/33",
        "basedamage": "2.0/3.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17."
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15."
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16."
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "43",
        "landinglag": "10",
        "notes": "Invulnerable on frame 2-27."
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "61",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-20."
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "67",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-20."
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "73",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-20."
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "85",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-20."
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "94",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-20."
      }
    ],
    "stats": {
      "Weight": "82",
      "Gravity": "0.130",
      "Walk Speed": "1.344",
      "Run Speed": "1.619",
      "Initial Dash": "2.035",
      "Air Speed": "0.977",
      "Total Air Acceleration": "0.1",
      "SH / FH / SHFF / FHFF Frames": "32 / 57 / 23 / 41",
      "Fall Speed / Fast Fall Speed": "1.8 / 2.88",
      "Out of Shield, Neutral Air": "6 frames",
      "Out of Shield, Up Smash": "7 frames",
      "Out of Shield, Forward Air or Up Air": "10 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "fox": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "17",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 5.",
        "startup": "2",
        "basedamage": "1.8",
        "shieldlag": "8",
        "shieldstun": "3",
        "advantage": "-12",
        "activeframes": "2"
      },
      {
        "movename": "Jab 2",
        "totalframes": "20",
        "landinglag": "--",
        "notes": "Transitions to Rapid Jab as early as frame 6.",
        "startup": "2",
        "basedamage": "1.0",
        "shieldlag": "5",
        "shieldstun": "2",
        "advantage": "-16",
        "activeframes": "2"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "5/7/9/...",
        "basedamage": "0.6",
        "shieldlag": "4",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "5/7/9..."
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "3",
        "basedamage": "2.0",
        "shieldlag": "14",
        "shieldstun": "3",
        "advantage": "-32",
        "activeframes": "3"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "23",
        "landinglag": "--",
        "notes": "Deals 1.0 more damage when angled.",
        "startup": "6",
        "basedamage": "6.0/7.0",
        "shieldlag": "6/7",
        "shieldstun": "6/7",
        "advantage": "-11/-10",
        "activeframes": "6\u20148"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "--",
        "startup": "3",
        "basedamage": "6.0/8.0",
        "shieldlag": "6/7",
        "shieldstun": "6/8",
        "advantage": "-18/-16",
        "activeframes": "3\u20145"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "8.0/7.0",
        "shieldlag": "7/7",
        "shieldstun": "8/7",
        "advantage": "-12/-13",
        "activeframes": "7\u20148"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "6.0/4.0",
        "shieldlag": "7/6",
        "shieldstun": "10/7",
        "advantage": "-17",
        "activeframes": "4\u20147"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "Charge hold is frame 4",
        "startup": "13",
        "basedamage": "14.0",
        "shieldlag": "10",
        "shieldstun": "10",
        "advantage": "-22",
        "activeframes": "13\u201414"
      },
      {
        "movename": "Up Smash",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "Charge hold is frame 2",
        "startup": "8",
        "basedamage": "16.0/11.0",
        "shieldlag": "10/8",
        "shieldstun": "11/8",
        "advantage": "-36",
        "activeframes": "8\u20149"
      },
      {
        "movename": "Down Smash",
        "totalframes": "52",
        "landinglag": "--",
        "notes": "Leg intangibility on frame 6-7. Charge hold is frame 2",
        "startup": "6",
        "basedamage": "14.0",
        "shieldlag": "10",
        "shieldstun": "10",
        "advantage": "-36",
        "activeframes": "6\u20147"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "38",
        "landinglag": "7",
        "notes": "Autocancels on frame 1-3 and 32 onward",
        "startup": "4",
        "basedamage": "9.0/6.0",
        "shieldlag": "7/6",
        "shieldstun": "4/3",
        "advantage": "-3/-4",
        "activeframes": "4\u20146/7\u201423"
      },
      {
        "movename": "Forward Air",
        "totalframes": "43",
        "landinglag": "18",
        "notes": "Landing hit on frame 1. Autocancels on frame 46 onward",
        "startup": "7/11/16/21/26",
        "basedamage": "1.8/1.2/1.72.7/4.8/2.0",
        "shieldlag": "4/4/4/5/12/9",
        "shieldstun": "2/2/2/2/3/3",
        "advantage": "-14",
        "activeframes": "7\u20148/11\u201412/16\u201417/21\u201422/26\u201427"
      },
      {
        "movename": "Back Air",
        "totalframes": "48",
        "landinglag": "9",
        "notes": "Autocancels on frame 1-6 and 18 onward",
        "startup": "9",
        "basedamage": "13.0",
        "shieldlag": "9",
        "shieldstun": "5",
        "advantage": "-4",
        "activeframes": "9\u201411"
      },
      {
        "movename": "Up Air",
        "totalframes": "35",
        "landinglag": "13",
        "notes": "Autocancels on frame 1-8 and 25 onward",
        "startup": "9/12",
        "basedamage": "5.0/10.0",
        "shieldlag": "6/8",
        "shieldstun": "3/4",
        "advantage": "-10/-9",
        "activeframes": "9\u201410/12\u201413"
      },
      {
        "movename": "Down Air",
        "totalframes": "49",
        "landinglag": "17",
        "notes": "Landing hit on frame 1. Autocancels on frame 1-4 and 28 onward",
        "startup": "5/8/11/14/17/20/23",
        "basedamage": "1.4/3.0/1.0",
        "shieldlag": "4/10/8",
        "shieldstun": "2/2/2",
        "advantage": "-14",
        "activeframes": "5\u20146/8\u20149/11\u201412/14\u201415/17\u201418/20\u201421/23/**"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Blaster)",
        "totalframes": "36, 34",
        "landinglag": "--",
        "notes": "Fire rate is one shot per 10 frames.",
        "startup": "11/13/20, 9/11/18",
        "basedamage": "3.0/2.0/1.4",
        "shieldlag": "5/4/4",
        "shieldstun": "2/2/2",
        "advantage": "-18/-19/-19",
        "activeframes": "11\u201412/13\u201419/20\u201432, 9\u201410/11\u201417/18\u201430"
      },
      {
        "movename": "Side B (Fox Illusion)",
        "totalframes": "55/72",
        "landinglag": "16",
        "notes": "Fox does not suffer hitlag/shieldlag from this attack. Advantage assumes lowest altitude possible.",
        "startup": "25/25",
        "basedamage": "8.0/5.0",
        "shieldlag": "7/6",
        "shieldstun": "3/3",
        "advantage": "-20/-28",
        "activeframes": "25\u201429/25\u201429"
      },
      {
        "movename": "Up B (Fire Fox)",
        "totalframes": "91",
        "landinglag": "20",
        "notes": "Total frames is when traveling along the ground.",
        "startup": "20/22/24/26/28/30/32/43/47",
        "basedamage": "1.7/16.0",
        "shieldlag": "4/10",
        "shieldstun": "3/14",
        "advantage": "-34",
        "activeframes": "20/22/24/26/28/30/32/43\u201446/47\u201472"
      },
      {
        "movename": "Down B (Reflector)",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "Invulnerable on frame 2-3 Reflects as early as frame 4.",
        "startup": "3",
        "basedamage": "2.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-30",
        "activeframes": "--"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "15",
        "landinglag": "Total frames includes 11 frames of hitlag.",
        "notes": "--",
        "startup": "1",
        "basedamage": "1.0"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "10/11",
        "basedamage": "4.0/3.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Victim is thrown at 10. Blaster shots at 16, 19, 22.",
        "startup": "10/16/19/22",
        "basedamage": "2.0/2.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Victim is thrown at 7. Blaster shots at 18, 21, 24.",
        "startup": "7/18/21/24",
        "basedamage": "2.0/2.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "54",
        "landinglag": "--",
        "notes": "--",
        "startup": "26/29/32/34",
        "basedamage": "2.0/1.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "18/23",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-14."
      },
      {
        "movename": "Forward Roll",
        "totalframes": "26",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-12."
      },
      {
        "movename": "Backward Roll",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-14."
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "38",
        "landinglag": "10",
        "notes": "Invulnerable on frame 2-26."
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "54",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19."
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "59",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19."
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "64",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19."
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "70",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19."
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "75",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19."
      }
    ],
    "stats": {
      "Weight": "77",
      "Gravity": "0.230",
      "Walk Speed": "1.523",
      "Run Speed": "2.402",
      "Initial Dash": "2.09",
      "Air Speed": "1.11",
      "Total Air Acceleration": "0.09",
      "SH / FH / SHFF / FHFF Frames": "24 / 36 / 17 / 27",
      "Fall Speed / Fast Fall Speed": "2.1 / 3.36",
      "Out of Shield, Down B, Air": "6 frames",
      "Out of Shield, Neutral Air": "7 frames",
      "Out of Shield, Down Air or Up Smash": "8 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "ganondorf": {
    "ground_attacks": [
      {
        "movename": "Jab",
        "totalframes": "26",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "11.0",
        "shieldlag": "13",
        "shieldstun": "10",
        "advantage": "-8",
        "activeframes": "7\u20148"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "13.0/14.0",
        "shieldlag": "9/10",
        "shieldstun": "12/13",
        "advantage": "-17/-16",
        "activeframes": "10\u201412"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "95",
        "landinglag": "--",
        "notes": "Flames hit on frame 62 above Ganon",
        "startup": "60",
        "basedamage": "24.0/13.0",
        "shieldlag": "14/9",
        "shieldstun": "21/12",
        "advantage": "-14",
        "activeframes": "60\u201461(62\u201463) / Windboxes 6\u201452"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "14.0",
        "shieldlag": "10",
        "shieldstun": "13",
        "advantage": "-12",
        "activeframes": "10\u201412"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "15.0/11.0",
        "shieldlag": "10/8",
        "shieldstun": "14/13",
        "advantage": "-9",
        "activeframes": "10\u201412/13\u201419"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "69",
        "landinglag": "--",
        "notes": "Charge hold is frame 14. Hits targets above him on frame 29",
        "startup": "29",
        "basedamage": "24.0",
        "shieldlag": "14",
        "shieldstun": "15",
        "advantage": "-24",
        "activeframes": "29\u201431"
      },
      {
        "movename": "Up Smash",
        "totalframes": "61",
        "landinglag": "--",
        "notes": "Charge hold is frame 9",
        "startup": "20",
        "basedamage": "24.0/21.0",
        "shieldlag": "14/13",
        "shieldstun": "15/14",
        "advantage": "-25",
        "activeframes": "20\u201425"
      },
      {
        "movename": "Down Smash",
        "totalframes": "59",
        "landinglag": "--",
        "notes": "Charge hold is frame 4",
        "startup": "15/35",
        "basedamage": "5.0/15.0",
        "shieldlag": "6/10",
        "shieldstun": "4/10",
        "advantage": "-39/-13",
        "activeframes": "15\u201418/35\u201438"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "41",
        "landinglag": "10",
        "notes": "Autocancels on frame 1-3 and 37 onward",
        "startup": "7/17",
        "basedamage": "(7.0/5.25)(12.0/ 9.5)",
        "shieldlag": "(7/6)(11/9)",
        "shieldstun": "(3/3)(5/4)",
        "advantage": "(-7/-7)(-5/-6)",
        "activeframes": "(7\u20148/9\u201412)(17\u201418/19\u201426)"
      },
      {
        "movename": "Forward Air",
        "totalframes": "44",
        "landinglag": "13",
        "notes": "Autocancels on frame 1-6 and 45 onward",
        "startup": "14",
        "basedamage": "17.0/18.0",
        "shieldlag": "11/13",
        "shieldstun": "6/6",
        "advantage": "-7/-7",
        "activeframes": "14\u201419"
      },
      {
        "movename": "Back Air",
        "totalframes": "35",
        "landinglag": "11",
        "notes": "Autocancels on frame 1-6 and 22 onward",
        "startup": "10",
        "basedamage": "17/18.5",
        "shieldlag": "11/14",
        "shieldstun": "6/6",
        "advantage": "-4/-4",
        "activeframes": "10\u201412"
      },
      {
        "movename": "Up Air",
        "totalframes": "33",
        "landinglag": "11",
        "notes": "Autocancels on frame 25 onward",
        "startup": "8",
        "basedamage": "13.0/12.0/12.0/10.0/8.0/6.0",
        "shieldlag": "9/9/9/8/7/6",
        "shieldstun": "5/5/5/4/4/3",
        "advantage": "-6/-6/-6/-7/-7/-8",
        "activeframes": "8\u201410/11\u201413/14\u201416 (Close/Early/Late)"
      },
      {
        "movename": "Down Air",
        "totalframes": "44",
        "landinglag": "16",
        "notes": "Autocancels on frame 1-3 and 32 onward",
        "startup": "16",
        "basedamage": "19.0/17.0",
        "shieldlag": "15/16",
        "shieldstun": "7/6",
        "advantage": "-9/-10",
        "activeframes": "16\u201418"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Warlock Punch)",
        "totalframes": "117/127",
        "landinglag": "--",
        "notes": "Super armor on frame 11-66",
        "startup": "70/80",
        "basedamage": "30.0/37.0",
        "shieldlag": "15/16",
        "shieldstun": "26/31",
        "advantage": "-20/-14",
        "activeframes": "70\u201473/80\u201483"
      },
      {
        "movename": "Neutral B, Air (Warlock Punch, Air)",
        "totalframes": "117/127",
        "landinglag": "--",
        "notes": "Does not have Super armor.",
        "startup": "70/80",
        "basedamage": "38.0/40.0",
        "shieldlag": "16/16",
        "shieldstun": "32/34",
        "advantage": "-14/-12",
        "activeframes": "70\u201473/80\u201483"
      },
      {
        "movename": "Side B (Flame Choke)",
        "totalframes": "59",
        "landinglag": "--",
        "notes": "Damage dealt 32 frames after a grab. 57 total frames.",
        "startup": "16",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "16\u201430"
      },
      {
        "movename": "Flame Choke, Success",
        "totalframes": "57",
        "landinglag": "--",
        "notes": "Armor on frame 18-41",
        "startup": "32",
        "basedamage": "12.0",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "32"
      },
      {
        "movename": "Side B, Air (Flame Choke, Air)",
        "totalframes": "--",
        "landinglag": "29/20",
        "notes": "29 landing lag if you don't enter special fall. 20 if you do. Opponents can mash out of air flame choke to prevent Ganoncides, with opponents who have lower damage than Ganondorf being able to break out more quickly.",
        "startup": "16",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "16\u201428"
      },
      {
        "movename": "Side B, Air Success (Flame Choke, Air Success)",
        "totalframes": "--",
        "landinglag": "30",
        "notes": "Damage dealt on frame 1 of landing. Untechable knockdown.",
        "startup": "--",
        "basedamage": "15.0",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "1 (Landing)"
      },
      {
        "movename": "Up B (Dark Dive)",
        "totalframes": "--",
        "landinglag": "30",
        "notes": "First startup is for the grab.",
        "startup": "14",
        "basedamage": "7.0",
        "shieldlag": "7",
        "shieldstun": "7",
        "advantage": "--",
        "activeframes": "14\u201428(Grab)/34\u201436(Attack)"
      },
      {
        "movename": "Dark Dive, Grab Success",
        "totalframes": "80",
        "landinglag": "--",
        "notes": "--",
        "startup": "3/11/19/27/32",
        "basedamage": "1.9/9.0",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Down B (Wizard's Foot)",
        "totalframes": "60/68",
        "landinglag": "--",
        "notes": "Total frames is 68 if you go over an edge.",
        "startup": "16",
        "basedamage": "14.0/16.0",
        "shieldlag": "10/10",
        "shieldstun": "13/14",
        "advantage": "-29",
        "activeframes": "16\u201435"
      },
      {
        "movename": "Down B, Air (Wizard's Foot, Air)",
        "totalframes": "57",
        "landinglag": "44",
        "notes": "Hitbox on frame 2 of landing.",
        "startup": "16",
        "basedamage": "15.0/14.0/8.0",
        "shieldlag": "10/10",
        "shieldstun": "14/13/8",
        "advantage": "-34",
        "activeframes": "16\u201418/19\u201429/2\u20143"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "46",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "21",
        "landinglag": "Total frames includes 15 frames of hitlag.",
        "notes": "--",
        "startup": "2",
        "basedamage": "1.6"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "11/13",
        "basedamage": "5.0/8.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "12/14",
        "basedamage": "5.0/5.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "--",
        "startup": "11/13",
        "basedamage": "10.0/3.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "23",
        "basedamage": "7.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "23/28",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-18."
      },
      {
        "movename": "Forward Roll",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-16."
      },
      {
        "movename": "Backward Roll",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-17."
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "46",
        "landinglag": "10",
        "notes": "Invulnerable on frame 4-32."
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "66",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22."
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "73",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22."
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "79",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22."
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "91",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22."
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "103",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22."
      }
    ],
    "stats": {
      "Weight": "118",
      "Gravity": "0.108",
      "Walk Speed": "0.767",
      "Run Speed": "1.34",
      "Initial Dash": "1.87",
      "Air Speed": "0.83",
      "Total Air Acceleration": "0.04",
      "SH / FH / SHFF / FHFF Frames": "30 / 41 / 20 / 29",
      "Fall Speed / Fast Fall Speed": "1.65 / 2.64",
      "Out of Shield, Neutral Air": "10 frames",
      "Out of Shield, Up Air": "11 frames",
      "Out of Shield, Back Air": "13 frames",
      "Shield Grab (Grab, post-Shieldstun)": "12 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "greninja": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "21",
        "landinglag": "--",
        "notes": "Transitions to jab 2 as early as frame 6",
        "startup": "3",
        "basedamage": "2.0",
        "shieldlag": "8",
        "shieldstun": "3",
        "advantage": "-15",
        "activeframes": "3"
      },
      {
        "movename": "Jab 2",
        "totalframes": "21",
        "landinglag": "--",
        "notes": "Transitions to jab 3 as early as frame 6",
        "startup": "3",
        "basedamage": "2.0",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-15",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Jab 3",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "3.0",
        "shieldlag": "10",
        "shieldstun": "4",
        "advantage": "-26",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "21",
        "landinglag": "--",
        "notes": "--",
        "startup": "4/7/10...",
        "basedamage": "0.5",
        "shieldlag": "4",
        "shieldstun": "3",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "2.0",
        "shieldlag": "9",
        "shieldstun": "3",
        "advantage": "-39",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "7.3/8.3",
        "shieldlag": "7/7",
        "shieldstun": "7/8",
        "advantage": "-15/-14",
        "activeframes": "10\u201412"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "4.5",
        "shieldlag": "5",
        "shieldstun": "5",
        "advantage": "-18",
        "activeframes": "9\u201412"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "22",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "4.0",
        "shieldlag": "5",
        "shieldstun": "5",
        "advantage": "-12",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "28",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "8.0",
        "shieldlag": "7",
        "shieldstun": "8",
        "advantage": "-13",
        "activeframes": "7\u201411"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Charge hold is frame 7",
        "startup": "13",
        "basedamage": "14.0",
        "shieldlag": "10",
        "shieldstun": "10",
        "advantage": "-26",
        "activeframes": "13\u201415"
      },
      {
        "movename": "Up Smash",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "Charge hold is frame 8",
        "startup": "12/18",
        "basedamage": "5.0/14.0/11.0",
        "shieldlag": "8/14/8",
        "shieldstun": "4/10/8",
        "advantage": "-23",
        "activeframes": "12\u201417/18(19\u201420/21)"
      },
      {
        "movename": "Down Smash",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Charge hold is frame 4",
        "startup": "11",
        "basedamage": "13.0/11.0",
        "shieldlag": "9/?",
        "shieldstun": "9/?",
        "advantage": "-29",
        "activeframes": "11\u201412(13)"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "52",
        "landinglag": "7",
        "notes": "Autocancels on frame 1-9 and 40 onward",
        "startup": "12",
        "basedamage": "11.0/6.0",
        "shieldlag": "8/6",
        "shieldstun": "4/3",
        "advantage": "-3/-4",
        "activeframes": "12\u201413(14\u201419)"
      },
      {
        "movename": "Forward Air",
        "totalframes": "54",
        "landinglag": "11",
        "notes": "Autocancels on frame 1-12 and 40 onward",
        "startup": "16",
        "basedamage": "14.0",
        "shieldlag": "11",
        "shieldstun": "5",
        "advantage": "-6",
        "activeframes": "16\u201417"
      },
      {
        "movename": "Back Air",
        "totalframes": "40",
        "landinglag": "10",
        "notes": "Autocancels on frame 1-3 and 35 onward",
        "startup": "5/7/11",
        "basedamage": "3.0/2.5/6.0",
        "shieldlag": "5/5/13",
        "shieldstun": "2/2/3",
        "advantage": "-8/-7",
        "activeframes": "5/7/11\u201414"
      },
      {
        "movename": "Up Air",
        "totalframes": "41",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-2 and 35 onward",
        "startup": "7/10/13/16/19/22",
        "basedamage": "1.3/3.0",
        "shieldlag": "4/13",
        "shieldstun": "2/2",
        "advantage": "-12/-12",
        "activeframes": "7\u20148/10\u201411/13\u201414/16\u201417/19\u201420/22"
      },
      {
        "movename": "Down Air",
        "totalframes": "51",
        "landinglag": "30",
        "notes": "On-hit bounce animation takes 20 frames before you can act. Autocancels on frame 1-2 and 53 onward",
        "startup": "17",
        "basedamage": "8.0",
        "shieldlag": "15",
        "shieldstun": "4",
        "advantage": "-16",
        "activeframes": "17\u201419(20\u201445)"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Water Shuriken)",
        "totalframes": "45\u201481",
        "landinglag": "--",
        "notes": "startup is 6 and total frames is 31 on release. Full charge version hits on frames 1/7/13/19/25/28",
        "startup": "20\u201460",
        "basedamage": "3.0\u201410.8, 1.0/9.0",
        "shieldlag": "5\u20148/4/11",
        "shieldstun": "2\u20144/2/4/10/11",
        "advantage": "-18 to -13",
        "activeframes": "20\u201435 \u2014 60\u201495"
      },
      {
        "movename": "Side B (Shadow Sneak)",
        "totalframes": "63",
        "landinglag": "--",
        "notes": "Startup is 24 from release. Must ready this move for at least five frames.",
        "startup": "24(+5)",
        "basedamage": "10.0/12.0",
        "shieldlag": "10/12",
        "shieldstun": "10/11",
        "advantage": "-29/-28",
        "activeframes": "24\u201425"
      },
      {
        "movename": "Up B (Hydro Pump)",
        "totalframes": "--",
        "landinglag": "32",
        "notes": "--",
        "startup": "19",
        "basedamage": "2.0",
        "shieldlag": "8",
        "shieldstun": "2",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Down B (Substitute)",
        "totalframes": "69",
        "landinglag": "--",
        "notes": "Invulnerable on frame 7. Counters on frame 8-34",
        "startup": "8 (Start of Counter)",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "8\u201434 (counter)"
      },
      {
        "movename": "Down B, Attack (Substitute, Attack)",
        "totalframes": "63",
        "landinglag": "--",
        "notes": "Invulnerable on frame 1-33 in addition to 22 freeze frames.",
        "startup": "19",
        "basedamage": "11.0/13.0",
        "shieldlag": "9/10",
        "shieldstun": "11/12",
        "advantage": "-33/-32",
        "activeframes": "19"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "46",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "14",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "18",
        "landinglag": "Total frames includes 11 frames of hitlag.",
        "notes": "--",
        "startup": "2",
        "basedamage": "1.0"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "15/16",
        "basedamage": "3.5/4.5"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "18",
        "basedamage": "9.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "16",
        "basedamage": "5.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "16",
        "basedamage": "5.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "19/24",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-16."
      },
      {
        "movename": "Forward Roll",
        "totalframes": "28",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-14."
      },
      {
        "movename": "Backward Roll",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15."
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "41",
        "landinglag": "10",
        "notes": "Invulnerable on frame 2-27."
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "60",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-27."
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "67",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-27."
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "71",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-27."
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "78",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-27."
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "85",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-27."
      }
    ],
    "stats": {
      "Weight": "88",
      "Gravity": "0.180",
      "Walk Speed": "1.502",
      "Run Speed": "2.288",
      "Initial Dash": "2.178",
      "Air Speed": "1.239",
      "Total Air Acceleration": "0.08",
      "SH / FH / SHFF / FHFF Frames": "32 / 49 / 24 / 35",
      "Fall Speed / Fast Fall Speed": "1.85 / 2.96",
      "Out of Shield, Back Air": "8 frames",
      "Out of Shield, Up Air": "10 frames",
      "Out of Shield, Up Smash": "12 frames",
      "Shield Grab (Grab, post-Shieldstun)": "14 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "hero": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "25",
        "landinglag": "--",
        "notes": "Transitions to jab 2 as early as frame 9",
        "startup": "6",
        "basedamage": "3.0",
        "shieldlag": "6",
        "shieldstun": "4",
        "advantage": "-15",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Jab 2",
        "totalframes": "25",
        "landinglag": "--",
        "notes": "Transitions to jab 3 as early as frame 9",
        "startup": "6",
        "basedamage": "3.0",
        "shieldlag": "5",
        "shieldstun": "4",
        "advantage": "-15",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Jab 3",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "4.0",
        "shieldlag": "10",
        "shieldstun": "5",
        "advantage": "-25",
        "activeframes": "7\u20149"
      },
      {
        "movename": "Forward Tilt 1",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "Transitions to next attack as early as frame 18. Arm, head, leg invincibility on frame 9. Arm invincibility on frame 10-11.",
        "startup": "9",
        "basedamage": "5.0",
        "shieldlag": "8",
        "shieldstun": "6",
        "advantage": "-21",
        "activeframes": "9\u201411"
      },
      {
        "movename": "Forward Tilt 2",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "8.0",
        "shieldlag": "8",
        "shieldstun": "8",
        "advantage": "-31",
        "activeframes": "8\u20149"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "9.0/11.0/11.0",
        "shieldlag": "8",
        "shieldstun": "10",
        "advantage": "-23",
        "activeframes": "8\u20149/10\u201411"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "7.0",
        "shieldlag": "7",
        "shieldstun": "7",
        "advantage": "-19",
        "activeframes": "6\u201410"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "--",
        "startup": "21",
        "basedamage": "13.0/15.0",
        "shieldlag": "9/11",
        "shieldstun": "12/14",
        "advantage": "-16",
        "activeframes": "21/22\u201423"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "65",
        "landinglag": "--",
        "notes": "--",
        "startup": "17",
        "basedamage": "18.0 (36.0)",
        "shieldlag": "14/27",
        "shieldstun": "12/22",
        "advantage": "-36 (-26)",
        "activeframes": "17\u201419"
      },
      {
        "movename": "Up Smash",
        "totalframes": "53",
        "landinglag": "--",
        "notes": "Normal/Crit",
        "startup": "13",
        "basedamage": "16.0 (32.0)",
        "shieldlag": "13/27",
        "shieldstun": "11/20",
        "advantage": "-29 (-19)",
        "activeframes": "13\u201417"
      },
      {
        "movename": "Down Smash",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "--",
        "startup": "9/20",
        "basedamage": "11.0/13.0 (22.0/26.0)",
        "shieldlag": "8/9 / 25/27",
        "shieldstun": "8/9 / 14/17",
        "advantage": "-37/-26 (-29/-18)",
        "activeframes": "9\u201410/20\u201421"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "45",
        "landinglag": "10",
        "notes": "**",
        "startup": "8",
        "basedamage": "9.0",
        "shieldlag": "7",
        "shieldstun": "4",
        "advantage": "-6",
        "activeframes": "8\u201416"
      },
      {
        "movename": "Forward Air",
        "totalframes": "42",
        "landinglag": "12",
        "notes": "**",
        "startup": "14",
        "basedamage": "10.0/12.0",
        "shieldlag": "10/9",
        "shieldstun": "5/4",
        "advantage": "-7",
        "activeframes": "14\u201417"
      },
      {
        "movename": "Back Air",
        "totalframes": "47",
        "landinglag": "14",
        "notes": "**",
        "startup": "18",
        "basedamage": "12.0/14.0",
        "shieldlag": "10/9",
        "shieldstun": "5/5",
        "advantage": "-9",
        "activeframes": "18\u201420"
      },
      {
        "movename": "Up Air",
        "totalframes": "32",
        "landinglag": "8",
        "notes": "--",
        "startup": "6",
        "basedamage": "7.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-5",
        "activeframes": "6\u201410"
      },
      {
        "movename": "Down Air",
        "totalframes": "62",
        "landinglag": "18",
        "notes": "Autocancels on frame 1-4 and 46 onward",
        "startup": "16",
        "basedamage": "16.0/10.0",
        "shieldlag": "12/8",
        "shieldstun": "6/4",
        "advantage": "-12",
        "activeframes": "16\u201418/19\u201424"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Frizz/Frizzle/Kafrizz)",
        "totalframes": "43/51/67",
        "landinglag": "--",
        "notes": "Frizz: Takes 7 frames to enter charge state and 5 frames to exit charge state. Cost: 6MP \r\n\t\tFrizzle: Takes 25 frames to reach this level of charge. Cost: 16MP\r\n\t\tKafrizz: Eruption upon reaching a target hits on frame (2/8/14/20). Cost: 36 MP",
        "startup": "[10(+7)]  [11(+25)]  [16(2/8/14/20)]",
        "basedamage": "9.0/18.0/19.0(3.0)",
        "shieldlag": "7/8/25",
        "shieldstun": "4/4/2",
        "advantage": "-22/-28/-24",
        "activeframes": "[10\u201465]  [11\u201456]  [16\u201473]"
      },
      {
        "movename": "Side B, (Zap/Zapple/Kazap)",
        "totalframes": "30/50/126",
        "landinglag": "**",
        "notes": "Zap: 7 frames to enter charge state. Bolt does not occur on block. Cost: 8MP\r\n\t\tZapple: Takes 16 frames to reach this level of charge. Second hit does not occur on block. Cost: 18 MP\r\n\t\tKazap: Final hit does not occur on a blocking opponent. Cost: 42MP",
        "startup": "[9/13(+7)]  [10/15(+16)]  [43/50/72/75/81]",
        "basedamage": "4.0",
        "shieldlag": "11/17 / 9 / 14/9/12",
        "shieldstun": "6/4 / 6 / 4/**/4",
        "advantage": "-12/-25/-29",
        "activeframes": "[9\u201413/1\u20148]  [10\u201415/1\u20148]  [43\u201449/50/72/75/81\u201483/1\u20148]"
      },
      {
        "movename": "Up B (Woosh/Swoosh/Kaswoosh)",
        "totalframes": "**",
        "landinglag": "12/23/29",
        "notes": "Woosh: Takes 3 frames to enter charge state. Cost: 5MP\r\n\t\tSwoosh: Takes 13 frames to reach this level of charge. Cost: 9MP\r\n\t\tKaswoosh: Cost: 18 MP. Failing to cast any level of charge results in 12 landing lag.",
        "startup": "[4(+3)]  [6/13/20/27(+13)]  [39/49/59/69/79/89]",
        "basedamage": "7.0 / 3.0/4.0 / 3.0/4.0",
        "shieldlag": "7 / 5/5 / 5/5",
        "shieldstun": "3 / 2/2 / 2/2",
        "advantage": "**",
        "activeframes": "**"
      },
      {
        "movename": "Down B (Menu/Select)",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "--",
        "startup": "--",
        "basedamage": "**",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "--",
        "activeframes": "--"
      },
      {
        "movename": "Bang",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "Cost: 9MP",
        "startup": "5",
        "basedamage": "1.5/14.0",
        "shieldlag": "--/11",
        "shieldstun": "--/5",
        "advantage": "-16",
        "activeframes": "5\u201439/1\u201421"
      },
      {
        "movename": "Kaboom",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "Cost: 37MP",
        "startup": "6",
        "basedamage": "2.0/26.0",
        "shieldlag": "4/15",
        "shieldstun": "2/8",
        "advantage": "+2",
        "activeframes": "6\u201427/1\u201416"
      },
      {
        "movename": "Sizz",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "Cost: 8MP (doesn't erupt on shields)",
        "startup": "6",
        "basedamage": "1.5/12.0",
        "shieldlag": "5",
        "shieldstun": "2",
        "advantage": "-26",
        "activeframes": "6\u201419/1\u201424"
      },
      {
        "movename": "Sizzle",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "Cost: 20MP (doesn't erupt on shields)",
        "startup": "6",
        "basedamage": "3.0/22.0",
        "shieldlag": "5",
        "shieldstun": "2",
        "advantage": "-30",
        "activeframes": "6\u201417/1\u201424"
      },
      {
        "movename": "Whack",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "Cost: 10MP (chance to instantly obliterate opponent, higher chance with higher opponent %)",
        "startup": "6",
        "basedamage": "1.0",
        "shieldlag": "4",
        "shieldstun": "2",
        "advantage": "-29",
        "activeframes": "6\u2014125"
      },
      {
        "movename": "Thwack",
        "totalframes": "58",
        "landinglag": "--",
        "notes": "Cost: 30MP (chance to instantly obliterate opponent, higher chance with higher opponent %)",
        "startup": "23",
        "basedamage": "3.0",
        "shieldlag": "5",
        "shieldstun": "2",
        "advantage": "-28",
        "activeframes": "22\u201433"
      },
      {
        "movename": "Kamikazee",
        "totalframes": "??",
        "landinglag": "--",
        "notes": "Invulnerable for entire duration. Unblockable. Cost: 1MP. Time slows after frame 41, giving victims about two frames to act. Hit 2 does 50.0 damage in the center or 35.0 damage on the outer hitbox.",
        "startup": "44/50",
        "basedamage": "0.1 / 50.0 (35.0)",
        "shieldlag": "Unblockable",
        "shieldstun": "Unblockable",
        "advantage": "--",
        "activeframes": "44\u201449/50"
      },
      {
        "movename": "Magic Burst",
        "totalframes": "151",
        "landinglag": "--",
        "notes": "Cost: All MP. Hitbox size and damage increases based on how much MP you have. Hero does not suffer hitlag from this attack.",
        "startup": "23/33/43/53/63/73/83/93/101",
        "basedamage": "1.0\u20144.2/2.7\u201411.0",
        "shieldlag": "4\u20145/7\u201413",
        "shieldstun": "2\u20144/4\u201410",
        "advantage": "-36 \u2014 -24",
        "activeframes": "23/33/43/53/63/73/83/93/101"
      },
      {
        "movename": "Snooze",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "Cost: 16MP. Can put airborne opponents to sleep",
        "startup": "6",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Heal",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "Cost: 7MP. Heals 11.0 damage on frame 6. Amount not affected by 1v1 multiplier.",
        "startup": "**",
        "basedamage": "Heals 11.0",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "--"
      },
      {
        "movename": "Oomph",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "Cost: 16MP. Damage of (only) melee attacks multiplied by 1.6. Damage received multiplied by 1.2. Lasts 10 seconds.",
        "startup": "**",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Acceleratle",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Cost: 13MP. Zoom-zoom!",
        "startup": "**",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Bounce",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Cost: 14MP. Begins reflecting on frame 6",
        "startup": "**",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Kaclang",
        "totalframes": "344",
        "landinglag": "--",
        "notes": "Cost: 6MP. Invincible on frame 15-315",
        "startup": "**",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Zoom",
        "totalframes": "**",
        "landinglag": "--",
        "notes": "Cost: 8MP. Can act before landing back onstage",
        "startup": "**",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Hocus Pocus",
        "totalframes": "**",
        "landinglag": "--",
        "notes": "Cost: 4MP. Casts a random spell. Can also put Hero to sleep, turn Hero invisible, shrink Hero, or mushroom grow Hero.",
        "startup": "**",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Flame Slash",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "Cost: 12MP",
        "startup": "6",
        "basedamage": "22.0",
        "shieldlag": "12",
        "shieldstun": "19",
        "advantage": "-13",
        "activeframes": "6\u20148"
      },
      {
        "movename": "Kacrackle Slash",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "Cost: 11MP",
        "startup": "6",
        "basedamage": "17.0",
        "shieldlag": "10",
        "shieldstun": "15",
        "advantage": "-12",
        "activeframes": "6\u20148"
      },
      {
        "movename": "Hatchet Man",
        "totalframes": "88",
        "landinglag": "--",
        "notes": "Cost: 15MP. Shield Breaks.",
        "startup": "37",
        "basedamage": "35.0",
        "shieldlag": "Shield Breaks",
        "shieldstun": "Shield Breaks",
        "advantage": "Shield Breaks",
        "activeframes": "37\u201440"
      },
      {
        "movename": "Metal Slash",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "Cost: 6MP",
        "startup": "11",
        "basedamage": "1.0",
        "shieldlag": "4",
        "shieldstun": "2",
        "advantage": "-26",
        "activeframes": "11\u201412"
      },
      {
        "movename": "Psych Up",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "Cost: 14MP. Raises the damage and knockback of Hero\u2019s next attack, will last until a move fully connects or is blocked by an opponent\u2019s shield.",
        "startup": "**",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "--"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "**",
        "landinglag": "--",
        "notes": "**",
        "startup": "**",
        "basedamage": "**"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "16",
        "basedamage": "7.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "--",
        "startup": "18",
        "basedamage": "9.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "17",
        "basedamage": "7.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "19",
        "basedamage": "6.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "50",
        "landinglag": "**",
        "notes": "Invulnerable on frame 3-30"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "69",
        "landinglag": "**",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "**",
        "landinglag": "**",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "83",
        "landinglag": "**",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "**",
        "landinglag": "**",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "109",
        "landinglag": "**",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "101",
      "Gravity": "0.094",
      "Walk Speed": "0.98",
      "Run Speed": "1.84",
      "Initial Dash": "1.88",
      "Air Speed": "1.01",
      "Total Air Acceleration": "0.055",
      "SH / FH / SHFF / FHFF Frames": "36 / 47/ 25 / 33",
      "Fall Speed / Fast Fall Speed": "1.57 / 2.512",
      "Out of Shield, Up B": "7 frames",
      "Out of Shield, Up Air": "9 frames",
      "Out of Shield, Neutral Air": "11 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "ice_climbers": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 10.",
        "startup": "4",
        "basedamage": "2.0(1.5)",
        "shieldlag": "6(6)",
        "shieldstun": "3(3)",
        "advantage": "-20(-15)",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Jab 2",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "3.5(2.6)",
        "shieldlag": "9(9)",
        "shieldstun": "4(4)",
        "advantage": "-21(-12)",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "9.0(6.7)",
        "shieldlag": "7(6)",
        "shieldstun": "9(7)",
        "advantage": "-14(-10)",
        "activeframes": "9\u201410"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "--",
        "startup": "8/11/14/17/20/23/27",
        "basedamage": "0.8/4.5(0.6/3.0)",
        "shieldlag": "4/11(4/10)",
        "shieldstun": "2/5(2/4)",
        "advantage": "-16(-10)",
        "activeframes": "8\u20149/11\u201412/14\u201415/17\u201418/20\u201421/23\u201424/27"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "6.0(4.5)",
        "shieldlag": "6(5)",
        "shieldstun": "6(5)",
        "advantage": "-16(-10)",
        "activeframes": "8\u201411"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "6.0(4.5)",
        "shieldlag": "6(5)",
        "shieldstun": "6(5)",
        "advantage": "-24(-18)",
        "activeframes": "11\u201414"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "46",
        "landinglag": "--",
        "notes": "Charge hold is frame 4",
        "startup": "11",
        "basedamage": "12.0(9.0)",
        "shieldlag": "9(7)",
        "shieldstun": "8(7)",
        "advantage": "-27(-22)",
        "activeframes": "11\u201413"
      },
      {
        "movename": "Up Smash",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Charge hold is frame 7",
        "startup": "12",
        "basedamage": "11.0(8.2)",
        "shieldlag": "8(7)",
        "shieldstun": "8(6)",
        "advantage": "-29(-24)",
        "activeframes": "12\u201417"
      },
      {
        "movename": "Down Smash",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "Charge hold is frame 4",
        "startup": "9/16",
        "basedamage": "13.0(9.7)",
        "shieldlag": "9/8",
        "shieldstun": "9/7",
        "advantage": "-22/-17",
        "activeframes": "9\u201411/16"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "45",
        "landinglag": "7",
        "notes": "Autocancels on frame 1-5 and 30 onward",
        "startup": "6",
        "basedamage": "7.0(5.2)",
        "shieldlag": "7(6)",
        "shieldstun": "3(3)",
        "advantage": "-4(+2)",
        "activeframes": "6\u201423"
      },
      {
        "movename": "Forward Air",
        "totalframes": "56",
        "landinglag": "10",
        "notes": "Autocancels on frame 1-2 and 49 onward",
        "startup": "19",
        "basedamage": "12.0(9.0)",
        "shieldlag": "9(7)",
        "shieldstun": "5(4)",
        "advantage": "-5(+3)",
        "activeframes": "19\u201420"
      },
      {
        "movename": "Back Air",
        "totalframes": "35",
        "landinglag": "7",
        "notes": "Autocancels on frame 1-7 and 19 onward",
        "startup": "8",
        "basedamage": "10.0(7.5)",
        "shieldlag": "8(7)",
        "shieldstun": "4(3)",
        "advantage": "-3(+0)",
        "activeframes": "8\u201411"
      },
      {
        "movename": "Up Air",
        "totalframes": "35",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-6 and 27 onward",
        "startup": "7",
        "basedamage": "9.0(6.7)",
        "shieldlag": "7(6)",
        "shieldstun": "4(3)",
        "advantage": "-10(-3)",
        "activeframes": "7\u201411"
      },
      {
        "movename": "Down Air",
        "totalframes": "63",
        "landinglag": "20",
        "notes": "Autocancels on frame 54 onward",
        "startup": "12",
        "basedamage": "8.0(6.0)",
        "shieldlag": "7(6)",
        "shieldstun": "4(3)",
        "advantage": "-16(-12)",
        "activeframes": "12\u201451"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Ice Shot)",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "Second startup value is the melee attack. Climber does not suffer hitlag from it.",
        "startup": "18/19",
        "basedamage": "3.5/3.5 (3.5/3.5)",
        "shieldlag": "5",
        "shieldstun": "2",
        "advantage": "-29(-24)",
        "activeframes": "18/19\u2014**"
      },
      {
        "movename": "Side B, both (Squal Hammer, both)",
        "totalframes": "77",
        "landinglag": "29",
        "notes": "Landing lag only occurs if you enter special fall.",
        "startup": "10/14/18/23/28/34/40/51",
        "basedamage": "2.0/4.0",
        "shieldlag": "4/8",
        "shieldstun": "3/5",
        "advantage": "-21",
        "activeframes": "10/14/18/23/28/34/40/51\u201452"
      },
      {
        "movename": "Side B, alone (Squal Hammer, alone)",
        "totalframes": "77",
        "landinglag": "29",
        "notes": "Landing lag only occurs if you enter special fall.",
        "startup": "10/13/15/18/21/24/28/32/37/42/49",
        "basedamage": "1.2/2.0",
        "shieldlag": "4/4",
        "shieldstun": "3/3",
        "advantage": "-24",
        "activeframes": "10/13/15/18/21/24/28/32/37/42/49\u201450"
      },
      {
        "movename": "Up B (Belay)",
        "totalframes": "--",
        "landinglag": "30",
        "notes": "Hitting somebody with this move reduces its height gain for your climber. The AI is invulnerable frame 1-15 and invincible frame 16-33",
        "startup": "16",
        "basedamage": "16.0",
        "shieldlag": "10",
        "shieldstun": "14",
        "advantage": "--",
        "activeframes": "16\u201433"
      },
      {
        "movename": "Down B (Blizzard)",
        "totalframes": "84",
        "landinglag": "--",
        "notes": "--",
        "startup": "16/21/26/31/36/41/46/51/56",
        "basedamage": "1.7(1.7)",
        "shieldlag": "4",
        "shieldstun": "2",
        "advantage": "-22(-15)",
        "activeframes": "lul"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "16",
        "landinglag": "Total frames includes 11 frames of hitlag.",
        "notes": "--",
        "startup": "1",
        "basedamage": "1.0"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "24/25",
        "basedamage": "3.0/5.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "18",
        "basedamage": "6.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "52",
        "landinglag": "--",
        "notes": "--",
        "startup": "25/27",
        "basedamage": "3.0/5.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "37",
        "basedamage": "6.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15."
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16."
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "58",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-28."
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "81",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "86",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "96",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "115",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "129",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      }
    ],
    "stats": {
      "Weight": "92",
      "Gravity": "0.082",
      "Walk Speed": "1.008 (1.1088)",
      "Run Speed": "1.53 (1.683)",
      "Initial Dash": "1.68",
      "Air Speed": "0.83 (0.8715)",
      "Total Air Acceleration": "0.09 (0.0945)",
      "SH / FH / SHFF / FHFF Frames": "41 / 62 / 29 / 44",
      "Fall Speed / Fast Fall Speed": "1.3 / 2.08",
      "Out of Shield, Neutral Air": "9 frames",
      "Out of Shield, Up Air": "10 frames",
      "Out of Shield, Back Air": "11 frames",
      "Shield Grab (Grab, post-Shieldstun)": "12 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "ike": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "23",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 9",
        "startup": "4",
        "basedamage": "2.5",
        "shieldlag": "8",
        "shieldstun": "4",
        "advantage": "-15",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Jab 2",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "Transitions to jab 3 as early as frame 9",
        "startup": "3",
        "basedamage": "2.5",
        "shieldlag": "6",
        "shieldstun": "4",
        "advantage": "-20",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Jab 3",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "Attack hits directly above Ike on frame 5 only.",
        "startup": "5",
        "basedamage": "5.0",
        "shieldlag": "12",
        "shieldstun": "6",
        "advantage": "-29",
        "activeframes": "5\u20148"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "12.5",
        "shieldlag": "9",
        "shieldstun": "12",
        "advantage": "-17",
        "activeframes": "12\u201413"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "12.0",
        "shieldlag": "9",
        "shieldstun": "11",
        "advantage": "-17",
        "activeframes": "11\u201416"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "28",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "8.0",
        "shieldlag": "7",
        "shieldstun": "8",
        "advantage": "-13",
        "activeframes": "7\u20148"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "14.0",
        "shieldlag": "12",
        "shieldstun": "15",
        "advantage": "-17",
        "activeframes": "15\u201416/17\u201419"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "83",
        "landinglag": "--",
        "notes": "Sword hits directly above Ike on frame 31. Strong hit on 33. Charge hold is frame 24",
        "startup": "31",
        "basedamage": "19.0/22.0",
        "shieldlag": "12/13",
        "shieldstun": "13/14",
        "advantage": "-39/-36",
        "activeframes": "31\u201432"
      },
      {
        "movename": "Up Smash",
        "totalframes": "70",
        "landinglag": "--",
        "notes": "Charge hold is frame 11",
        "startup": "25",
        "basedamage": "17.0",
        "shieldlag": "11",
        "shieldstun": "11",
        "advantage": "-34",
        "activeframes": "25\u201429"
      },
      {
        "movename": "Down Smash",
        "totalframes": "70",
        "landinglag": "--",
        "notes": "Charge hold is frame 5",
        "startup": "13/32",
        "basedamage": "16.0/19.0/9",
        "shieldlag": "10/12/**",
        "shieldstun": "11/13/**",
        "advantage": "-46/-25",
        "activeframes": "13\u201415/32\u201433/34\u201436"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "59",
        "landinglag": "8",
        "notes": "Autocancels on frame 1-2 and 50 onward",
        "startup": "10",
        "basedamage": "7.5/6.0",
        "shieldlag": "7/6",
        "shieldstun": "3/3",
        "advantage": "-5",
        "activeframes": "10\u201414"
      },
      {
        "movename": "Forward Air",
        "totalframes": "59",
        "landinglag": "14",
        "notes": "Autocancels on frame 42 onward",
        "startup": "11",
        "basedamage": "11.5",
        "shieldlag": "9",
        "shieldstun": "5",
        "advantage": "-9",
        "activeframes": "11\u201415"
      },
      {
        "movename": "Back Air",
        "totalframes": "54",
        "landinglag": "11",
        "notes": "Autocancels on frame 1-2 and 35 onward",
        "startup": "7",
        "basedamage": "14.0",
        "shieldlag": "10",
        "shieldstun": "5",
        "advantage": "-6",
        "activeframes": "7\u20149"
      },
      {
        "movename": "Up Air",
        "totalframes": "56",
        "landinglag": "9",
        "notes": "Autocancels on frame 1-5 and 51 onward",
        "startup": "13",
        "basedamage": "11.0",
        "shieldlag": "8",
        "shieldstun": "4",
        "advantage": "-5",
        "activeframes": "13\u201418"
      },
      {
        "movename": "Down Air",
        "totalframes": "54",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-4 and 48 onward",
        "startup": "16",
        "basedamage": "15.0",
        "shieldlag": "10",
        "shieldstun": "5",
        "advantage": "-9",
        "activeframes": "16\u201417"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Eruption)",
        "totalframes": "78-287",
        "landinglag": "--",
        "notes": "On release, startup is 11 and total frames is 59",
        "startup": "30-239",
        "basedamage": "10.0\u201435.0",
        "shieldlag": "8\u201416",
        "shieldstun": "10\u2014Shieldbreak",
        "advantage": "-38 to Shieldbreak",
        "activeframes": "**"
      },
      {
        "movename": "Side B (Quickdraw)",
        "totalframes": "53/34/44",
        "landinglag": "30",
        "notes": "Reaches max charge around 85. Startup is 2 upon reaching a target. Swing total frames is 34, or 44 from the air. Landing lag only occurs after entering special fall. Can continue recovery options after an air swing on frame 44.",
        "startup": "16",
        "basedamage": "6.0\u201413.0",
        "shieldlag": "6\u20149",
        "shieldstun": "6\u201412",
        "advantage": "-28 to -22",
        "activeframes": "**"
      },
      {
        "movename": "Up B (Aether)",
        "totalframes": "--",
        "landinglag": "36",
        "notes": "Landing hit on frame 1. Super armor on frame 5-35. (ending the frame he ascends). Super armor on frame 15-35 for the air version.",
        "startup": "15/44/51/61",
        "basedamage": "6.0/1.0/3.0/6.0",
        "shieldlag": "6/4/5/6",
        "shieldstun": "6/2/4/6",
        "advantage": "-29",
        "activeframes": "**"
      },
      {
        "movename": "Down B (Counter)",
        "totalframes": "73",
        "landinglag": "--",
        "notes": "Invulnerable on frame 8. Counters on frame 9-33",
        "startup": "9 (Start of Counter)",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "--"
      },
      {
        "movename": "Counter, Attack",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "Invulnerable on frame 1-4 in addition to counter freeze frames",
        "startup": "4",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "4\u20145"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "20",
        "landinglag": "Total frames includes 15 frames of hitlag.",
        "notes": "--",
        "startup": "1",
        "basedamage": "1.6"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "5/7",
        "basedamage": "3.5/4.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "20/22",
        "basedamage": "3.0/4.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "18/20",
        "basedamage": "3.5/4.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "57",
        "landinglag": "--",
        "notes": "--",
        "startup": "35/40",
        "basedamage": "3.0/4.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "21/26",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15."
      },
      {
        "movename": "Backward Roll",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16."
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "49",
        "landinglag": "10",
        "notes": "Invulnerable on frame 4-31."
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "66",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22."
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "76",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22."
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "82",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22."
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "96",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22."
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "108",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22."
      }
    ],
    "stats": {
      "Weight": "107",
      "Gravity": "0.092",
      "Walk Speed": "0.912",
      "Run Speed": "1.507",
      "Initial Dash": "1.815",
      "Air Speed": "1.134",
      "Total Air Acceleration": "0.05",
      "SH / FH / SHFF / FHFF Frames": "37 / 48 / 26 / 33",
      "Fall Speed / Fast Fall Speed": "1.65 / 2.64",
      "Out of Shield, Back Air": "10 frames",
      "Out of Shield, Neutral Air": "13 frames",
      "Out of Shield, Forward Air": "14 frames",
      "Out of Shield, Up B": "15 frames (but armor starts on frame 5)",
      "Shield Grab (Grab, post-Shieldstun)": "11 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "incineroar": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "23",
        "landinglag": "--",
        "notes": "Transitions to jab 2 on frame 8",
        "startup": "5",
        "basedamage": "2.5",
        "shieldlag": "5",
        "shieldstun": "4",
        "advantage": "-14",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Jab 2",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "Transitions to jab 3 on frame 13",
        "startup": "4",
        "basedamage": "2.8",
        "shieldlag": "6",
        "shieldstun": "4",
        "advantage": "-23",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Jab 3",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "4.7",
        "shieldlag": "6",
        "shieldstun": "5",
        "advantage": "-28",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "13.0",
        "shieldlag": "11",
        "shieldstun": "12",
        "advantage": "-12",
        "activeframes": "12\u201414"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Head intangibility on frame 6-11",
        "startup": "6",
        "basedamage": "9.0",
        "shieldlag": "7",
        "shieldstun": "9",
        "advantage": "-19",
        "activeframes": "6\u201411"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Leg intangibility on frame 8-12",
        "startup": "9",
        "basedamage": "9.0",
        "shieldlag": "7",
        "shieldstun": "9",
        "advantage": "-11",
        "activeframes": "9\u201411"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "13.0/9.0",
        "shieldlag": "9/7",
        "shieldstun": "12/9",
        "advantage": "-21",
        "activeframes": "8\u201411/12\u201415"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "Charge hold is frame 1",
        "startup": "16",
        "basedamage": "20.0/16.0",
        "shieldlag": "14/10",
        "shieldstun": "13/11",
        "advantage": "-22/-24",
        "activeframes": "16\u201418"
      },
      {
        "movename": "Up Smash",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "Arm intangibility on frame 13-18. Charge hold is frame 5",
        "startup": "13",
        "basedamage": "17.0",
        "shieldlag": "10",
        "shieldstun": "11",
        "advantage": "-23",
        "activeframes": "13\u201418"
      },
      {
        "movename": "Down Smash",
        "totalframes": "57",
        "landinglag": "--",
        "notes": "Charge hold is frame 1",
        "startup": "18",
        "basedamage": "16.0",
        "shieldlag": "10",
        "shieldstun": "11",
        "advantage": "-28",
        "activeframes": "18\u201420"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "41",
        "landinglag": "11",
        "notes": "Autocancels on frame 1-3 and 36 onward",
        "startup": "5",
        "basedamage": "13.0/7.0",
        "shieldlag": "9/7",
        "shieldstun": "5/3",
        "advantage": "-6/-8",
        "activeframes": "5\u20146/7\u201425"
      },
      {
        "movename": "Forward Air",
        "totalframes": "44",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-6 and 46 onward",
        "startup": "8",
        "basedamage": "12.0/13.0",
        "shieldlag": "9/10",
        "shieldstun": "5/5",
        "advantage": "-9/-9",
        "activeframes": "8\u201410(11\u201414)"
      },
      {
        "movename": "Back Air",
        "totalframes": "41",
        "landinglag": "11",
        "notes": "Autocancels on frame 1-5 and 36 onward",
        "startup": "7",
        "basedamage": "11.0/13.0",
        "shieldlag": "8/10",
        "shieldstun": "4/5",
        "advantage": "-7/-6",
        "activeframes": "7\u201410"
      },
      {
        "movename": "Up Air",
        "totalframes": "31",
        "landinglag": "8",
        "notes": "Autocancels on frame 1-5 and 26 onward",
        "startup": "7",
        "basedamage": "8.0",
        "shieldlag": "7",
        "shieldstun": "4",
        "advantage": "-4",
        "activeframes": "7\u201411"
      },
      {
        "movename": "Down Air",
        "totalframes": "44",
        "landinglag": "16",
        "notes": "Autocancels on frame 1-3 and 45 onward",
        "startup": "16",
        "basedamage": "15.0/14.0/9.0",
        "shieldlag": "10/10/7",
        "shieldstun": "5/5/4",
        "advantage": "-11/-11/-12",
        "activeframes": "16\u201419/20\u201421"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Darkest Lariat)",
        "totalframes": "84",
        "landinglag": "--",
        "notes": "On the ground: Invincible on frame 5-6, head/arm invincible on frame 7, and arm invincible on frame 7-57.",
        "startup": "5/15/23/37/50/56",
        "basedamage": "16.0\u20146.0",
        "shieldlag": "12\u20147",
        "shieldstun": "14\u20148",
        "advantage": "-65",
        "activeframes": "5\u201410/15\u201416/23\u201430/37\u201444/50\u201451/56\u201457"
      },
      {
        "movename": "Side B (Alolan Whip, Grab)",
        "totalframes": "59",
        "landinglag": "--",
        "notes": "Follow with: Lariat, Back Body Drop, or Chest Bounce",
        "startup": "18",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "18\u201434(grab)"
      },
      {
        "movename": "Alolan Whip, Lariat Attack",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "Following a grab, successful window for a lariat is frame 43-47. Any later is a failure and results in Back Body Drop or Chest Bounce.",
        "startup": "7",
        "basedamage": "20.0",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Alolan Whip, Back Body Drop",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "You can hold the button to guarantee this particular attack.",
        "startup": "8",
        "basedamage": "12.0",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Alolan Whip, Chest Bounce (Failure)",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "--",
        "basedamage": "4.0",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Up B (Cross Chop)",
        "totalframes": "79",
        "landinglag": "61/35",
        "notes": "Landing hitbox on frame 1. Arm intangibility on frame 13-26. Super armor on frame 4-15. Total frames is if you never land during the dive. Second landing lag is if you land too late.",
        "startup": "11/38",
        "basedamage": "3.0/7.0/11.0/9.0",
        "shieldlag": "9/10/10/10",
        "shieldstun": "4/7/10/9",
        "advantage": "-51",
        "activeframes": "(11/13\u201415/16\u201424)(38...)"
      },
      {
        "movename": "Down B (Revenge)",
        "totalframes": "58",
        "landinglag": "--",
        "notes": "Counter window 3-22. Next attack's damage increased by 1 + (0.25 + 0.075 * Base damage). Stores up to 3x Revenges. Revenge store is lost when you are grabbed or take 36% damage.",
        "startup": "3 (Start of Counter)",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Revenge, Counter Attack",
        "totalframes": "28",
        "landinglag": "--",
        "notes": "Invulnerable on frame 1-13 in addition to counter freeze frames.",
        "startup": "7",
        "basedamage": "2.4",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "7..."
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "46",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "20",
        "landinglag": "**",
        "notes": "Total frames includes 15 frames of hitlag",
        "startup": "1",
        "basedamage": "1.6"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "81",
        "landinglag": "--",
        "notes": "--",
        "startup": "58",
        "basedamage": "12.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "--",
        "startup": "28/30",
        "basedamage": "14.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "--",
        "startup": "27",
        "basedamage": "12.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "22",
        "basedamage": "9.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "21/26",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15."
      },
      {
        "movename": "Backward Roll",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16."
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "44",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-29."
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "63",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "72",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "76",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "86",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "96",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      }
    ],
    "stats": {
      "Weight": "116",
      "Gravity": "0.126",
      "Walk Speed": "0.62",
      "Run Speed": "1.18",
      "Initial Dash": "1.76",
      "Air Speed": "0.88",
      "Total Air Acceleration": "0.07",
      "SH / FH / SHFF / FHFF Frames": "30 / 43 / 21 / 31",
      "Fall Speed / Fast Fall Speed": "1.76 / 2.816",
      "Out of Shield, Neutral Air or Neutral B (Air)": "8 frames",
      "Out of Shield, Back Air or Up Air": "10 frames",
      "Out of Shield, Up B": "11 frames",
      "Shield Grab (Grab, post-Shieldstun)": "12 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "inkling": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "**",
        "startup": "3",
        "basedamage": "2.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-13",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Jab 2",
        "totalframes": "21",
        "landinglag": "--",
        "notes": "--",
        "startup": "2",
        "basedamage": "2.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-16",
        "activeframes": "2\u20143"
      },
      {
        "movename": "Jab 3",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "3.5",
        "shieldlag": "10",
        "shieldstun": "4",
        "advantage": "-21",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "Will not hit opponents when out of Ink",
        "startup": "4/7/10...",
        "basedamage": "0.4",
        "shieldlag": "4",
        "shieldstun": "3",
        "advantage": "**",
        "activeframes": "4/7/10..."
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "Will not hit opponents when out of Ink",
        "startup": "6",
        "basedamage": "2.5",
        "shieldlag": "4",
        "shieldstun": "3",
        "advantage": "-38",
        "activeframes": "6"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "9.0",
        "shieldlag": "7",
        "shieldstun": "9",
        "advantage": "-17",
        "activeframes": "8\u201410"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "6.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-16",
        "activeframes": "7\u201412"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "5/12",
        "basedamage": "3.0/6.0",
        "shieldlag": "5/6",
        "shieldstun": "4/6",
        "advantage": "-13",
        "activeframes": "5\u20148/12\u201415"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "8.0/6.0",
        "shieldlag": "7/6",
        "shieldstun": "11/9",
        "advantage": "-16",
        "activeframes": "8\u20149/10\u201413"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "Gets weaker when out of ink. Charge hold is frame 5",
        "startup": "16",
        "basedamage": "14.0/16.0",
        "shieldlag": "10/10",
        "shieldstun": "10/11",
        "advantage": "-25/-24",
        "activeframes": "16\u201417"
      },
      {
        "movename": "Up Smash",
        "totalframes": "57",
        "landinglag": "--",
        "notes": "Gets weaker when out of ink. Charge hold is frame 3",
        "startup": "9/18",
        "basedamage": "4.0/15.0/10.0",
        "shieldlag": "5/10/8",
        "shieldstun": "4/10/7",
        "advantage": "-44/-29/-32",
        "activeframes": "9\u201410/18\u201420"
      },
      {
        "movename": "Down Smash",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Gets weaker when out of ink. Charge hold is frame 2",
        "startup": "11/20",
        "basedamage": "12.5/11.0",
        "shieldlag": "9/8",
        "shieldstun": "9/8",
        "advantage": "-29/-21",
        "activeframes": "(11\u201412/13\u201415)/(20\u201421/22\u201424)"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "31",
        "landinglag": "5",
        "notes": "Autocancels on frame 27 onward",
        "startup": "6",
        "basedamage": "7.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-2",
        "activeframes": "6\u20149"
      },
      {
        "movename": "Forward Air",
        "totalframes": "41",
        "landinglag": "12",
        "notes": "Autocancels on frame 1-4 and frame 40 onward",
        "startup": "10",
        "basedamage": "10.0/7.0",
        "shieldlag": "8/7",
        "shieldstun": "4/3",
        "advantage": "-8/-9",
        "activeframes": "10\u201411/12\u201421"
      },
      {
        "movename": "Back Air",
        "totalframes": "36",
        "landinglag": "6",
        "notes": "Autocancels on frame 1-6 and frame 30 onward",
        "startup": "7",
        "basedamage": "10.0/7.5",
        "shieldlag": "8/7",
        "shieldstun": "4/3",
        "advantage": "-2/-3",
        "activeframes": "7\u201411"
      },
      {
        "movename": "Up Air",
        "totalframes": "43",
        "landinglag": "6",
        "notes": "Autocancels on frame 40 onward",
        "startup": "12/17",
        "basedamage": "4.5/6.5",
        "shieldlag": "5/6",
        "shieldstun": "3/3",
        "advantage": "-3/-3",
        "activeframes": "12\u201415/17\u201420"
      },
      {
        "movename": "Down Air",
        "totalframes": "61",
        "landinglag": "10",
        "notes": "Autocancels on frame 1-4 and 33 onward",
        "startup": "16",
        "basedamage": "12.0/10.0",
        "shieldlag": "9/8",
        "shieldstun": "5/4",
        "advantage": "-5/-6",
        "activeframes": "16\u201417"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Splattershot)",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "Startup and total frames is the minimum. When out of Ink this move enters the refill state.",
        "startup": "12/16/20/24",
        "basedamage": "0.3",
        "shieldlag": "4",
        "shieldstun": "2",
        "advantage": "-6",
        "activeframes": "16/16/20/24"
      },
      {
        "movename": "Side B (Splat Roller)",
        "totalframes": "17/35",
        "landinglag": "--",
        "notes": "17 frame animation to jump cancel. 35 animation to cancel on the ground. Inkling suffers more shieldlag than defender. Advantage assumes buffered jump cancel.",
        "startup": "16",
        "basedamage": "4.0\u201411.0",
        "shieldlag": "5\u20148 (Inkling 8\u201413)",
        "shieldstun": "5\u201410",
        "advantage": "-15 to -12",
        "activeframes": "16..."
      },
      {
        "movename": "Up B (Super Jump)",
        "totalframes": "--",
        "landinglag": "40",
        "notes": "Inkling will not suffer hitlag from this attack. Landing hitbox on frame 1.",
        "startup": "12",
        "basedamage": "8.0/6.0",
        "shieldlag": "7/6",
        "shieldstun": "3/3",
        "advantage": "**/-29/-30",
        "activeframes": "12/15\u201421/1\u201410"
      },
      {
        "movename": "Down B (Splat Bomb)",
        "totalframes": "47\u201465",
        "landinglag": "--",
        "notes": "Holding the button allows for a longer yet slower throw. Bombs explode on contact or on frame 99\u2014159.",
        "startup": "20\u201440",
        "basedamage": "9.4\u201415.0",
        "shieldlag": "8\u201410",
        "shieldstun": "4\u20145",
        "advantage": "**",
        "activeframes": "**"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "18",
        "landinglag": "**",
        "notes": "Total frames includes 13 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "22/23",
        "basedamage": "5.0/3.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "17",
        "basedamage": "9.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "21/22",
        "basedamage": "3.0/3.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "20",
        "basedamage": "7.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15."
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16."
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "50",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-29."
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "70",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "76",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "84",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "100",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "112",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      }
    ],
    "stats": {
      "Weight": "94",
      "Gravity": "0.087",
      "Walk Speed": "1.134",
      "Run Speed": "1.925",
      "Initial Dash": "2.118",
      "Air Speed": "1.208",
      "Total Air Acceleration": "0.08",
      "SH / FH / SHFF / FHFF Frames": "40 / 52 / 27 / 36",
      "Fall Speed / Fast Fall Speed": "1.58 / 2.528",
      "Out of Shield, Neutral Air or Up Smash": "9 frames",
      "Out of Shield, Back Air": "10 frames",
      "Out of Shield, Up B": "12 frames",
      "Shield Grab (Grab, post-Shieldstun)": "12 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "isabelle": {
    "ground_attacks": [
      {
        "movename": "Jab",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Transitions to another jab on frame 13.",
        "startup": "3",
        "basedamage": "2.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "-14",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "9.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "-20",
        "activeframes": "8"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "8.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "-19",
        "activeframes": "6\u201412"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "13.0/8.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "-13/-17",
        "activeframes": "9\u201410"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "Projectile Attack",
        "startup": "10",
        "basedamage": "10.0/6.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "-21",
        "activeframes": "10\u201422"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "Charge hold is frame 5",
        "startup": "14",
        "basedamage": "17.0/8.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "-20",
        "activeframes": "14\u201415/16\u201419"
      },
      {
        "movename": "Up Smash",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "Isabelle will not suffer hitlag from this attack, improving combo potential. Charge hold is frame 7",
        "startup": "11/16",
        "basedamage": "2.0/14.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "-13",
        "activeframes": "11\u201412/16\u201420"
      },
      {
        "movename": "Down Smash",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "Charge hold is frame 3",
        "startup": "8/12",
        "basedamage": "10.0/8.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "-29/-26",
        "activeframes": "8\u20149/12\u201413"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "33",
        "landinglag": "6",
        "notes": "Autocancels on frame 1-2 and 34 onward",
        "startup": "5/8",
        "basedamage": "10.0/6.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "-2/-3",
        "activeframes": "5\u20147/8\u201425"
      },
      {
        "movename": "Forward Air",
        "totalframes": "39",
        "landinglag": "14",
        "notes": "Projectile attack. Autocancels on frame 1-2 and 30 onward",
        "startup": "10",
        "basedamage": "7.0/4.0/3.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "-11/-12/-12",
        "activeframes": "10\u201412/13\u201418/19\u201423"
      },
      {
        "movename": "Back Air",
        "totalframes": "35",
        "landinglag": "14",
        "notes": "Projectile attack. Autocancels on frame 1-2 and 30 onward",
        "startup": "13",
        "basedamage": "9.0/5.0/3.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "-10/-11/-12",
        "activeframes": "13\u201415/16\u201421/22\u201426"
      },
      {
        "movename": "Up Air",
        "totalframes": "42",
        "landinglag": "9",
        "notes": "Autocancels on frame 1-5 and 39 onward",
        "startup": "6",
        "basedamage": "10.0/5.0",
        "shieldlag": "*",
        "shieldstun": "*",
        "advantage": "-5/-6",
        "activeframes": "6\u20147/8\u201431"
      },
      {
        "movename": "Down Air",
        "totalframes": "45",
        "landinglag": "9",
        "notes": "Autocancels on frame 1-13 and 39 onward",
        "startup": "14",
        "basedamage": "10.0/5.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "-5/-6",
        "activeframes": "14\u201415/16\u201431"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Pocket)",
        "totalframes": "50",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-23. Pockets projectiles on frame 8-23.",
        "startup": "8 (Start of projectile pocket)",
        "basedamage": "**",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "--",
        "activeframes": "8\u201423"
      },
      {
        "movename": "Pocket, Throw",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "This is not the same throw as with a holdable item",
        "startup": "9",
        "basedamage": "**",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "No Data"
      },
      {
        "movename": "Side B (Fishing Rod)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "Frame 50 is the earliest you can reel in.",
        "startup": "21",
        "basedamage": "**",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "25\u201447 (Ground), 25\u201470+ (Air), 22 (Tether)"
      },
      {
        "movename": "Fishing Rod, Reel In",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "2 (Aerial Hook), 7 (Grounded Tilt Hook), 9 (Grounded Smash Hook)",
        "basedamage": "**",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "2\u201411/7\u201411/9\u201411"
      },
      {
        "movename": "Fishing Rod, Throw Forward",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "14.0\u201417.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "**"
      },
      {
        "movename": "Fishing Rod, Throw Back",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "11.0\u201414.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "**"
      },
      {
        "movename": "Fishing Rod, Throw Up",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "--",
        "startup": "22",
        "basedamage": "12.0\u201415.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "**"
      },
      {
        "movename": "Fishing Rod, Throw Down",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "18/22",
        "basedamage": "9.5\u201415.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "**"
      },
      {
        "movename": "Up B (Balloon Trip)",
        "totalframes": "--",
        "landinglag": "20/30",
        "notes": "20 landing lag if you land inside the swing. 30 if you land from special fall. Has a \"fuel\" mechanic.",
        "startup": "**",
        "basedamage": "**",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "**"
      },
      {
        "movename": "Down B (Lloid Trap)",
        "totalframes": "49/26",
        "landinglag": "--",
        "notes": "Proximity activation as early as 51. 49 total frames to plant. 26 total frames to manually activate. Several characters can safely run past this trap.",
        "startup": "9/17/25/34/43/51",
        "basedamage": "**",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "9/17/25/34/43/51"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "--",
        "startup": "14",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "46",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "17",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "**",
        "landinglag": "**",
        "notes": "--",
        "startup": "**",
        "basedamage": "**"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "**"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "14",
        "basedamage": "**"
      },
      {
        "movename": "Up Throw",
        "totalframes": "52",
        "landinglag": "--",
        "notes": "--",
        "startup": "20",
        "basedamage": "**"
      },
      {
        "movename": "Down Throw",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "18",
        "basedamage": "**"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15."
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16."
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "58",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-30."
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "80",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "91",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "97",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "115",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "133",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      }
    ],
    "stats": {
      "Weight": "88",
      "Gravity": "0.07",
      "Walk Speed": "1.14",
      "Run Speed": "1.48",
      "Initial Dash": "1.815",
      "Air Speed": "1.02",
      "Total Air Acceleration": "0.06",
      "SH / FH / SHFF / FHFF Frames": "42 / 58 / 29 / 40",
      "Fall Speed / Fast Fall Speed": "1.3 / 2.08",
      "Out of Shield, Neutral Air": "8 frames",
      "Out of Shield, Up Air": "9 frames",
      "Out of Shield, Up Smash": "11 frames",
      "Shield Grab (Grab, post-Shieldstun)": "18 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "jigglypuff": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "16",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 7.",
        "startup": "5",
        "basedamage": "3.0",
        "shieldlag": "6",
        "shieldstun": "4",
        "advantage": "-7",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Jab 2",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "3.0",
        "shieldlag": "9",
        "shieldstun": "4",
        "advantage": "-10",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "24",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "10.0",
        "shieldlag": "8",
        "shieldstun": "10",
        "advantage": "-7",
        "activeframes": "7\u201410"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "24",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "9.0/8.0",
        "shieldlag": "7/7",
        "shieldstun": "9/8",
        "advantage": "-6",
        "activeframes": "9\u201410(11\u201413)"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "10.0",
        "shieldlag": "8",
        "shieldstun": "10",
        "advantage": "-10",
        "activeframes": "10\u201412"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "12.0/8.0",
        "shieldlag": "9/7",
        "shieldstun": "11/8",
        "advantage": "-23",
        "activeframes": "5\u20147(8\u201420)"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Charge hold is frame 4",
        "startup": "16",
        "basedamage": "16.0/14.0",
        "shieldlag": "10/10",
        "shieldstun": "11/10",
        "advantage": "-22",
        "activeframes": "16\u201419(20\u201424)"
      },
      {
        "movename": "Up Smash",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "Charge hold is frame 8",
        "startup": "16",
        "basedamage": "15.0",
        "shieldlag": "10",
        "shieldstun": "10",
        "advantage": "-19",
        "activeframes": "16\u201419"
      },
      {
        "movename": "Down Smash",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "Charge hold is frame 4",
        "startup": "14",
        "basedamage": "11.0",
        "shieldlag": "8",
        "shieldstun": "8",
        "advantage": "-26",
        "activeframes": "14\u201416"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "43",
        "landinglag": "9",
        "notes": "Autocancels on frame 1-3 and 40 onward",
        "startup": "6",
        "basedamage": "11.0/6.0",
        "shieldlag": "8/6",
        "shieldstun": "4/3",
        "advantage": "-5/-6",
        "activeframes": "6\u20147(8\u201430)"
      },
      {
        "movename": "Forward Air",
        "totalframes": "36",
        "landinglag": "9",
        "notes": "Autocancels on frame 1-3 and 28 onward",
        "startup": "8",
        "basedamage": "9.0/6.0",
        "shieldlag": "7/6",
        "shieldstun": "4/3",
        "advantage": "-5/-6",
        "activeframes": "8\u20149(10\u201420)"
      },
      {
        "movename": "Back Air",
        "totalframes": "37",
        "landinglag": "11",
        "notes": "Autocancels on frame 1-3 and 26 onward",
        "startup": "10",
        "basedamage": "13.0",
        "shieldlag": "11",
        "shieldstun": "5",
        "advantage": "-6",
        "activeframes": "10\u201411"
      },
      {
        "movename": "Up Air",
        "totalframes": "39",
        "landinglag": "9",
        "notes": "Autocancels on frame 1-3 and 35 onward",
        "startup": "9",
        "basedamage": "9.0",
        "shieldlag": "7",
        "shieldstun": "4",
        "advantage": "-5",
        "activeframes": "9\u201421"
      },
      {
        "movename": "Down Air",
        "totalframes": "52",
        "landinglag": "12",
        "notes": "Autocancels on frame 45 onward",
        "startup": "7/10/13/16/19/22/25/28/31",
        "basedamage": "1.5/2.0",
        "shieldlag": "4/10",
        "shieldstun": "2/2",
        "advantage": "-13",
        "activeframes": "7\u20148/10\u201411/13\u201414/16\u201417/19\u201420/22\u201423/25\u201426/28\u201429/31\u201432"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Rollout)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "Reaches full charge at about frame 60. Partial charge at about 40. Endlag on hit is 52 on level ground. Jigglypuff is helpless if she does not land or grab an edge after a hit, but she will pass through shields",
        "startup": "~40/~60",
        "basedamage": "10.0\u201420.0",
        "shieldlag": "9\u201412",
        "shieldstun": "11\u201418",
        "advantage": "**",
        "activeframes": "**"
      },
      {
        "movename": "Side B (Pound)",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "11.0",
        "shieldlag": "8",
        "shieldstun": "10",
        "advantage": "-16",
        "activeframes": "13\u201428"
      },
      {
        "movename": "Up B (Sing)",
        "totalframes": "149",
        "landinglag": "--",
        "notes": "--",
        "startup": "27/61/100",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "27\u201436/61\u201470/100\u2014115"
      },
      {
        "movename": "Down B (Rest)",
        "totalframes": "209",
        "landinglag": "--",
        "notes": "Invulnerable on frame 1-27",
        "startup": "2",
        "basedamage": "20.0",
        "shieldlag": "12",
        "shieldstun": "18",
        "advantage": "-189",
        "activeframes": "2\u20144"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "**",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "10/12",
        "basedamage": "5.0/5.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "26",
        "basedamage": "10.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "8.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "84",
        "landinglag": "--",
        "notes": "--",
        "startup": "60/62",
        "basedamage": "6.0/6.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "21/26",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15."
      },
      {
        "movename": "Backward Roll",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16."
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "74",
        "landinglag": "10",
        "notes": "Invulnerable on frame 4-32."
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "102",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22."
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "112",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22."
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "122",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22."
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "152",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22."
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "174",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22."
      }
    ],
    "stats": {
      "Weight": "68",
      "Gravity": "0.053",
      "Walk Speed": "0.735",
      "Run Speed": "1.271",
      "Initial Dash": "1.65",
      "Air Speed": "1.332",
      "Total Air Acceleration": "0.13",
      "SH / FH / SHFF / FHFF Frames": "41 / 51 / 29 / 35",
      "Fall Speed / Fast Fall Speed": "0.98 / 1.568",
      "Out of Shield, Down B (Air)": "5 frames",
      "Out of Shield, Neutral Air": "9 frames",
      "Out of Shield, Down Air": "10 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "joker": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "23",
        "landinglag": "--",
        "notes": "Transitions to jab 2 on frame 7",
        "startup": "4",
        "basedamage": "2.0(2.7)",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "-16",
        "activeframes": "4\u20145(4\u20145)"
      },
      {
        "movename": "Jab 2",
        "totalframes": "23",
        "landinglag": "--",
        "notes": "Transitions to jab 3 on frame 11",
        "startup": "3",
        "basedamage": "1.5(2.2)",
        "shieldlag": "--",
        "shieldstun": "**",
        "advantage": "-17",
        "activeframes": "3\u20144(3\u20144)"
      },
      {
        "movename": "Jab 3",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "3",
        "basedamage": "4.0(7.1)",
        "shieldlag": "--",
        "shieldstun": "**",
        "advantage": "-26",
        "activeframes": "3\u20144(3\u20144)"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "8/13",
        "basedamage": "3.0/5.0(3.0/10.0)",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**/-15(**/-11)",
        "activeframes": "8\u20149/13\u201415(8\u20149/13\u201419)"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "Rehit rate: 3",
        "startup": "8/11/14/17/20",
        "basedamage": "4.0/1.0/1.0 (4.0/1.7/3.9)",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "-27",
        "activeframes": "8/9(11\u201419) [Final Hit: 20\u201423(20\u201423)]"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "6.0(13.0)",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "-22(-19)",
        "activeframes": "8\u20149/10\u201411/12\u201414(8\u20149/10\u201411/12\u201414)"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "6/15",
        "basedamage": "2.0/6.0 (2.0/12.0)",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**/-23",
        "activeframes": "6\u20147/15\u201423(--/15\u201421)"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "Charge hold is frame 5",
        "startup": "16",
        "basedamage": "14.0(22.0)",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "-21",
        "activeframes": "16\u201418(16\u201419)"
      },
      {
        "movename": "Up Smash",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "Charge hold is frame 4",
        "startup": "10",
        "basedamage": "12.0(17.0)",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "-32(-30)",
        "activeframes": "10\u201414(10\u201414)"
      },
      {
        "movename": "Down Smash",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "Charge hold is frame 5",
        "startup": "12/16",
        "basedamage": "12.0(18.0)",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "-24/-20(--/-18)",
        "activeframes": "12\u201413/16\u201417(12\u201413/16\u201417)"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "54",
        "landinglag": "8",
        "notes": "Arsene version has a separate hit covering Joker's back. Autocancels on frame 1-4 and 48 onward",
        "startup": "12",
        "basedamage": "7.0/\u2014(7.0/4.0)",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "-5",
        "activeframes": "12\u201427(12\u201427)"
      },
      {
        "movename": "Forward Air",
        "totalframes": "47",
        "landinglag": "12",
        "notes": "Autocancels on frame 1-3 and 42 onward",
        "startup": "7/12",
        "basedamage": "2.0/5.0(2.0/13.0)",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "-10/-9",
        "activeframes": "7\u20148/12\u201414(--/12\u201414)"
      },
      {
        "movename": "Back Air",
        "totalframes": "31",
        "landinglag": "9",
        "notes": "Autocancels on frame 1-3 and 30 onward",
        "startup": "7",
        "basedamage": "9.0(16.0)",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "-5",
        "activeframes": "7\u20148(7\u20148)"
      },
      {
        "movename": "Up Air",
        "totalframes": "39",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-4 and 40 onward. Rehit rate: 4",
        "startup": "5/9/13/17/20",
        "basedamage": "0.7/3.0 (0.7/10.0)",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "-12",
        "activeframes": "5/9/13/17/20\u201421(20\u201421)"
      },
      {
        "movename": "Down Air",
        "totalframes": "46",
        "landinglag": "11",
        "notes": "Arsene version has separate meteor hit on frame 15. Autocancels on frame 1-3 and 40 onward",
        "startup": "13",
        "basedamage": "8.0/\u2014(8.0/8.0)",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "-7",
        "activeframes": "13\u201416(15\u201416)"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Gun)",
        "totalframes": "36/61/92",
        "landinglag": "--",
        "notes": "Earliest you can input another shot, dash, or jump is frame 26. Earliest you can input spiral or shoot below is frame 14. Hitstun decreases with range, up to no hitstun at all when far.",
        "startup": "12/37/65",
        "basedamage": "5.0/3.0/1.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "12"
      },
      {
        "movename": "Gun, Dash Forward",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-13. Is affected by and contributes to dodge staling",
        "startup": "20",
        "basedamage": "6.0/4.0/2.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "20"
      },
      {
        "movename": "Gun, Dash Back",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-14. Is affected by and contributes to dodge staling",
        "startup": "22",
        "basedamage": "5.0/3.0/1.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "22"
      },
      {
        "movename": "Gun, Jump (From Ground Only)",
        "totalframes": "59",
        "landinglag": "14",
        "notes": "Invulnerable on frame 1-6. Is *not* affected by nor contributes to dodge staling",
        "startup": "10/17/24/31",
        "basedamage": "3.0/0.8",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "10/17/24/31"
      },
      {
        "movename": "Gun, Spiral (From Air Only)",
        "totalframes": "69",
        "landinglag": "20",
        "notes": "Can be extended for more shots",
        "startup": "12/15/18/24/27/30/ 36/39/42/48/51/54",
        "basedamage": "3.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "12/15/18/24/27/30/ 36/39/42/48/51/54"
      },
      {
        "movename": "Gun, Shoot Below (From Air Only)",
        "totalframes": "48",
        "landinglag": "10",
        "notes": "Can be extended for more shots",
        "startup": "7/21/35/44",
        "basedamage": "4.0/1.2",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "7/21/35/44"
      },
      {
        "movename": "Neutral B, Arsene (Gun Special, Arsene)",
        "totalframes": "41/**/**",
        "landinglag": "--",
        "notes": "Earliest you can input another shot, dash, or jump is frame 34. Earliest you can input spiral or shoot below is frame 15",
        "startup": "12/18/24",
        "basedamage": "6.0/3.0/1.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "12/18/24"
      },
      {
        "movename": "Gun Special, Dash Forward",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-13. Is affected by and contributes to dodge staling",
        "startup": "21/27/33",
        "basedamage": "7.0/4.0/1.5/1.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "21/27/33"
      },
      {
        "movename": "Gun Special, Dash Back",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-14. Is affected by and contributes to dodge staling",
        "startup": "23/29/35",
        "basedamage": "5.0/3.0/1.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "23/29/35"
      },
      {
        "movename": "Gun Special, Jump (From Ground Only)",
        "totalframes": "59",
        "landinglag": "14",
        "notes": "Invulnerable on frame 1-6. Is *not* affected by or contributes to dodge staling. Added shots in Arsene version deal just 1.0 damage.",
        "startup": "10/13/17/20/24/27/31",
        "basedamage": "3.0/0.8",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "10/13/17/20/24/27/31"
      },
      {
        "movename": "Gun Special, Spiral (From Air Only)",
        "totalframes": "69",
        "landinglag": "20",
        "notes": "Can be extended for more shots",
        "startup": "12/15/18/24/27/30/ 36/39/42/48/51/54",
        "basedamage": "4.5",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "12/15/18/24/27/30/ 36/39/42/48/51/54"
      },
      {
        "movename": "Gun Special, Shoot Below (From Air Only)",
        "totalframes": "48",
        "landinglag": "10",
        "notes": "Can be extended for more shots. Added shots in Arsene version deal just 0.8",
        "startup": "7/14/21/28/35/44",
        "basedamage": "4.0/1.6",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "7/14/21/28/35/44"
      },
      {
        "movename": "Side B (Eiha)",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Erupts a frame after contact, but won't erupt on shields",
        "startup": "16",
        "basedamage": "1.0/2.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "-27",
        "activeframes": "16\u201442/1\u201419"
      },
      {
        "movename": "Side B, Arsene (Eigaon)",
        "totalframes": "57",
        "landinglag": "--",
        "notes": "Eruption hits in parenthesis, but won't erupt on shields",
        "startup": "16 (1/6/11/16)",
        "basedamage": "1.0/0.5/2.5",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "16\u201432(1\u201415/16\u201427)"
      },
      {
        "movename": "Up B (Grappling Hook)",
        "totalframes": "59/44",
        "landinglag": "--",
        "notes": "Tethers on frame 12. Second total frames is for the air. Does not induce special fall",
        "startup": "20",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "**",
        "activeframes": "20\u201426"
      },
      {
        "movename": "Air, Grappling Attack",
        "totalframes": "28",
        "landinglag": "--",
        "notes": "The air version cannot grab, instead hitting the target for 5.0 damage.",
        "startup": "5",
        "basedamage": "11.0",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "5"
      },
      {
        "movename": "Up B, Arsene (Wings of Rebellion)",
        "totalframes": "**",
        "landinglag": "30",
        "notes": "Invulnerable on frame 1-25 (3-25 in air)",
        "startup": "**",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Down B (Rebel's Guard)",
        "totalframes": "52",
        "landinglag": "--",
        "notes": "Total frames is for minimum usage. 33 endlag for extended usage. Begins blocking on frame 3. Can only counterattack after a block",
        "startup": "3 (Start of Block)",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "--"
      },
      {
        "movename": "Rebel's Guard, Counterattack",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "Invulnerable on frame 1-14",
        "startup": "8",
        "basedamage": "2.4",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "8\u20149"
      },
      {
        "movename": "Down B, Arsene (Tetrakarn/Makarakarn)",
        "totalframes": "53",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3. Counters/reflects on frame 4-31",
        "startup": "4 (Start of Counter)",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "4\u201431(Counter/Reflect active)"
      },
      {
        "movename": "Arsene, Tetrakarn Counterattack",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "Invulnerable on frame 1-7 in addition to counter freeze frames",
        "startup": "4",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "5\u20147"
      },
      {
        "movename": "Arsene, Makarakarn Reflect",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "Arm intangible on frame 1-29",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "1\u201429"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "**",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.5"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "8.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "14",
        "basedamage": "10.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "16",
        "basedamage": "7.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "23",
        "basedamage": "7.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15."
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16."
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "47",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-30."
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "67",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "73",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "83",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "90",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "100",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      }
    ],
    "stats": {
      "Weight": "93",
      "Gravity": "0.127",
      "Walk Speed": "1.12",
      "Run Speed": "2.06",
      "Initial Dash": "**",
      "Air Speed": "1.1",
      "Total Air Acceleration": "0.08",
      "SH / FH / SHFF / FHFF Frames": "30 / 45 / 20 / 30",
      "Fall Speed / Fast Fall Speed": "1.63 / 3.097",
      "Out of Shield, Up AIr": "8 frames",
      "Out of Shield, Forward Air or back Air or Up Smash": "10 frames",
      "Out of Shield, Neutral Air or Gun or Jab": "15 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "ken": {
    "ground_attacks": [
      {
        "movename": "Jab 1 (Light)",
        "totalframes": "15",
        "landinglag": "--",
        "notes": "Special Cancellable",
        "startup": "2",
        "basedamage": "1.5",
        "shieldlag": "4",
        "shieldstun": "3",
        "advantage": "-10",
        "activeframes": "2\u20143"
      },
      {
        "movename": "Jab 2",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "Special Cancellable",
        "startup": "3",
        "basedamage": "1.5",
        "shieldlag": "9",
        "shieldstun": "3",
        "advantage": "-21",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Jab 3",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "5.0",
        "shieldlag": "9",
        "shieldstun": "6",
        "advantage": "-21",
        "activeframes": "8\u201410"
      },
      {
        "movename": "Jab (Inazuma Kick)",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "9/16",
        "basedamage": "6.0/6.0",
        "shieldlag": "7/9",
        "shieldstun": "6/6",
        "advantage": "-10",
        "activeframes": "9\u201412/16\u201417"
      },
      {
        "movename": "Nata Otoshi Geri (Inazuma followup)",
        "totalframes": "28(41)",
        "landinglag": "--",
        "notes": "Holding A turns second hit into stronger inazuma kick. hitting on 20 instead and is 41 total frames",
        "startup": "12/15(12/20)",
        "basedamage": "5.0/5.0/10.0",
        "shieldlag": "9/9/11",
        "shieldstun": "-/6/12",
        "advantage": "-7/-9",
        "activeframes": "12/15\u20146"
      },
      {
        "movename": "Oosoto Mawashi Geri (Inazuma followup)",
        "totalframes": "32(48)",
        "landinglag": "--",
        "notes": "Leg intangible on frame 9-10. Holding A causes second kick. hitting on 17 instead and is 48 total frames",
        "startup": "9(9/17)",
        "basedamage": "10.0/10.0",
        "shieldlag": "11/11",
        "shieldstun": "10/12",
        "advantage": "-13/-19",
        "activeframes": "9\u201410(9\u201410/17\u201419)"
      },
      {
        "movename": "Forward Tilt (Light)",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Special Cancellable",
        "startup": "3",
        "basedamage": "6.0",
        "shieldlag": "9",
        "shieldstun": "6",
        "advantage": "-20",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Forward Tilt (Medium)",
        "totalframes": "23",
        "landinglag": "--",
        "notes": "Leg intangibility on frame 6-11",
        "startup": "8",
        "basedamage": "6.8",
        "shieldlag": "10",
        "shieldstun": "7",
        "advantage": "-8",
        "activeframes": "8\u201411"
      },
      {
        "movename": "Forward Tilt (Heavy)",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "5.0/10.0",
        "shieldlag": "9/11",
        "shieldstun": "6/10",
        "advantage": "-18/-14",
        "activeframes": "10\u201413"
      },
      {
        "movename": "Up Tilt (Light)",
        "totalframes": "14",
        "landinglag": "--",
        "notes": "Special Cancellable",
        "startup": "3",
        "basedamage": "2.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-8",
        "activeframes": "3\u20146"
      },
      {
        "movename": "Up Tilt (Medium)",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "Special Cancellable. Upper body intangibility on frame 4-10.",
        "startup": "7",
        "basedamage": "12.0",
        "shieldlag": "12",
        "shieldstun": "11",
        "advantage": "-19",
        "activeframes": "7(8\u201411)"
      },
      {
        "movename": "Down Tilt (Light)",
        "totalframes": "14",
        "landinglag": "--",
        "notes": "Special Cancellable",
        "startup": "2",
        "basedamage": "1.6",
        "shieldlag": "8",
        "shieldstun": "3",
        "advantage": "-9",
        "activeframes": "2\u20143"
      },
      {
        "movename": "Down Tilt (Medium)",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "Special Cancellable",
        "startup": "6",
        "basedamage": "7.0",
        "shieldlag": "10",
        "shieldstun": "7",
        "advantage": "-14",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "12.0/8.0",
        "shieldlag": "12/10",
        "shieldstun": "11/8",
        "advantage": "-22",
        "activeframes": "7\u20149(10\u201415)"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "Charge hold is frame 5",
        "startup": "13",
        "basedamage": "12.0/16.0",
        "shieldlag": "9/15",
        "shieldstun": "8/11",
        "advantage": "-24/-21",
        "activeframes": "13\u201415"
      },
      {
        "movename": "Up Smash",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "Arm intangibility on frame 9-12. Charge hold is frame 6",
        "startup": "9",
        "basedamage": "17.0/13.5",
        "shieldlag": "16/13",
        "shieldstun": "11/9",
        "advantage": "-24",
        "activeframes": "9(10\u201412)"
      },
      {
        "movename": "Down Smash",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "Charge hold is frame 2",
        "startup": "5",
        "basedamage": "16.0",
        "shieldlag": "15",
        "shieldstun": "11",
        "advantage": "-25",
        "activeframes": "5\u20146"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "27",
        "landinglag": "5",
        "notes": "Special Cancellable. Autocancels on frame 28 onward",
        "startup": "6",
        "basedamage": "6.5/4.0",
        "shieldlag": "8/6",
        "shieldstun": "3/3",
        "advantage": "-2/-2",
        "activeframes": "6\u20148(9\u201417)"
      },
      {
        "movename": "Forward Air",
        "totalframes": "36",
        "landinglag": "11",
        "notes": "Special Cancellable. Autocancels on frame 1-2 and 38 onward",
        "startup": "8",
        "basedamage": "9.0/14.0, 8.0/12.0",
        "shieldlag": "10/14, 10/12",
        "shieldstun": "4/5, 4/5",
        "advantage": "-7/-6, -7/-6",
        "activeframes": "8\u20149(10\u201414)"
      },
      {
        "movename": "Back Air",
        "totalframes": "41",
        "landinglag": "10",
        "notes": "Special Cancellable. Autocancels on frame 25 onward",
        "startup": "8",
        "basedamage": "16.0/13.0",
        "shieldlag": "15/13",
        "shieldstun": "6/5",
        "advantage": "-4/-5",
        "activeframes": "8\u20149"
      },
      {
        "movename": "Up Air",
        "totalframes": "35",
        "landinglag": "11",
        "notes": "Special Cancellable. Autocancels on frame 19 onward",
        "startup": "5",
        "basedamage": "6.5",
        "shieldlag": "10",
        "shieldstun": "3",
        "advantage": "-8",
        "activeframes": "5\u20149"
      },
      {
        "movename": "Down Air",
        "totalframes": "45",
        "landinglag": "15",
        "notes": "Special Cancellable. Autocancels on frame 1-2 and 33 onward",
        "startup": "8",
        "basedamage": "12.0",
        "shieldlag": "14",
        "shieldstun": "5",
        "advantage": "-10",
        "activeframes": "8\u201412"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Hadouken)",
        "totalframes": "57",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "4.5\u20145.5, 5.6\u20146.8",
        "shieldlag": "8\u20148, 9\u20149",
        "shieldstun": "3\u20143, 3\u20143",
        "advantage": "-35/-34",
        "activeframes": "13\u201419(20\u201475) / 13\u201418(19\u201467) / 13\u201417(18\u201460)"
      },
      {
        "movename": "Side B (Tatsumaki Senpukyaku)",
        "totalframes": "42\u201472",
        "landinglag": "--",
        "notes": "Hits on alternating sides of him every five frames from 13 up to 38.",
        "startup": "8/13\u201438",
        "basedamage": "3.0/3.0, 3.4/3.4",
        "shieldlag": "7/5, 8/5",
        "shieldstun": "4/4, 4/4",
        "advantage": "-25 to -30",
        "activeframes": "8\u20149(13\u201414/18\u201419/23\u201424/28\u201429/33\u201434/38\u201439)"
      },
      {
        "movename": "Side B, Air (Tatsumaki Senpukyaku, Air)",
        "totalframes": "77",
        "landinglag": "--",
        "notes": "Leg intangibility on frames 13-42",
        "startup": "8/13/18/23/28/33/38",
        "basedamage": "3.0/2.0, 3.4/2.3",
        "shieldlag": "7/4, 8/5",
        "shieldstun": "4/3, 4/3",
        "advantage": "-36",
        "activeframes": "8\u20149(13\u201414/18\u201419/23\u201424/28\u201429/33\u201434/38\u201439)"
      },
      {
        "movename": "Up B (Shoryuken)",
        "totalframes": "--",
        "landinglag": "12",
        "notes": "Invulnerable on frame 5",
        "startup": "6",
        "basedamage": "13.0/7.0",
        "shieldlag": "14/8",
        "shieldstun": "12/7",
        "advantage": "**",
        "activeframes": "6\u20148(9\u201419)"
      },
      {
        "movename": "True Shoryuken",
        "totalframes": "--",
        "landinglag": "8",
        "notes": "Invulnerable on frame 4-6. Arm intangible on frame 1-14",
        "startup": "6",
        "basedamage": "15.6/8.4",
        "shieldlag": "16/9",
        "shieldstun": "14/8",
        "advantage": "**",
        "activeframes": "6\u20148(9\u201419)"
      },
      {
        "movename": "Up B (Flame Shoryuken)",
        "totalframes": "--",
        "landinglag": "18",
        "notes": "Invulnerable on frame 5",
        "startup": "5/6/9",
        "basedamage": "2.2/8.0/6.5",
        "shieldlag": "10/9/9",
        "shieldstun": "-/8/7",
        "advantage": "**",
        "activeframes": "5/6\u20148/9\u201419"
      },
      {
        "movename": "True Flame Shoryuken",
        "totalframes": "--",
        "landinglag": "12",
        "notes": "Invulnerable on frame 4-6. Arm intangible on frame 1-14",
        "startup": "5/6/9",
        "basedamage": "2.6/9.6/7.8",
        "shieldlag": "10/10/10",
        "shieldstun": "-/9/8",
        "advantage": "**",
        "activeframes": "5/6\u20148/9\u201419"
      },
      {
        "movename": "Down B (Focus Attack)",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "Stage 1: Can dash from frame 26 of entering charge or immediately after a successful hit\r\n\t\tStage 2: Focus armor begins on frame 1 and lasts until the 12 frames of the kick\r\n\t\tStage 3: This stage is unblockable",
        "startup": "12 (+21), 12(+31), 12(+59)",
        "basedamage": "12.0, 10.0, 17.0",
        "shieldlag": "17, 19, unblockable",
        "shieldstun": "11, 10, unblockable",
        "advantage": "-32, -33, unblockable",
        "activeframes": "32\u201433/42\u201443/70\u201471"
      },
      {
        "movename": "Focus Attack, Dash Cancel",
        "totalframes": "19/19",
        "landinglag": "--",
        "notes": "First advantage is on stage 1 hit, second advantage is on stage 2 hit",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "-8/-9",
        "activeframes": "**"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "16",
        "landinglag": "--",
        "notes": "Total frames includes 11 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "16",
        "basedamage": "**"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "69",
        "landinglag": "--",
        "notes": "--",
        "startup": "41",
        "basedamage": "**"
      },
      {
        "movename": "Up Throw",
        "totalframes": "46",
        "landinglag": "--",
        "notes": "Kicks on frame 27",
        "startup": "18",
        "basedamage": "**"
      },
      {
        "movename": "Down Throw",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "18/19",
        "basedamage": "**"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "21/26",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15."
      },
      {
        "movename": "Backward Roll",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16."
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "49",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-27."
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "67",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "73",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "80",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "89",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "102",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      }
    ],
    "stats": {
      "Weight": "103",
      "Gravity": "0.12",
      "Walk Speed": "0.825",
      "Run Speed": "1.76",
      "Initial Dash": "1.936",
      "Air Speed": "1.12",
      "Total Air Acceleration": "0.035",
      "SH / FH / SHFF / FHFF Frames": "31 / 40 / 23 / 30",
      "Fall Speed / Fast Fall Speed": "1.6 / 2.24",
      "Out of Shield, Up B": "6 frames",
      "Out of Shield, Up Air": "8 frames",
      "Out of Shield, Neutral Air or Up Smash": "9 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "king_dedede": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 13",
        "startup": "10",
        "basedamage": "2.5",
        "shieldlag": "7",
        "shieldstun": "4",
        "advantage": "-18",
        "activeframes": "10\u201411"
      },
      {
        "movename": "Jab 2",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "Transitions to Rapid jab as early as frame 22",
        "startup": "11",
        "basedamage": "2.2",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-13",
        "activeframes": "23\u201424"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "5/8/11...",
        "basedamage": "0.5",
        "shieldlag": "4",
        "shieldstun": "3",
        "advantage": "--",
        "activeframes": "34\u2014**"
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "3.0",
        "shieldlag": "10",
        "shieldstun": "4",
        "advantage": "-41",
        "activeframes": "**"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "--",
        "startup": "12/16/20/23",
        "basedamage": "2.0/3.0",
        "shieldlag": "4/10",
        "shieldstun": "3/4",
        "advantage": "-21",
        "activeframes": "12\u201421/23"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "Head intangible on frame 7-13.",
        "startup": "7",
        "basedamage": "10.0/8.0",
        "shieldlag": "8/7",
        "shieldstun": "10/8",
        "advantage": "-21/-23",
        "activeframes": "7\u201413"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "Clanks with projectiles doing less than 26.8% damage.",
        "startup": "6",
        "basedamage": "10.0/6.0",
        "shieldlag": "8/6",
        "shieldstun": "10/6",
        "advantage": "-21",
        "activeframes": "6\u20148(9\u201413)"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "66",
        "landinglag": "--",
        "notes": "--",
        "startup": "26",
        "basedamage": "16.0/13.0",
        "shieldlag": "13/9",
        "shieldstun": "14/12",
        "advantage": "-26",
        "activeframes": "26\u201435"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "77",
        "landinglag": "--",
        "notes": "This attack hits directly above Dedede only on frame 40. Hammer comes down on 43. Shockwave on 44. Charge hold is frame 33. Multiple hitboxes: an aerial only hitbox that does 0%, sweetspot near tip of hammer, weak hit near Dedede.",
        "startup": "40",
        "basedamage": "16.0/18.5/25.0/11.0",
        "shieldlag": "?/12/14/8",
        "shieldstun": "?/-/16/8",
        "advantage": "?/-/-18/-25",
        "activeframes": "40"
      },
      {
        "movename": "Up Smash",
        "totalframes": "67",
        "landinglag": "--",
        "notes": "Charge hold is frame 6",
        "startup": "17",
        "basedamage": "16.0",
        "shieldlag": "10",
        "shieldstun": "11",
        "advantage": "-39",
        "activeframes": "17\u201424"
      },
      {
        "movename": "Down Smash",
        "totalframes": "52",
        "landinglag": "--",
        "notes": "Charge hold is frame 3",
        "startup": "12/20",
        "basedamage": "13.0",
        "shieldlag": "9",
        "shieldstun": "9",
        "advantage": "-31/-23",
        "activeframes": "14\u201422"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "39",
        "landinglag": "9",
        "notes": "Autocancels on frame 1-2 and 35 onward",
        "startup": "7",
        "basedamage": "12.0/7.0",
        "shieldlag": "9/7",
        "shieldstun": "5/3",
        "advantage": "-4/-6",
        "activeframes": "7\u20148(9\u201429)"
      },
      {
        "movename": "Forward Air",
        "totalframes": "41",
        "landinglag": "18",
        "notes": "Autocancels on frame 1-4 and 40 onward",
        "startup": "13",
        "basedamage": "12.0",
        "shieldlag": "9",
        "shieldstun": "5",
        "advantage": "-13",
        "activeframes": "13\u201415"
      },
      {
        "movename": "Back Air",
        "totalframes": "37",
        "landinglag": "13",
        "notes": "Autocancels on frame 1-4 and 33 onward",
        "startup": "17",
        "basedamage": "16.0",
        "shieldlag": "13",
        "shieldstun": "6",
        "advantage": "-8",
        "activeframes": "17\u201419"
      },
      {
        "movename": "Up Air",
        "totalframes": "44",
        "landinglag": "13",
        "notes": "Autocancels on frame 1-4 and 42 onward",
        "startup": "10/12/14/16/18/20/22/24",
        "basedamage": "1.0/5.0",
        "shieldlag": "4/12",
        "shieldstun": "-/3",
        "advantage": "-10",
        "activeframes": "10/12/14/16/18/20/22/24\u201425"
      },
      {
        "movename": "Down Air",
        "totalframes": "47",
        "landinglag": "18",
        "notes": "Autocancels on frame 1-6 and 44 onward",
        "startup": "22",
        "basedamage": "15.0/8.0",
        "shieldlag": "15/7",
        "shieldstun": "5/4",
        "advantage": "-13/-14",
        "activeframes": "22\u201423"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Inhale)",
        "totalframes": "77",
        "landinglag": "--",
        "notes": "Startup and total frames refer to minimum usage. 19 endlag after extended usage. Can inhale projectiles starting on frame 20 and involuntarily spit them back",
        "startup": "17",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "17\u2014**"
      },
      {
        "movename": "Inhale, Spit",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Side B (Gordo Throw)",
        "totalframes": "60",
        "landinglag": "--",
        "notes": "--",
        "startup": "29",
        "basedamage": "10.0/9.5\u201414.0",
        "shieldlag": "8/12\u201415/15",
        "shieldstun": "10/4\u20145/14",
        "advantage": "-21/-11/-17",
        "activeframes": "29(5\u2014146)"
      },
      {
        "movename": "Up B (Super Dedede Jump)",
        "totalframes": "--",
        "landinglag": "60/30",
        "notes": "Cancelling incurs 30 landing lag. Invulnerable on frame 18-21. Super Armor on frame 22-?? Leg invulnerability on frame 73-landing. Landing hitbox on frame 3\u20144. Stars on frame 5\u201424.",
        "startup": "69",
        "basedamage": "15.0/12.0/5.0",
        "shieldlag": "10/9/6",
        "shieldstun": "14/-/3",
        "advantage": "-46",
        "activeframes": "69/4\u20145/6\u201420"
      },
      {
        "movename": "Down B (Jet Hammer, Partial Charge)",
        "totalframes": "59",
        "landinglag": "--",
        "notes": "10 startup from release. 17 to enter charge state. 136 frames to reach full charge. Heavy armor on frame 1-14 from release but only on ground version.",
        "startup": "10(+17)",
        "basedamage": "11.0\u201429.8",
        "shieldlag": "8\u201415",
        "shieldstun": "10\u201425",
        "advantage": "-39 to -24",
        "activeframes": "27\u201429"
      },
      {
        "movename": "Down B, Full Charge (Jet Hammer, Full Charge)",
        "totalframes": "69",
        "landinglag": "--",
        "notes": "Heavy armor on frame 1-14 from release but only on ground version.",
        "startup": "9",
        "basedamage": "40.0",
        "shieldlag": "16",
        "shieldstun": "34",
        "advantage": "-26",
        "activeframes": "9\u201411"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "21",
        "landinglag": "--",
        "notes": "Total frames includes 15 frames of hitlag",
        "startup": "2",
        "basedamage": "1.6"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "13/14",
        "basedamage": "4.0/6.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "18/19",
        "basedamage": "4.0/9.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "16/19",
        "basedamage": "4.0/5.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "26",
        "basedamage": "6.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "23/28",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-18"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-16"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-17"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "43",
        "landinglag": "10",
        "notes": "Invulnerable on frame 4-32"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "58",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-23"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "66",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-23"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "72",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-23"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "86",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-23"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "96",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-23"
      }
    ],
    "stats": {
      "Weight": "127",
      "Gravity": "0.097",
      "Walk Speed": "1.029",
      "Run Speed": "1.496",
      "Initial Dash": "1.815",
      "Air Speed": "0.735",
      "Total Air Acceleration": "0.05",
      "SH / FH / SHFF / FHFF Frames": "36 / 48 / 24 / 32",
      "Fall Speed / Fast Fall Speed": "1.95 / 3.12",
      "Out of Shield, Neutral Air": "10 frames",
      "Out of Shield, Up Air": "13 frames",
      "Out of Shield, Forward Air": "16 frames",
      "Shield Grab (Grab, post-Shieldstun)": "12 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "king_k_rool": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "24",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "2.5",
        "shieldlag": "9",
        "shieldstun": "4",
        "advantage": "-16",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Jab 2",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "--",
        "startup": "3",
        "basedamage": "2.5",
        "shieldlag": "6",
        "shieldstun": "4",
        "advantage": "-20",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Jab 3",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "7.0",
        "shieldlag": "13",
        "shieldstun": "7",
        "advantage": "-21",
        "activeframes": "5\u20148"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "Belly armor on frame 5-11",
        "startup": "12",
        "basedamage": "11.0/13.0",
        "shieldlag": "12/13",
        "shieldstun": "10/12",
        "advantage": "-20/-18",
        "activeframes": "12\u201413"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "Arm intangibility on frame 4-9",
        "startup": "5",
        "basedamage": "11.5/8.2/6.8",
        "shieldlag": "10/9/8",
        "shieldstun": "11/8/7",
        "advantage": "-21",
        "activeframes": "5\u20146/7\u201413"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "13.0/8.0/7.0",
        "shieldlag": "9/8/7",
        "shieldstun": "12/10/7",
        "advantage": "-17",
        "activeframes": "13/14\u201415"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "60",
        "landinglag": "--",
        "notes": "Belly armor on frame 7-28",
        "startup": "7",
        "basedamage": "15.0/11.0",
        "shieldlag": "11/9",
        "shieldstun": "15/10",
        "advantage": "-38",
        "activeframes": "7\u201411/12\u201425"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "61",
        "landinglag": "--",
        "notes": "Charge hold on frame 9",
        "startup": "19",
        "basedamage": "19.0/16.5/19.5/16.9/19.9/17.3",
        "shieldlag": "13/--/14/--/14/12",
        "shieldstun": "13/--/13/--/13/12",
        "advantage": "-29/--/-29/--/-29/-30",
        "activeframes": "19\u201420"
      },
      {
        "movename": "Up Smash",
        "totalframes": "71",
        "landinglag": "--",
        "notes": "Head intangibility on frame 6-11. Belly armor on frame 6-19.  Charge hold is frame 2",
        "startup": "6/19/22",
        "basedamage": "15.0/3.0/8.0",
        "shieldlag": "11/0/10",
        "shieldstun": "10/--/7",
        "advantage": "-55/-42",
        "activeframes": "(6\u20149/10\u201411)(19/20/21\u201423)(22\u201423)"
      },
      {
        "movename": "Down Smash",
        "totalframes": "63",
        "landinglag": "--",
        "notes": "Belly armor on frame 8-21. Charge hold is frame 1",
        "startup": "22",
        "basedamage": "18.0/4.0",
        "shieldlag": "10/5",
        "shieldstun": "12/4",
        "advantage": "-29/-34",
        "activeframes": "22\u201424/25"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "45",
        "landinglag": "13",
        "notes": "Belly armor on frame 6-30. Autocancels on frame 1-3 and 40 onward",
        "startup": "7",
        "basedamage": "12.0/8.0",
        "shieldlag": "9/7",
        "shieldstun": "5/4",
        "advantage": "-8/-9",
        "activeframes": "7\u20148/9\u201430"
      },
      {
        "movename": "Forward Air",
        "totalframes": "57",
        "landinglag": "11",
        "notes": "Autocancels on frame 1-2 and 40 onward",
        "startup": "11",
        "basedamage": "14.0/12.0/10.0/8.0",
        "shieldlag": "10/10/8/7",
        "shieldstun": "5/5/4/4",
        "advantage": "-6/-6/-7/-7",
        "activeframes": "11/12\u201413/14\u201417"
      },
      {
        "movename": "Back Air",
        "totalframes": "49",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-3 and 50 onward",
        "startup": "18",
        "basedamage": "19.0/14.5",
        "shieldlag": "13/10",
        "shieldstun": "7/5",
        "advantage": "-7/-9",
        "activeframes": "18\u201420"
      },
      {
        "movename": "Up Air",
        "totalframes": "71",
        "landinglag": "13",
        "notes": "Head intangibility on frame 7-13. Belly armor on frame 6-20. Autocancels on frame 1-2 and 70 onward",
        "startup": "7",
        "basedamage": "14.0/10.0",
        "shieldlag": "10/8",
        "shieldstun": "5/4",
        "advantage": "-8/-9",
        "activeframes": "7\u20148/9\u201416"
      },
      {
        "movename": "Down Air",
        "totalframes": "61",
        "landinglag": "14",
        "notes": "Belly armor on frame 14-25. Autocancels on frame 1-3 and 40 onward",
        "startup": "14",
        "basedamage": "12.0/9.0",
        "shieldlag": "9/7",
        "shieldstun": "5/4",
        "advantage": "-9/-10",
        "activeframes": "14\u201415/16\u201421"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Blunderbuss Kannonball)",
        "totalframes": "69",
        "landinglag": "--",
        "notes": "Transitions to Vacuum on frame 50. K Rool can pass under platforms during any stage of this attack.",
        "startup": "30",
        "basedamage": "13.0",
        "shieldlag": "9",
        "shieldstun": "5",
        "advantage": "-25",
        "activeframes": "30\u2014150"
      },
      {
        "movename": "Blunderbuss, Vacuum",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "Max hold of 120 frames",
        "startup": "7",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "7\u201436"
      },
      {
        "movename": "Blunderbuss, Second Shot",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "12.0 damage dealt to vacuumed victim",
        "startup": "35",
        "basedamage": "18.0/17.0",
        "shieldlag": "11/11",
        "shieldstun": "16/5",
        "advantage": "+7/-4",
        "activeframes": "**"
      },
      {
        "movename": "Side B (Crownerang)",
        "totalframes": "63",
        "landinglag": "--",
        "notes": "17 frame animation of catching the crown. Knockback based armor on frame 6-63",
        "startup": "27",
        "basedamage": "9.0/7.0",
        "shieldlag": "7/7",
        "shieldstun": "4/3",
        "advantage": "-26",
        "activeframes": "27\u201464/65\u2014..."
      },
      {
        "movename": "Up B (Propellerpack)",
        "totalframes": "--",
        "landinglag": "30",
        "notes": "Rehit rate of 14 frames. K Rool does not suffer hitlag from this attack",
        "startup": "11",
        "basedamage": "3.0",
        "shieldlag": "5",
        "shieldstun": "4",
        "advantage": "**",
        "activeframes": "11/26/41/56/71/...108"
      },
      {
        "movename": "Down B (Gut Check)",
        "totalframes": "62",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15. Counters or reflects on 5-28. Must be facing attacker to activate.",
        "startup": "5 (Start of Counter)",
        "basedamage": "**",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "**"
      },
      {
        "movename": "Gut Check, Counterattack",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "**",
        "startup": "2, 9",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "2\u20145, 9\u201412"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "**",
        "landinglag": "--",
        "notes": "**",
        "startup": "**",
        "basedamage": "**"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "28",
        "basedamage": "**"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "62",
        "landinglag": "--",
        "notes": "--",
        "startup": "32",
        "basedamage": "**"
      },
      {
        "movename": "Up Throw",
        "totalframes": "103",
        "landinglag": "--",
        "notes": "--",
        "startup": "67",
        "basedamage": "**"
      },
      {
        "movename": "Down Throw",
        "totalframes": "73",
        "landinglag": "--",
        "notes": "Buries",
        "startup": "40",
        "basedamage": "**"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "23/28",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-18"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-16"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-17"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "46",
        "landinglag": "10",
        "notes": "Invulnerable on frame 4-30"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "64",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "74",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "78",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "88",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "102",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22"
      }
    ],
    "stats": {
      "Weight": "133",
      "Gravity": "0.105",
      "Walk Speed": "0.903",
      "Run Speed": "1.485",
      "Initial Dash": "1.936",
      "Air Speed": "0.945",
      "Total Air Acceleration": "0.05",
      "SH / FH / SHFF / FHFF Frames": "32 / 48 / 21 / 34",
      "Fall Speed / Fast Fall Speed": "1.7 / 2.72",
      "Out of Shield, Up Smash": "6 frames",
      "Out of Shield, Neutral Air or Up Air": "10 frames",
      "Out of Shield, Up B": "11 frames",
      "Shield Grab (Grab, post-Shieldstun)": "12 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "kirby": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "15",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 4",
        "startup": "2",
        "basedamage": "1.8",
        "shieldlag": "8",
        "shieldstun": "3",
        "advantage": "-9",
        "activeframes": "3"
      },
      {
        "movename": "Jab 2",
        "totalframes": "15",
        "landinglag": "--",
        "notes": "Transitions to Rapid Jab as early as frame 5",
        "startup": "3",
        "basedamage": "1.6",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-9",
        "activeframes": "3"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "5/7/9/11...",
        "basedamage": "0.2",
        "shieldlag": "4",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "5/7/9/11..."
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "3",
        "basedamage": "3.0",
        "shieldlag": "15",
        "shieldstun": "4",
        "advantage": "-32",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "23",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "8.0/7.0",
        "shieldlag": "7/7",
        "shieldstun": "8/4",
        "advantage": "-10/-11",
        "activeframes": "5\u20148"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "20",
        "landinglag": "--",
        "notes": "Leg intangibility on frame 4-10. Tipper deals reduced knockback.",
        "startup": "4",
        "basedamage": "5.0/4.0",
        "shieldlag": "6/5",
        "shieldstun": "6/5",
        "advantage": "-10/-9",
        "activeframes": "4\u20145/6\u201410"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "20",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "6.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-9",
        "activeframes": "4\u20146"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "59",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "12.0/9.0/6.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "-38",
        "activeframes": "9\u201417/18\u201426/27\u201434"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "Charge hold is frame 4",
        "startup": "13",
        "basedamage": "15.0/11.0",
        "shieldlag": "12/8",
        "shieldstun": "10/8",
        "advantage": "-23",
        "activeframes": "13\u201415/16\u201419"
      },
      {
        "movename": "Up Smash",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "Leg intangibility on frame 12-17. Charge hold is frame 8.",
        "startup": "12",
        "basedamage": "15.0/14.0/12.0",
        "shieldlag": "10/9/9",
        "shieldstun": "10/9/8",
        "advantage": "-23/-24",
        "activeframes": "12\u201414/15\u201416/17"
      },
      {
        "movename": "Down Smash",
        "totalframes": "53",
        "landinglag": "--",
        "notes": "Leg intangibility on frame 5-14. Charge hold is frame 4.",
        "startup": "10",
        "basedamage": "14.0/10.0",
        "shieldlag": "10",
        "shieldstun": "10",
        "advantage": "-33",
        "activeframes": "10\u201414/15\u201422"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "54",
        "landinglag": "6",
        "notes": "Autocancels on frame 1-4 and 51 onward",
        "startup": "8",
        "basedamage": "10.0/8.0/6.0/4.0",
        "shieldlag": "8/5",
        "shieldstun": "4/3",
        "advantage": "-2/-3",
        "activeframes": "10\u201411/12\u201415/16\u201420/21\u201434"
      },
      {
        "movename": "Forward Air",
        "totalframes": "47",
        "landinglag": "8",
        "notes": "Autocancels on frame 1-9 and 41 onward",
        "startup": "10/17/25",
        "basedamage": "4.0/3.0/5.0",
        "shieldlag": "5/5/7",
        "shieldstun": "3/2/3",
        "advantage": "-5/-6/-5",
        "activeframes": "10\u201411/17\u201418/25\u201427"
      },
      {
        "movename": "Back Air",
        "totalframes": "40",
        "landinglag": "10",
        "notes": "Autocancels on frame 1-2 and 32 onward",
        "startup": "6",
        "basedamage": "13.0/8.0",
        "shieldlag": "11/7",
        "shieldstun": "5/4",
        "advantage": "-5/-6",
        "activeframes": "6\u20148/9\u201412"
      },
      {
        "movename": "Up Air",
        "totalframes": "37",
        "landinglag": "7",
        "notes": "Autocancels on frame 1-9 and 22 onward",
        "startup": "8",
        "basedamage": "9.0",
        "shieldlag": "7",
        "shieldstun": "4",
        "advantage": "-3",
        "activeframes": "10\u201415"
      },
      {
        "movename": "Down Air",
        "totalframes": "54",
        "landinglag": "16",
        "notes": "Landing hit on frame 1. Autocancels on frame 1-17 and 48 onward",
        "startup": "18/21/24/27/30/34",
        "basedamage": "1.2/2.0/2.0",
        "shieldlag": "4/4/4",
        "shieldstun": "2/3/3",
        "advantage": "-12",
        "activeframes": "18\u201419/21\u201422/24\u201425/27\u201428/30\u201431/34"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Inhale)",
        "totalframes": "67",
        "landinglag": "--",
        "notes": "Minimum total frames is 67. Endlag is 19 frames upon release. Can eat projectiles. Projectile eat animation is 51 frames long",
        "startup": "10",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "14\u201448 (longer if held)"
      },
      {
        "movename": "Inhale, Copy/Spit",
        "totalframes": "20/30",
        "landinglag": "--",
        "notes": "--",
        "startup": "8/8",
        "basedamage": "10.0(Swallow)/6.0(Spit)",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "**"
      },
      {
        "movename": "Side B (Hammer)",
        "totalframes": "54",
        "landinglag": "--",
        "notes": "Startup is 11 from charging state. Takes 15 frames to enter charging state.",
        "startup": "11(+15)",
        "basedamage": "19.0\u201428.8",
        "shieldlag": "14\u201416",
        "shieldstun": "17\u201425",
        "advantage": "-26 to -18",
        "activeframes": "26\u201427 (11\u201412 from charge)"
      },
      {
        "movename": "Hammer, Full Charge",
        "totalframes": "59",
        "landinglag": "--",
        "notes": "If on the ground, invulnerable on frame 2-10 and Super armor on frame 11-17. Reaches full charge on frame 135.",
        "startup": "11",
        "basedamage": "35.0",
        "shieldlag": "18",
        "shieldstun": "30",
        "advantage": "-18",
        "activeframes": "11\u201412"
      },
      {
        "movename": "Hammer (Air)",
        "totalframes": "71",
        "landinglag": "--",
        "notes": "--",
        "startup": "28/42",
        "basedamage": "16.0",
        "shieldlag": "10/10",
        "shieldstun": "14/14",
        "advantage": "**/**",
        "activeframes": "28\u201429/42\u201443"
      },
      {
        "movename": "Up B (Final Cutter)",
        "totalframes": "--",
        "landinglag": "30",
        "notes": "Projectile appears on frame 1 of landing and disappears on 16.",
        "startup": "23/(41/50...)/**/**",
        "basedamage": "5.0/2.0/(5.0/2.0)/6.0",
        "shieldlag": "6/4/6/**",
        "shieldstun": "6/3/3/**",
        "advantage": "--/--/-21/12",
        "activeframes": "23\u201426/(41\u201449/50...)/1\u20142/1\u201416"
      },
      {
        "movename": "Down B (Stone)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "Emerging from stone is a 31 frame animation. Stone armor begins on frame 11. On Shield data assumes release immediately after hit.",
        "startup": "11",
        "basedamage": "14.0",
        "shieldlag": "10",
        "shieldstun": "13",
        "advantage": "-35",
        "activeframes": "**"
      },
      {
        "movename": "Down B, Air (Stone, Air)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "Stone armor begins on frame 19. Active frames can be longer depending on release timing. On Shield data assumes release immediately after hit.",
        "startup": "29",
        "basedamage": "18.0",
        "shieldlag": "11",
        "shieldstun": "16",
        "advantage": "-17",
        "activeframes": "29\u201447 (**)"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "15",
        "landinglag": "--",
        "notes": "Total frames includes 11 frames of hitlag",
        "startup": "1",
        "basedamage": "1.0"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "58",
        "landinglag": "--",
        "notes": "--",
        "startup": "45",
        "basedamage": "2.0/5.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "41",
        "basedamage": "8.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "86",
        "landinglag": "--",
        "notes": "Startup and total frames assume level ground. Endlag is always 30 after landing.\tDeals 7.0 damage and knockback to anyone near Kirby on frames 45\u201453.",
        "startup": "58",
        "basedamage": "10.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "79",
        "landinglag": "--",
        "notes": "Active for two frames per hit",
        "startup": "9/12/15/18/21/ 24/27/30/33/48/50",
        "basedamage": "1.0/2.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "21/26",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "62",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-29"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "82",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "91",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "102",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "134",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "141",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "79",
      "Gravity": "0.064",
      "Walk Speed": "0.977",
      "Run Speed": "1.727",
      "Initial Dash": "1.9",
      "Air Speed": "0.84",
      "Total Air Acceleration": "0.095",
      "SH / FH / SHFF / FHFF Frames": "39 / 53 / 26 / 36",
      "Fall Speed / Fast Fall Speed": "1.23 / 1.968",
      "Out of Shield, Back Air": "9 frames",
      "Out of Shield, Up Smash": "12 frames",
      "Out of Shield, Neutral Air or Forward Air or Up Air": "13 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "link": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "24",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 12",
        "startup": "8",
        "basedamage": "3.0",
        "shieldlag": "8",
        "shieldstun": "4",
        "advantage": "-12",
        "activeframes": "8\u20149"
      },
      {
        "movename": "Jab 2",
        "totalframes": "25",
        "landinglag": "--",
        "notes": "Transitions to Jab 3 as early as frame 8.",
        "startup": "5",
        "basedamage": "3.0",
        "shieldlag": "6",
        "shieldstun": "4",
        "advantage": "-16",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Jab 3",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "4.0",
        "shieldlag": "11",
        "shieldstun": "5",
        "advantage": "-23",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "Hits targets above him on frame 15",
        "startup": "15",
        "basedamage": "13.0",
        "shieldlag": "9",
        "shieldstun": "12",
        "advantage": "-12",
        "activeframes": "15(16\u201419)"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "11.0",
        "shieldlag": "8",
        "shieldstun": "10",
        "advantage": "-17",
        "activeframes": "8\u201412"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "9.0",
        "shieldlag": "7",
        "shieldstun": "9",
        "advantage": "-11",
        "activeframes": "10\u201411"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "56",
        "landinglag": "--",
        "notes": "--",
        "startup": "20",
        "basedamage": "14.0",
        "shieldlag": "9",
        "shieldstun": "15",
        "advantage": "-21",
        "activeframes": "20\u201423"
      },
      {
        "movename": "Forward Smash 1",
        "totalframes": "50",
        "landinglag": "--",
        "notes": "Transitions to second swing as early as frame 22. Sword Beam active frames 19-58 (only when Link is at 0%). Charge hold frame is 9.",
        "startup": "17",
        "basedamage": "7.0/14.0/5.0",
        "shieldlag": "7/10/6",
        "shieldstun": "6/10/4",
        "advantage": "-27/-23/**",
        "activeframes": "17\u201418"
      },
      {
        "movename": "Forward Smash 2",
        "totalframes": "60",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "13.0",
        "shieldlag": "14",
        "shieldstun": "9",
        "advantage": "-41",
        "activeframes": "10\u201411"
      },
      {
        "movename": "Up Smash",
        "totalframes": "77",
        "landinglag": "--",
        "notes": "Charge hold frame is 5.",
        "startup": "10/25/41",
        "basedamage": "4.0/3.0/10.0",
        "shieldlag": "5/5/8",
        "shieldstun": "4/3/8",
        "advantage": "-28",
        "activeframes": "10\u201413(14\u201415) / 25\u201428(29\u201430) / 41\u201445"
      },
      {
        "movename": "Down Smash",
        "totalframes": "56",
        "landinglag": "--",
        "notes": "Charge hold frame is 4",
        "startup": "12/24",
        "basedamage": "16.0/12.0",
        "shieldlag": "10/9",
        "shieldstun": "11/8",
        "advantage": "-33/-24",
        "activeframes": "12\u201413/24\u201425"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "38",
        "landinglag": "6",
        "notes": "Autocancels on frame 1-3 and 36 onward",
        "startup": "7",
        "basedamage": "11.0/6.0",
        "shieldlag": "8/6",
        "shieldstun": "4/3",
        "advantage": "-2/-3",
        "activeframes": "7\u20148(9\u201431)"
      },
      {
        "movename": "Forward Air",
        "totalframes": "51",
        "landinglag": "11",
        "notes": "Autocancels on frame 53 onward",
        "startup": "16/24",
        "basedamage": "8.0/10.0",
        "shieldlag": "7/10",
        "shieldstun": "4/4",
        "advantage": "-7/-7",
        "activeframes": "16\u201417/24\u201425"
      },
      {
        "movename": "Back Air",
        "totalframes": "30",
        "landinglag": "6",
        "notes": "Autocancels on frame 29 onward",
        "startup": "6/15",
        "basedamage": "5.0/7.0",
        "shieldlag": "6/7",
        "shieldstun": "3/3",
        "advantage": "-3/-3",
        "activeframes": "6\u20148/15\u201417"
      },
      {
        "movename": "Up Air",
        "totalframes": "59",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-10 and 43 onward",
        "startup": "11",
        "basedamage": "15.0/13.0",
        "shieldlag": "12/11",
        "shieldstun": "5/5",
        "advantage": "-9",
        "activeframes": "11\u201413(14\u201440)"
      },
      {
        "movename": "Down Air",
        "totalframes": "79",
        "landinglag": "19",
        "notes": "Autocancels on frame 1-9 and 65 onward. Can hit same target once again after 30 frames due to pogo effect.",
        "startup": "14",
        "basedamage": "18.0/15.0",
        "shieldlag": "14/12",
        "shieldstun": "6/5",
        "advantage": "**",
        "activeframes": "14\u201419(20\u201464)"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Hero's Bow)",
        "totalframes": "44-80",
        "landinglag": "--",
        "notes": "Reaches full charge on frame 52. Arrows travel for 46 frames after being fired. Arrows will stick into the ground for 3 seconds and can be picked up to either item-throw or fire two arrows. When firing two arrows at once, the second one generates three frames after the first.",
        "startup": "16-52",
        "basedamage": "4.0\u201412.0",
        "shieldlag": "5\u20149",
        "shieldstun": "2\u20144",
        "advantage": "-21 to -15",
        "activeframes": "16\u201461"
      },
      {
        "movename": "Side B (Boomerang)",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "9 frame animation of catching boomerang if no other action is being performed.",
        "startup": "27",
        "basedamage": "8.0/9.6",
        "shieldlag": "7/8",
        "shieldstun": "3/4",
        "advantage": "-8/-6",
        "activeframes": "27\u201436(37\u2014**)"
      },
      {
        "movename": "Up B (Spin Attack)",
        "totalframes": "76",
        "landinglag": "--",
        "notes": "Can charge attack for an additional 60 frames. Startup is 4 from charge state. 7f startup is only the front hit.",
        "startup": "7",
        "basedamage": "14.0",
        "shieldlag": "14",
        "shieldstun": "13",
        "advantage": "-56",
        "activeframes": "7\u20148(9\u201413/14\u201423/24\u201439)"
      },
      {
        "movename": "Up B, Air (Spin Attack, Air)",
        "totalframes": "--",
        "landinglag": "30",
        "notes": "--",
        "startup": "8/16/22/31/47",
        "basedamage": "4.0/2.0/4.0",
        "shieldlag": "5/4/11",
        "shieldstun": "5/3/5",
        "advantage": "--",
        "activeframes": "8\u20149/12\u201413/16\u201417/19\u201420/22\u201423/26\u201427/31\u201432/38\u201439/47\u201449"
      },
      {
        "movename": "Down B (Remote Bomb, Pull)",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "--"
      },
      {
        "movename": "Down B (Remote Bomb, Detonate)",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "Can self-damage",
        "startup": "12",
        "basedamage": "7.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-19",
        "activeframes": "12\u201413"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "18",
        "landinglag": "--",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "12/13",
        "basedamage": "3.0/2.5"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "12/14",
        "basedamage": "3.0/2.5"
      },
      {
        "movename": "Up Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "26/28",
        "basedamage": "5.0/2.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "--",
        "startup": "22/24",
        "basedamage": "3.0/3.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "21/26",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "49",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-30"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "69",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "74",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "82",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "95",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "108",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-21"
      }
    ],
    "stats": {
      "Weight": "104",
      "Gravity": "0.096",
      "Walk Speed": "1.247",
      "Run Speed": "1.534",
      "Initial Dash": "1.98",
      "Air Speed": "0.924",
      "Total Air Acceleration": "0.05",
      "SH / FH / SHFF / FHFF Frames": "33 / 45 / 22 / 30",
      "Fall Speed / Fast Fall Speed": "1.6 / 3.04",
      "Out of Shield, Up B": "7 frames (front only)",
      "Out of Shield, Back Air": "9 frames",
      "Out of Shield, Neutral Air or Up Smash": "10 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "little_mac": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "16",
        "landinglag": "--",
        "notes": "Transitions to jab 2 as early as frame 5",
        "startup": "1",
        "basedamage": "1.5",
        "shieldlag": "8",
        "shieldstun": "3",
        "advantage": "-17",
        "activeframes": "1"
      },
      {
        "movename": "Jab 2",
        "totalframes": "16",
        "landinglag": "--",
        "notes": "Transitions to jab 3 as early as frame 5",
        "startup": "1",
        "basedamage": "1.5",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-17",
        "activeframes": "1"
      },
      {
        "movename": "Jab 3",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "5.0",
        "shieldlag": "12",
        "shieldstun": "6",
        "advantage": "-19",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "4/6/8...",
        "basedamage": "0.5",
        "shieldlag": "4",
        "shieldstun": "2",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "3.0",
        "shieldlag": "13",
        "shieldstun": "4",
        "advantage": "-25",
        "activeframes": "5"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "4/12",
        "basedamage": "4.0/8.0",
        "shieldlag": "5/9",
        "shieldstun": "5/8",
        "advantage": "-17",
        "activeframes": "4\u20145/12\u201413"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "6.5",
        "shieldlag": "6",
        "shieldstun": "7",
        "advantage": "-18",
        "activeframes": "4\u201410"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "25",
        "landinglag": "--",
        "notes": "--",
        "startup": "3",
        "basedamage": "8.0",
        "shieldlag": "7",
        "shieldstun": "8",
        "advantage": "-14",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "10.0",
        "shieldlag": "8",
        "shieldstun": "10",
        "advantage": "-16",
        "activeframes": "1\u20144/7\u20149"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "43/43/43",
        "landinglag": "--",
        "notes": "Super armor on frame 8-15. Charge hold is frame 4",
        "startup": "14/14/15",
        "basedamage": "20.0/20.0/24.0",
        "shieldlag": "15/15/16",
        "shieldstun": "13/13/15",
        "advantage": "-16/-16/-13",
        "activeframes": "14\u201415/14\u201415/15"
      },
      {
        "movename": "Up Smash",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "Super armor on frame 8-11. Charge hold is frame 6",
        "startup": "10",
        "basedamage": "21.0/15.0",
        "shieldlag": "17/14",
        "shieldstun": "14/11",
        "advantage": "-23",
        "activeframes": "10(11\u201413)"
      },
      {
        "movename": "Down Smash",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "Super armor on frame 7-10 and 15-17. Charge hold is frame 5",
        "startup": "10/17",
        "basedamage": "13.0",
        "shieldlag": "9",
        "shieldstun": "9",
        "advantage": "-23/-16",
        "activeframes": "10\u201411/17\u201418"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "15",
        "landinglag": "10",
        "notes": "Autocancels on frame 16 onward",
        "startup": "2",
        "basedamage": "2.0",
        "shieldlag": "4",
        "shieldstun": "2",
        "advantage": "-8",
        "activeframes": "2"
      },
      {
        "movename": "Forward Air",
        "totalframes": "36",
        "landinglag": "13",
        "notes": "Autocancels on frame 35 onward",
        "startup": "10",
        "basedamage": "5.0",
        "shieldlag": "6",
        "shieldstun": "3",
        "advantage": "-10",
        "activeframes": "10\u201412"
      },
      {
        "movename": "Back Air",
        "totalframes": "37",
        "landinglag": "16",
        "notes": "Autocancels on frame 36 onward",
        "startup": "11",
        "basedamage": "6.0",
        "shieldlag": "6",
        "shieldstun": "3",
        "advantage": "-13",
        "activeframes": "11\u201412"
      },
      {
        "movename": "Up Air",
        "totalframes": "41",
        "landinglag": "13",
        "notes": "Autocancels on frame 40 onward",
        "startup": "5",
        "basedamage": "5.0",
        "shieldlag": "6/5",
        "shieldstun": "3/3",
        "advantage": "-10",
        "activeframes": "5\u20148"
      },
      {
        "movename": "Down Air",
        "totalframes": "27",
        "landinglag": "18",
        "notes": "Autocancels on frame 25 onward",
        "startup": "7",
        "basedamage": "5.0/4.0",
        "shieldlag": "6/5",
        "shieldstun": "3/3",
        "advantage": "-15/-15",
        "activeframes": "7\u201410"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B, Partial Charge (Straight Lunge, Partial Charge)",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Must charge for 32 frames minimum before you are allowed to punch. Heavy armor on frame 1 of charge and lasts until the punch begins.",
        "startup": "4(+32)",
        "basedamage": "12.0\u201428.6",
        "shieldlag": "9\u201417",
        "shieldstun": "11\u201426",
        "advantage": "-34 to -19",
        "activeframes": "**"
      },
      {
        "movename": "Neutral B, Full Charge (Straight Lunge, Full Charge)",
        "totalframes": "231",
        "landinglag": "--",
        "notes": "--",
        "startup": "123",
        "basedamage": "30.0",
        "shieldlag": "17",
        "shieldstun": "26",
        "advantage": "-82",
        "activeframes": "**"
      },
      {
        "movename": "K.O. Punch",
        "totalframes": "96/75",
        "landinglag": "--",
        "notes": "75 total frames in the air. Super armor on frame 8-9 but only on the ground. Unblockable on the ground.",
        "startup": "9",
        "basedamage": "35.0/13.0",
        "shieldlag": "-/14",
        "shieldstun": "-/12",
        "advantage": "Unblockable/-54",
        "activeframes": "9\u201411"
      },
      {
        "movename": "Side B (Jolt Haymaker)",
        "totalframes": "60/74",
        "landinglag": "--",
        "notes": "Total frames assumes level ground. Going over an edge applies air total frames. Invulnerable on frame 1-3. Leg intangibility on frame 4-17, or until punch.",
        "startup": "7/25",
        "basedamage": "14.00",
        "shieldlag": "12",
        "shieldstun": "13",
        "advantage": "-39 to -36",
        "activeframes": "7\u201417/**"
      },
      {
        "movename": "Side B, Air (Jolt Haymaker, Air)",
        "totalframes": "53/69",
        "landinglag": "--",
        "notes": "If you land, the lag corresponds to the remaining total frames of the ground version.",
        "startup": "7/25",
        "basedamage": "14.00",
        "shieldlag": "12",
        "shieldstun": "13",
        "advantage": "-32 to -31",
        "activeframes": "7\u201417/**"
      },
      {
        "movename": "Up B (Rising Uppercut)",
        "totalframes": "--",
        "landinglag": "30",
        "notes": "Invulnerable on frame 1-3.",
        "startup": "3/7/11/15/19/27",
        "basedamage": "3.0/1.0/3.0",
        "shieldlag": "7/4/13",
        "shieldstun": "4/2/4",
        "advantage": "**",
        "activeframes": "3/7/11/15/19/27"
      },
      {
        "movename": "Down B (Slip Counter)",
        "totalframes": "62",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4. Counters on frame 5-27",
        "startup": "5 (Start of Counter)",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "5\u201427 (counter)"
      },
      {
        "movename": "Slip Counter, Counterattack",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "Invulnerable on frame 1-18",
        "startup": "16",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "16\u201421"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "46",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "14",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "15",
        "landinglag": "--",
        "notes": "Total frames includes 11 frames of hitlag",
        "startup": "1",
        "basedamage": "1.0"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "15/17",
        "basedamage": "4.0/4.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "17/19",
        "basedamage": "4.0/5.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "10/12",
        "basedamage": "4.0/3.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "14/16",
        "basedamage": "4.0/3.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "18/23",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-14"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "26",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-12"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-14"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "49",
        "landinglag": "10",
        "notes": "Invulnerable on frame 2-26"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "62",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-18"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "64",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-18"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "72",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-18"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "81",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-18"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "89",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-18"
      }
    ],
    "stats": {
      "Weight": "87",
      "Gravity": "0.090",
      "Walk Speed": "1.386",
      "Run Speed": "2.464",
      "Initial Dash": "2.365",
      "Air Speed": "1.208",
      "Total Air Acceleration": "0.04",
      "SH / FH / SHFF / FHFF Frames": "33 / 44 / 21 / 29",
      "Fall Speed / Fast Fall Speed": "1.95 / 3.12",
      "Out of Shield, Up B": "3 frames",
      "Out of Shield, Neutral Air": "5 frames",
      "Out of Shield, Up Air": "8 frames",
      "Shield Grab (Grab, post-Shieldstun)": "13 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "lucario": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "Transitions to jab 2 as early as frame 12",
        "startup": "7",
        "basedamage": "1.6 | 2.5 | 4.0",
        "shieldlag": "6 | 7 | 8",
        "shieldstun": "3 | 4 | 5",
        "advantage": "-21 | -20 | -19",
        "activeframes": "7\u20148"
      },
      {
        "movename": "Jab 2",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Transitions to jab 3 as early as frame 6",
        "startup": "5",
        "basedamage": "1.3 | 2.0 | 3.2",
        "shieldlag": "5 | 5 | 6",
        "shieldstun": "3 | 3 | 4",
        "advantage": "-26 | -26 | -25",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Jab 3",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "1.9 | 3.0 | 4.8",
        "shieldlag": "7 | 8 | 9",
        "shieldstun": "3 | 4 | 5",
        "advantage": "-26 | -25 | -24",
        "activeframes": "9\u201410"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "12/15",
        "basedamage": "2.6/3.9 | 4.0/6.0 | 6.4/9.6",
        "shieldlag": "5/5 | 5/6 | 6/8",
        "shieldstun": "-/5 | -/6 | -/9",
        "advantage": "-12 | -11 | -8",
        "activeframes": "12\u201414/15\u201416"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "3.3/3.9 | 5.0/6.0 | 8.0/9.6",
        "shieldlag": "5/5 | 6/6 | 7/8",
        "shieldstun": "4/5 | 6/6 | 8/9",
        "advantage": "-22/-21 | -20/-20 | -18/-17",
        "activeframes": "6\u201413"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "22",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "3.3 | 5.0 | 8.0",
        "shieldlag": "5 | 6 | 7",
        "shieldstun": "4 | 6 | 8",
        "advantage": "-9 | -7 | -5",
        "activeframes": "9\u201412"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "5.6/6.6/4.6/3.9 | 8.5/10.0/7.0/6.0 | 13.6/16.0/11.2/9.6",
        "shieldlag": "6/6/6/5 | 7/8/7/6 | 9/10/8/8",
        "shieldstun": "6/7/55 | 8/10/7/6| 12/14/10/9",
        "advantage": "-28/-27 | -26/-24 | -22/-20",
        "activeframes": "7\u20149(10\u201415)"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "54",
        "landinglag": "--",
        "notes": "Charge hold is frame 3",
        "startup": "19",
        "basedamage": "10.5/8.5 | 16.0/13.0 | 25.6 / 20.8",
        "shieldlag": "8/7 | 10/9 | 15/13",
        "shieldstun": "8/6 | 11/9 | 16/14",
        "advantage": "-27/-25 | -24/-26 | -19/-21",
        "activeframes": "19\u201420(21\u201422)"
      },
      {
        "movename": "Up Smash",
        "totalframes": "63",
        "landinglag": "--",
        "notes": "Charge hold is frame 11",
        "startup": "15/19",
        "basedamage": "2.6/9.2/7.9 | 4.0/14.0/12.0 | 6.4/22.4/19.2",
        "shieldlag": "5/8/7 | 5/10/9 | 6/13/12",
        "shieldstun": "3/7/6 | 4/10/8 | 5/14/13",
        "advantage": "-37/-38 | -34/-36 | -30/-31",
        "activeframes": "15\u201417/19\u201420/21\u201423"
      },
      {
        "movename": "Down Smash",
        "totalframes": "54",
        "landinglag": "--",
        "notes": "Charge hold is frame 4",
        "startup": "19",
        "basedamage": "9.2 | 14.0 | 22.4",
        "shieldlag": "8 | 10 | 13",
        "shieldstun": "7 | 10 | 14",
        "advantage": "-28 | -25 | -21",
        "activeframes": "19\u201420"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "42",
        "landinglag": "5",
        "notes": "Autocancels on frame 1-4 and 36 onward",
        "startup": "10/18",
        "basedamage": "5.2/3.9 | 8.0/6.0 | 12.8/9.6",
        "shieldlag": "6/5 | 7/6 | 9/8",
        "shieldstun": "3/3 | 4/3 | 5/4",
        "advantage": "-2/-2 | -1/-2 | 0/-1",
        "activeframes": "10\u201414/18\u201421"
      },
      {
        "movename": "Forward Air",
        "totalframes": "27",
        "landinglag": "9",
        "notes": "Autocancels on frame 28 onward",
        "startup": "7",
        "basedamage": "3.9 | 6.0 | 9.6",
        "shieldlag": "5 | 6 | 8",
        "shieldstun": "3 | 3 | 4",
        "advantage": "-6 | -6 | -5",
        "activeframes": "7\u20148"
      },
      {
        "movename": "Back Air",
        "totalframes": "49",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-4 and 41 onward",
        "startup": "13",
        "basedamage": "9.2/8.5 | 14.0/13.0 | 22.4/20.8",
        "shieldlag": "8/7 | 10/9 | 13/13",
        "shieldstun": "4/4 | 5/5 | 7/7",
        "advantage": "-10/-10 | -9/-9 | -7/-7",
        "activeframes": "13\u201414(15\u201416)"
      },
      {
        "movename": "Up Air",
        "totalframes": "38",
        "landinglag": "13",
        "notes": "Autocancels on frame 29 onward",
        "startup": "10",
        "basedamage": "7.2/3.9 | 11.0/6.0 | 17.6/9.6",
        "shieldlag": "7/5 | 8/6 | 11/8",
        "shieldstun": "3/3 | 4/3 | 6/4",
        "advantage": "-10/-10 | -9/-10 | -7/-9",
        "activeframes": "10\u201411(12\u201413)"
      },
      {
        "movename": "Down Air",
        "totalframes": "30",
        "landinglag": "12",
        "notes": "Autocancels on frame 25 onward",
        "startup": "4/11",
        "basedamage": "3.3/3.9 | 5.0/6.0 | 8.0/9.6",
        "shieldlag": "5/5 | 6/6 | 7/8",
        "shieldstun": "2/3 | 3/3 | 4/4",
        "advantage": "-10/-9 | -9/-9 | -8/-8",
        "activeframes": "4\u20145/11\u201412"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Aura Sphere)",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "9 startup from charge.Takes 8 frames to enter charge state and 4 frames to cancel charge with shield. Charging sphere becomes hitbox on 9 and hits every six frames",
        "startup": "9 (+8)",
        "basedamage": "4.5 -11.3 | 6.0 - 17.2 | 11.0 - 27.6",
        "shieldlag": "6-8 | 7-11 | 8-15",
        "shieldstun": "3-4 | 3-6 | 4-8",
        "advantage": "-30 | -29 | -27",
        "activeframes": "17\u2014**"
      },
      {
        "movename": "Aura Sphere, Full Charge",
        "totalframes": "56",
        "landinglag": "--",
        "notes": "Takes 99 frames to reach full charge.",
        "startup": "17",
        "basedamage": "11.3 | 17.2 | 27.6",
        "shieldlag": "8 | 11 | 15",
        "shieldstun": "4 | 6 | 8",
        "advantage": "-27 | -22 | -16",
        "activeframes": "17\u2014**"
      },
      {
        "movename": "Side B (Force Palm)",
        "totalframes": "63",
        "landinglag": "--",
        "notes": "--.",
        "startup": "24",
        "basedamage": "7.8/3.5 | 11.5/5.4 | 19.0/8.6",
        "shieldlag": "7/5 | 9/6 | 12/7",
        "shieldstun": "8/4 | 11/6 | 17/8",
        "advantage": "-24/-30 | -19/-27 | -10/-24",
        "activeframes": "24\u201425"
      },
      {
        "movename": "Force Palm, Grab",
        "totalframes": "50",
        "landinglag": "--",
        "notes": "Grabs on frame 9 if on the ground",
        "startup": "9/37",
        "basedamage": "8.5 | 13.0 | 20.8",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "9"
      },
      {
        "movename": "Up B (Extreme Speed)",
        "totalframes": "--",
        "landinglag": "40/37",
        "notes": "28 endlag if you end on the ground. Hitbox on frame 1 if you crash directly into ground/wall/ceiling. This bounce is a 37 frame animation on the ground",
        "startup": "46",
        "basedamage": "3.9/2.6 | 6.0/4.0 | 9.6/6.4",
        "shieldlag": "6/6 | 7/6 | 9/8",
        "shieldstun": "5/5 | 6/5 | 9/7",
        "advantage": "-23/-31 | -22/-31 | -19/-29",
        "activeframes": "46\u201447(1)"
      },
      {
        "movename": "Down B (Double Team)",
        "totalframes": "70",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4. Counters on frame 5-24",
        "startup": "5 (Start of Counter)",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "5\u201424(counter)"
      },
      {
        "movename": "Double Team, Counterattack",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "Invulnerable on frame 1-17 in addition to counter freeze frames.",
        "startup": "8",
        "basedamage": "8.2 | 12.5 | 20.0",
        "shieldlag": "15 | 16 | 18",
        "shieldstun": "8 | 12 | 18",
        "advantage": "-31 | -27 | -21",
        "activeframes": "**"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "46",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19 | 20 | 21",
        "landinglag": "--",
        "notes": "Total frames includes 13 | 14 | 15 frames of hitlag",
        "startup": "1",
        "basedamage": "0.8 | 1.3 | 2.0"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "21",
        "landinglag": "--",
        "notes": "--",
        "startup": "6/7",
        "basedamage": "3.3 / 1.9 | 5.0 / 3.0 | 8.0 / 4.8"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "14",
        "basedamage": "6.6 | 10.0 | 16.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "16/17",
        "basedamage": "3.3 / 3.9 | 5.0 / 6.0 | 8.0 / 9.6"
      },
      {
        "movename": "Down Throw",
        "totalframes": "50",
        "landinglag": "--",
        "notes": "--",
        "startup": "28",
        "basedamage": "4.6 | 7.0 | 11.2"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "48",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-28"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "65",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "74",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "91",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "98",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "108",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "92",
      "Gravity": "0.084",
      "Walk Speed": "1.103",
      "Run Speed": "1.705",
      "Initial Dash": "2.255",
      "Air Speed": "1.281",
      "Total Air Acceleration": "0.09",
      "SH / FH / SHFF / FHFF Frames": "41 / 56 / 28 / 38",
      "Fall Speed / Fast Fall Speed": "1.68 / 2.688",
      "Out of Shield, Down Air": "7 frames",
      "Out of Shield, Forward Air": "10 frames",
      "Out of Shield, Neutral Air or Up Air": "13 frames",
      "Shield Grab (Grab, post-Shieldstun)": "11 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "lucas": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 5",
        "startup": "2",
        "basedamage": "2.5",
        "shieldlag": "8",
        "shieldstun": "4",
        "advantage": "-13",
        "activeframes": "2"
      },
      {
        "movename": "Jab 2",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Transitions to Jab 3 as early as frame 5",
        "startup": "3",
        "basedamage": "1.5",
        "shieldlag": "8",
        "shieldstun": "3",
        "advantage": "-13",
        "activeframes": "3"
      },
      {
        "movename": "Jab 3",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "3.5",
        "shieldlag": "11",
        "shieldstun": "4",
        "advantage": "-19",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "25",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "7.5/11.0",
        "shieldlag": "7/13",
        "shieldstun": "8/10",
        "advantage": "-10/-8",
        "activeframes": "7\u20149"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "4/7",
        "basedamage": "1.5/8.0/5.0",
        "shieldlag": "7/11/9",
        "shieldstun": "-/8/6",
        "advantage": "-18",
        "activeframes": "4/7\u201410(11\u201414/15\u201416)"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "15",
        "landinglag": "--",
        "notes": "--",
        "startup": "3",
        "basedamage": "5.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-6",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "9.0/13.0",
        "shieldlag": "11/15",
        "shieldstun": "9/12",
        "advantage": "-15/-12",
        "activeframes": "13\u201417"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "Reflects on frame 11-20. Charge hold is frame 7",
        "startup": "14",
        "basedamage": "14.0/15.0",
        "shieldlag": "10/12",
        "shieldstun": "10/10",
        "advantage": "-21",
        "activeframes": "14\u201415"
      },
      {
        "movename": "Up Smash",
        "totalframes": "98",
        "landinglag": "--",
        "notes": "Invincible on frame 1-4. Head intangibility on frame 15-29. Charge hold is frame 4. Lucas is not invincible during charge hold however",
        "startup": "28/30",
        "basedamage": "2.0/21.0",
        "shieldlag": "4/16",
        "shieldstun": "-/14",
        "advantage": "-54",
        "activeframes": "28/30\u201432(33\u201437/38\u201442/43\u201447/48\u201452/53\u201454)"
      },
      {
        "movename": "Down Smash",
        "totalframes": "59",
        "landinglag": "--",
        "notes": "Charge hold is frame 5",
        "startup": "20/29/39",
        "basedamage": "17.0/14.0/11.0",
        "shieldlag": "15/15/13",
        "shieldstun": "-/-/8",
        "advantage": "-12",
        "activeframes": "20\u201422/29\u201431/39\u201441"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "44",
        "landinglag": "12",
        "notes": "Autocancels on frame 37 onward",
        "startup": "7/12/17/26",
        "basedamage": "2.0/4.0",
        "shieldlag": "7/10",
        "shieldstun": "2/3",
        "advantage": "-10/-9",
        "activeframes": "7/12/17/26"
      },
      {
        "movename": "Forward Air",
        "totalframes": "41",
        "landinglag": "7",
        "notes": "Autocancels on frame 34 onward",
        "startup": "9",
        "basedamage": "9.0/12.5",
        "shieldlag": "7/15",
        "shieldstun": "4/5",
        "advantage": "-3/-2",
        "activeframes": "9\u201410/11\u201412"
      },
      {
        "movename": "Back Air",
        "totalframes": "39",
        "landinglag": "9",
        "notes": "Autocancels on frame 1-2 and 34 onward",
        "startup": "15",
        "basedamage": "9.0 / 12.0 / 7.0",
        "shieldlag": "11/13/10",
        "shieldstun": "4/5/3",
        "advantage": "-5/-4/-6",
        "activeframes": "15\u201419(20\u201422)"
      },
      {
        "movename": "Up Air",
        "totalframes": "33",
        "landinglag": "7",
        "notes": "Autocancels on frame 34 onward",
        "startup": "7",
        "basedamage": "11.0",
        "shieldlag": "9",
        "shieldstun": "4",
        "advantage": "-3",
        "activeframes": "7\u201410"
      },
      {
        "movename": "Down Air",
        "totalframes": "56",
        "landinglag": "16",
        "notes": "Autocancels on frame 47 onward",
        "startup": "10/18/26/34",
        "basedamage": "3.5/5.0",
        "shieldlag": "8/9",
        "shieldstun": "2/3",
        "advantage": "-14/-13",
        "activeframes": "10\u201412/18\u201420/26\u201428/34\u201436"
      },
      {
        "movename": "Z Air",
        "totalframes": "51",
        "landinglag": "8",
        "notes": "Tethers on frame 7.",
        "startup": "9",
        "basedamage": "5.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-2",
        "activeframes": "9\u201412(13\u201421)"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (PK Freeze)",
        "totalframes": "66-118",
        "landinglag": "--",
        "notes": "From charge release, startup is 5 and total frames is 31",
        "startup": "40-92",
        "basedamage": "10.0\u201423.0",
        "shieldlag": "8\u201414",
        "shieldstun": "4\u20147",
        "advantage": "-14 to -5",
        "activeframes": "40\u201443(92\u201495)"
      },
      {
        "movename": "Side B (PK Fire)",
        "totalframes": "52",
        "landinglag": "22",
        "notes": "Explosion 1 frame after projectile hits something. Does not erupt on shields",
        "startup": "21",
        "basedamage": "3.0/7.0",
        "shieldlag": "5",
        "shieldstun": "2",
        "advantage": "-24",
        "activeframes": "21\u201438(1\u201419)"
      },
      {
        "movename": "Up B (PK Thunder)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "Hits every six frames as it passes through somebody. 44 endlag when projectile ends",
        "startup": "20",
        "basedamage": "2.5/0.7",
        "shieldlag": "5",
        "shieldstun": "2",
        "advantage": "--",
        "activeframes": "20\u2014**"
      },
      {
        "movename": "Up B, Self-hit (PK Thunder 2)",
        "totalframes": "60",
        "landinglag": "30",
        "notes": "Total frames refers to travel along the ground.",
        "startup": "1/4/6/8/10/12/14/17/20/23/26/29",
        "basedamage": "5.0/2.0/1.5/10.0",
        "shieldlag": "9/7/7/15",
        "shieldstun": "-/-/-10",
        "advantage": "-21",
        "activeframes": "1\u20142/4\u20145/6\u20147/8\u20149/10\u201411/12\u201413/14\u201415/17\u201419/20\u201421/23\u201424/26\u201427/29\u201430"
      },
      {
        "movename": "Down B (PSI Magnet)",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "Absorbs as early as frame 7. On release, startup is 1 with 9 total frames",
        "startup": "19 (7 is start of absorb)",
        "basedamage": "8.0",
        "shieldlag": "11",
        "shieldstun": "8",
        "advantage": "+0",
        "activeframes": "19"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "46",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "54",
        "landinglag": "--",
        "notes": "--",
        "startup": "14",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "52",
        "landinglag": "--",
        "notes": "--",
        "startup": "23",
        "basedamage": "10.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "52",
        "landinglag": "--",
        "notes": "--",
        "startup": "20",
        "basedamage": "10.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "--",
        "startup": "25",
        "basedamage": "10.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "57",
        "landinglag": "--",
        "notes": "--",
        "startup": "41",
        "basedamage": "11.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "56",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-30"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "75",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "85",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "95",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "117",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "126",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "94",
      "Gravity": "0.090",
      "Walk Speed": "0.893",
      "Run Speed": "1.65",
      "Initial Dash": "1.815",
      "Air Speed": "1.155",
      "Total Air Acceleration": "0.095",
      "SH / FH / SHFF / FHFF Frames": "34 / 50 / 23 / 35",
      "Fall Speed / Fast Fall Speed": "1.37 / 2.192",
      "Out of Shield, Neutral Air, Up Air": "10 frames",
      "Out of Shield, Forward Air or Z Air": "12 frames",
      "Out of Shield, Down Air or Jab": "13 frames",
      "Shield Grab (Grab, post-Shieldstun)": "16 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "lucina": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "25",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 11.",
        "startup": "5",
        "basedamage": "3.3",
        "shieldlag": "7",
        "shieldstun": "4",
        "advantage": "-16",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Jab 2",
        "totalframes": "28",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "4.7",
        "shieldlag": "7",
        "shieldstun": "5",
        "advantage": "-19",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "11.0",
        "shieldlag": "8",
        "shieldstun": "10",
        "advantage": "-15",
        "activeframes": "8\u201411"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "7.6/8.0",
        "shieldlag": "7/7",
        "shieldstun": "8/8",
        "advantage": "-19",
        "activeframes": "6\u20148/9\u201412"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "23",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "8.5",
        "shieldlag": "7",
        "shieldstun": "8",
        "advantage": "-8",
        "activeframes": "7\u20148"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "10.9",
        "shieldlag": "8",
        "shieldstun": "15",
        "advantage": "-21",
        "activeframes": "13\u201416"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "Charge hold is frame 2.",
        "startup": "10",
        "basedamage": "15.0",
        "shieldlag": "10",
        "shieldstun": "10",
        "advantage": "-31",
        "activeframes": "10\u201413"
      },
      {
        "movename": "Up Smash",
        "totalframes": "58",
        "landinglag": "--",
        "notes": "Launcher and sword hits generate on the same frame. Charge hold is frame 9",
        "startup": "13",
        "basedamage": "3.0/14.2",
        "shieldlag": "0/10",
        "shieldstun": "4/10",
        "advantage": "-41/-35",
        "activeframes": "13\u201414/13\u201417"
      },
      {
        "movename": "Down Smash",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "Charge hold is frame 3.",
        "startup": "6/21",
        "basedamage": "9.5/14.0",
        "shieldlag": "8/10",
        "shieldstun": "7/10",
        "advantage": "-42/-24",
        "activeframes": "6\u20147/21\u201423"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "49",
        "landinglag": "7",
        "notes": "Autocancels on frame 47 onward",
        "startup": "6/15",
        "basedamage": "4.2/8.5",
        "shieldlag": "5/7",
        "shieldstun": "3/4",
        "advantage": "-4/-3",
        "activeframes": "6\u20147/15\u201421"
      },
      {
        "movename": "Forward Air",
        "totalframes": "37",
        "landinglag": "10",
        "notes": "Autocancels on frame 36 onward",
        "startup": "6",
        "basedamage": "10.5",
        "shieldlag": "8",
        "shieldstun": "4",
        "advantage": "-6",
        "activeframes": "6\u20148"
      },
      {
        "movename": "Back Air",
        "totalframes": "39",
        "landinglag": "10",
        "notes": "Autocancels on frame 1-2 and 32 onward",
        "startup": "7",
        "basedamage": "11.8",
        "shieldlag": "9",
        "shieldstun": "5",
        "advantage": "-5",
        "activeframes": "7\u201411"
      },
      {
        "movename": "Up Air",
        "totalframes": "45",
        "landinglag": "8",
        "notes": "Autocancels on frame 1-2 and 38 onward",
        "startup": "5",
        "basedamage": "11.4",
        "shieldlag": "8",
        "shieldstun": "5",
        "advantage": "-3",
        "activeframes": "5\u20149"
      },
      {
        "movename": "Down Air",
        "totalframes": "59",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-2 and 55 onward",
        "startup": "9",
        "basedamage": "12.3/14.2",
        "shieldlag": "9/12",
        "shieldstun": "5/5",
        "advantage": "-9/-9",
        "activeframes": "11/12\u201413"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Shieldbreaker)",
        "totalframes": "50\u2014109",
        "landinglag": "--",
        "notes": "On release, startup is 8 and total frames is 39",
        "startup": "19\u201478",
        "basedamage": "8.5\u201423",
        "shieldlag": "13\u201418",
        "shieldstun": "8\u2014Shieldbreak",
        "advantage": "-23 to Shieldbreak",
        "activeframes": "19\u201420 (or frames 1\u20142 after release)"
      },
      {
        "movename": "Side B (Dancing Blade)",
        "totalframes": "39/29",
        "landinglag": "--",
        "notes": "Second total frames is the air version. Can transition to next slash on frame 12",
        "startup": "9",
        "basedamage": "2.8",
        "shieldlag": "5",
        "shieldstun": "4",
        "advantage": "-26/-16",
        "activeframes": "9\u201411"
      },
      {
        "movename": "Dancing Blade 2 Neutral",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "Can transition to next slash on frame 8",
        "startup": "5",
        "basedamage": "2.8",
        "shieldlag": "5",
        "shieldstun": "4",
        "advantage": "-29",
        "activeframes": "5\u20147"
      },
      {
        "movename": "Dancing Blade 3 Neutral",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "Can transition to next slash on frame 7",
        "startup": "4",
        "basedamage": "3.3",
        "shieldlag": "5",
        "shieldstun": "4",
        "advantage": "-35",
        "activeframes": "4\u20146"
      },
      {
        "movename": "Dancing Blade 4 Neutral",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "4.7",
        "shieldlag": "7",
        "shieldstun": "5",
        "advantage": "-43",
        "activeframes": "7\u20149"
      },
      {
        "movename": "Dancing Blade 2 Up",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "Can transition to next slash on frame 8",
        "startup": "4",
        "basedamage": "2.8",
        "shieldlag": "5",
        "shieldstun": "4",
        "advantage": "-30",
        "activeframes": "4\u20146"
      },
      {
        "movename": "Dancing Blade 3 Up",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "Can transition to next slash on frame 8",
        "startup": "5",
        "basedamage": "3.3",
        "shieldlag": "5",
        "shieldstun": "4",
        "advantage": "-34",
        "activeframes": "5\u20147"
      },
      {
        "movename": "Dancing Blade 4 Up",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "5.6",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-32",
        "activeframes": "6\u201410"
      },
      {
        "movename": "Dancing Blade 3 Down",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "Can transition to next slash on frame 8",
        "startup": "5",
        "basedamage": "3.3",
        "shieldlag": "5",
        "shieldstun": "4",
        "advantage": "-34",
        "activeframes": "5\u20147"
      },
      {
        "movename": "Dancing Blade 4 Down",
        "totalframes": "74",
        "landinglag": "--",
        "notes": "--",
        "startup": "7/10/13/16/19",
        "basedamage": "2.0/4.2",
        "shieldlag": "4/5",
        "shieldstun": "-/5",
        "advantage": "-50",
        "activeframes": "7/10/13/16/19\u201421"
      },
      {
        "movename": "Up B (Dolphin Slash)",
        "totalframes": "--",
        "landinglag": "24",
        "notes": "Invulnerable on frame 4-5. 1-5 in the air.",
        "startup": "5",
        "basedamage": "11.0/7.0",
        "shieldlag": "8/7",
        "shieldstun": "10/7",
        "advantage": "--",
        "activeframes": "5\u20146/7\u201411"
      },
      {
        "movename": "Down B (Counter)",
        "totalframes": "64",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5. Counter window 6-27.",
        "startup": "6 (Start of Counter)",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Counter, Attack",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "Invulnerable on frame 1-7 in addition to counter freeze frames.",
        "startup": "4",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "4\u20146"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "4.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "19",
        "basedamage": "4.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "5.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "16",
        "basedamage": "4.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "52",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-29"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "69",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "79",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "85",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "99",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "116",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "90",
      "Gravity": "0.075",
      "Walk Speed": "1.575",
      "Run Speed": "1.964",
      "Initial Dash": "2.255",
      "Air Speed": "1.071",
      "Total Air Acceleration": "0.08",
      "SH / FH / SHFF / FHFF Frames": "41 / 55 / 28 / 38",
      "Fall Speed / Fast Fall Speed": "1.58 / 2.528",
      "Out of Shield, Up B": "5 frames",
      "Out of Shield, Up Air": "8 frames",
      "Out of Shield, Neutral Air or Forward Air": "9 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "luigi": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "18",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 5",
        "startup": "2",
        "basedamage": "2.0",
        "shieldlag": "8",
        "shieldstun": "3",
        "advantage": "-13",
        "activeframes": "2\u20143"
      },
      {
        "movename": "Jab 2",
        "totalframes": "18",
        "landinglag": "--",
        "notes": "Transitions to Jab 3 as early as frame 6",
        "startup": "3",
        "basedamage": "2.0",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-12",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Jab 3",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "4.0",
        "shieldlag": "11",
        "shieldstun": "5",
        "advantage": "-19",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "9.0",
        "shieldlag": "7",
        "shieldstun": "9",
        "advantage": "-18",
        "activeframes": "5\u20147"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "6.0",
        "shieldlag": "7",
        "shieldstun": "9",
        "advantage": "-18",
        "activeframes": "5\u201410"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "13",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "5.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-2",
        "activeframes": "5\u20148"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "4/8/12/16/25",
        "basedamage": "2.0/4.0",
        "shieldlag": "4/14",
        "shieldstun": "3/5",
        "advantage": "-18",
        "activeframes": "4/8/12/16/25"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "Charge hold is frame 4",
        "startup": "12",
        "basedamage": "15.0",
        "shieldlag": "10",
        "shieldstun": "10",
        "advantage": "-19",
        "activeframes": "12\u201413"
      },
      {
        "movename": "Up Smash",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "Head intangibility on frame 9-13. Charge hold is frame 6",
        "startup": "9",
        "basedamage": "14.0",
        "shieldlag": "10",
        "shieldstun": "10",
        "advantage": "-20",
        "activeframes": "9\u201413"
      },
      {
        "movename": "Down Smash",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "Charge hold is frame 2.",
        "startup": "6/14",
        "basedamage": "15.0/14.0",
        "shieldlag": "10/10",
        "shieldstun": "10/10",
        "advantage": "-21/-13",
        "activeframes": "6\u20147/14\u201415"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "45",
        "landinglag": "8",
        "notes": "Auto cancels on frame 1-2 and frame 36 onward.",
        "startup": "3",
        "basedamage": "12.0/6.0",
        "shieldlag": "9/6",
        "shieldstun": "5/3",
        "advantage": "-3/-5",
        "activeframes": "3\u20145(6\u201431)"
      },
      {
        "movename": "Forward Air",
        "totalframes": "23",
        "landinglag": "13",
        "notes": "Autocancels on frame 21 onward",
        "startup": "7",
        "basedamage": "8.0",
        "shieldlag": "7",
        "shieldstun": "4",
        "advantage": "-9",
        "activeframes": "7\u201410"
      },
      {
        "movename": "Back Air",
        "totalframes": "44",
        "landinglag": "10",
        "notes": "Autocancels on frame 1-2 and 33 onward",
        "startup": "6",
        "basedamage": "14.0/8.0",
        "shieldlag": "10/7",
        "shieldstun": "5/4",
        "advantage": "-5/-6",
        "activeframes": "6\u20147(8\u201413)"
      },
      {
        "movename": "Up Air",
        "totalframes": "26",
        "landinglag": "7",
        "notes": "Autocancels on frame 19 onward",
        "startup": "5",
        "basedamage": "11.0/7.0",
        "shieldlag": "8/7",
        "shieldstun": "4/3",
        "advantage": "-3/-4",
        "activeframes": "5\u20147(8\u201411)"
      },
      {
        "movename": "Down Air",
        "totalframes": "28",
        "landinglag": "12",
        "notes": "Autocancels on frame 1-5 and 24 onward",
        "startup": "10",
        "basedamage": "10.0/8.0",
        "shieldlag": "11/7",
        "shieldstun": "4/4",
        "advantage": "-8/-8",
        "activeframes": "10(11\u201414)"
      },
      {
        "movename": "Z Air",
        "totalframes": "52",
        "landinglag": "20",
        "notes": "If you land before firing, it will fire on frame 6 of landing. Advantage is that shot.",
        "startup": "14",
        "basedamage": "5.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-2",
        "activeframes": "14\u201468"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Fireball)",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "--",
        "startup": "17",
        "basedamage": "6.0/5.0",
        "shieldlag": "6/6",
        "shieldstun": "3/3",
        "advantage": "-20",
        "activeframes": "17\u201445(46\u201466)"
      },
      {
        "movename": "Side B (Green Missile)",
        "totalframes": "80/95",
        "landinglag": "39",
        "notes": "On hit endlag is 18 or 32 total if you landed during that 18 frame animation. Total frames is 80 in the air, 95 on level ground. 41 landing lag is consistent as long as you land during the 80 frame animation. Invulnerable on frame 18-22.",
        "startup": "22",
        "basedamage": "6.1\u201421.0/25.0",
        "shieldlag": "8\u201415/15",
        "shieldstun": "6\u201418/22",
        "advantage": "-26 to -14/-10",
        "activeframes": "22\u201460"
      },
      {
        "movename": "Up B (Super Jump Punch, Ground)",
        "totalframes": "109",
        "landinglag": "45",
        "notes": "Invulnerable on frame 8-10 on the ground. Total frames assumes level ground.",
        "startup": "8",
        "basedamage": "25.0/1.0",
        "shieldlag": "14/4",
        "shieldstun": "22/2",
        "advantage": "-79/-99",
        "activeframes": "8(9\u201423)"
      },
      {
        "movename": "Up B (Super Jump Punch, Air)",
        "totalframes": "--",
        "landinglag": "45",
        "notes": "Invulnerable on frame 6-8 in the air",
        "startup": "6",
        "basedamage": "20.0/1.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "6(7\u201423)"
      },
      {
        "movename": "Down B (Luigi Cyclone)",
        "totalframes": "85",
        "landinglag": "--",
        "notes": "Invincible on frame 4-8 on the ground. 1-7 in the air.",
        "startup": "10/16/22/28/40",
        "basedamage": "2.0/4.0",
        "shieldlag": "4/11",
        "shieldstun": "3/5",
        "advantage": "-40",
        "activeframes": "10/16/22/28/40"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "14",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "--",
        "startup": "16",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "17",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "Total frames includes 14 frames of hitlag.",
        "notes": "--",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "9.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "10.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "Collateral hitbox on frame 15, does 6.0%.",
        "startup": "18",
        "basedamage": "8.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "Collateral hitbox on frames 18\u201428.",
        "startup": "18/29",
        "basedamage": "3.0/3.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17."
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15."
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16."
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "57",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-29."
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "81",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "88",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "96",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "113",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "127",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      }
    ],
    "stats": {
      "Weight": "97",
      "Gravity": "0.083",
      "Walk Speed": "1.134",
      "Run Speed": "1.65",
      "Initial Dash": "1.815",
      "Air Speed": "0.77",
      "Total Air Acceleration": "0.075",
      "SH / FH / SHFF / FHFF Frames": "45 / 67 / 32 / 47",
      "Fall Speed / Fast Fall Speed": "1.32 / 2.112",
      "Out of Shield, Neutral": "6 frames",
      "Out of Shield, Up Air or Up B": "8 frames",
      "Out of Shield, Back Air or Up Smash": "9 frames",
      "Shield Grab (Grab, post-Shieldstun)": "18 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "mario": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 5",
        "startup": "2",
        "basedamage": "2.2",
        "shieldlag": "8",
        "shieldstun": "3",
        "advantage": "-14",
        "activeframes": "2\u20143"
      },
      {
        "movename": "Jab 2",
        "totalframes": "21",
        "landinglag": "--",
        "notes": "Transitions to Jab 3 as early as frame 6",
        "startup": "2",
        "basedamage": "1.7",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-16",
        "activeframes": "2\u20143"
      },
      {
        "movename": "Jab 3",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "3",
        "basedamage": "4.0",
        "shieldlag": "11",
        "shieldstun": "5",
        "advantage": "-29",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "25",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "7.0",
        "shieldlag": "7",
        "shieldstun": "7",
        "advantage": "-13",
        "activeframes": "5\u20147"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "5.5",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-18",
        "activeframes": "5\u201411"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "7.0/5.0",
        "shieldlag": "7/6",
        "shieldstun": "7/6",
        "advantage": "-15/-16",
        "activeframes": "5\u20147"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "8.0/6.0",
        "shieldlag": "9/8",
        "shieldstun": "14/11",
        "advantage": "-17",
        "activeframes": "6\u20149(10\u201425)"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "Charge hold is frame 5.",
        "startup": "15",
        "basedamage": "17.7/14.6",
        "shieldlag": "11/10",
        "shieldstun": "12/10",
        "advantage": "-22/-20",
        "activeframes": "15\u201417"
      },
      {
        "movename": "Up Smash",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "Head Invulnerability on frame 9-12. Charge hold is frame 6.",
        "startup": "9",
        "basedamage": "14.0",
        "shieldlag": "10",
        "shieldstun": "10",
        "advantage": "-20",
        "activeframes": "9\u201412"
      },
      {
        "movename": "Down Smash",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "Charge hold is frame 2.",
        "startup": "5/14",
        "basedamage": "10.0/12.0",
        "shieldlag": "8/9",
        "shieldstun": "7/8",
        "advantage": "-31/-21",
        "activeframes": "5\u20146/14"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "45",
        "landinglag": "6",
        "notes": "Auto cancels on frame 1-2 and frame 39 onward.",
        "startup": "3",
        "basedamage": "8.0/5.0",
        "shieldlag": "7/6",
        "shieldstun": "4/3",
        "advantage": "-2/-3/-3/-3",
        "activeframes": "3\u20145(6\u201427)"
      },
      {
        "movename": "Forward Air",
        "totalframes": "59",
        "landinglag": "17",
        "notes": "Auto cancels on frame 1-2 and frame 43 onward.",
        "startup": "16",
        "basedamage": "12.0/14.0/10.0",
        "shieldlag": "9/10/9",
        "shieldstun": "5/5/5",
        "advantage": "-12/-12/-12",
        "activeframes": "16/17\u201420/21"
      },
      {
        "movename": "Back Air",
        "totalframes": "33",
        "landinglag": "6",
        "notes": "Auto cancels on frame 1-5 and frame 19 onward.",
        "startup": "6",
        "basedamage": "10.5/7.0",
        "shieldlag": "8/7",
        "shieldstun": "4/3",
        "advantage": "-2/-3/-2/-3",
        "activeframes": "6\u20147(8\u201410)"
      },
      {
        "movename": "Up Air",
        "totalframes": "30",
        "landinglag": "6",
        "notes": "Auto cancels on frame 17 onward.",
        "startup": "4",
        "basedamage": "7.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-3",
        "activeframes": "4\u20147"
      },
      {
        "movename": "Down Air",
        "totalframes": "37",
        "landinglag": "15",
        "notes": "Auto cancels on frame 1-4 and frame 33 onward.",
        "startup": "5/7/9/11/13/23",
        "basedamage": "1.3/5.5",
        "shieldlag": "4/6/4",
        "shieldstun": "2/3/3",
        "advantage": "-11",
        "activeframes": "5/7/9/11/13/23(1\u20142)"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Fireball)",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Fireball disappears on frame 88.",
        "startup": "17",
        "basedamage": "5.0/4.0",
        "shieldlag": "6/5",
        "shieldstun": "3/2",
        "advantage": "-23",
        "activeframes": "17\u201420(21\u201446/47\u201486)"
      },
      {
        "movename": "Side B (Cape)",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "Reflects on frame 6-20.",
        "startup": "12",
        "basedamage": "7.0",
        "shieldlag": "7",
        "shieldstun": "7",
        "advantage": "-16",
        "activeframes": "12\u201414"
      },
      {
        "movename": "Up B (Super Jump Punch)",
        "totalframes": "--",
        "landinglag": "30",
        "notes": "Invulnerable on frame 3-6.",
        "startup": "3/7/9/11/13/15/17",
        "basedamage": "5.0 / 0.6 / 3.0",
        "shieldlag": "6/4/5",
        "shieldstun": "6/2/4",
        "advantage": "--",
        "activeframes": "3\u20146/7/9/11/13/15/17\u201418"
      },
      {
        "movename": "Down B (F.L.U.D.D.)",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "Startup is 2 from a charging state. Entering charge state takes 19 frames and is shield cancellable on 20.",
        "startup": "2 (+19)",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "21\u2014**"
      },
      {
        "movename": "Down B, Fully Charged (F.L.U.D.D.)",
        "totalframes": "67",
        "landinglag": "--",
        "notes": "Takes 100 frames to reach full charge.",
        "startup": "21",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "21\u2014**"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "Total frames includes 15 frames of hitlag.",
        "notes": "--",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "8.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "59",
        "landinglag": "--",
        "notes": "--",
        "startup": "44",
        "basedamage": "11.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "18",
        "basedamage": "7.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "18",
        "basedamage": "5.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17."
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15."
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16."
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "52",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-29."
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "71",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "77",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "87",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "102",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "116",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      }
    ],
    "stats": {
      "Weight": "98",
      "Gravity": "0.087",
      "Walk Speed": "1.155",
      "Run Speed": "1.76",
      "Initial Dash": "1.936",
      "Air Speed": "1.208",
      "Total Air Acceleration": "0.08",
      "SH / FH / SHFF / FHFF Frames": "40 / 56 / 28 / 39",
      "Fall Speed / Fast Fall Speed": "1.5 / 2.4",
      "Out of Shield, Up B": "3 frames",
      "Out of Shield, Neutral Air": "6 frames",
      "Out of Shield, Up Air": "7 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "marth": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "25",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 11.",
        "startup": "5",
        "basedamage": "3.0/5.0",
        "shieldlag": "6/10",
        "shieldstun": "4/6",
        "advantage": "-16/-14",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Jab 2",
        "totalframes": "28",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "4.0/6.0",
        "shieldlag": "7/11",
        "shieldstun": "5/6",
        "advantage": "-19/-18",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "9.0/12.0",
        "shieldlag": "7/11",
        "shieldstun": "9/11",
        "advantage": "-16/-14",
        "activeframes": "8\u201411"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "6.0/9.0",
        "shieldlag": "6/9",
        "shieldstun": "6/9",
        "advantage": "-21/-18",
        "activeframes": "6/7\u20148/9\u201412"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "23",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "7.0/10.0",
        "shieldlag": "7/10",
        "shieldstun": "7/10",
        "advantage": "-9/-6",
        "activeframes": "7\u20148"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "9.0/12.0",
        "shieldlag": "8/14",
        "shieldstun": "14/16",
        "advantage": "-22/-20",
        "activeframes": "13\u201416"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "Charge hold is frame 2.",
        "startup": "10",
        "basedamage": "13.0/18.0",
        "shieldlag": "9/15",
        "shieldstun": "9/12",
        "advantage": "-32/-29",
        "activeframes": "10\u201413"
      },
      {
        "movename": "Up Smash",
        "totalframes": "58",
        "landinglag": "--",
        "notes": "Launcher and sword hits generate on the same frame. Charge hold is frame 9",
        "startup": "13",
        "basedamage": "3.0/13.0/17.0",
        "shieldlag": "0/9/?",
        "shieldstun": "4/9/?",
        "advantage": "-41/-36",
        "activeframes": "13\u201414/13\u201417"
      },
      {
        "movename": "Down Smash",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "Charge hold is frame 3.",
        "startup": "6/21",
        "basedamage": "8.0/12.0/12.0/17.0",
        "shieldlag": "7/13/9/15",
        "shieldstun": "6/8/8/11",
        "advantage": "-43/-41/-26/-23",
        "activeframes": "6\u20147/21\u201423"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "49",
        "landinglag": "7",
        "notes": "Autocancels on frame 47 onward",
        "startup": "6/15",
        "basedamage": "3.5/5.0/7.0/9.5",
        "shieldlag": "5/7/7/10",
        "shieldstun": "2/3/3/4",
        "advantage": "-5/-4/-4/-3",
        "activeframes": "6\u20147/15\u201421"
      },
      {
        "movename": "Forward Air",
        "totalframes": "37",
        "landinglag": "10",
        "notes": "Autocancels on frame 36 onward",
        "startup": "6",
        "basedamage": "8.0/11.5",
        "shieldlag": "7/11",
        "shieldstun": "4/5",
        "advantage": "-6/-5",
        "activeframes": "6\u20148"
      },
      {
        "movename": "Back Air",
        "totalframes": "39",
        "landinglag": "10",
        "notes": "Autocancels on frame 1-2 and 32 onward",
        "startup": "7",
        "basedamage": "9.0/12.5",
        "shieldlag": "7/11",
        "shieldstun": "4/5",
        "advantage": "-6/-5",
        "activeframes": "7\u201411"
      },
      {
        "movename": "Up Air",
        "totalframes": "45",
        "landinglag": "8",
        "notes": "Autocancels on frame 1-2 and 38 onward",
        "startup": "5",
        "basedamage": "9.5/13.0",
        "shieldlag": "8/12",
        "shieldstun": "4/5",
        "advantage": "-4/-3",
        "activeframes": "5\u20149"
      },
      {
        "movename": "Down Air",
        "totalframes": "59",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-2 and 55 onward",
        "startup": "9",
        "basedamage": "12.0/15.0/14.0",
        "shieldlag": "9/13/12",
        "shieldstun": "5/5/5",
        "advantage": "-9/-9/-9",
        "activeframes": "11/12\u201413"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Shieldbreaker)",
        "totalframes": "50\u2014109",
        "landinglag": "--",
        "notes": "On release, startup is 8 and total frames is 39",
        "startup": "19\u201478",
        "basedamage": "8.0\u201424.0",
        "shieldlag": "10\u201418",
        "shieldstun": "8\u2014Shieldbreak",
        "advantage": "-23 to Shieldbreak",
        "activeframes": "19\u201420 (or frames 1-2 after release)"
      },
      {
        "movename": "Side B (Dancing Blade)",
        "totalframes": "39/29",
        "landinglag": "--",
        "notes": "Second total frames is the air version. Can transition to next slash on frame 12",
        "startup": "9",
        "basedamage": "2.5/3.0",
        "shieldlag": "5/5",
        "shieldstun": "4/4",
        "advantage": "-26/-16",
        "activeframes": "9\u201411"
      },
      {
        "movename": "Dancing Blade 2 Neutral",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "Can transition to next slash on frame 8",
        "startup": "5",
        "basedamage": "2.5/3.0",
        "shieldlag": "5/5",
        "shieldstun": "4/4",
        "advantage": "-29/-29",
        "activeframes": "5\u20147"
      },
      {
        "movename": "Dancing Blade 3 Neutral",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "Can transition to next slash on frame 7",
        "startup": "4",
        "basedamage": "3.0/4.0",
        "shieldlag": "5/5",
        "shieldstun": "4/5",
        "advantage": "-35/-34",
        "activeframes": "4\u20146"
      },
      {
        "movename": "Dancing Blade 4 Neutral",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "4.0/6.0",
        "shieldlag": "5/9",
        "shieldstun": "5/6",
        "advantage": "-43/-42",
        "activeframes": "7\u20149"
      },
      {
        "movename": "Dancing Blade 2 Up",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "Can transition to next slash on frame 8",
        "startup": "4",
        "basedamage": "2.5/3.0",
        "shieldlag": "5/5",
        "shieldstun": "4/4",
        "advantage": "-30/-30",
        "activeframes": "5\u20147"
      },
      {
        "movename": "Dancing Blade 3 Up",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "Can transition to next slash on frame 8",
        "startup": "5",
        "basedamage": "3.0/4.0",
        "shieldlag": "5/5",
        "shieldstun": "4/5",
        "advantage": "-34/-33",
        "activeframes": "5\u20147"
      },
      {
        "movename": "Dancing Blade 4 Up",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "5.0/7.0",
        "shieldlag": "6/7",
        "shieldstun": "6/7",
        "advantage": "-32/-31",
        "activeframes": "6\u201410"
      },
      {
        "movename": "Dancing Blade 3 Down",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "Can transition to next slash on frame 8",
        "startup": "5",
        "basedamage": "3.0/4.0",
        "shieldlag": "5/",
        "shieldstun": "4/5",
        "advantage": "-34/-32",
        "activeframes": "5\u20147"
      },
      {
        "movename": "Dancing Blade 4 Down",
        "totalframes": "74",
        "landinglag": "--",
        "notes": "--",
        "startup": "7/10/13/16/19",
        "basedamage": "2.0/4.0/5.0",
        "shieldlag": "4/5/6",
        "shieldstun": "-/5/6",
        "advantage": "-50/-49",
        "activeframes": "7/10/13/16/19\u201421"
      },
      {
        "movename": "Up B (Dolphin Slash)",
        "totalframes": "--",
        "landinglag": "24",
        "notes": "Invulnerable on frame 4-5. 1-5 in the air.",
        "startup": "5",
        "basedamage": "11.0/7.0",
        "shieldlag": "8/7",
        "shieldstun": "10/7",
        "advantage": "--",
        "activeframes": "5\u20146/7\u201411"
      },
      {
        "movename": "Down B (Counter)",
        "totalframes": "64",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5. Counter window 6-27.",
        "startup": "6 (Start of Counter)",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Counter, Attack",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "Invulnerable on frame 1-7 in addition to counter freeze frames.",
        "startup": "4",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "4\u20146"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "4.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "19",
        "basedamage": "4.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "5.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "16",
        "basedamage": "4.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "52",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-29"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "69",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "79",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "85",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "99",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "116",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "90",
      "Gravity": "0.075",
      "Walk Speed": "1.575",
      "Run Speed": "1.964",
      "Initial Dash": "2.255",
      "Air Speed": "1.071",
      "Total Air Acceleration": "0.08",
      "SH / FH / SHFF / FHFF Frames": "41 / 55 / 28 / 38",
      "Fall Speed / Fast Fall Speed": "1.58 / 2.528",
      "Out of Shield, Up B": "5 frames",
      "Out of Shield, Up Air": "8 frames",
      "Out of Shield, Neutral Air or Forward Air": "9 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "mega_man": {
    "ground_attacks": [
      {
        "movename": "Buster",
        "totalframes": "35/47/59",
        "landinglag": "--",
        "notes": "Cannon and projectile hits generate on same frame. In the air, total frames are reduced by 2.",
        "startup": "7/19/31",
        "basedamage": "3.0/4.0/2.0",
        "shieldlag": "4/4/4",
        "shieldstun": "3/2/2",
        "advantage": "-25/-23/-20",
        "activeframes": "7\u201410(11\u201414/15\u201430) / 19\u201422(23\u201426/27\u201442) / 31\u201434(35\u201438/39\u201454)"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "70/52/54",
        "landinglag": "--",
        "notes": "Total frames refer to use on level ground/over an edge/under a platform. Invulnerable on frame 5-7",
        "startup": "6",
        "basedamage": "17.0/12.0/8.0",
        "shieldlag": "15/9/7",
        "shieldstun": "15/11/8",
        "advantage": "-49/-31/-33",
        "activeframes": "6(7\u20149/10\u201416)"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "46",
        "landinglag": "--",
        "notes": "Leg intangibility on frame 3-12",
        "startup": "5",
        "basedamage": "8.0/5.0",
        "shieldlag": "7/6",
        "shieldstun": "8/6",
        "advantage": "-33",
        "activeframes": "5\u20148(9\u201421)"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "60",
        "landinglag": "--",
        "notes": "--",
        "startup": "8/11/14/17/20/23/26/36",
        "basedamage": "1.2/4.0",
        "shieldlag": "4/5",
        "shieldstun": "2/8",
        "advantage": "-16",
        "activeframes": "8/11/14/17/20/23/26/36"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "54",
        "landinglag": "--",
        "notes": "Charge hold is frame 9",
        "startup": "19",
        "basedamage": "11.5",
        "shieldlag": "13",
        "shieldstun": "4",
        "advantage": "-18",
        "activeframes": "19\u201442(79\u2014108/199\u2014222)"
      },
      {
        "movename": "Up Smash",
        "totalframes": "68",
        "landinglag": "--",
        "notes": "Charge hold is frame 4",
        "startup": "8/11/15/19/23/27/31",
        "basedamage": "2.0/1.5/6.0",
        "shieldlag": "-/3/9",
        "shieldstun": "-/0/5",
        "advantage": "-32",
        "activeframes": "8/11\u201412/15\u201416/19\u201420/23\u201424/27\u201428/31"
      },
      {
        "movename": "Down Smash",
        "totalframes": "78",
        "landinglag": "--",
        "notes": "Charge hold is frame 4",
        "startup": "17",
        "basedamage": "17.0",
        "shieldlag": "11",
        "shieldstun": "11",
        "advantage": "-50",
        "activeframes": "17(18\u201419/20\u201433)"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Forward Air",
        "totalframes": "40",
        "landinglag": "11",
        "notes": "Autocancels on frame 1-2 and 39 onward",
        "startup": "9",
        "basedamage": "8.5/8.0/5.0",
        "shieldlag": "7/7/6",
        "shieldstun": "4/4/3",
        "advantage": "-7/-7/-8",
        "activeframes": "9\u201411(12\u201417)"
      },
      {
        "movename": "Back Air",
        "totalframes": "44",
        "landinglag": "20",
        "notes": "Autocancels on frame 1-3 and 40 onward",
        "startup": "4/7/10",
        "basedamage": "3.0/4.0/5.0",
        "shieldlag": "5/5/6",
        "shieldstun": "2/3/3",
        "advantage": "-18/-17/-17",
        "activeframes": "4\u20145/7\u20148/10\u201411"
      },
      {
        "movename": "Up Air",
        "totalframes": "53",
        "landinglag": "20",
        "notes": "Autocancels on frame 51 onward",
        "startup": "11/14/17/20/23...",
        "basedamage": "3.0/1.0/2.0",
        "shieldlag": "-/4/4",
        "shieldstun": "-/2/2",
        "advantage": "--",
        "activeframes": "11/14/17/20/23/..."
      },
      {
        "movename": "Down Air",
        "totalframes": "64",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-4 and 55 onward",
        "startup": "23",
        "basedamage": "14.0/12.0",
        "shieldlag": "10/9",
        "shieldstun": "5/5",
        "advantage": "+1/+0",
        "activeframes": "23\u201425(26\u201435)"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Metal Blade)",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "Projectile hits every 6 frames. Add 2 to startup and total frames when throwing backward",
        "startup": "16",
        "basedamage": "5.0",
        "shieldlag": "6",
        "shieldstun": "3",
        "advantage": "-17",
        "activeframes": "**"
      },
      {
        "movename": "Side B (Crash Bomber)",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "Does not attach to shields. Explosion occurs about 2.5 seconds later and hits on frame 1/6/11/16/21",
        "startup": "19",
        "basedamage": "1.0/4.0",
        "shieldlag": "4/5",
        "shieldstun": "-/2",
        "advantage": "**",
        "activeframes": "19\u201469"
      },
      {
        "movename": "Up B (Rush Coil)",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "Invulnerable on frame 7-10. Rush dissapears at Frame ~130",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "--"
      },
      {
        "movename": "Down B (Leaf Shield)",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "Hits every 11 frames. Leaves do not disappear after hitting something. Hold the button to move with the shield. Can delay 40 frames before an automatic throw.",
        "startup": "9\u2014**",
        "basedamage": "1.5",
        "shieldlag": "4",
        "shieldstun": "3",
        "advantage": "**",
        "activeframes": "9\u2014**"
      },
      {
        "movename": "Leaf Shield, Throw",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "Hits every 11 frames.",
        "startup": "--",
        "basedamage": "3.8",
        "shieldlag": "5",
        "shieldstun": "2",
        "advantage": "**",
        "activeframes": "**"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "8.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "--",
        "startup": "18",
        "basedamage": "11.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "7.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "17",
        "basedamage": "4.5"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "45",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-30"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "63",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "70",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "76",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "84",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "98",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "102",
      "Gravity": "0.107",
      "Walk Speed": "1.132",
      "Run Speed": "1.602",
      "Initial Dash": "1.958",
      "Air Speed": "1.155",
      "Total Air Acceleration": "0.11",
      "SH / FH / SHFF / FHFF Frames": "29 / 47 / 19 / 33",
      "Fall Speed / Fast Fall Speed": "1.8 / 2.88",
      "Out of Shield, Back Air": "7 frames",
      "Out of Shield, Up Smash": "8 frames",
      "Out of Shield, Neutral Air": "10 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "meta_knight": {
    "ground_attacks": [
      {
        "movename": "Rapid Jab",
        "totalframes": "15",
        "landinglag": "--",
        "notes": "--",
        "startup": "4/7/10...",
        "basedamage": "1.0",
        "shieldlag": "4",
        "shieldstun": "-",
        "advantage": "--",
        "activeframes": "4/7/10..."
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "--",
        "startup": "3",
        "basedamage": "2.0",
        "shieldlag": "12",
        "shieldstun": "3",
        "advantage": "-24",
        "activeframes": "3"
      },
      {
        "movename": "Forward Tilt 1",
        "totalframes": "25",
        "landinglag": "--",
        "notes": "Transitions to next hit as early as frame 10.",
        "startup": "6",
        "basedamage": "2.0",
        "shieldlag": "4",
        "shieldstun": "3",
        "advantage": "-16",
        "activeframes": "6"
      },
      {
        "movename": "Forward Tilt 2",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "Transitions to next hit as early as frame 7",
        "startup": "2",
        "basedamage": "2.0",
        "shieldlag": "4",
        "shieldstun": "3",
        "advantage": "-22",
        "activeframes": "2"
      },
      {
        "movename": "Forward Tilt 3",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "--",
        "startup": "2",
        "basedamage": "4.0",
        "shieldlag": "11",
        "shieldstun": "5",
        "advantage": "-23",
        "activeframes": "2"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "6.0/7.0",
        "shieldlag": "7/8",
        "shieldstun": "6/7",
        "advantage": "-20/-19",
        "activeframes": "8\u201410/11\u201414"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "18",
        "landinglag": "--",
        "notes": "--",
        "startup": "3",
        "basedamage": "5.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-9",
        "activeframes": "3"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "7.0/6.0",
        "shieldlag": "7/7",
        "shieldstun": "7/7",
        "advantage": "-18",
        "activeframes": "7\u201411"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "Charge hold is frame 20",
        "startup": "24",
        "basedamage": "16.0",
        "shieldlag": "15",
        "shieldstun": "11",
        "advantage": "-6",
        "activeframes": "24"
      },
      {
        "movename": "Up Smash",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Charge hold is frame 3",
        "startup": "8/12/17",
        "basedamage": "4.0/3.0/5.0",
        "shieldlag": "5/5/12",
        "shieldstun": "3/3/4",
        "advantage": "-28",
        "activeframes": "8/12/17"
      },
      {
        "movename": "Down Smash",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "Charge hold is frame 1",
        "startup": "4/9",
        "basedamage": "10.0/13.0",
        "shieldlag": "8/9",
        "shieldstun": "7/9",
        "advantage": "-26/-19",
        "activeframes": "4/9"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "43",
        "landinglag": "7",
        "notes": "Autocancels on frame 1-5 and 40 onward",
        "startup": "6",
        "basedamage": "10.0/7.5",
        "shieldlag": "8/7",
        "shieldstun": "4/3",
        "advantage": "-3/-4",
        "activeframes": "6\u20147/8\u201420"
      },
      {
        "movename": "Forward Air",
        "totalframes": "45",
        "landinglag": "10",
        "notes": "Autocancels on frame 44 onward",
        "startup": "9/12/15",
        "basedamage": "1.5/3.0",
        "shieldlag": "4/10",
        "shieldstun": "2/2",
        "advantage": "-8/-8",
        "activeframes": "9/12/15"
      },
      {
        "movename": "Back Air",
        "totalframes": "51",
        "landinglag": "11",
        "notes": "Autocancels on frame 1-6 and 40 onward",
        "startup": "7/13/20",
        "basedamage": "1.5/4.0",
        "shieldlag": "4/11",
        "shieldstun": "2/3",
        "advantage": "-9/-8",
        "activeframes": "7\u20148/13\u201414/20\u201421"
      },
      {
        "movename": "Up Air",
        "totalframes": "26",
        "landinglag": "9",
        "notes": "Autocancels on frame 1-5 and 24 onward",
        "startup": "6",
        "basedamage": "4.0",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-6",
        "activeframes": "6"
      },
      {
        "movename": "Down Air",
        "totalframes": "27",
        "landinglag": "9",
        "notes": "Autocancels on frame 1-3 and 26 onward",
        "startup": "4",
        "basedamage": "6.0",
        "shieldlag": "6",
        "shieldstun": "3",
        "advantage": "-6",
        "activeframes": "4"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Mach Tornado)",
        "totalframes": "104",
        "landinglag": "29",
        "notes": "Landing lag only occurs after entering special fall.",
        "startup": "12",
        "basedamage": "12.0/8.0",
        "shieldlag": "11/9",
        "shieldstun": "11/8",
        "advantage": "-81",
        "activeframes": "12\u201421/22\u201446"
      },
      {
        "movename": "Side B (Drill Rush)",
        "totalframes": "98",
        "landinglag": "26",
        "notes": "Total frames is assuming you travel along the ground.",
        "startup": "26/30/34/38/42/46/ 50/54/58/62/66/70",
        "basedamage": "1.1/3.0",
        "shieldlag": "4/15",
        "shieldstun": "2/4",
        "advantage": "-24",
        "activeframes": "26\u201469/70"
      },
      {
        "movename": "Up B (Shuttle Loop)",
        "totalframes": "--",
        "landinglag": "30",
        "notes": "--",
        "startup": "8/22",
        "basedamage": "9.0/6.0/6.0",
        "shieldlag": "11/6/9",
        "shieldstun": "9/6/6",
        "advantage": "**",
        "activeframes": "(8/9\u201410/11\u201412)22\u201427"
      },
      {
        "movename": "Up B, Air (Shuttle Loop, Air)",
        "totalframes": "--",
        "landinglag": "30",
        "notes": "--",
        "startup": "7/20",
        "basedamage": "6.0/6.0",
        "shieldlag": "6/9",
        "shieldstun": "6/6",
        "advantage": "**",
        "activeframes": "(7/8\u201410)20\u201426"
      },
      {
        "movename": "Down B (Dimensional Cape)",
        "totalframes": "57",
        "landinglag": "30",
        "notes": "Invulnerable on frame 12-39. Landing lag only occurs if you enter special fall.",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Dimensional Cape, Attack",
        "totalframes": "92",
        "landinglag": "30",
        "notes": "Invulnerable on frame 12-32. Landing lag only occurs if you enter special fall.",
        "startup": "34",
        "basedamage": "16.0",
        "shieldlag": "15",
        "shieldstun": "14",
        "advantage": "-44",
        "activeframes": "34"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "15",
        "landinglag": "--",
        "notes": "Total frames includes 11 frames of hitlag",
        "startup": "1",
        "basedamage": "1.0"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "--",
        "startup": "8/10",
        "basedamage": "6.0/3.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "16/18",
        "basedamage": "7.0/3.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "77",
        "landinglag": "--",
        "notes": "Meta Knight is airborne when he can act. Startup assumes level ground",
        "startup": "46",
        "basedamage": "10.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "86",
        "landinglag": "--",
        "notes": "--",
        "startup": "11\u201413/17\u201419/23\u201425/29\u201431/35\u201437/41\u201443/47\u201449/53\u201455/59\u201461/73\u201474",
        "basedamage": "0.5/1.0/2.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "19/24",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-16"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "28",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-14"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "47",
        "landinglag": "10",
        "notes": "Invulnerable on frame 2-26"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "66",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "74",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "80",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "94",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "101",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      }
    ],
    "stats": {
      "Weight": "80",
      "Gravity": "0.110",
      "Walk Speed": "1.239",
      "Run Speed": "2.09",
      "Initial Dash": "2.211",
      "Air Speed": "1.04",
      "Total Air Acceleration": "0.075",
      "SH / FH / SHFF / FHFF Frames": "31 / 47 / 22 / 33",
      "Fall Speed / Fast Fall Speed": "1.66 / 2.656",
      "Out of Shield, Down Air": "7 frames",
      "Out of Shield, Up Smash or Up B": "9 frames",
      "Out of Shield, Neutral Air or Up Air": "10 frames",
      "Shield Grab (Grab, post-Shieldstun)": "11 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "mewtwo": {
    "ground_attacks": [
      {
        "movename": "Jab",
        "totalframes": "21",
        "landinglag": "--",
        "notes": "Transitions to Rapid Jab as early as frame 12.",
        "startup": "5",
        "basedamage": "3.0",
        "shieldlag": "9",
        "shieldstun": "4",
        "advantage": "-12",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "5/8/11...",
        "basedamage": "0.8",
        "shieldlag": "4",
        "shieldstun": "4",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "2.5",
        "shieldlag": "10",
        "shieldstun": "4",
        "advantage": "-30",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "11.0/10.0/9.0",
        "shieldlag": "10/8/7",
        "shieldstun": "10/10/9",
        "advantage": "-15/-15/-16",
        "activeframes": "10\u201411"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "7.0/6.0/5.5, 5.0/4.0",
        "shieldlag": "7/6/6, 6/5",
        "shieldstun": "7/6/6, 6/5",
        "advantage": "-14/-15/-15",
        "activeframes": "8(9\u201413)"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "23",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "5.0/4.5/4.0",
        "shieldlag": "6/5/5",
        "shieldstun": "6/5/5",
        "advantage": "-11/-12/-12",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "12.0/6.0",
        "shieldlag": "11/8",
        "shieldstun": "14/8",
        "advantage": "-14",
        "activeframes": "10\u201411(12\u201420)"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "52",
        "landinglag": "--",
        "notes": "Charge hold is frame 12",
        "startup": "19",
        "basedamage": "16.0/20.0",
        "shieldlag": "10/15",
        "shieldstun": "11/13",
        "advantage": "-20/-18",
        "activeframes": "19\u201422"
      },
      {
        "movename": "Up Smash",
        "totalframes": "68",
        "landinglag": "--",
        "notes": "Charge hold is frame 2",
        "startup": "9/14/18/22",
        "basedamage": "2.0/10.0",
        "shieldlag": "4/8",
        "shieldstun": "3/7",
        "advantage": "-39",
        "activeframes": "9(10\u201411)/14\u201415/18\u201419/22\u201425"
      },
      {
        "movename": "Down Smash",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "Charge hold is frame 15",
        "startup": "21",
        "basedamage": "16.0",
        "shieldlag": "14",
        "shieldstun": "11",
        "advantage": "-11",
        "activeframes": "21\u201423"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "49",
        "landinglag": "10",
        "notes": "Autocancels on frame 46 onward",
        "startup": "7/11/15/19/23/27",
        "basedamage": "1.6/4.0",
        "shieldlag": "7/10",
        "shieldstun": "2/3",
        "advantage": "-8/-7",
        "activeframes": "7\u20148/11\u201412/15\u201416/19\u201420/23\u201424/27\u201428"
      },
      {
        "movename": "Forward Air",
        "totalframes": "39",
        "landinglag": "8",
        "notes": "Autocancels on frame 37 onward",
        "startup": "7",
        "basedamage": "13.0",
        "shieldlag": "9",
        "shieldstun": "5",
        "advantage": "-3",
        "activeframes": "7\u20149"
      },
      {
        "movename": "Back Air",
        "totalframes": "39",
        "landinglag": "10",
        "notes": "Autocancels on frame 1-2 and 38 onward",
        "startup": "13",
        "basedamage": "13.0/11.0/9.0",
        "shieldlag": "9/8/7",
        "shieldstun": "5/4/4",
        "advantage": "-5/-4/-4",
        "activeframes": "13\u201417"
      },
      {
        "movename": "Up Air",
        "totalframes": "39",
        "landinglag": "8",
        "notes": "Autocancels on frame 1-2 and 36 onward",
        "startup": "10",
        "basedamage": "12.0/11.0/10.0",
        "shieldlag": "9/8/8",
        "shieldstun": "5/4/4",
        "advantage": "-3/-4/-4",
        "activeframes": "10\u201414"
      },
      {
        "movename": "Down Air",
        "totalframes": "47",
        "landinglag": "11",
        "notes": "Autocancels on frame 1-3 and frame 42 onward",
        "startup": "15",
        "basedamage": "14.0",
        "shieldlag": "12",
        "shieldstun": "5",
        "advantage": "-6",
        "activeframes": "15\u201418"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Shadow Ball)",
        "totalframes": "31",
        "landinglag": "29",
        "notes": "9 startup from charge state. 12 to enter charge state. Takes 4 frames to cancel charge with shield.",
        "startup": "9(+12)",
        "basedamage": "2.5\u201424.9",
        "shieldlag": "5\u201414",
        "shieldstun": "2\u20147",
        "advantage": "-15 to -1",
        "activeframes": "**"
      },
      {
        "movename": "Shadow Ball, Fully Charged",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "133 frames to reach full charge.",
        "startup": "18",
        "basedamage": "25.0",
        "shieldlag": "14",
        "shieldstun": "7",
        "advantage": "-4",
        "activeframes": "18\u201498"
      },
      {
        "movename": "Side B (Confusion)",
        "totalframes": "39/44",
        "landinglag": "--",
        "notes": "Grab is on frame 10, the following hits are when successful. 44 total frames when you miss.",
        "startup": "10 (21/23/25/27/29/31/33/39)",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "10\u201413"
      },
      {
        "movename": "Up B (Teleport)",
        "totalframes": "44",
        "landinglag": "30",
        "notes": "Total frames is if you end on the ground. Intangible from 9-19.",
        "startup": "**",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "--"
      },
      {
        "movename": "Down B (Disable)",
        "totalframes": "52",
        "landinglag": "--",
        "notes": "Intangible on frames 10-16",
        "startup": "16",
        "basedamage": "1.0",
        "shieldlag": "4",
        "shieldstun": "2",
        "advantage": "-30",
        "activeframes": "16\u201423"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "81",
        "landinglag": "--",
        "notes": "Fires shadow balls on 33,40,47,54, and 61.",
        "startup": "19/33/40/47/54/61",
        "basedamage": "3.0/2.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "54",
        "landinglag": "--",
        "notes": "--",
        "startup": "30",
        "basedamage": "10.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "79",
        "landinglag": "--",
        "notes": "--",
        "startup": "43",
        "basedamage": "12.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "16/18",
        "basedamage": "4.0/5.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "51",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-26"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "70",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "79",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "85",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "101",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "114",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "79",
      "Gravity": "0.082",
      "Walk Speed": "1.26",
      "Run Speed": "2.255",
      "Initial Dash": "2.255",
      "Air Speed": "1.313",
      "Total Air Acceleration": "0.07",
      "SH / FH / SHFF / FHFF Frames": "41 / 52 / 29 / 35",
      "Fall Speed / Fast Fall Speed": "1.55 / 2.48",
      "Out of Shield, Up Smash": "9 frames",
      "Out of Shield, Neutral Air or Forward Air": "10 frames",
      "Out of Shield, Up Air": "13 frames",
      "Shield Grab (Grab, post-Shieldstun)": "11 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "mii_brawler": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "15",
        "landinglag": "--",
        "notes": "Transitions to jab 2 as early as frame 5",
        "startup": "2",
        "basedamage": "1.8",
        "shieldlag": "8",
        "shieldstun": "3",
        "advantage": "-10",
        "activeframes": "2\u20143"
      },
      {
        "movename": "Jab 2",
        "totalframes": "18",
        "landinglag": "--",
        "notes": "Transitions to rapid jab as early as frame 7",
        "startup": "2",
        "basedamage": "1.0",
        "shieldlag": "5",
        "shieldstun": "2",
        "advantage": "-14",
        "activeframes": "2\u20143"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "5/7/9...",
        "basedamage": "0.5",
        "shieldlag": "4",
        "shieldstun": "2",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "2.0",
        "shieldlag": "14",
        "shieldstun": "3",
        "advantage": "-33",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "8.0/8.3/8.5",
        "shieldlag": "7/7/7",
        "shieldstun": "8/8/8",
        "advantage": "-13/-13/-13",
        "activeframes": "6\u20148"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "6.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-18",
        "activeframes": "5\u201412"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "8.0",
        "shieldlag": "7",
        "shieldstun": "8",
        "advantage": "-12",
        "activeframes": "7\u20148"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "11.0/6.0",
        "shieldlag": "8/6",
        "shieldstun": "10/6",
        "advantage": "-19",
        "activeframes": "6\u20149(10\u201417)"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "67",
        "landinglag": "--",
        "notes": "Charge hold is frame 5",
        "startup": "17",
        "basedamage": "18.0",
        "shieldlag": "15",
        "shieldstun": "12",
        "advantage": "-38",
        "activeframes": "17\u201418"
      },
      {
        "movename": "Up Smash",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "Legs intangibile on frame 8-11. Charge hold is frame 3",
        "startup": "8",
        "basedamage": "14.0/10.0",
        "shieldlag": "11/9",
        "shieldstun": "10/7",
        "advantage": "-29",
        "activeframes": "8\u201412(13\u201414)"
      },
      {
        "movename": "Down Smash",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "Charge hold is frame 2",
        "startup": "9",
        "basedamage": "13.0",
        "shieldlag": "11",
        "shieldstun": "9",
        "advantage": "-25",
        "activeframes": "9\u201410"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "45",
        "landinglag": "6",
        "notes": "Autocancels on frame 1-2 and 37 onward",
        "startup": "3",
        "basedamage": "10.0/5.0",
        "shieldlag": "8/6",
        "shieldstun": "4/3",
        "advantage": "-2/-3",
        "activeframes": "3\u20145(6\u201429)"
      },
      {
        "movename": "Forward Air",
        "totalframes": "44",
        "landinglag": "11",
        "notes": "Autocancels on frame 1-2 and 30 onward",
        "startup": "8/15",
        "basedamage": "5.0/6.0",
        "shieldlag": "6/9",
        "shieldstun": "3/3",
        "advantage": "-8/-8",
        "activeframes": "8\u20149/15\u201417"
      },
      {
        "movename": "Back Air",
        "totalframes": "39",
        "landinglag": "11",
        "notes": "Autocancels on frame 28 onward",
        "startup": "7",
        "basedamage": "12.0",
        "shieldlag": "9",
        "shieldstun": "5",
        "advantage": "-6",
        "activeframes": "7\u20149"
      },
      {
        "movename": "Up Air",
        "totalframes": "35",
        "landinglag": "10",
        "notes": "Autocancels on frame 23 onward",
        "startup": "6",
        "basedamage": "9.0",
        "shieldlag": "7",
        "shieldstun": "4",
        "advantage": "-6",
        "activeframes": "6\u201410"
      },
      {
        "movename": "Down Air",
        "totalframes": "49",
        "landinglag": "18",
        "notes": "Autocancels on frame 1-4 and 37 onward",
        "startup": "16",
        "basedamage": "13.0",
        "shieldlag": "12",
        "shieldstun": "5",
        "advantage": "-13",
        "activeframes": "16\u201417(18)"
      }
    ],
    "special_attacks": [
      {
        "movename": "Shot Put",
        "totalframes": "67",
        "landinglag": "--",
        "notes": "--",
        "startup": "28",
        "basedamage": "15.0/11.2",
        "shieldlag": "15/13",
        "shieldstun": "5/4",
        "advantage": "-19",
        "activeframes": "28\u2014**/59"
      },
      {
        "movename": "Flashing Mach Punch",
        "totalframes": "107/59",
        "landinglag": "--",
        "notes": "First total frames is when successful. Second is when you miss. When successful, invincible on frame 15-37 and 60-73. Landing any of the first five hits will activate the full version, but not on shields",
        "startup": "15/18/21/24/27 (29/31/33/35/37/39/41/43/45/47/49/51/53/55/57/59/69)",
        "basedamage": "0.4/9.5",
        "shieldlag": "4",
        "shieldstun": "2",
        "advantage": "-30",
        "activeframes": "**"
      },
      {
        "movename": "Exploding Side Kick",
        "totalframes": "79/81",
        "landinglag": "--",
        "notes": "Second number is for reversed version",
        "startup": "50/52",
        "basedamage": "25.0/28.0",
        "shieldlag": "17/17",
        "shieldstun": "22/24",
        "advantage": "-7/-5",
        "activeframes": "50\u201452(52\u201454)"
      },
      {
        "movename": "Onslaught",
        "totalframes": "70/73",
        "landinglag": "--",
        "notes": "Begins on frame 1 of reaching a target. Second total frames is if you don't hit. Stops on shields. When blocked, endlag equates to remaining total frames",
        "startup": "15 (1/4/8/10/13/15/18/28)",
        "basedamage": "2.0/1.5/5.0",
        "shieldlag": "4",
        "shieldstun": "3",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Onslaught, Air",
        "totalframes": "--",
        "landinglag": "30/40",
        "notes": "Begins on frame 1 of reaching a target. Second landing lag is if you don't hit. Stops on shields",
        "startup": "15 (1/4/8/10/13/15/18/28)",
        "basedamage": "2.0/1.5/5.0",
        "shieldlag": "4",
        "shieldstun": "3",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Burning Dropkick",
        "totalframes": "68/60",
        "landinglag": "--",
        "notes": "First total frames is in the air, second is on level ground. 34 endlag on hit",
        "startup": "18",
        "basedamage": "13.0",
        "shieldlag": "11",
        "shieldstun": "12",
        "advantage": "-22",
        "activeframes": "18\u201429"
      },
      {
        "movename": "Suplex, Grab",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "13\u201421"
      },
      {
        "movename": "Suplex, Success",
        "totalframes": "79",
        "landinglag": "--",
        "notes": "--",
        "startup": "52",
        "basedamage": "3.0/15.0",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Soaring Axe Kick",
        "totalframes": "--",
        "landinglag": "22/29",
        "notes": "Second kick is voluntary, second landing lag pertains to that.",
        "startup": "10/30",
        "basedamage": "4.0/3.0/4.0",
        "shieldlag": "5/11/8",
        "shieldstun": "5/4/5",
        "advantage": "-23",
        "activeframes": "10\u201415/3\u2014**/1\u20142"
      },
      {
        "movename": "Helicopter Kick",
        "totalframes": "--",
        "landinglag": "26",
        "notes": "Leg intangibility on frame 8-37",
        "startup": "8/15/20/26/31/36",
        "basedamage": "3.0/1.5/6.0",
        "shieldlag": "5/4/14",
        "shieldstun": "4/3/6",
        "advantage": "--",
        "activeframes": "8/15/20/26/31/36"
      },
      {
        "movename": "Thrust Uppercut",
        "totalframes": "--",
        "landinglag": "30",
        "notes": "--",
        "startup": "3/6/9/12/15/20",
        "basedamage": "0.8/9.0",
        "shieldlag": "4/13",
        "shieldstun": "2/9",
        "advantage": "--",
        "activeframes": "3\u20144/6\u20147/9\u201410/12\u201413/15/20\u201421"
      },
      {
        "movename": "Head-On Assault",
        "totalframes": "--",
        "landinglag": "58",
        "notes": "Landing hit on frame 1",
        "startup": "8/31 (34/37/40...)",
        "basedamage": "6.0/16.0/14.0",
        "shieldlag": "6/10/11",
        "shieldstun": "6/14/13",
        "advantage": "-44",
        "activeframes": "**"
      },
      {
        "movename": "Head-On Assault, Air",
        "totalframes": "--",
        "landinglag": "58",
        "notes": "Landing hit on frame 1. Body hitbox hits every three frames.",
        "startup": "23(26/29/32...)",
        "basedamage": "16.0(1.0)/14.0",
        "shieldlag": "10(4)/11",
        "shieldstun": "14(2)/13",
        "advantage": "-44",
        "activeframes": "**"
      },
      {
        "movename": "Feint Jump",
        "totalframes": "56",
        "landinglag": "29",
        "notes": "Total frames is if you don't land during the animation",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Feint Jump, Kick",
        "totalframes": "52",
        "landinglag": "37",
        "notes": "Earliest you can begin kick is frame 17 of jump",
        "startup": "8",
        "basedamage": "10.0",
        "shieldlag": "8",
        "shieldstun": "10",
        "advantage": "-27",
        "activeframes": "8\u201421(1\u20142)"
      },
      {
        "movename": "Counter Throw",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5. Counters frame 6-23",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "6\u201423 (counter)"
      },
      {
        "movename": "Counter Throw, Activated",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "Invulnerable on frame 1-2. Throw invincibility on frame 3-15",
        "startup": "3/16",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "14",
        "basedamage": "9.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "9/11",
        "basedamage": "4.0/5.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "16",
        "basedamage": "11.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "18/20",
        "basedamage": "2.0/4.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "40",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-29"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "58",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "65",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "70",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "80",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "86",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "94",
      "Gravity": "0.192",
      "Walk Speed": "1.26",
      "Run Speed": "1.92",
      "Initial Dash": "1.87",
      "Air Speed": "1.15",
      "Total Air Acceleration": "0.068",
      "SH / FH / SHFF / FHFF Frames": "28 / 41 / 20 / 30",
      "Fall Speed / Fast Fall Speed": "1.7 / 2.72",
      "Out of Shield, Up B(#3)": "3 frames",
      "Out of Shield, Neutral Air": "6 frames",
      "Out of Shield, Up Smash or Up B(#2)": "8 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "mii_gunner": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "25",
        "landinglag": "--",
        "notes": "Transitions to jab 2 as early as frame 8",
        "startup": "5",
        "basedamage": "1.7",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-17",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Jab 2",
        "totalframes": "25",
        "landinglag": "--",
        "notes": "Transitions to jab 3 as early as frame 11",
        "startup": "4",
        "basedamage": "1.8",
        "shieldlag": "4",
        "shieldstun": "3",
        "advantage": "-18",
        "activeframes": "4\u20146"
      },
      {
        "movename": "Jab 3",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "6/12",
        "basedamage": "1.0/4.5",
        "shieldlag": "3/6",
        "shieldstun": "0/5",
        "advantage": "-19",
        "activeframes": "6\u20148, 12\u201413"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "13.0/10.5/8.0",
        "shieldlag": "9/8/7",
        "shieldstun": "12/10/8",
        "advantage": "-14",
        "activeframes": "7\u20148/9\u201410/11\u201412)"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "10.0",
        "shieldlag": "8",
        "shieldstun": "10",
        "advantage": "-22",
        "activeframes": "5\u20147/8\u20149"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "14.0",
        "shieldlag": "10",
        "shieldstun": "13",
        "advantage": "-19",
        "activeframes": "8\u201410"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "11.0",
        "shieldlag": "8",
        "shieldstun": "15",
        "advantage": "-20",
        "activeframes": "10\u201414"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "77",
        "landinglag": "--",
        "notes": "Charge hold is frame 5",
        "startup": "17/21/25/29/33/37/40",
        "basedamage": "1.8/7.5",
        "shieldlag": "4/16",
        "shieldstun": "3/6",
        "advantage": "-31",
        "activeframes": "17/21/25/29/33/37/40"
      },
      {
        "movename": "Up Smash",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "Charge hold is frame 7",
        "startup": "11/15/19/23/27",
        "basedamage": "3.0/2.5/7.0",
        "shieldlag": "5/5/7",
        "shieldstun": "3/3/6",
        "advantage": "-22",
        "activeframes": "11\u201412/15\u201416/19\u201420/23\u201424/27\u201428"
      },
      {
        "movename": "Down Smash",
        "totalframes": "52",
        "landinglag": "--",
        "notes": "Charge hold is frame 5",
        "startup": "9/23",
        "basedamage": "11.5/14.0",
        "shieldlag": "9/10",
        "shieldstun": "8/10",
        "advantage": "-35/-19",
        "activeframes": "9/23\u201425"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "41",
        "landinglag": "11",
        "notes": "Autocancels on frame 1-3 and 35 onward",
        "startup": "8",
        "basedamage": "10.0",
        "shieldlag": "8",
        "shieldstun": "4",
        "advantage": "-7",
        "activeframes": "8\u201421"
      },
      {
        "movename": "Forward Air",
        "totalframes": "43",
        "landinglag": "12",
        "notes": "Autocancels on frame 44 onward",
        "startup": "12",
        "basedamage": "8.0/6.0",
        "shieldlag": "7/6",
        "shieldstun": "4/3",
        "advantage": "-1",
        "activeframes": "12\u201416"
      },
      {
        "movename": "Back Air",
        "totalframes": "47",
        "landinglag": "11",
        "notes": "Autocancels on frame 1-3 and 32 onward",
        "startup": "9",
        "basedamage": "13.0",
        "shieldlag": "9",
        "shieldstun": "5",
        "advantage": "-6",
        "activeframes": "9\u201410"
      },
      {
        "movename": "Up Air",
        "totalframes": "59",
        "landinglag": "13",
        "notes": "Autocancels on frame 1-10 and 58 onward",
        "startup": "17/18/21/24/27/30/34",
        "basedamage": "1.8/4.0",
        "shieldlag": "4/5",
        "shieldstun": "2/3",
        "advantage": "-11/-10",
        "activeframes": "17/18/21/24/27/30/34"
      },
      {
        "movename": "Down Air",
        "totalframes": "54",
        "landinglag": "17",
        "notes": "Autocancels on frame 1-3 and 54 onward",
        "startup": "20",
        "basedamage": "15.0/10.0/12.0",
        "shieldlag": "10/8/9",
        "shieldstun": "5/4/5",
        "advantage": "-12/-13/-12",
        "activeframes": "20\u201421/22\u201425"
      }
    ],
    "special_attacks": [
      {
        "movename": "Charge Blast",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "Startup is 3 from charge state. 12 frames to enter charge state. 4 to cancel charge with shield. Takes 132 frames to reach full charge",
        "startup": "3(+12)",
        "basedamage": "4.0\u201426.0",
        "shieldlag": "8\u201423",
        "shieldstun": "2\u20148",
        "advantage": "-26 to -5",
        "activeframes": "**"
      },
      {
        "movename": "Laser Blaze",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "Fire rate is one shot per 22 frames",
        "startup": "10",
        "basedamage": "5.0",
        "shieldlag": "6",
        "shieldstun": "3",
        "advantage": "-23",
        "activeframes": "10\u2014**"
      },
      {
        "movename": "Grenade Launch",
        "totalframes": "53",
        "landinglag": "--",
        "notes": "Explosion hits are: 1/6/11/16/18",
        "startup": "36",
        "basedamage": "1.3/6.5",
        "shieldlag": "4/6",
        "shieldstun": "-/3",
        "advantage": "+10",
        "activeframes": "**"
      },
      {
        "movename": "Flame Pillar",
        "totalframes": "63",
        "landinglag": "--",
        "notes": "Eruption hits: 1/9/17/25/33. Will not erupt on shields",
        "startup": "21",
        "basedamage": "2.2/2.7",
        "shieldlag": "4",
        "shieldstun": "2",
        "advantage": "-36",
        "activeframes": "**"
      },
      {
        "movename": "Stealth Burst",
        "totalframes": "70\u2014105",
        "landinglag": "--",
        "notes": "Startup is 5 from release.",
        "startup": "36\u201466",
        "basedamage": "12.1\u201418.0",
        "shieldlag": "9\u201411",
        "shieldstun": "4\u20146",
        "advantage": "-21 to -17",
        "activeframes": "**"
      },
      {
        "movename": "Gunner Missile (Homing)",
        "totalframes": "46",
        "landinglag": "--",
        "notes": "--",
        "startup": "27",
        "basedamage": "7.5",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-9",
        "activeframes": "27\u2014121"
      },
      {
        "movename": "Gunner Missle (Super)",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "23",
        "basedamage": "14.5",
        "shieldlag": "10",
        "shieldstun": "5",
        "advantage": "-11",
        "activeframes": "23\u201493"
      },
      {
        "movename": "Lunar Launch",
        "totalframes": "--",
        "landinglag": "18",
        "notes": "--",
        "startup": "12",
        "basedamage": "7.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "--",
        "activeframes": "12\u201425"
      },
      {
        "movename": "Cannon Jump Kick",
        "totalframes": "--",
        "landinglag": "28",
        "notes": "Invulnerable on frame 6 on the ground.",
        "startup": "6/10",
        "basedamage": "9.0/8.0/6.0",
        "shieldlag": "16/15/13",
        "shieldstun": "9/8/6",
        "advantage": "**",
        "activeframes": "6\u20147/(10\u201415/16\u201430)"
      },
      {
        "movename": "Arm Rocket",
        "totalframes": "--",
        "landinglag": "14",
        "notes": "--",
        "startup": "**",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Echo Reflector",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "Reflects on 4. Total frames is the minimum usage. Endlag is 15 frames otherwise.",
        "startup": "3 (4 is Start of Reflector)",
        "basedamage": "2.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-32",
        "activeframes": "**"
      },
      {
        "movename": "Bomb Drop",
        "totalframes": "53",
        "landinglag": "--",
        "notes": "Auto detonates on 134. Or six frames after contact",
        "startup": "18\u2014133",
        "basedamage": "2.0/9.0",
        "shieldlag": "4/7",
        "shieldstun": "-/4",
        "advantage": "-18",
        "activeframes": "18\u2014133/1\u20144"
      },
      {
        "movename": "Absorbing Vortex",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "Endlag from extended use is 9. Total frames is the minimum use. Absorbs on frame 7",
        "startup": "7",
        "basedamage": "4.0",
        "shieldlag": "5",
        "shieldstun": "5",
        "advantage": "-10",
        "activeframes": "7\u201411"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "10/12",
        "basedamage": "4.0/3.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Shoots blaster on 20.",
        "startup": "10",
        "basedamage": "7.0/3.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "Shoots blaster on 18 and 28",
        "startup": "7",
        "basedamage": "7.0/3.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "16",
        "basedamage": "7.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "52",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-29"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "73",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "82",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "87",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "103",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "114",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "104",
      "Gravity": "0.098",
      "Walk Speed": "1.00",
      "Run Speed": "1.37",
      "Initial Dash": "1.63",
      "Air Speed": "0.93",
      "Total Air Acceleration": "0.053",
      "SH / FH / SHFF / FHFF Frames": "34 / 49 / 24 / 35",
      "Fall Speed / Fast Fall Speed": "1.45 / 2.32",
      "Out of Shield, Up B(#2)": "6 frames",
      "Out of Shield, Neutral Air or Up Smash": "11 frames",
      "Out of Shield, Back Air or Up B(#1)": "12 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "mii_swordfighter": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Transitions to jab 2 as early as frame 9",
        "startup": "6",
        "basedamage": "3.0",
        "shieldlag": "7",
        "shieldstun": "4",
        "advantage": "-9",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Jab 2",
        "totalframes": "22",
        "landinglag": "--",
        "notes": "Transitions to jab 3 as early as frame 9",
        "startup": "6",
        "basedamage": "3.0",
        "shieldlag": "6",
        "shieldstun": "4",
        "advantage": "-12",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Jab 3",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "5.0",
        "shieldlag": "12",
        "shieldstun": "6",
        "advantage": "-26",
        "activeframes": "6\u20148"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "12.0",
        "shieldlag": "9",
        "shieldstun": "8",
        "advantage": "-16",
        "activeframes": "10\u201411"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "7.0",
        "shieldlag": "7",
        "shieldstun": "7",
        "advantage": "-17",
        "activeframes": "8\u201412"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "8.0",
        "shieldlag": "7",
        "shieldstun": "8",
        "advantage": "-6",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "10.0",
        "shieldlag": "10",
        "shieldstun": "14",
        "advantage": "-18",
        "activeframes": "9\u201410"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "59",
        "landinglag": "--",
        "notes": "Charge hold is frame 9",
        "startup": "15",
        "basedamage": "14.0/15.0/16.0",
        "shieldlag": "10/10/10",
        "shieldstun": "10/10/11",
        "advantage": "-34/-34/-33",
        "activeframes": "15\u201417"
      },
      {
        "movename": "Up Smash",
        "totalframes": "59",
        "landinglag": "--",
        "notes": "Charge hold is frame 9. Front/low hit is the 11f startup hit.",
        "startup": "11/14/21",
        "basedamage": "4.0/3.0/7.0",
        "shieldlag": "5/7/14",
        "shieldstun": "-/3/6",
        "advantage": "-32",
        "activeframes": "11\u201412/14\u201415/21\u201422"
      },
      {
        "movename": "Down Smash",
        "totalframes": "53",
        "landinglag": "--",
        "notes": "Charge hold is frame 3",
        "startup": "7/15",
        "basedamage": "12.0/15.0",
        "shieldlag": "9/10",
        "shieldstun": "8/10",
        "advantage": "-38/-28",
        "activeframes": "7\u20148/15\u201416"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "48",
        "landinglag": "9",
        "notes": "Autocancels on frame 1-5 and 32 onward",
        "startup": "10",
        "basedamage": "8.0",
        "shieldlag": "7",
        "shieldstun": "4",
        "advantage": "-5",
        "activeframes": "10\u201423"
      },
      {
        "movename": "Forward Air",
        "totalframes": "49",
        "landinglag": "12",
        "notes": "Autocancels on frame 48 onward",
        "startup": "12/16/21",
        "basedamage": "3.0/5.0",
        "shieldlag": "5/12",
        "shieldstun": "2/3",
        "advantage": "-10/-9",
        "activeframes": "12\u201413/16\u201417/21\u201422"
      },
      {
        "movename": "Back Air",
        "totalframes": "37",
        "landinglag": "9",
        "notes": "Autocancels on frame 29 onward",
        "startup": "10",
        "basedamage": "14.0",
        "shieldlag": "10",
        "shieldstun": "5",
        "advantage": "-4",
        "activeframes": "10\u201411"
      },
      {
        "movename": "Up Air",
        "totalframes": "44",
        "landinglag": "10",
        "notes": "Autocancels on frame 1-10 and 30 onward",
        "startup": "11",
        "basedamage": "16.0/10.0",
        "shieldlag": "10/8",
        "shieldstun": "6/4",
        "advantage": "-4/-6",
        "activeframes": "11\u201413(14\u201423)"
      },
      {
        "movename": "Down Air",
        "totalframes": "58",
        "landinglag": "18",
        "notes": "Landing hit on frame 1. Autocancels on frame 1-4 and 50 onward",
        "startup": "14/19/24/29/34",
        "basedamage": "1.5/5.0",
        "shieldlag": "4/6",
        "shieldstun": "2/6",
        "advantage": "-11",
        "activeframes": "14/19/24/29/34(1\u20143)"
      }
    ],
    "special_attacks": [
      {
        "movename": "Gale Strike",
        "totalframes": "67",
        "landinglag": "--",
        "notes": "--",
        "startup": "20",
        "basedamage": "13.0/11.0/10.0",
        "shieldlag": "9/8/8",
        "shieldstun": "5/4/4",
        "advantage": "-33",
        "activeframes": "20\u201437(38\u201455/56\u201471)"
      },
      {
        "movename": "Shuriken of Light",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "2.0/3.5/5.0/6.5",
        "shieldlag": "4/5/6/6",
        "shieldstun": "2/2/3/3",
        "advantage": "-18",
        "activeframes": "13\u201420(21\u201428/29\u201436/37\u201450)"
      },
      {
        "movename": "Blurring Blade",
        "totalframes": "84",
        "landinglag": "--",
        "notes": "Startup is 6 from charge release. Can be charged for 50 addittional frames for more damage",
        "startup": "17/21/25/29/33/44",
        "basedamage": "0.8\u20141.9/8.0\u201419.2",
        "shieldlag": "4\u20144/11\u201415",
        "shieldstun": "2\u20143/8\u201417",
        "advantage": "-32 to -23",
        "activeframes": "17\u201418/21\u201422/25\u201426/29\u201430/33\u201434/44\u201445"
      },
      {
        "movename": "Airborne Assault",
        "totalframes": "109",
        "landinglag": "--",
        "notes": "Startup is 2 upon reaching a target. Endlag on hit is 52 on level ground, 48 in the air. Stops at an edge with 44 frame endlag animation.",
        "startup": "2(+25)",
        "basedamage": "12.0",
        "shieldlag": "12",
        "shieldstun": "11",
        "advantage": "-41",
        "activeframes": "**"
      },
      {
        "movename": "Gale Stab",
        "totalframes": "55",
        "landinglag": "29",
        "notes": "2 startup from charge release. 55 total frames on miss. 32 endlag on hit. Cannot attempt a recovery after air hit like Ike can. Landing lag only incurred if you enter special fall",
        "startup": "2(+7)",
        "basedamage": "8.0\u201418.5",
        "shieldlag": "7\u201412",
        "shieldstun": "8\u201416",
        "advantage": "-24 to -16",
        "activeframes": "**"
      },
      {
        "movename": "Chakram",
        "totalframes": "52",
        "landinglag": "--",
        "notes": "Weak throw has rehit rate of 9 but will bounce off shields. Strong throw hits just once.",
        "startup": "18",
        "basedamage": "1.1/8.0",
        "shieldlag": "5/9",
        "shieldstun": "2/3",
        "advantage": "-27/-20",
        "activeframes": "18\u201489/18\u201440"
      },
      {
        "movename": "Stone Scabbard",
        "totalframes": "--",
        "landinglag": "44",
        "notes": "Invulnerable on frame 5-12. Landing hit on frame 1",
        "startup": "13/42",
        "basedamage": "4.0/3.0/5.0",
        "shieldlag": "7/5/13",
        "shieldstun": "5/4/6",
        "advantage": "-37",
        "activeframes": "**"
      },
      {
        "movename": "Skyward Slash Dash",
        "totalframes": "77",
        "landinglag": "20",
        "notes": "Total frames assumes you end on the ground.",
        "startup": "15/19/22/25/28/31/34",
        "basedamage": "2.2/3.0/4.0",
        "shieldlag": "4/5/5",
        "shieldstun": "3/4/5",
        "advantage": "-38",
        "activeframes": "15/19\u201420/22\u201423/25\u201426/28\u201429/31\u201432/34\u201435"
      },
      {
        "movename": "Hero's Spin",
        "totalframes": "78",
        "landinglag": "--",
        "notes": "Can be charged for an additional 60 frames. 8f startup is only the front hit.",
        "startup": "8",
        "basedamage": "14.0\u201419.6",
        "shieldlag": "10\u201412",
        "shieldstun": "13\u201417",
        "advantage": "-57 to -53",
        "activeframes": "8\u20149(10\u201414/15\u201424/25\u201440)"
      },
      {
        "movename": "Hero's Spin (Air)",
        "totalframes": "--",
        "landinglag": "30",
        "notes": "--",
        "startup": "8/16/22/26/31/38/47",
        "basedamage": "3.0/2.0/5.0",
        "shieldlag": "5/4/12",
        "shieldstun": "4/3/6",
        "advantage": "**",
        "activeframes": "8/11/16/19/22/26/31/38/47\u201448"
      },
      {
        "movename": "Blade Counter",
        "totalframes": "59",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5. Counters on frame 6-25",
        "startup": "64 (Start of Counter)",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "6\u201425 (counter)"
      },
      {
        "movename": "Blade Counter, Activated",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Attacker placed in a unique stagger animation. Invulnerable on frame 1-10 in addition to counter freeze frames.",
        "startup": "10",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Reversal Slash",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "Reflects on frame 5-24. Invulnerable on frame 17-26 if you hit somebody or reflect something",
        "startup": "16 (5 is Start of Reflector)",
        "basedamage": "6.0",
        "shieldlag": "7",
        "shieldstun": "0",
        "advantage": "-13",
        "activeframes": "16\u201417"
      },
      {
        "movename": "Power Thrust",
        "totalframes": "61",
        "landinglag": "--",
        "notes": "--",
        "startup": "14",
        "basedamage": "15.0/13.0/10.0",
        "shieldlag": "10/9/8",
        "shieldstun": "14/12/10",
        "advantage": "-33",
        "activeframes": "14\u201416(17\u201424/25\u201432)"
      },
      {
        "movename": "Power Thrust (Air)",
        "totalframes": "60",
        "landinglag": "39",
        "notes": "Landing hit on frame 1",
        "startup": "16",
        "basedamage": "13.0/7.0",
        "shieldlag": "9/10",
        "shieldstun": "12/7",
        "advantage": "-31",
        "activeframes": "16\u201418(19\u201426/27\u201431)/1\u20142"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "11/13",
        "basedamage": "3.0/3.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "46",
        "landinglag": "--",
        "notes": "--",
        "startup": "15/16",
        "basedamage": "3.0/3.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "21/23",
        "basedamage": "2.0/3.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "15/16",
        "basedamage": "2.0/2.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "50",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-30"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "69",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "77",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "84",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "99",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "107",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "100",
      "Gravity": "0.106",
      "Walk Speed": "1.07",
      "Run Speed": "1.58",
      "Initial Dash": "1.74",
      "Air Speed": "1.17",
      "Total Air Acceleration": "0.06",
      "SH / FH / SHFF / FHFF Frames": "30 / 45 / 20 / 32",
      "Fall Speed / Fast Fall Speed": "1.55 / 2.48",
      "Out of Shield, Up B(#3)": "8 frames (front only)",
      "Out of Shield, Up Smash": "11 frames (front/low only)",
      "Out of Shield, Up B(#1)": "13 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "mr_game_and_watch": {
    "ground_attacks": [
      {
        "movename": "Jab",
        "totalframes": "15",
        "landinglag": "--",
        "notes": "Transitions to rapid jab as early as 7.",
        "startup": "4",
        "basedamage": "3.0",
        "shieldlag": "7",
        "shieldstun": "4",
        "advantage": "-7",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "5/11/17...",
        "basedamage": "0.8",
        "shieldlag": "4",
        "shieldstun": "-",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "2",
        "basedamage": "3.0",
        "shieldlag": "11",
        "shieldstun": "4",
        "advantage": "-28",
        "activeframes": "2"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "12.0",
        "shieldlag": "9",
        "shieldstun": "11",
        "advantage": "-18",
        "activeframes": "8\u20149(10\u201420)"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "10/20",
        "basedamage": "7.0/7.0",
        "shieldlag": "7/7",
        "shieldstun": "7/7",
        "advantage": "-16/-6",
        "activeframes": "10\u201412/20\u201422"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "9.0",
        "shieldlag": "7",
        "shieldstun": "9",
        "advantage": "-27",
        "activeframes": "6\u20148"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "10.0/6.5",
        "shieldlag": "8/6",
        "shieldstun": "10/7",
        "advantage": "-21",
        "activeframes": "6\u20149(10\u201419)"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "Charge hold is frame 7",
        "startup": "17",
        "basedamage": "14.0/18.0",
        "shieldlag": "10/11",
        "shieldstun": "10/12",
        "advantage": "-15/-13",
        "activeframes": "17\u201418"
      },
      {
        "movename": "Up Smash",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "Invincible on frame 21-25. Charge hold is frame 15",
        "startup": "21",
        "basedamage": "16.0",
        "shieldlag": "10",
        "shieldstun": "11",
        "advantage": "-6",
        "activeframes": "21\u201425"
      },
      {
        "movename": "Down Smash",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "Charge hold is frame 6, close hit grounds opponent.",
        "startup": "12",
        "basedamage": "13.0/15.0",
        "shieldlag": "9/10",
        "shieldstun": "9/10",
        "advantage": "-16/-15",
        "activeframes": "12\u201416"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "42",
        "landinglag": "7",
        "notes": "Autocancels on frame 1-2 and 40 onward",
        "startup": "7/12/17/22",
        "basedamage": "3.0/4.0",
        "shieldlag": "5/11",
        "shieldstun": "2/3",
        "advantage": "-5/-4",
        "activeframes": "7\u201410/12\u201415/17\u201420/22\u201423"
      },
      {
        "movename": "Forward Air",
        "totalframes": "47",
        "landinglag": "17",
        "notes": "Bomb leaves his hands on 14, exploding automatically on 44 or upon touching ground. Autocancels on frame 42 onward. Advantage assumes landing on the same frame as bomb.",
        "startup": "10/44",
        "basedamage": "3.0/12.0",
        "shieldlag": "5/9",
        "shieldstun": "2/5",
        "advantage": "-3",
        "activeframes": "10\u201413/**"
      },
      {
        "movename": "Back Air",
        "totalframes": "39",
        "landinglag": "18",
        "notes": "Lnding hit on frame 1. Autocancels on frame 1-9 and 38 onward. The turtle's name is Augustus Philippe.",
        "startup": "10/14/18/22",
        "basedamage": "2.0/3.0/3.0",
        "shieldlag": "4/13/5",
        "shieldstun": "2/2/4",
        "advantage": "-13",
        "activeframes": "10\u201413/14\u201417/18\u201421/22/1"
      },
      {
        "movename": "Up Air",
        "totalframes": "42",
        "landinglag": "12",
        "notes": "Attack is a projectile. Autocancels on frame 44 onward",
        "startup": "9/15/21/27/33/37",
        "basedamage": "1.7/3.0",
        "shieldlag": "3/3",
        "shieldstun": "0/0",
        "advantage": "**",
        "activeframes": "9/15/21/27/33/37\u201441"
      },
      {
        "movename": "Down Air",
        "totalframes": "49",
        "landinglag": "22",
        "notes": "landing hit on frame 1. Autocancels on frame 1-5 and 50 onward",
        "startup": "12",
        "basedamage": "11.0/3.5",
        "shieldlag": "8/5",
        "shieldstun": "4/4",
        "advantage": "-17",
        "activeframes": "12\u201413/14\u201438/1\u20142"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Chef)",
        "totalframes": "54",
        "landinglag": "--",
        "notes": "Projectile and melee attack generate on same frame. Generates new sausage every 32 frames",
        "startup": "18",
        "basedamage": "5.0/13.0",
        "shieldlag": "6/7",
        "shieldstun": "3/8",
        "advantage": "-28",
        "activeframes": "18\u201420/**"
      },
      {
        "movename": "Side B (Judge)",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Judge 1: Deals 12.0 recoil and no knockback.\r\n\t\tJudge 3: Deals bonus shield damage.\r\n\t\tJudge 5: Hits on frame 16/19/22/25.\r\n\t\tJudge 7: Spawns three food items.\r\n\t\tJudge 8: Freezes the opponent.",
        "startup": "16",
        "basedamage": "1: 2.0, 2: 4.0, 3: 6.0, 4: 8.0, 5: 3.0, 6: 12.0, 7: 14.0, 8: 13.0, 9: 32.0",
        "shieldlag": "4, 5, 6, 7, 7, 9, 10, 9, 21",
        "shieldstun": "3, 5, 6, 8, 4, 11, 13, 12, 27",
        "advantage": "-30, -28, -27, -25, -20, -22, -20, -21, -6",
        "activeframes": "16\u201423 (Judge 5: 16\u201418/19\u201421/22\u201424/25\u201427)"
      },
      {
        "movename": "Up B (Parachute)",
        "totalframes": "--",
        "landinglag": "7",
        "notes": "Invulnerable frame 5-13 Takes 7 frames to exit parachute by pressing down and avoiding landing lag. Can cancel directly with attacks as well. Opens parachute on frame 37.",
        "startup": "3/9",
        "basedamage": "3.0/6.0",
        "shieldlag": "7/6",
        "shieldstun": "4/6",
        "advantage": "**",
        "activeframes": "3\u20144/9\u201418"
      },
      {
        "movename": "Down B (Oil Panick)",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "Begins absorbing/reflecting on frame 6. Takes 13 frames to put away bucket after extended usage.",
        "startup": "6 (Start of Absorb/Reflect)",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "6\u201430 (absorb)"
      },
      {
        "movename": "Oil Panick, Overload",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Successful absorbs incur a 24 frame animation that is completely invulnerable.",
        "startup": "2",
        "basedamage": "16.0\u201448.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "2\u20147(8\u201414/15\u201426)"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "Total frames includes 14 frames of hitlag.",
        "notes": "--",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "26",
        "basedamage": "8.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "26",
        "basedamage": "8.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "26",
        "basedamage": "12.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "35",
        "basedamage": "4.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "21/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17."
      },
      {
        "movename": "Forward Roll",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15."
      },
      {
        "movename": "Backward Roll",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16."
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "59",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-28."
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "84",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "93",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "100",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "123",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "132",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      }
    ],
    "stats": {
      "Weight": "75",
      "Gravity": "0.080",
      "Walk Speed": "1.18",
      "Run Speed": "1.679",
      "Initial Dash": "1.98",
      "Air Speed": "1.176",
      "Total Air Acceleration": "0.1",
      "SH / FH / SHFF / FHFF Frames": "36 / 51 / 25 / 36",
      "Fall Speed / Fast Fall Speed": "1.24 / 1.984",
      "Out of Shield, Up B": "3 frames",
      "Out of Shield, Down B(Air)": "5 frames",
      "Out of Shield, Neutral Air": "10 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "ness": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 5",
        "startup": "3",
        "basedamage": "2.0",
        "shieldlag": "8",
        "shieldstun": "3",
        "advantage": "-13",
        "activeframes": "3"
      },
      {
        "movename": "Jab 2",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Transitions to Jab 3 as early as frame 6",
        "startup": "3",
        "basedamage": "1.5",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-13",
        "activeframes": "3"
      },
      {
        "movename": "Jab 3",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "4.0",
        "shieldlag": "11",
        "shieldstun": "5",
        "advantage": "-18",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "10.0",
        "shieldlag": "8",
        "shieldstun": "10",
        "advantage": "-17",
        "activeframes": "7\u201410"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "28",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "7.0/5.0",
        "shieldlag": "7/6",
        "shieldstun": "7/6",
        "advantage": "-16/-17",
        "activeframes": "5\u20146(7\u20148)"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "11",
        "landinglag": "--",
        "notes": "Can transition to another Dtilt as early as frame 6.",
        "startup": "3",
        "basedamage": "4.5/3.0",
        "shieldlag": "5/5",
        "shieldstun": "5/4",
        "advantage": "-3/-4",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "8/15/23",
        "basedamage": "4.0/2.0/4.0",
        "shieldlag": "5/4/9",
        "shieldstun": "5/3/5",
        "advantage": "-12",
        "activeframes": "8/15\u201416/23\u201424"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "54",
        "landinglag": "--",
        "notes": "Reflects on frame 18-30. Charge hold is frame 10.",
        "startup": "21",
        "basedamage": "18.0/20.0/22.0",
        "shieldlag": "11/12/15",
        "shieldstun": "12/13/14",
        "advantage": "-21/-20/-19",
        "activeframes": "21\u201422"
      },
      {
        "movename": "Up Smash",
        "totalframes": "52",
        "landinglag": "--",
        "notes": "Charge hold on frame 10 and also creates a hitbox hitting every 6 frames",
        "startup": "10",
        "basedamage": "13.0",
        "shieldlag": "4/9",
        "shieldstun": "2/9",
        "advantage": "-33",
        "activeframes": "10/**"
      },
      {
        "movename": "Down Smash",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "Charge hold on frame 12 and also creates a hitbox hitting every 6 frames",
        "startup": "12/17/23/31",
        "basedamage": "1.0/10.0",
        "shieldlag": "4/8",
        "shieldstun": "2/7",
        "advantage": "-21/-7",
        "activeframes": "12\u201415(17\u201418)/23\u201425(31\u201432)"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "35",
        "landinglag": "8",
        "notes": "Autocancels on frame 1-4 and 26 onward",
        "startup": "5",
        "basedamage": "11.0/7.0",
        "shieldlag": "8/7",
        "shieldstun": "4/3",
        "advantage": "-4/-5",
        "activeframes": "5\u201412(13\u201415)"
      },
      {
        "movename": "Forward Air",
        "totalframes": "39",
        "landinglag": "12",
        "notes": "Autocancels on frame 1-7 and 33 onward",
        "startup": "8/13/18/20",
        "basedamage": "1.5/5.5",
        "shieldlag": "4/9",
        "shieldstun": "2/3",
        "advantage": "-10/-9",
        "activeframes": "8/13/18/20\u201421"
      },
      {
        "movename": "Back Air",
        "totalframes": "35",
        "landinglag": "10",
        "notes": "Autocancels on frame 1-9 and 25 onward",
        "startup": "10",
        "basedamage": "15.0/8.0",
        "shieldlag": "10/7",
        "shieldstun": "5/4",
        "advantage": "-5/-6",
        "activeframes": "10\u201411(12\u201418)"
      },
      {
        "movename": "Up Air",
        "totalframes": "33",
        "landinglag": "8",
        "notes": "Autocancels on frame 1-7 and 34 onward",
        "startup": "8/10/12/14/15",
        "basedamage": "2.5/5.0",
        "shieldlag": "5/9",
        "shieldstun": "2/3",
        "advantage": "-6/-5",
        "activeframes": "8/10/12/14/15\u201416"
      },
      {
        "movename": "Down Air",
        "totalframes": "54",
        "landinglag": "12",
        "notes": "Autocancels on frame 1-19 and 41 onward",
        "startup": "20",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "-7/-8",
        "activeframes": "20\u201422/23\u201426"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (PK Flash)",
        "totalframes": "65\u2014142",
        "landinglag": "--",
        "notes": "On release, startup is 14 and total frames is 35.",
        "startup": "44\u2014121",
        "basedamage": "11.0\u201427.0",
        "shieldlag": "13\u201417",
        "shieldstun": "4\u20148",
        "advantage": "-4 to +4",
        "activeframes": "44\u201448/121\u2014125"
      },
      {
        "movename": "Side B (PK Fire)",
        "totalframes": "55",
        "landinglag": "12 (Air version)",
        "notes": "Will not erupt on shields. The flame pillar has a rehit rate of 7 and lasts about 100 frames",
        "startup": "18",
        "basedamage": "1.0/1.0",
        "shieldlag": "6",
        "shieldstun": "3",
        "advantage": "-28",
        "activeframes": "18\u201437"
      },
      {
        "movename": "Up B (PK Thunder)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "39 endlag after hitting a target",
        "startup": "20",
        "basedamage": "11.0/1.0",
        "shieldlag": "13/3",
        "shieldstun": "4/10",
        "advantage": "-22",
        "activeframes": "20\u2014139"
      },
      {
        "movename": "Up B, Self-hit (PK Thunder 2)",
        "totalframes": "56",
        "landinglag": "24",
        "notes": "Invulnerable on frame 1-32. Landing lag is if you enter special fall.",
        "startup": "1",
        "basedamage": "25.0/21.0",
        "shieldlag": "17/16",
        "shieldstun": "22/18",
        "advantage": "-33",
        "activeframes": "**"
      },
      {
        "movename": "Down B (PSI Magnet)",
        "totalframes": "24",
        "landinglag": "--",
        "notes": "Begins absorbing on frame 7. Total frame is the minimum duration. Endlag is otherwise 9 on release.",
        "startup": "7 (7 is start of absorb)",
        "basedamage": "4.0",
        "shieldlag": "5",
        "shieldstun": "5",
        "advantage": "-12",
        "activeframes": "7\u201412 (absorb)"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "52",
        "landinglag": "--",
        "notes": "--",
        "startup": "27",
        "basedamage": "11.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "52",
        "landinglag": "--",
        "notes": "--",
        "startup": "27",
        "basedamage": "11.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "--",
        "startup": "36",
        "basedamage": "10.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "50",
        "landinglag": "--",
        "notes": "--",
        "startup": "6/10/14/27/28",
        "basedamage": "0.5/1.5/4.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "59",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-30"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "77",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "86",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "99",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "119",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "134",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "94",
      "Gravity": "0.077",
      "Walk Speed": "0.907",
      "Run Speed": "1.609",
      "Initial Dash": "1.826",
      "Air Speed": "1.007",
      "Total Air Acceleration": "0.1",
      "SH / FH / SHFF / FHFF Frames": "42 / 58 / 29 / 41",
      "Fall Speed / Fast Fall Speed": "1.31 / 2.096",
      "Out of Shield, Neutral Air, Up Air": "8 frames",
      "Out of Shield, Up Smash or Down B(Air)": "10 frames",
      "Out of Shield, Forward Air": "11 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "olimar": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 7",
        "startup": "4",
        "basedamage": "3.0 / 4.0",
        "shieldlag": "8/9",
        "shieldstun": "4/5",
        "advantage": "-11/-10",
        "activeframes": "4(5)"
      },
      {
        "movename": "Jab 2",
        "totalframes": "17",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "3.0/4.0",
        "shieldlag": "5/5",
        "shieldstun": "4/5",
        "advantage": "-9/-8",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "11.0",
        "shieldlag": "8",
        "shieldstun": "10",
        "advantage": "-10",
        "activeframes": "15\u201417"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "6/8/10/12/14/16",
        "basedamage": "0.6/4.0",
        "shieldlag": "4/5",
        "shieldstun": "2/5",
        "advantage": "-17",
        "activeframes": "6/8/10/12/14/16"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "6.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-17",
        "activeframes": "6\u201412"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "8/11",
        "basedamage": "7.0 / 4.0",
        "shieldlag": "7/5",
        "shieldstun": "-/5",
        "advantage": "-21",
        "activeframes": "8\u201410/11\u201414"
      },
      {
        "movename": "Forward Smash (Early)",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "Charge hold is frame 6. Olimar does not suffer hitlag from this attack. But Pikmin do.",
        "startup": "11",
        "basedamage": "20.3/14.5/14.5/11.6/23.2",
        "shieldlag": "12/15/10/9/14",
        "shieldstun": "6/5/5/4/7",
        "advantage": "-13/-11/-16/-18/-10",
        "activeframes": "11\u201412"
      },
      {
        "movename": "Forward Smash (Late)",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "14.0/10.0/10.0/8.0/16.0",
        "shieldlag": "10/12/8/7/10",
        "shieldstun": "5/4/4/3/5",
        "advantage": "-14/-13/-17/-19/-14",
        "activeframes": "13\u201419"
      },
      {
        "movename": "Forward Smash (Later)",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "20",
        "basedamage": "8.4/6.0/6.0/4.8/9.6",
        "shieldlag": "7/9/6/6/8",
        "shieldstun": "3/3/3/3/4",
        "advantage": "-12/-10/-13/-13/-10",
        "activeframes": "20\u201429"
      },
      {
        "movename": "Up Smash (Close)",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "Charge hold is frame 4. Olimar does not suffer hitlag from this attack. But Pikmin do.",
        "startup": "12",
        "basedamage": "18.2/13.0/13.0/10.4/20.8",
        "shieldlag": "11/14/9/8/13",
        "shieldstun": "6/5/5/4/6",
        "advantage": "-10/-8/-13/-15/-8",
        "activeframes": "12\u201416"
      },
      {
        "movename": "Up Smash (Far)",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "14.0/10.0/10.0/8.0/16.0",
        "shieldlag": "10/12/8/7/10",
        "shieldstun": "5/4/4/3/5",
        "advantage": "-12/-11/-15/-17/-12",
        "activeframes": "12\u201413"
      },
      {
        "movename": "Up Smash (Late)",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "17",
        "basedamage": "15.4/11.0/11.0/8.8/17.6",
        "shieldlag": "10/13/8/7/11",
        "shieldstun": "5/4/4/4/6",
        "advantage": "-8/-6/-11/-12/-6",
        "activeframes": "17\u201422"
      },
      {
        "movename": "Down Smash (Early)",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "Charge hold is frame 6. Olimar does not suffer hitlag from this attack. But Pikmin do.",
        "startup": "10",
        "basedamage": "15.4/11.0/11.0/8.8/17.6",
        "shieldlag": "10/13/8/7/11",
        "shieldstun": "5/4/4/4/6",
        "advantage": "-13/-11/-16/-17/-11",
        "activeframes": "10\u201413"
      },
      {
        "movename": "Down Smash (Late)",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "14",
        "basedamage": "12.6/9.0/9.0/7.2/14.4",
        "shieldlag": "9/11/7/7/9",
        "shieldstun": "4/4/4/3/5",
        "advantage": "-11/-9/-13/-14/-10",
        "activeframes": "14\u201418"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "53",
        "landinglag": "13",
        "notes": "Autocancels on frame 1-2 and 34 onward",
        "startup": "7/11/15/19/23",
        "basedamage": "1.5/2.0",
        "shieldlag": "4/4",
        "shieldstun": "2/2",
        "advantage": "-11/-11",
        "activeframes": "7\u20148/11\u201412/15\u201416/19\u201420/23\u201424"
      },
      {
        "movename": "Forward Air",
        "totalframes": "42",
        "landinglag": "9",
        "notes": "Autocancels on frame 1-5 and 31 onward",
        "startup": "7",
        "basedamage": "11.9/8.5/8.5/6.8/13.6",
        "shieldlag": "9/11/8/7/9",
        "shieldstun": "5/4/4/3/5",
        "advantage": "-4/-5/-5/-6/-4",
        "activeframes": "7\u20149"
      },
      {
        "movename": "Back Air",
        "totalframes": "48",
        "landinglag": "9",
        "notes": "Autocancels on frame 1-5 and 36 onward",
        "startup": "10",
        "basedamage": "15.1/10.8/10.8/8.6/17.2",
        "shieldlag": "10/13/8/7/11",
        "shieldstun": "5/4/4/4/6",
        "advantage": "-4/-5/-5/-5/-3",
        "activeframes": "10\u201413"
      },
      {
        "movename": "Up Air",
        "totalframes": "34",
        "landinglag": "18",
        "notes": "Autocancels on frame 1-5 and 31 onward",
        "startup": "8",
        "basedamage": "12.6/9.0/9.0/7.2/14.4",
        "shieldlag": "9/11/7/7/10",
        "shieldstun": "5/4/4/3/5",
        "advantage": "-13/-14/-14/-15/-13",
        "activeframes": "8\u201415"
      },
      {
        "movename": "Down Air",
        "totalframes": "51",
        "landinglag": "18",
        "notes": "Autocancels on frame 1-5 and 31 onward",
        "startup": "9",
        "basedamage": "12.6/9.0/9.0/7.2/14.4",
        "shieldlag": "9/11/7/7/10",
        "shieldstun": "5/4/4/3/5",
        "advantage": "-13/-14/-14/-15/-13",
        "activeframes": "9\u201410"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Pikmin Pluck)",
        "totalframes": "8",
        "landinglag": "--",
        "notes": "32 frame failure animation when your squad is full.",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "1"
      },
      {
        "movename": "Side B (Pikmin Throw)",
        "totalframes": "24",
        "landinglag": "--",
        "notes": "A latched pikmin hits on frame 18, then every 36 frames after that (counting Pikmin's hitlag)",
        "startup": "9",
        "basedamage": "Purple: 6.0",
        "shieldlag": "Purple: 6",
        "shieldstun": "Purple: 3",
        "advantage": "Purple: -6",
        "activeframes": "9\u2014127(9\u2014107)"
      },
      {
        "movename": "Up B (Winged Pikmin)",
        "totalframes": "--",
        "landinglag": "30/19",
        "notes": "30 landing lag if the pikmin let go of you. Frame 30 is the earliest you can cancel the move.",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "--"
      },
      {
        "movename": "Down B (Pikmin Order/Whistle)",
        "totalframes": "17",
        "landinglag": "--",
        "notes": "Super armor on frame 2-7",
        "startup": "2 (Start of Super Armor)",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "2\u20147 (armor)"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "41/47/56",
        "landinglag": "--",
        "notes": "Total frames depends on having one/two/three pikmin",
        "startup": "12",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "49/57/68",
        "landinglag": "--",
        "notes": "Total frames depends on having one/two/three pikmin",
        "startup": "12",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "44/51/60",
        "landinglag": "--",
        "notes": "Total frames depends on having one/two/three pikmin",
        "startup": "12",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "16",
        "landinglag": "--",
        "notes": "Total frames includes 11 frames of hitlag",
        "startup": "1",
        "basedamage": "1.0"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "18",
        "basedamage": "5.6/7.0/11.9/7.0/7.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "21",
        "basedamage": "7.2/9.0/15.3/9.0/9.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "21/22",
        "basedamage": "6.4/8.0/13.5/8.0/8.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "23/31",
        "basedamage": "6.6/8.0/12.9/7.8/8.6"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "57",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-29"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "78",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "87",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "96",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "118",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "132",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "79",
      "Gravity": "0.068",
      "Walk Speed": "0.945",
      "Run Speed": "1.617",
      "Initial Dash": "1.606",
      "Air Speed": "0.861",
      "Total Air Acceleration": "0.08",
      "SH / FH / SHFF / FHFF Frames": "43 / 59 / 30 / 41",
      "Fall Speed / Fast Fall Speed": "1.35 / 2.16",
      "Out of Shield, Neutral Air or Forward Air": "10 frames",
      "Out of Shield, Up Air": "11 frames",
      "Out of Shield, Down Air or Up Smash": "12 frames",
      "Shield Grab (Grab, post-Shieldstun)": "16 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "pac_man": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Transitions to jab 2 as early as frame 7",
        "startup": "4",
        "basedamage": "2.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-12",
        "activeframes": "4"
      },
      {
        "movename": "Jab 2",
        "totalframes": "21",
        "landinglag": "--",
        "notes": "Transitions to jab 3 as early as frame 7",
        "startup": "4",
        "basedamage": "2.0",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-14",
        "activeframes": "4"
      },
      {
        "movename": "Jab 3",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "4.0",
        "shieldlag": "11",
        "shieldstun": "5",
        "advantage": "-24",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "8.0",
        "shieldlag": "7",
        "shieldstun": "8",
        "advantage": "-17",
        "activeframes": "5\u20147"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "24",
        "landinglag": "--",
        "notes": "Arm intangibile on frame 7-10",
        "startup": "7",
        "basedamage": "6.5",
        "shieldlag": "6",
        "shieldstun": "7",
        "advantage": "-10",
        "activeframes": "7\u201410"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "26",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "6.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-13",
        "activeframes": "7\u20149"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "10/19/28/37",
        "basedamage": "2.0 / 4.0",
        "shieldlag": "4/11",
        "shieldstun": "3/5",
        "advantage": "-3",
        "activeframes": "10\u201411/19\u201420/28\u201429/37"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "52",
        "landinglag": "--",
        "notes": "Charge hold is frame 4",
        "startup": "16",
        "basedamage": "16.0/9.0",
        "shieldlag": "10/7",
        "shieldstun": "11/7",
        "advantage": "-25",
        "activeframes": "16\u201418(19\u201429)"
      },
      {
        "movename": "Up Smash",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Charge hold is frame 4",
        "startup": "11/15",
        "basedamage": "3.0/14.0",
        "shieldlag": "5/10",
        "shieldstun": "3/10",
        "advantage": "-24",
        "activeframes": "11/15\u201417(18\u201428)"
      },
      {
        "movename": "Down Smash",
        "totalframes": "54",
        "landinglag": "--",
        "notes": "Charge hold is frame 3",
        "startup": "15",
        "basedamage": "13.0/7.0",
        "shieldlag": "9/7",
        "shieldstun": "9/6",
        "advantage": "-30",
        "activeframes": "15\u201417(18\u201428)"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "51",
        "landinglag": "7",
        "notes": "Autocancels on frame 1-2 and 45 onward",
        "startup": "3",
        "basedamage": "10.0/6.0",
        "shieldlag": "8/6",
        "shieldstun": "4/3",
        "advantage": "-3/-4",
        "activeframes": "3\u20145(6\u20149/10\u201419)"
      },
      {
        "movename": "Forward Air",
        "totalframes": "25",
        "landinglag": "10",
        "notes": "Autocancels on frame 26 onward",
        "startup": "5",
        "basedamage": "7.6",
        "shieldlag": "7",
        "shieldstun": "4",
        "advantage": "-6",
        "activeframes": "5\u20148"
      },
      {
        "movename": "Back Air",
        "totalframes": "40",
        "landinglag": "13",
        "notes": "Autocancels on frame 1-8 and 36 onward",
        "startup": "9",
        "basedamage": "11.8/7.0",
        "shieldlag": "9/7",
        "shieldstun": "5/3",
        "advantage": "-8/-10",
        "activeframes": "9\u201411(12\u201416)"
      },
      {
        "movename": "Up Air",
        "totalframes": "36",
        "landinglag": "10",
        "notes": "Autocancels on frame 32 onward",
        "startup": "9",
        "basedamage": "10.0",
        "shieldlag": "8",
        "shieldstun": "4",
        "advantage": "-6",
        "activeframes": "9\u201416"
      },
      {
        "movename": "Down Air",
        "totalframes": "49",
        "landinglag": "12",
        "notes": "Autocancels on frame 50 onward",
        "startup": "6/13/20/27",
        "basedamage": "2.0/7.0",
        "shieldlag": "4/7",
        "shieldstun": "2/3",
        "advantage": "-10/-9",
        "activeframes": "6\u20147/13\u201414/20\u201421/27\u201428"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Bonus Fruit, Throw)",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "7 frames to enter charge state. 4 frames to cancel charge with shield. Fruits are Cherry (8), Strawberry (20), Lemon (32), Apple (52), Melon (72), Galaga (92), Bell (112), Key (132) Cherry, Strawberry, Lemon, Apple, and Melon linger for 32 frames after bouncing off somebody",
        "startup": "12(+7)",
        "basedamage": "4.3 / 6.0 / 7.5 / 9.5 / 12.0 / 9.0 / 7.5 / 16.0",
        "shieldlag": "5/6/7/8/9/7/7/10",
        "shieldstun": "2/3/3/4/4/4/3/5",
        "advantage": "-22/-20/-19/-17/-16/-18/-19/-14",
        "activeframes": "**"
      },
      {
        "movename": "Side B (Power Pellet (Travel | Dash))",
        "totalframes": "83\u2014118",
        "landinglag": "--",
        "notes": "Only the dash's damage depends on level of charge.",
        "startup": "24\u201442 | 35\u201453",
        "basedamage": "4.0\u20145.0 | 6.0\u201412.0",
        "shieldlag": "5\u20146 | 6\u20149",
        "shieldstun": "5 | 6\u201411",
        "advantage": "-42 to -54",
        "activeframes": "**"
      },
      {
        "movename": "Up B (Pac-Jump)",
        "totalframes": "--",
        "landinglag": "30",
        "notes": "Trampoline can be interracted with as early as frame 10 and is unblockable.",
        "startup": "4",
        "basedamage": "5.0\u201410.0",
        "shieldlag": "6\u20148",
        "shieldstun": "6\u201410",
        "advantage": "**",
        "activeframes": "4\u201411(12\u201416/17\u201421)"
      },
      {
        "movename": "Down B (Fire Hydrant)",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "9.0/13.0",
        "shieldlag": "7/9",
        "shieldstun": "4/5",
        "advantage": "-11",
        "activeframes": "**"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "58",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "66",
        "landinglag": "--",
        "notes": "--",
        "startup": "14",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "61",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "8.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "59",
        "landinglag": "--",
        "notes": "--",
        "startup": "25",
        "basedamage": "11.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "18",
        "basedamage": "5.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "64",
        "landinglag": "--",
        "notes": "multi/final",
        "startup": "16/24/32/34",
        "basedamage": "1.5/6.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "55",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-29"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "78",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "87",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "96",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "111",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "130",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "95",
      "Gravity": "0.072",
      "Walk Speed": "1.097",
      "Run Speed": "1.672",
      "Initial Dash": "1.87",
      "Air Speed": "1.092",
      "Total Air Acceleration": "0.08",
      "SH / FH / SHFF / FHFF Frames": "42 / 59 / 29 / 41",
      "Fall Speed / Fast Fall Speed": "1.35 / 2.16",
      "Out of Shield, Up B": "4 frames",
      "Out of Shield, Neutral Air": "6 frames",
      "Out of Shield, Forward Air": "8 frames",
      "Shield Grab (Grab, post-Shieldstun)": "16 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "palutena": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "24",
        "landinglag": "--",
        "notes": "Transitions to rapid jab as early as frame 13",
        "startup": "8",
        "basedamage": "3.0",
        "shieldlag": "8",
        "shieldstun": "4",
        "advantage": "-12",
        "activeframes": "8\u20149"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "4/7/10...",
        "basedamage": "0.6",
        "shieldlag": "4",
        "shieldstun": "-",
        "advantage": "--",
        "activeframes": "4/7/10..."
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "3",
        "basedamage": "3.5",
        "shieldlag": "11",
        "shieldstun": "4",
        "advantage": "-32",
        "activeframes": "3"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "59",
        "landinglag": "--",
        "notes": "--",
        "startup": "14/24",
        "basedamage": "6.0/7.0",
        "shieldlag": "6/7",
        "shieldstun": "6/7",
        "advantage": "-28",
        "activeframes": "14\u201423/24\u201435"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "--",
        "startup": "8/11/14/17/20/24",
        "basedamage": "1.4/2.5",
        "shieldlag": "4/7",
        "shieldstun": "3/4",
        "advantage": "-27",
        "activeframes": "8/11/14/17/20/24"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "14",
        "basedamage": "8.5",
        "shieldlag": "7",
        "shieldstun": "8",
        "advantage": "-17",
        "activeframes": "14\u201427"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "Head, torso, and arm invincibility on frame 5-6. Arm invincibility continues frame 7-16",
        "startup": "6",
        "basedamage": "11.0/7.0",
        "shieldlag": "8/7",
        "shieldstun": "10/7",
        "advantage": "-21",
        "activeframes": "6\u20149/10\u201417"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "63",
        "landinglag": "--",
        "notes": "Charge hold is frame 10",
        "startup": "18",
        "basedamage": "16.0/13.0",
        "shieldlag": "10/9",
        "shieldstun": "11/9",
        "advantage": "-34/-36",
        "activeframes": "18\u201420"
      },
      {
        "movename": "Up Smash",
        "totalframes": "63",
        "landinglag": "--",
        "notes": "Charge hold is frame 12",
        "startup": "18",
        "basedamage": "16.0/9.0",
        "shieldlag": "10/9",
        "shieldstun": "11/8",
        "advantage": "-34/-37",
        "activeframes": "18\u201435"
      },
      {
        "movename": "Down Smash",
        "totalframes": "68",
        "landinglag": "--",
        "notes": "Charge hold is frame 13",
        "startup": "17",
        "basedamage": "15.0/13.0",
        "shieldlag": "14/9",
        "shieldstun": "10/9",
        "advantage": "-41/-42",
        "activeframes": "17\u201419"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "51",
        "landinglag": "12",
        "notes": "Autocancels on frame 1-3 and 40 onward",
        "startup": "5/9/13/17/21/25/29",
        "basedamage": "1.4/5.0",
        "shieldlag": "4/9",
        "shieldstun": "2/3",
        "advantage": "-10/-9",
        "activeframes": "5/9/13/17/21/25/29\u201430"
      },
      {
        "movename": "Forward Air",
        "totalframes": "44",
        "landinglag": "7",
        "notes": "Autocancels on frame 1-3 and 24 onward",
        "startup": "9",
        "basedamage": "10.0",
        "shieldlag": "8",
        "shieldstun": "4",
        "advantage": "-3",
        "activeframes": "9\u201411"
      },
      {
        "movename": "Back Air",
        "totalframes": "49",
        "landinglag": "10",
        "notes": "Arm invinicibility on frame 7-10. Autocancels on frame 1-2 and 35 onward",
        "startup": "8",
        "basedamage": "12.0",
        "shieldlag": "11",
        "shieldstun": "5",
        "advantage": "-5",
        "activeframes": "8\u201410"
      },
      {
        "movename": "Up Air",
        "totalframes": "51",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-2 and 42 onward",
        "startup": "10/13/16/19/22/24",
        "basedamage": "1.0/5.0",
        "shieldlag": "4/9",
        "shieldstun": "2/3",
        "advantage": "-12/-11",
        "activeframes": "10/13/16/19/22/24"
      },
      {
        "movename": "Down Air",
        "totalframes": "58",
        "landinglag": "11",
        "notes": "Autocancels on frame 1-2 and 48 onward",
        "startup": "10",
        "basedamage": "11.0",
        "shieldlag": "13",
        "shieldstun": "4",
        "advantage": "-7",
        "activeframes": "10\u201411"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Autoreticle)",
        "totalframes": "67",
        "landinglag": "--",
        "notes": "Targets on frame 8",
        "startup": "24/30/36",
        "basedamage": "3.5",
        "shieldlag": "5",
        "shieldstun": "2",
        "advantage": "-24",
        "activeframes": "24/30/36"
      },
      {
        "movename": "Side B (Explosive Flame)",
        "totalframes": "71",
        "landinglag": "--",
        "notes": "Area of explosion dictated on frame 1. Smash input for farther distance",
        "startup": "28/33/38/43/48/53/57",
        "basedamage": "1.5/5.5",
        "shieldlag": "4/9",
        "shieldstun": "-/3",
        "advantage": "-2",
        "activeframes": "28/33/38/43/48/53/57"
      },
      {
        "movename": "Up B (Warp)",
        "totalframes": "67",
        "landinglag": "22",
        "notes": "Invulnerable on frame 16-32. Total frames refers to ending on the ground.",
        "startup": "**",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Down B (Counter)",
        "totalframes": "70",
        "landinglag": "--",
        "notes": "Invulnerable on frame 6. Counters/Reflects on frame 7-34",
        "startup": "7 (Start of Counter/Reflect)",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Counter, Attack/Reflect",
        "totalframes": "36/34",
        "landinglag": "--",
        "notes": "Attack: Invulnerable on frame 1-5 in addition to counter freeze frames.\r\n\t\tReflect: Barrier lasts until frame 40 for additional reflects.",
        "startup": "4/--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "4\u20146"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "20",
        "basedamage": "9.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "54",
        "landinglag": "--",
        "notes": "--",
        "startup": "20",
        "basedamage": "10.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "54",
        "landinglag": "--",
        "notes": "--",
        "startup": "17",
        "basedamage": "8.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "25",
        "basedamage": "5.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "49",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-30"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "70",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "77",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "82",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "93",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "105",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "91",
      "Gravity": "0.120",
      "Walk Speed": "1.271",
      "Run Speed": "2.077",
      "Initial Dash": "2.035",
      "Air Speed": "1.0",
      "Total Air Acceleration": "0.115",
      "SH / FH / SHFF / FHFF Frames": "34 / 50 / 24 / 35",
      "Fall Speed / Fast Fall Speed": "1.55 / 2.48",
      "Out of Shield, Neutral Air": "8 frames",
      "Out of Shield, Back Air": "11 frames",
      "Out of Shield, Forward Air": "12 frames",
      "Shield Grab (Grab, post-Shieldstun)": "11 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "peach": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 7.",
        "startup": "2",
        "basedamage": "2.0",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-22",
        "activeframes": "2"
      },
      {
        "movename": "Jab 2",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "2",
        "basedamage": "3.0",
        "shieldlag": "9",
        "shieldstun": "4",
        "advantage": "-23",
        "activeframes": "2\u20143"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "7.0/8.0/6.0",
        "shieldlag": "7/4/**",
        "shieldstun": "7/8/**",
        "advantage": "-22/-21",
        "activeframes": "7/8\u20149/10\u201415"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "8.0/10.0",
        "shieldlag": "7/8",
        "shieldstun": "8/10",
        "advantage": "-20/-18",
        "activeframes": "9\u201413"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "23",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "7.0",
        "shieldlag": "7",
        "shieldstun": "7",
        "advantage": "-8",
        "activeframes": "8\u20149"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "First hit blockstrings into second hit",
        "startup": "6/17",
        "basedamage": "4.0/6.0",
        "shieldlag": "5/7",
        "shieldstun": "-/6",
        "advantage": "-14",
        "activeframes": "6\u20149/17\u201419"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "Can make directional inputs to change weapon. Charge hold is frame 5.",
        "startup": "15",
        "basedamage": "15.0/13.5/18.0",
        "shieldlag": "10/10/11",
        "shieldstun": "10/9/12",
        "advantage": "-20/-21/-18",
        "activeframes": "15\u201417/15\u201417/15\u201417"
      },
      {
        "movename": "Up Smash",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "Head and arm intangibility on frame 14-20. Charge hold is frame 9",
        "startup": "14",
        "basedamage": "12.0/17.0",
        "shieldlag": "10/11",
        "shieldstun": "10/11",
        "advantage": "-20/-19",
        "activeframes": "14\u201416/17\u201420"
      },
      {
        "movename": "Down Smash",
        "totalframes": "54",
        "landinglag": "--",
        "notes": "Charge hold is frame 2",
        "startup": "6/10/14/18/22/26/30",
        "basedamage": "2.0/3.0",
        "shieldlag": "4/15",
        "shieldstun": "3/3",
        "advantage": "-21",
        "activeframes": "6\u20147/10\u201411/14\u201415/18\u201419/ 22\u201423/26\u201427/30\u201431"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "48",
        "landinglag": "7",
        "notes": "Autocancels on frame 1-4 and 36 onward",
        "startup": "5",
        "basedamage": "13.0/6.0",
        "shieldlag": "9/6",
        "shieldstun": "5/3",
        "advantage": "-2/-4",
        "activeframes": "5\u20148/9\u201419"
      },
      {
        "movename": "Forward Air",
        "totalframes": "57",
        "landinglag": "13",
        "notes": "Autocancels on frame 1-9 and 41 onward",
        "startup": "16",
        "basedamage": "14.0/15.0",
        "shieldlag": "10/10",
        "shieldstun": "5/5",
        "advantage": "-8/-8",
        "activeframes": "16\u201420"
      },
      {
        "movename": "Back Air",
        "totalframes": "53",
        "landinglag": "11",
        "notes": "Autocancels on frame 1-4 and 30 onward",
        "startup": "6",
        "basedamage": "12.0/7.0",
        "shieldlag": "9/7",
        "shieldstun": "5/3",
        "advantage": "-6/-8",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Up Air",
        "totalframes": "45",
        "landinglag": "7",
        "notes": "Autocancels on frame 1-4 and 41 onward",
        "startup": "10/15",
        "basedamage": "4.0/6.0",
        "shieldlag": "6/7",
        "shieldstun": "3/3",
        "advantage": "-4/-4",
        "activeframes": "(10/11/12\u201413)(15/16\u201419)"
      },
      {
        "movename": "Down Air",
        "totalframes": "38",
        "landinglag": "8",
        "notes": "Autocancels on frame 1-11 and 38 onward",
        "startup": "12/18/24/30",
        "basedamage": "2.0/5.0",
        "shieldlag": "4/6",
        "shieldstun": "2/3",
        "advantage": "-6/-5",
        "activeframes": "12\u201413/18\u201419/24\u201425/30\u201431"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Toad)",
        "totalframes": "62",
        "landinglag": "--",
        "notes": "Counter window 9-34 from 10-35. Also invulnerable on frame 8.",
        "startup": "9 (Start of Counter)",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "--"
      },
      {
        "movename": "Toad, Attack",
        "totalframes": "59",
        "landinglag": "--",
        "notes": "--",
        "startup": "2/6/8/12/14/17",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Side B (Peach Bomber)",
        "totalframes": "62/87",
        "landinglag": "--",
        "notes": "Startup is 2 upon reaching a target. 18 endlag on hit. Total frames is 62 on level ground when you miss. And 87 if you miss and go over an edge",
        "startup": "13",
        "basedamage": "12.0",
        "shieldlag": "9",
        "shieldstun": "11",
        "advantage": "-13",
        "activeframes": "13\u201427(detector)"
      },
      {
        "movename": "Side B, Air (Peach Bomber, Air)",
        "totalframes": "87",
        "landinglag": "35",
        "notes": "Startup is 2 upon reaching a target. 18 endlag on hit.",
        "startup": "13",
        "basedamage": "12.0",
        "shieldlag": "9",
        "shieldstun": "11",
        "advantage": "-13",
        "activeframes": "13\u201436(detector)"
      },
      {
        "movename": "Up B (Peach Parasol)",
        "totalframes": "--",
        "landinglag": "26/40",
        "notes": "40 landing lag from special fall. Or 26 if still holding umbrella",
        "startup": "7/11/16/21/26/31",
        "basedamage": "3.0/1.0/4.0",
        "shieldlag": "5/4/15",
        "shieldstun": "4/2/5",
        "advantage": "--",
        "activeframes": "7/11/16/21/26/31"
      },
      {
        "movename": "Down B (Turnip Pull)",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "Turnip damage depends both on the type and how it is thrown. Z-Drop damage depends on distance fallen. Turnip chances are: Normal(88.7%), Winking(6.89%), Dot Eye(1.7%), Stitchface(1.7%), Bob-omb(0.4%), Mr. Saturn(0.6%).",
        "startup": "--",
        "basedamage": "8.3\u201427.6",
        "shieldlag": "7\u201415",
        "shieldstun": "3\u20148",
        "advantage": "--",
        "activeframes": "**"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "14/16",
        "basedamage": "2.0/6.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "20/21",
        "basedamage": "2.0/9.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "19/26",
        "basedamage": "2.0/6.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "64",
        "landinglag": "--",
        "notes": "--",
        "startup": "34/43",
        "basedamage": "1.0/7.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "21/26",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "61",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-30"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "86",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "92",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "103",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "124",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "141",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "89",
      "Gravity": "0.070",
      "Walk Speed": "0.924",
      "Run Speed": "1.595",
      "Initial Dash": "1.826",
      "Air Speed": "1.029",
      "Total Air Acceleration": "0.12",
      "SH / FH / SHFF / FHFF Frames": "41 / 57 / 28 / 40",
      "Fall Speed / Fast Fall Speed": "1.19 / 1.904",
      "Out of Shield, Up B": "7 frames",
      "Out of Shield, Neutral Air": "8 frames",
      "Out of Shield, Back Air": "9 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "pichu": {
    "ground_attacks": [
      {
        "movename": "Jab",
        "totalframes": "16",
        "landinglag": "--",
        "notes": "Transitions to next Jab as early as frame 7.",
        "startup": "2",
        "basedamage": "1.2",
        "shieldlag": "4",
        "shieldstun": "2",
        "advantage": "-12",
        "activeframes": "2\u20143"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "24",
        "landinglag": "--",
        "notes": "1.2 base recoil damage",
        "startup": "5",
        "basedamage": "8.0",
        "shieldlag": "11",
        "shieldstun": "8",
        "advantage": "-11",
        "activeframes": "5\u201412"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "23",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "5.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-10",
        "activeframes": "7\u201414"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "18",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "6.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-10",
        "activeframes": "7\u20148"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "8.0/6.0",
        "shieldlag": "7/6",
        "shieldstun": "8/6",
        "advantage": "-20",
        "activeframes": "6\u20149/10\u201415"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Charge hold is frame 13. 2.4 base recoil damage",
        "startup": "16/19/22/25/28/31",
        "basedamage": "2.0/8.0",
        "shieldlag": "7/11",
        "shieldstun": "-/6",
        "advantage": "-16",
        "activeframes": "16\u201418/19\u201421/22\u201424/25\u201427/28\u201430/31\u201433"
      },
      {
        "movename": "Up Smash",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "Ear intangibility on frame 9-11. Charge hold is frame 4.",
        "startup": "9",
        "basedamage": "14.0",
        "shieldlag": "10",
        "shieldstun": "10",
        "advantage": "-21",
        "activeframes": "9\u201411"
      },
      {
        "movename": "Down Smash",
        "totalframes": "50",
        "landinglag": "--",
        "notes": "Invulnerable on frame 7-10. Charge hold is frame 4. 1.5 base recoil damage",
        "startup": "8/11/15/19/23",
        "basedamage": "1.5/8.0",
        "shieldlag": "7/11",
        "shieldstun": "2/6",
        "advantage": "-21",
        "activeframes": "8\u20149/11\u201412/15\u201416/19\u201420/23\u201424"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "39",
        "landinglag": "7",
        "notes": "Autocancels on frame 1-2 and 35 onward",
        "startup": "3",
        "basedamage": "7.0/5.0",
        "shieldlag": "7/6",
        "shieldstun": "3/3",
        "advantage": "-4/-4",
        "activeframes": "3\u20149/10\u201427"
      },
      {
        "movename": "Forward Air",
        "totalframes": "39",
        "landinglag": "12",
        "notes": "Autocancels on frame 1-9 and 34 onward. 1.8 base recoil damage",
        "startup": "10/14/18/22",
        "basedamage": "3.5/3.5",
        "shieldlag": "8/8",
        "shieldstun": "2/2",
        "advantage": "-10/-10",
        "activeframes": "10\u201412/14\u201416/18\u201420/22\u201423"
      },
      {
        "movename": "Back Air",
        "totalframes": "54",
        "landinglag": "18",
        "notes": "Autocancels on frame 1-4 and 38 onward. 1.8 base recoil damage",
        "startup": "5/11/15/19/26/30",
        "basedamage": "2.0/2.5",
        "shieldlag": "7/7",
        "shieldstun": "2/2",
        "advantage": "-16/-16",
        "activeframes": "5\u20146/11\u201412/15\u201416/19\u201420/26\u201427/30\u201431"
      },
      {
        "movename": "Up Air",
        "totalframes": "26",
        "landinglag": "11",
        "notes": "Autocancels on frame 1-3 and 18 onward",
        "startup": "4",
        "basedamage": "4.0",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-8",
        "activeframes": "4\u20149"
      },
      {
        "movename": "Down Air",
        "totalframes": "47",
        "landinglag": "22",
        "notes": "Ear intangibility on frame 14-17. Landing hit on frame 1. Autocancels on frame 32 onward. Recoil damage is 1.8 when hitbox comes out and 0.5 on landing",
        "startup": "14",
        "basedamage": "13.0/12.0/4.0",
        "shieldlag": "14/13/8",
        "shieldstun": "5/5/5",
        "advantage": "-16",
        "activeframes": "14\u201417/18\u201426/1\u20142"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Thunderjolt)",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "0.8 base recoil damage",
        "startup": "18",
        "basedamage": "10.0/7.0\u20145.0",
        "shieldlag": "12/10\u20149",
        "shieldstun": "4/3\u20143",
        "advantage": "-29/-30",
        "activeframes": "18..."
      },
      {
        "movename": "Side B (Skull Bash)",
        "totalframes": "96/86",
        "landinglag": "--",
        "notes": "25 on hit endlag. Second total frames is from the air. Startup is 5 from charge release. 2.1 base recoil damage.",
        "startup": "17",
        "basedamage": "4.0\u201433.0",
        "shieldlag": "8\u201418",
        "shieldstun": "5\u201428",
        "advantage": "-20 to +3",
        "activeframes": "17..."
      },
      {
        "movename": "Up B (Agility)",
        "totalframes": "53/70",
        "landinglag": "24",
        "notes": "Total frames is for one/two dashes ending on the ground. 0.6 base recoil damage on first dash, and 1.4 on second. Does not have a hitbox. 1.0 base recoil damage.",
        "startup": "**",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "(No Hitbox)"
      },
      {
        "movename": "Down B (Thunder)",
        "totalframes": "86/66",
        "landinglag": "--",
        "notes": "First total frames is if the bolt misses. Invulnerable on frame 26-35 if bolt hits and incurs 4.2 base recoil damage",
        "startup": "9/26",
        "basedamage": "4.0/14.0",
        "shieldlag": "8/15",
        "shieldstun": "2/13",
        "advantage": "-27",
        "activeframes": "9/26"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "18",
        "landinglag": "--",
        "notes": "0.1 base recoil damage. Total frames includes 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.4"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "0.5 base recoil damage",
        "startup": "11/15/19/23/27",
        "basedamage": "1.5/6.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "26",
        "basedamage": "9.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "14/15",
        "basedamage": "5.0/5.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "14/19",
        "basedamage": "4.0/4.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "19/24",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-16"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "28",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-14"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "42",
        "landinglag": "10",
        "notes": "Invulnerable on frame 2-26"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "60",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "65",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "70",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "80",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "88",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      }
    ],
    "stats": {
      "Weight": "62",
      "Gravity": "0.140",
      "Walk Speed": "1.302",
      "Run Speed": "1.892",
      "Initial Dash": "1.98",
      "Air Speed": "1.029",
      "Total Air Acceleration": "0.1",
      "SH / FH / SHFF / FHFF Frames": "31 / 45 / 23 / 34",
      "Fall Speed / Fast Fall Speed": "1.9 / 2.5",
      "Out of Shield, Neutral Air": "6 frames",
      "Out of Shield, Up Air": "7 frames",
      "Out of Shield, Back Air": "8 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "pikachu": {
    "ground_attacks": [
      {
        "movename": "Jab",
        "totalframes": "17",
        "landinglag": "--",
        "notes": "Transitions to next Jab as early as frame 7",
        "startup": "2",
        "basedamage": "1.4/1.2",
        "shieldlag": "4/4",
        "shieldstun": "3/2",
        "advantage": "-12/-13",
        "activeframes": "2\u20143"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "9.0/8.0/10.0",
        "shieldlag": "11/11/12",
        "shieldstun": "9/8/10",
        "advantage": "-14/-15/-13",
        "activeframes": "6\u20148"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "26",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "5.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-13",
        "activeframes": "7\u201413"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "18",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "6.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-5",
        "activeframes": "7\u20148"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "11.0/6.0",
        "shieldlag": "13/9",
        "shieldstun": "17/10",
        "advantage": "-12",
        "activeframes": "6\u20148(9\u201412)"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "53",
        "landinglag": "--",
        "notes": "Charge hold is frame 9",
        "startup": "15",
        "basedamage": "15.0/18.0/12.0",
        "shieldlag": "15/15/13",
        "shieldstun": "9/12/8",
        "advantage": "-29",
        "activeframes": "15\u201416/17\u201419/20\u201429"
      },
      {
        "movename": "Up Smash",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "Charge hold is frame 2",
        "startup": "10",
        "basedamage": "14.0/13.0/11.0",
        "shieldlag": "10/9/8",
        "shieldstun": "10/9/8",
        "advantage": "-24",
        "activeframes": "10\u201412/13\u201414/15\u201417"
      },
      {
        "movename": "Down Smash",
        "totalframes": "65",
        "landinglag": "--",
        "notes": "Charge hold is frame 2",
        "startup": "8/11/14/17/20/23",
        "basedamage": "2.0/3.0",
        "shieldlag": "7/7",
        "shieldstun": "3/3",
        "advantage": "-39",
        "activeframes": "8\u20149/11\u201412/14\u201415/17\u201418/20\u201421"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "38",
        "landinglag": "9",
        "notes": "Autocancels on frame 37 onward",
        "startup": "3/9/15/21",
        "basedamage": "1.7/3.5",
        "shieldlag": "7/8",
        "shieldstun": "2/3",
        "advantage": "-7",
        "activeframes": "3\u20146/9\u201412/15\u201418/21\u201422"
      },
      {
        "movename": "Forward Air",
        "totalframes": "41",
        "landinglag": "12",
        "notes": "Autocancels on frame 1-4 and 32 onward",
        "startup": "11/14/17/20/23/27",
        "basedamage": "1.3/4.8",
        "shieldlag": "6/13",
        "shieldstun": "2/3",
        "advantage": "-10/-9",
        "activeframes": "11/14/17/20/23/27"
      },
      {
        "movename": "Back Air",
        "totalframes": "43",
        "landinglag": "18",
        "notes": "Landing hit on frame 1. Autocancels on frame 1-3 and 38 onward",
        "startup": "4/8/12/16/20/24",
        "basedamage": "1.0/3.5/4.0",
        "shieldlag": "4/11/5",
        "shieldstun": "2/2/5",
        "advantage": "-12",
        "activeframes": "4\u20145/8\u20149/12\u201413/16\u201417/20\u201421/24\u201425/1\u20142"
      },
      {
        "movename": "Up Air",
        "totalframes": "26",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-3 and 18 onward",
        "startup": "4",
        "basedamage": "6.0/4.0",
        "shieldlag": "6/5",
        "shieldstun": "3/3",
        "advantage": "-11/-11",
        "activeframes": "4\u20146/7\u20148"
      },
      {
        "movename": "Down Air",
        "totalframes": "47",
        "landinglag": "22",
        "notes": "Landing hit on frame 1. Autocancels on frame 38 onward",
        "startup": "14",
        "basedamage": "13.0/12.0/4.0",
        "shieldlag": "14/13/8",
        "shieldstun": "5/5/5",
        "advantage": "-16",
        "activeframes": "14\u201415/16\u201426/1\u20142"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Thunderjolt)",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "--",
        "startup": "19",
        "basedamage": "6.0/4.8",
        "shieldlag": "9/9",
        "shieldstun": "3/3",
        "advantage": "-20",
        "activeframes": "19\u201452(53\u201485/86\u2014114)"
      },
      {
        "movename": "Side B (Skull Bash)",
        "totalframes": "96/74",
        "landinglag": "--",
        "notes": "Startup is 10 on release. On hit endlag is 21 frames. On level ground, total frames is 96, 74 in the air.",
        "startup": "18/18",
        "basedamage": "10.0\u201421.4",
        "shieldlag": "8\u201413",
        "shieldstun": "10\u201419",
        "advantage": "-11 to -2",
        "activeframes": "18\u201452"
      },
      {
        "movename": "Up B (Quick Attack)",
        "totalframes": "52/66",
        "landinglag": "24",
        "notes": "Total frames assumes you end on the ground.",
        "startup": "15/30",
        "basedamage": "3.0/2.0",
        "shieldlag": "7/7",
        "shieldstun": "3/3",
        "advantage": "-33",
        "activeframes": "15\u201419/30\u2014**"
      },
      {
        "movename": "Down B (Thunder)",
        "totalframes": "86/74",
        "landinglag": "--",
        "notes": "First total frames is when the thunder bolt misses you. Invulnerable on frame 34-43 if bolt hits you.",
        "startup": "13/34",
        "basedamage": "8.0/15.0",
        "shieldlag": "11/15",
        "shieldstun": "3/14",
        "advantage": "-26",
        "activeframes": "13\u201415/**"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "16",
        "landinglag": "--",
        "notes": "Total frames includes 12 frames of hitlag",
        "startup": "1",
        "basedamage": "1.0"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "--",
        "startup": "11/15/19/23/30",
        "basedamage": "2.0/2.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "26",
        "basedamage": "9.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "14/16",
        "basedamage": "3.0/5.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "--",
        "startup": "29",
        "basedamage": "5.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "19/24",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-16"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "28",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-14"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "50",
        "landinglag": "10",
        "notes": "Invulnerable on frame 2-26"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "69",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "76",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "85",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "97",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "109",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      }
    ],
    "stats": {
      "Weight": "79",
      "Gravity": "0.095",
      "Walk Speed": "1.302",
      "Run Speed": "2.039",
      "Initial Dash": "1.98",
      "Air Speed": "0.957",
      "Total Air Acceleration": "0.1",
      "SH / FH / SHFF / FHFF Frames": "38 / 53 / 26 / 37",
      "Fall Speed / Fast Fall Speed": "1.55 / 2.48",
      "Out of Shield, Neutral Air": "6 frames",
      "Out of Shield, Back Air or Up Air": "7 frames",
      "Out of Shield, Up Smash": "10 frames",
      "Shield Grab (Grab, post-Shieldstun)": "11 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "piranha_plant": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Transitions to jab 2 on frame 5",
        "startup": "2",
        "basedamage": "2.4",
        "shieldlag": "10",
        "shieldstun": "3",
        "advantage": "-14",
        "activeframes": "2\u20143"
      },
      {
        "movename": "Jab 2",
        "totalframes": "20",
        "landinglag": "--",
        "notes": "Transitions to jab 3 as early as frame 8 and rapid as early as frame 7",
        "startup": "2",
        "basedamage": "2.2",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-15",
        "activeframes": "2\u20143"
      },
      {
        "movename": "Jab 3",
        "totalframes": "25",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "4.4",
        "shieldlag": "--",
        "shieldstun": "10",
        "advantage": "-13",
        "activeframes": "7\u20148"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "6/10/14...",
        "basedamage": "0.6",
        "shieldlag": "4",
        "shieldstun": "5",
        "advantage": "**",
        "activeframes": "6/10/14..."
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "3.4",
        "shieldlag": "--",
        "shieldstun": "15",
        "advantage": "-29",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Forward Tilt 1",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "Transitions to F-tilt 2 as early as frame 12",
        "startup": "7",
        "basedamage": "5.5",
        "shieldlag": "8",
        "shieldstun": "6",
        "advantage": "-14",
        "activeframes": "7\u20148"
      },
      {
        "movename": "Forward Tilt 2",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "6.0",
        "shieldlag": "9",
        "shieldstun": "6",
        "advantage": "-20",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "28",
        "landinglag": "--",
        "notes": "Head intangibility on frame 8-15",
        "startup": "8",
        "basedamage": "9.0/7.0",
        "shieldlag": "7/7",
        "shieldstun": "9/7",
        "advantage": "-14/-16",
        "activeframes": "8\u201415"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "28",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "6.0/7.0",
        "shieldlag": "6/7",
        "shieldstun": "6/7",
        "advantage": "-13/-12",
        "activeframes": "9\u201410"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "10.0/7.0",
        "shieldlag": "8/7",
        "shieldstun": "12/9",
        "advantage": "-28",
        "activeframes": "7\u20149/10\u201414"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "Head intangibility on frame 16-17. Charge hold is frame 5",
        "startup": "16",
        "basedamage": "15.0/19.0",
        "shieldlag": "10/13",
        "shieldstun": "10/13",
        "advantage": "-25/-22",
        "activeframes": "16\u201417"
      },
      {
        "movename": "Up Smash",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "Head intangibility on frame 12-18. Charge hold is frame 6",
        "startup": "12/16",
        "basedamage": "3.0/12.0",
        "shieldlag": "5/10",
        "shieldstun": "3/8",
        "advantage": "-27",
        "activeframes": "12\u201415/16\u201418"
      },
      {
        "movename": "Down Smash",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "Charge hold is frame 5",
        "startup": "12/16",
        "basedamage": "12.0/14.0",
        "shieldlag": "9/10",
        "shieldstun": "8/10",
        "advantage": "-24",
        "activeframes": "12\u201413/16\u201417"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "47",
        "landinglag": "15",
        "notes": "Autocancels on frame 1-4 and 40 onward",
        "startup": "8/11/14/17/18",
        "basedamage": "2.0/3.0",
        "shieldlag": "4/9",
        "shieldstun": "2/2",
        "advantage": "-13/-13",
        "activeframes": "8\u201417/18\u201419"
      },
      {
        "movename": "Forward Air",
        "totalframes": "47",
        "landinglag": "13",
        "notes": "Autocancels on frame 1-2 and 42 onward",
        "startup": "10",
        "basedamage": "9.0/11.0",
        "shieldlag": "7/8",
        "shieldstun": "4/4",
        "advantage": "-9/-9",
        "activeframes": "10\u201412"
      },
      {
        "movename": "Back Air",
        "totalframes": "61",
        "landinglag": "16",
        "notes": "Autocancels on frame 1-4 and 43 onward",
        "startup": "14",
        "basedamage": "14.5",
        "shieldlag": "10",
        "shieldstun": "5",
        "advantage": "-11",
        "activeframes": "14\u201415"
      },
      {
        "movename": "Up Air",
        "totalframes": "38",
        "landinglag": "10",
        "notes": "Autocancels on frame 22 onward",
        "startup": "7",
        "basedamage": "8.0",
        "shieldlag": "7",
        "shieldstun": "4",
        "advantage": "-6",
        "activeframes": "7\u20149"
      },
      {
        "movename": "Down Air",
        "totalframes": "44",
        "landinglag": "18",
        "notes": "Autocancels on frame 1-2 and 33 onward",
        "startup": "9",
        "basedamage": "11.0/9.0",
        "shieldlag": "8/7",
        "shieldstun": "4/4",
        "advantage": "-14/-14",
        "activeframes": "9\u201410/11\u201414"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Ptooie)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "To blow away is 41 total frames. Earliest you can blow away is on 22. Endlag is 18 if projectile makes contact. Eating projectile is 44 frames or 30 if it's close to you.",
        "startup": "9",
        "basedamage": "14.0/18.0/15.3",
        "shieldlag": "12/14/12",
        "shieldstun": "13/6/5",
        "advantage": "+7/?",
        "activeframes": "9..."
      },
      {
        "movename": "Side B (Poison Breath)",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "10 frames to enter charge state, 13 startup from charge. Lasts about ~110 frames at no charge",
        "startup": "13(+10)",
        "basedamage": "!!!",
        "shieldlag": "0",
        "shieldstun": "3",
        "advantage": "**",
        "activeframes": "23\u2014119"
      },
      {
        "movename": "Side B, Full Charge (Poison Breath, Full Charge)",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "Cloud deals damage every 4 frames at first then every 7 towards the end. Lasts about ~150 frames. Takes 95 frames to reach full charge. Takes 2 frames to cancel charge with hield.",
        "startup": "23",
        "basedamage": "!!!",
        "shieldlag": "0",
        "shieldstun": "3",
        "advantage": "**",
        "activeframes": "23\u2014156"
      },
      {
        "movename": "Up B (Piranhacopter)",
        "totalframes": "--",
        "landinglag": "20",
        "notes": "--",
        "startup": "13/16/22/28/34/ 40/46/52/58/64",
        "basedamage": "1.2/4.0",
        "shieldlag": "4/--",
        "shieldstun": "2/--",
        "advantage": "**",
        "activeframes": "13/16/22/28/34/ 40/46/52/58/64"
      },
      {
        "movename": "Down B (Long Stem Strike)",
        "totalframes": "39/49",
        "landinglag": "--",
        "notes": "Startup is 2 upon reaching target. Reaches full charge on frame 78. Takes 18 frames to enter charge state Endlag on hit is 39, or 49 if you tipped over. Endlag on whiff is 49 or 59 if you tipped over. Head intangibility begins on frame 3 of travel or frame 1 of reaching a target, whichever comes first. Pot armor begins on frame 18.",
        "startup": "2(+18)",
        "basedamage": "8.4\u201426.0",
        "shieldlag": "7\u201417",
        "shieldstun": "8\u201422",
        "advantage": "-31 to -17 (-10 more when tipped over)",
        "activeframes": "**"
      },
      {
        "movename": "Footstool Attack",
        "totalframes": "22",
        "landinglag": "--",
        "notes": "Occurs whenever Piranha Plant is footstooled while crouching.",
        "startup": "13",
        "basedamage": "4.0",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "5\u20146"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "**",
        "landinglag": "**",
        "notes": "**",
        "startup": "**",
        "basedamage": "**"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "13/14",
        "basedamage": "**"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "19",
        "basedamage": "**"
      },
      {
        "movename": "Up Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "20",
        "basedamage": "**"
      },
      {
        "movename": "Down Throw",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "20/30/31",
        "basedamage": "**"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15."
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16."
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "42",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-30."
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "58",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "66",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "69",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "81",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "88",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      }
    ],
    "stats": {
      "Weight": "112",
      "Gravity": "0.140",
      "Walk Speed": "0.76",
      "Run Speed": "1.72",
      "Initial Dash": "1.82",
      "Air Speed": "1.0",
      "Total Air Acceleration": "0.06",
      "SH / FH / SHFF / FHFF Frames": "31 / 45 / 23 / 34",
      "Fall Speed / Fast Fall Speed": "1.95 / 2.73",
      "Out of Shield, Up AIr": "10 frames",
      "Out of Shield, Neutral Air": "11 frames",
      "Out of Shield, Down Air or Up Smash or Neutral B(Air)": "12 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "pit": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "26",
        "landinglag": "--",
        "notes": "Transitions to jab 2 as early as frame 8",
        "startup": "4",
        "basedamage": "2.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-18",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Jab 2",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Transitions to jab 3 as early as frame 8. To rapid jab as early as 7",
        "startup": "5",
        "basedamage": "2.0",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-21",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Jab 3",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "3",
        "basedamage": "4.0",
        "shieldlag": "11",
        "shieldstun": "5",
        "advantage": "-23",
        "activeframes": "3"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "6/8/10...",
        "basedamage": "0.5",
        "shieldlag": "4",
        "shieldstun": "3",
        "advantage": "--",
        "activeframes": "6/8/10..."
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "2.0",
        "shieldlag": "9",
        "shieldstun": "3",
        "advantage": "-40",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "7.0/10.0",
        "shieldlag": "7/10",
        "shieldstun": "7/10",
        "advantage": "-22/-19",
        "activeframes": "10\u201414"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "6/15",
        "basedamage": "4.0/5.0",
        "shieldlag": "5/6",
        "shieldstun": "5/6",
        "advantage": "-23/-13",
        "activeframes": "6\u20148/15\u201416"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "25",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "6.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-13",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "11.0",
        "shieldlag": "8",
        "shieldstun": "14",
        "advantage": "-17",
        "activeframes": "7\u20149"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "54",
        "landinglag": "--",
        "notes": "Charge hold is frame 3",
        "startup": "10/21",
        "basedamage": "5.0/10.0",
        "shieldlag": "6/8",
        "shieldstun": "4/7",
        "advantage": "-26",
        "activeframes": "10/21\u201422"
      },
      {
        "movename": "Up Smash",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "Charge hold is frame 2",
        "startup": "6/7/10/18",
        "basedamage": "3.0/*/2.0/8.0",
        "shieldlag": "5/*/4/9",
        "shieldstun": "3/*/3/6",
        "advantage": "-27",
        "activeframes": "6/7/10/18"
      },
      {
        "movename": "Down Smash",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "Charge hold is frame 2",
        "startup": "5/18",
        "basedamage": "12.0/10.0",
        "shieldlag": "9/8",
        "shieldstun": "8/7",
        "advantage": "-27/-28/-14/-15",
        "activeframes": "5\u20146/18\u201420"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "54",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-3 and 30 onward",
        "startup": "4/7/10/13/16/19/22/25",
        "basedamage": "0.7/4.5",
        "shieldlag": "4/10",
        "shieldstun": "2/3",
        "advantage": "-12/-11",
        "activeframes": "4\u20145/7\u20148/10\u201411/13\u201414/16\u201417/19\u201420/22\u201423/25"
      },
      {
        "movename": "Forward Air",
        "totalframes": "46",
        "landinglag": "12",
        "notes": "Autocancels on frame 28 onward",
        "startup": "11/14/18",
        "basedamage": "2.5/6.0",
        "shieldlag": "5/14",
        "shieldstun": "2/3",
        "advantage": "-10/-9",
        "activeframes": "11\u201412/14\u201415/18\u201419"
      },
      {
        "movename": "Back Air",
        "totalframes": "40",
        "landinglag": "9",
        "notes": "Autocancels on frame 28 onward",
        "startup": "10",
        "basedamage": "8.0/12.0",
        "shieldlag": "8/11",
        "shieldstun": "4/5",
        "advantage": "-5/-4",
        "activeframes": "10\u201412"
      },
      {
        "movename": "Up Air",
        "totalframes": "49",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-4 and 37 onward",
        "startup": "12/15/18/21/24",
        "basedamage": "1.5/5.0",
        "shieldlag": "4/11",
        "shieldstun": "2/3",
        "advantage": "-12/-11",
        "activeframes": "12\u201413/15\u201416/18\u201419/21\u201422/24\u201425"
      },
      {
        "movename": "Down Air",
        "totalframes": "36",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-6 and 36 onward",
        "startup": "10",
        "basedamage": "10.0",
        "shieldlag": "8",
        "shieldstun": "4",
        "advantage": "-10",
        "activeframes": "10/11\u201412"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Palutena's Bow)",
        "totalframes": "46\u2014106",
        "landinglag": "--",
        "notes": "Total frames reduced by 3 in the air.",
        "startup": "16\u201476",
        "basedamage": "3.2\u20148.6",
        "shieldlag": "5\u20147",
        "shieldstun": "2\u20143",
        "advantage": "-23 to -20",
        "activeframes": "**"
      },
      {
        "movename": "Side B (Upperdash Arm)",
        "totalframes": "79/49",
        "landinglag": "--",
        "notes": "Startup is 2 upon reaching a target. 47 endlag on the swing. Super Armor begins on frame 11 and ends on the frame he begins swing.",
        "startup": "18",
        "basedamage": "11.0",
        "shieldlag": "15",
        "shieldstun": "10",
        "advantage": "-37",
        "activeframes": "16\u201435(detector)"
      },
      {
        "movename": "Side B, Air (Upperdash Arm, Air)",
        "totalframes": "104/51",
        "landinglag": "30",
        "notes": "Startup is 2 upon reaching a target. 55 endlag on the swing if you don't land",
        "startup": "21",
        "basedamage": "9.0",
        "shieldlag": "15",
        "shieldstun": "9",
        "advantage": "-40",
        "activeframes": "19\u201435(detector)"
      },
      {
        "movename": "Up B (Power of Flight)",
        "totalframes": "--",
        "landinglag": "40",
        "notes": "invulnerable on frame 9-19, 15-19 in the air.",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "--"
      },
      {
        "movename": "Down B (Guardian Orbitars)",
        "totalframes": "49\u2014129",
        "landinglag": "--",
        "notes": "Reflects/blocks as early as frame 7. 23 endlag on release.",
        "startup": "7 (Start of Reflect)",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "--"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "--",
        "startup": "12/14",
        "basedamage": "6.0/4.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "29",
        "basedamage": "8.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "13/15",
        "basedamage": "4.0/7.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "13/16",
        "basedamage": "2.0/4.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "52",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-29"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "73",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "82",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "89",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "110",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "119",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "96",
      "Gravity": "0.081",
      "Walk Speed": "1.259",
      "Run Speed": "1.828",
      "Initial Dash": "2.09",
      "Air Speed": "0.935",
      "Total Air Acceleration": "0.075",
      "SH / FH / SHFF / FHFF Frames": "38 / 52 / 26 / 37",
      "Fall Speed / Fast Fall Speed": "1.48 / 2.368",
      "Out of Shield, Up Smash": "6 frames",
      "Out of Shield, Neutral Air": "7 frames",
      "Out of Shield, Down Air": "13 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "pt_squirtle": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "16",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 5",
        "startup": "2",
        "basedamage": "2.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-11",
        "activeframes": "2\u20143"
      },
      {
        "movename": "Jab 2",
        "totalframes": "24",
        "landinglag": "--",
        "notes": "Transitions to Jab 3 as early as frame 10",
        "startup": "4",
        "basedamage": "1.5",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-17",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Jab 3",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "4.0",
        "shieldlag": "11",
        "shieldstun": "5",
        "advantage": "-21",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "18",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "5.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-6",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "5.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-8",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "9.0",
        "shieldlag": "7",
        "shieldstun": "9",
        "advantage": "-12",
        "activeframes": "8\u201413"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "8.0/7.0",
        "shieldlag": "7/7",
        "shieldstun": "11/7",
        "advantage": "-16",
        "activeframes": "8\u201411/12\u201417"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Charge hold is frame 5",
        "startup": "20",
        "basedamage": "15.0",
        "shieldlag": "12",
        "shieldstun": "10",
        "advantage": "-19",
        "activeframes": "20\u201421"
      },
      {
        "movename": "Up Smash",
        "totalframes": "65",
        "landinglag": "--",
        "notes": "Charge hold is frame 5",
        "startup": "19/21",
        "basedamage": "3.0/13.0/10.0",
        "shieldlag": "5/9/9",
        "shieldstun": "3/9/8",
        "advantage": "-35",
        "activeframes": "19/21\u201422/(22\u201423/24\u201425)"
      },
      {
        "movename": "Down Smash",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "Charge hold is frame 6",
        "startup": "18",
        "basedamage": "13.0",
        "shieldlag": "9",
        "shieldstun": "9",
        "advantage": "-13",
        "activeframes": "18\u201419/24\u201425"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "41",
        "landinglag": "8",
        "notes": "Autocancels on frame 1-3 and 35 onward",
        "startup": "4",
        "basedamage": "10.0/7.0",
        "shieldlag": "8/7",
        "shieldstun": "4/3",
        "advantage": "-4/-5",
        "activeframes": "4\u20146/7\u201426"
      },
      {
        "movename": "Forward Air",
        "totalframes": "35",
        "landinglag": "6",
        "notes": "Autocancels on frame 1-4 and 35 onward",
        "startup": "5",
        "basedamage": "7.0/6.0",
        "shieldlag": "7/6",
        "shieldstun": "3/3",
        "advantage": "-3/-3",
        "activeframes": "5\u20146/7\u201414"
      },
      {
        "movename": "Back Air",
        "totalframes": "35",
        "landinglag": "18",
        "notes": "Landing hit on frame 1. Autocancels on frame 1-4 and 22 onward",
        "startup": "5/7/9/11/13/15",
        "basedamage": "1.0/6.0/2.0",
        "shieldlag": "4/7/9",
        "shieldstun": "2/3/3",
        "advantage": "-15",
        "activeframes": "5/7/9/11/13/15\u201416"
      },
      {
        "movename": "Up Air",
        "totalframes": "29",
        "landinglag": "6",
        "notes": "Autocancels on frame 20 onward",
        "startup": "5",
        "basedamage": "7.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-3",
        "activeframes": "5\u20149"
      },
      {
        "movename": "Down Air",
        "totalframes": "44",
        "landinglag": "16",
        "notes": "Autocancels on frame 1-5 and 35 onward",
        "startup": "6/9/12/15/18/22",
        "basedamage": "1.5/4.0",
        "shieldlag": "4/11",
        "shieldstun": "2/3",
        "advantage": "-14/-13",
        "activeframes": "6/9/12/15/18/22"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Watergun)",
        "totalframes": "63",
        "landinglag": "--",
        "notes": "From a charging state, startup is 7 and total frames is 44. Takes 64 frames to fully charge.",
        "startup": "26",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "24\u2014**"
      },
      {
        "movename": "Side B (Withdraw)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "26 endlag on hit. 34 endlag to cancel the move manually. Armor begins on 22. Getting footstooled places Squirtle in a ~155 frame helpless animation.",
        "startup": "23",
        "basedamage": "13.0\u201413.9",
        "shieldlag": "7",
        "shieldstun": "8",
        "advantage": "-18",
        "activeframes": "22\u201441/22\u201461"
      },
      {
        "movename": "Up B (Waterfall)",
        "totalframes": "--",
        "landinglag": "30",
        "notes": "--",
        "startup": "9/14/19/24/29/34/39/43",
        "basedamage": "1.3/3.0",
        "shieldlag": "4/5",
        "shieldstun": "3/4",
        "advantage": "--",
        "activeframes": "9/14/19/24/29/34/39/43\u201444"
      },
      {
        "movename": "Down B (Pokemon Change)",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "Invulnerable on frame 1-25. ~140 frame period before you can change again.",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "15",
        "landinglag": "--",
        "notes": "Total frames includes 11 frames of hitlag",
        "startup": "1",
        "basedamage": "1.0"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "11/13",
        "basedamage": "2.0/6.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "27",
        "basedamage": "8.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "16/18",
        "basedamage": "2.0/5.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "46",
        "landinglag": "--",
        "notes": "--",
        "startup": "22/30",
        "basedamage": "2.0/5.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "19/24",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-16"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "28",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-14"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "53",
        "landinglag": "10",
        "notes": "Invulnerable on frame 2-26"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "79",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "87",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "90",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "105",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "114",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      }
    ],
    "stats": {
      "Weight": "75",
      "Gravity": "0.128",
      "Walk Speed": "1.281",
      "Run Speed": "1.76",
      "Initial Dash": "1.936",
      "Air Speed": "1.01",
      "Total Air Acceleration": "0.105",
      "SH / FH / SHFF / FHFF Frames": "34 / 51 / 24 / 37",
      "Fall Speed / Fast Fall Speed": "1.35 / 2.16",
      "Out of Shield, Neutral Air": "7 frames",
      "Out of Shield, Forward Air or Back Air or Up Air": "8 frames",
      "Out of Shield, Up B or Down Air": "9 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "pt_ivysaur": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 10.",
        "startup": "7",
        "basedamage": "2.0",
        "shieldlag": "6",
        "shieldstun": "3",
        "advantage": "-17",
        "activeframes": "7\u20148"
      },
      {
        "movename": "Jab 2",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "Transitions to Rapid jab as early as frame 10.",
        "startup": "5",
        "basedamage": "2.0",
        "shieldlag": "4",
        "shieldstun": "3",
        "advantage": "-19",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "4/7/10...",
        "basedamage": "0.5",
        "shieldlag": "4",
        "shieldstun": "3",
        "advantage": "--",
        "activeframes": "4/7/10..."
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "2.0",
        "shieldlag": "9",
        "shieldstun": "3",
        "advantage": "-32",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "10/12/14/16/18/20/22",
        "basedamage": "1.5/2.0",
        "shieldlag": "4/10",
        "shieldstun": "3/3",
        "advantage": "-20",
        "activeframes": "10/12/14/16/18/20/22"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "7.0",
        "shieldlag": "7",
        "shieldstun": "7",
        "advantage": "-18",
        "activeframes": "7\u201413"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "5.5",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-21",
        "activeframes": "4\u20146"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "12.0/10.0",
        "shieldlag": "9/8",
        "shieldstun": "11/10",
        "advantage": "-27",
        "activeframes": "4\u201411/12\u201419"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "59",
        "landinglag": "--",
        "notes": "Charge hold is frame 9",
        "startup": "15",
        "basedamage": "16.0/14.0",
        "shieldlag": "10/10",
        "shieldstun": "11/10",
        "advantage": "-33",
        "activeframes": "15\u201418/19\u201420"
      },
      {
        "movename": "Up Smash",
        "totalframes": "59",
        "landinglag": "--",
        "notes": "Charge hold is frame 7",
        "startup": "26",
        "basedamage": "17.0",
        "shieldlag": "11",
        "shieldstun": "11",
        "advantage": "-21",
        "activeframes": "26\u201429"
      },
      {
        "movename": "Down Smash",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "Charge hold is frame 6",
        "startup": "13",
        "basedamage": "8.0/10.0/12.0",
        "shieldlag": "7/8/9",
        "shieldstun": "6/7/8",
        "advantage": "-26/-25/-24",
        "activeframes": "13\u201414"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "41",
        "landinglag": "16",
        "notes": "Autocancels on frame 1-3 and 41 onward",
        "startup": "7/10/13/16/19/22/25/28",
        "basedamage": "1.0/2.0",
        "shieldlag": "4/9",
        "shieldstun": "2/2",
        "advantage": "-14/-14",
        "activeframes": "7\u201426/28\u201429"
      },
      {
        "movename": "Forward Air",
        "totalframes": "48",
        "landinglag": "13",
        "notes": "Autocancels on frame 1-2 and 39 onward",
        "startup": "14",
        "basedamage": "12.0",
        "shieldlag": "9",
        "shieldstun": "5",
        "advantage": "-8",
        "activeframes": "14\u201418"
      },
      {
        "movename": "Back Air",
        "totalframes": "43",
        "landinglag": "7",
        "notes": "Autocancels on frame 1-6 and 43 onward",
        "startup": "7/13",
        "basedamage": "3.0/6.0",
        "shieldlag": "5/7",
        "shieldstun": "2/3",
        "advantage": "-5/-4",
        "activeframes": "7\u20149/13\u201415"
      },
      {
        "movename": "Up Air",
        "totalframes": "51",
        "landinglag": "11",
        "notes": "Autocancels on frame 41 onward",
        "startup": "12",
        "basedamage": "15.0",
        "shieldlag": "10",
        "shieldstun": "5",
        "advantage": "-6",
        "activeframes": "12\u201413"
      },
      {
        "movename": "Down Air",
        "totalframes": "63",
        "landinglag": "13",
        "notes": "Autocancels on frame 1-2 and 52 onward",
        "startup": "11",
        "basedamage": "10.0",
        "shieldlag": "8",
        "shieldstun": "4",
        "advantage": "-9",
        "activeframes": "11\u201412"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Bullet Seed)",
        "totalframes": "79",
        "landinglag": "--",
        "notes": "Startup is initial launcher and then the timing each bullet spawns, not necessarily when they impact. Numbers refer to minimum use.",
        "startup": "7/13/20/26/32/38...",
        "basedamage": "3.0/1.5/1.3/3.0",
        "shieldlag": "5/4/4/5",
        "shieldstun": "4/2/2/2",
        "advantage": "-34",
        "activeframes": "7\u20148/13/20/26/32/38..."
      },
      {
        "movename": "Side B (Razor Leaf)",
        "totalframes": "46",
        "landinglag": "--",
        "notes": "--",
        "startup": "22",
        "basedamage": "8.0/6.0/4.0",
        "shieldlag": "7/6/5",
        "shieldstun": "3/3/2",
        "advantage": "-14",
        "activeframes": "22\u201433/34\u201452/53\u201471"
      },
      {
        "movename": "Up B (Vinewhip)",
        "totalframes": "--",
        "landinglag": "47",
        "notes": "Tethers on frame 13. Does not induce special fall.",
        "startup": "15",
        "basedamage": "11.0/13.0",
        "shieldlag": "8/9",
        "shieldstun": "10/12",
        "advantage": "-22/-20",
        "activeframes": "15\u201417"
      },
      {
        "movename": "Down B (Pokemon Change)",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "Invulnerable on frame 1-25. ~140 frame period before you can change again.",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "16/17",
        "basedamage": "5.0/5.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "20",
        "basedamage": "12.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "20/21",
        "basedamage": "4.0/5.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "19",
        "basedamage": "7.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "21/26",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "56",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-29"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "76",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "84",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "93",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "110",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "124",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "96",
      "Gravity": "0.082",
      "Walk Speed": "1.103",
      "Run Speed": "1.595",
      "Initial Dash": "1.903",
      "Air Speed": "0.998",
      "Total Air Acceleration": "0.095",
      "SH / FH / SHFF / FHFF Frames": "39 / 54 / 27 / 38",
      "Fall Speed / Fast Fall Speed": "1.38 / 2.208",
      "Out of Shield, Neutral Air or Back Air or Neutral B(Air)": "10 frames",
      "Out of Shield, Down Air": "14 frames",
      "Out of Shield, Up Air or Up B or Down Tilt": "15 frames",
      "Shield Grab (Grab, post-Shieldstun)": "17 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "pt_charizard": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "22",
        "landinglag": "--",
        "notes": "Transitions to jab 2 as early as frame 7",
        "startup": "4",
        "basedamage": "2.5",
        "shieldlag": "7",
        "shieldstun": "4",
        "advantage": "-14",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Jab 2",
        "totalframes": "25",
        "landinglag": "--",
        "notes": "Transitions to jab 3 as early as frame 8",
        "startup": "5",
        "basedamage": "2.5",
        "shieldlag": "6",
        "shieldstun": "4",
        "advantage": "-16",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Jab 3",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "5.0",
        "shieldlag": "9",
        "shieldstun": "6",
        "advantage": "-20",
        "activeframes": "7\u20148"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "7.0/11.0",
        "shieldlag": "7/8",
        "shieldstun": "7/10",
        "advantage": "-18/-15",
        "activeframes": "12\u201413"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "8.0",
        "shieldlag": "7",
        "shieldstun": "8",
        "advantage": "-16",
        "activeframes": "9\u201412"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "10.0",
        "shieldlag": "10",
        "shieldstun": "10",
        "advantage": "-11",
        "activeframes": "9\u201410"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "13.0/10.0",
        "shieldlag": "9/8",
        "shieldstun": "17/14",
        "advantage": "-12",
        "activeframes": "10\u201412/13\u201420"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "69",
        "landinglag": "--",
        "notes": "Invulnerable on frame 20-24. Charge hold is frame 15",
        "startup": "22",
        "basedamage": "19.0/16.4",
        "shieldlag": "15/10",
        "shieldstun": "11/10",
        "advantage": "-36/-37",
        "activeframes": "22/23\u201424"
      },
      {
        "movename": "Up Smash",
        "totalframes": "46",
        "landinglag": "--",
        "notes": "Charge hold is frame 2",
        "startup": "6/14",
        "basedamage": "5.0/11.0",
        "shieldlag": "6/8",
        "shieldstun": "4/8",
        "advantage": "-24",
        "activeframes": "(6/7\u20149) / 14\u201419"
      },
      {
        "movename": "Down Smash",
        "totalframes": "60",
        "landinglag": "--",
        "notes": "Charge hold is frame 1",
        "startup": "14",
        "basedamage": "16.0",
        "shieldlag": "10",
        "shieldstun": "11",
        "advantage": "-35",
        "activeframes": "14\u201416"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "39",
        "landinglag": "10",
        "notes": "Autocancels on frame 1-3 and 31 onward",
        "startup": "8",
        "basedamage": "9.0/12.0",
        "shieldlag": "7/9",
        "shieldstun": "4/5",
        "advantage": "-6/-5",
        "activeframes": "8\u201420"
      },
      {
        "movename": "Forward Air",
        "totalframes": "45",
        "landinglag": "19",
        "notes": "Autocancels on frame 1-4 and 35 onward",
        "startup": "8",
        "basedamage": "12.0/13.0",
        "shieldlag": "9/9",
        "shieldstun": "5/5",
        "advantage": "-14/-14",
        "activeframes": "8\u20149/10\u201411"
      },
      {
        "movename": "Back Air",
        "totalframes": "45",
        "landinglag": "20",
        "notes": "Autocancels on frame 1-3 and 44 onward",
        "startup": "14",
        "basedamage": "11.0/14.0/16.0",
        "shieldlag": "8/10/10",
        "shieldstun": "4/5/6",
        "advantage": "-16/-15/-14",
        "activeframes": "14/15\u201416"
      },
      {
        "movename": "Up Air",
        "totalframes": "45",
        "landinglag": "13",
        "notes": "Head intangibility on frame 11-15. Autocancels on frame 1-3 and 38 onward",
        "startup": "12",
        "basedamage": "13.0",
        "shieldlag": "9",
        "shieldstun": "5",
        "advantage": "-8",
        "activeframes": "12\u201415"
      },
      {
        "movename": "Down Air",
        "totalframes": "51",
        "landinglag": "21",
        "notes": "Autocancels on frame 1-5 and 42 onward",
        "startup": "18",
        "basedamage": "14.0/8.0",
        "shieldlag": "10/7",
        "shieldstun": "5/4",
        "advantage": "-16/-17",
        "activeframes": "18\u201421/22\u201425"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Flamethrower)",
        "totalframes": "70",
        "landinglag": "--",
        "notes": "Startup and total frames are the minimum. Endlag is 27 from extended use",
        "startup": "19/26/33/40",
        "basedamage": "2.0/1.0",
        "shieldlag": "4/4",
        "shieldstun": "2/2",
        "advantage": "-24",
        "activeframes": "19\u201422/26\u201429/33\u201436/40\u201443"
      },
      {
        "movename": "Side B (Flare Blitz)",
        "totalframes": "101",
        "landinglag": "--",
        "notes": "58 endlag on hit if nothing catches your fall first. Lands on 48 on level ground and can input a wakeup move on 73. Total frames is when you don't hit anything. Explosion is frames 2\u20144 after connecting.",
        "startup": "23/24",
        "basedamage": "6.0/18.0",
        "shieldlag": "6/15",
        "shieldstun": "-/6",
        "advantage": "-52/-66",
        "activeframes": "23\u201452"
      },
      {
        "movename": "Up B (Fly)",
        "totalframes": "--",
        "landinglag": "30",
        "notes": "Super armor on frame 4-15",
        "startup": "9/16/19/22/25/27",
        "basedamage": "5.0/2.0/4.0",
        "shieldlag": "6/4/5",
        "shieldstun": "6/3/5",
        "advantage": "--",
        "activeframes": "9\u201410/16/19/22/25/27\u201428"
      },
      {
        "movename": "Down B (Pokemon Change)",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "Invulnerable on frame 1-25. ~140 frame period before you can change again.",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "21",
        "landinglag": "--",
        "notes": "Total frames includes 15 frames of hitlag",
        "startup": "2",
        "basedamage": "1.6"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "59",
        "landinglag": "--",
        "notes": "--",
        "startup": "27",
        "basedamage": "10.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "26",
        "basedamage": "10.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "79",
        "landinglag": "--",
        "notes": "--",
        "startup": "52/58",
        "basedamage": "8.0/3.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "76",
        "landinglag": "--",
        "notes": "--",
        "startup": "24/30/36/42/48/55",
        "basedamage": "1.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "23/28",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-18"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-16"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-17"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "49",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-30"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "70",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-22"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "78",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-22"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "85",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-22"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "99",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-22"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "105",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-22"
      }
    ],
    "stats": {
      "Weight": "116",
      "Gravity": "0.110",
      "Walk Speed": "1.187",
      "Run Speed": "2.2",
      "Initial Dash": "2.288",
      "Air Speed": "1.103",
      "Total Air Acceleration": "0.06",
      "SH / FH / SHFF / FHFF Frames": "33 / 48 / 24 / 34",
      "Fall Speed / Fast Fall Speed": "1.52 / 2.432",
      "Out of Shield, Up Smash": "6 frames",
      "Out of Shield, Up B": "9 frames",
      "Out of Shield, Neutral Air or Forward Air": "11 frames",
      "Shield Grab (Grab, post-Shieldstun)": "12 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "richter": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 on frame 11. Transitions to Whip dangle from 9.",
        "startup": "5",
        "basedamage": "2.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-21",
        "activeframes": "5"
      },
      {
        "movename": "Jab 2",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Transitions to rapid jab on frame 10.",
        "startup": "3",
        "basedamage": "2.0",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-23",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "9/12/15...",
        "basedamage": "0.5",
        "shieldlag": "4",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "3",
        "basedamage": "2.5",
        "shieldlag": "10",
        "shieldstun": "4",
        "advantage": "-37",
        "activeframes": "**"
      },
      {
        "movename": "Whip Dangle",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "Can initiate from Jab, F-Tilt, and all three smash attacks. 19 lag from putting it away.",
        "startup": "--",
        "basedamage": "1.0/1.5",
        "shieldlag": "0/0",
        "shieldstun": "3/3",
        "advantage": "**",
        "activeframes": "**"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "10.0/12.0",
        "shieldlag": "8/9",
        "shieldstun": "10/11",
        "advantage": "-8/-7",
        "activeframes": "12\u201413"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "10.0",
        "shieldlag": "8",
        "shieldstun": "10",
        "advantage": "-17",
        "activeframes": "10\u201422"
      },
      {
        "movename": "Down Tilt 1",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "Can cancel hitlag from first hit with second.",
        "startup": "7",
        "basedamage": "5.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-31",
        "activeframes": "7\u201423"
      },
      {
        "movename": "Down Tilt 2",
        "totalframes": "57/43",
        "landinglag": "--",
        "notes": "Total frames is 57 on level ground. 43 if you go over an edge.",
        "startup": "8",
        "basedamage": "7.0/3.5",
        "shieldlag": "8/5",
        "shieldstun": "7/4",
        "advantage": "-42/-28",
        "activeframes": "8\u201428"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "54",
        "landinglag": "--",
        "notes": "--",
        "startup": "10/13/16/19/22/24",
        "basedamage": "1.7/3.5",
        "shieldlag": "4/5",
        "shieldstun": "-/4",
        "advantage": "-26",
        "activeframes": "10/13/16/19/22/24"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "62",
        "landinglag": "--",
        "notes": "Charge hold is frame 5",
        "startup": "24",
        "basedamage": "14.0/18.0",
        "shieldlag": "11/13",
        "shieldstun": "10/12",
        "advantage": "-28/-26",
        "activeframes": "24\u201425"
      },
      {
        "movename": "Up Smash",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "Charge hold is frame 2",
        "startup": "18",
        "basedamage": "14.0/16.0",
        "shieldlag": "10/10",
        "shieldstun": "10/11",
        "advantage": "-27/-26",
        "activeframes": "18\u201420"
      },
      {
        "movename": "Down Smash",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "Charge hold is frame 2",
        "startup": "14/20",
        "basedamage": "**",
        "shieldlag": "12.0/16.0",
        "shieldstun": "9/10",
        "advantage": "Chain/Ball",
        "activeframes": "14\u201415/20\u201421"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "42",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-6 and 36 onward",
        "startup": "8/11/14/17/20/23/26",
        "basedamage": "1.0/4.0",
        "shieldlag": "4/5",
        "shieldstun": "2/3",
        "advantage": "-12/-11",
        "activeframes": "8/11/14/17/20/23/26"
      },
      {
        "movename": "Forward Air",
        "totalframes": "39",
        "landinglag": "10",
        "notes": "Tethers on frame 13. Autocancels on frame 29 onward",
        "startup": "14",
        "basedamage": "10.0/12.0/2.0",
        "shieldlag": "8/9/4",
        "shieldstun": "4/5/2",
        "advantage": "-6/-5/-8",
        "activeframes": "14"
      },
      {
        "movename": "Back Air",
        "totalframes": "39",
        "landinglag": "10",
        "notes": "Tethers on frame 13. Autocancels on frame 28 onward",
        "startup": "14",
        "basedamage": "10.0/12.0/2.0",
        "shieldlag": "8/9/4",
        "shieldstun": "4/5/2",
        "advantage": "-6/-5/-8",
        "activeframes": "14\u201415"
      },
      {
        "movename": "Up Air",
        "totalframes": "39",
        "landinglag": "10",
        "notes": "Tethers on frame 13. Autocancels on frame 1-11 and 28 onward",
        "startup": "14",
        "basedamage": "10.0/12.0/2.0",
        "shieldlag": "8/9/4",
        "shieldstun": "4/5/2",
        "advantage": "-6/-5/-8",
        "activeframes": "14\u201416"
      },
      {
        "movename": "Down Air",
        "totalframes": "48",
        "landinglag": "26",
        "notes": "A hit results in 26 frames of endlag. Autocancels on frame 1-3 and 47 onward",
        "startup": "13",
        "basedamage": "12.0/7.0",
        "shieldlag": "10/7",
        "shieldstun": "5/3",
        "advantage": "-21/-23",
        "activeframes": "13\u201414/15\u201436"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Axe)",
        "totalframes": "66",
        "landinglag": "--",
        "notes": "--",
        "startup": "30",
        "basedamage": "15.0",
        "shieldlag": "15",
        "shieldstun": "15",
        "advantage": "-6",
        "activeframes": "30\u201497"
      },
      {
        "movename": "Side B (Cross)",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "9 frame animation of catching the cross if no other action is being performed.",
        "startup": "19",
        "basedamage": "8.0/6.0/5.0",
        "shieldlag": "7/7/6",
        "shieldstun": "3/3/3",
        "advantage": "-15",
        "activeframes": "19\u201464"
      },
      {
        "movename": "Up B (Uppercut)",
        "totalframes": "--",
        "landinglag": "26",
        "notes": "--",
        "startup": "6/9/12/15/18/21",
        "basedamage": "2.0/1.5/6.0",
        "shieldlag": "6/4/6",
        "shieldstun": "-/3/6",
        "advantage": "**",
        "activeframes": "6/9/12/15/18/21"
      },
      {
        "movename": "Down B (Holy Water)",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "Lands on level ground at frame 32 if nothing is in the way.",
        "startup": "18",
        "basedamage": "2.0\u20142.9",
        "shieldlag": "4",
        "shieldstun": "2",
        "advantage": "**",
        "activeframes": "18..."
      },
      {
        "movename": "Holy Water Explosion",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "Only explodes on contact with the ground or a wall. Bounces up off shields and hitboxes but does not disappear. Richter's explosion is Fire-type damage, Richter's explosion is Aura-type damage.",
        "startup": "1/4/7/15/23/31/39/47/55",
        "basedamage": "1.4",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "1/4/7/15/23/31/39/47/55"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "14",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "18",
        "landinglag": "**",
        "notes": "Total frames includes 13 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "24",
        "basedamage": "7.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "18",
        "basedamage": "7.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "46",
        "landinglag": "--",
        "notes": "--",
        "startup": "25/26",
        "basedamage": "6.0/4.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "--",
        "startup": "33",
        "basedamage": "8.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "21/26",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15."
      },
      {
        "movename": "Backward Roll",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16."
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "46",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-29."
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "62",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "69",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "76",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "90",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "104",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      }
    ],
    "stats": {
      "Weight": "107",
      "Gravity": "0.085",
      "Walk Speed": "0.76",
      "Run Speed": "1.52",
      "Initial Dash": "1.73",
      "Air Speed": "0.94",
      "Total Air Acceleration": "0.03",
      "SH / FH / SHFF / FHFF Frames": "41 / 51 / 29 / 36",
      "Fall Speed / Fast Fall Speed": "1.85 / 2.96",
      "Out of Shield, Up B": "6 frames",
      "Out of Shield, Neutral Air": "11 frames",
      "Out of Shield, Jab": "16 frames",
      "Shield Grab (Grab, post-Shieldstun)": "14 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "ridley": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "23",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 on frame 7",
        "startup": "4",
        "basedamage": "2.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-16",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Jab 2",
        "totalframes": "26",
        "landinglag": "--",
        "notes": "Transitions to Jab 3 on frame 10. Rapid on frame 9.",
        "startup": "5",
        "basedamage": "1.5",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-18",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Jab 3",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "5.0",
        "shieldlag": "11",
        "shieldstun": "6",
        "advantage": "-25",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "4/7/10...",
        "basedamage": "0.7",
        "shieldlag": "4",
        "shieldstun": "--",
        "advantage": "**",
        "activeframes": "**"
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "2.0",
        "shieldlag": "9",
        "shieldstun": "3",
        "advantage": "-38",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "10.0/13.0",
        "shieldlag": "8/11",
        "shieldstun": "10/12",
        "advantage": "-12/-10",
        "activeframes": "10\u201411"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Head and arm intangibility on frame 8-9. Wing intangibility on frame 8-12",
        "startup": "8",
        "basedamage": "7.0/9.0",
        "shieldlag": "7/7",
        "shieldstun": "7/9",
        "advantage": "-14/-12",
        "activeframes": "8\u201412"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "6.0/9.0",
        "shieldlag": "6/7",
        "shieldstun": "6/9",
        "advantage": "-15/-12",
        "activeframes": "9\u201411"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "12.0",
        "shieldlag": "10",
        "shieldstun": "11",
        "advantage": "-16",
        "activeframes": "12\u201413"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "53",
        "landinglag": "--",
        "notes": "Charge hold is frame 5",
        "startup": "18",
        "basedamage": "20.0",
        "shieldlag": "11",
        "shieldstun": "13",
        "advantage": "-22",
        "activeframes": "18\u201421"
      },
      {
        "movename": "Up Smash",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "Leg intangibility on frame 12-17. Charge hold is frame 6",
        "startup": "12",
        "basedamage": "17.0",
        "shieldlag": "10",
        "shieldstun": "11",
        "advantage": "-24",
        "activeframes": "12\u201417"
      },
      {
        "movename": "Down Smash",
        "totalframes": "57",
        "landinglag": "--",
        "notes": "Charge hold is frame 2",
        "startup": "24",
        "basedamage": "16.0",
        "shieldlag": "10",
        "shieldstun": "11",
        "advantage": "-22",
        "activeframes": "24\u201427"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "39",
        "landinglag": "12",
        "notes": "Autocancels on frame 1-2 and 28 onward",
        "startup": "8",
        "basedamage": "(9.0/12.0/9.0)/(5.0/8.0/5.0)",
        "shieldlag": "7/10/6",
        "shieldstun": "4/5/3",
        "advantage": "-8/-7/-9",
        "activeframes": "8\u201414/15\u201420"
      },
      {
        "movename": "Forward Air",
        "totalframes": "41",
        "landinglag": "16",
        "notes": "Autocancels on frame 1-2 and 43 onward",
        "startup": "10/13/16",
        "basedamage": "(3.0/5.0)/(5.0/7.0)",
        "shieldlag": "(6/6)/(6/8)",
        "shieldstun": "(2/3)/(3/3)",
        "advantage": "(-14/-13)/(-13/-13)",
        "activeframes": "10\u201411/13\u201414/16\u201417"
      },
      {
        "movename": "Back Air",
        "totalframes": "43",
        "landinglag": "17",
        "notes": "Autocancels on frame 38 onward",
        "startup": "10",
        "basedamage": "16.0",
        "shieldlag": "10",
        "shieldstun": "5",
        "advantage": "-12",
        "activeframes": "10\u201412"
      },
      {
        "movename": "Up Air",
        "totalframes": "39",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-3 and 35 onward",
        "startup": "11",
        "basedamage": "12.0/14.0",
        "shieldlag": "9/13",
        "shieldstun": "5/5",
        "advantage": "-9/-9",
        "activeframes": "11\u201413"
      },
      {
        "movename": "Down Air",
        "totalframes": "55",
        "landinglag": "32",
        "notes": "Autocancels on frame 1-3 and 50 onward",
        "startup": "11",
        "basedamage": "14.0/12.0",
        "shieldlag": "11/9",
        "shieldstun": "5/5",
        "advantage": "-27/-27",
        "activeframes": "11\u201418/19\u201440"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Plasma Breath)",
        "totalframes": "55 | 102",
        "landinglag": "--",
        "notes": "If Ridley is hit in the mouth while charging on frame 16-45, he recoils in a 52 frame animation.",
        "startup": "29 | 56/65/73/84/92",
        "basedamage": "4.5/3.5 | 5.67/4.41",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "29\u201458/59\u201478 | ***"
      },
      {
        "movename": "Side B (Space Pirate Rush)",
        "totalframes": "78",
        "landinglag": "--",
        "notes": "--",
        "startup": "22",
        "basedamage": "--",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "22\u201434"
      },
      {
        "movename": "Side B (Space Pirate Rush, Air)",
        "totalframes": "60",
        "landinglag": "--",
        "notes": "Landing hitbox on frame 1 after a grab, then transitions to ground drag",
        "startup": "22",
        "basedamage": "--",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "22\u201434"
      },
      {
        "movename": "Side B (Space Pirate Rush, Success)",
        "totalframes": "60",
        "landinglag": "--",
        "notes": "Drag begins on 24. Deals damage every four frames.",
        "startup": "10/24/28/32...",
        "basedamage": "--",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "**"
      },
      {
        "movename": "Space Pirate Rush, Manual/Ledge/Air Release",
        "totalframes": "41/42/41",
        "landinglag": "--",
        "notes": "Can manually release on 48 on the ground. 43 in the air.",
        "startup": "2/7/2",
        "basedamage": "--",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "**"
      },
      {
        "movename": "Up B (Wing Blitz)",
        "totalframes": "95",
        "landinglag": "32/35",
        "notes": "Second landing lag is for a dive into the ground. Wing intangibility on frame 37-60",
        "startup": "37",
        "basedamage": "16.0",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "39\u201458/39\u201458/37\u201460/40\u201462"
      },
      {
        "movename": "Down B (Skewer)",
        "totalframes": "96/67",
        "landinglag": "--",
        "notes": "Total frames is 67 when you miss.",
        "startup": "30",
        "basedamage": "**",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "-29",
        "activeframes": "30\u201431"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "**",
        "landinglag": "**",
        "notes": "**",
        "startup": "**",
        "basedamage": "**"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "**"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "18",
        "basedamage": "**"
      },
      {
        "movename": "Up Throw",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "--",
        "startup": "14/19",
        "basedamage": "**"
      },
      {
        "movename": "Down Throw",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "25",
        "basedamage": "**"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "23/28",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-18"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-16"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-17"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "46",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-31"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "64",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-22"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "73",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-22"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "78",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-22"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "90",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-22"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "103",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-22"
      }
    ],
    "stats": {
      "Weight": "107",
      "Gravity": "0.090",
      "Walk Speed": "1.1",
      "Run Speed": "2.2",
      "Initial Dash": "1.8",
      "Air Speed": "1.05",
      "Total Air Acceleration": "0.07",
      "SH / FH / SHFF / FHFF Frames": "35 / 51 / 23 / 34",
      "Fall Speed / Fast Fall Speed": "1.78 / 2.848",
      "Out of Shield, Neutral Air": "11 frames",
      "Out of Shield, Up Smash": "12 frames",
      "Out of Shield, Forward Air or Back Air": "13 frames",
      "Shield Grab (Grab, post-Shieldstun)": "12 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "rob": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "20",
        "landinglag": "--",
        "notes": "Transitions to jab 2 as early as frame 11",
        "startup": "3",
        "basedamage": "3.0",
        "shieldlag": "5",
        "shieldstun": "4",
        "advantage": "-13",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Jab 2",
        "totalframes": "20",
        "landinglag": "--",
        "notes": "--",
        "startup": "3",
        "basedamage": "3.0",
        "shieldlag": "10",
        "shieldstun": "4",
        "advantage": "-13",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "8.0",
        "shieldlag": "7",
        "shieldstun": "8",
        "advantage": "-18",
        "activeframes": "7\u20149"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "26",
        "landinglag": "--",
        "notes": "--",
        "startup": "4/6",
        "basedamage": "3.0/5.0",
        "shieldlag": "5/6",
        "shieldstun": "4/6",
        "advantage": "-14",
        "activeframes": "4\u20145/6\u20147"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "14",
        "landinglag": "--",
        "notes": "--",
        "startup": "3",
        "basedamage": "5.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-5",
        "activeframes": "3"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "7.0",
        "shieldlag": "7",
        "shieldstun": "7",
        "advantage": "-17",
        "activeframes": "7\u20148"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "54",
        "landinglag": "--",
        "notes": "Charge hold is frame 6",
        "startup": "16",
        "basedamage": "15.0/11.5/6.0",
        "shieldlag": "15/13/9",
        "shieldstun": "10/8/5",
        "advantage": "-28/-30/-33",
        "activeframes": "16\u201417"
      },
      {
        "movename": "Up Smash",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "Charge hold is frame 7",
        "startup": "10/14",
        "basedamage": "3.0/14.0",
        "shieldlag": "5/10",
        "shieldstun": "3/10",
        "advantage": "-35/-24",
        "activeframes": "10\u201411/14\u201418"
      },
      {
        "movename": "Down Smash",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "Charge hold is frame 3",
        "startup": "7/11/16",
        "basedamage": "3.5/5.0",
        "shieldlag": "5/12",
        "shieldstun": "3/4",
        "advantage": "-25",
        "activeframes": "7\u20148/11\u201412/16"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "47",
        "landinglag": "7",
        "notes": "Autocancels on frame 33 onward",
        "startup": "14",
        "basedamage": "7.5/9.5",
        "shieldlag": "7/8",
        "shieldstun": "3/4",
        "advantage": "-4/-3",
        "activeframes": "14\u201432"
      },
      {
        "movename": "Forward Air",
        "totalframes": "35",
        "landinglag": "9",
        "notes": "Autocancels on frame 25 onward",
        "startup": "6",
        "basedamage": "7.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-6",
        "activeframes": "6\u20148"
      },
      {
        "movename": "Back Air",
        "totalframes": "52",
        "landinglag": "13",
        "notes": "Autocancels on frame 46 onward",
        "startup": "19",
        "basedamage": "15.0/13.0/9.0",
        "shieldlag": "12/11/9",
        "shieldstun": "5/5/4",
        "advantage": "-8/-9",
        "activeframes": "19\u201423/24\u201432"
      },
      {
        "movename": "Up Air",
        "totalframes": "51",
        "landinglag": "13",
        "notes": "Autocancels on frame 40 onward",
        "startup": "7/9/13/17/23",
        "basedamage": "1.5/4.0",
        "shieldlag": "4/11",
        "shieldstun": "2/3",
        "advantage": "-11/-10",
        "activeframes": "7/9/13/17/23\u201424"
      },
      {
        "movename": "Down Air",
        "totalframes": "69",
        "landinglag": "12",
        "notes": "Autocancels on frame 45 onward. Advantage uses Total Frames",
        "startup": "20",
        "basedamage": "12.0/11.0/6.0",
        "shieldlag": "9/8/6",
        "shieldstun": "5/4/3",
        "advantage": "-44/-45/-46",
        "activeframes": "20\u201421/20\u201426/22\u201426"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Robo Beam)",
        "totalframes": "49, 49",
        "landinglag": "--",
        "notes": "Melee attack and projectile generate on same frame",
        "startup": "25, 25",
        "basedamage": "7.0/4.5/11.5, 7.0/15.0/22.0",
        "shieldlag": "7/5/7, 7/13/13",
        "shieldstun": "7/3/7, 7/5/14",
        "advantage": "-44/-45/-46, -17/-16/-17",
        "activeframes": "25\u201427/**"
      },
      {
        "movename": "Side B (Arm Rotor)",
        "totalframes": "85",
        "landinglag": "--",
        "notes": "Multihits have no hitlag but do have shieldlag. Reflects on frame 13-35",
        "startup": "13/18/23/28/33/44",
        "basedamage": "1.5/3.0",
        "shieldlag": "4/12",
        "shieldstun": "3/4",
        "advantage": "-37",
        "activeframes": "13\u2014**"
      },
      {
        "movename": "Side B (Arm Rotor, Mashing)",
        "totalframes": "107",
        "landinglag": "--",
        "notes": "Multihits have no hitlag but do have shieldlag. Reflects on frame 13-60",
        "startup": "13/18/23/28/33/38/ 43/48/53/58/66",
        "basedamage": "1.5/3.0",
        "shieldlag": "4/12",
        "shieldstun": "3/4",
        "advantage": "-37",
        "activeframes": "--"
      },
      {
        "movename": "Up B (Robo Burner)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "Invulnerable on frame 2-4 on the ground. Can act on frame 25. Fuel lasts up to 143 frames.",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "--"
      },
      {
        "movename": "Down B (Gyro)",
        "totalframes": "36, 42",
        "landinglag": "--",
        "notes": "3 startup from charging state. 6 frames to enter charging state. Reaches full charge on frame 98. Damage depends on current item velocity.",
        "startup": "3(+6), 9",
        "basedamage": "3.6\u201410.7, 10.7",
        "shieldlag": "5\u20148, 8",
        "shieldstun": "2\u20144, 4",
        "advantage": "-26 to -21, -21",
        "activeframes": "--"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "18",
        "landinglag": "**",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "23",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "8.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "26",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "10.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "81",
        "landinglag": "--",
        "notes": "--",
        "startup": "59",
        "basedamage": "12.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "75",
        "landinglag": "--",
        "notes": "Buries",
        "startup": "50",
        "basedamage": "5.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "50",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-27"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "68",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "75",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "83",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "100",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "111",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "106",
      "Gravity": "0.090",
      "Walk Speed": "1.178",
      "Run Speed": "1.725",
      "Initial Dash": "2.002",
      "Air Speed": "1.134",
      "Total Air Acceleration": "0.085",
      "SH / FH / SHFF / FHFF Frames": "40 / 56 / 28 / 38",
      "Fall Speed / Fast Fall Speed": "1.6 / 2.56",
      "Out of Shield, Forward Air": "9 frames",
      "Out of Shield, Up Air or Up Smash": "10 frames",
      "Out of Shield, Jab or Down Tilt": "14 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "robin": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "Transitions to jab 2 as early as frame 9",
        "startup": "4",
        "basedamage": "2.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-24",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Jab 2",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Transitions to jab 3 as early as frame 9 or Rapid Jab on frame 8",
        "startup": "5",
        "basedamage": "1.5",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-26",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Jab 3",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "5.0",
        "shieldlag": "12",
        "shieldstun": "6",
        "advantage": "-23",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "4/6/8...",
        "basedamage": "0.7",
        "shieldlag": "4",
        "shieldstun": "3",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "2.0",
        "shieldlag": "14",
        "shieldstun": "3",
        "advantage": "-39",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "7.5",
        "shieldlag": "7",
        "shieldstun": "8",
        "advantage": "-15",
        "activeframes": "9\u201410"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "7.5",
        "shieldlag": "7",
        "shieldstun": "8",
        "advantage": "-15",
        "activeframes": "6\u201414"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "21",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "6.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-8",
        "activeframes": "7\u20148"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "10.0/6.0",
        "shieldlag": "9/7",
        "shieldstun": "10/6",
        "advantage": "-23",
        "activeframes": "8\u201410(11\u201418)"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "57",
        "landinglag": "--",
        "notes": "Charge hold is frame 6",
        "startup": "16",
        "basedamage": "16.0/10.0/9.6",
        "shieldlag": "15/12/8",
        "shieldstun": "11/7/7",
        "advantage": "-30/-34",
        "activeframes": "16\u201418(19\u201427)"
      },
      {
        "movename": "Up Smash",
        "totalframes": "52",
        "landinglag": "--",
        "notes": "Charge hold is frame 5",
        "startup": "12",
        "basedamage": "10.0/15.0/9.0",
        "shieldlag": "12/15/7",
        "shieldstun": "7/10/7",
        "advantage": "-33/-30/-33",
        "activeframes": "12(13\u201416/17\u201432)"
      },
      {
        "movename": "Down Smash",
        "totalframes": "56",
        "landinglag": "--",
        "notes": "Sparks generate on frame 20 for levin version. Charge hold is frame 3",
        "startup": "16",
        "basedamage": "15.0/12.0/8.0",
        "shieldlag": "15/13/7",
        "shieldstun": "-/8/6",
        "advantage": "-28/-34",
        "activeframes": "16\u201417(19\u201422/23\u201428)"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "49",
        "landinglag": "11",
        "notes": "Autocancels on frame 1-3 and 34 onward (bronze) or 42 (levin)",
        "startup": "9/22",
        "basedamage": "11.5/6.9",
        "shieldlag": "13/7",
        "shieldstun": "5/3",
        "advantage": "-6/-8",
        "activeframes": "9\u201412/22\u201425/26\u201430"
      },
      {
        "movename": "Forward Air",
        "totalframes": "33",
        "landinglag": "11",
        "notes": "Autocancels on frame 1-3 and 27 onward (bronze) or 28 (levin)",
        "startup": "12",
        "basedamage": "12.5/7.5",
        "shieldlag": "14/7",
        "shieldstun": "5/3",
        "advantage": "-6/-8",
        "activeframes": "12\u201415(16\u201419)"
      },
      {
        "movename": "Back Air",
        "totalframes": "39",
        "landinglag": "11",
        "notes": "Autocancels on frame 32 onward (either version)",
        "startup": "9",
        "basedamage": "15.0/5.0/9.0",
        "shieldlag": "15/9/7",
        "shieldstun": "5/3/4",
        "advantage": "-6/-8/-7",
        "activeframes": "9\u201410(11\u201416)"
      },
      {
        "movename": "Up Air",
        "totalframes": "45",
        "landinglag": "11",
        "notes": "Autocancels on frame 1-4 and 27 onward (bronze) or 28 (levin)",
        "startup": "10",
        "basedamage": "13.0/5.0/7.8",
        "shieldlag": "14/9/7",
        "shieldstun": "5/3/4",
        "advantage": "-6/-8/-7",
        "activeframes": "10\u201413(14\u201423)"
      },
      {
        "movename": "Down Air",
        "totalframes": "59",
        "landinglag": "16",
        "notes": "Autocancels on frame 48 onward (either version)",
        "startup": "13",
        "basedamage": "11.0/8.0/7.2/6.0",
        "shieldlag": "16/11/7/6",
        "shieldstun": "4/4/3/3",
        "advantage": "-7/-7/-8/-8",
        "activeframes": "13\u201415(16\u201417/18\u201424)"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Thunder/Elthunder/Arcthunder)",
        "totalframes": "32/38/38",
        "landinglag": "--",
        "notes": "7 frames to enter charge state. 4 to cancel charge with shield 38 frames to reach Elthunder 88 to reach Arcthunder, 148 to reach Thoron",
        "startup": "8/8/8",
        "basedamage": "5.5/11.0",
        "shieldlag": "9/13",
        "shieldstun": "3/4",
        "advantage": "-12/-13",
        "activeframes": "**"
      },
      {
        "movename": "Arcthunder (Vortex)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "1/5/9/13/16",
        "basedamage": "6.0/2.4/8.0",
        "shieldlag": "-/-/11",
        "shieldstun": "-/-/3",
        "advantage": "+0",
        "activeframes": "**"
      },
      {
        "movename": "Thoron",
        "totalframes": "74",
        "landinglag": "--",
        "notes": "--",
        "startup": "23/27/31/35/39/43/47",
        "basedamage": "2.6/2.6",
        "shieldlag": "-/7",
        "shieldstun": "-/2",
        "advantage": "-20",
        "activeframes": "**"
      },
      {
        "movename": "Side B (Arcfire)",
        "totalframes": "63",
        "landinglag": "--",
        "notes": "Pillar hits once every eight frames, ending on frame 50.",
        "startup": "17",
        "basedamage": "2.0/1.3/4.0",
        "shieldlag": "6/4/11",
        "shieldstun": "2/2/2",
        "advantage": "+13",
        "activeframes": "17\u201461"
      },
      {
        "movename": "Up B (Elwind)",
        "totalframes": "--",
        "landinglag": "25",
        "notes": "--",
        "startup": "8/28",
        "basedamage": "7.0/5.0",
        "shieldlag": "7/6",
        "shieldstun": "3/3",
        "advantage": "--",
        "activeframes": "8(9\u201412/13\u201431) / 28\u201432(33\u201455)"
      },
      {
        "movename": "Down B (Nosferatu)",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Invulnerable on frame 15-18. 31 frames animation for releasing victim.",
        "startup": "15",
        "basedamage": "**",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "**",
        "activeframes": "15\u201418"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "21",
        "landinglag": "**",
        "notes": "Total frames includes 16 frames of hitlag",
        "startup": "1",
        "basedamage": "1.5"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "16",
        "basedamage": "8.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "25",
        "basedamage": "11.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "9.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "16",
        "basedamage": "6.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "21/26",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "51",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-30"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "73",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "79",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "86",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "103",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "114",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "95",
      "Gravity": "0.089",
      "Walk Speed": "0.936",
      "Run Speed": "1.265",
      "Initial Dash": "1.815",
      "Air Speed": "1.05",
      "Total Air Acceleration": "0.08",
      "SH / FH / SHFF / FHFF Frames": "38 / 52 / 26 / 36",
      "Fall Speed / Fast Fall Speed": "1.5 / 2.4",
      "Out of Shield, Up B": "8 frames",
      "Out of Shield, Neutral Air or Back Air or Up Smash": "12 frames",
      "Out of Shield, Up AIr": "13 frames",
      "Shield Grab (Grab, post-Shieldstun)": "11 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "rosalina_and_luma": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "20",
        "landinglag": "--",
        "notes": "Transitions to jab 2 as early as frame 9",
        "startup": "5",
        "basedamage": "2.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-12",
        "activeframes": "5"
      },
      {
        "movename": "Jab 1 (Luma)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "1.5",
        "shieldlag": "7(+3)",
        "shieldstun": "2",
        "advantage": "**",
        "activeframes": "4"
      },
      {
        "movename": "Jab 2",
        "totalframes": "24",
        "landinglag": "--",
        "notes": "Transitions to jab 3 as early as frame 13",
        "startup": "6",
        "basedamage": "2.0",
        "shieldlag": "4",
        "shieldstun": "3",
        "advantage": "-15",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Jab 2 (Luma)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "1.5",
        "shieldlag": "4(+1)",
        "shieldstun": "2",
        "advantage": "**",
        "activeframes": "6"
      },
      {
        "movename": "Jab 3",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "3.0",
        "shieldlag": "10",
        "shieldstun": "4",
        "advantage": "-24",
        "activeframes": "7\u20148"
      },
      {
        "movename": "Jab 3 (Luma)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "23.0",
        "shieldlag": "10(+5)",
        "shieldstun": "2",
        "advantage": "**",
        "activeframes": "7\u20148"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "2/5/8/11...",
        "basedamage": "0.3",
        "shieldlag": "4",
        "shieldstun": "3",
        "advantage": "--",
        "activeframes": "2/5/8/11..."
      },
      {
        "movename": "Rapid Jab (Luma)",
        "totalframes": "24",
        "landinglag": "--",
        "notes": "--",
        "startup": "3/6/9/12...",
        "basedamage": "0.1",
        "shieldlag": "4",
        "shieldstun": "2",
        "advantage": "--",
        "activeframes": "3/6/9/12..."
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "2.5",
        "shieldlag": "10",
        "shieldstun": "4",
        "advantage": "-29",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Rapid Jab Finisher (Luma)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "1.5",
        "shieldlag": "8(+4)",
        "shieldstun": "2",
        "advantage": "**",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "7.5",
        "shieldlag": "7",
        "shieldstun": "8",
        "advantage": "-22",
        "activeframes": "7\u20149"
      },
      {
        "movename": "Forward Tilt (Luma)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "6.7",
        "shieldlag": "10(+5)",
        "shieldstun": "3",
        "advantage": "**",
        "activeframes": "8\u201410"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "Head Intangible on frame 4-10",
        "startup": "7",
        "basedamage": "10.0/8.0",
        "shieldlag": "8/7",
        "shieldstun": "10/8",
        "advantage": "-23",
        "activeframes": "7\u201410/11\u201417"
      },
      {
        "movename": "Up Tilt (Luma)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "3",
        "basedamage": "12.0/6.0/4.5",
        "shieldlag": "12(+4)/6(-2)/5(-1)",
        "shieldstun": "4/3/3",
        "advantage": "**",
        "activeframes": "3/4\u20145/6\u201410"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "5.5",
        "shieldlag": "8",
        "shieldstun": "6",
        "advantage": "-21",
        "activeframes": "5\u20148"
      },
      {
        "movename": "Down Tilt (Luma)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "5.2",
        "shieldlag": "9(+5)",
        "shieldstun": "3",
        "advantage": "**",
        "activeframes": "8\u201413"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "6/17",
        "basedamage": "3.0/4.0",
        "shieldlag": "6/7",
        "shieldstun": "4/5",
        "advantage": "-18",
        "activeframes": "6\u20149/17\u201419"
      },
      {
        "movename": "Dash Attack (Luma)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "4.5",
        "shieldlag": "8(+5)",
        "shieldstun": "2",
        "advantage": "**",
        "activeframes": "6\u20148"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "Charge hold is frame 9",
        "startup": "16",
        "basedamage": "12.0",
        "shieldlag": "11",
        "shieldstun": "8",
        "advantage": "-26",
        "activeframes": "16\u201418"
      },
      {
        "movename": "Forward Smash (Luma)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "Charge hold is frame 9",
        "startup": "17",
        "basedamage": "10.5",
        "shieldlag": "14(+2)",
        "shieldstun": "4",
        "advantage": "**",
        "activeframes": "17\u201418"
      },
      {
        "movename": "Up Smash",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "Head intangible on frame 7-16. Charge hold is frame 3",
        "startup": "8",
        "basedamage": "12.0",
        "shieldlag": "9",
        "shieldstun": "8",
        "advantage": "-31",
        "activeframes": "8\u201416"
      },
      {
        "movename": "Up Smash (Luma)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "Charge hold is frame 3",
        "startup": "10",
        "basedamage": "9.0",
        "shieldlag": "11(+4)",
        "shieldstun": "4",
        "advantage": "**",
        "activeframes": "10\u201412/13\u201417"
      },
      {
        "movename": "Down Smash",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "Charge hold is frame 3",
        "startup": "6/17",
        "basedamage": "7.0/9.0",
        "shieldlag": "10/11",
        "shieldstun": "6/7",
        "advantage": "-29/-17",
        "activeframes": "6\u20147/17\u201418"
      },
      {
        "movename": "Down Smash (Luma)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "7/19",
        "basedamage": "6.0/7.5",
        "shieldlag": "9(+5)/10(+5)",
        "shieldstun": "3/3",
        "advantage": "**",
        "activeframes": "7\u20148/19\u201420"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "43",
        "landinglag": "8",
        "notes": "Autocancels on frame 1-4 and 33 onward",
        "startup": "9",
        "basedamage": "10.0/7.0",
        "shieldlag": "7/7",
        "shieldstun": "4/3",
        "advantage": "-4/-5",
        "activeframes": "9\u201426/27\u201433"
      },
      {
        "movename": "Neutral Air (Luma)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "7/13",
        "basedamage": "4.5/4.5",
        "shieldlag": "5(+4)/5(+4)",
        "shieldstun": "3/3",
        "advantage": "**",
        "activeframes": "7\u20149/13\u201414"
      },
      {
        "movename": "Forward Air",
        "totalframes": "59",
        "landinglag": "16",
        "notes": "Autocancels on frame 1-3 and 50 onward",
        "startup": "10/13/16/19/22",
        "basedamage": "1.0/4.0",
        "shieldlag": "4/8",
        "shieldstun": "2/3",
        "advantage": "-14/-13",
        "activeframes": "10\u201420(rehit rate: 3)/22"
      },
      {
        "movename": "Forward Air (Luma)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "4.5",
        "shieldlag": "5(-1)",
        "shieldstun": "3",
        "advantage": "**",
        "activeframes": "11\u201413"
      },
      {
        "movename": "Back Air",
        "totalframes": "54",
        "landinglag": "10",
        "notes": "Autocancels on frame 1-3 and 50 onward",
        "startup": "9",
        "basedamage": "11.0",
        "shieldlag": "8",
        "shieldstun": "4",
        "advantage": "-4",
        "activeframes": "9\u201411"
      },
      {
        "movename": "Back Air (Luma)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "6.0",
        "shieldlag": "9(+5)",
        "shieldstun": "3",
        "advantage": "**",
        "activeframes": "10\u201415"
      },
      {
        "movename": "Up Air",
        "totalframes": "49",
        "landinglag": "11",
        "notes": "Autocancels on frame 45 onward",
        "startup": "8",
        "basedamage": "10.0/5.0/2.0",
        "shieldlag": "8/7/6",
        "shieldstun": "4/3/2",
        "advantage": "-7/-8/-9",
        "activeframes": "8\u201410/11\u201414/15\u201419"
      },
      {
        "movename": "Up Air (Luma)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "4.0",
        "shieldlag": "6(-2)",
        "shieldstun": "3",
        "advantage": "**",
        "activeframes": "6\u201411"
      },
      {
        "movename": "Down Air",
        "totalframes": "49",
        "landinglag": "12",
        "notes": "Autocancels on frame 50 onward",
        "startup": "17",
        "basedamage": "8.0/6.0/2.0",
        "shieldlag": "7/6/4",
        "shieldstun": "4/3/2",
        "advantage": "-7/-8/-9",
        "activeframes": "17/18\u201422/23\u201425/26\u201432"
      },
      {
        "movename": "Down Air (Luma)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "5.0",
        "shieldlag": "10(+5)",
        "shieldstun": "3",
        "advantage": "**",
        "activeframes": "15\u201419"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Luma Shot)",
        "totalframes": "34\u2014115",
        "landinglag": "--",
        "notes": "4 startup and 28 total frames from charge state. Takes 6 frames to enter charge state. 87 frames to reach full charge.",
        "startup": "10\u201491",
        "basedamage": "5.0\u201416.0",
        "shieldlag": "6\u201410",
        "shieldstun": "3\u20145",
        "advantage": "-15 to -9",
        "activeframes": "No Data"
      },
      {
        "movename": "Luma Recall",
        "totalframes": "21/23",
        "landinglag": "--",
        "notes": "Second total frames is in the air.",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "No Data"
      },
      {
        "movename": "Side B (Star Bits)",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "--",
        "startup": "10/16/22",
        "basedamage": "3.0",
        "shieldlag": "5",
        "shieldstun": "2",
        "advantage": "-22",
        "activeframes": "No Data"
      },
      {
        "movename": "Up B (Launch Star)",
        "totalframes": "--",
        "landinglag": "30",
        "notes": "--",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "No Data"
      },
      {
        "movename": "Down B (Gravitational Pull)",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "Pulls on frame 2-29",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "No Data"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "46",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "**",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "28",
        "basedamage": "9.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "30",
        "basedamage": "11.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "7.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "9.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "21/26",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "62",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-29"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "86",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "94",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "105",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "124",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "144",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "82",
      "Gravity": "0.062",
      "Walk Speed": "1.138",
      "Run Speed": "1.795",
      "Initial Dash": "2.035",
      "Air Speed": "1.05",
      "Total Air Acceleration": "0.11",
      "SH / FH / SHFF / FHFF Frames": "50 / 71 / 36 / 49",
      "Fall Speed / Fast Fall Speed": "1.2 / 1.92",
      "Out of Shield, Up Smash": "8 frames",
      "Out of Shield, Up Air": "9 frames",
      "Out of Shield, Neutral Air": "10 frames",
      "Shield Grab (Grab, post-Shieldstun)": "11 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "roy": {
    "ground_attacks": [
      {
        "movename": "Jab",
        "totalframes": "22",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "7.5/4.8",
        "shieldlag": "9/6",
        "shieldstun": "8/5",
        "advantage": "-9/-12",
        "activeframes": "5\u20147"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "12.5/9.0/8.0",
        "shieldlag": "12/7/7",
        "shieldstun": "12/9/8",
        "advantage": "-13/-16/-17",
        "activeframes": "8\u201410"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "12.0/7.0",
        "shieldlag": "12/7",
        "shieldstun": "11/7",
        "advantage": "-21/-25",
        "activeframes": "6/7\u20148/9\u201411"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "21",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "11.0/6.5",
        "shieldlag": "11/6",
        "shieldstun": "10/7",
        "advantage": "-4/-7",
        "activeframes": "7\u20148"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "13.0/9.0",
        "shieldlag": "12/7",
        "shieldstun": "15/11",
        "advantage": "-17/-21",
        "activeframes": "13\u201416"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "53",
        "landinglag": "--",
        "notes": "Charge hold is frame 6",
        "startup": "13",
        "basedamage": "20.0/17.0/12.0",
        "shieldlag": "15/11/9",
        "shieldstun": "13/11/8",
        "advantage": "-27/-29/-32",
        "activeframes": "13\u201414"
      },
      {
        "movename": "Up Smash",
        "totalframes": "58",
        "landinglag": "--",
        "notes": "Forearm intangibility on frame 10-23. Charge hold is frame 4",
        "startup": "12/15/17/19/22",
        "basedamage": "1.0/2.0/10.0",
        "shieldlag": "6/7/10",
        "shieldstun": "2/-/7",
        "advantage": "-29",
        "activeframes": "12\u201413/15/17/19/22\u201423"
      },
      {
        "movename": "Down Smash",
        "totalframes": "62",
        "landinglag": "--",
        "notes": "Charge hold is frame 3",
        "startup": "6/21",
        "basedamage": "15.0/10.0/17.0/11.0",
        "shieldlag": "13/8/14/8",
        "shieldstun": "10/7/11/8",
        "advantage": "-46/-49/-30/-33",
        "activeframes": "6\u20147/21\u201422"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "45",
        "landinglag": "9",
        "notes": "Autocancels on frame 47 onward",
        "startup": "6/15",
        "basedamage": "6.0/4.0/8.5/5.0",
        "shieldlag": "8/5/10/6",
        "shieldstun": "3/3/4/3",
        "advantage": "-6/-6/-5/-6",
        "activeframes": "6\u20147/15\u201421"
      },
      {
        "movename": "Forward Air",
        "totalframes": "29",
        "landinglag": "8",
        "notes": "Autocancels on frame 31 onward",
        "startup": "10",
        "basedamage": "11.0 / 7.0",
        "shieldlag": "11/7",
        "shieldstun": "4/3",
        "advantage": "-4/-5",
        "activeframes": "10\u201412"
      },
      {
        "movename": "Back Air",
        "totalframes": "35",
        "landinglag": "10",
        "notes": "Autocancels on frame 1-2 and 32 onward",
        "startup": "8",
        "basedamage": "12.0/9.0",
        "shieldlag": "12/7",
        "shieldstun": "5/4",
        "advantage": "-5/-6",
        "activeframes": "8\u201410"
      },
      {
        "movename": "Up Air",
        "totalframes": "41",
        "landinglag": "8",
        "notes": "Autocancels on frame 1-2 and 38 onward",
        "startup": "5",
        "basedamage": "9.0/6.0",
        "shieldlag": "10/6",
        "shieldstun": "4/3",
        "advantage": "-4/-5",
        "activeframes": "5\u201412"
      },
      {
        "movename": "Down Air",
        "totalframes": "51",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-2 and 52 onward",
        "startup": "16",
        "basedamage": "15.0/10.0",
        "shieldlag": "13/8",
        "shieldstun": "5/4",
        "advantage": "-9/-10",
        "activeframes": "16\u201417"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Flare Blade)",
        "totalframes": "44-283",
        "landinglag": "--",
        "notes": "Startup is 10 from release. 11 frames to enter charge state.",
        "startup": "21-260",
        "basedamage": "8.0\u201450.0",
        "shieldlag": "7\u201422",
        "shieldstun": "8\u2014...",
        "advantage": "-15 to Shieldbreak",
        "activeframes": "21\u201424 (or 10\u201414 from release)"
      },
      {
        "movename": "Side B, Hit 1 (Double Edged Dance, Hit 1)",
        "totalframes": "39/29",
        "landinglag": "--",
        "notes": "Second total frames is from the air. Can transition to next slash as early as frame 12.",
        "startup": "9",
        "basedamage": "3.0/2.0",
        "shieldlag": "5/4",
        "shieldstun": "4/3",
        "advantage": "-26/-16(air)",
        "activeframes": "9\u201411"
      },
      {
        "movename": "Double Edged Dance, Hit 2 Neutral",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "Can transition to next slash as early as frame 8.",
        "startup": "5",
        "basedamage": "3.0/2.0",
        "shieldlag": "5/4",
        "shieldstun": "4/3",
        "advantage": "-29/-30",
        "activeframes": "5\u20147"
      },
      {
        "movename": "Double Edged Dance, Hit 3 Neutral",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "Can transition to next slash as early as frame 7.",
        "startup": "4",
        "basedamage": "4.0/3.0",
        "shieldlag": "5/5",
        "shieldstun": "5/4",
        "advantage": "-34/-35",
        "activeframes": "4\u20146"
      },
      {
        "movename": "Double Edged Dance, Hit 4 Neutral",
        "totalframes": "58",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "6.0/4.0",
        "shieldlag": "11/5",
        "shieldstun": "6/5",
        "advantage": "-45/-46",
        "activeframes": "7\u20149"
      },
      {
        "movename": "Double Edged Dance, Hit 2 Up",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "Can transition to next slash as early as frame 8.",
        "startup": "4",
        "basedamage": "3.0/2.0",
        "shieldlag": "5/4",
        "shieldstun": "4/3",
        "advantage": "-34/-35",
        "activeframes": "4\u20146"
      },
      {
        "movename": "Double Edged Dance, Hit 3 Up",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "4.0/3.0",
        "shieldlag": "5/5",
        "shieldstun": "5/4",
        "advantage": "-33/-34",
        "activeframes": "5\u20147"
      },
      {
        "movename": "Double Edged Dance, Hit 4 Up",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "7.0/5.0",
        "shieldlag": "9/8",
        "shieldstun": "7/6",
        "advantage": "-31/-32",
        "activeframes": "6\u201410"
      },
      {
        "movename": "Double Edged Dance, Hit 3 Down",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "Can transition to next slash as early as frame 8",
        "startup": "5",
        "basedamage": "4.0/3.0",
        "shieldlag": "5/5",
        "shieldstun": "5/4",
        "advantage": "-34/-35",
        "activeframes": "5\u20147"
      },
      {
        "movename": "Double Edged Dance, Hit 4 Down",
        "totalframes": "71",
        "landinglag": "--",
        "notes": "--",
        "startup": "7/10/13/16/19",
        "basedamage": "2.0/5.0",
        "shieldlag": "4/9",
        "shieldstun": "-/6",
        "advantage": "-46",
        "activeframes": "7/10/13/16/19\u201421"
      },
      {
        "movename": "Up B (Blazer)",
        "totalframes": "--",
        "landinglag": "30",
        "notes": "Super Armor on frame 4-10 from the ground. Intangible on frame 9.",
        "startup": "9/11/14/17/20",
        "basedamage": "5.5/1.1/8.0",
        "shieldlag": "6/4/15",
        "shieldstun": "-/2/8",
        "advantage": "**",
        "activeframes": "9/11/14/17/20\u201421"
      },
      {
        "movename": "Down B (Counter)",
        "totalframes": "67",
        "landinglag": "--",
        "notes": "Invulnerable on frame 7. Counters on 8-29 from 8-27.",
        "startup": "8 (Start of Counter)",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Counter, Attack",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "Invulnerable on frame 1-5. In addition to counter freeze frames",
        "startup": "4",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "4\u20145"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "5.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "5.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "6.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "16",
        "basedamage": "5.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "44",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-29"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "62",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "68",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "74",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "87",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "97",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "95",
      "Gravity": "0.114",
      "Walk Speed": "1.208",
      "Run Speed": "2.145",
      "Initial Dash": "2.2",
      "Air Speed": "1.302",
      "Total Air Acceleration": "0.05",
      "SH / FH / SHFF / FHFF Frames": "30 / 44 / 20 / 31",
      "Fall Speed / Fast Fall Speed": "1.8 / 2.88",
      "Out of Shield, Up Air": "8 frames",
      "Out of Shield, Up B or Neutral Air": "9 frames",
      "Out of Shield, Back Air": "11 frames",
      "Shield Grab (Grab, post-Shieldstun)": "11 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "ryu": {
    "ground_attacks": [
      {
        "movename": "Jab 1 (Light)",
        "totalframes": "15",
        "landinglag": "--",
        "notes": "Special Cancellable. Transitions to jab 2 as early as frame 6",
        "startup": "2",
        "basedamage": "1.5",
        "shieldlag": "4",
        "shieldstun": "3",
        "advantage": "-10",
        "activeframes": "2\u20143"
      },
      {
        "movename": "Jab (Heavy)",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "10.0",
        "shieldlag": "11",
        "shieldstun": "10",
        "advantage": "-13",
        "activeframes": "9\u201410"
      },
      {
        "movename": "Jab 2",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "Special Cancellable. Transitions to jab 3 as early as frame 6",
        "startup": "3",
        "basedamage": "1.5",
        "shieldlag": "9",
        "shieldstun": "3",
        "advantage": "-21",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Jab 3",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "5.0",
        "shieldlag": "11",
        "shieldstun": "6",
        "advantage": "-21",
        "activeframes": "8\u201410"
      },
      {
        "movename": "Forward Tilt (Light, Close)",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Special Cancellable. Can't seem to perform this unless within range",
        "startup": "3",
        "basedamage": "6.0",
        "shieldlag": "9",
        "shieldstun": "6",
        "advantage": "-20",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Forward Tilt (Light, Far)",
        "totalframes": "23",
        "landinglag": "--",
        "notes": "Leg intangibility on frame 6-11",
        "startup": "8",
        "basedamage": "6.8",
        "shieldlag": "10",
        "shieldstun": "7",
        "advantage": "-8",
        "activeframes": "8\u201411"
      },
      {
        "movename": "Forward Tilt (Heavy)",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "16/18",
        "basedamage": "3.0/6.0",
        "shieldlag": "7/9",
        "shieldstun": "-/6",
        "advantage": "-13",
        "activeframes": "16/18\u201419"
      },
      {
        "movename": "Up Tilt (Light)",
        "totalframes": "14",
        "landinglag": "--",
        "notes": "Special Cancellable. Transitions to another Utilt as early as frame 8",
        "startup": "3",
        "basedamage": "2.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-8",
        "activeframes": "3\u20146"
      },
      {
        "movename": "Up Tilt (Heavy)",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "Special Cancellable. Upper body intangibility on frame 4-10.",
        "startup": "7",
        "basedamage": "12.0",
        "shieldlag": "12",
        "shieldstun": "11",
        "advantage": "-19",
        "activeframes": "7(8\u201411)"
      },
      {
        "movename": "Down Tilt (Light)",
        "totalframes": "14",
        "landinglag": "--",
        "notes": "Special Cancellable. Transitions to another Dtilt as early as frame 8",
        "startup": "2",
        "basedamage": "1.6",
        "shieldlag": "8",
        "shieldstun": "3",
        "advantage": "-9",
        "activeframes": "2\u20143"
      },
      {
        "movename": "Down Tilt (Heavy)",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "Special Cancellable",
        "startup": "6",
        "basedamage": "7.0",
        "shieldlag": "10",
        "shieldstun": "7",
        "advantage": "-14",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "12.0/8.0",
        "shieldlag": "12/10",
        "shieldstun": "11/8",
        "advantage": "-22",
        "activeframes": "7\u20149(10\u201415)"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "Charge hold is frame 5",
        "startup": "15",
        "basedamage": "16.0/17.5",
        "shieldlag": "15/6",
        "shieldstun": "11/12",
        "advantage": "-19/-18",
        "activeframes": "15\u201417"
      },
      {
        "movename": "Up Smash",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "Arm intangibility on frame 9-12. Charge hold is frame 6",
        "startup": "9",
        "basedamage": "17.0/13.5",
        "shieldlag": "16/13",
        "shieldstun": "11/9",
        "advantage": "-24",
        "activeframes": "9(10\u201412)"
      },
      {
        "movename": "Down Smash",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "Charge hold is frame 2",
        "startup": "5",
        "basedamage": "16.0",
        "shieldlag": "15",
        "shieldstun": "11",
        "advantage": "-25",
        "activeframes": "5\u20146"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "35",
        "landinglag": "5",
        "notes": "Special Cancellable. Autocancels on frame 34 onward",
        "startup": "4",
        "basedamage": "8.0/4.5",
        "shieldlag": "10/8",
        "shieldstun": "4/3",
        "advantage": "-1/-2",
        "activeframes": "4\u20146(7\u201431)"
      },
      {
        "movename": "Forward Air",
        "totalframes": "36",
        "landinglag": "11",
        "notes": "Special Cancellable. Autocancels on frame 1-2 and 38 onward",
        "startup": "8",
        "basedamage": "9.0/14.0, 8.0/12.0",
        "shieldlag": "10/14, 10/12",
        "shieldstun": "4/5, 4/5",
        "advantage": "-7/-6, -7/-6",
        "activeframes": "8\u20149(10\u201414)"
      },
      {
        "movename": "Back Air",
        "totalframes": "41",
        "landinglag": "10",
        "notes": "Special Cancellable. Autocancels on frame 25 onward",
        "startup": "8",
        "basedamage": "16.0/13.0",
        "shieldlag": "15/13",
        "shieldstun": "6/5",
        "advantage": "-4/-5",
        "activeframes": "8\u20149"
      },
      {
        "movename": "Up Air",
        "totalframes": "35",
        "landinglag": "11",
        "notes": "Special Cancellable. Arm intangibility on frame 6-10. Autocancels on frame 18 onward",
        "startup": "6/9",
        "basedamage": "5.0/6.0",
        "shieldlag": "9/9",
        "shieldstun": "3/3",
        "advantage": "-8/-8",
        "activeframes": "6\u20147/9\u201411"
      },
      {
        "movename": "Down Air",
        "totalframes": "45",
        "landinglag": "15",
        "notes": "Special Cancellable. Autocancels on frame 1-2 and 33 onward",
        "startup": "8",
        "basedamage": "12.0",
        "shieldlag": "14",
        "shieldstun": "5",
        "advantage": "-10",
        "activeframes": "8\u201412"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Hadouken)",
        "totalframes": "57",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "6.0\u20147.0, 7.5\u20148.7",
        "shieldlag": "9, 9",
        "shieldstun": "3, 3",
        "advantage": "-32, -31 to -30",
        "activeframes": "12\u201418(19\u201482) / 12\u201417(18\u201467) / 12\u201416(17\u201450)"
      },
      {
        "movename": "Shakunetsu Hadouken",
        "totalframes": "57",
        "landinglag": "--",
        "notes": "Hits on frame 1,2,3,7 when reaching a target.",
        "startup": "12",
        "basedamage": "1.1/5.0",
        "shieldlag": "4/9",
        "shieldstun": "-/3",
        "advantage": "-17",
        "activeframes": "12\u201421(22\u201477) / 12\u201420(21\u201461) / 12\u201419(20\u201446)"
      },
      {
        "movename": "Side B (Tatsumaki Senpukyaku)",
        "totalframes": "58\u201490",
        "landinglag": "--",
        "notes": "Total frames depends on distance traveled. Leg intangibility on frame 13\u2014",
        "startup": "8",
        "basedamage": "9.0/11.0, 10.4/12.7",
        "shieldlag": "10\u201412, 11\u201413",
        "shieldstun": "9\u201410, 9\u201412",
        "advantage": "-41 to -72, -41 to -70",
        "activeframes": "8\u20149/**"
      },
      {
        "movename": "Side B, Air (Tatsumaki Senpukyaku, Air)",
        "totalframes": "79",
        "landinglag": "--",
        "notes": "Leg intangibility on frame 13-44",
        "startup": "8",
        "basedamage": "8.0\u201410.0, 9.2\u201411.6",
        "shieldlag": "10\u201411, 11\u201412",
        "shieldstun": "9\u201410, 10\u201411",
        "advantage": "-62 to -61, -61 to -60",
        "activeframes": "8\u20149/**"
      },
      {
        "movename": "Up B (Shoryuken)",
        "totalframes": "--",
        "landinglag": "22",
        "notes": "Invulnerable on frame 5",
        "startup": "6",
        "basedamage": "13.0\u201415.0/7.0",
        "shieldlag": "18\u201420/10",
        "shieldstun": "12\u201414/7",
        "advantage": "**",
        "activeframes": "6(7\u20148/9\u201419)"
      },
      {
        "movename": "True Shoryuken",
        "totalframes": "--",
        "landinglag": "15",
        "notes": "Arm intangibility on frame 1-15 Completely Invulnerable on frame 4-7.",
        "startup": "6",
        "basedamage": "15.6\u201418.0/8.4",
        "shieldlag": "20\u201421/10",
        "shieldstun": "14\u201415/8",
        "advantage": "**",
        "activeframes": "6(7\u20148/9\u201419)"
      },
      {
        "movename": "Down B (Focus Attack)",
        "totalframes": "55, 55, 114",
        "landinglag": "--",
        "notes": "Stage 1: Can dash from frame 26 of entering charge or immediately after a successful hit\r\n\t\tStage 2: Focus armor begins on frame 1 and lasts until the 11 frames of the punch\r\n\t\tStage 3: This stage is unblockable",
        "startup": "11 (+21), 11(+31), 11(+59)",
        "basedamage": "12.0, 10.0, 17.0",
        "shieldlag": "17, 19, unblockable",
        "shieldstun": "11, 10, unblockable",
        "advantage": "-33, -34, unblockable",
        "activeframes": "32\u201433/42\u201443/70\u201471"
      },
      {
        "movename": "Focus Attack, Dash Cancel",
        "totalframes": "19/19",
        "landinglag": "--",
        "notes": "First advantage is on stage 1 hit, second advantage is on stage 2 hit",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "-8/-9",
        "activeframes": "**"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "16",
        "landinglag": "--",
        "notes": "Total frames includes 11 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "16",
        "basedamage": "9.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "23",
        "basedamage": "12.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "46",
        "landinglag": "--",
        "notes": "Kicks on frame 27",
        "startup": "18",
        "basedamage": "8.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "18/19",
        "basedamage": "3.0/6.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "21/26",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15."
      },
      {
        "movename": "Backward Roll",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16."
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "49",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-27."
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "67",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "73",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "80",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "89",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "102",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      }
    ],
    "stats": {
      "Weight": "103",
      "Gravity": "0.120",
      "Walk Speed": "0.75",
      "Run Speed": "1.6",
      "Initial Dash": "1.76",
      "Air Speed": "1.12",
      "Total Air Acceleration": "0.035",
      "SH / FH / SHFF / FHFF Frames": "31 / 40 / 23 / 30",
      "Fall Speed / Fast Fall Speed": "1.6 / 2.24",
      "Out of Shield, Up B": "6 frames",
      "Out of Shield, Neutral Air": "7 frames",
      "Out of Shield, Up Air or Up Smash": "9 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "samus": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "17",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 15.",
        "startup": "3",
        "basedamage": "3.0",
        "shieldlag": "5",
        "shieldstun": "4",
        "advantage": "-10",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Jab 2",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "8.0",
        "shieldlag": "7",
        "shieldstun": "8",
        "advantage": "-15",
        "activeframes": "6\u20149"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "Deals 1.0 more damage when angled.",
        "startup": "8",
        "basedamage": "8.0/9.0/10.0",
        "shieldlag": "7/7/8",
        "shieldstun": "78/9/10",
        "advantage": "-17/-16/-15",
        "activeframes": "8\u201410"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "13.0",
        "shieldlag": "9",
        "shieldstun": "12",
        "advantage": "-12",
        "activeframes": "15\u201418"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "12.0",
        "shieldlag": "9",
        "shieldstun": "11",
        "advantage": "-27",
        "activeframes": "6\u20148"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "7.0/10.0/6.0",
        "shieldlag": "7/8/6",
        "shieldstun": "7/10/6",
        "advantage": "-26",
        "activeframes": "8\u20149(10\u201413/14\u201418)"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "Deals 1.0 more damage when angled up, 1.0 less when angled down. Charge hold frame is 3.",
        "startup": "10",
        "basedamage": "12.0/14.0",
        "shieldlag": "9/10",
        "shieldstun": "8/10",
        "advantage": "-30/-28",
        "activeframes": "10\u201411"
      },
      {
        "movename": "Up Smash",
        "totalframes": "56",
        "landinglag": "--",
        "notes": "Charge hold frame is 6",
        "startup": "11/15/19/23/27",
        "basedamage": "3.0/6.0",
        "shieldlag": "5/6",
        "shieldstun": "3/5",
        "advantage": "-24",
        "activeframes": "11\u201412/15\u201416/19\u201420/23\u201424/27\u201428"
      },
      {
        "movename": "Down Smash",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "Charge hold frame is 3",
        "startup": "9/17",
        "basedamage": "10.0/12.0",
        "shieldlag": "8/9",
        "shieldstun": "7/8",
        "advantage": "-28/-19",
        "activeframes": "9\u201410/17\u201418"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "45",
        "landinglag": "9",
        "notes": "Autocancels on frame 1-7 and 35 onward",
        "startup": "8/14",
        "basedamage": "10.0/9.0",
        "shieldlag": "8/7",
        "shieldstun": "4/4",
        "advantage": "-5/-5",
        "activeframes": "8\u201411/14\u201415(16\u201422)"
      },
      {
        "movename": "Forward Air",
        "totalframes": "59",
        "landinglag": "14",
        "notes": "Autocancels on frame 47 onward",
        "startup": "6/12/18/24/30",
        "basedamage": "3.0/1.6/5.0",
        "shieldlag": "5/4/12",
        "shieldstun": "2/2/3",
        "advantage": "-12/-12/-11",
        "activeframes": "6\u20147/12\u201413/18\u201419/24\u201425/30\u201431"
      },
      {
        "movename": "Back Air",
        "totalframes": "41",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-8 and 42 onward",
        "startup": "9",
        "basedamage": "14.0/9.0",
        "shieldlag": "11/7",
        "shieldstun": "5/4",
        "advantage": "-9/-10",
        "activeframes": "9\u201410(11\u201414)"
      },
      {
        "movename": "Up Air",
        "totalframes": "39",
        "landinglag": "18",
        "notes": "Autocancels on frame 1-2 and 34 onward",
        "startup": "5/7/10/13/16",
        "basedamage": "3.0/1.2/4.0",
        "shieldlag": "5/3/10",
        "shieldstun": "2/2/3",
        "advantage": "-16/-16/-15",
        "activeframes": "5/7/10/13/16\u201417"
      },
      {
        "movename": "Down Air",
        "totalframes": "48",
        "landinglag": "12",
        "notes": "Autocancels on frame 1-3 and 34 onward",
        "startup": "17",
        "basedamage": "10.0/14.0",
        "shieldlag": "8/10",
        "shieldstun": "4/5",
        "advantage": "-8/-7",
        "activeframes": "17\u201418/19\u201421/22\u201423"
      },
      {
        "movename": "Z Air",
        "totalframes": "59",
        "landinglag": "8",
        "notes": "--",
        "startup": "8/16",
        "basedamage": "1.5",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-5",
        "activeframes": "8\u201415/16\u201417"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Charge Shot)",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "Startup is 3 from charge state. Takes 13 frames to enter charge state.",
        "startup": "3(+13)",
        "basedamage": "5.0\u201426.1",
        "shieldlag": "9\u201424",
        "shieldstun": "3\u20148",
        "advantage": "-16 to +4",
        "activeframes": "16\u201474"
      },
      {
        "movename": "Charge Shot, Full Charge",
        "totalframes": "50",
        "landinglag": "--",
        "notes": "Takes 125 frames to reach full charge",
        "startup": "16",
        "basedamage": "28.0",
        "shieldlag": "24",
        "shieldstun": "8",
        "advantage": "-2",
        "activeframes": "16\u201474"
      },
      {
        "movename": "Side B (Homing Missle)",
        "totalframes": "54/59",
        "landinglag": "--",
        "notes": "Projectile lasts until frame 118. Total frames is 59 in the air for either missile type.",
        "startup": "18",
        "basedamage": "8.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-26",
        "activeframes": "18\u2014135"
      },
      {
        "movename": "Side B (Super Missle)",
        "totalframes": "57/59",
        "landinglag": "30",
        "notes": "Projectile lasts until frame 87. Starts moving forward around frame 50, allowing for followups.",
        "startup": "21",
        "basedamage": "12.0",
        "shieldlag": "9",
        "shieldstun": "4",
        "advantage": "-24",
        "activeframes": "21\u201496"
      },
      {
        "movename": "Up B (Screw Attack)",
        "totalframes": "--",
        "landinglag": "24",
        "notes": "Invulnerable on frame 3-6",
        "startup": "4/7/10/12/15/18/21/24/25/27",
        "basedamage": "3.0/1.0/2.0",
        "shieldlag": "5/4",
        "shieldstun": "4/2",
        "advantage": "--",
        "activeframes": "4\u20146/7/10/12/15/18/21/24/25\u201426"
      },
      {
        "movename": "Up B, Air (Screw Attack, Air)",
        "totalframes": "--",
        "landinglag": "24",
        "notes": "Invulnerable on frame 3-4",
        "startup": "5/7/9/11/13/15/17/19/21/23/25/27",
        "basedamage": "1.0",
        "shieldlag": "4",
        "shieldstun": "2",
        "advantage": "--",
        "activeframes": "5/7/9/11/13/15/17/19/21/23/25/27\u201428"
      },
      {
        "movename": "Down B (Bomb)",
        "totalframes": "47/44/48",
        "landinglag": "--",
        "notes": "\"Explosion occurs one frame after touching a target. Bomb explodes automatically on frame 81. Total frames is 44 if the player is holding down.  And 48 in the air with no way to reduce it",
        "startup": "33\u201480",
        "basedamage": "4.0/5.0",
        "shieldlag": "5",
        "shieldstun": "2",
        "advantage": "--",
        "activeframes": "33\u201480/1\u201418"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "59",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "67",
        "landinglag": "--",
        "notes": "--",
        "startup": "17",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "62",
        "landinglag": "--",
        "notes": "--",
        "startup": "18",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Total frames includes 15 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "16",
        "basedamage": "10.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "10.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "15/16",
        "basedamage": "5.0/7.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "21",
        "basedamage": "8.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "21/26",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-18"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-20"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "56",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-29"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "80",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "86",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "96",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "113",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "130",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "108",
      "Gravity": "0.075",
      "Walk Speed": "1.115",
      "Run Speed": "1.654",
      "Initial Dash": "1.87",
      "Air Speed": "1.103",
      "Total Air Acceleration": "0.09",
      "SH / FH / SHFF / FHFF Frames": "44 / 61 / 31 / 43",
      "Fall Speed / Fast Fall Speed": "1.33 / 2.168",
      "Out of Shield, Up B": "4 frames",
      "Out of Shield, Up Air": "8 frames",
      "Out of Shield, Neutral Air or Z Air or Up Smash": "11 frames",
      "Shield Grab (Grab, post-Shieldstun)": "19 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "sheik": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "17",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 4.",
        "startup": "2",
        "basedamage": "2.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-12",
        "activeframes": "2"
      },
      {
        "movename": "Jab 2",
        "totalframes": "17",
        "landinglag": "--",
        "notes": "Transitions to Rapid jab as early as frame 5.",
        "startup": "3",
        "basedamage": "1.6",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-11",
        "activeframes": "3"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "5/4/9...",
        "basedamage": "0.3",
        "shieldlag": "4",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "2.0",
        "shieldlag": "9",
        "shieldstun": "3",
        "advantage": "-27",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "24",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "3.0",
        "shieldlag": "5",
        "shieldstun": "4",
        "advantage": "-15",
        "activeframes": "5\u20148"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "5/16",
        "basedamage": "3.0/4.0",
        "shieldlag": "5/5",
        "shieldstun": "4/5",
        "advantage": "-11",
        "activeframes": "5\u20148/16\u201423"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "26",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "4.5",
        "shieldlag": "5",
        "shieldstun": "5",
        "advantage": "-16",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "7.0",
        "shieldlag": "9",
        "shieldstun": "10",
        "advantage": "-19",
        "activeframes": "5\u20146(7\u20148)"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "Charge hold is frame 3",
        "startup": "12/20",
        "basedamage": "5.0/8.0",
        "shieldlag": "6/7",
        "shieldstun": "4/6",
        "advantage": "-18",
        "activeframes": "12/20\u201421"
      },
      {
        "movename": "Up Smash",
        "totalframes": "52",
        "landinglag": "--",
        "notes": "Arm intangibility on frame 8-15. Charge hold is frame 6",
        "startup": "11/14",
        "basedamage": "15.0/11.0",
        "shieldlag": "13/8",
        "shieldstun": "10/8",
        "advantage": "-30",
        "activeframes": "11/14\u201415"
      },
      {
        "movename": "Down Smash",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "Charge hold is frame 1",
        "startup": "11/18",
        "basedamage": "4.0/6.0",
        "shieldlag": "5/6",
        "shieldstun": "4/5",
        "advantage": "-28",
        "activeframes": "11\u201412/18\u201419"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "49",
        "landinglag": "6",
        "notes": "Autocancels on frame 1-2 and 31 onward",
        "startup": "3",
        "basedamage": "6.0/4.0",
        "shieldlag": "6/5",
        "shieldstun": "3/3",
        "advantage": "-3/-3",
        "activeframes": "3\u20146(7\u201430)"
      },
      {
        "movename": "Forward Air",
        "totalframes": "34",
        "landinglag": "5",
        "notes": "Autocancels on frame 1-4 and 11 onward",
        "startup": "5",
        "basedamage": "3.8/4.5",
        "shieldlag": "4/5",
        "shieldstun": "3/3",
        "advantage": "-2/-2",
        "activeframes": "5\u20147"
      },
      {
        "movename": "Back Air",
        "totalframes": "37",
        "landinglag": "7",
        "notes": "Autocancels on frame 1-3 and 31 onward",
        "startup": "4",
        "basedamage": "7.5/6.0",
        "shieldlag": "7/6",
        "shieldstun": "3/3",
        "advantage": "-4/-4",
        "activeframes": "4\u20146(7\u201414)"
      },
      {
        "movename": "Up Air",
        "totalframes": "43",
        "landinglag": "13",
        "notes": "Autocancels on frame 1-3 and 44 onward",
        "startup": "4/8/12/23",
        "basedamage": "1.0/4.0",
        "shieldlag": "4/11",
        "shieldstun": "2/3",
        "advantage": "-11/-10",
        "activeframes": "4/8/12/23\u201424"
      },
      {
        "movename": "Down Air",
        "totalframes": "54",
        "landinglag": "22",
        "notes": "Landing hit on frame 1. Autocancels on frame 1-2 and 53 onward",
        "startup": "15",
        "basedamage": "10.0/2.0",
        "shieldlag": "8/4",
        "shieldstun": "4/3",
        "advantage": "-18",
        "activeframes": "15\u201418/19\u201433/1\u20142"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Needle Storm)",
        "totalframes": "41/35",
        "landinglag": "--",
        "notes": "Startup is 5 from a charging state. 7 frames to enter charge state. Takes 4 frames to exit charge with shield. Second total frames is for the air.",
        "startup": "4/7/10/13/16 (+7)",
        "basedamage": "1.5/0.8",
        "shieldlag": "4/4",
        "shieldstun": "2/2",
        "advantage": "-18",
        "activeframes": "**"
      },
      {
        "movename": "Needle Storm, Full Charge",
        "totalframes": "48/42",
        "landinglag": "16",
        "notes": "86 frames to reach full charge. Second total frames is for the air.",
        "startup": "11/14/17/20/23/26",
        "basedamage": "1.5/0.8",
        "shieldlag": "4/4",
        "shieldstun": "2/2",
        "advantage": "-15",
        "activeframes": "**"
      },
      {
        "movename": "Side B (Burst Grenade)",
        "totalframes": "75\u2014104",
        "landinglag": "--",
        "notes": "From release, startup is 29/32/35/38/41/44/50 and endlag is 39 frames. All but the final hit are just windboxes.",
        "startup": "13/67/70/73/76/79/82/88",
        "basedamage": "1.0/12.6",
        "shieldlag": "4/11",
        "shieldstun": "2/4",
        "advantage": "+28",
        "activeframes": "**"
      },
      {
        "movename": "Up B (Vanish)",
        "totalframes": "95",
        "landinglag": "20",
        "notes": "Invulnerable on frame 14-60 on the ground or 19-55 in the air. Landing lag only occurs if you enter special fall.",
        "startup": "36/55",
        "basedamage": "12.0/5.0",
        "shieldlag": "9/6",
        "shieldstun": "4/6",
        "advantage": "-33",
        "activeframes": "36\u201438/55\u201457"
      },
      {
        "movename": "Down B (Bouncing Fish)",
        "totalframes": "63/50/45",
        "landinglag": "35/19",
        "notes": "First startup is if you attack early. Second landing lag is after a hit. Endlag is 79 on hit, or after 20 frames initiate a 29 total frames rebound attack with 3 startup. First total frames is on level ground. Second is in the air. Third is in the air if you attack early.",
        "startup": "18/26",
        "basedamage": "11.0",
        "shieldlag": "14",
        "shieldstun": "10",
        "advantage": "-39",
        "activeframes": "**"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "15",
        "landinglag": "Total frames includes 11 frames of hitlag.",
        "notes": "--",
        "startup": "1",
        "basedamage": "1.0"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "20/22",
        "basedamage": "5.0/2.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "15/17",
        "basedamage": "5.0/2.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "19/21",
        "basedamage": "3.0/3.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "17/18",
        "basedamage": "3.0/3.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "18/23",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-14"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "26",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-12"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-14"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "44",
        "landinglag": "10",
        "notes": "Invulnerable on frame 2-26"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "63",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "67",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "74",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "85",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "93",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      }
    ],
    "stats": {
      "Weight": "78",
      "Gravity": "0.150",
      "Walk Speed": "1.47",
      "Run Speed": "2.42",
      "Initial Dash": "2.178",
      "Air Speed": "1.155",
      "Total Air Acceleration": "0.09",
      "SH / FH / SHFF / FHFF Frames": "32 / 47 / 23 / 33",
      "Fall Speed / Fast Fall Speed": "1.75 / 2.8",
      "Out of Shield, Neutral Air": "6 frames",
      "Out of Shield, Back Air or Up Air": "7 frames",
      "Out of Shield, Forward Air": "8 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "shulk": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "25",
        "landinglag": "--",
        "notes": "Transitions to jab 2 as early as frame 11",
        "startup": "5",
        "basedamage": "2.0",
        "shieldlag": "6",
        "shieldstun": "3",
        "advantage": "-17",
        "activeframes": "5"
      },
      {
        "movename": "Jab 2",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "Transitions to jab 3 as early as frame 12",
        "startup": "5",
        "basedamage": "1.5",
        "shieldlag": "4",
        "shieldstun": "3",
        "advantage": "-25",
        "activeframes": "5"
      },
      {
        "movename": "Jab 3",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "5.0/4.2",
        "shieldlag": "12/11",
        "shieldstun": "6/5",
        "advantage": "-32",
        "activeframes": "6\u20147/8"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "13.5/12.0",
        "shieldlag": "9/9",
        "shieldstun": "12/11",
        "advantage": "-19/-20",
        "activeframes": "12\u201413"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "10.0/9.0",
        "shieldlag": "8/7",
        "shieldstun": "10/9",
        "advantage": "-18/-19",
        "activeframes": "11\u201412/13\u201423"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "9.5/7.5",
        "shieldlag": "8/7",
        "shieldstun": "9/8",
        "advantage": "-12/-13",
        "activeframes": "10\u201411"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "12.5/11.0",
        "shieldlag": "9/8",
        "shieldstun": "12/10",
        "advantage": "-16/-18",
        "activeframes": "12\u201413"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "67",
        "landinglag": "--",
        "notes": "Charge hold is frame 8",
        "startup": "14/23",
        "basedamage": "5.5/13.0/11.5",
        "shieldlag": "9/16/15",
        "shieldstun": "5/9/8",
        "advantage": "-35/-36",
        "activeframes": "14\u201415/23 (Angled: 14\u201416/23)"
      },
      {
        "movename": "Up Smash",
        "totalframes": "67",
        "landinglag": "--",
        "notes": "Charge hold is frame 10",
        "startup": "18/30",
        "basedamage": "4.5/13.5",
        "shieldlag": "5/9",
        "shieldstun": "4/9",
        "advantage": "-28",
        "activeframes": "(18\u201421/22\u201429)/(30\u201433)"
      },
      {
        "movename": "Down Smash",
        "totalframes": "82",
        "landinglag": "--",
        "notes": "Charge hold is frame 4",
        "startup": "18/23/28/35/41",
        "basedamage": "14.0 / 11.0 / 12.0 / 10.0 / 10.0 / 8.0 / 8.0 / 6.0 / 6.0 / 4.0",
        "shieldlag": "10/8/9/8/8/ 7/7/6/6/5",
        "shieldstun": "-/8/8/7/7/ 6/6/5/5/4",
        "advantage": "-/-56/-51/-52/-47/-48/-41/-42/-36/-37",
        "activeframes": "18\u201419/23\u201424/28\u201429/35\u201436/41\u201442"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "59",
        "landinglag": "6",
        "notes": "Autocancels on frame 1-2 and 54 onward",
        "startup": "13",
        "basedamage": "8.5/7.5",
        "shieldlag": "7/7",
        "shieldstun": "4/3",
        "advantage": "-2/-3",
        "activeframes": "13\u201430"
      },
      {
        "movename": "Forward Air",
        "totalframes": "41",
        "landinglag": "10",
        "notes": "Autocancels on frame 1-4 and 42 onward",
        "startup": "14",
        "basedamage": "8.0/6.5",
        "shieldlag": "7/6",
        "shieldstun": "4/3",
        "advantage": "-6/-7",
        "activeframes": "14\u201418"
      },
      {
        "movename": "Back Air",
        "totalframes": "54",
        "landinglag": "11",
        "notes": "Autocancels on frame 1-2 and 43 onward",
        "startup": "19",
        "basedamage": "12.5/8.5",
        "shieldlag": "9/7",
        "shieldstun": "5/4",
        "advantage": "-6/-7",
        "activeframes": "19\u201421"
      },
      {
        "movename": "Up Air",
        "totalframes": "54",
        "landinglag": "9",
        "notes": "Autocancels on frame 1-3 and 53 onward",
        "startup": "14/24",
        "basedamage": "5.5/10.5/8.0",
        "shieldlag": "7/10/9",
        "shieldstun": "3/4/4",
        "advantage": "-6/-5/-5",
        "activeframes": "14\u201416/24\u201426"
      },
      {
        "movename": "Down Air",
        "totalframes": "60",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-2 and 52 onward",
        "startup": "14/23",
        "basedamage": "7.5/11.5/10.5",
        "shieldlag": "7/9/8",
        "shieldstun": "3/5/4",
        "advantage": "-11/-9/-10",
        "activeframes": "14\u201415/23\u201425"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Monado Arts)",
        "totalframes": "9",
        "landinglag": "--",
        "notes": "Takes 4 frames to activate an art upon selection. 14 I-frames upon activating an Art. Activation animation cancellable on frame 10. Arts last for approx 6 seconds and with an 18 second individual cooldown.",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Side B (Back Slash)",
        "totalframes": "71",
        "landinglag": "40",
        "notes": "Hits directly above Shulk at frame 22. Total frames is for level ground. Landing hit deals 1.0 less from the back. Block stats are for landing hit.",
        "startup": "22",
        "basedamage": "10.0/9.0/16.0/14.0",
        "shieldlag": "8/7/15/14",
        "shieldstun": "10/9/14/12",
        "advantage": "-29/-30/-25/-27",
        "activeframes": "22\u201423"
      },
      {
        "movename": "Up B (Air Slash)",
        "totalframes": "--",
        "landinglag": "30",
        "notes": "Transitions to second slash as early as frame 20",
        "startup": "10",
        "basedamage": "6.0/5.0",
        "shieldlag": "6/6",
        "shieldstun": "6/6",
        "advantage": "**",
        "activeframes": "10\u201411/12\u201414/15\u201417"
      },
      {
        "movename": "Air Slash 2",
        "totalframes": "--",
        "landinglag": "30",
        "notes": "--",
        "startup": "9",
        "basedamage": "5.5",
        "shieldlag": "8",
        "shieldstun": "6",
        "advantage": "**",
        "activeframes": "9\u201410"
      },
      {
        "movename": "Down B (Vision)",
        "totalframes": "69",
        "landinglag": "-",
        "notes": "Invulnerable on frame 6. Counters on 7-41 when fresh. No data on Activated/Reversal Vision at this time.",
        "startup": "7 (Start of Counter)",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "15",
        "landinglag": "Total frames includes 14 frames of hitlag.",
        "notes": "--",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "15/16",
        "basedamage": "3.0/5.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "18/20",
        "basedamage": "3.0/6.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "20/22",
        "basedamage": "3.0/4.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "--",
        "startup": "23/25",
        "basedamage": "3.0/2.5"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "49",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-30"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "68",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "77",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "83",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "95",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "107",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "97",
      "Gravity": "0.098",
      "Walk Speed": "1.155",
      "Run Speed": "1.672",
      "Initial Dash": "1.87",
      "Air Speed": "1.113",
      "Total Air Acceleration": "0.05",
      "SH / FH / SHFF / FHFF Frames": "37 / 50 / 26 / 36",
      "Fall Speed / Fast Fall Speed": "1.58 / 2.528",
      "Out of Shield, Up B": "10 frames",
      "Out of Shield, Neutral Air or Jab": "16 frames",
      "Out of Shield, Forward Air or Up Air or Down Air": "17 frames",
      "Shield Grab (Grab, post-Shieldstun)": "11 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "simon": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 on frame 11. Transitions to Whip dangle from 9.",
        "startup": "5",
        "basedamage": "2.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-21",
        "activeframes": "5"
      },
      {
        "movename": "Jab 2",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Transitions to rapid jab on frame 10.",
        "startup": "3",
        "basedamage": "2.0",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-23",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "9/12/15...",
        "basedamage": "0.5",
        "shieldlag": "4",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "3",
        "basedamage": "2.5",
        "shieldlag": "10",
        "shieldstun": "4",
        "advantage": "-37",
        "activeframes": "**"
      },
      {
        "movename": "Whip Dangle",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "Can initiate from Jab, F-Tilt, and all three smash attacks. 19 lag from putting it away.",
        "startup": "--",
        "basedamage": "1.0/1.5",
        "shieldlag": "0/0",
        "shieldstun": "3/3",
        "advantage": "**",
        "activeframes": "**"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "10.0/12.0",
        "shieldlag": "8/9",
        "shieldstun": "10/11",
        "advantage": "-8/-7",
        "activeframes": "12\u201413"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "10.0",
        "shieldlag": "8",
        "shieldstun": "10",
        "advantage": "-17",
        "activeframes": "10\u201422"
      },
      {
        "movename": "Down Tilt 1",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "Can cancel hitlag from first hit with second.",
        "startup": "7",
        "basedamage": "5.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-31",
        "activeframes": "7\u201423"
      },
      {
        "movename": "Down Tilt 2",
        "totalframes": "57/43",
        "landinglag": "--",
        "notes": "Total frames is 57 on level ground. 43 if you go over an edge.",
        "startup": "8",
        "basedamage": "7.0/3.5",
        "shieldlag": "8/5",
        "shieldstun": "7/4",
        "advantage": "-42/-28",
        "activeframes": "8\u201428"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "54",
        "landinglag": "--",
        "notes": "--",
        "startup": "10/13/16/19/22/24",
        "basedamage": "1.7/3.5",
        "shieldlag": "4/5",
        "shieldstun": "-/4",
        "advantage": "-26",
        "activeframes": "10/13/16/19/22/24"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "62",
        "landinglag": "--",
        "notes": "Charge hold is frame 5",
        "startup": "24",
        "basedamage": "14.0/18.0",
        "shieldlag": "11/13",
        "shieldstun": "10/12",
        "advantage": "-28/-26",
        "activeframes": "24\u201425"
      },
      {
        "movename": "Up Smash",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "Charge hold is frame 2",
        "startup": "18",
        "basedamage": "14.0/16.0",
        "shieldlag": "10/10",
        "shieldstun": "10/11",
        "advantage": "-27/-26",
        "activeframes": "18\u201420"
      },
      {
        "movename": "Down Smash",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "Charge hold is frame 2",
        "startup": "14/20",
        "basedamage": "**",
        "shieldlag": "12.0/16.0",
        "shieldstun": "9/10",
        "advantage": "Chain/Ball",
        "activeframes": "14\u201415/20\u201421"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "42",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-6 and 36 onward",
        "startup": "8/11/14/17/20/23/26",
        "basedamage": "1.0/4.0",
        "shieldlag": "4/5",
        "shieldstun": "2/3",
        "advantage": "-12/-11",
        "activeframes": "8/11/14/17/20/23/26"
      },
      {
        "movename": "Forward Air",
        "totalframes": "39",
        "landinglag": "10",
        "notes": "Tethers on frame 13. Autocancels on frame 29 onward",
        "startup": "14",
        "basedamage": "10.0/12.0/2.0",
        "shieldlag": "8/9/4",
        "shieldstun": "4/5/2",
        "advantage": "-6/-5/-8",
        "activeframes": "14"
      },
      {
        "movename": "Back Air",
        "totalframes": "39",
        "landinglag": "10",
        "notes": "Tethers on frame 13. Autocancels on frame 28 onward",
        "startup": "14",
        "basedamage": "10.0/12.0/2.0",
        "shieldlag": "8/9/4",
        "shieldstun": "4/5/2",
        "advantage": "-6/-5/-8",
        "activeframes": "14\u201415"
      },
      {
        "movename": "Up Air",
        "totalframes": "39",
        "landinglag": "10",
        "notes": "Tethers on frame 13. Autocancels on frame 1-11 and 28 onward",
        "startup": "14",
        "basedamage": "10.0/12.0/2.0",
        "shieldlag": "8/9/4",
        "shieldstun": "4/5/2",
        "advantage": "-6/-5/-8",
        "activeframes": "14\u201416"
      },
      {
        "movename": "Down Air",
        "totalframes": "48",
        "landinglag": "26",
        "notes": "A hit results in 26 frames of endlag. Autocancels on frame 1-3 and 47 onward",
        "startup": "13",
        "basedamage": "12.0/7.0",
        "shieldlag": "10/7",
        "shieldstun": "5/3",
        "advantage": "-21/-23",
        "activeframes": "13\u201414/15\u201436"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Axe)",
        "totalframes": "66",
        "landinglag": "--",
        "notes": "--",
        "startup": "30",
        "basedamage": "15.0",
        "shieldlag": "15",
        "shieldstun": "15",
        "advantage": "-6",
        "activeframes": "30\u201497"
      },
      {
        "movename": "Side B (Cross)",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "9 frame animation of catching the cross if no other action is being performed.",
        "startup": "19",
        "basedamage": "8.0/6.0/5.0",
        "shieldlag": "7/7/6",
        "shieldstun": "3/3/3",
        "advantage": "-15",
        "activeframes": "19\u201464"
      },
      {
        "movename": "Up B (Uppercut)",
        "totalframes": "--",
        "landinglag": "26",
        "notes": "--",
        "startup": "6/9/12/15/18/21",
        "basedamage": "2.0/1.5/6.0",
        "shieldlag": "6/4/6",
        "shieldstun": "-/3/6",
        "advantage": "**",
        "activeframes": "6/9/12/15/18/21"
      },
      {
        "movename": "Down B (Holy Water)",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "Lands on level ground at frame 32 if nothing is in the way.",
        "startup": "18",
        "basedamage": "2.0\u20142.9",
        "shieldlag": "4",
        "shieldstun": "2",
        "advantage": "**",
        "activeframes": "18..."
      },
      {
        "movename": "Holy Water Explosion",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "Only explodes on contact with the ground or a wall. Bounces up off shields and hitboxes but does not disappear. Simon's explosion is Fire-type damage, Richter's explosion is Aura-type damage.",
        "startup": "1/4/7/15/23/31/39/47/55",
        "basedamage": "1.4",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "1/4/7/15/23/31/39/47/55"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "14",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "18",
        "landinglag": "**",
        "notes": "Total frames includes 13 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "24",
        "basedamage": "7.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "18",
        "basedamage": "7.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "46",
        "landinglag": "--",
        "notes": "--",
        "startup": "25/26",
        "basedamage": "6.0/4.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "--",
        "startup": "33",
        "basedamage": "8.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "21/26",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15."
      },
      {
        "movename": "Backward Roll",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16."
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "46",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-29."
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "62",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "69",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "76",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "90",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "104",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      }
    ],
    "stats": {
      "Weight": "107",
      "Gravity": "0.085",
      "Walk Speed": "0.76",
      "Run Speed": "1.52",
      "Initial Dash": "1.73",
      "Air Speed": "0.94",
      "Total Air Acceleration": "0.03",
      "SH / FH / SHFF / FHFF Frames": "41 / 51 / 29 / 36",
      "Fall Speed / Fast Fall Speed": "1.85 / 2.96",
      "Out of Shield, Up B": "6 frames",
      "Out of Shield, Neutral Air": "11 frames",
      "Out of Shield, Jab": "16 frames",
      "Shield Grab (Grab, post-Shieldstun)": "14 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "snake": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "15",
        "landinglag": "--",
        "notes": "Transitions to jab 2 as early as frame 6",
        "startup": "3",
        "basedamage": "2.5",
        "shieldlag": "8",
        "shieldstun": "4",
        "advantage": "-8",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Jab 2",
        "totalframes": "24",
        "landinglag": "--",
        "notes": "Transitions to jab 3 as early as frame 7",
        "startup": "4",
        "basedamage": "2.5",
        "shieldlag": "8",
        "shieldstun": "4",
        "advantage": "-16",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Jab 3",
        "totalframes": "46",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "6.0",
        "shieldlag": "11",
        "shieldstun": "6",
        "advantage": "-32",
        "activeframes": "8\u20149"
      },
      {
        "movename": "Forward Tilt 1",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "Transitions to Ftilt 2 as early as frame 10",
        "startup": "4",
        "basedamage": "4.0",
        "shieldlag": "9",
        "shieldstun": "5",
        "advantage": "-22",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Forward Tilt 2",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "9.0/10.0/11.0",
        "shieldlag": "7/7/8",
        "shieldstun": "9/9/10",
        "advantage": "-22/-22/-21",
        "activeframes": "8"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "14.5/13.5",
        "shieldlag": "10/9",
        "shieldstun": "13/12",
        "advantage": "-18/**",
        "activeframes": "6\u20147/8\u201413"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "12.0",
        "shieldlag": "9",
        "shieldstun": "11",
        "advantage": "-13",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "Arm intangibility on frame 5-12",
        "startup": "5",
        "basedamage": "11.0/8.0",
        "shieldlag": "8/7",
        "shieldstun": "10/8",
        "advantage": "-26/**",
        "activeframes": "5\u20148/9\u201412"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "73",
        "landinglag": "--",
        "notes": "Charge hold is frame 38",
        "startup": "41",
        "basedamage": "22.0",
        "shieldlag": "13",
        "shieldstun": "14",
        "advantage": "-18",
        "activeframes": "41\u201443"
      },
      {
        "movename": "Up Smash",
        "totalframes": "54",
        "landinglag": "--",
        "notes": "Charge hold is frame 24",
        "startup": "11/35",
        "basedamage": "4.0/14.0",
        "shieldlag": "5/10",
        "shieldstun": "4/10",
        "advantage": "-39/+1",
        "activeframes": "11\u201412/36\u2014**"
      },
      {
        "movename": "Down Smash",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "Charge hold is frame 5",
        "startup": "8/20",
        "basedamage": "12.0/14.0",
        "shieldlag": "9/10",
        "shieldstun": "8/10",
        "advantage": "-28/-14",
        "activeframes": "8\u201410/20\u201422"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "59",
        "landinglag": "16",
        "notes": "Autocancels on frame 1-3 and 50 onward",
        "startup": "10/18/26/36",
        "basedamage": "3.0/12.0",
        "shieldlag": "5/9",
        "shieldstun": "2/5",
        "advantage": "-14/-11",
        "activeframes": "10\u201411/18\u201419/26\u201427/36\u201438"
      },
      {
        "movename": "Forward Air",
        "totalframes": "69",
        "landinglag": "19",
        "notes": "Autocancels on frame 1-3 and 63 onward",
        "startup": "23",
        "basedamage": "14.0/15.0",
        "shieldlag": "10/10",
        "shieldstun": "5/5",
        "advantage": "-14/-14",
        "activeframes": "23\u201426"
      },
      {
        "movename": "Back Air",
        "totalframes": "42",
        "landinglag": "19",
        "notes": "Autocancels on frame 40 onward",
        "startup": "7",
        "basedamage": "16.0/14.0/10.0/9.0",
        "shieldlag": "10/10/8/7",
        "shieldstun": "6/5/4/4",
        "advantage": "-13/-14/-15/-15",
        "activeframes": "7\u20149/10\u201426"
      },
      {
        "movename": "Up Air",
        "totalframes": "47",
        "landinglag": "15",
        "notes": "Autocancels on frame 1-4 and 36 onward",
        "startup": "10",
        "basedamage": "14.0/10.0",
        "shieldlag": "10/8",
        "shieldstun": "5/4",
        "advantage": "-10/-11",
        "activeframes": "10\u201412/13\u201423"
      },
      {
        "movename": "Down Air",
        "totalframes": "59",
        "landinglag": "20",
        "notes": "Autocancels on frame 54 onward",
        "startup": "3/10/17/25",
        "basedamage": "4.0/3.0/10.0",
        "shieldlag": "5/5/8",
        "shieldstun": "3/2/4",
        "advantage": "-17/-18/-16",
        "activeframes": "3\u20144/10\u201411/17\u201418/25\u201426"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Grenade)",
        "totalframes": "21",
        "landinglag": "--",
        "notes": "Pull Pin animation takes 21 frames before you can throw or shield/dodge. Grenades explode on roughly frame 150. Grenade generates on frame 1.",
        "startup": "1 (Grenade Pull)",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Grenade (Neutral Throw, Smash Throw, Underhand Throw)",
        "totalframes": "27, 31, 25",
        "landinglag": "--",
        "notes": "Grenade collision and explosion vary slightly in damage",
        "startup": "8, 10, 9",
        "basedamage": "2.0\u20143.1/8.9\u20149.9",
        "shieldlag": "5/8",
        "shieldstun": "2/4",
        "advantage": "**",
        "activeframes": "**"
      },
      {
        "movename": "Side B (Nikita)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "Takes 27 frames to cancel with shield. 29 frame fist pump animation after a hit.",
        "startup": "41",
        "basedamage": "7.0/14.0",
        "shieldlag": "7/10",
        "shieldstun": "3/5",
        "advantage": "-19/-14",
        "activeframes": "41\u2014**"
      },
      {
        "movename": "Up B (Cypher)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "Heavy armor on frame 7\u201494. Frame 47 is the earliest you can cancel the move.",
        "startup": "--",
        "basedamage": "6.0",
        "shieldlag": "6",
        "shieldstun": "3",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Down B (C4)",
        "totalframes": "24",
        "landinglag": "-",
        "notes": "--",
        "startup": "9",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "C4 Detonate/Explosion",
        "totalframes": "32",
        "landinglag": "-",
        "notes": "--",
        "startup": "25",
        "basedamage": "17.0",
        "shieldlag": "11/11",
        "shieldstun": "15/6",
        "advantage": "+20 / +11",
        "activeframes": "25\u201427"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "Total frames includes 14 frames of hitlag.",
        "notes": "--",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "21",
        "basedamage": "9.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "--",
        "startup": "20",
        "basedamage": "9.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "22/23",
        "basedamage": "7.0/4.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "--",
        "startup": "35",
        "basedamage": "9.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "21/26",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "47",
        "landinglag": "10",
        "notes": "Invulnerable on frame 4-28"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "64",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "75",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "81",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "99",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "108",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 4-22"
      }
    ],
    "stats": {
      "Weight": "106",
      "Gravity": "0.080",
      "Walk Speed": "0.882",
      "Run Speed": "1.595",
      "Initial Dash": "1.76",
      "Air Speed": "0.987",
      "Total Air Acceleration": "0.03",
      "SH / FH / SHFF / FHFF Frames": "37 / 42 / 23 / 28",
      "Fall Speed / Fast Fall Speed": "1.73 / 2.768",
      "Out of Shield, Down Air": "6 frames",
      "Out of Shield, Back Air": "10 frames",
      "Out of Shield, Up Smash": "11 frames",
      "Shield Grab (Grab, post-Shieldstun)": "12 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "sonic": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Transitions to jab 2 as early as frame 7",
        "startup": "3",
        "basedamage": "2.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-13",
        "activeframes": "3"
      },
      {
        "movename": "Jab 2",
        "totalframes": "21",
        "landinglag": "--",
        "notes": "Transitions to jab 3 as early as frame 6",
        "startup": "2",
        "basedamage": "1.5",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-16",
        "activeframes": "2"
      },
      {
        "movename": "Jab 3",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "4.0",
        "shieldlag": "11",
        "shieldstun": "5",
        "advantage": "-26",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "6/8",
        "basedamage": "4.0/7.0",
        "shieldlag": "5/7",
        "shieldstun": "-/7",
        "advantage": "-20",
        "activeframes": "6/8\u201411"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "First hit on frame 6 is ground only, frame 7 if anti air.",
        "startup": "6(7)/13",
        "basedamage": "2.0/6.0",
        "shieldlag": "4/6",
        "shieldstun": "3/6",
        "advantage": "-20",
        "activeframes": "6\u20148(7\u20148)/13\u201414"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "6.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-15",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "6.0/4.0",
        "shieldlag": "6/5",
        "shieldstun": "6/7",
        "advantage": "-38",
        "activeframes": "5\u20148(9\u201420)"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "Charge hold is frame 12",
        "startup": "18",
        "basedamage": "14.0",
        "shieldlag": "10",
        "shieldstun": "10",
        "advantage": "-19",
        "activeframes": "18\u201420"
      },
      {
        "movename": "Up Smash",
        "totalframes": "65",
        "landinglag": "--",
        "notes": "Invulnerable on frame 18-20. Charge hold is frame 13",
        "startup": "18/21/23/25/27/29/31/33",
        "basedamage": "5.0/1.0/2.0",
        "shieldlag": "6/4/5",
        "shieldstun": "2/-/3",
        "advantage": "-29",
        "activeframes": "18/21/23/25/27/29/31/33\u201434"
      },
      {
        "movename": "Down Smash",
        "totalframes": "54",
        "landinglag": "--",
        "notes": "Charge hold is frame 5",
        "startup": "12",
        "basedamage": "12.0",
        "shieldlag": "9",
        "shieldstun": "8",
        "advantage": "-34",
        "activeframes": "12\u201413"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "49",
        "landinglag": "10",
        "notes": "Autocancels on frame 48 onward",
        "startup": "6",
        "basedamage": "12.0/8.0/5.0",
        "shieldlag": "9/7/6",
        "shieldstun": "5/4/3",
        "advantage": "-5/-6/-7",
        "activeframes": "6\u20149(10\u201419/20\u201438)"
      },
      {
        "movename": "Forward Air",
        "totalframes": "45",
        "landinglag": "16",
        "notes": "Autocancels on frame 1-2 and 34 onward",
        "startup": "5/7/9/11/13/15",
        "basedamage": "0.8/3.0",
        "shieldlag": "4/7",
        "shieldstun": "-/2",
        "advantage": "-14/-14",
        "activeframes": "5/7/9/11/13/15"
      },
      {
        "movename": "Back Air",
        "totalframes": "37",
        "landinglag": "15",
        "notes": "Autocancels on frame 1-4 and 33 onward",
        "startup": "13",
        "basedamage": "14.0/10.0",
        "shieldlag": "12/8",
        "shieldstun": "5/4",
        "advantage": "-10/-11",
        "activeframes": "13\u201414(15\u201419)"
      },
      {
        "movename": "Up Air",
        "totalframes": "39",
        "landinglag": "13",
        "notes": "Autocancels on frame 1-4 and 16 onward",
        "startup": "5/14",
        "basedamage": "3.0/8.0",
        "shieldlag": "5/9",
        "shieldstun": "2/4",
        "advantage": "-11/-9",
        "activeframes": "5\u20147/14\u201415"
      },
      {
        "movename": "Down Air",
        "totalframes": "45",
        "landinglag": "21",
        "notes": "Autocancels on frame 1-3 and 41 onward",
        "startup": "17",
        "basedamage": "8.0/7.0",
        "shieldlag": "11/7",
        "shieldstun": "4/3",
        "advantage": "-17/-18",
        "activeframes": "17\u201419/20\u201432"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Homing Attack)",
        "totalframes": "-",
        "landinglag": "--",
        "notes": "26 endlag on hit",
        "startup": "17\u201482",
        "basedamage": "7.0\u201420.0",
        "shieldlag": "7\u201412",
        "shieldstun": "4\u201410",
        "advantage": "-22 to -16",
        "activeframes": "**"
      },
      {
        "movename": "Side B (Spin Dash)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "Invulnerable frame 17-22. Startup is 1 from a charging state with six I-frames. Stops on shields. Endlag for that is 28.",
        "startup": "17/29",
        "basedamage": "5.0/7.0\u201410.9",
        "shieldlag": "6/7\u20148",
        "shieldstun": "6/7\u201410",
        "advantage": "-22 to -18",
        "activeframes": "**"
      },
      {
        "movename": "Up B (Spring Jump)",
        "totalframes": "18",
        "landinglag": "10",
        "notes": "Invulnerable on frame 5-7. Landing lag state can be overwritten with other actions. No projectile on ground version.",
        "startup": "4",
        "basedamage": "4.0",
        "shieldlag": "5",
        "shieldstun": "2",
        "advantage": "-7",
        "activeframes": "**"
      },
      {
        "movename": "Down B (Spin Charge)",
        "totalframes": "59",
        "landinglag": "-",
        "notes": "Startup and total frames refer to minimum charge.",
        "startup": "15/17/19/21",
        "basedamage": "1.7\u20142.5/4.0",
        "shieldlag": "4\u20145/5",
        "shieldstun": "-/5",
        "advantage": "-33",
        "activeframes": "**"
      },
      {
        "movename": "Spin Dash/Spin Charge, Jump",
        "totalframes": "10",
        "landinglag": "-",
        "notes": "Jumping from an air version generates no hitbox or endlag.",
        "startup": "3",
        "basedamage": "3.0/6.0",
        "shieldlag": "5/6",
        "shieldstun": "4/6",
        "advantage": "-1",
        "activeframes": "**"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "Total frames includes 14 frames of hitlag.",
        "notes": "--",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "10/11",
        "basedamage": "1.0/6.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "66",
        "landinglag": "--",
        "notes": "--",
        "startup": "43",
        "basedamage": "7.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "22/23",
        "basedamage": "1.0/5.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "74",
        "landinglag": "--",
        "notes": "--",
        "startup": "18/26/34/42",
        "basedamage": "1.0/5.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "19/24",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-16"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "28",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-14"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "50",
        "landinglag": "10",
        "notes": "Invulnerable on frame 2-26"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "66",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "74",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "81",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "99",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "107",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      }
    ],
    "stats": {
      "Weight": "86",
      "Gravity": "0.090",
      "Walk Speed": "1.444",
      "Run Speed": "3.85",
      "Initial Dash": "2.31",
      "Air Speed": "1.208",
      "Total Air Acceleration": "0.05",
      "SH / FH / SHFF / FHFF Frames": "38 / 53 / 26 / 37",
      "Fall Speed / Fast Fall Speed": "1.65 / 2.64",
      "Out of Shield, Forward Air or Up Air": "8 frames",
      "Out of Shield, Neutral Air": "9 frames",
      "Out of Shield, Jab": "14 frames",
      "Shield Grab (Grab, post-Shieldstun)": "11 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "toon_link": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "18",
        "landinglag": "--",
        "notes": "Transitions to jab 2 as early as frame 8",
        "startup": "5",
        "basedamage": "2.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-10",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Jab 2",
        "totalframes": "20",
        "landinglag": "--",
        "notes": "Transitions to jab 3 as early as frame 9",
        "startup": "6",
        "basedamage": "2.0",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-11",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Jab 3",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "4.0",
        "shieldlag": "11",
        "shieldstun": "5",
        "advantage": "-25",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "9.0",
        "shieldlag": "7",
        "shieldstun": "9",
        "advantage": "-11",
        "activeframes": "9\u201413"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "25",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "5.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-11",
        "activeframes": "8\u201412"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "22",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "7.0",
        "shieldlag": "7",
        "shieldstun": "7",
        "advantage": "-6",
        "activeframes": "9\u201410"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "8.0",
        "shieldlag": "9",
        "shieldstun": "8",
        "advantage": "-15",
        "activeframes": "7\u20149"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "Charge hold is frame 8",
        "startup": "16",
        "basedamage": "14.0",
        "shieldlag": "12",
        "shieldstun": "10",
        "advantage": "-22",
        "activeframes": "16\u201417"
      },
      {
        "movename": "Up Smash",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "Charge hold is frame 4",
        "startup": "11",
        "basedamage": "13.0",
        "shieldlag": "9",
        "shieldstun": "9",
        "advantage": "-22",
        "activeframes": "11(12\u201413/14\u201415)"
      },
      {
        "movename": "Down Smash",
        "totalframes": "46",
        "landinglag": "--",
        "notes": "Charge hold frame is 3",
        "startup": "9/17",
        "basedamage": "12.0/13.0",
        "shieldlag": "9/9",
        "shieldstun": "8/9",
        "advantage": "-29/-20",
        "activeframes": "9\u201410/17\u201418"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "41",
        "landinglag": "7",
        "notes": "Autocancels on frame 1-2 and 41 onward",
        "startup": "6/13",
        "basedamage": "8.5/7.0",
        "shieldlag": "7/7",
        "shieldstun": "4/3",
        "advantage": "-3/-4",
        "activeframes": "6\u20147/13\u201414"
      },
      {
        "movename": "Forward Air",
        "totalframes": "38",
        "landinglag": "11",
        "notes": "Autocancels on frame 1-3 and 39 onward",
        "startup": "14",
        "basedamage": "13.0",
        "shieldlag": "9",
        "shieldstun": "5",
        "advantage": "-6",
        "activeframes": "14\u201415"
      },
      {
        "movename": "Back Air",
        "totalframes": "35",
        "landinglag": "8",
        "notes": "Autocancels on frame 34 onward",
        "startup": "7",
        "basedamage": "8.0",
        "shieldlag": "7",
        "shieldstun": "4",
        "advantage": "-4",
        "activeframes": "7\u20149"
      },
      {
        "movename": "Up Air",
        "totalframes": "59",
        "landinglag": "13",
        "notes": "Autocancels on frame 1-5 and 47 onward",
        "startup": "11",
        "basedamage": "14.0/11.0",
        "shieldlag": "11/9",
        "shieldstun": "5/4",
        "advantage": "-8/-9",
        "activeframes": "11\u201413(14\u201440)"
      },
      {
        "movename": "Down Air",
        "totalframes": "--",
        "landinglag": "23",
        "notes": "Autocancels on frame 1-5 and 65 onward. Landing hitbox on frame 1.",
        "startup": "17",
        "basedamage": "16.0/12.0",
        "shieldlag": "10/9",
        "shieldstun": "6/5",
        "advantage": "-17/-16",
        "activeframes": "17\u201425(26\u201464)/1"
      },
      {
        "movename": "Z Air",
        "totalframes": "73",
        "landinglag": "8",
        "notes": "--",
        "startup": "11",
        "basedamage": "4.0",
        "shieldlag": "5",
        "shieldstun": "5",
        "advantage": "-3",
        "activeframes": "11\u201418"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Hero's Bow)",
        "totalframes": "39\u201482",
        "landinglag": "--",
        "notes": "Startup is 1 from charge release. Reaches full charge on 60.",
        "startup": "18\u201460",
        "basedamage": "4.0\u201412.0",
        "shieldlag": "5\u20149",
        "shieldstun": "2\u20144",
        "advantage": "-12 to -6",
        "activeframes": "18\u201477"
      },
      {
        "movename": "Side B (Boomerang)",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "9 frame animation of catching the boomerang if no other action is performed",
        "startup": "27",
        "basedamage": "5.0\u20149.6/3.0",
        "shieldlag": "6\u20148/5",
        "shieldstun": "3\u20144/2",
        "advantage": "-9 to -6",
        "activeframes": "27\u201436(37\u201477/78\u2014226)"
      },
      {
        "movename": "Up B (Spin Attack)",
        "totalframes": "77",
        "landinglag": "--",
        "notes": "Multihits have shieldlag but no hitlag. Can be charged up to 60 frames for up to 60% additional damage. Startup is 3 on charge release",
        "startup": "6/10/14/18/22/27/31/36/41/48",
        "basedamage": "1.0/3.0",
        "shieldlag": "4/10",
        "shieldstun": "2/4",
        "advantage": "-25",
        "activeframes": "6/10/14/18/22/27/31/36/41/48"
      },
      {
        "movename": "Up B, Air (Spin Attack, Air)",
        "totalframes": "--",
        "landinglag": "30",
        "notes": "--",
        "startup": "8/16/22/31/44",
        "basedamage": "4.0/2.0/4.0",
        "shieldlag": "5/4/9",
        "shieldstun": "5/3/5",
        "advantage": "--",
        "activeframes": "8/16/22/31/44"
      },
      {
        "movename": "Down B (Bomb Pull)",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "Explodes automatically on frame ~315",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "52",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "60",
        "landinglag": "--",
        "notes": "--",
        "startup": "14",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "16",
        "landinglag": "--",
        "notes": "Total frames includes 11 frames of hitlag",
        "startup": "1",
        "basedamage": "1.0"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "12/13",
        "basedamage": "3.0/4.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "18",
        "basedamage": "7.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "27/28",
        "basedamage": "5.0/2.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "22/24",
        "basedamage": "3.0/4.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "19/24",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-16"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "28",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-14"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "56",
        "landinglag": "10",
        "notes": "Invulnerable on frame 2-26"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "76",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "85",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "93",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "111",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "123",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      }
    ],
    "stats": {
      "Weight": "91",
      "Gravity": "0.081",
      "Walk Speed": "1.288",
      "Run Speed": "1.906",
      "Initial Dash": "1.914",
      "Air Speed": "1.05",
      "Total Air Acceleration": "0.09",
      "SH / FH / SHFF / FHFF Frames": "40 / 56 / 28 / 39",
      "Fall Speed / Fast Fall Speed": "1.38 / 2.208",
      "Out of Shield, Up B": "6 frames",
      "Out of Shield, Neutral Air": "9 frames",
      "Out of Shield, Back Air": "10 frames",
      "Shield Grab (Grab, post-Shieldstun)": "16 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "villager": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "21",
        "landinglag": "--",
        "notes": "Transitions to jab 2 as early as frame 6.",
        "startup": "3",
        "basedamage": "1.0",
        "shieldlag": "5",
        "shieldstun": "2",
        "advantage": "-16",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Jab 2",
        "totalframes": "23",
        "landinglag": "--",
        "notes": "Transitions to rapid jab as early as frame 5",
        "startup": "3",
        "basedamage": "1.0",
        "shieldlag": "5",
        "shieldstun": "2",
        "advantage": "-18",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "Alternates between four and five frames between punches.",
        "startup": "3/8/12...",
        "basedamage": "1.0",
        "shieldlag": "5",
        "shieldstun": "2",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "2.0",
        "shieldlag": "9",
        "shieldstun": "3",
        "advantage": "-28",
        "activeframes": "**"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "9.0",
        "shieldlag": "7",
        "shieldstun": "9",
        "advantage": "-16",
        "activeframes": "8\u201411"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "7/22",
        "basedamage": "5.0/6.0",
        "shieldlag": "6/7",
        "shieldstun": "6/6",
        "advantage": "-34/-19",
        "activeframes": "7\u201418/22\u201425"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "12.0/10.0",
        "shieldlag": "9/8",
        "shieldstun": "11/10",
        "advantage": "-17/-18",
        "activeframes": "9\u201411"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "10.0/6.0",
        "shieldlag": "8/6",
        "shieldstun": "4/3",
        "advantage": "-22",
        "activeframes": "9\u201414(15\u201423)"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Charge hold is frame 16",
        "startup": "25",
        "basedamage": "15.0/17.0",
        "shieldlag": "10/11",
        "shieldstun": "10/11",
        "advantage": "-4",
        "activeframes": "25\u201430(31\u2014144)"
      },
      {
        "movename": "Up Smash",
        "totalframes": "53",
        "landinglag": "--",
        "notes": "Charge hold is frame 7",
        "startup": "12/17/21/25/29/33",
        "basedamage": "3.0/1.0/4.0",
        "shieldlag": "5/-/8",
        "shieldstun": "3/-/4",
        "advantage": "-8",
        "activeframes": "12\u201413/17\u201418/21\u201422/25\u201426/29\u201430/33\u201434"
      },
      {
        "movename": "Down Smash",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Charge hold is frame 3",
        "startup": "9/29",
        "basedamage": "6.0/3.0",
        "shieldlag": "6/4",
        "shieldstun": "5/0",
        "advantage": "-35/-15",
        "activeframes": "9(10\u201411)/29(30\u201431)"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "35",
        "landinglag": "8",
        "notes": "Autocancels on frame 1-2 and 27 onward",
        "startup": "3",
        "basedamage": "9.0/5.0",
        "shieldlag": "7/6",
        "shieldstun": "4/3",
        "advantage": "-4/-5",
        "activeframes": "3\u201410(11\u201423)"
      },
      {
        "movename": "Forward Air",
        "totalframes": "39",
        "landinglag": "14",
        "notes": "Projectile attack. Autocancels on frame 1-2 and 30 onward",
        "startup": "10",
        "basedamage": "7.0/4.0/2.5",
        "shieldlag": "7/5/5",
        "shieldstun": "3/3/2",
        "advantage": "-4",
        "activeframes": "10\u201412(13\u201418/19\u201423)"
      },
      {
        "movename": "Back Air",
        "totalframes": "35",
        "landinglag": "14",
        "notes": "Projectile attack. Autocancels on frame 1-2 and 30 onward",
        "startup": "13",
        "basedamage": "9.0/5.0/3.0",
        "shieldlag": "7/6/5",
        "shieldstun": "4/3/2",
        "advantage": "-3",
        "activeframes": "13\u201415(16\u201421/22\u201426)"
      },
      {
        "movename": "Up Air",
        "totalframes": "42",
        "landinglag": "12",
        "notes": "Autocancels on frame 1-5 and 39 onward",
        "startup": "6",
        "basedamage": "13.0/10.0/8.0",
        "shieldlag": "9/8/7",
        "shieldstun": "5/4/4",
        "advantage": "-7/-8/-8",
        "activeframes": "6\u20147(8\u201421)"
      },
      {
        "movename": "Down Air",
        "totalframes": "45",
        "landinglag": "12",
        "notes": "Autocancels on frame 1-13 and 39 onward",
        "startup": "14",
        "basedamage": "13.0/10.0/8.0",
        "shieldlag": "9/8/7",
        "shieldstun": "5/4/4",
        "advantage": "-7/-8/-8",
        "activeframes": "14\u201415(16\u201429)"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Pocket)",
        "totalframes": "50",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-23. Pockets projectiles on frame 8-23.",
        "startup": "8 (Start of projectile pocket)",
        "basedamage": "**",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "8\u201423 (pocket)"
      },
      {
        "movename": "Pocket, Throw",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "This is not the same throw as with a holdable item",
        "startup": "9",
        "basedamage": "**",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "**",
        "activeframes": "**"
      },
      {
        "movename": "Side B (Lloid Rocket)",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "52",
        "basedamage": "7.0/5.0",
        "shieldlag": "7/6",
        "shieldstun": "3/3",
        "advantage": "+27",
        "activeframes": "52\u2014116(117\u2014176)"
      },
      {
        "movename": "Up B (Balloon Trip)",
        "totalframes": "--",
        "landinglag": "30/20",
        "notes": "First landing lag is from free fall. Second is with balloons still attached",
        "startup": "**",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Down B (Timber Plant, Timber Water)",
        "totalframes": "43, 54",
        "landinglag": "--",
        "notes": "",
        "startup": "--, 5",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "--, 5\u201420"
      },
      {
        "movename": "Timber Tree Grow/Fall",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "Refers to how long after water touches sprout/Tree is chopped a second time",
        "startup": "46/16",
        "basedamage": "18.0/25.0",
        "shieldlag": "11/14",
        "shieldstun": "6/7",
        "advantage": "+14 / -11",
        "activeframes": "**"
      },
      {
        "movename": "Timber Axe",
        "totalframes": "47/54",
        "landinglag": "--",
        "notes": "Second total frames is hitting a tree, and includes 13 frames of hitlag for Villager",
        "startup": "6",
        "basedamage": "14.0",
        "shieldlag": "10",
        "shieldstun": "13",
        "advantage": "-28/-35",
        "activeframes": "6\u20148"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "--",
        "startup": "14",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "16",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "17",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "3",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "9.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "11.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "10.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "18",
        "basedamage": "6.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15."
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16."
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "57",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-30."
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "80",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "87",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "96",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "111",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "128",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21."
      }
    ],
    "stats": {
      "Weight": "92",
      "Gravity": "0.078",
      "Walk Speed": "1.092",
      "Run Speed": "1.397",
      "Initial Dash": "1.815",
      "Air Speed": "0.987",
      "Total Air Acceleration": "0.06",
      "SH / FH / SHFF / FHFF Frames": "40 / 56 / 28 / 39",
      "Fall Speed / Fast Fall Speed": "1.32 / 2.112",
      "Out of Shield, Neutral Air": "6 frames",
      "Out of Shield, Up Air": "9 frames",
      "Out of Shield, Up Smash": "12 frames",
      "Shield Grab (Grab, post-Shieldstun)": "18 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "wario": {
    "ground_attacks": [
      {
        "movename": "Jab",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 10.",
        "startup": "8",
        "basedamage": "4.0",
        "shieldlag": "9",
        "shieldstun": "5",
        "advantage": "-16",
        "activeframes": "8\u20149"
      },
      {
        "movename": "Jab 2",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "5.0",
        "shieldlag": "12",
        "shieldstun": "6",
        "advantage": "-23",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "13.0",
        "shieldlag": "9",
        "shieldstun": "12",
        "advantage": "-15",
        "activeframes": "12\u201415"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "6.0/5.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-13",
        "activeframes": "8\u201410/11\u201419"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "17",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "4.0",
        "shieldlag": "5",
        "shieldstun": "5",
        "advantage": "-7",
        "activeframes": "5"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "11.0/5.0",
        "shieldlag": "8/6",
        "shieldstun": "10/6",
        "advantage": "-33",
        "activeframes": "5\u20148/9\u201423"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "65",
        "landinglag": "--",
        "notes": "Charge hold is frame 4",
        "startup": "18",
        "basedamage": "20.0",
        "shieldlag": "12",
        "shieldstun": "13",
        "advantage": "-34",
        "activeframes": "18\u201419"
      },
      {
        "movename": "Up Smash",
        "totalframes": "57",
        "landinglag": "--",
        "notes": "Head intangibility on frame 8-14. Charge hold is frame 4",
        "startup": "11",
        "basedamage": "17.0/13.0",
        "shieldlag": "11/9",
        "shieldstun": "11/9",
        "advantage": "-35/-37",
        "activeframes": "11\u201412/13"
      },
      {
        "movename": "Down Smash",
        "totalframes": "61",
        "landinglag": "--",
        "notes": "Charge hold is frame 2",
        "startup": "8",
        "basedamage": "13.0/10.0/5.0",
        "shieldlag": "9",
        "shieldstun": "9",
        "advantage": "-44",
        "activeframes": "**"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "45",
        "landinglag": "7",
        "notes": "Autocancels on frame 1-3 and 43 onward",
        "startup": "4/20",
        "basedamage": "6.0 / 4.0",
        "shieldlag": "6/6",
        "shieldstun": "3/3",
        "advantage": "-4/-4",
        "activeframes": "4\u201417/20\u201442"
      },
      {
        "movename": "Forward Air",
        "totalframes": "37",
        "landinglag": "10",
        "notes": "Autocancels on frame 1-4 and 27 onward",
        "startup": "5",
        "basedamage": "7.0 / 4.5",
        "shieldlag": "7/5",
        "shieldstun": "3/3",
        "advantage": "-7/-7",
        "activeframes": "5\u20146/7\u201417"
      },
      {
        "movename": "Back Air",
        "totalframes": "49",
        "landinglag": "16",
        "notes": "Autocancels on frame 1-4 and 34 onward",
        "startup": "9",
        "basedamage": "12.0",
        "shieldlag": "9",
        "shieldstun": "5",
        "advantage": "-11",
        "activeframes": "9\u201411"
      },
      {
        "movename": "Up Air",
        "totalframes": "46",
        "landinglag": "7",
        "notes": "Autocancels on frame 1-3 and 37 onward",
        "startup": "8",
        "basedamage": "13.0",
        "shieldlag": "9",
        "shieldstun": "5",
        "advantage": "-2",
        "activeframes": "8\u20149"
      },
      {
        "movename": "Down Air",
        "totalframes": "47",
        "landinglag": "18",
        "notes": "Autocancels on frame 1-2 and 42 onward",
        "startup": "9/11/13/15/17/19/21",
        "basedamage": "1.3/4.0",
        "shieldlag": "4/11",
        "shieldstun": "2/3",
        "advantage": "-16/-15",
        "activeframes": "9/11/13/15/17/19/21"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Chomp)",
        "totalframes": "41 (19 Grab Release)",
        "landinglag": "--",
        "notes": "25 endlag from release of the button. Can eat projectiles on frame 9\u2014. With the exception of Bike being eaten on frame 2. Animation for eating a projectile is 25 frames. 55 for the Bike.",
        "startup": "8 (11 Grab Release)",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "8\u201416 (Can hold: 8\u201464)"
      },
      {
        "movename": "Side B (Wario Bike)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "Startup is 24 if mounting a bike laying on the ground. Frame 20 is the earliest you can jump, turnaround, wheelie. Wario seems to suffer more shieldlag than the defender on any hit.",
        "startup": "20/24",
        "basedamage": "0.6\u201411.4",
        "shieldlag": "4-8, 6-13(Wario)",
        "shieldstun": "2\u20144",
        "advantage": "**",
        "activeframes": "20\u2014**"
      },
      {
        "movename": "Wario Bike, Wheelie",
        "totalframes": "64",
        "landinglag": "--",
        "notes": "Bike armor on frame 10. Jump animation takes 28 frames.",
        "startup": "4/54",
        "basedamage": "5.0/13.0",
        "shieldlag": "8/9, 11/14(Wario)",
        "shieldstun": "3/5",
        "advantage": "-60/-10",
        "activeframes": "**"
      },
      {
        "movename": "Wario Bike, Turnaround",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "Looking for Bike animation takes 39 frames",
        "startup": "6",
        "basedamage": "7.0",
        "shieldlag": "8, 12(Wario)",
        "shieldstun": "3",
        "advantage": "-40",
        "activeframes": "**"
      },
      {
        "movename": "Up B (Corkscrew)",
        "totalframes": "--",
        "landinglag": "20",
        "notes": "--",
        "startup": "6/8/12/16/20/29",
        "basedamage": "5.0/1.0/4.0",
        "shieldlag": "6/4/11",
        "shieldstun": "-/2/5",
        "advantage": "**",
        "activeframes": "6\u20147/8\u201411/12\u201415/16\u201419/20\u201423/29\u201430"
      },
      {
        "movename": "Down B (Wario Waft)",
        "totalframes": "79, 64, 49, 60",
        "landinglag": "--",
        "notes": "--",
        "startup": "16, 10, 5, 9",
        "basedamage": "0.0, 12.0+, 20.0+, 27.0/20.0",
        "shieldlag": "--, 10, 13, 19/12",
        "shieldstun": "--, 13, 20, 23/18",
        "advantage": "--, -41, -24, -28",
        "activeframes": "16\u201418, 10\u201411, 5\u20148, 9\u201410/11\u201426"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "21",
        "landinglag": "Total frames includes 15 frames of hitlag.",
        "notes": "--",
        "startup": "2",
        "basedamage": "1.6"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "54",
        "landinglag": "--",
        "notes": "--",
        "startup": "20/21",
        "basedamage": "4.0/8.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "70",
        "landinglag": "--",
        "notes": "--",
        "startup": "48",
        "basedamage": "7.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "--",
        "startup": "24/25",
        "basedamage": "4.0/4.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "54",
        "landinglag": "--",
        "notes": "--",
        "startup": "22/30",
        "basedamage": "4.0/7.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "21/26",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "50",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-29"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "66",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "75",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "82",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "97",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "104",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "107",
      "Gravity": "0.107",
      "Walk Speed": "0.889",
      "Run Speed": "1.65",
      "Initial Dash": "1.837",
      "Air Speed": "1.271",
      "Total Air Acceleration": "0.12",
      "SH / FH / SHFF / FHFF Frames": "33 / 46 / 23 / 32",
      "Fall Speed / Fast Fall Speed": "1.61 / 2.576",
      "Out of Shield, Up B": "6 frames",
      "Out of Shield, Neutral Air": "7 frames",
      "Out of Shield, Forward Air": "8 frames",
      "Shield Grab (Grab, post-Shieldstun)": "12 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "wolf": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "21",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 7.",
        "startup": "4",
        "basedamage": "2.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-14",
        "activeframes": "4"
      },
      {
        "movename": "Jab 2",
        "totalframes": "21",
        "landinglag": "--",
        "notes": "Transitions to Jab 3 as early as frame 7.",
        "startup": "4",
        "basedamage": "2.0",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-17",
        "activeframes": "4"
      },
      {
        "movename": "Jab 3",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "4.0",
        "shieldlag": "11",
        "shieldstun": "5",
        "advantage": "-25",
        "activeframes": "4"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "8/9",
        "basedamage": "5.0/6.0",
        "shieldlag": "11/6",
        "shieldstun": "-/6",
        "advantage": "-19",
        "activeframes": "8/9\u201410"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "10.0",
        "shieldlag": "8",
        "shieldstun": "10",
        "advantage": "-18",
        "activeframes": "7\u201411"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "6.0",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-16",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "11.0/8.0",
        "shieldlag": "8/7",
        "shieldstun": "10/8",
        "advantage": "-16",
        "activeframes": "11\u201414/15\u201418"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "Charge hold is frame 6",
        "startup": "20",
        "basedamage": "15.0",
        "shieldlag": "10",
        "shieldstun": "10",
        "advantage": "-10",
        "activeframes": "20\u201423"
      },
      {
        "movename": "Up Smash",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "Charge hold is frame 3",
        "startup": "13/20",
        "basedamage": "6.0/12.0",
        "shieldlag": "6/9",
        "shieldstun": "5/8",
        "advantage": "-29/-19",
        "activeframes": "13\u201415/20\u201423"
      },
      {
        "movename": "Down Smash",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "Charge hold is frame 2",
        "startup": "14/21",
        "basedamage": "14.0/16.0, 12.0/14.0",
        "shieldlag": "10/10/9/10",
        "shieldstun": "10/11/8/10",
        "advantage": "-19/-18/-14/-12",
        "activeframes": "14\u201415/21\u201422"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "42",
        "landinglag": "9",
        "notes": "Autocancels on frame 1-6 and 39 onward",
        "startup": "7",
        "basedamage": "12.0/8.0",
        "shieldlag": "9/7",
        "shieldstun": "5/4",
        "advantage": "-4/-5",
        "activeframes": "7\u20149/10\u201426"
      },
      {
        "movename": "Forward Air",
        "totalframes": "40",
        "landinglag": "10",
        "notes": "Autocancels on frame 30 onward",
        "startup": "7",
        "basedamage": "9.0",
        "shieldlag": "7",
        "shieldstun": "4",
        "advantage": "-6",
        "activeframes": "7\u20149"
      },
      {
        "movename": "Back Air",
        "totalframes": "44",
        "landinglag": "15",
        "notes": "Autocancels on frame 1-7 and 19 onward",
        "startup": "13",
        "basedamage": "15.0/11.0",
        "shieldlag": "10/8",
        "shieldstun": "5/4",
        "advantage": "-10/-11",
        "activeframes": "13\u201415"
      },
      {
        "movename": "Up Air",
        "totalframes": "38",
        "landinglag": "10",
        "notes": "Autocancels on frame 1-3 and 31 onward",
        "startup": "7",
        "basedamage": "12.0",
        "shieldlag": "9",
        "shieldstun": "5",
        "advantage": "-5",
        "activeframes": "7\u20149"
      },
      {
        "movename": "Down Air",
        "totalframes": "53",
        "landinglag": "19",
        "notes": "Autocancels on frame 1-4 and 36 onward",
        "startup": "16",
        "basedamage": "15.0/13.0",
        "shieldlag": "10/9",
        "shieldstun": "5/5",
        "advantage": "-14/-14",
        "activeframes": "16\u201417"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Blaster)",
        "totalframes": "52",
        "landinglag": "--",
        "notes": "--",
        "startup": "15/16",
        "basedamage": "7.0/6.0",
        "shieldlag": "10/9",
        "shieldstun": "-/3",
        "advantage": "-24",
        "activeframes": "15\u201419/16\u201450"
      },
      {
        "movename": "Side B (Wolf Flash)",
        "totalframes": "**",
        "landinglag": "29",
        "notes": "Sweetspot is on frame 20. Can be slightly angled up or down.",
        "startup": "18",
        "basedamage": "15.0/3.0",
        "shieldlag": "18/5",
        "shieldstun": "18/2",
        "advantage": "**",
        "activeframes": "20\u201421/19"
      },
      {
        "movename": "Up B (Fire Wolf)",
        "totalframes": "66",
        "landinglag": "36",
        "notes": "Total frames refers to travel along the ground. Final hit does 1.0 more damage when you are airborne.",
        "startup": "18/27/29/31/36",
        "basedamage": "4.0/2.5/5.0",
        "shieldlag": "5/5/15",
        "shieldstun": "5/-/6",
        "advantage": "-24",
        "activeframes": "18/27/29/31/36"
      },
      {
        "movename": "Down B (Reflector)",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "Total frames refers to minimum usage. 12 endlag from extended usage. Invulnerable on frame 5-8. Reflects on frame 9.",
        "startup": "6",
        "basedamage": "4.0",
        "shieldlag": "8",
        "shieldstun": "5",
        "advantage": "-19",
        "activeframes": "**"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "44",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "Total frames includes 14 frames of hitlag.",
        "notes": "--",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "--",
        "startup": "10/11",
        "basedamage": "5.0/4.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "23/24",
        "basedamage": "6.0/5.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "26/27",
        "basedamage": "5.0/2.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "26",
        "basedamage": "8.5"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "20/25",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17."
      },
      {
        "movename": "Forward Roll",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15."
      },
      {
        "movename": "Backward Roll",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16."
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "44",
        "landinglag": "10",
        "notes": "Invulnerable on frame 2-26."
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "61",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-20."
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "68",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-20."
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "73",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-20."
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "84",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-20."
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "93",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-20."
      }
    ],
    "stats": {
      "Weight": "92",
      "Gravity": "0.130",
      "Walk Speed": "1.208",
      "Run Speed": "1.54",
      "Initial Dash": "2.09",
      "Air Speed": "1.281",
      "Total Air Acceleration": "0.09",
      "SH / FH / SHFF / FHFF Frames": "30 / 43 / 21 / 31",
      "Fall Speed / Fast Fall Speed": "1.8 / 2.88",
      "Out of Shield, Nair/Fair/Uair/DownB(Air)": "10 frames",
      "Out of Shield, Up Smash": "13 frames",
      "Out of Shield, Jab": "15 frames",
      "Shield Grab (Grab, post-Shieldstun)": "10 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "yoshi": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "17",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 6",
        "startup": "3",
        "basedamage": "3.0",
        "shieldlag": "7",
        "shieldstun": "4",
        "advantage": "-10",
        "activeframes": "3"
      },
      {
        "movename": "Jab 2",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "--",
        "startup": "3",
        "basedamage": "4.0",
        "shieldlag": "11",
        "shieldstun": "5",
        "advantage": "-11",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "8.0",
        "shieldlag": "7",
        "shieldstun": "8",
        "advantage": "-16",
        "activeframes": "5\u20147"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "7.0",
        "shieldlag": "7",
        "shieldstun": "7",
        "advantage": "-16",
        "activeframes": "8\u201415"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "23",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "5.0/4.5/4.0",
        "shieldlag": "6/6/5",
        "shieldstun": "6/6/5",
        "advantage": "-9/-9/-10",
        "activeframes": "8\u201410"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "11.0/8.0",
        "shieldlag": "8/7",
        "shieldstun": "10/8",
        "advantage": "-20",
        "activeframes": "10\u201412/13\u201420"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "52",
        "landinglag": "--",
        "notes": "Head intangibility on frame 12-16. Charge hold is frame 7",
        "startup": "14",
        "basedamage": "15.5",
        "shieldlag": "10",
        "shieldstun": "10",
        "advantage": "-28",
        "activeframes": "14\u201416"
      },
      {
        "movename": "Up Smash",
        "totalframes": "46",
        "landinglag": "--",
        "notes": "Leg intangibility on frame 11-13. Charge hold is frame 7",
        "startup": "11",
        "basedamage": "14.0/12.0",
        "shieldlag": "10/9",
        "shieldstun": "10/8",
        "advantage": "-24",
        "activeframes": "11\u201413/14\u201416"
      },
      {
        "movename": "Down Smash",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Charge hold is frame 3",
        "startup": "7/22",
        "basedamage": "12.0/10.0",
        "shieldlag": "9/8",
        "shieldstun": "8/7",
        "advantage": "-34/-19",
        "activeframes": "7\u20148/22\u201423"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "44",
        "landinglag": "7",
        "notes": "Autocancels on frame 1-2 and 38 onward",
        "startup": "3",
        "basedamage": "10.0/7.0/5.0",
        "shieldlag": "8/7/6",
        "shieldstun": "4/3/3",
        "advantage": "-3/-4/-4",
        "activeframes": "3\u20144(5\u201411)"
      },
      {
        "movename": "Forward Air",
        "totalframes": "43",
        "landinglag": "12",
        "notes": "Autocancels on frame 1-3 and 40 onward",
        "startup": "16",
        "basedamage": "15.0/14.0",
        "shieldlag": "10/10",
        "shieldstun": "5/5",
        "advantage": "-7/-7",
        "activeframes": "16\u201420"
      },
      {
        "movename": "Back Air",
        "totalframes": "55",
        "landinglag": "11",
        "notes": "Autocancels on frame 1-5 and 44 onward",
        "startup": "11/14/18",
        "basedamage": "3.5/5.5",
        "shieldlag": "5/9",
        "shieldstun": "2/3",
        "advantage": "-9/-8",
        "activeframes": "11/14/18\u201419"
      },
      {
        "movename": "Up Air",
        "totalframes": "36",
        "landinglag": "8",
        "notes": "Autocancels on frame 1-4 and 31 onward",
        "startup": "5",
        "basedamage": "12.0",
        "shieldlag": "9",
        "shieldstun": "5",
        "advantage": "-3",
        "activeframes": "5\u20146"
      },
      {
        "movename": "Down Air",
        "totalframes": "56",
        "landinglag": "17",
        "notes": "Landing hit generates on frame 1. Autocancels on frame 50 onward",
        "startup": "16/18/20/22/24/26/ 28/30/32/34/36/38/41",
        "basedamage": "2.2/1.9/2.7/1.0",
        "shieldlag": "5/4/7/4",
        "shieldstun": "-/2/2/2",
        "advantage": "-14",
        "activeframes": "16/18/20/22/24/26/ 28/30/32/34/36/38/41"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Egg Lay)",
        "totalframes": "49/41",
        "landinglag": "--",
        "notes": "Egg appears on frame 33 when successful. Total frames when successful is 62. Total frames is 41 on whiff.",
        "startup": "19",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "19\u201422"
      },
      {
        "movename": "Side B (Egg Roll)",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "Takes 39 frames to emerge.",
        "startup": "32",
        "basedamage": "10.8\u201412.8",
        "shieldlag": "8\u20149",
        "shieldstun": "10\u201412",
        "advantage": "-29 to -27",
        "activeframes": "**"
      },
      {
        "movename": "Up B (Egg Throw)",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "Eggs explode automatically on frame 60.",
        "startup": "16",
        "basedamage": "6.0",
        "shieldlag": "6",
        "shieldstun": "3",
        "advantage": "-30",
        "activeframes": "16\u2014**"
      },
      {
        "movename": "Down B (Yoshi Bomb, Yoshi Bomb Air)",
        "totalframes": "77, --",
        "landinglag": "39, 39",
        "notes": "Total frames assumes level ground. Passes through platforms, voluntarily if you fall long enough. Stars appear on frame 4 of landing.",
        "startup": "7/27, 19",
        "basedamage": "4.0/15.0/4.0, 12.0/4.0",
        "shieldlag": "5/10/3, 9/3",
        "shieldstun": "5/14/0, 11/0",
        "advantage": "-32, -32",
        "activeframes": "7/27/*, 19/*"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "--",
        "startup": "14",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "56",
        "landinglag": "--",
        "notes": "--",
        "startup": "16",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "--",
        "startup": "17",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Total frames includes 15 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "9.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "--",
        "startup": "20",
        "basedamage": "9.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "43",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "5.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "50",
        "landinglag": "--",
        "notes": "--",
        "startup": "25",
        "basedamage": "4.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "21/26",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "58",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-30"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "79",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "89",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "107",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "116",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "130",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "104",
      "Gravity": "0.080",
      "Walk Speed": "1.208",
      "Run Speed": "2.046",
      "Initial Dash": "1.98",
      "Air Speed": "1.344",
      "Total Air Acceleration": "0.098",
      "SH / FH / SHFF / FHFF Frames": "38 / 60 / 26 / 42",
      "Fall Speed / Fast Fall Speed": "1.29 / 2.064",
      "Out of Shield, Neutral Air": "6 frames",
      "Out of Shield, Up Air": "8 frames",
      "Out of Shield, Up Smash": "11 frames",
      "Shield Grab (Grab, post-Shieldstun)": "18 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "young_link": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 9",
        "startup": "6",
        "basedamage": "2.0",
        "shieldlag": "7",
        "shieldstun": "3",
        "advantage": "-10",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Jab 2",
        "totalframes": "16",
        "landinglag": "--",
        "notes": "Transitions to Jab 3 as early as frame 9 and Rapid Jab on 11",
        "startup": "6",
        "basedamage": "1.5",
        "shieldlag": "5",
        "shieldstun": "3",
        "advantage": "-7",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Jab 3",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "3.5",
        "shieldlag": "11",
        "shieldstun": "4",
        "advantage": "-25",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "3/5/7",
        "basedamage": "0.3",
        "shieldlag": "4",
        "shieldstun": "-",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "4",
        "basedamage": "2.5",
        "shieldlag": "10",
        "shieldstun": "4",
        "advantage": "-37",
        "activeframes": "4\u20145"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "12.0/11.0",
        "shieldlag": "11/8",
        "shieldstun": "11/10",
        "advantage": "-12/-13",
        "activeframes": "10\u201412"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "31",
        "landinglag": "--",
        "notes": "--",
        "startup": "9",
        "basedamage": "8.0",
        "shieldlag": "7",
        "shieldstun": "8",
        "advantage": "-14",
        "activeframes": "9\u201414"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "25",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "10.0/9.0/7.0",
        "shieldlag": "8/7/7",
        "shieldstun": "10/9/7",
        "advantage": "-7/-8/-10",
        "activeframes": "8\u20149"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "11.0/10.0",
        "shieldlag": "10/8",
        "shieldstun": "10/10",
        "advantage": "-16",
        "activeframes": "8\u201410"
      },
      {
        "movename": "Forward Smash 1",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "Transitions to Forward Smash 2 as early as frame 20. Charge hold is frame 9",
        "startup": "15",
        "basedamage": "6.0",
        "shieldlag": "6",
        "shieldstun": "5",
        "advantage": "-27",
        "activeframes": "15\u201416"
      },
      {
        "movename": "Forward Smash 2",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "11",
        "basedamage": "12.0",
        "shieldlag": "13",
        "shieldstun": "8",
        "advantage": "-30",
        "activeframes": "11\u201412"
      },
      {
        "movename": "Up Smash",
        "totalframes": "69",
        "landinglag": "--",
        "notes": "Charge hold is frame 5",
        "startup": "10/25/41",
        "basedamage": "3.0/8.0",
        "shieldlag": "5/7",
        "shieldstun": "3/6",
        "advantage": "-22",
        "activeframes": "10\u201414/25\u201429/41\u201445"
      },
      {
        "movename": "Down Smash",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Charge hold frame is 3",
        "startup": "9/21",
        "basedamage": "13.0/10.0/12.0/9.0",
        "shieldlag": "9/8/9/7",
        "shieldstun": "9/7/8/7",
        "advantage": "-31/-33/-20/-21",
        "activeframes": "9\u201410/21\u201422"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "35",
        "landinglag": "6",
        "notes": "Autocancels on frame 1-3 and 32 onward",
        "startup": "4",
        "basedamage": "10.0/5.0",
        "shieldlag": "8/6",
        "shieldstun": "4/3",
        "advantage": "-2/-3",
        "activeframes": "4\u20145(6\u201427)"
      },
      {
        "movename": "Forward Air",
        "totalframes": "40",
        "landinglag": "6",
        "notes": "Autocancels on frame 41 onward",
        "startup": "14/24",
        "basedamage": "6.0/8.0",
        "shieldlag": "6/9",
        "shieldstun": "3/4",
        "advantage": "-3/-2",
        "activeframes": "14\u201415/24\u201425"
      },
      {
        "movename": "Back Air",
        "totalframes": "29",
        "landinglag": "6",
        "notes": "Autocancels on frame 29 onward",
        "startup": "6/18",
        "basedamage": "5.0/7.0",
        "shieldlag": "6/8",
        "shieldstun": "3/3",
        "advantage": "-3/-3",
        "activeframes": "6\u20148/18\u201420"
      },
      {
        "movename": "Up Air",
        "totalframes": "59",
        "landinglag": "14",
        "notes": "Autocancels on frame 1-4 and 56 onward",
        "startup": "5",
        "basedamage": "12.0",
        "shieldlag": "9",
        "shieldstun": "5",
        "advantage": "-9",
        "activeframes": "5\u20147(8\u201449)"
      },
      {
        "movename": "Down Air",
        "totalframes": "79",
        "landinglag": "17",
        "notes": "Autocancels on frame 1-12 and 65 onward. Can hit same target once again after 30 frames during pogo effect.",
        "startup": "13",
        "basedamage": "18.0/15.0",
        "shieldlag": "14/12",
        "shieldstun": "6/5",
        "advantage": "**",
        "activeframes": "13\u201415(16\u201464)"
      },
      {
        "movename": "Z Air",
        "totalframes": "73",
        "landinglag": "8",
        "notes": "--",
        "startup": "11",
        "basedamage": "4.0",
        "shieldlag": "5",
        "shieldstun": "5",
        "advantage": "-3",
        "activeframes": "11\u201418"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Fire Arrow)",
        "totalframes": "37\u201470",
        "landinglag": "--",
        "notes": "On release, startup is 1 and total frames is 24.",
        "startup": "14\u201447",
        "basedamage": "4.0\u201412.0",
        "shieldlag": "5\u20149",
        "shieldstun": "2\u20144",
        "advantage": "-16 to -10",
        "activeframes": "**"
      },
      {
        "movename": "Side B (Boomerang)",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "27",
        "basedamage": "4.0\u201412.0",
        "shieldlag": "5\u20149",
        "shieldstun": "2\u20144",
        "advantage": "-8 to -4",
        "activeframes": "27\u201429(30\u201482/83\u2014**)"
      },
      {
        "movename": "Up B (Spin Attack)",
        "totalframes": "70",
        "landinglag": "--",
        "notes": "Can charge for up to 60 additional frames. Startup is 4 from charge.",
        "startup": "9/13/17/21/25/29/33/37/41/45/49",
        "basedamage": "1.0/3.0",
        "shieldlag": "4/10",
        "shieldstun": "2/4",
        "advantage": "-17",
        "activeframes": "9/13/17/21/25/29/33/37/41/45/49"
      },
      {
        "movename": "Up B, Air (Spin Attack, Air)",
        "totalframes": "--",
        "landinglag": "24",
        "notes": "--",
        "startup": "8/12/16/19/22/26/31/39/47",
        "basedamage": "**",
        "shieldlag": "**",
        "shieldstun": "**",
        "advantage": "--",
        "activeframes": "8\u201410/12\u201413/16\u201418/19\u201420/22\u201424/26\u201427/31\u201433/39\u201440/47\u201451"
      },
      {
        "movename": "Down B (Bomb Pull)",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "Fuse timer of ~4 seconds. Bomb explosion hits on frame 1/3/5/7",
        "startup": "--",
        "basedamage": "--",
        "shieldlag": "--",
        "shieldstun": "--",
        "advantage": "--",
        "activeframes": "**"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "60",
        "landinglag": "--",
        "notes": "--",
        "startup": "14",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "18",
        "landinglag": "--",
        "notes": "Total frames includes 13 frames of hitlag",
        "startup": "1",
        "basedamage": "1.0"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "11/13",
        "basedamage": "3.0/3.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "11/13",
        "basedamage": "3.0/3.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "26/29",
        "basedamage": "4.0/2.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "22/28",
        "basedamage": "3.0/3.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "19/24",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-16"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "28",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-14"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "33",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "45",
        "landinglag": "10",
        "notes": "Invulnerable on frame 2-26"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "63",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "70",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "76",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "90",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "100",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      }
    ],
    "stats": {
      "Weight": "88",
      "Gravity": "0.096",
      "Walk Speed": "1.26",
      "Run Speed": "1.749",
      "Initial Dash": "2.09",
      "Air Speed": "0.966",
      "Total Air Acceleration": "0.06",
      "SH / FH / SHFF / FHFF Frames": "36 / 49 / 24 / 34",
      "Fall Speed / Fast Fall Speed": "1.8 / 2.88",
      "Out of Shield, Neutral Air": "7 frames",
      "Out of Shield, Up Air": "8 frames",
      "Out of Shield, Up B": "9 frames",
      "Shield Grab (Grab, post-Shieldstun)": "16 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "zelda": {
    "ground_attacks": [
      {
        "movename": "Jab",
        "totalframes": "24",
        "landinglag": "--",
        "notes": "Transitions to rapid jab as early as frame 9.",
        "startup": "4/7",
        "basedamage": "2.5/2.5",
        "shieldlag": "5/5",
        "shieldstun": "-/4",
        "advantage": "-13",
        "activeframes": "4\u20145/7"
      },
      {
        "movename": "Rapid Jab",
        "totalframes": "--",
        "landinglag": "--",
        "notes": "--",
        "startup": "3/5/7",
        "basedamage": "0.2",
        "shieldlag": "4",
        "shieldstun": "2",
        "advantage": "--",
        "activeframes": "**"
      },
      {
        "movename": "Rapid Jab Finisher",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "3.0",
        "shieldlag": "10",
        "shieldstun": "4",
        "advantage": "-32",
        "activeframes": "6\u20147"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "36",
        "landinglag": "--",
        "notes": "--",
        "startup": "12",
        "basedamage": "10.0/12.0",
        "shieldlag": "8/9",
        "shieldstun": "10/11",
        "advantage": "-14/-13",
        "activeframes": "12\u201413"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "7.2",
        "shieldlag": "7",
        "shieldstun": "7",
        "advantage": "-15",
        "activeframes": "7\u201419"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "21",
        "landinglag": "--",
        "notes": "--",
        "startup": "5",
        "basedamage": "5.5",
        "shieldlag": "6",
        "shieldstun": "6",
        "advantage": "-10",
        "activeframes": "5\u201411"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "12.0/6.0",
        "shieldlag": "11/6",
        "shieldstun": "11/6",
        "advantage": "-18",
        "activeframes": "6\u20147/8\u201412"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "Charge hold is frame 10",
        "startup": "16/18/20/22/24",
        "basedamage": "1.0/13.0",
        "shieldlag": "4/9",
        "shieldstun": "-/9",
        "advantage": "-16",
        "activeframes": "16/18/20/22/24"
      },
      {
        "movename": "Up Smash",
        "totalframes": "63",
        "landinglag": "--",
        "notes": "Charge hold is frame 3",
        "startup": "9/13/17/21/25/29/34",
        "basedamage": "2.0/0.8/5.0",
        "shieldlag": "4/4/12",
        "shieldstun": "3/2/4",
        "advantage": "-25",
        "activeframes": "9\u201423/25\u201432/34"
      },
      {
        "movename": "Down Smash",
        "totalframes": "37",
        "landinglag": "--",
        "notes": "Charge hold is frame 2",
        "startup": "5/13",
        "basedamage": "12.0/10.0",
        "shieldlag": "9/8",
        "shieldstun": "8/7",
        "advantage": "-24/-17",
        "activeframes": "5\u20146/13\u201414"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "50",
        "landinglag": "15",
        "notes": "Autocancels on frame 1-3 and 38 onward",
        "startup": "6/10/14/18/22",
        "basedamage": "2.5/5.0",
        "shieldlag": "5/12",
        "shieldstun": "2/3",
        "advantage": "-13/-12",
        "activeframes": "6\u20147/10\u201411/14\u201415/18\u201419/22\u201423"
      },
      {
        "movename": "Forward Air",
        "totalframes": "49",
        "landinglag": "15",
        "notes": "Autocancels on frame 1-2 and 43 onward",
        "startup": "6",
        "basedamage": "20.0/4.0",
        "shieldlag": "16/5",
        "shieldstun": "7/3",
        "advantage": "-8/-12",
        "activeframes": "6/7\u201410"
      },
      {
        "movename": "Back Air",
        "totalframes": "49",
        "landinglag": "16",
        "notes": "Autocancels on frame 1-2 and 45 onward",
        "startup": "6",
        "basedamage": "20.0/4.0",
        "shieldlag": "16/5",
        "shieldstun": "7/3",
        "advantage": "-8/-12",
        "activeframes": "6/7\u201410"
      },
      {
        "movename": "Up Air",
        "totalframes": "54",
        "landinglag": "12",
        "notes": "Autocancels on frame 1-3 and 54 onward",
        "startup": "14",
        "basedamage": "17.0",
        "shieldlag": "11",
        "shieldstun": "6",
        "advantage": "-6",
        "activeframes": "14\u201416"
      },
      {
        "movename": "Down Air",
        "totalframes": "44",
        "landinglag": "12",
        "notes": "Autocancels on frame 1-3 and 40 onward",
        "startup": "14",
        "basedamage": "16.0/4.0",
        "shieldlag": "10/5",
        "shieldstun": "6/3",
        "advantage": "-6/-9",
        "activeframes": "14/15\u201424"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Nayru's Love)",
        "totalframes": "57",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-13. Reflects on 5-41.",
        "startup": "11/15/19/26",
        "basedamage": "2.0/5.0",
        "shieldlag": "0/0",
        "shieldstun": "3/6",
        "advantage": "-25",
        "activeframes": "11/15/19/26"
      },
      {
        "movename": "Side B (Din's Fire)",
        "totalframes": "69\u201497",
        "landinglag": "--",
        "notes": "On release, startup is 14 and total frames is 39",
        "startup": "44\u201470",
        "basedamage": "3.5\u201414.0",
        "shieldlag": "5\u201410",
        "shieldstun": "2\u20145",
        "advantage": "-18 to -10",
        "activeframes": "44\u201447/.../70\u201473"
      },
      {
        "movename": "Up B (Farore's Wind)",
        "totalframes": "65",
        "landinglag": "30",
        "notes": "Total frames is when landing on the ground. Invulnerable on frame 11-35",
        "startup": "6/35",
        "basedamage": "6.0/12.0",
        "shieldlag": "6/13",
        "shieldstun": "6/11",
        "advantage": "-19",
        "activeframes": "6\u20147/35\u201436"
      },
      {
        "movename": "Down B (Phantom Slash)",
        "totalframes": "66/39",
        "landinglag": "39, 39",
        "notes": "Startup values correspond to different stages of construction. Manual release total frames is 39. Takes 66 frames to reach final form. Startup for each stage of construction in order is 11,8,8,7,8,7. Fully constructed phantom activates automatically on frame 120. Advantage is for manual release\".",
        "startup": "26/32/38/46/59-127",
        "basedamage": "4.7\u201414.1",
        "shieldlag": "6\u201410",
        "shieldstun": "3\u20145",
        "advantage": "-19 to -17",
        "activeframes": "**"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "39",
        "landinglag": "--",
        "notes": "--",
        "startup": "10",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "47",
        "landinglag": "--",
        "notes": "--",
        "startup": "13",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "42",
        "landinglag": "--",
        "notes": "--",
        "startup": "14",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "20",
        "landinglag": "--",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "2",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "30",
        "basedamage": "10.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "27",
        "basedamage": "12.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "49",
        "landinglag": "--",
        "notes": "--",
        "startup": "30",
        "basedamage": "11.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "61",
        "landinglag": "--",
        "notes": "--",
        "startup": "25/30/35/39/42",
        "basedamage": "1.5/2.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "21/26",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-17"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "30",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-15"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "35",
        "landinglag": "--",
        "notes": "Invulnerable on frame 5-16"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "56",
        "landinglag": "10",
        "notes": "Invulnerable on frame 3-30"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "77",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "86",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "96",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "114",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "129",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 3-21"
      }
    ],
    "stats": {
      "Weight": "85",
      "Gravity": "0.071",
      "Walk Speed": "0.914",
      "Run Speed": "1.43",
      "Initial Dash": "1.958",
      "Air Speed": "1.092",
      "Total Air Acceleration": "0.065",
      "SH / FH / SHFF / FHFF Frames": "41 / 56 / 29 / 39",
      "Fall Speed / Fast Fall Speed": "1.35 / 2.16",
      "Out of Shield, Up B": "6 frames",
      "Out of Shield, Neutral Air or Forward Air or Back Air or Up Smash": "9 frames",
      "Out of Shield, Neutral B(Air)": "14 frames",
      "Shield Grab (Grab, post-Shieldstun)": "14 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  },
  "zero_suit_samus": {
    "ground_attacks": [
      {
        "movename": "Jab 1",
        "totalframes": "23",
        "landinglag": "--",
        "notes": "Transitions to Jab 2 as early as frame 6",
        "startup": "1",
        "basedamage": "1.5",
        "shieldlag": "8",
        "shieldstun": "3",
        "advantage": "-19",
        "activeframes": "1"
      },
      {
        "movename": "Jab 2",
        "totalframes": "25",
        "landinglag": "--",
        "notes": "Transitions to Jab 3 as early as frame 6",
        "startup": "2",
        "basedamage": "1.5",
        "shieldlag": "8",
        "shieldstun": "3",
        "advantage": "-20",
        "activeframes": "2"
      },
      {
        "movename": "Jab 3",
        "totalframes": "34",
        "landinglag": "--",
        "notes": "--",
        "startup": "3",
        "basedamage": "3.0",
        "shieldlag": "9",
        "shieldstun": "4",
        "advantage": "-27",
        "activeframes": "3\u20144"
      },
      {
        "movename": "Forward Tilt",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "--",
        "startup": "6",
        "basedamage": "7.0/8.0",
        "shieldlag": "7/7",
        "shieldstun": "7/8",
        "advantage": "-15/-14",
        "activeframes": "6\u20148"
      },
      {
        "movename": "Up Tilt",
        "totalframes": "45",
        "landinglag": "--",
        "notes": "--",
        "startup": "3/9",
        "basedamage": "5.0/7.0",
        "shieldlag": "7/8",
        "shieldstun": "6/7",
        "advantage": "-36/-29",
        "activeframes": "3\u20144/9\u201410"
      },
      {
        "movename": "Down Tilt",
        "totalframes": "29",
        "landinglag": "--",
        "notes": "--",
        "startup": "8",
        "basedamage": "8.0",
        "shieldlag": "7",
        "shieldstun": "8",
        "advantage": "-13",
        "activeframes": "8\u20149"
      },
      {
        "movename": "Dash Attack",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "--",
        "startup": "7",
        "basedamage": "8.0/5.0",
        "shieldlag": "7/6",
        "shieldstun": "8/6",
        "advantage": "-36",
        "activeframes": "7\u20149(10\u201419)"
      },
      {
        "movename": "Forward Smash",
        "totalframes": "64",
        "landinglag": "--",
        "notes": "Charge hold is frame 9",
        "startup": "13/26",
        "basedamage": "5.0/11.0/11.0",
        "shieldlag": "6/8/14",
        "shieldstun": "4/8/8",
        "advantage": "-30",
        "activeframes": "13\u201414/26\u201428"
      },
      {
        "movename": "Up Smash",
        "totalframes": "48",
        "landinglag": "--",
        "notes": "Charge hold is frame 4",
        "startup": "10/14/17/20/23/26/28",
        "basedamage": "4.0/0.8/3.0",
        "shieldlag": "8/6/7",
        "shieldstun": "4/2/3",
        "advantage": "-17",
        "activeframes": "10\u201411/14/17/20/23/26/28\u201429"
      },
      {
        "movename": "Down Smash",
        "totalframes": "41",
        "landinglag": "--",
        "notes": "Charge hold is frame 15",
        "startup": "20",
        "basedamage": "8.0/6.0",
        "shieldlag": "7/6",
        "shieldstun": "6/5",
        "advantage": "-15/-16",
        "activeframes": "20\u201424"
      }
    ],
    "aerial_attacks": [
      {
        "movename": "Neutral Air",
        "totalframes": "51",
        "landinglag": "6",
        "notes": "Autocancels on frame 1-3 and 42 onward",
        "startup": "10",
        "basedamage": "8.0",
        "shieldlag": "11",
        "shieldstun": "4",
        "advantage": "-2",
        "activeframes": "10\u201411(15\u201416)"
      },
      {
        "movename": "Forward Air",
        "totalframes": "46",
        "landinglag": "10",
        "notes": "Autocancels on frame 1-3 and 38 onward",
        "startup": "6/13",
        "basedamage": "5.0/7.0",
        "shieldlag": "6/7",
        "shieldstun": "3/3",
        "advantage": "-7/-7",
        "activeframes": "6\u20147/13\u201414"
      },
      {
        "movename": "Back Air",
        "totalframes": "40",
        "landinglag": "10",
        "notes": "Autocancels on frame 1-3 and 31 onward",
        "startup": "8",
        "basedamage": "10.0/12.0",
        "shieldlag": "8/9",
        "shieldstun": "4/5",
        "advantage": "-6/-5",
        "activeframes": "8\u20149"
      },
      {
        "movename": "Up Air",
        "totalframes": "34",
        "landinglag": "5",
        "notes": "Autocancels on frame 25 onward",
        "startup": "6",
        "basedamage": "6.5",
        "shieldlag": "6",
        "shieldstun": "3",
        "advantage": "-2",
        "activeframes": "6\u201412"
      },
      {
        "movename": "Down Air",
        "totalframes": "--",
        "landinglag": "24",
        "notes": "Landing hit on frame 1. Autocancels on frame 1-3 and 50 onward",
        "startup": "14",
        "basedamage": "5.0/5.5",
        "shieldlag": "6/6",
        "shieldstun": "3/6",
        "advantage": "-17",
        "activeframes": "14\u201449/1\u20143"
      },
      {
        "movename": "Z Air",
        "totalframes": "49",
        "landinglag": "8",
        "notes": "Tethers on frame 2",
        "startup": "9",
        "basedamage": "5.0",
        "shieldlag": "9",
        "shieldstun": "6",
        "advantage": "-2",
        "activeframes": "9\u201419"
      }
    ],
    "special_attacks": [
      {
        "movename": "Neutral B (Paralyzer)",
        "totalframes": "48\u201470",
        "landinglag": "--",
        "notes": "On release, startup is 1 and total frames is 28.",
        "startup": "21\u201443",
        "basedamage": "4.0\u20146.0",
        "shieldlag": "5\u20146",
        "shieldstun": "2\u20143",
        "advantage": "-20 to -18",
        "activeframes": "**"
      },
      {
        "movename": "Side B (Plasma Whip)",
        "totalframes": "55",
        "landinglag": "--",
        "notes": "Tethers on frame 20",
        "startup": "22/24/26/28/31",
        "basedamage": "2.0/1.2/8.0",
        "shieldlag": "7/7/11",
        "shieldstun": "-/3/8",
        "advantage": "-15",
        "activeframes": "22\u201423/24\u201425/26\u201427/28\u201429/31\u201435"
      },
      {
        "movename": "Up B (Boost Kick)",
        "totalframes": "--",
        "landinglag": "30",
        "notes": "--",
        "startup": "4/10/14/18/22/26/32",
        "basedamage": "5.0/1.3/4.0",
        "shieldlag": "6/4/14",
        "shieldstun": "6/3/5",
        "advantage": "--",
        "activeframes": "4/10/14/18/22/26/32\u201433"
      },
      {
        "movename": "Down B (Flip Jump)",
        "totalframes": "38",
        "landinglag": "--",
        "notes": "Automatic bounce off target has 58 endlag but can end early if you land during it. Invulnerable on frame 3-12. Can transition to Manual kick as early as frame 14.",
        "startup": "--",
        "basedamage": "8.0",
        "shieldlag": "13",
        "shieldstun": "8",
        "advantage": "**",
        "activeframes": "**"
      },
      {
        "movename": "Flip Jump, Kick",
        "totalframes": "59",
        "landinglag": "35",
        "notes": "Landing lag only occurs if you land during 59 frame animation or during the bounce after a hit, which is a 49 frame animation",
        "startup": "9",
        "basedamage": "14.0",
        "shieldlag": "12",
        "shieldstun": "13",
        "advantage": "-36",
        "activeframes": "9\u201412"
      }
    ],
    "grabs": [
      {
        "movename": "Grab",
        "totalframes": "58",
        "landinglag": "--",
        "notes": "--",
        "startup": "15",
        "basedamage": "--"
      },
      {
        "movename": "Dash Grab",
        "totalframes": "66",
        "landinglag": "--",
        "notes": "--",
        "startup": "17",
        "basedamage": "--"
      },
      {
        "movename": "Pivot Grab",
        "totalframes": "61",
        "landinglag": "--",
        "notes": "--",
        "startup": "18",
        "basedamage": "--"
      },
      {
        "movename": "Pummel",
        "totalframes": "19",
        "landinglag": "--",
        "notes": "Total frames includes 14 frames of hitlag",
        "startup": "1",
        "basedamage": "1.3"
      },
      {
        "movename": "Forward Throw",
        "totalframes": "25",
        "landinglag": "--",
        "notes": "--",
        "startup": "8/9",
        "basedamage": "5.0/4.0"
      },
      {
        "movename": "Backward Throw",
        "totalframes": "27",
        "landinglag": "--",
        "notes": "--",
        "startup": "9/11",
        "basedamage": "2.0/6.0"
      },
      {
        "movename": "Up Throw",
        "totalframes": "40",
        "landinglag": "--",
        "notes": "--",
        "startup": "3/5",
        "basedamage": "2.0/8.0"
      },
      {
        "movename": "Down Throw",
        "totalframes": "51",
        "landinglag": "--",
        "notes": "--",
        "startup": "20/22",
        "basedamage": "4.0/4.0"
      }
    ],
    "dodges": [
      {
        "movename": "Spot Dodge",
        "totalframes": "18/23",
        "landinglag": "--",
        "notes": "Invulnerable on frame 3-14"
      },
      {
        "movename": "Forward Roll",
        "totalframes": "26",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-12"
      },
      {
        "movename": "Backward Roll",
        "totalframes": "32",
        "landinglag": "--",
        "notes": "Invulnerable on frame 4-14"
      },
      {
        "movename": "Neutral Air Dodge",
        "totalframes": "45",
        "landinglag": "10",
        "notes": "Invulnerable on frame 2-26"
      },
      {
        "movename": "Air Dodge, Down",
        "totalframes": "65",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Diagonally Down",
        "totalframes": "73",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Left/Right",
        "totalframes": "80",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Diagonally Up",
        "totalframes": "90",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      },
      {
        "movename": "Air Dodge, Up",
        "totalframes": "98",
        "landinglag": "11-19",
        "notes": "Invulnerable on frame 2-19"
      }
    ],
    "stats": {
      "Weight": "80",
      "Gravity": "0.120",
      "Walk Speed": "1.47",
      "Run Speed": "2.31",
      "Initial Dash": "2.42",
      "Air Speed": "1.26",
      "Total Air Acceleration": "0.095",
      "SH / FH / SHFF / FHFF Frames": "38 / 55 / 27 / 39",
      "Fall Speed / Fast Fall Speed": "1.7 / 2.72",
      "Out of Shield, Up B": "4 frames",
      "Out of Shield, Forward Air or Up Air": "9 frames",
      "Out of Shield, Up Smash": "10 frames",
      "Shield Grab (Grab, post-Shieldstun)": "19 frames",
      "Shield Drop": "11 frames (universal)",
      "Jump Squat (pre-Jump frames)": "3 frames (universal)"
    }
  }
}
function Character({setCharacter}){
    const [selected, setSelected] = useState("");
    const [cleared, setCleared] = useState(false);
    const characterChange = (selectedOption) => {
        if (selectedOption) {
            setSelected({ selectedOption })
            setCharacter(prevState => {return {...prevState, ...selectedOption}})
            setCleared(false)
        } else {
          setCleared(true)
        }
    };
    return (
        <Col>
            <Row>
                <Select
                  value={selected && selected.label}
                  onChange={characterChange}
                  options={characters}
                  isClearable={true}
                  theme={theme => ({
                      ...theme,
                      borderRadius: 0,
                      colors: {
                        ...theme.colors,
                        primary25: 'grey',
                        primary: '#00909e',
                      },
                    })}
                />
                {!cleared && selected && <Moves character={selected['selectedOption'].value}/> }
            </Row>
        </Col>
    )
}

// Pass in dictionary to each function
function Moves(props) {
    return (
        <Col>
            <Row>
                <CharacterStats dict={Everything[props.character].stats}/>
            </Row>

            <Row>
                <GroundAttacks dict={Everything[props.character].ground_attacks}/>
            </Row>

            <Row>
                <AerialAttacks dict={Everything[props.character].aerial_attacks}/>
            </Row>

            <Row>
                <SpecialMoves dict={Everything[props.character].special_attacks}/>
            </Row>

            <Row>
                <DodgeSet dict={Everything[props.character].dodges}/>
            </Row>

            <Row>
                <GrabSet dict={Everything[props.character].grabs}/>
            </Row>

        </Col>
    )
}

function GroundAttacks(props){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Col>
            <Button onClick={toggle} style={{ marginBottom: '1rem' }}>
                View Ground Attacks
            </Button>
            {isOpen && <Collapse>
                <Card>
                    <CardBody>
                        <ul>
                            {Object.keys(props.dict).map(item=>{
                                return(
                                    <ul>
                                      <li>Move Name: {props.dict[item]['movename']}</li>
                                      <ul>
                                        <li>Total Frames: {props.dict[item]['totalframes']}</li>
                                        <li>Landing Lag: {props.dict[item]['landinglag']}</li>
                                        <li>Notes: {props.dict[item]['notes']}</li>
                                        <li>Startup: {props.dict[item]['startup']}</li>
                                        <li>Base Damage: {props.dict[item]['basedamage']}</li>
                                        <li>Shield Lag: {props.dict[item]['shieldlag']}</li>
                                        <li>Shield Stun: {props.dict[item]['shieldstun']}</li>
                                        <li>Advantage: {props.dict[item]['advantage']}</li>
                                        <li>Active Frames: {props.dict[item]['activeframes']}</li>
                                      </ul>
                                    </ul>
                                )
                              })
                            }
                        </ul>
                    </CardBody>
                </Card>
            </Collapse>}
        </Col>
    )
}

function SpecialMoves(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Col>
            <Button onClick={toggle} style={{ marginBottom: '1rem' }}>
                View Special Moves
            </Button>
            {isOpen && <Collapse>
                <Card>
                    <CardBody>
                            {Object.keys(props.dict).map(item=>{
                                return(
                                    <ul>
                                      <li>Move Name: {props.dict[item]['movename']}</li>
                                      <ul>
                                        <li>Total Frames: {props.dict[item]['totalframes']}</li>
                                        <li>Landing Lag: {props.dict[item]['landinglag']}</li>
                                        <li>Notes: {props.dict[item]['notes']}</li>
                                        <li>Startup: {props.dict[item]['startup']}</li>
                                        <li>Base Damage: {props.dict[item]['basedamage']}</li>
                                        <li>Shield Lag: {props.dict[item]['shieldlag']}</li>
                                        <li>Shield Stun: {props.dict[item]['shieldstun']}</li>
                                        <li>Advantage: {props.dict[item]['advantage']}</li>
                                        <li>Active Frames: {props.dict[item]['activeframes']}</li>
                                      </ul>
                                    </ul>
                                )
                              })
                            }
                    </CardBody>
                </Card>
            </Collapse>}
        </Col>
    )
}

function AerialAttacks(props){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Col>
            <Button onClick={toggle} style={{ marginBottom: '1rem' }}>
                View Aerial Attacks
            </Button>
            {isOpen && <Collapse>
                <Card>
                    <CardBody>
                          {Object.keys(props.dict).map(item=>{
                              return(
                                  <ul>
                                    <li>Move Name: {props.dict[item]['movename']}</li>
                                    <ul>
                                      <li>Total Frames: {props.dict[item]['totalframes']}</li>
                                      <li>Landing Lag: {props.dict[item]['landinglag']}</li>
                                      <li>Notes: {props.dict[item]['notes']}</li>
                                      <li>Startup: {props.dict[item]['startup']}</li>
                                      <li>Base Damage: {props.dict[item]['basedamage']}</li>
                                      <li>Shield Lag: {props.dict[item]['shieldlag']}</li>
                                      <li>Shield Stun: {props.dict[item]['shieldstun']}</li>
                                      <li>Advantage: {props.dict[item]['advantage']}</li>
                                      <li>Active Frames: {props.dict[item]['activeframes']}</li>
                                    </ul>
                                  </ul>
                              )
                            })
                          }
                    </CardBody>
                </Card>
            </Collapse>}
        </Col>
    )
}

function CharacterStats(props){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Col>
            <Button onClick={toggle} style={{ marginBottom: '1rem' }}>
                View Character Stats
            </Button>
            {isOpen && <Collapse>
                <Card>
                    <CardBody>
                        <ul>
                            {Object.keys(props.dict).map(item=>{
                                return <li key={item}>{item}: {props.dict[item]}</li>
                                })
                            }
                        </ul>
                    </CardBody>
                </Card>
            </Collapse> }
        </Col>
    )
}

function DodgeSet(props){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Col>
            <Button onClick={toggle} style={{ marginBottom: '1rem' }}>
                View Dodge Moves
            </Button>
            {isOpen && <Collapse>
                <Card>
                    <CardBody>
                          {Object.keys(props.dict).map(item=>{
                              return(
                                  <ul>
                                    <li>Move Name: {props.dict[item]['movename']}</li>
                                    <ul>
                                      <li>Total Frames: {props.dict[item]['totalframes']}</li>
                                      <li>Landing Lag: {props.dict[item]['landinglag']}</li>
                                      <li>Notes: {props.dict[item]['notes']}</li>
                                    </ul>
                                  </ul>
                              )
                            })
                          }
                    </CardBody>
                </Card>
            </Collapse>}
        </Col>
    )
}

function GrabSet(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Col>
            <Button onClick={toggle} style={{ marginBottom: '1rem' }}>
                View Grab Set
            </Button>
            {isOpen && <Collapse>
                <Card>
                    <CardBody>
                          {Object.keys(props.dict).map(item=>{
                              return(
                                  <ul>
                                    <li>Move Name: {props.dict[item]['movename']}</li>
                                    <ul>
                                      <li>Total Frames: {props.dict[item]['totalframes']}</li>
                                      <li>Landing Lag: {props.dict[item]['landinglag']}</li>
                                      <li>Notes: {props.dict[item]['notes']}</li>
                                      <li>Startup: {props.dict[item]['startup']}</li>
                                      <li>Base Damage: {props.dict[item]['basedamage']}</li>
                                    </ul>
                                  </ul>
                              )
                            })
                          }
                    </CardBody>
                </Card>
            </Collapse>}
        </Col>
    )
}

const DiffContainer = (props) => {
  return (
      <div>
        {props.diff}
      </div>
  )
}
const App = () => {
  const [me, setMe] = useState("");
  const [opponent, setOpponent] = useState("");
  const [diff, setDiff] = useState(null);

  useEffect(() => {
    if(me !== "" && opponent !== "") {
      fetch(`http://0.0.0.0:4000/compare?control=${me.value}&opponent=${opponent.value}`)
          .then(resp=>resp.json).then(data=>setDiff(data))

    }
  }, [me, opponent])

  return (
      <Container>

          <Row>
            <Col>
              <Character setCharacter={setMe}/>
            </Col>

            <Col>
              <Character setCharacter={setOpponent}/>
            </Col>
          </Row>
          {diff && <DiffContainer diff={diff} />}
      </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));