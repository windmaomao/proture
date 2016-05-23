/**
 * Stat model module
 * Event is sent via system and collected for aggregation.
 *
 * @module mongo
 *
 * @date 5/22/16
 * @author Fang Jin <windmaomao@gmail.com>
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Mixed = Schema.Types.Mixed;
module.exports = {
    fields: {
        name: { type: String, required: true },
        total: Number,
        newTotal: Number,
    },
    options: {
        collection: 'stat',
        versionKey: false,
        timestamps: {},
        runValidators: false
    },
    methods: {},
    indexes: {
        name: true,
    },
    virtuals: {}
}
