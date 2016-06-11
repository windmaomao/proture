/**
 * Stats update scheduler module
 *
 * @module scheduler
 *
 * @date 5/19/16
 * @author Fang Jin <windmaomao@gmail.com>
 */

var async = require('async');
var moment = require('moment');

module.exports = function(job, done) {
    var asOfDate = moment({ hour: 0 }).format();
    var fns = async.seq(
        preparePool,
        countEntity,
        updateCount
    );
    jobData = {
        pool: {
            Stat: [],
            StatCreate: [],
        },
        asOfDate: asOfDate,
    };
    return fns(jobData, done);
};

var preparePool = function(data, done) {
    // return done(null, data);
    return async.parallel({
        Stat: function(cb) {
            var query = {
                createdAt: data.asOfDate
            };
            Stat.find(query).exec(cb);
        },
    }, function(err, results) {
        if (err) return done(err);
        data.pool.Stat = results.Stat;
        logger.verbose('entities', data.pool.Stat.length);

        done(null, data);
    });
};

var countEntity = function(data, done) {
    var entities = Object.keys(Models);
    async.map(entities, count, function(err, results) {
        if (err) return done(err);

        var inserts = [];
        for (var i in entities) {
            inserts.push({
                name: entities[i],
                total: results[i],
                newTotal: 0,
                createdAt: data.asOfDate
            });
            logger.debug(entities[i] + ' count', results[i]);
        };

        data.pool.StatCreate = inserts;
        done(null, data);
    });
};

function count(entity, done) {
    var Entity = Models[entity];
    Entity.count({}, function(err, c) {
        if (err) return done(err);
        done(null, c);
    });
}

var updateCount = function(data, done) {
    var deletes = data.pool.Stat;
    var creates = data.pool.StatCreate;
    async.series({
        deletes: function(cb) {
            if (!deletes.length) return cb(null, []);
            return Stat.remove({ _id: {$in: deletes} }, cb);
        },
        creates: function(cb) {
            if (!creates.length) return cb(null, []);
            return Stat.insertMany(creates, cb);
        },
    }, function(err, results) {
        if (err) return done(err);

        logger.verbose("stat deleted", deletes.length);
        logger.verbose("stat created", results.creates.length);
        done(null, data);
    });
};
