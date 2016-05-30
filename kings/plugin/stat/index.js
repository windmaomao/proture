/**
 * Stat plugin config module
 *
 * @module plugin
 *
 * @date 5/30/16
 * @author Fang Jin <windmaomao@gmail.com>
 */

 module.exports = {
     routes: {
         stat: {},
     },
     schedules: {
         statUpdate: {
             every: '5 minutes'
         },
     }
 }
