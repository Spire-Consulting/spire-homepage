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

export { employeesQuery, projectsQuery }
