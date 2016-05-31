/**
 * Subscription plugin config module
 *
 * @module plugin
 *
 * @date 5/31/16
 * @author Fang Jin <windmaomao@gmail.com>
 */

 module.exports = {
     routes: {
         subscription: {},
         subscribe: {
             path: '/subscribe',
             controller: 'subscription',
             GET: 'subscribe',
         }
     }
 }
