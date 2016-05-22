/**
 * Company entity module
 *
 * @date 04/13/16
 * @author Fang Jin <windmaomao@gmail.com>
*/

module.exports = {
    entity: 'company',
    model: {
        _id: { type: 'id' },
        name: { type: 'string', required: true },
        alias: { type: 'string', required: true },
        slogan: 'string',
        description: 'text',
        url: 'string',
        active: 'boolean',
        rating: 'integer',
        startYear: 'integer',
        revenueTotal: 'integer',
        projectCount: 'integer',
        projects: { type: 'referenced_list' },
        accounts: { type: 'referenced_list' },
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
        startYear: {
            label: "Year"
        },
        revenueTotal: {
            type: 'number',
            format: '$0,0',
            label: "Revenue",
        },
        projectCount: {
            label: "Projects",
        },
        projects: {
            type: 'referenced_list',
            targetEntity: 'project',
            targetReferenceField: 'companyId',
            targetFields: ['name', 'slogan', 'startYear','rating'],
            sort: {
                field: 'startYear',
                dir: 'DESC'
            }
        },
        accounts: {
            type: 'referenced_list',
            targetEntity: 'account',
            targetReferenceField: 'companyId',
            targetFields: ['parentId', 'name', 'number','type', 'rating'],
            sort: {
                field: 'parentId',
                dir: 'ASC'
            }
        },
    },
    default: {
        fields: [
            'active',
            'name', 'alias', 'slogan', 'url', 'description',
            'startYear', 'revenueTotal', 'rating'
        ],
    },
    list: {
        title: 'Company',
        description: 'Company basic info, such as name, rating, revenue and start year.',
        actions: ['edit'],
        fields: [
            'active',
            'name', 'alias', 'slogan',
            'startYear', 'revenueTotal', 'rating', 'url'
        ],
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
            '_id', 'active',
            'name', 'alias', 'slogan', 'description', 'url',
            'rating', 'startYear', 'revenueTotal', 'projects', 'accounts',
            'createdAt', 'updatedAt'
        ]
    },
    search: {
        fields: [
            'name', 'startYear',
        ]
    },
};
