/**
 * Project update model module
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
         * Project
         */
        projectId: {
            type: ObjectId, ref: 'project',
        },
        /**
         * Tech
         */
        techId: {
            type: ObjectId, ref: 'tech',
        },
        /**
         * Title and description
         */
        title: { type: String, required: true },
        description: String,
        url: String,
        /**
         * Attributes
         */
        rating: Number,
    },
    options: {
        collection: 'update',
        versionKey: false,
        timestamps: {},
        runValidators: false
    },
    methods: {},
    indexes: {},
    virtuals: {}
}
