import blue from './assets/armor/blue.png'
import green from './assets/armor/green.png'
import pink from './assets/armor/pink.png'
import orange from './assets/armor/orange.png'

import gust from './assets/earring/gust.png'
import order from './assets/earring/order.png'

import chasm from './assets/necklace/chasm.png'
import lava from './assets/necklace/lava.png'
import lifeblood from './assets/necklace/lifeblood.png'

import gale from './assets/ring/gale.png'
import glacial from './assets/ring/glacial.png'
import sapling from './assets/ring/sapling.png'
import solar from './assets/ring/solar.png'

import assault from './assets/class/assault.png'
import tank from './assets/class/tank.png'
import healer from './assets/class/healer.png'
import mage from './assets/class/mage.png'
import ranger from './assets/class/ranger.png'

import amy from './assets/heroes/amy.png'
import arme from './assets/heroes/arme.png'
import arsad from './assets/heroes/arsad.png'
import asin from './assets/heroes/asin.png'
import dio from './assets/heroes/dio.png'
import edel from './assets/heroes/edel.png'
import elesis from './assets/heroes/elesis.png'
import gaian from './assets/heroes/gaian.png'
import grandiel from './assets/heroes/grandiel.png'
import io from './assets/heroes/io.png'
import jin from './assets/heroes/jin.png'
import kanavan from './assets/heroes/kanavan.png'
import lass from './assets/heroes/lass.png'
import ley from './assets/heroes/ley.png'
import lime from './assets/heroes/lime.png'
import lire from './assets/heroes/lire.png'
import mari from './assets/heroes/mari.png'
import nelia from './assets/heroes/nelia.png'
import rin from './assets/heroes/rin.png'
import ronan from './assets/heroes/ronan.png'
import rufus from './assets/heroes/rufus.png'
import ryan from './assets/heroes/ryan.png'
import serdin from './assets/heroes/serdin.png'
import sieghart from './assets/heroes/sieghart.png'
import veigas from './assets/heroes/veigas.png'
import werner from './assets/heroes/werner.png'
import zero from './assets/heroes/zero.png'

export const nullToNone = word => null ? word : 'none'

export const displayUpperCase = word => {
  if (word === 'bov') {
    return 'B.O.V.'
  }
  if (word === 'aot') {
    return 'A.O.T.'
  }
  return word
}

