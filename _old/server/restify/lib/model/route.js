/**
 * Project route model module
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
         * Project and contact
         */
        projectId: {
            type: ObjectId, ref: 'project'
        },
        entityId: {
            type: ObjectId, ref: 'entity'
        },
        action: { type: String, required: true },
        method: String,
        description: String,
        /**
         * Attibute
         */
        draft: Boolean,
    },
    options: {
        collection: 'route',
        versionKey: false,
        timestamps: {},
        runValidators: false
    },
    methods: {},
    indexes: {},
    virtuals: {}
}
