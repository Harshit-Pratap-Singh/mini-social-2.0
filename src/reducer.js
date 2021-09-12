export const initialState = {
posts:[],
user:null
}

const reducer=( state,action) => {
    switch (action.type) {

    case 'ADD_POST':
        return { 
        ...state,
        
        }

    case 'EDIT_POST':
    
    case 'DELETE_POST':

    case 'SIGNIN_USER':

    case 'SIGNOUT_USER':
    case 'CREATE_USER':
    }
}
export default reducer;