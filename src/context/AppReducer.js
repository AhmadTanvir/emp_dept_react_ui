export default (state,action) => 
{
    switch (action.type) {
        case 'REMOVE_DEPARTMENT':
            return {
                departments: state.departments.filter(department => {
                    return department.id !== action.payload
                })
            }
        case 'ADD_DEPARTMENT':
            return {
                departments: [action.payload, ...state.departments]
            }
        case 'EDIT_DEPARTMENT':
            const updateDepartment = action.payload;
            const updateDepartments = state.departments.map(department => {
                if(department.id === updateDepartment.id)
                {
                    return updateDepartment;
                }
                return department;
            })
            return {
                departments: updateDepartments
            }
        default:
            return state;
    }
}