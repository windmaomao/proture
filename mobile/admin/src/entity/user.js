/**
 * User entity module
 *
 * @date 05/14/16
 * @author Fang Jin <windmaomao@gmail.com>
*/

module.exports = {
    entity: 'user',
    model: {
        _id: { type: 'id' },
        username: { type: 'string', required: true },
        // password: { type: String, required: true },
        firstname: 'string',
        lastname: 'string',
        type: 'string',
        active: 'boolean',
        companyIds: { type: 'reference_many' },
        createdAt: 'datetime',
        updatedAt: 'datetime'
    },
    fields: {
        companyIds: {
            field: 'companyIds',
            type: 'reference_many',
            label: 'Companies',
            targetEntity: 'company',
            targetField: 'name',
            sort: {
                field: 'name',
                dir: 'ASC'
            },
        },
    },
    id: '_id',
    default: {
        fields: [
            'username', 'firstname', 'lastname', 'type', 'active'
        ]
    },
    list: {
        title: 'User',
        description: "Registered users. User belongs to companies.",
        sort: {
            field: 'createdAt',
            dir: 'DESC'
        }
    },
    creation: {},
    edition: {},
    show: {
        title: 'username',
        fields: [
            '_id',
            'username', 'firstname', 'lastname', 'type', 'active',
            'createdAt', 'updatedAt'
        ]
    },
    search: {
        fields: [
            'username', 'active', 'type'
        ]
    }
};
