/**
 * Account statement model module
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
         * Account, transactions and previous statement
         */
        accountId: { type: ObjectId, ref: 'account' },
        transactionIds: [{
            type: ObjectId, ref: 'transaction'
        }],
        previousId: { type: ObjectId, ref: 'statement' },
        /**
         * Net and balance
         */
        net: Number,
        balance: Number,
        contribution: Number,
        title: String,
        description: String,
        /**
         * Attributes
         */
        durationType: { type: String, required: true },
        durationDate: { type: String, required: true }
    },
    options: {
        collection: 'statement',
        versionKey: false,
        timestamps: {},
        runValidators: false
    },
    methods: {},
    indexes: {
        accountId: true,
        durationType: true,
        durationDate: true,
    },
    virtuals: {}
}
