import {useFetchingPost} from './../src/hooks/useAdminChangeing';

import cl from '../src/style/KeysMainCrm.module.css';

const initialState = [{
    id:1,
    descr: 'Разработка индивидуальной CRM-системы',  
    href: '/crm-system', img: {
        background: 'E50A0B', 
        alt: 'Индивидуальная CRM-система разработанная для компании "LLumar"',
        image: 'keys-crm-red.webp',
        classesImg: cl.crmLlumarImg,
        logo: 'keys-crm-logo.svg',
        logoClasses: cl.crmlogo,
    }
}]

const keysCrmReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'ADD_CRM_KEYS_ELEMENT': {
            const result = [...state, {...state[state.length-1],id:  state.length+1}]
             useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysCrm', action.info.id)
            return result
        }
        case 'DELETE_CRM_KEYS_ELEMENT': {
            const result = state.filter(e=>e.id != action.info.id)
             useFetchingPost(null, 'keysCrm', action.info.id)
            return result
        }
        case 'BACKGROUND_CRM_KEYS_CHANGE': {
            const result = state.map(e=> e.id == action.info.id ? {...e, img: {...e.img, background: action.info.text}} : e)
             useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysCrm', action.info.id)
            return result
        }
        case 'ALT_CRM_KEYS_CHANGE': {
            const result = state.map(e=> e.id == action.info.id ? {...e, img: {...e.img, alt: action.info.text}} : e)
             useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysCrm', action.info.id)
            return result
        }
        case 'IMG_CRM_KEYS_CHANGE': {
            const result = state.map(e=> e.id == action.info.id ? {...e, img: {...e.img, image: action.info.text, classesImg: cl.basicBlock}} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysCrm', action.info.id)
            return result
        }
        case 'LOGO_CRM_KEYS_CHANGE': {
            const result = state.map(e=> e.id == action.info.id ? {...e, img: {...e.img, logo: action.info.text}} : e)
             useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysCrm', action.info.id)
            return result
        }
        case 'HREF_CRM_KEYS_CHANGE': {
            const result = state.map(e=> e.id == action.info.id ? {...e, href: action.info.text} : e)
             useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysCrm', action.info.id)
            return result
        }
        case 'DESCR_CRM_KEYS_CHANGE': {
            const result = state.map(e=> e.id == action.info.id ? {...e, descr: action.info.text} : e)
             useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysCrm', action.info.id)
            return result
        }
        case 'CHANGE_ALL_KEYS_CRM': {
            const result =  [...state, ...action.info.text].filter((el,i,arr)=> arr.filter((item,n)=>n< i &&el.id==item.id).length!==0 || arr.filter((item,n)=>el.id==item.id).length<=1).sort((a,b)=>a.id-b.id)
           
            return result
        }
        
        default:
            return state
    }
}

export const changeAllKeysCrm = (info)=>({
    type:'CHANGE_ALL_KEYS_CRM', info
})

export const keysCrmAddElement = (info)=>({
    type: 'ADD_CRM_KEYS_ELEMENT', info
})
export const keysCrmDeleteElement = (info)=>({
    type: 'DELETE_CRM_KEYS_ELEMENT', info
})
export const keysCrmBackChange = (info)=>({
    type: 'BACKGROUND_CRM_KEYS_CHANGE', info
})
export const keysCrmAltChange = (info)=>({
    type: 'ALT_CRM_KEYS_CHANGE', info
})
export const keysCrmLogoChange = (info)=>({
    type: 'LOGO_CRM_KEYS_CHANGE', info
})
export const keysCrmImgChange = (info)=>({
    type: 'IMG_CRM_KEYS_CHANGE', info
})
export const keysCrmHrefChange = (info)=>({
    type: 'HREF_CRM_KEYS_CHANGE', info
})
export const keysCrmDescrChange = (info)=>({
    type: 'DESCR_CRM_KEYS_CHANGE', info
})



export default keysCrmReducer