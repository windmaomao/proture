/**
 * Config module
 *
 * @module config
 *
 * @date 3/18/16
 * @author Fang Jin <fang-a.jin@db.com>
 */

module.exports = {
    name: 'Proture',
    version: '0.0.1',

    server: {
        port: 8182,
    },

    database: {
        mongo: 'mongodb://localhost/proture'
    },

    model: {
        path: '/model'
    },

    api: {
        version: '/v1'
    },

    app: {
        path: '/public',
        route: '/'
    }
}
