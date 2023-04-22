import {useFetchingPost} from './../src/hooks/useAdminChangeing';

const initialState =  [{title: 'SEO-продвижение', img: 'circle-cubs.WebP', id:1},
{title: 'SMM', img: 'circle-phone.WebP', id:2},
{title: 'Аналитика сайта', img: 'circle-mac.WebP', id:3},
{title: 'Аудит сайта', img: 'circle-contract.WebP', id:4}]


const MainOtherReducer = (state = initialState,action)=>{
    switch (action.type) {
        case 'OTHER_ITEM_TITLE_CHANGE': {
            const result =state.map(e=>e.id === action.info.id ? {...e, title: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainOther', action.info.id)
            return result
        }
        case 'OTHER_ITEM_IMG_CHANGE': {
            const result =state.map(e=>e.id === action.info.id ? {...e, img: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainOther', action.info.id)
            return result
        }
        case 'OTHER_ADD_ITEM': {
            const result =[...state, {...state[state.length-1], id: state.length+1}]
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainOther', action.info.id)
            return result
        }
        case 'OTHER_DELETE_ITEM' : {
            const result =state.filter((e,i)=> e.id !== action.info.id)
            useFetchingPost(null, 'mainOther', action.info.id)
            return result
        }
        case 'OTHER_CHANGE_STATE': {
            const result = [...state, ...action.info.text].filter((el,i,arr)=> arr.filter((item,n)=>n< i &&el.id==item.id).length!==0 || arr.filter((item,n)=>el.id==item.id).length<=1).sort((a,b)=>a.id-b.id)
          
            return result
        }
        default:
           return state
    }
}
export const otherChangeState = (info) => ({
    type: 'OTHER_CHANGE_STATE', info
})
export const otherTitleChange = (info) => ({
    type: 'OTHER_ITEM_TITLE_CHANGE', info
})
export const otherImgChange = (info) => ({
    type: 'OTHER_ITEM_IMG_CHANGE', info
})
export const otherAddElement = (info) => ({
    type: 'OTHER_ADD_ITEM', info
})
export const otherDelteElement = (info) => ({
    type: 'OTHER_DELETE_ITEM', info
})


export default MainOtherReducer