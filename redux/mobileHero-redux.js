import cl from "../src/style/MobileHero.module.css";
import {useFetchingPost} from './../src/hooks/useAdminChangeing';

let initialState = {
    mobile: {
        title: 'Разработка мобильных приложений в Москве',
        descr: 'Аналитика, дизайн и разработка цифровых решений для бизнеса',
        classesimg: cl.phoneHand,
        grid: cl.gridM
    },
    crm: {
        title: 'Разработка CRM-систем в Москве',
        descr: 'Учет, контроль и автоматизация бизнеса',
        classesimg: cl.photoCRM,
        grid: cl.grid
    },
    seo: {
        title: 'SEO продвижение сайтов в Москве',
        descr: 'Увеличим поток целевых заявок из Яндекса и Google',
        classesimg: cl.photoSEO
    },
    marketPlace: {
        title: 'Продвижение в маркетплейсах',
        descr: '',
        classesimg: cl.marketPlace

    }
}


export function mobileHeroReducer(state = initialState, action) {
   switch (action.type) {
    case 'TITLE_MARKETPLACE_HERO_CHANGE': {
        
        const result = {...state, marketPlace: {...state.marketPlace, title: action.info.text}}
        useFetchingPost(result['marketPlace'], 'mobileHero', 'marketPlace')
            return result
    }
    case 'TITLE_SEO_HERO_CHANGE': {
        
        const result = {...state, seo: {...state.seo, title: action.info.text}}
        useFetchingPost(result['seo'], 'mobileHero', 'seo')
            return result
    }
    case 'DESCR_SEO_HERO_CHANGE': {
        
        const result = {...state, seo: {...state.seo, descr: action.info.text}}
        useFetchingPost(result['seo'], 'mobileHero', 'seo')
            return result
    }
    case 'TITLE_HERO_CRM_PAGE_INFO': {
        
        const result = {...state, crm: {...state.crm, title: action.info.text}}
        useFetchingPost(result['crm'], 'mobileHero', 'crm')
            return result
    }
    case 'DESCR_HERO_CRM_PAGE_INFO': {
        
        const result = {...state, crm: {...state.crm, descr: action.info.text}}
        useFetchingPost(result['crm'], 'mobileHero', 'crm')
            return result
    }
    case 'TITLE_HERO_MOBILE_PAGE_INFO': {
        
        const result = {...state, mobile: {...state.mobile, title: action.info.text}}
        useFetchingPost(result['mobile'], 'mobileHero', 'mobile')
            return result
    }
    case 'DESCR_HERO_MOBILE_PAGE_INFO': {
        
        const result = {...state, mobile: {...state.mobile, descr: action.info.text}}
        useFetchingPost(result['mobile'], 'mobileHero', 'mobile')
            return result
    }
    case 'CHANGE_STATE_HEROS_PAGES': {
        
        const result = {...state, ...action.info.text}
       
            return result
    }

    default:
        return state
   }
}
export const changeStateHerosPages = (info) => ({
    type: 'CHANGE_STATE_HEROS_PAGES', info
})
export const titleCrmPageChange = (info) => ({
    type: 'TITLE_HERO_CRM_PAGE_INFO', info
})
export const descrCrmPageChange = (info) => ({
    type: 'DESCR_HERO_CRM_PAGE_INFO', info
})
export const titleMobilePageChange = (info) => ({
    type: 'TITLE_HERO_MOBILE_PAGE_INFO', info
})
export const descrMobilePageChange = (info) => ({
    type: 'DESCR_HERO_MOBILE_PAGE_INFO', info
})

export const marketplaceTitleChange = (info) => ({
    type: 'TITLE_MARKETPLACE_HERO_CHANGE', info
})