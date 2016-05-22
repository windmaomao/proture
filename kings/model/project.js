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
         * Tech ids the project tagged with
         */
        techIds: [{
            type: ObjectId, ref: 'tech'
        }],
        /**
         * Name, alias, slogan and note
         */
        name: { type: String, required: true },
        alias: { type: String, required: true },
        slogan: String,
        description: String,
        url: String,
        /**
         * Attibute
         */
        active: Boolean,
        rating: { type: Number, max: 5 },
        startYear: Number,
        durationMonth: Number,
    },
    options: {
        collection: 'project',
        versionKey: false,
        timestamps: {},
        runValidators: false
    },
    methods: {},
    indexes: {
        companyId: true,
        name: true,
        active: true,
        rating: true,
    },
    virtuals: {}
}
