/**
 * Stock model module
 *
 * @module mongo
 *
 * @date 5/15/16
 * @author Fang Jin <windmaomao@gmail.com>
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

module.exports = {
    fields: {
        /**
         * Stock
         */
        name: { type: 'String', required: true },
        symbol: String,
        sector: String,
        category: String,
        slogan: String,
        description: String,
        startYear: Number,
        rating: Number,
    },
    options: {
        collection: 'stock',
        versionKey: false,
        timestamps: {},
        runValidators: false
    },
    methods: {},
    indexes: {
        symbol: true,
        category: true,
        startYear: true,
        rating: true,
    },
    virtuals: {}
}
