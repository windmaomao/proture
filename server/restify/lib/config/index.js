/**
 * Config settings
 *
 * @module config
 *
 * @date 3/18/16
 * @author Fang Jin <windmaomao@gmail.com>
 */

module.exports = {
    name: 'Proture',
    version: '0.0.1',
    log: false,

    server: {
        port: 8181,
    },

    database: {
        mongo: 'mongodb://localhost/proture'
    },

    controller: {
        path: '/controller'
    },

    model: {
        path: '/model'
    },

    api: {
        version: '/v1',
        blueprint: true
    },

    app: {
        path: '/public',
        route: '/'
    },
}
