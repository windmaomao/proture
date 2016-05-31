/**
 * Controller module
 *
 * @module controller
 *
 * @date 5/22/16
 * @author Fang Jin <windmaomao@gmail.com>
 */

module.exports = {
    subscribe: function(req, res, next) {
        var Subscription = Landing.models.subscription;
        var item = new Subscription({
            email: 'windmaomao@gmail.com'
        });

        item.save(function(err, result) {
            if (err) return next(err);

            res.send(result);
            return next();
        });
    }
};