export const grandChaseData = [
  {stage: '1-3', boss: 'tank', mats: ['enchants'], evos: null, sUnit: null},
  {stage: '1-6', boss: 'healer', mats: ['enchants'], evos: null, sUnit: null},
  {stage: '1-9', boss: 'mage', mats: ['enchants'], evos:null, sUnit: null},
  {stage: '2-3', boss: 'mage', mats: ['enchants', 'bov'], evos: null, sUnit: null},
  {stage: '2-6', boss: 'mage', mats: ['enchants', 'bov'], evos: null, sUnit: null},
  {stage: '2-9', boss: 'ranger', mats: ['enchants', 'bov'], evos: null, sUnit: null},
  {stage: '3-3', boss: 'mage', mats: ['enchants', 'bov'], evos: 'healer', sUnit: null},
  {stage: '3-6', boss: 'mage', mats: ['enchants', 'bov'], evos: 'tank', sUnit: null},
  {stage: '3-9', boss: 'tank', mats: ['enchants', 'bov'], evos: 'assault', sUnit: null},
  {stage: '4-3', boss: 'tank', mats: ['enchants', 'bov'], evos: 'mage', sUnit: null},
  {stage: '4-6', boss: 'mage', mats: ['enchants', 'bov'], evos: 'ranger', sUnit: null},
  {stage: '4-9', boss: 'assault', mats: ['enchants', 'bov'], evos: 'healer', sUnit: null},
  {stage: '5-3', boss: 'assault', mats: ['enchants', 'bov'], evos: 'tank', sUnit: null},
  {stage: '5-6', boss: 'ranger', mats: ['enchants', 'bov'], evos: 'assault', sUnit: null},
  {stage: '5-9', boss: 'mage', mats: ['enchants', 'bov'], evos: 'mage', sUnit: null},
  {stage: '6-3', boss: 'mage', mats: ['enchants', 'bov'], evos: 'ranger', sUnit: null},
  {stage: '6-6', boss: 'ranger', mats: ['enchants', 'bov'], evos: 'tank', sUnit: 'tank'},
  {stage: '6-9', boss: 'mage', mats: ['enchants'], evos: 'mage', sUnit: 'mage'},
  {stage: '7-3', boss: 'assault', mats: ['enchants'], evos: 'ranger', sUnit: 'ranger'},
  {stage: '7-6', boss: 'mage', mats: ['enchants'], evos: 'healer', sUnit: 'healer'},
  {stage: '7-9', boss: 'assault', mats: ['enchants'], evos: 'assault', sUnit: 'assault'},
  {stage: '8-3', boss: 'assault', mats: ['enchants', 'bov', 'runes'], evos: 'healer', sUnit: null},
  {stage: '8-6', boss: 'ranger', mats: ['enchants', 'runes'], evos: 'tank', sUnit: 'tank'},
  {stage: '8-9', boss: 'mage', mats: ['enchants', 'runes'], evos: 'mage', sUnit: 'mage'},
  {stage: '9-3', boss: 'mage', mats: ['enchants', 'runes'], evos: 'ranger', sUnit: 'ranger'},
  {stage: '9-6', boss: 'healer', mats: ['enchants', 'runes'], evos: 'healer', sUnit: 'healer'},
  {stage: '9-9', boss: 'assault', mats: ['enchants', 'runes'], evos: 'assault', sUnit: 'assault'},
  {stage: '10-3', boss: 'mage', mats: ['enchants', 'bov', 'runes'], evos: 'tank', sUnit: null},
  {stage: '10-6', boss: 'tank', mats: ['enchants', 'runes'], evos: 'tank', sUnit: 'tank'},
  {stage: '10-9', boss: 'assault', mats: ['enchants', 'runes'], evos: 'mage', sUnit: 'mage'},
  {stage: '11-3', boss: 'assault', mats: ['enchants', 'bov', 'runes'], evos: 'ranger', sUnit: null},
  {stage: '11-6', boss: 'tank', mats: ['enchants', 'runes'], evos: 'ranger', sUnit: 'ranger'},
  {stage: '11-9', boss: 'assault', mats: ['enchants', 'runes'], evos: 'healer', sUnit: 'healer'},
  {stage: '12-3', boss: 'mage', mats: ['enchants', 'runes'], evos: 'assault', sUnit: 'assault'},
  {stage: '12-6', boss:'mage', mats: ['enchants', 'runes'], evos: 'tank', sUnit: 'tank'},
  {stage: '12-9', boss: 'healer', mats: ['enchants', 'runes'], evos: 'mage', sUnit: 'mage'},
  {stage: '13-3', boss: 'tank', mats: ['enchants', 'bov', 'runes'], evos: 'healer', sUnit: null},
  {stage: '13-6', boss: 'ranger', mats: ['enchants', 'runes'], evos: 'ranger', sUnit: 'ranger'},
  {stage: '13-9', boss: 'assault', mats: ['enchants', 'runes'], evos: 'healer', sUnit: 'healer'},
  {stage: '14-3', boss: 'mage', mats: ['enchants', 'bov', 'runes', 'aot'], evos: 'mage', sUnit: null},
  {stage: '14-6', boss: 'healer', mats: ['enchants', 'runes', 'aot'], evos: 'assault', sUnit: 'assault'},
  {stage: '14-9', boss: 'mage', mats: ['enchants', 'runes', 'aot'], evos: 'tank', sUnit: 'tank'},
  {stage: '15-3', boss: 'tank', mats: ['enchants', 'runes', 'aot'], evos: 'mage', sUnit: 'mage'},
  {stage: '15-6', boss: 'assault', mats: ['enchants', 'runes', 'aot'], evos: 'ranger', sUnit: 'ranger'},
  {stage: '15-9', boss: 'assault', mats: ['enchants', 'runes', 'aot'], evos: 'healer', sUnit: 'healer'},
  {stage: '16-3', boss: 'assault', mats: ['enchants', 'bov', 'runes', 'aot'], evos:'ranger', sUnit: null},
  {stage: '16-6', boss: 'ranger', mats: ['enchants', 'runes', 'aot'], evos: 'assault', sUnit: 'assault'},
  {stage: '16-9', boss: 'assault', mats: ['enchants', 'runes', 'aot'], evos: 'tank', sUnit: 'tank'},
  {stage: '17-3', boss: 'ranger', mats: ['enchants', 'bov', 'runes', 'aot'], evos: 'assault', sUnit: null},
  {stage: '17-6', boss: 'healer', mats: ['enchants', 'runes', 'aot'], evos: 'mage', sUnit: 'mage'},
  {stage: '17-9', boss: 'mage', mats: ['enchants', 'runes', 'aot'], evos: 'ranger', sUnit: 'ranger'},
  {stage: '18-3', boss: 'assault', mats: ['enchants', 'runes', 'aot'], evos: 'healer', sUnit: 'healer'},
  {stage: '18-6', boss: 'mage', mats: ['enchants', 'runes', 'aot'], evos: 'assault', sUnit: 'assault'},
  {stage: '18-9', boss: 'healer', mats: ['enchants', 'runes', 'aot'], evos: 'tank', sUnit: 'tank'},
  {stage: '19-3', boss: 'tank', mats: ['enchants', 'bov', 'runes', 'aot'], evos: 'mage', sUnit: null},
  {stage: '19-6', boss: 'assault', mats: ['enchants', 'runes', 'aot'], evos: 'mage', sUnit: 'mage'},
  {stage: '19-9', boss: 'assault', mats: ['enchants', 'runes', 'aot'], evos: 'ranger', sUnit: 'ranger'},
  {stage: '20-3', boss: 'assault', mats: ['enchants', 'bov', 'runes', 'aot'], evos: 'tank', sUnit: null},
  {stage: '20-6', boss: 'healer', mats: ['enchants', 'runes', 'aot'], evos: 'healer', sUnit: 'healer'},
  {stage: '20-9', boss: 'assault', mats: ['enchants', 'runes', 'aot'], evos: 'assault', sUnit: 'assault'},
  {stage: '21-3', boss: 'assault', mats: ['enchants', 'runes', 'aot'], evos: 'tank', sUnit: 'tank'},
  {stage: '21-6', boss: 'assault', mats: ['enchants', 'runes', 'aot'], evos: 'mage', sUnit: 'mage'},
  {stage: '21-9', boss: 'assault', mats: ['enchants', 'runes', 'aot'], evos: 'ranger', sUnit: 'ranger'},
  {stage: '22-3', boss: 'mage', mats: ['enchants', 'bov', 'runes', 'aot'], evos: 'assault', sUnit: null},
  {stage: '22-6', boss: 'ranger', mats: ['enchants', 'runes', 'aot'], evos: 'healer', sUnit: 'healer'},
  {stage: '22-9', boss: 'assault', mats: ['enchants', 'runes', 'aot'], evos: 'assault', sUnit: 'assault'},
  {stage: 'Challenge 20-3', boss: 'assault', mats: ['enchants', 'bov', 'runes', 'aot'], evos: 'healer', sUnit: null},
  {stage: 'Challenge 20-6', boss: 'healer', mats: ['enchants', 'runes', 'aot'], evos: 'tank', sUnit: 'tank'},
  {stage: 'Challenge 20-9', boss: 'assault', mats: ['enchants', 'runes', 'aot'], evos: 'mage', sUnit: 'mage'},
  {stage: 'Challenge 21-3', boss: 'assault', mats: ['enchants', 'runes', 'aot'], evos: 'ranger', sUnit: 'ranger'},
  {stage: 'Challenge 21-6', boss: 'assault', mats: ['enchants', 'runes', 'aot'], evos: 'healer', sUnit: 'healer'},
  {stage: 'Challenge 21-9', boss: 'assault', mats: ['enchants', 'runes', 'aot'], evos: 'assault', sUnit: 'assault'},
  {stage: 'Challenge 22-3', boss: 'mage', mats: ['enchants', 'bov', 'runes', 'aot'], evos: 'tank', sUnit: null},
  {stage: 'Challenge 22-6', boss: 'ranger', mats: ['enchants', 'runes', 'aot'], evos: 'tank', sUnit: 'tank'},
  {stage: 'Challenge 22-9', boss: 'assault', mats: ['enchants', 'runes', 'aot'], evos: 'mage', sUnit: 'mage'}
]

