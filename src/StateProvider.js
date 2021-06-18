import React, {createContext, useReducer} from "react";

export const WalletContext = createContext();

const initialState = {
    wallets: [],
    transactions:[]
}

const reducer = (state, action) => {
    switch(action.type){

        case "SET_WALLET":
            return {...state, wallets:action.wallet};
        case "SET_TRANSACTIONS":
            return{...state, transactions: action.transaction}
        default:
            return state;
           
    }
};

export const StateProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <WalletContext.Provider value = {[state, dispatch]}>
            {props.children}
        </WalletContext.Provider>
    );
};