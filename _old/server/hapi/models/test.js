module.exports = {
    identity: 'test',
    connection: 'db',
    migrate: 'safe',
    autoCreatedAt: false,
    autoUpdatedAt: false,
    attributes: {
        id: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true
        },
        name: 'string'
    }
};
