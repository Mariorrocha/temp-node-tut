// CommoJS, every file is module (by default)
//Module - Encapsulated Code (only share minimum)

// const {john, peter} = require('./4-names');
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

require('./7-mind-grenade');

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);