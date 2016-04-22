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
        url: 'string',
        parentId: 'string',
        category: 'string',
        rating: 'integer',
        startYear: 'integer',
        childTechs: { type: '' },
        updates: { type: 'referenced_list' },
        createdAt: 'date',
        updatedAt: 'date'
    },
    id: '_id',
    fields: {
        name: {
            type: 'string',
            detailRoute: 'show'
        },
        url: {
            format: 'url',
            caption: 'Go'
        },
        parentId: {
            field: 'parentId',
            type: 'reference',
            targetEntity: 'tech',
            targetField: 'name',
            label: 'Parent Tech',
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
        childTechs: {
            label: 'Child Techs',
            type: 'referenced_list',
            targetEntity: 'tech',
            targetReferenceField: 'parentId',
            targetFields: ['name', 'slogan', 'category', 'rating'],
            sort: {
                field: 'name',
                dir: 'ASC'
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
            'rating', 'url'
        ],
    },
    list: {
        title: 'Tech List',
        actions: ['edit'],
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
            'name', 'slogan', 'category', 'parentId', 'childTechs',
            'startYear', 'rating', 'updates',
            'createdAt', 'updatedAt'
        ]
    },
    search: {
        fields: [
            'name', 'category', 'parentId'
        ]
    },
};
