/**
 * Server
 *
 * @date 4/29/16
 * @author Fang Jin <fang-a.jin@db.com>
 */

var config = require('./config');
var landing = require('kingslanding');

landing.lift(config, function() {
    console.log('Server lifted.');
});
