
import {useFetchingPost} from './../src/hooks/useAdminChangeing';

const initialState = [
    {id:1,text:'Отчет вы получаете в электронном виде на почту или в мессенджер.'},
    {id:2,text:'Наш SEO-специалист всегда на связи и готов дать пояснения и ответить на вопросы по отчету, если они есть.'},
    {id:3,text:'Вы видите, как меняются позиции у фраз. И совпадают ли прогнозы по трафику и конверсии с реальными показателями.'},
    {id:4,text:'Вы платите только за фразы в ТОПе'}
]

export function SeoReportReducer  (state = initialState, action) {
    switch (action.type) {
        case 'ADD_SEO_REPORT_ELEMENT': {
            const result = [...state, {...state[state.length - 1], id: state[state.length - 1].id + 1}]
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'seoReport', action.info.id)
            return result
        }
        case 'DELETE_SEO_REPORT_ELEMENT': {
            const result = state.filter(e=>e.id !== action.info.id)
            useFetchingPost(null, 'seoReport', action.info.id)
            return result
        }
        case 'TEXT_SEO_REPORT_CHANGE': {
            const result = state.map(e=>e.id == action.info.id ? {...e, text: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'seoReport', action.info.id)
            return result
        }
        case 'REPOST_SEO_CHANGE_STATE': {
            const result =  [...state, ...action.info.text].filter((el,i,arr)=> arr.filter((item,n)=>n< i &&el.id==item.id).length!==0 || arr.filter((item,n)=>el.id==item.id).length<=1).sort((a,b)=>a.id-b.id)
           
            return result
        }
        default:
            return state
    }
}
export const reportSeoChangeState = (info)=>({
    type: 'REPOST_SEO_CHANGE_STATE',info
})
export const addSeoServElement = (info)=>({
    type: 'ADD_SEO_REPORT_ELEMENT',info
})
export const deleteSeoServElement = (info)=>({
    type: 'DELETE_SEO_REPORT_ELEMENT',info
})
export const titleSeoServChange = (info)=>({
    type: 'TEXT_SEO_REPORT_CHANGE',info
})
