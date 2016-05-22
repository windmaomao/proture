module.exports = {
    identity: 'account',
    connection: 'db',
    migrate: 'safe',
    autoCreatedAt: false,
    autoUpdatedAt: false,
    attributes: {
        accountId: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: 'string',
            required: true
        },
        companyId: {
            model: 'company'
        },
        // accountTypeId: {
        //     model: 'account'
        // },
        // started: 'date',
        // ended: 'date'
    }
};
