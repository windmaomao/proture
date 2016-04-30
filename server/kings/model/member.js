/**
 * Project member model module
 *
 * @module mongo
 *
 * @date 4/23/16
 * @author Fang Jin <windmaomao@gmail.com>
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

module.exports = {
    fields: {
        /**
         * Project and contact
         */
        projectId: {
            type: ObjectId, ref: 'project'
        },
        contactId: {
            type: ObjectId, ref: 'contact'
        },
        title: { type: String, required: true },
        description: String,
        /**
         * Attibute
         */
        email: String,
        rating: { type: Number, max: 5 },
    },
    options: {
        collection: 'member',
        versionKey: false,
        timestamps: {},
        runValidators: false
    },
    methods: {},
    indexes: {},
    virtuals: {}
}
