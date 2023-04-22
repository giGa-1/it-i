import cl from '../src/style/MainResult.module.css';
import {useFetchingPost} from './../src/hooks/useAdminChangeing';


const initialState = [
    {img: 'calendar.svg', title: 'Называем реальные сроки и стоимость', descr: 'Которые прописаны в договоре и не меняются в процессе работ', id: 1},
    {img: 'contract.svg', title: 'Делаем только то, что вам выгодно', descr: 'Не навязываем дополнительные услуги, не имитируем бурную деятельность', id: 2},
    {img:  'gears.svg', title: 'Тестируем и дорабатываем', descr: 'После создания сайта следим за рекламной кампанией. Если нужно дорабатываем лэндинг или переписываем объявления', id: 3},
    {img:'search-big.svg', title: 'Не навязываем технологиии', descr: 'Работаем c разными CMS, на которых можно реализовать любые решения для клиента', id: 4}
]




const MainResReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_RES_ELEMENT': {
            
            const result = [...state, {...state[state.length - 1], id: state[state.length - 1].id + 1}]
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainRes', action.info.id)
            return result
        }
        case 'DELETE_RES_ELEMENT': {
            
            const result = state.filter(e=>e.id !== action.info.id)
            useFetchingPost(null, 'mainRes', action.info.id)
            return result
        }
        case 'TITLE_RES_CHANGE': {
            
            const result = state.map(e=>e.id == action.info.id ? {...e, title: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainRes', action.info.id)
            return result
        }
        case 'DESCR_RES_CHANGE': {
            
            const result = state.map(e=>e.id == action.info.id ? {...e, descr: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainRes', action.info.id)
            return result
        }
        case 'IMG_RES_CHANGE': {
            
            const result = state.map(e=>e.id == action.info.id ? {...e, img: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainRes', action.info.id)
            return result
        }
        case 'MAIN_RES_CHANGE_STATE': {
            
            const result =  [...state, ...action.info.text].filter((el,i,arr)=> arr.filter((item,n)=>n< i &&el.id==item.id).length!==0 || arr.filter((item,n)=>el.id==item.id).length<=1).sort((a,b)=>a.id-b.id)
          
            return result
        }
        default:
            return state
    }
} 



export const mainResChangeState = (info) => ({
    type: 'MAIN_RES_CHANGE_STATE',info
})
export const resMain = (info) => ({
    type: 'ADD_RES_ELEMENT',info
})
export const resItemAddChange = (info) => ({
    type: 'ADD_RES_ELEMENT',info
})
export const resItemDeleteChange = (info) => ({
    type: 'DELETE_RES_ELEMENT',info
})
export const resItemTitleChange = (info) => ({
    type: 'TITLE_RES_CHANGE',info
})
export const resItemDescrChange = (info) => ({
    type: 'DESCR_RES_CHANGE',info
})
export const resItemImgChange = (info) => ({
    type: 'IMG_RES_CHANGE',info
})

export default MainResReducer