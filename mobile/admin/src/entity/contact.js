/**
 * Contact entity module
 *
 * @date 04/23/16
 * @author Fang Jin <windmaomao@gmail.com>
*/

module.exports = {
    entity: 'contact',
    model: {
        _id: { type: 'id' },
        fullname: { type: 'string', required: true },
        title: 'string',
        description: 'text',
        email: 'string',
        phone: 'string',
        url: 'string',
        rating: 'integer',
        projects: { type: 'referenced_list' },
        createdAt: 'date',
        updatedAt: 'date'
    },
    id: '_id',
    fields: {
        name: {
            type: 'string',
            detailRoute: 'show',
            pinned: true
        },
        url: {
            format: 'url',
            caption: 'Go'
        },
        rating: {
            format: 'rating'
        },
        projects: {
            type: 'referenced_list',
            targetEntity: 'member',
            targetReferenceField: 'projectId',
            targetFields: ['projectId', 'title', 'rating', 'createdAt'],
            sort: {
                field: 'createdAt',
                dir: 'DESC'
            }
        },
        createdAt: {
            label: 'Created',
            formatString: 'yyyy-MM-dd'
        }
    },
    default: {
        fields: [
            'fullname', 'title', 'phone', 'email', 'url', 'description',
            'rating', 'createdAt',
        ],
    },
    list: {
        title: 'Company List',
        actions: ['edit'],
        fields: [
            'fullname', 'title', 'phone', 'rating', 'url'
        ],
        sort: {
            field: 'fullname',
            dir: 'ASC'
        }
    },
    creation: {},
    edition: {},
    show: {
        title: 'name',
        fields: [
            '_id',
            'fullname', 'title', 'phone', 'email', 'url', 'description', 'rating',
            'createdAt', 'updatedAt'
        ]
    },
    search: {
        fields: [
            'projectId', 'fullname', 'title'
        ]
    },
};
