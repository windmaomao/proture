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
         * Project, tech and entity
         */
        projectId: { type: ObjectId, ref: 'project' },
        techId: { type: ObjectId, ref: 'tech' },
        entityId: { type: ObjectId, ref: 'entity' },
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
