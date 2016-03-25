/**
 * Project model module
 *
 * @module mongo
 *
 * @date 3/22/16
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
        alias: { type: String, required: true },
        description: String,
        /**
         * Alive
         */
        active: Boolean
    },
    options: {
        collection: 'project',
        versionKey: false,
        timestamps: {}
    },
    methods: {},
    indexes: {},
    virtuals: {}
}
