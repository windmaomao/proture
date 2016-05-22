module.exports = {
    identity: 'company',
    connection: 'db',
    migrate: 'safe',
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
        },
        url: 'string',
        slogan: {
            type: 'string',
            required: true
        },
        alias: 'string',
        active: 'boolean',
        contactId: {
            model: 'contact'
        }
    }
};
