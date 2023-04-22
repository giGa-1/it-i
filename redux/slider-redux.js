import cl from '../src/style/Slider.module.css';
import {useFetchingPost} from './../src/hooks/useAdminChangeing';

let initialState = [
    {
        id:1,
        title: 'Разрабатываем сайты, которые приносят клиентов',
        botTitle: 'Комплексный подход к продвижению бизнеса в интернете',
        photo: cl.photo1
    },
    {
        id:2,
        title: 'Эффективное SEO продвижение сайтов \n' +
            'в Москве',
        botTitle: 'Выведем в ТОП и увеличим количество новых клиентов',
        photo: cl.photo2
    },
    {
        id:3,
        title: 'Дашборды и CRM-системы для вашего бизнеса',
        botTitle: 'Для повышения продаж и эффективности процессов',
        photo: cl.photo3
    },
]

const sliderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TITLE_SLIDER_MAIN_CHANGE': {
            const result =  state.map(e=>e.id == action.info.id ? {...e, title: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainSlider', action.info.id)
            return result
        }
        case 'DESCR_SLIDER_MAIN_CHANGE': {
            const result =  state.map(e=>e.id == action.info.id ? {...e, botTitle: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainSlider', action.info.id)
            return result
        }
        case 'MAIN_SLIDER_CHANGE_STATE': {
            return  [...state, ...action.info.text].filter((el,i,arr)=> arr.filter((item,n)=>n< i &&el.id==item.id).length!==0 || arr.filter((item,n)=>el.id==item.id).length<=1).sort((a,b)=>a.id-b.id)
        }
        default:
            return state
    }
}

export const mainSliderChangeState = (info)=>({
    type: 'MAIN_SLIDER_CHANGE_STATE',info
})
export const titleSliderMainChange = (info)=>({
    type: 'TITLE_SLIDER_MAIN_CHANGE',info
})
export const descrSliderMainChange = (info)=>({
    type: 'DESCR_SLIDER_MAIN_CHANGE',info
})

export default sliderReducer