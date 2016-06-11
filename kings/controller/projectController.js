/**
 * Controller module
 *
 * @module controller
 *
 * @date 4/28/16
 * @author Fang Jin <windmaomao@gmail.com>
 */

var controller = module.exports = {};

controller.more = function(req, res, next) {
    res.send({ result: 123 });
    return next();
};
