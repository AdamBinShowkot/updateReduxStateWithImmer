const {produce}=require('immer');

const initialState={
    name:"Asib Al Hasan",
    address:{
        street:"Tejgao",
        city:"Dhaka",
        country:"Bangladesh"
    }
}


const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'UPDATED_STREET':
            // return{
            //     ...state,
            //     address:{
            //         ...state.address,
            //         street:action.payload
            //     }
            // }

            // return using immer . 
            return produce(state,(draftState)=>{
                draftState.address.street=action.payload
            })
        case 'UPDATED_CITY':
            // return{
            //     ...state,
            //     address:{
            //         ...state.address,
            //         city:action.payload
            //     }
            // }

            return produce(state,(draftState)=>{
                draftState.address.city=action.payload
            })
        default:
            return state
    }
}

module.exports.rootReducer=reducer