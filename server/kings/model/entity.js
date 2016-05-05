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

var postFn = function(req, item, cb) {
    var obj = {
        _id: item._id,
        projectId: item.projectId._id,
        name: item.name,
        slogan: item.slogan,
        description: item.description,
        project: item.projectId,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
    };
    cb(null, obj);
};

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
        runValidators: false,
        // toObject: { virtuals: true },
        // toJSON: { virtuals: true },
    },
    methods: {},
    indexes: {
        projectId: true,
        name: true
    },
    virtuals: {},
    hooks: {},
    populates: 'projectId',
    projections: {
        list: postFn,
        detail: postFn
    }
}
