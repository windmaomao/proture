/**
 * Technology model module
 *
 * @module mongo
 *
 * @date 4/6/16
 * @author Fang Jin <windmaomao@gmail.com>
 */

module.exports = {
    fields: {
        /**
         * Name, alias, slogan and note
         */
        name: { type: String, required: true },
        slogan: String,
        url: String,
        parentId: String,
        /**
         * Attibute
         */
        category: String,
        rating: { type: Number, max: 5 },
        /**
         * Populate
         */
        startYear: Number,
        projectCount: Number,
    },
    options: {
        collection: 'tech',
        versionKey: false,
        timestamps: {},
        runValidators: false
    },
    methods: {},
    indexes: {},
    virtuals: {}
}
