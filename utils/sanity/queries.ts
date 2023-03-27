const employeesQuery = `*[_type == "employees"] {
    ...,
    profilePicture {
        asset->{
            ...,
            metadata
        }
    }
}`

const projectsQuery = `*[_type == "projects"] {
    ...,
    portrait {
        asset->{
            ...,
            metadata
        }
    }
}`

const projectIdsQuery = `*[_type == "projects"] {
    "id": _id
}`

const fetchById = (id: string) => `*[_id == "${id}"][0]{
    ...,
    portrait {
        asset->{
            ...,
            metadata
        }
    }
}`

export { employeesQuery, projectsQuery, projectIdsQuery, fetchById }