export const evos = ['assault', 'tank', 'ranger', 'mage', 'healer'];
export const boss = ['assault', 'tank', 'ranger', 'mage', 'healer'];
export const sUnit = ['assault', 'tank', 'ranger', 'mage', 'healer'];
export const mats = ['bov', 'enchants', 'runes', 'aot']

export const heroes = [
  { id: "elesis", name: "Elesis", pic: elesis},
  { id: "lire", name: "Lire", pic: lire},
  { id: "arme", name: "Arme", pic: arme},
  { id: "lass", name: "Lass", pic: lass},
  { id: "ryan", name: "Ryan", pic: ryan},
  { id: "ronan", name: "Ronan", pic: ronan},
  { id: "amy", name: "Amy", pic: amy},
  { id: "jin", name: "Jin", pic: jin},
  { id: "sieghart", name: "Sieghart", pic: sieghart},
  { id: "mari", name: "Mari", pic: mari},
  { id: "dio", name: "Dio", pic: dio},
  { id: "zero", name: "Zero", pic: zero},
  { id: "ley", name: "Ley", pic: ley},
  { id: "rufus", name: "Rufus", pic: rufus},
  { id: "rin", name: "Rin", pic: rin},
  { id: "asin", name: "Asin", pic: asin},
  { id: "lime", name: "Lime", pic: lime},
  { id: "edel", name: "Edel", pic: edel},
  { id: "veigas", name: "Veigas", pic: veigas},
  { id: "serdin", name: "Serdin", pic: serdin},
  { id: "kanavan", name: "Kanavan", pic: kanavan},
  { id: "werner", name: "Werner", pic: werner},
  { id: "grandiel", name: "Grandiel", pic: grandiel},
  { id: "nelia", name: "Nelia", pic: nelia},
  { id: "io", name: "Io", pic: io},
  { id: "gaian", name: "Dark Gaian", pic: gaian},
  { id: "arsad", name: "Arsad", pic: arsad}
]

