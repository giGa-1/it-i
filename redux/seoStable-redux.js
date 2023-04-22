import {useFetchingPost} from './../src/hooks/useAdminChangeing';

const initialState = [{id:1,title: 'Прогретые клиенты', descr: 'Они ищут в поисковике ваш товар или услугу и по этим поисковым фразам видят ваш сайт', img:'seoStable1.svg'},
{id:2,title: 'Доверие, рост ваших продаж', descr: 'Если ваш сайт получил позиции в поисковиках, то он, скорее всего, пробудет там долго. Всё это время вы будете получать клиентов', img:'seoStable2.svg'},
{id:3,title: 'Называем реальные сроки и стоимость',descr: 'Согласно исследованиям, 85% пользователей больше доверяют органической выдаче в отличие от контекстной рекламы. Поэтому клиент, открывая ваш сайт, заранее настроен лояльно и с большой вероятностью купит', img:'seoStable3.svg'},
{id:4,title: 'Небольшая стоимость привлечения клиента',descr: 'Чем выше позиции вашего сайта, тем ниже стоимость привлечения клиентов. Особенно это касается фраз, по которым высокая стоимость контекстной рекламы.',img:'seoStable4.svg'}]


export function SeoStableReducer  (state = initialState, action) {
    switch (action.type) {
        case 'ADD_SEO_STABLE_ELEMENT': {
            
            const result = [...state, {...state[state.length - 1], id: state[state.length - 1].id + 1}]
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'seoStable', action.info.id)
            return result
        }
        case 'DELETE_SEO_STABLE_ELEMENT': {
            
            const result = state.filter(e=>e.id !== action.info.id)
            useFetchingPost(null, 'seoStable', action.info.id)
            return result
        }
        case 'TITLE_SEO_STABLE_CHANGE': {
            
            const result = state.map(e=>e.id == action.info.id ? {...e, title: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'seoStable', action.info.id)
            return result
        }
        case 'IMG_SEO_STABLE_CHANGE': {
            
            const result = state.map(e=>e.id == action.info.id ? {...e, img: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'seoStable', action.info.id)
            return result
        }
        case 'DESCR_SEO_STABLE_CHANGE': {
            
            const result = state.map(e=>e.id == action.info.id ? {...e, descr: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'seoStable', action.info.id)
            return result
        }
        case 'SEO_STABLE_CHANGE_STATE': {
            
            const result =  [...state, ...action.info.text].filter((el,i,arr)=> arr.filter((item,n)=>n< i &&el.id==item.id).length!==0 || arr.filter((item,n)=>el.id==item.id).length<=1).sort((a,b)=>a.id-b.id)
            
            return result
        }
        default:
            return state
    }
}
export const seoStableChangeState = (info)=>({
    type: 'SEO_STABLE_CHANGE_STATE',info
})
export const addSeoStableElement = (info)=>({
    type: 'ADD_SEO_STABLE_ELEMENT',info
})
export const deleteSeoStableElement = (info)=>({
    type: 'DELETE_SEO_STABLE_ELEMENT',info
})
export const titleSeoStableChange = (info)=>({
    type: 'TITLE_SEO_STABLE_CHANGE',info
})
export const descrSeoStableChange = (info)=>({
    type: 'DESCR_SEO_STABLE_CHANGE',info
})
