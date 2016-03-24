/**
 * Routes settings
 *
 * @module config
 *
 * @date 3/23/16
 * @author Fang Jin <windmaomao@gmail.com>
 */

module.exports = {
    'Home': {
        path: '/',
        blueprint: false,
        controller: 'index',
        items: {
            'index': {
                type: 'GET',
                path: '',
                action: 'index'
            }
        }
    },
    'Company': {},
    'Project': {},
    'Update': {},
};
