
import {useFetchingPost} from './../src/hooks/useAdminChangeing';


const initialState = [
    {
        photo: 'photoOfClient.WebP',
        name: 'Юлия Орлова',
        position: 'Руководитель компании Эковтор',
        comment: 'Мы продолжаем глобально меняться, предлагая принципиально новые и креативные решения: в прошлом году обновился фирменный стиль компании, в этом мы представили абсолютно новый сайт «Эковтор» разработанный командой IT-INDUSTRIAL.__ Наше творческое сотрудничество явило современный, яркий и интерактивный проект, который оказался интересным не только для наших партнеров и потенциальных сотрудников.',
        id: 1
    },
    {
        photo: 'photoOfClient.WebP',
        name: 'Юлия Орлова',
        position: 'Руководитель компании Эковтор',
        comment: 'Мы продолжаем глобально меняться, предлагая принципиально новые и креативные решения: в прошлом году обновился фирменный стиль компании, в этом мы представили абсолютно новый сайт «Эковтор» разработанный командой IT-INDUSTRIAL.__ Наше творческое сотрудничество явило современный, яркий и интерактивный проект, который оказался интересным не только для наших партнеров и потенциальных сотрудников.',
        id: 2
    },
    {
        photo: 'photoOfClient.WebP',
        name: 'Юлия Орлова',
        position: 'Руководитель компании Эковтор',
        comment: 'Мы продолжаем глобально меняться, предлагая принципиально новые и креативные решения: в прошлом году обновился фирменный стиль компании, в этом мы представили абсолютно новый сайт «Эковтор» разработанный командой IT-INDUSTRIAL.__ Наше творческое сотрудничество явило современный, яркий и интерактивный проект, который оказался интересным не только для наших партнеров и потенциальных сотрудников.',
        id: 3
    },
    {
        photo: 'photoOfClient.WebP',
        name: 'Юлия Орлова',
        position: 'Руководитель компании Эковтор',
        comment: 'Мы продолжаем глобально меняться, предлагая принципиально новые и креативные решения: в прошлом году обновился фирменный стиль компании, в этом мы представили абсолютно новый сайт «Эковтор» разработанный командой IT-INDUSTRIAL.__ Наше творческое сотрудничество явило современный, яркий и интерактивный проект, который оказался интересным не только для наших партнеров и потенциальных сотрудников.',
        id: 4
    },
    {
        photo: 'photoOfClient.WebP',
        name: 'Юлия Орлова',
        position: 'Руководитель компании Эковтор',
        comment: 'Мы продолжаем глобально меняться, предлагая принципиально новые и креативные решения: в прошлом году обновился фирменный стиль компании, в этом мы представили абсолютно новый сайт «Эковтор» разработанный командой IT-INDUSTRIAL.__ Наше творческое сотрудничество явило современный, яркий и интерактивный проект, который оказался интересным не только для наших партнеров и потенциальных сотрудников.',
        id: 5
    },
    

]


const ReviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_REVIEWS_ELEMENT': {
            
            const result = [...state, {...state[state.length - 1], id: state[state.length - 1].id + 1}]
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'reviews', action.info.id)
            return result
        }
        case 'DELETE_REVIEWS_ELEMENT': {
            
            const result = state.filter(e=>e.id !== action.info.id)
            useFetchingPost(null, 'reviews', action.info.id)
            return result
        }
        case 'COMMENT_REVIEWS_CHANGE': {
            
            const result = state.map(e=>e.id == action.info.id ? {...e, comment: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'reviews', action.info.id)
            return result
        }
        case 'INITIALS_REVIEWS_CHANGE': {
            
            const result = state.map(e=>e.id == action.info.id ? {...e, name: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'reviews', action.info.id)
            return result
        }
        case 'IMG_REVIEWS_CHANGE': {
            
            const result = state.map(e=>e.id == action.info.id ? {...e, photo: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'reviews', action.info.id)
            return result
        }
        case 'POSITION_REVIEWS_CHANGE': {
            
            const result = state.map(e=>e.id == action.info.id ? {...e, position: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'reviews', action.info.id)
            return result
        }
        case 'REVIEWS_CHANGE_STATE': {
            
            const result =  [...state, ...action.info.text].filter((el,i,arr)=> arr.filter((item,n)=>n< i &&el.id==item.id).length!==0 || arr.filter((item,n)=>el.id==item.id).length<=1).sort((a,b)=>a.id-b.id)
           
            return result
        }
        default:
            return state
    }
} 
export const reviewsChangeState = (info) => ({
    type: 'REVIEWS_CHANGE_STATE',info
})
export const commentReviewsChange = (info) => ({
    type: 'COMMENT_REVIEWS_CHANGE',info
})
export const initialsReviewsChange = (info) => ({
    type: 'INITIALS_REVIEWS_CHANGE',info
})
export const positionReviewsChange = (info) => ({
    type: 'POSITION_REVIEWS_CHANGE',info
})
export const imgReviewsChange = (info) => ({
    type: 'IMG_REVIEWS_CHANGE',info
})
export const addReviewsElement = (info) => ({
    type:'ADD_REVIEWS_ELEMENT',info
})
export const deleteReviewsElement = (info) => ({
    type:'DELETE_REVIEWS_ELEMENT',info
})


export default ReviewsReducer