export const heroBuilds= {
  elesis: {
    id:'elesis', 
    name: 'Elesis', 
    type: 'assault',
    color: '#C12119',
    classPic: assault,
    set: 'Power of Anger (blue)', 
    setPic: blue,
    pic: elesis,
    limitBreak: 'S2 & Passive', 
    accessories: 'solar Ring, chasm Necklace, Earrings of order', 
    ring: solar,
    necklace: chasm,
    earrings: order,
    traits:'Crit, CDR, SDI (4 points in each)', 
    sockets:'Physical Attack, Crit, SADI', 
    chaser05:'5/5 Elevated Power', 
    chaser10:'5/5 Divine Protection', 
    chaser15: '5/5 Fate', 
    chaser20:'5/5 Chaotic Judgement', 
    chaser25:'5/5 Long Life'
  },
  lire: {
    id:'lire', 
    name: 'Lire', 
    type: 'ranger',
    color: '#5EDB51',
    classPic: ranger,
    set: 'Vows of Violence (green)', 
    setPic: green,
    pic: lire,
    limitBreak: 'S2 & Passive', 
    accessories: 'gale Ring, lava Necklace, Earrings of gust', 
    ring: gale,
    necklace: lava,
    earrings: gust,
    traits:'Crit, BASI, BADI (4 points in each)', 
    sockets:'Physical Attack, BASI, BADI', 
    chaser05:'5/5 Elevated Power',
    chaser10: '5/5 Invisible Hand',
    chaser15: '5/5 Fate',
    chaser20: '5/5 Storm Arrow',
    chaser25: '5/5 Impulse',
  },
  arme: {
    id:'arme', 
    name: 'Arme', 
    type: 'mage',
    color: '#8242A5',
    classPic: mage,
    set: 'Dagger of Passion (orange)', 
    setPic: orange,
    pic: arme,
    limitBreak: 'Passive & S2', 
    accessories: 'solar Ring, lava Necklace, Earrings of order', 
    ring: solar,
    necklace: lava,
    earrings: order,
    traits:'Crit, CDR, SDI (4 points in each)', 
    sockets:'Magic Attack, Crit/CDR, SADI', 
    chaser05:'?',
    chaser10: '?',
    chaser15: '?',
    chaser20: '5/5 Lightning Bolt',
    chaser25: '?',
  },
  lass: {
    id:'lass', 
    name: 'Lass', 
    type: 'assault',
    color: '#C12119',
    classPic: assault,
    set: 'Dagger of Passion (orange)', 
    setPic: orange,
    pic: lass,
    limitBreak: '?', 
    accessories: 'solar Ring, lava Necklace, Earrings of order', 
    ring: solar,
    necklace: lava,
    earrings: order,
    traits:'Crit, CDR, SDI (4 points in each)', 
    sockets:'Physical Attack, Crit, SADI', 
    chaser05:'?',
    chaser10: '?',
    chaser15: '?',
    chaser20: '5/5 Shadow Stranger',
    chaser25: '?',
  },
  ryan: {
    id:'ryan', 
    name: 'Ryan', 
    type: 'tank',
    color: '#0C9AFF',
    classPic: tank,
    set: 'Power of Anger (blue)', 
    setPic: blue,
    pic: ryan,
    limitBreak: 'S1 & Passive', 
    accessories: 'glacial Ring, chasm Necklace, Earrings of order',
    ring: glacial,
    necklace: chasm,
    earrings: order, 
    traits:'BADR, SADR, HMRI (4 points in each)', 
    sockets:'Max Health, CDR, BADR', 
    chaser05:'?',
    chaser10: '?',
    chaser15: '?',
    chaser20: '5/5 Totem of Forest God',
    chaser25: '?',
  },
  ronan: {
    id:'ronan', 
    name: 'Ronan', 
    type: 'tank',
    color: '#0C9AFF',
    classPic: tank,
    set: 'Power of Anger (blue)', 
    setPic: blue,
    pic: ronan,
    limitBreak: 'S2 & Passive', 
    accessories: 'solar Ring, chasm Necklace, Earrings of order', 
    ring: solar,
    necklace: chasm,
    earrings: order,
    traits:'CDR, BADR, SADR (4 points in each)', 
    sockets:'Max Health, CDR, BADR', 
    chaser05:'?',
    chaser10: '?',
    chaser15: '?',
    chaser20: '5/5 Erudons Sword',
    chaser25: '?',
  },
  amy:{
    id:'amy', 
    name: 'Amy', 
    type: 'healer',
    color: '#FFE228',
    classPic: healer,
    set: 'Vows of Violence (green)', 
    setPic: green,
    pic: amy,
    limitBreak: 'S1 & Passive', 
    accessories: 'gale Ring, chasm Necklace, Earrings of order', 
    ring: gale,
    necklace: chasm,
    earrings: order,
    traits:'CDR, BASI, SADI (4 points in each)', 
    sockets:'Magic Attack, CDR/BASI, SADI', 
    chaser05:'?',
    chaser10: '?',
    chaser15: '?',
    chaser20: '5/5 Fan Service',
    chaser25: '?',
  },
  jin: {
    id:'jin', 
    name: 'Jin', 
    type: 'tank',
    color: '#0C9AFF',
    classPic: tank,
    set: 'Dagger of Passion (orange)', 
    setPic: orange,
    pic: jin,
    limitBreak: 'S1 & S2', 
    accessories: 'solar Ring, lava Necklace, Earrings of gust', 
    ring: solar,
    necklace: lava,
    earrings: gust,
    traits:'Crit, BASI, SADI (4 points in each)', 
    sockets:'Max Health, CDR/Crit, SADI', 
    chaser05:'',
    chaser10: '',
    chaser15: '',
    chaser20: '',
    chaser25: '',
  },
  sieghart: {
    id:'sieghart', 
    name: 'Sieghart', 
    type: 'assault',
    color: '#C12119',
    classPic: assault,
    set: 'Power of Anger (blue)', 
    setPic: blue,
    pic: sieghart,
    limitBreak: 'Passive & S1', 
    accessories: 'solar Ring, chasm Necklace, Earrings of order', 
    ring: solar,
    necklace: chasm,
    earrings: order,
    traits:'Crit, CDR, SADI (4 points in each)', 
    sockets:'Physical Attack, CDR, SADI', 
    chaser05:'',
    chaser10: '',
    chaser15: '',
    chaser20: '',
    chaser25: '',
  },
  mari: {
    id:'mari', 
    name: 'Mari', 
    type: 'mage',
    color: '#8242A5',
    classPic: mage,
    set: 'Vows of Violence (green)', 
    setPic: green,
    pic: mari,
    limitBreak: '?', 
    accessories: 'gale Ring, lava Necklace, Earrings of gust', 
    ring: gale,
    necklace: lava,
    earrings: gust,
    traits:'Crit, BASI, BADI (4 points in each)', 
    sockets:'Magic Attack, BASI, SADI', 
    chaser05:'?',
    chaser10: '?',
    chaser15: '?',
    chaser20: '5/5 Deadly Test',
    chaser25: '?',
  },
  dio: {
    id:'dio', 
    name: 'Dio',
    type: 'assault',
    color: '#C12119', 
    classPic: assault,
    set: 'Power of Anger (blue)', 
    setPic: blue,
    pic: dio,
    limitBreak: 'S1 & Passive', 
    accessories: 'gale Ring, chasm Necklace, Earrings of order', 
    ring: gale,
    necklace: chasm,
    earrings: order,
    traits:'CDR, BASI, SADR (4 points in each)', 
    sockets:'Physical Attack, CDR, SADI', 
    chaser05:'',
    chaser10: '',
    chaser15: '',
    chaser20: '',
    chaser25: '',
  },
  zero: {
    id:'zero', 
    name: 'Zero', 
    type: 'tank',
    color: '#0C9AFF',
    classPic: tank,
    set: 'Dagger of Passion (orange)', 
    setPic: orange,
    pic: zero,
    limitBreak: 'S1 & Passive', 
    accessories: 'solar Ring, lava Necklace, Earrings of order', 
    ring: solar,
    necklace: lava,
    earrings: order,
    traits:'Crit, CDR, SADR (4 points in each)', 
    sockets:'Max Health, Crit, SADR', 
    chaser05:'',
    chaser10: '',
    chaser15: '',
    chaser20: '',
    chaser25: '',
  },
  ley: {
    id:'ley', 
    name: 'Ley', 
    type: 'mage',
    color: '#8242A5',
    classPic: mage,
    set: 'Vows of Violence (green)', 
    setPic: green,
    pic: ley,
    limitBreak: 'S2 & Passive', 
    accessories: 'gale Ring, chasm Necklace, Earrings of gust', 
    ring: gale,
    necklace: chasm,
    earrings: gust,
    traits:'Crit, BASI, BADI (4 points in each)', 
    sockets:'Magic Attack, BASI, BADI', 
    chaser05:'',
    chaser10: '',
    chaser15: '',
    chaser20: '',
    chaser25: '',
  },
  rufus: {
    id:'rufus', 
    name: 'Rufus',
    type: 'ranger', 
    color: '#5EDB51',
    classPic: ranger,
    set: 'Vows of Violence (green)', 
    setPic: green,
    pic: rufus,
    limitBreak: 'S1 & S2', 
    accessories: 'gale Ring, lava Necklace, Earrings of gust', 
    ring: gale,
    necklace: lava,
    earrings: gust,
    traits:'Crit, BASI, BADI (4 points in each)', 
    sockets:'Physical Attack, BASI/Crit, BADI', 
    chaser05:'',
    chaser10: '',
    chaser15: '',
    chaser20: '',
    chaser25: '',
  },
  rin: {
    id:'rin', 
    name: 'Rin', 
    type: 'healer',
    color: '#FFE228',
    classPic: healer,
    set: 'Power of Anger (blue)', 
    setPic: blue,
    pic: rin,
    limitBreak: 'S1 & S2', 
    accessories: 'solar Ring, chasm Necklace, Earrings of order', 
    ring: solar,
    necklace: chasm,
    earrings: order,
    traits:'Crit, CDR, SADI (4 points in each)', 
    sockets:'Max Health, CDR/Crit, SADR/BADR', 
    chaser05:'?',
    chaser10: '?',
    chaser15: '?',
    chaser20: '5/5 Chaotic Wind',
    chaser25: '?',
  },
  asin: {
    id:'asin', 
    name: 'Asin', 
    type: 'tank',
    color: '#0C9AFF',
    classPic: tank,
    set: 'Power of Anger (blue)', 
    setPic: blue,
    pic: asin,
    limitBreak: 'S1 & S2', 
    accessories: 'gale Ring, chasm Necklace, Earrings of order', 
    ring: gale,
    necklace: chasm,
    earrings: order,
    traits:'Crit, CDR, SADI (4 points in each)', 
    sockets:'Max Health, CDR, BADR', 
    chaser05:'',
    chaser10: '',
    chaser15: '',
    chaser20: '',
    chaser25: '',
  },
  lime: {
    id:'lime', 
    name: 'Lime', 
    type: 'healer',
    color: '#FFE228',
    classPic: healer,
    set: 'Power of Anger (blue)', 
    setPic: blue,
    pic: lime,
    limitBreak: 'Passive & S2', 
    accessories: 'solar Ring, chasm Necklace, Earrings of order', 
    ring: solar,
    necklace: chasm,
    earrings: order,
    traits:'CDR, BASI, SADI (4 points in each)', 
    sockets:'Max Health, CDR, SADR', 
    chaser05:'',
    chaser10: '',
    chaser15: '',
    chaser20: '',
    chaser25: '',
  },
  edel: {
    id:'edel', 
    name: 'Edel', 
    type: 'assault',
    color: '#C12119',
    classPic: assault,
    set: 'Vows of Violence (green)', 
    setPic: green,
    pic: edel,
    limitBreak: 'S2 & Passive', 
    accessories: 'gale Ring, lava Necklace, Earrings of gust', 
    ring: gale,
    necklace: lava,
    earrings: gust,
    traits:'CDR, BASI, BADI (4 points in each)', 
    sockets:'Physical Attack, BASI, BADI', 
    chaser05:'',
    chaser10: '',
    chaser15: '',
    chaser20: '',
    chaser25: '',
  },
  veigas: {
    id:'veigas', 
    name: 'Veigas', 
    type: 'mage',
    color: '#8242A5',
    classPic: mage,
    set: 'Dagger of Passion (orange)', 
    setPic: orange,
    pic: veigas,
    limitBreak: 'S1 & Passive', 
    accessories: 'solar Ring, lava Necklace, Earrings of order', 
    ring: solar,
    necklace: lava,
    earrings: order,
    traits:'Crit, CDR, SADI (4 points in each)', 
    sockets:'Magic Attack, Crit/CDR, SADI', 
    chaser05:'',
    chaser10: '',
    chaser15: '',
    chaser20: '',
    chaser25: '',
  },
  serdin: {
    id:'serdin', 
    name: 'Serdin', 
    type: 'healer',
    color: '#FFE228',
    classPic: healer,
    set: 'Vows of Violence (green)', 
    setPic: green,
    pic: serdin,
    limitBreak: 'S1 & S2', 
    accessories: 'gale Ring, lava Necklace, Earrings of gust', 
    ring: gale,
    necklace: lava,
    earrings: gust,
    traits:'CDR, BASI, BADI (4 points in each)', 
    sockets:'Magic Attack, CDR/BASI, SADR/BADI', 
    chaser05:'',
    chaser10: '',
    chaser15: '',
    chaser20: '',
    chaser25: '',
  },
  kanavan: {
    id:'kanavan', 
    name: 'Kanavan', 
    type: 'assault',
    color: '#C12119',
    classPic: assault,
    set: 'Vows of Violence (green) or Dagger of Passion (orange)', 
    setPic: green,
    setPicB: orange,
    pic: kanavan,
    limitBreak: 'S2 & S1', 
    accessories: 'solar Ring, lava Necklace, Earrings of order', 
    ring: solar,
    necklace: lava,
    earrings: order,
    traits:'Crit, BASI, SADI (4 points in each)', 
    sockets:'Physical Attack, Crit/BASI, SADI', 
    chaser05:'',
    chaser10: '',
    chaser15: '',
    chaser20: '',
    chaser25: '',
  },
  werner: {
    id:'werner', 
    name: 'Werner', 
    type: 'ranger',
    color: '#5EDB51',
    classPic: ranger,
    set: 'Spirit of Luck (pink)', 
    setPic: pink,
    pic: werner,
    limitBreak: 'Passive & S2', 
    accessories: 'solar Ring, chasm Necklace, Earrings of order', 
    ring: solar,
    necklace: chasm,
    earrings: order,
    traits:'Crit, CDR, BADI (4 points in each)', 
    sockets:'Physical Attack, CDR/Crit, BADI/SADI', 
    chaser05:'',
    chaser10: '',
    chaser15: '',
    chaser20: '',
    chaser25: '',
  },
  grandiel: {
    id:'grandiel', 
    name: 'Grandiel', 
    type: 'healer',
    color: '#FFE228',
    classPic: healer,
    set: 'Power of Anger (blue)', 
    setPic: blue,
    pic: grandiel,
    limitBreak: 'S2 & S1', 
    accessories: 'glacial Ring, chasm Necklace, Earrings of order', 
    ring: glacial,
    necklace: chasm,
    earrings: order,
    traits:'CDR, SADR, BADR (4 points in each)', 
    sockets:'Magic Attack, CDR, SADR', 
    chaser05:'',
    chaser10: '',
    chaser15: '',
    chaser20: '',
    chaser25: '',
  },
  nelia: {
    id:'nelia', 
    name: 'Nelia', 
    type: 'mage',
    color: '#8242A5',
    classPic: mage,
    set: 'Dagger of Passion (orange)', 
    setPic: orange,
    pic: nelia,
    limitBreak: 'S2 & Passive', 
    accessories: 'solar Ring, chasm Necklace, Earrings of order', 
    ring: solar,
    necklace: chasm,
    earrings: order,
    traits:'Crit, CDR, SADI (4 points in each)', 
    sockets:'Magic Attack, CDR/Crit, SADI', 
    chaser05:'',
    chaser10: '',
    chaser15: '',
    chaser20: '',
    chaser25: '',
  },
  io: {
    id:'io',
    name:'Io',
    type: 'ranger',
    color: '#5EDB51',
    classPic: ranger,
    set: 'Power of Anger (blue) or Vows of Violence (green)',
    setPic: blue,
    setPicB: green,
    pic: io,
    limitBreak: 'S1 & S2', 
    accessories: 'gale Ring, chasm Necklace, Earrings of gust', 
    ring: gale,
    necklace: chasm,
    earrings: gust,
    traits:'BASI, BADI, CDR (4 points in each)', 
    sockets:'Physical Attack, BASI, BADI', 
    chaser05:'?',
    chaser10: '?',
    chaser15: '?',
    chaser20: '5/5 Punisher',
    chaser25: '?',
  },
  gaian: {
    id:'darkGaian', 
    name: 'Dark Gaian', 
    type: 'mage',
    color: '#8242A5',
    classPic: mage,
    set: 'Dagger of Passion (orange)', 
    setPic: orange,
    pic: gaian,
    limitBreak: 'N/A', 
    accessories: 'sapling Ring, lifeblood Necklace, Earrings of order', 
    ring: sapling,
    necklace: lifeblood,
    earrings: order,
    traits:'Crit, SADI, CSR (4 points in each)', 
    sockets:'Magic Attack, CSR, SADI', 
    chaser05:'',
    chaser10: '',
    chaser15: '',
    chaser20: '',
    chaser25: '',
  },
  arsad: {
    id:'arsad', 
    name: 'Arsad', 
    type: 'tank',
    color: '#0C9AFF',
    classPic: tank,
    set: 'Power of Anger (blue)', 
    setPic: blue,
    pic: arsad,
    limitBreak: 'N/A', 
    accessories: 'glacial Ring, chasm Necklace, Earrings of order',
    ring: glacial,
    necklace: chasm,
    earrings: order, 
    traits:'CDR, BADR, SADR (4 points in each)', 
    sockets:'Max Health, CDR, SADR', 
    chaser05:'',
    chaser10: '',
    chaser15: '',
    chaser20: '',
    chaser25: '',
  },
}