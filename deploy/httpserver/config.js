module.exports = {
    port: 7030,
    statics: {
        '.*': 'mobile/admin/dist',
    },
    routes: {
        '/v1': 'http://localhost:7929',
    }
};
