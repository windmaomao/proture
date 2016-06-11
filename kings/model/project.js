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
        companyId: { type: ObjectId, ref: 'company' },
        /**
         * Name, alias, slogan and note
         */
        icon: String,
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
        startYear: Number,      // used as launchYear
        durationMonth: Number,
        /**
         * Populated attributes
         */
        //  updatesCount: Number,
        //  techsCount: Number,
        //  entitiesCount: Number,
        //  membersCount: Number,
        //  updates: [],
        //  techs: [],
        //  entities: [],
        //  members: [],
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
