/**
 * Project model module
 *
 * @module mongo
 *
 * @date 3/22/16
 * @author Fang Jin <fang-a.jin@db.com>
 */

module.exports = {
    fields: {
        /**
         * Name, alias, slogan and note
         */
        name: { type: String, required: true },
        alias: { type: String, required: true },
        slogan: String,
        note: String,
        /**
         * Alive
         */
        active: Boolean
    },
    options: {
        collection: 'project',
        versionKey: false,
        timestamps: false
    },
    methods: {},
    indexes: {},
    virtuals: {}
}
