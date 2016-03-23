/**
 * Config module
 *
 * @module config
 *
 * @date 3/18/16
 * @author Fang Jin <fang-a.jin@db.com>
 */

module.exports = {
    name: 'GMI IR Event',
    version: '0.0.1',

    server: {
        port: 28080,
    },

    database: {
        mongo: 'mongodb://cptxxu02.us.db.com/gmi'
    },

    model: {
        path: '/model'
    },

    api: {
        version: '/v1'
    },

    app: {
        path: '../../doc/swagger',
        route: '/'
    }
}
