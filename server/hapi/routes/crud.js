const defaultConfig = {
    handler: {
        bedwetter: {}
    }
};
module.exports = function(subject) {
    var list = '/' + subject;
    var item = list + '/{id}';
    return [
        { path: list,   method: 'GET',      config: defaultConfig },
        { path: list,   method: 'POST',     config: defaultConfig },
        { path: item,   method: 'GET',      config: defaultConfig },
        { path: item,   method: 'POST',     config: defaultConfig },
        { path: item,   method: 'DELETE',   config: defaultConfig }
    ];
}
