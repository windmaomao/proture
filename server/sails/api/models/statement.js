module.exports = {
    connection: 'db',
    migrate: 'safe',
    attributes: {
        statementId: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true
        },
        accountId: {
            model: 'account'
        },
        date: 'date',
        dateType: 'integer',
        net: 'float',
        contribution: 'float',
        balance: 'float',
        cost: 'float',
        gain: 'float'
    }
};
