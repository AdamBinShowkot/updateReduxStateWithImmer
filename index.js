const {store}=require('./store');

console.log('Initial State : ',store.getState());

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch({
    type:'UPDATED_STREET',
    payload:'Dhanmondi'
})

store.dispatch({
    type:'UPDATED_CITY',
    payload:'Jashore'
})