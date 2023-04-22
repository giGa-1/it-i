
import {useFetchingPost} from './../src/hooks/useAdminChangeing';


const initialState = [
    {id:1,title:'Какой сайт вам нужен?',list:[{id:1,activeItem:0,subtitle: 'Лендинг', name: 'a', price: 80000},{id:2,activeItem:0,subtitle: 'Многостраничный', name: 'a', price: 150000},{id:3,activeItem:0,subtitle: 'Интернет-магазин', name: 'a', price: 200000},{id:4,activeItem:0,subtitle: 'Другое', name: 'a', price: 140000}]},
    {id:2,title:'Какие задачи должен решать сайт?',list:[{id:1,activeItem:0,subtitle: 'Продавать товар/услугу', name: 'b', price: 15000},{id:2,activeItem:0,subtitle: 'Продавать несколько товаров/услуг', name: 'b', price: 35000},{id:3,activeItem:0,subtitle: 'Презентовать компанию', name: 'b', price: 25000},{id:4,activeItem:0,subtitle: 'Всё вместе/Другое', name: 'b', price: 50000}]},
    {id:3, title:'Есть ли у вас старый сайт?', list:null, oldSiteUrl:'',oldSite: false, oldSiteText: 'Нет сайта'},
    {id:4,title:'Есть ли у вас тексты для сайта?',list:[{id:1,activeItem:0,subtitle: 'Да', name: 'c', price: 15000},{id:2,activeItem:0,subtitle: 'Нет, нужно разработать сайт с нуля', name: 'c', price: 30000}]},
    {id:5,list:'lastPage', lastTitle:'Примерная стоимость',lastDescr: 'Давайте обсудим детали проекта и рассчитаем точную стоимость?',lastHelper:'Нажимая на кнопку, вы даете согласие на обработку ваших персональных данных'}
]



const MainQuizReducer = (state = initialState,action)=>{
    switch (action.type) {
        case 'CHANGE_ACTIVE_ITEM_QUIZ': {
            
            const result =  state.map(e=>e.id == action.info.id ? {...e, list: e.list.map(el=>el.id == action.info.count ? {...el, activeItem: 1} :  {...el, activeItem: 0})} : e)
           
            return result
       
        }
        case 'CHANGE_TITLE_QUIZ': {
            const result =  state.map(e=>e.id == action.info.id ? {...e, title: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainQuiz', action.info.id)
            return result
         
        }
        case 'CHANGE_TEXT_ITEM_QUIZ': {
            
            const result =  state.map(e=>e.id == action.info.id ?  {...e,list: e.list.map(el=>el.id == action.info.count ? {...el, subtitle: action.info.text} : el)} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainQuiz', action.info.id)
            return result
            
        }
        case 'CHANGE_OLD_SITE_URL_QUIZ': {
            
            const result =  state.map(e=>e.id == action.info.id ? {...e, oldSiteUrl: action.info.text} : e)
          
            return result
            
        }
        case 'CHANGE_OLD_SITE_QUIZ': {
            
            const result =  state.map(e=>e.id == action.info.id ? {...e, oldSite: action.info.text} : e)
          
            return result
            
        }
        case 'CHANGE_OLD_SITE_TEXT_QUIZ': {
            
            const result =  state.map(e=>e.id == action.info.id ?  {...e, oldSiteText: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainQuiz', action.info.id)
            return result
            
        }
        case 'CHANGE_LAST_TITLE_QUIZ': {
            
            const result =  state.map(e=>e.id == action.info.id ?  {...e, lastTitle: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainQuiz', action.info.id)
            return result
            
        }
        case 'CHANGE_LAST_DESCR_QUIZ': {
            
            const result =  state.map(e=>e.id == action.info.id ?  {...e, lastDescr: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainQuiz', action.info.id)
            return result
            
        }
        case 'CHANGE_LAST_HELPER_QUIZ': {
            const result =  state.map(e=>e.id == action.info.id ? {...e, lastHelper: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainQuiz', action.info.id)
            return result
        }
        case 'RESET_ACTIVE_QUIZ': {
            const result =  state.map(e=>e.list!==null&&e.list!=='lastPage'? {...e, list:e.list.map(el=>el&&{...el,activeItem:false})} :e.list==null?{...e, oldSiteUrl:'',oldSite: false,}:e)
            state.map((el)=>{
                useFetchingPost(result.filter(e=>e.id==el.id)[0], 'mainQuiz', el.id)
            })
            return result
        }
        case 'MAIN_QUIZ_CHANGE_STATE': {
            
            const result =  [...state, ...action.info.text].filter((el,i,arr)=> arr.filter((item,n)=>n< i &&el.id==item.id).length!==0 || arr.filter((item,n)=>el.id==item.id).length<=1).sort((a,b)=>a.id-b.id)
            return result
        }
      
       
        default:
           return state
    }
}
export const resetActiveQuiz = (info)=>({
    type:'RESET_ACTIVE_QUIZ',info
})
export const mainQuizStateChange = (info)=>({
    type:'MAIN_QUIZ_CHANGE_STATE',info
})
export const changelastHelperQuiz = (info)=>({
    type:'CHANGE_LAST_HELPER_QUIZ',info
})
export const changeLastDescrQuiz = (info)=>({
    type:'CHANGE_LAST_DESCR_QUIZ',info
})
export const changeLastTitleQuiz = (info)=>({
    type:'CHANGE_LAST_TITLE_QUIZ',info
})
export const changeOldSiteUrlQuiz = (info)=>({
    type:'CHANGE_OLD_SITE_URL_QUIZ',info
})
export const changeOldSiteQuiz = (info)=>({
    type:'CHANGE_OLD_SITE_QUIZ',info
})
export const changeOldSiteTextQuiz = (info)=>({
    type:'CHANGE_OLD_SITE_TEXT_QUIZ',info
})
export const changeActivePageQuiz = (info)=>({
    type:'CHANGE_ACTIVE_PAGE_QUIZ',info
})
export const changeActiveItemQuiz = (info)=>({
    type:'CHANGE_ACTIVE_ITEM_QUIZ',info
})
export const changeTitleQuiz = (info)=>({
    type:'CHANGE_TITLE_QUIZ',info
})
export const changeTextItemQuiz = (info)=>({
    type:'CHANGE_TEXT_ITEM_QUIZ',info
})

export default MainQuizReducer