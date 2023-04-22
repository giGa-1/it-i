
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


const MainReviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_REVIEW_MAIN_ELEMENT': {
            
            const result =  [...state, {...state[state.length - 1], id: state[state.length - 1].id + 1}]
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainReview', action.info.id)
            return result
        }
        case 'DELETE_REVIEW_MAIN_ELEMENT': {
            
            const result =  state.filter(e=>e.id !== action.info.id)
            useFetchingPost(null, 'mainReview', action.info.id)
            return result
        }
        case 'COMMENT_REVIEW_MAIN_CHANGE': {
            
            const result =  state.map(e=>e.id == action.info.id ? {...e, comment: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainReview', action.info.id)
            return result
        }
        case 'INITIALS_REVIEW_MAIN_CHANGE': {
            
            const result =  state.map(e=>e.id == action.info.id ? {...e, name: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainReview', action.info.id)
            return result
        }
        case 'IMG_REVIEW_MAIN_CHANGE': {
            
            const result =  state.map(e=>e.id == action.info.id ? {...e, photo: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainReview', action.info.id)
            return result
        }
        case 'POSITION_REVIEW_MAIN_CHANGE': {
            
            const result =  state.map(e=>e.id == action.info.id ? {...e, position: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainReview', action.info.id)
            return result
        }
        case 'REVIEW_MAIN_CHANGE_STATE': {
            
            const result =   [...state, ...action.info.text].filter((el,i,arr)=> arr.filter((item,n)=>n< i &&el.id==item.id).length!==0 || arr.filter((item,n)=>el.id==item.id).length<=1).sort((a,b)=>a.id-b.id)
           
            return result
        }
        default:
            return state
    }
} 

export const reviewMainChangeState = (info) => ({
    type: 'REVIEW_MAIN_CHANGE_STATE',info
})

export const commentReviewChange = (info) => ({
    type: 'COMMENT_REVIEW_MAIN_CHANGE',info
})
export const initialsReviewChange = (info) => ({
    type: 'INITIALS_REVIEW_MAIN_CHANGE',info
})
export const imgReviewChange = (info) => ({
    type: 'IMG_REVIEW_MAIN_CHANGE',info
})
export const positionReviewChange = (info) => ({
    type: 'POSITION_REVIEW_MAIN_CHANGE',info
})
export const addReviewElement = (info) => ({
    type:'ADD_REVIEW_MAIN_ELEMENT',info
})
export const deleteReviewElement = (info) => ({
    type:'DELETE_REVIEW_MAIN_ELEMENT',info
})


export default MainReviewReducer