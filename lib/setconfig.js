require('shelljs/global');
var fs = require('fs'),
    path = require('path');

module.exports = function(username) {
    var configPath = process.env.HOME + '/.cdn_config';
    cd(path.resolve(__dirname));
    cd('..');
    cp('-f', 'config.json', configPath);
};
