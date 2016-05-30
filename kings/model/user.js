/**
 * User model module
 *
 * @module mongo
 *
 * @date 3/24/16
 * @author Fang Jin <windmaomao@gmail.com>
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

module.exports = {
    fields: {
        /**
         * Username and password
         */
        username: { type: String, required: true },
        password: { type: String },
        /**
         * Companies
         */
        companyIds: [{ type: ObjectId, ref: 'company' }],
        /**
         * Attributes
         */
        firstname: String,
        lastname: String,
        type: String,
        active: Boolean,
    },
    options: {
        collection: 'user',
        versionKey: false,
        timestamps: {},
        runValidators: false
    },
    methods: {},
    indexes: {
        username: true,
        active: true,
        type: true
    },
    virtuals: {},
    plugins: {
        // 'passport': {}
    }
}
