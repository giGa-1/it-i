
import {useFetchingPost} from './../src/hooks/useAdminChangeing';

const initialState = [
{id:1,title: 'Подготовка', img: 'seo-ready.svg', infoArr: [{id:1,text:'Проверка индексации в Яндексе и в Google'},{id:2,text:'Проверка корректности robots.txt'}, {id:3,text:'Проверка корректности robots.txt'}, {id:4,text:'Проверка корректности составления ЧПУ'}, {id:5,text:'Проверка настройки кодов ответа сервера (200, 404, 50*)'}, {id:6,text:'Проверка на дубликаты страниц, мета-тегов'}, {id:7,text:'Проверка HTML кода сайта'}, {id:8,text:'Проверка корректности оформления страницы контактов'}, {id:9,text:'Проверка контента сайта на спам'}, {id:10,text:'Проверка контента на уникальность текста'}, {id:11,text:'Анализ внешних ссылок'}, {id:12,text:'Проверка работоспособности HTML форм на сайте'}, {id:13,text:'Проверка работоспособности HTML форм на сайте'}]},
{id:2,title: 'Ключевые запросы', img: 'seo-key.svg', infoArr: [{id:1,text:'Сбор и кластеризация семантического ядра'}, {id:2,text:'Сбор и кластеризация семантического ядра'}, {id:3,text:'Cоставление плана работ по развитию сайта'},{id:4,text:'Создание структуры разделов и/или страниц'},{id:5,text:'Распределение собранных запросов по сайту'},{id:6,text:'Анализ конкурентов. Сбор семантики конкурентов'},{id:7,text:'Кластеризация новых собранных запросов'}]},
{id:3,title: 'Настройки',img: 'seo-setting.svg', infoArr: [{id:1,text:'Настройка сайта в Яндекс.Вебмастере'},{id:2,text:'Настройка региональности сайта в Яндекс.Вебмастере'},{id:3,text:'Добавление сайта в Яндекс.Справочник'},{id:4,text:'Настройка сайта в Google Search Console'},{id:5,text:'Добавление сайта в Google Business'},{id:6,text:'Настройка систем аналитики Яндекс.Метрика и GA'},{id:7,text:'Настройка целей в Яндекс.Метрика или G.Analytics'}]},
{id:4,title: 'Тексты', img: 'seo-text.svg', infoArr: [{id:1,text:'Создание ТЗ на тексты для существующих страниц'},{id:2,text:'Написание текстов для существующих страниц'},{id:3,text:'Создание структуры сайта, ориентированной под SEO-продвижение'},{id:4,text:'Составление мета-тегов для существующих страниц и/или разделов'},{id:5,text:'Составление заголовков для существующих страниц и/или разделов'}, {id:6,text:'Написание текстов для новых страниц'},{id:7,text:'Проектирование структуры новых страниц и/или разделов'},{id:8,text:'Реализация микроразметки'}]},
{id:5,title: 'Ссылки', img: 'seo-links.svg', infoArr: [{id:1,text:'Анализ ссылочной массы сайта'},{id:2,text:'Покупка вечных ссылок'},{id:3,text:'Удаление негативных отзывов на тематических порталах'},{id:4,text:'Размещение положительных отзывов на тематических порталах'}]},
{id:6,title: 'Контроль и улучшение', img:'seo-control.svg', infoArr: [{id:1,text:'Ежеминутный мониторинг доступности сайта'},{id:2,text:'Ежедневная работа над улучшением поведенческих факторов у сайта'},{id:3,text:'Ежедневная отчётность по позициям'},{id:4,text:'Еженедельная диагностика сайта'},{id:5,text:'Ежемесячная проверка оптимизации сайта'},{id:6,text:'Ежеквартальная актуализация семантического ядра'},{id:7,text:'Ежедневный мониторинг репутации компании в интернете'}]
}]


export function SeoServicesReducer  (state = initialState, action) {
    switch (action.type) {
        case 'ADD_SEO_SERV_ELEMENT': {
            const result =  [...state, {...state[state.length - 1], id: state[state.length - 1].id + 1}]
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'seoServices', action.info.id)
            return result
        }
        case 'DELETE_SEO_SERV_ELEMENT': {
            const result =  state.filter(e=>e.id !== action.info.id)
            useFetchingPost(null, 'seoServices', action.info.id)
            return result
        }
        case 'TITLE_SEO_SERV_CHANGE': {
            const result =  state.map(e=>e.id == action.info.id ? {...e, title: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'seoServices', action.info.id)
            return result
        }
        case 'IMG_SEO_SERV_CHANGE': {
            const result =  state.map(e=>e.id == action.info.id ? {...e, img: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'seoServices', action.info.id)
            return result
        }
        case 'LIST_SEO_SERV_CHANGE': {
            const result =  state.map(e=>e.id == action.info.id ? {...e, infoArr: e.infoArr.map(el=>el.id == action.info.count ? {...el, text: action.info.text} : el)} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'seoServices', action.info.id)
            return result
        }
        case 'SEO_SERV_CHANGE_STATE': {
            const result =   [...state, ...action.info.text].filter((el,i,arr)=> arr.filter((item,n)=>n< i &&el.id==item.id).length!==0 || arr.filter((item,n)=>el.id==item.id).length<=1).sort((a,b)=>a.id-b.id)
          
            return result
        }
        default:
            return state
    }
}

export const seoServChangeState = (info)=>({
    type: 'SEO_SERV_CHANGE_STATE',info
})
export const addSeoServElement = (info)=>({
    type: 'ADD_SEO_SERV_ELEMENT',info
})
export const deleteSeoServElement = (info)=>({
    type: 'DELETE_SEO_SERV_ELEMENT',info
})
export const titleSeoServChange = (info)=>({
    type: 'TITLE_SEO_SERV_CHANGE',info
})
export const listSeoServChange = (info)=>({
    type: 'LIST_SEO_SERV_CHANGE',info
})
