/**
 * Showcase entity module
 *
 * @date 04/17/16
 * @author Fang Jin <windmaomao@gmail.com>
*/

module.exports = {
    entity: 'showcase',
    model: {
        _id: { type: 'id' },
        projectId: {
            type: 'id', ref: 'project',
        },
        name: { type: 'string', required: true },
        caption: 'string',
        rating: 'integer',
        createdAt: 'date',
        updatedAt: 'date'
    },
    fields: {
        name: {
            type: 'string',
            detailRoute: 'show',
            field: 'name',
            format: 'image',
            url: 'https://s3-us-west-1.amazonaws.com/qplot-showcase/',
            width: 200
        },
        projectId: {
            field: 'projectId',
            label: 'Project',
            type: 'reference',
            targetEntity: 'project',
            targetField: 'name',
            perPage: 100,
            sort: {
                field: 'name',
                dir: 'ASC'
            },
            pinned: true,
        },
        rating: {
            format: 'rating'
        },
    },
    id: '_id',
    default: {
        fields: [
            'projectId', 'name', 'caption', 'rating'
        ],
    },
    list: {
        title: 'Showcase',
        description: 'Project showcase pictures.',
        sort: {
            field: 'createdAt',
            dir: 'DESC'
        }
    },
    creation: {},
    edition: {},
    show: {
        title: 'name',
        fields: [
            '_id',
            'projectId',
            'name', 'caption', 'rating',
            'createdAt', 'updatedAt'
        ]
    },
    search: {
        fields: [
            'projectId', 'name'
        ]
    },
};
