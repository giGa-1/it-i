import {useFetchingPost} from './../src/hooks/useAdminChangeing';



import React from "react";

const initialState = [{
    id: 1,
    descrAchor: 'Интернет-магазин «Строймат»',
    descr: 'Разработка интернет-магазина «Строймат»',
    achorSite: 'строй-мат.рф',
    href: '/stroy-mat',
    aboutCompany: 'Компания является крупнейшим официальным дистрибьютором ведущих производителей строительно–отделочных материалов, таких как Кнауф, Saint–Gobain, Ceresit, Основит, Евро Л, Kronoflooring и другие._ _Побеждали в тендерах и выступали в качестве поставщика на многих объектах Москвы и РФ.',
    task: 'Разработать полноценный интернет-магазин на Wordpress, добавить более 20 000 товаров на сайт',
    imageInfo: [{id:1, img:'/1stroimat.WebP'}, {id:2,title:'Главная страница', img:'/2stroimat.WebP'}, {id:3,title:'Мобильная версия',img: '/3stroimat.WebP'}, {id:4,title:'Карточка товара и каталог', img:'/4stroimat.WebP'}, {id:5,title:'Элементы интерфейса', img:'/5stroimat.WebP'}, {id:6,title:'Спасибо за просмотр!', img:'/6stroimat.WebP'}]

}, {
    id: 2,
    descrAchor: 'Интернет-магазин «Автоэстетика»',
    descr: 'Разработка интернет-магазина «Автоэстетика»',
    achorSite: 'avto-estetica.ru',
    href: '/avto-estetica',

    aboutCompany: 'Компания АвтоЭстетика предоставляет свои услуги в авто тематике с 2009 года. Осуществляем полный спектр услуг по уходу и сохранению внешнего и внутреннего вида автомобиля. Работает только с проверенными немецкими и американскими материалами. Широкий выбор антигравийной защиты, автовинила, тонирующих плёнок и детейлинг услуг. Предоставляем гарантии на все выполненные работы.',
    task: 'Разработать полноценный интернет-магазин ',
    imageInfo: [{id:1, img:'/1estetic.WebP'}, {id:2,title:'Каталог товаров', img:'/2estetic.WebP'}, {id:3,title:'Карточка товара', img:'/3estetic.WebP'}, {id:4,title:'Оформление заказа и оплата', img:'/4estetic.WebP'}, {id:5,title:'Мобильная версия', img:'/5estetic.WebP'}, {id:6,title:'Спасибо за просмотр!', img:'/6estetic.WebP'}]

}, {
    id: 3,
    descrAchor: 'Сайт для Хоккейного клуба',
    descr: 'Разработка сайта для Хоккейного клуба',
    achorSite:'hock-team.ru',
    href: '/hock-team',

    aboutCompany: 'Хоккейный клуб — спортивная организация, участвующая в соревнованиях по хоккею с шайбой. Кроме собственно спортсменов-хоккеистов, в состав клуба входят тренер и его помощники, менеджеры клуба, врачи и прочий обслуживающий персонал. Непосредственно основная команда состоит из двадцати и более игроков.',
    task: 'Разработать имиджевый корпоративный сайт ',
    imageInfo: [{id:1, img:'/1hockey.WebP'}, {id:2,title:'Главный экран', img:'/2hockey.WebP'}, {id:3,title:'О клубе',img: '/3hockey.WebP'}, {id:4,title:'Цены и как записаться', img:'/4hockey.WebP'}, {id:5,title:'Мобильная версия', img:'/5hockey.WebP'}, {id:6,title:'Спасибо за просмотр!',img: '/6hockey.WebP'}]

}, {
    id: 4,
    descrAchor: 'Сайт для бренда Llumar',
    descr: 'Разработка сайта для бренда Llumar',
    achorSite: 'llumar.ru', 
    href: '/llumar',

    aboutCompany: 'Официальный эксклюзивный дистрибьютор LLumar на территории России и стран СНГ. Компания основана в 1997 году. Лидирующий поставщик профессиональных тонирующих и антигравийных пленок, произведенных в США.',
    task: 'Разработать полноценный интернет-магазин автопленок для крупного бренда',
    imageInfo: [{id:1, img:'/1lumar.WebP'}, {id:2,title:'Главная страница', img:'/2lumar.WebP'}, {id:3,title:'Каталог пленок', img:'/3lumar.WebP'}, {id:4,title:'Мобильная версия', igm:'/4lumar.WebP'}, {id:5,title:'Элементы интерфейса', img:'/5lumar.WebP'}, {id:6,title:'Спасибо за просмотр!', img:'/6lumar.WebP'}]

}, {
    id: 5,
    descrAchor: 'Сайт «Эковтор»',
    descr: 'Разработка сайта «Эковтор»',
    achorSite: 'ec-vtor.ru',
    href: '/ecovtor',
    aboutCompany: 'Переработка вторсырья – основное направление деятельности нашей. «Эковтор» имеет своем распоряжении современное высокотехнологичное оборудование, позволяющее производить переработку быстро и качественно.',
    task: 'Разработать сайт услуг для компании по переработки вторсырья',
    imageInfo: [{id:1, img:'/1acovtor.png'}, {id:2,title:'Главная страница', img:'/2acovtor.WebP'}, {id:3,title:'Мобильная версия',img: '/3acovtor.WebP'}, {id:4,title:'Заказ услуги', img:'/4acovtor.WebP'}, {id:5,title:'Мобильная версия', img:'/5acovtor.WebP'}, {id:6,title:'Спасибо за просмотр!', img:'/6acovtor.WebP'}]

},{
    id: 6,
    descrAchor: ' Перевозки App',
    descr: 'Перевозки App',
    href: '/carriage-app',
    aboutCompany: 'Круглосуточная служба перевозки лежачих_больных и инвалидов колясочников. Cлужба перевозки работает круглосуточно и готова выехать по любому адресу в назначенное время.',
    task: 'Разработать CRM-систему для медицинского такси',
    imageInfo: [{id:1, img:'/app1.WebP'}, {id:2,title:'Заказ', img:'/app2.WebP'}, {id:3,title:'Автопарк', img:'/app3.WebP'}, {id:4,title:'Аналитика', img:'/app4.WebP'}, {id:5,title:'Элементы', img:'/app5.WebP'}, {id:6,title:'Спасибо за просмотр!', img:'/app6.WebP'}]


},{
    id: 7,
    descrAchor: 'CRM-системы',
    descr: 'Разработка индивидуальной _CRM-системы',
    href: '/crm-system',
    aboutCompany: `Официальный эксклюзивный дистрибьютор LLumar на территории России и стран СНГ._Компания основана в 1997 году. Лидирующий поставщик профессиональных тонирующих и антигравийных пленок, произведенных в США.`,
    task: 'Разработать CRM-систему для международной компании Llumar',
    imageInfo: [{id:1, img:'/1crm.WebP'}, {id:2,title:'Основное', img:'/2crm.WebP'}, {id:3,title:'Мобильная версия', img:'/3crm.WebP'}, {id:4,title:'Продажи по дилерам', img:'/4crm.WebP'}, {id:5,title:'Гарантийные талоны', img:'/5crm.WebP'}, {id:6,title:'Спасибо за просмотр!', img:'/6crm.WebP'}]

},]

