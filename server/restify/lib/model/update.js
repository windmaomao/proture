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
         * Title
         */
        title: { type: String, required: true },
        /**
         * Project
         */
        projectId: {
            type: ObjectId, ref: 'project',
            // autopopulate: {
            //     select: 'name'
            // }
        }
    },
    options: {
        collection: 'update',
        versionKey: false,
        timestamps: {}
    },
    methods: {},
    indexes: {},
    virtuals: {}
}
