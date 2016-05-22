/**
 * Project task model module
 *
 * @module mongo
 *
 * @date 4/24/16
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
         * Contact (author)
         */
        contactId: {
            type: ObjectId, ref: 'contact',
        },
        /**
         * Title and description
         */
        title: { type: String, required: true },
        description: String,
        /**
         * Attributes
         */
        completed: Boolean,
        postponed: Boolean,
        promoted: Boolean,
        duration: Number,
    },
    options: {
        collection: 'task',
        versionKey: false,
        timestamps: {},
        runValidators: false
    },
    methods: {},
    indexes: {
        projectId: true,
        contactId: true,
        completed: true,
        postponed: true,
        promoted: true,
    },
    virtuals: {}
}
