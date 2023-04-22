

const initialState = {
    isAdmin: false,
}

export function isAdminReducer (state = initialState, action) {
    switch (action.type) {
        case 'IS_ADMIN_CHANGE': {
            return {...state, isAdmin: !state.isAdmin}
        }
        case 'CHANGE_STATE_KEY': {
           
            return {...state, isAdmin: action.info.text[0].isAdmin}
        }
    
        default:
            return state
    }
}


export const adminKeyChange = (value)=>({
    type: 'CHANGE_STATE_KEY', value
})

export const isAdminChange = (value)=>({
    type: 'IS_ADMIN_CHANGE', value
})

