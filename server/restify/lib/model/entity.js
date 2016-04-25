/**
 * Project entity model module
 *
 * @module mongo
 *
 * @date 4/18/16
 * @author Fang Jin <windmaomao@gmail.com>
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

module.exports = {
    fields: {
        /**
         * Project
         */
        projectId: {
            type: ObjectId, ref: 'project',
        },
        /**
         * Title and description
         */
        name: { type: String, required: true },
        slogan: String,
        description: String,
        /**
         * Attributes
         */
    },
    options: {
        collection: 'entity',
        versionKey: false,
        timestamps: {},
        runValidators: false
    },
    methods: {},
    indexes: {},
    virtuals: {}
}
