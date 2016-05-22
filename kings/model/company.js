/**
 * Company model module
 *
 * @module mongo
 *
 * @date 3/22/16
 * @author Fang Jin <windmaomao@gmail.com>
 */

module.exports = {
    fields: {
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
        /**
         * Populate
         */
        startYear: Number,
        revenueTotal: Number,
    },
    options: {
        collection: 'company',
        versionKey: false,
        timestamps: {},
        runValidators: false
    },
    methods: {},
    indexes: {
        name: true,
        active: true,
        type: true,
    },
    virtuals: {}
}