export function KeySiteReducer (state = initialState, action) {
    switch (action.type) {


        case 'ADD_KEY_SITE_GEN_KEYS': {
            const result = [...state, {...state[0], id: state.length + 1, href:'/'+action.info.text}]
            useFetchingPost(result.filter(e => e.id == action.info.id)[0], 'genericPages', action.info.id)
            return result
        }
        case 'DELETE_KEY_SITE_GEN_KEYS': {
            const result = state.filter(e => e.id != action.info.id)
            useFetchingPost(null, 'genericPages', action.info.id)
            return result
        }


        case 'CHANGE_TITLE_GEN_KEYS': {
            const result = state.map(e=>e.id==action.info.id?{...e,descrAchor: action.info.text}:e)
            useFetchingPost(result.filter(e => e.id == action.info.id)[0], 'genericPages', action.info.id)
            return result
        }
        case 'CHANGE_DESCR_GEN_KEYS': {
            const result = state.map(e=>e.id==action.info.id?{...e,descr: action.info.text}:e)
            useFetchingPost(result.filter(e => e.id == action.info.id)[0], 'genericPages', action.info.id)
            return result
        }
        case 'CHANGE_ABOUT_DESCR_GEN_KEYS': {
            const result = state.map(e=>e.id==action.info.id?{...e,aboutCompany: action.info.text}:e)
            useFetchingPost(result.filter(e => e.id == action.info.id)[0], 'genericPages', action.info.id)
            return result
        }
        case 'CHANGE_TASK_GEN_KEYS': {
            const result = state.map(e=>e.id==action.info.id?{...e,task: action.info.text}:e)
            useFetchingPost(result.filter(e => e.id == action.info.id)[0], 'genericPages', action.info.id)
            return result
        }
        case 'CHANGE_ACHOR_GEN_KEYS': {
            const result = state.map(e=>e.id==action.info.id?{...e,achorSite: action.info.text}:e)
            useFetchingPost(result.filter(e => e.id == action.info.id)[0], 'genericPages', action.info.id)
            return result
        }


        case 'ADD_IMG_ITEM_GEN_KEYS': {
            const result = state.map(e=>e.id==action.info.id?{...e,imageInfo: [...e.imageInfo, {...e.imageInfo[e.imageInfo.length-1], id: e.imageInfo.length}]}:e)
            useFetchingPost(result.filter(e => e.id == action.info.id)[0], 'genericPages', action.info.id)
            return result
        }
        case 'DELETE_IMG_ITEM_GEN_KEYS': {
            const result = state.map(e=>e.id==action.info.id?{...e,imageInfo: e.imageInfo.filter(el=>el.id!=action.info.count)}:e)
            useFetchingPost(result.filter(e => e.id == action.info.id)[0], 'genericPages', action.info.id)
            return result
        }
        case 'CHANGE_IMG_GEN_KEYS': {
            const result = state.map(e=>e.id==action.info.id?{...e,imageInfo: e.imageInfo.map(el=>el.id==action.info.count?{...el,img:'/'+action.info.text}:el)}:e)
            useFetchingPost(result.filter(e => e.id == action.info.id)[0], 'genericPages', action.info.id)
            return result
        }
        case 'CHANGE_TITLE_IMG_GEN_KEYS': {
            const result = state.map(e=>e.id==action.info.id?{...e,imageInfo: e.imageInfo.map(el=>el.id==action.info.count?{...el,title:action.info.text}:el)}:e)
            useFetchingPost(result.filter(e => e.id == action.info.id)[0], 'genericPages', action.info.id)
            return result
        }

        case 'CHANGE_ALL_STATE': {
            const result =  [...state, ...action.info.text].filter((el, i, arr) => arr.filter((item, n) => n < i && el.id == item.id).length !== 0 || arr.filter((item, n) => el.id == item.id).length <= 1).sort((a, b) => a.id - b.id)
           
            return result
        }


        default:
            return state
    }
  
}



