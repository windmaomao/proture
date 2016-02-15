module.exports = {
    identity: 'contact',
    connection: 'db',
    migrate: 'safe',
    autoCreatedAt: false,
    autoUpdatedAt: false,
    attributes: {
        contactId: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: 'string',
            required: true
        },
        lastName: {
            type: 'string',
            required: true
        },
        title: 'string',
        email: 'string',
        phone: 'string'
    }
};
