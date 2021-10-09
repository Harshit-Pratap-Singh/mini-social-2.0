export const initialState = {
posts:[],
user:null,
auth:false
}

const reducer=( state,action) => {
    switch (action.type) {

    case 'ADD_POST':
        const id=Date.now();
        const item={
            id:id,
            title: action.title,
            description: action.description
        }
        console.log(item);
        return { 
        ...state,
        posts: [...state.posts,item]
        }
    case 'DELETE_POST':
        const temp=state.posts.filter((post)=> action.id !== post.id)
        return{
            ...state,
            posts:temp
        }
    case "EDIT_POST":
        const index=state.posts.findIndex(({id}) => id===action.id)
        var temp2=[...state.posts];
        temp2[index]={
            id:action.id,
            title: action.title,
            description: action.description
        }
        return{
            ...state,
            posts: temp2
        }
    case 'AUTH_USER':
        return{
            ...state,
            user:action.payload,
            auth: true
        }
        case 'DEAUTH_USER':
        return{
            ...state,
            auth: false,
            user:null
        }
    default:
        return {
            ...state
        }
    }
}
export default reducer;