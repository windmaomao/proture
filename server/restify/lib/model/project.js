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
        /**
         * Attibute
         */
        active: Boolean,
        rating: { type: Number, max: 5 },
        /**
         * Populate
         */
        startYear: Number,
        durationMonth: Number,
        teamSize: Number,
        updateCount: Number,
    },
    options: {
        collection: 'project',
        versionKey: false,
        timestamps: {},
        runValidators: false
    },
    methods: {},
    indexes: {},
    virtuals: {}
}
