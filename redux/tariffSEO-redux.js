import cl from '../src/style/tariffSEO.module.css'
import {useFetchingPost} from './../src/hooks/useAdminChangeing';

let inititalState = [
    {
        id: 'firstColumn',
        title: 'Тарифы на продвижение сайтов',
        text: 'Стоимость SEO продвижения рассчитывается индивидуально и зависит от\n' + 'конкурентности\n' + 'вашей ниши и количества поисковых фраз',
        cases: [{
            id:1,
            color: 'F84263',
            background: 'F8426310',
            title: 'Начальный',
            list: [{id:1,text:'50 поисковых фраз'}, {id:2,text:'1 регион'}, {id:3,text:'Ежемесячная отчетность'}, {id:4,text:'Рекомендации по доработке'}],
            price: 'от 20 000 руб.',
        }, {
            id:2,
            color: '4C6A3A',
            background: '7BA56210',
            title: 'Оптимальный',
            list: [{id:1,text:'150 поисковых фраз'}, {id:2,text:'2-3 региона'}, {id:3,text:'Ежемесячная отчетность'}, {id:4,text:'Рекомендации по доработке'}],
            price: 'от 40 000 руб.',
        }, {
            id:3,
            color: '3952AB',
            background: '4280F810',
            title: 'Расширенный',
            list: [{id:1,text:'500 поисковых фраз'}, {id:2,text:'По России'}, {id:3,text:'Ежемесячная отчетность'}, {id:4,text:'Рекомендации по доработке'}],
            price: 'от 60 000 руб.',
        },]
    }, {
        id:  'secondColumn',
        titleText: 'Также мы предлагаем следующие виды продвижения', cases: [{
            id:1,
            color: 'FB8B24',
            background: 'E89B2810',
            title: 'С оплатой за трафик',
            list: 'Отлично подходит для интернет-магазинов,' + ' многостраничных сайтов, информационных порталов',
            price: 'от 1 руб. за переход.',
        }, {
             id:2,
            color: '9098A8',
            background: '75727010',
            title: 'С оплатой за лиды',
            list: [{id:1,text:'50 поисковых фраз'}, {id:2,text:'Один регион'}, {id:3,text:'Ежемесячная отчетность'}, {id:4,text:'Рекомендации по доработке'}],
            price: 'от 200 руб. за лид.',
        },]
    }, {
        id: 'mobileCreate',
        title: 'Стоимость разработки мобильных приложений', cases: [{
            id:1,
            color: 'F84263',
            background: 'F8426310',
            title: 'Типовой',
            list: [{id:1,text:'Каталог товаров или услуг'}, {id:2,text:'Сделать заказ'}, {id:3,text:'Новости и акции'}, {id:4,text:'Обратная связь'}, {id:5,text:'Контакты'},],
            price: 'от 1 000 000 руб.',
        }, {
            id:2,
            color: '4C6A3A',
            background: '7BA56210',
            title: 'Бизнес',
            list: [{id:1,text:'Программа лояльности'}, {id:2,text:'Push уведомления'}, {id:3,text:'Серверная часть'}, {id:4,text:'Панель управления'}, {id:5,text:'Чаты'}],
            price: 'от 2 000 000 руб.',
        }, {
            id:3,
            color: '3952AB',
            background: '4280F810',
            title: 'Кастом',
            list: [{id:1,text:'Автоматизация бизнес-процессов'}, {id:2,text:'Сложные интеграции'}, {id:3,text:'Маркетплейсы'}, {id:4,text:'Корпоративные решения'}, {id:5,text:'Smart TV, IoT, VR \\ AR'}],
            price: 'от 2 000 000 руб.',
        },]
    }, {
        id: 'CRMSystem',
        title: 'Стоимость разработки CRM-систем ', cases: [{
            id:1,
            color: 'F84263',
            background: 'F8426310',
            title: 'Типовой',
            list: [{id:1,text:'Типовой дизайн'}, {id:2,text:'Только типовые БП'}, {id:3,text:'Только типовые отчеты'}, {id:4,text:'Возможны незначительные доработки'},],
            price: 'от 200 000 руб.',
        }, {
            id:2,
            color: '4C6A3A',
            background: '7BA56210',
            title: 'Бизнес',
            list: [{id:1,text:'Интерфейс проектируется'}, {id:2,text:'Интеграции нового функционала выбранной CRM по желанию'}, {id:3,text:'Бизнес-процессы'}, {id:4,text:'Отчеты'},],
            price: 'от 300 000 руб.',
        }, {
            id:3,
            color: '3952AB',
            background: '4280F810',
            title: 'Кастом',
            list: [{id:1,text:'Уникальный дизайн интерфейса'}, {id:2,text:'Любые интеграции в необходимом объеме'}, {id:3,text:'Любой функционал по желанию'}, {id:4,text:'Любая аналитика'},],
            price: 'от 500 000 руб.',
        },]
    },
]