export const addSiteKeyGenKeys = (info) => ({
    type: 'ADD_KEY_SITE_GEN_KEYS', info
})
export const deleteKeySiteGenKeys = (info) => ({
    type: 'DELETE_KEY_SITE_GEN_KEYS', info
})




export const changeTitleGenKeys = (info) => ({
    type: 'CHANGE_TITLE_GEN_KEYS', info
})
export const changeDescrGenKeys = (info) => ({
    type: 'CHANGE_DESCR_GEN_KEYS', info
})
export const changeAboutDescrGenKeys = (info) => ({
    type: 'CHANGE_ABOUT_DESCR_GEN_KEYS', info
})
export const changeTaskGenKeys = (info) => ({
    type: 'CHANGE_TASK_GEN_KEYS', info
})




export const addImgItemGenKeys = (info) => ({
    type: 'ADD_IMG_ITEM_GEN_KEYS', info
})
export const deleteImgItemGenKeys = (info) => ({
    type: 'DELETE_IMG_ITEM_GEN_KEYS', info
})
export const changeImgGenKeys = (info) => ({
    type: 'CHANGE_IMG_GEN_KEYS', info
})
export const changeTitleImgGenKeys = (info) => ({
    type: 'CHANGE_TITLE_IMG_GEN_KEYS', info
})



export const changeAllStateGenKeys = (info) => ({
    type: 'CHANGE_ALL_STATE', info
})




