/**
 * Auth plugin config module
 *
 * @module plugin
 *
 * @date 6/11/16
 * @author Fang Jin <windmaomao@gmail.com>
 */

 module.exports = {
     secret: 'kinds',
     routes: {
         user: {},
         login: {
             path: '/login',
             controller: 'auth',
             POST: 'login',
         },
         loggedIn: {
             path: '/loggedIn',
             controller: 'auth',
             GET: 'loggedIn'
         },
         logout: {
             path: '/logout',
             controller: 'auth',
             GET: 'logout',
         },
     }
 }