export function tarrifSEORedux(state = inititalState, action) {
    switch (action.type) {
        case 'TITLE_TARIFF_SEO_CHANGE': {
            const result = state.map(e=>e.id == action.info.id ? {...e, title: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'tariffSeo', action.info.id)
            return result
        }
        case 'TEXT_TARIFF_SEO_CHANGE': {
            const result = state.map(e=>e.id == action.info.id ? {...e, text: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'tariffSeo', action.info.id)
            return result
        }
        case 'TITLE_TEXT_TARIFF_SEO_CHANGE': {
            const result = state.map(e=>e.id == action.info.id ? {...e, titleText: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'tariffSeo', action.info.id)
            return result
        }
        case 'COLOR_TARIFF_SEO_CHANGE': {
            const result = state.map(e=>e.id == action.info.id ? {...e, cases: e.cases.map(el=>el.id == action.info.count ? {...el, color: action.info.text} : el)} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'tariffSeo', action.info.id)
            return result
        }
        case 'BACKGROUND_TARIFF_SEO_CHANGE': {
            const result = state.map(e=>e.id == action.info.id ? {...e, cases: e.cases.map(el=>el.id == action.info.count ? {...el, background: ation.info.text} : el)} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'tariffSeo', action.info.id)
            return result
        }
        case 'TITLE_ITEM_TARIFF_SEO_CHANGE': {
            const result = state.map(e=>e.id == action.info.id ? {...e, cases: e.cases.map(el=>el.id == action.info.count ? {...el, title: action.info.text} : el)} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'tariffSeo', action.info.id)
            return result
        }
        case 'PRICE_ITEM_TARIFF_SEO_CHANGE': {
            const result = state.map(e=>e.id == action.info.id ? {...e, cases: e.cases.map(el=>el.id == action.info.count ? {...el, price: action.info.text} : el)} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'tariffSeo', action.info.id)
            return result
        }
        case 'LIST_ITEM_TARIFF_SEO_CHANGE': {
            const result = state.map(e=>e.id == action.info.id ? {...e, cases: e.cases.map(el=>el.id == action.info.count ? {...el, list: el.list.map((str,i) => str.id == action.info.number ? {...str, text: action.info.text} : str)} : el)} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'tariffSeo', action.info.id)
            return result
        }
        case 'LIST_TEXT_TARIFF_SEO_CHANGE': {
            const result = state.map(e=>e.id == action.info.id ? {...e, cases: e.cases.map(el=>el.id == action.info.count ? {...el, list: action.info.text} : el )} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'tariffSeo', action.info.id)
            return result
        }
        case 'SEO_TARIFF_CHANGE_STATE': {
            return  [...state, ...action.info.text].filter((el,i,arr)=> arr.filter((item,n)=>n< i &&el.id==item.id).length!==0 || arr.filter((item,n)=>el.id==item.id).length<=1).sort((a,b)=>a.id-b.id)
        }
        default:
            return state
    }
}
export const seoTariffChangeState = (info)=>({
    type: 'SEO_TARIFF_CHANGE_STATE', info
})
export const titleSeoTariffChange = (info)=>({
    type: 'TITLE_TARIFF_SEO_CHANGE', info
})

export const textSeoTariffChange = (info)=>({
    type: 'TEXT_TARIFF_SEO_CHANGE', info
})
export const colorSeoTariffChange = (info)=>({
    type: 'COLOR_TARIFF_SEO_CHANGE', info
})
export const backrSeoTariffChange = (info)=>({
    type: 'BACKGROUND_TARIFF_SEO_CHANGE', info
})
export const titleItemSeoTariffChange = (info)=>({
    type: 'TITLE_ITEM_TARIFF_SEO_CHANGE', info
})
export const priceItemSeoTariffChange = (info)=>({
    type: 'PRICE_ITEM_TARIFF_SEO_CHANGE', info
})
export const listItemSeoTariffChange = (info)=>({
    type: 'LIST_ITEM_TARIFF_SEO_CHANGE', info
})
export const listTextSeoTariffChange = (info)=>({
    type: 'LIST_TEXT_TARIFF_SEO_CHANGE', info
})