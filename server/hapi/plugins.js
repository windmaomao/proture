var Dogwater = require('dogwater');
var Bedwetter = require('bedwetter');
var Blipp = require('blipp');
var Models = require('./models');

var DogwaterPlugin = {
    register: Dogwater,
    options: Models
};
var BlippPlugin = {
    register: Blipp
};
var BedwetterPlugin = {
    register: Bedwetter,
    options: {}
};

module.exports = plugins = [
    BlippPlugin,
    DogwaterPlugin,
    BedwetterPlugin
];
