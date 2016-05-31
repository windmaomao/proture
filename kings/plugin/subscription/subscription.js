/**
 * Subscription model module
 * User subscrib to site updates with their email.
 *
 * @module mongo
 *
 * @date 5/22/16
 * @author Fang Jin <windmaomao@gmail.com>
 */

module.exports = {
    fields: {
        email: { type: String, required: true }
    },
    options: {
        collection: 'subscription',
        versionKey: false,
        timestamps: {},
        runValidators: false
    },
    methods: {},
    indexes: {
        email: true,
    },
    virtuals: {}
}
