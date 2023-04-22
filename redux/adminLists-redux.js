

const initialState = {
    swiper: 3, 
    tariff: 6,
    quiz: [{count: 4},{count: 4},{count: 4},{count: 4}],
    dev: 6,
    result: 4,
    other: 4,
    keys: [{count: 2}, {count: 1}, {count: 2}],
    review: 5,
    simple: 6,
}



export function isAdminListsReducer (state = initialState, action) {
    switch (action.type) {
        case 'ADD_TARIFF_MAIN': {
            return  {...state, tariff: state.tariff + 1}
        }
        default:
            return state
    }
}



export const quizList = (value)=>({
    type: 'ADD_QUIZ_INFO', value
})

export const tariff = (value)=>({
    type: 'ADD_TARIFF_MAIN', value
})

