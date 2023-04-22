import {useFetchingPost} from './../src/hooks/useAdminChangeing';


const initialState = [{
    title: 'Отвечаем на все вопросы быстро',
    descr: 'В рабочее время. Не игнорируем, а обсуждаем задачи и устанавливаем сроки на их выполнение.',
    count: '01.',
    id: 1
},
    {
        title: 'Разбиваем оплату по этапам',
        descr: 'В зависимости от видов работ оплата делится на 2 или 3 этапа. Все условия прописаны в договоре.',
        count: '02.',
        id: 2
    },
    {
        title: 'Контролируем сроки',
        descr: 'Работаем с системой управления проектами. У нас есть отдельный специалист (проект-менеджер), который отвечает за сроки.',
        count: '03.',
        id: 3
    },
    {
        title: 'Экономим ваше время',
        descr: 'Планируем удобное время для общения с вами, проведения интервью и ответов на вопросы.',
        count: '04.',
        id: 4
    },
    {
        title: 'Не навязываем абонентскую поддержку',
        descr: 'Все сайты мы делаем так, чтобы клиент мог самостоятельно им управлять по максимуму и чтобы постоянная поддержка не требовалась',
        count: '05.',
        id: 5
    },
    {
        title: 'Даем гарантии',
        descr: 'Гарантированная поддержка сайта после сдачи проекта. Гарантия в правильном юридическом оформлении услуг',
        count: '06.',
        id: 6
    }]



const MainSimpleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SIMPLE_ELEMENT': {
            
            const result =  [...state, {...state[state.length - 1], id: state[state.length - 1].id + 1}]
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainSimple', action.info.id)
            return result
        }
        case 'DELETE_SIMPLE_ELEMENT': {
            
            const result =  state.filter(e=>e.id !== action.info.id)
            useFetchingPost(null, 'mainSimple', action.info.id)
            return result
        }
        case 'TITLE_SIMPLE_ITEM_CHANGE': {
            
            const result =  state.map(e=>e.id == action.info.id ? {...e, title: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainSimple', action.info.id)
            return result
        }
        case 'COUNT_SIMPLE_ITEM_CHANGE': {
            
            const result =  state.map(e=>e.id == action.info.id ? {...e, count: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainSimple', action.info.id)
            return result
        }
        case 'DESCR_SIMPLE_ITEM_CHANGE': {
            
            const result =  state.map(e=>e.id == action.info.id ? {...e, descr: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainSimple', action.info.id)
            return result
        }
        case 'SIMPLE_MAIN_CHANGE_STATE': {
            
            const result =   [...state, ...action.info.text].filter((el,i,arr)=> arr.filter((item,n)=>n< i &&el.id==item.id).length!==0 || arr.filter((item,n)=>el.id==item.id).length<=1).sort((a,b)=>a.id-b.id)
          
            return result
        }
        default:
            
        return state
    }
} 
export const simpleMainChangeState = (info) => ({
    type: 'SIMPLE_MAIN_CHANGE_STATE',info
})
export const simpleAddElement = (info) => ({
    type: 'DELETE_SIMPLE_ELEMENT',info
})
export const simpleDeleteElement = (info) => ({
    type: 'ADD_SIMPLE_ELEMENT',info
})
export const simpleTitleChange = (info) => ({
    type: 'TITLE_SIMPLE_ITEM_CHANGE',info
})
export const simpleCountChange = (info) => ({
    type: 'COUNT_SIMPLE_ITEM_CHANGE',info
})
export const descrTitleChange = (info) => ({
    type: 'DESCR_SIMPLE_ITEM_CHANGE',info
})

export default MainSimpleReducer