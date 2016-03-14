/**
 * Statement model
 *
 * Given time period, create or update statement
 *
 * Input: from, to, type (ex. year)
 */

var moment = require('moment');

var calcStatement = function(cb) {
    transaction.find({}).exec(function(err, items) {
        if (err) {
            return cb(err);
        }

        var result = {};

        var years = _.groupBy(items, function(item) {
            return moment(item.date).year();
        });

        _.each(years, function(items, year) {
            var sum = 0.0;
            var net = 0.0;
            _.each(items, function(t) {
                sum = sum + t.amount;
                if (!t.dividend) {
                    net = net + t.amount;
                }
            });
            result[year] = {
                sum: sum,
                net: net
            };
        });

        cb(0, result);
    });
};

module.exports = {

    calc: function(req, res, next) {
        calcStatement(function(err, result) {
            if (err) {
                return next(err);
            }

            res.ok(result);
        });
    },

    update: function(req, res, next) {
        calcStatement(function(err, result) {
            if (err) {
                return next(err);
            }

            _.each(result, function(item, year) {
                statement.create({
                    accountId: 1,
                    date: year + '-1-1',
                    dateType: 1,
                    net: item.net
                }).exec(function() {});
            });

            res.ok(result);
        });

    }

}
