import cl from '../src/style/KeysMainMobile.module.css';
import {useFetchingPost} from './../src/hooks/useAdminChangeing';



const initialState = [{
            descr: 'Перевозки App',
            href:'/carriage-app',
            img: {
                background:'2F80EC',
                image: 'keys-phones-blue.svg',
                alt:'Сайт компании на мобильных устройствах',
                classesImg: cl.mobilaAppImg,
                logo: 'keys-mobile-logo.svg',
                logoClasses: cl.mobileLogo,
            }, 
            id: 1
        }
    ]

const keysMobileReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'ADD_MOBILE_ELEMENT': {
            
            const result =  [...state, {...state[state.length-1],id:  state.length+1}]
        useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysMobile', action.info.id) 
           
       
        return result
        }
        case 'DELETE_MOBILE_ELEMENT': {
            
            const result =  state.filter(e=>e.id != action.info.id)
        useFetchingPost(null, 'keysMobile', action.info.id) 
           
        return  result
        }
        case 'BACKGROUND_MOBILE_CHANGE': {
            
            const result =  state.map(e=> e.id == action.info.id ? {...e, img: {...e.img, background: action.info.text}} : e)
        useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysMobile', action.info.id) 
           
        return  result
        }
        case 'ALT_MOBILE_CHANGE': {
            
            const result =  state.map(e=> e.id == action.info.id ? {...e, img: {...e.img, alt: action.info.text}} : e)
        useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysMobile', action.info.id) 
           
        return result
        }
        case 'IMG_MOBILE_CHANGE': {
            
            const result =  state.map(e=> e.id == action.info.id ? {...e, img: {...e.img, image: action.info.text, classesImg: cl.basicBlock}} : e)
        useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysMobile', action.info.id) 
           
        return result
        }
        case 'LOGO_MOBILE_CHANGE': {
            
            const result =  state.map(e=> e.id == action.info.id ? {...e, img: {...e.img, logo: action.info.text}} : e)
        useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysMobile', action.info.id) 
           
        return  result
        }
        case 'HREF_MOBILE_CHANGE': {
            
            const result =  state.map(e=> e.id == action.info.id ? {...e, href: action.info.text} : e)
        useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysMobile', action.info.id) 
           
        return  result
        }
        case 'DESCR_MOBILE_CHANGE': {
            
            const result =  state.map(e=> e.id == action.info.id ? {...e, descr: action.info.text} : e)
        useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysMobile', action.info.id) 
           
        return  result
        }
        case 'MOBILE_CHANGE_STATE': {
            const result =   [...state, ...action.info.text].filter((el,i,arr)=> arr.filter((item,n)=>n< i &&el.id==item.id).length!==0 || arr.filter((item,n)=>el.id==item.id).length<=1).sort((a,b)=>a.id-b.id)
    
            return  result
        }
        default: 
            
        return  state
  
        }
}

export const mobileChangeState = (info)=>({
    type: 'MOBILE_CHANGE_STATE', info
})

export const keysMobileAddElement = (info)=>({
    type: 'ADD_MOBILE_ELEMENT', info
})
export const keysMobileDeleteElement = (info)=>({
    type: 'DELETE_MOBILE_ELEMENT', info
})
export const keysMobileBackChange = (info)=>({
    type: 'BACKGROUND_MOBILE_CHANGE', info
})
export const keysMobileAltChange = (info)=>({
    type: 'ALT_MOBILE_CHANGE', info
})
export const keysMobileImgChange = (info)=>({
    type: 'IMG_MOBILE_CHANGE', info
})
export const keysMobileLogoChange = (info)=>({
    type: 'LOGO_MOBILE_CHANGE', info
})
export const keysMobileHrefChange = (info)=>({
    type: 'HREF_MOBILE_CHANGE', info
})
export const keysMobileDescrChange = (info)=>({
    type: 'DESCR_MOBILE_CHANGE', info
})



export default keysMobileReducer