module.exports = {
    sever: {
        port: 3000,
        route: {
            path: 'routes',
            items: []
        },
    },
    database: {
        db: {
            adapter: 'mysql',
            host: '45.55.153.87',
            database: 'proture',
            user: 'user',
            password: 'password'
        },
        model: {
            path: 'models',
            items: []
        }
    },
    // blueprint simplifies route and model definition
    blueprint: {
        items: [
            'company',
            'contact',
            'project',
            'account',
            'transaction'
        ]
    }
};
