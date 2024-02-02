import { createSlice } from "@reduxjs/toolkit";
const initialState={
    products:[],
    totalItems:0,
    totalAmount:0,
    counter:0,
    productCounter:{},
};
const BasketSlice=createSlice({
    name:"basket",
    initialState,
    reducers:{
        increaseAmount:(state,action)=>{
            const {id,price}=action.payload;
            if(state.productCounter[id]){
                state.productCounter[id]+=1;
            }
            else{
                state.productCounter[id]=1;
            }
            state.totalAmount+=price;
            state.totalItems+=1;
        },
        decreaseAmount:(state,action)=>{
            const {id,price}=action.payload;
            if(state.productCounter[id]){
                if(state.productCounter[id]>0){
                    state.productCounter[id]-=1;
                    state.totalAmount-=price;
                    state.totalItems-=1;
                }
            }
            else{
                state.productCounter[id]=0;
            }
        }
    }
});
export const {increaseAmount,decreaseAmount} = BasketSlice.actions;
export default BasketSlice.reducer;