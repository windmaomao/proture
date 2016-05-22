module.exports = {

    sum: function(req, res, next) {

        transaction.find({}).exec(function(err, items) {
            if (err) {
                return next(err);
            }

            var sum = 0.0;
            _.each(items, function(t) {
                sum = sum + t.amount;
            })
            res.ok({ sum: sum });
        });
    },

}
