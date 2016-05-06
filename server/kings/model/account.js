/**
 * Account model module
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
         * Company id the project belongs to
         */
        companyId: {
            type: ObjectId, ref: 'company'
        },
        /**
         * Name, alias, slogan and note
         */
        name: { type: String, required: true },
        number: String,
        type: String,
        description: String,
        /**
         * Attibute
         */
        active: Boolean,
        rating: { type: Number, max: 5 },
    },
    options: {
        collection: 'account',
        versionKey: false,
        timestamps: {},
        runValidators: false
    },
    methods: {},
    indexes: {
        companyId: true,
        active: true,
        rating: true,
    },
    virtuals: {}
}
