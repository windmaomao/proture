module.exports = {
    identity: 'project',
    connection: 'db',
    migrate: 'safe',
    autoCreatedAt: false,
    autoUpdatedAt: false,
    attributes: {
        projectId: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true
        },
        companyId: {
            model: 'company'
        },
        name: {
            type: 'string',
            required: true
        },
        url: 'string',
        description: 'string',
        active: 'boolean'
    }
};
