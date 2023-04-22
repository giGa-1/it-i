const SELECT_BTN = 'SELECT_BTN'

let initialState = {
    btns: [{
        text: 'Разработка сайтов', textS: 'Разработка сайтов', selected: true
    }, {
        text: 'SEO-продвижение', textS: 'SMM', selected: false
    }, {
        text: 'Мобильные приложения', textS: 'Мобильные приложения', selected: false
    }, {
        text: 'Маркетинговая стратегия', textS: 'Маркетинговая стратегия', selected: false
    },

    ]
}

const mainOfferReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_BTN: {
            return {
                ...state, btns:[...state.btns.map((el,i)=>i==action.key? {...el,selected: !el.selected } : el)]
                }
            }
        }
    return state
    }

export const selectBtn = (key) => ({
    type: SELECT_BTN, key
})

export default mainOfferReducer