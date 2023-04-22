

const initialState = {
    isInternet: 'asd',
}

export function isInternetReducer (state = initialState, action) {
    switch (action.type) {

        case 'IS_INTERNET_CHANGE': {
            return {...state, isInternet: !state.isInternet}
        }

        case 'CHANGE_INTERNET_KEY': {
            return {...state, isInternet: action.info.text}
        }
    
        default:
            return state

    }
}




export const internetKeyChange = (value)=>({
    type: 'CHANGE_INTERNET_KEY', value
})

export const isInternetChange = (value)=>({
    type: 'IS_INTERNET_CHANGE', value
})

