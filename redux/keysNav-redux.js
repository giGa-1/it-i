const SELECT_BTN = 'SELECT_BTN'

let initialState = {
    btns: [{
        text: 'Разработка сайтов', selected: true, number: 0,
    }, {
        text: 'SEO-продвижение', selected: false, number: 1,
    }, {
        text: 'Мобильные приложения', selected: false, number: 2,
    }, {
        text: 'CRM', selected: false, number: 3,
    },
    ]
}

const keysMainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_BTN: {
            return {
                ...state, btns:[...state.btns.map((el,i)=>i==action.key? {...el,selected: true } : {...el, selected: false})]
                }
            }
        }
    return state
    }

export const selectBtnKeys = (key) => ({
    type: SELECT_BTN, key
})

export default keysMainReducer