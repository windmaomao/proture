/**
 * Account transaction model module
 *
 * @module mongo
 *
 * @date 5/5/16
 * @author Fang Jin <windmaomao@gmail.com>
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

module.exports = {
    fields: {
        /**
         * Account
         */
        accountId: { type: ObjectId, ref: 'account' },
        /**
         * Title and amount
         */
        amount: { type: Number, required: true },
        title: String,
        description: String,
        /**
         * Attributes
         */
    },
    options: {
        collection: 'transaction',
        versionKey: false,
        timestamps: {},
        runValidators: false
    },
    methods: {},
    indexes: {
        accountId: true,
    },
    virtuals: {}
}
