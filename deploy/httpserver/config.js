module.exports = {
    port: 7930,
    statics: {
        '.*': 'mobile/admin/dist',
    },
    routes: {
        '/v1': 'http://localhost:7929',
    }
};
