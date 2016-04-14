/**
 * Tech entity module
 *
 * @date 04/13/16
 * @author Fang Jin <windmaomao@gmail.com>
*/

module.exports = {
    entity: 'tech',
    model: {
        _id: { type: 'id' },
        name: { type: 'string', required: true },
        slogan: 'string',
        parentId: 'string',
        category: 'string',
        rating: 'integer',
        startYear: 'integer',
        projectCount: 'integer',
        updates: { type: 'referenced_list' },
        createdAt: 'date',
        updatedAt: 'date'
    },
    id: '_id',
    fields: {
        parentId: {
            field: 'parentId',
            type: 'reference',
            targetEntity: 'tech',
            targetField: 'name',
            label: 'Parent',
            perPage: 100,
            sort: {
                field: 'name',
                dir: 'ASC'
            },
            pinned: true
        },
        updates: {
            type: 'referenced_list',
            targetEntity: 'update',
            targetReferenceField: 'techId',
            targetFields: ['projectId', 'title', 'rating'],
            sort: {
                field: 'createdAt',
                dir: 'DESC'
            }
        },
        rating: {
            format: 'rating'
        },
        startYear: {
            label: "Year"
        },
        projectCount: {
            label: "Projects"
        }
    },
    default: {
        fields: [
            'parentId',
            'name', 'slogan', 'category',
            'startYear', 'projectCount', 'rating'
        ],
    },
    list: {
        title: 'Tech List',
        sort: {
            field: 'name',
            dir: 'ASC'
        }
    },
    creation: {},
    edition: {},
    show: {
        title: 'name',
        fields: [
            '_id',
            'name', 'slogan', 'category',
            'startYear', 'projectCount', 'rating', 'updates',
            'createdAt', 'updatedAt'
        ]
    },
    search: {
        fields: [
            'name', 'category', 'parentId'
        ]
    },
};
