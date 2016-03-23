/**
 * Index controller module
 *
 * @module controller
 *
 * @date 3/18/16
 * @author Fang Jin <fang-a.jin@db.com>
 */

var config = require('../config');

module.exports = {
    index: function(req, res, next) {
        res.send(config.name);
        return next();
    },
}
