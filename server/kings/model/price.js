/**
 * Stock price model module
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
         * Stock and price
         */
        stockId: { type: ObjectId, ref: 'stock' },
        price: Number,
        title: String,
        status: String,
    },
    options: {
        collection: 'price',
        versionKey: false,
        timestamps: {},
        runValidators: false
    },
    methods: {},
    indexes: {
        stockId: true,
        status: true,
    },
    virtuals: {}
}
