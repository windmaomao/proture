module.exports = {
    // identity: 'transaction',
    connection: 'db',
    migrate: 'safe',
    autoCreatedAt: false,
    autoUpdatedAt: false,
    attributes: {
        transactionId: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true
        },
        accountId: {
            model: 'account'
        },
        date: 'date',
        title: 'string',
        amount: 'float',
        dividend: 'boolean',
        gain: 'float'
        // accountTypeId: {
        //     model: 'account'
        // },
        // started: 'date',
        // ended: 'date'
    }
};
