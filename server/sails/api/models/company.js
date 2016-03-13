/**
 * Company model
 *
 * @description
 *
 */

module.exports = {

    connection: 'local',
    // schema: true,

    autoCreatedAt: false,
    autoUpdatedAt: false,

    attributes: {

        companyId: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: 'string',
            required: true
        }

    }

};
