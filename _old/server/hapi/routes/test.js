module.exports = {
    method: 'GET',
    path: '/test',
    handler: function (request, reply) {
        var Test = request.model.test;
        reply(Test.find());
    }
};
