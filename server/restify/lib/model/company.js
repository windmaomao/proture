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
        /**
         * Alive
         */
        active: Boolean
    },
    options: {
        collection: 'company',
        versionKey: false,
        timestamps: false
    },
    methods: {},
    indexes: {},
    virtuals: {}
}
