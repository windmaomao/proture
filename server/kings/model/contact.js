/**
 * Contact model module
 *
 * @module mongo
 *
 * @date 4/23/16
 * @author Fang Jin <windmaomao@gmail.com>
 */

module.exports = {
    fields: {
        /**
         * Name, alias, slogan and note
         */
        fullname: { type: String, required: true },
        title: String,
        description: String,
        /**
         * Attibute
         */
        email: String,
        phone: String,
        url: String,
        rating: { type: Number, max: 5 },
    },
    options: {
        collection: 'contact',
        versionKey: false,
        timestamps: {},
        runValidators: false
    },
    methods: {},
    indexes: {
        fullname: true
    },
    virtuals: {}
}
