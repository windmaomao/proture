/**
 * Controller module
 *
 * @module controller
 *
 * @date 5/14/16
 * @author Fang Jin <windmaomao@gmail.com>
 */

var ctrl = module.exports = {};
var jwt = require('jsonwebtoken');
var secret = 'proture';

ctrl.login = function(req, res, next) {
    var user = { username: 'admin', role: 'admin' };
    var token = jwt.sign(user, secret, {
      expiresIn: '1 days'
    });
    res.send({ token: token });
    return next();
};

ctrl.loggedIn = function(req, res, next) {
    return ctrl.authenticate(req, res, function() {
        return res.send(req.user);
    });
};

ctrl.logout = function(req, res, next) {
    res.send(true);
    return next();
};

ctrl.authenticate = function(req, res, next) {
    var token = req.params['token'] || req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, secret, function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: err });
            } else {
                req.user = decoded;
                next();
            }
        });
    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
};
