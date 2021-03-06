const initState ={
    posts:[
        {id:1,title:'Este es el titulo 1', body:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora consectetur quibusdam quisquam dolorem amet doloremque, in iste provident accusantium exercitationem quasi facilis voluptates voluptatum delectus maiores! Harum mollitia laborum dolorum'},
        {id:2,title:'Este es el titulo 2', body:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora consectetur quibusdam quisquam dolorem amet doloremque, in iste provident accusantium exercitationem quasi facilis voluptates voluptatum delectus maiores! Harum mollitia laborum dolorum'},
        {id:3,title:'Este es el titulo 3', body:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora consectetur quibusdam quisquam dolorem amet doloremque, in iste provident accusantium exercitationem quasi facilis voluptates voluptatum delectus maiores! Harum mollitia laborum dolorum'},
    ]
}
const rootReducer = (state =initState, action) =>{
    //console.log("rootReducer params" , "state", state , "action",action)
    if(action.type=='DELETE_POST'){
        let newPostsList = state.posts.filter( p => p.id !== action.id );
        return {
            ...state,
            posts: newPostsList
        }
    }
    
    return state;
    
}

export default rootReducer;