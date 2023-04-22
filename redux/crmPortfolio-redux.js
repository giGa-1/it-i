import cl from '../src/style/MobilePortfolio.module.css';
import {useFetchingPost} from './../src/hooks/useAdminChangeing';

const initialState = [
    {descr: 'Перевозки App', img: '/img/mob-phones.svg', href: '/keys/carriage-app', background: '2F80ED',classes: cl.portMobileCBlock, id: 1},
    {descr: 'Разработка индивидуальной CRM-системы', img: '/img/mob-crm.svg', href: '/keys/crm-system', background: 'E50A0B', classes:cl.portCrmBlock, id: 2},
]

export function crmPortfolioReducer  (state = initialState, action) {
    switch (action.type) {
        case 'ADD_CRM_PORTFOLIO_ELEMENT': {
            const result =  [...state, {...state[state.length - 1], id: state[state.length - 1].id + 1}]
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'crmPortfolio', action.info.id)
            return result
        }
        case 'DELETE_CRM_PORTFOLIO_ELEMENT': {
            const result =  state.filter(e=>e.id !== action.info.id)
            useFetchingPost(null, 'crmPortfolio', action.info.id)
            return result
        }
        case 'HREF_CRM_PORTFOLIO_CHANGE': {
            const result =  state.map(e=>e.id == action.info.id ? {...e, href: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'crmPortfolio', action.info.id)
            return result
        }
        case 'BACK_CRM_PORTFOLIO_CHANGE': {
            const result =  state.map(e=>e.id == action.info.id ? {...e, background: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'crmPortfolio', action.info.id)
            return result
        }
        case 'IMG_CRM_PORTFOLIO_CHANGE': {
          
            const result =  state.map(e=>e.id == action.info.id ? {...e, img: '/img/'+action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'crmPortfolio', action.info.id)
           
            return result
        }
        case 'DESCR_CRM_PORTFOLIO_CHANGE': {
            const result =  state.map(e=>e.id == action.info.id ? {...e, descr: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'crmPortfolio', action.info.id)
            return result
        }
        case 'CRM_PORTFOLIO_CHANGE_STATE': {
            const result =   [...state, ...action.info.text].filter((el,i,arr)=> arr.filter((item,n)=>n< i &&el.id==item.id).length!==0 || arr.filter((item,n)=>el.id==item.id).length<=1).sort((a,b)=>a.id-b.id)
        
            return result
        }
        default:
            return state
    }
}

export const crmPortfolioChangeState = (info)=>({
    type: 'CRM_PORTFOLIO_CHANGE_STATE',info
})

export const addCrmPortfolioElement = (info)=>({
    type: 'ADD_CRM_PORTFOLIO_ELEMENT',info
})
export const deleteCrmPortfolioElement = (info)=>({
    type: 'DELETE_CRM_PORTFOLIO_ELEMENT',info
})
export const hrefCrmPortfolioChange = (info)=>({
    type: 'HREF_CRM_PORTFOLIO_CHANGE',info
})
export const backCrmPortfolioChange = (info)=>({
    type: 'BACK_CRM_PORTFOLIO_CHANGE',info
})
export const imgCrmPortfolioChange = (info)=>({
    type: 'IMG_CRM_PORTFOLIO_CHANGE',info
})
export const descrCrmPortfolioChange = (info)=>({
    type: 'DESCR_CRM_PORTFOLIO_CHANGE',info
})