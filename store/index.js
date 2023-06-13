const {createStore}=require('redux');

const {rootReducer}=require('./immer');

const store=createStore(rootReducer);

module.exports.store=store;