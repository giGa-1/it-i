import cli from "../src/style/MainTItem.module.css";
import {useFetchingPost} from './../src/hooks/useAdminChangeing';
let initialState = [
    {img: cli.tariffImg1, logo: 'mac-grid.svg', title: 'Landing Page', descr: ['Создадим готовый к продвижению сайт', 'Система управления', 'Быстрый запуск'], price: '80 000', dl: 'от 20 дней', id: 1},
    {img: cli.tariffImg2, logo: 'visit-card-grid.svg', title: 'Сайт-визитка', descr: ['Эффективное решение', 'CMS от Wordpress', 'Профессиональный дизайн'], price: '100 000', dl: 'от 30 дней', id: 2},
    {img: cli.tariffImg3, logo: 'site-grid.svg', title: 'Корпоративный сайт', descr: ['Решение для профессионалов', 'Эксклюзивный дизайн', 'Последующая поддержка'], price: '120 000', dl: 'от 30 дней', id: 3},
    {img: cli.tariffImg4, logo: 'search.svg', title: 'Сайт-каталог', descr: ['Универсальное решение','Профессиональная разработка','CMS'], price: '150 000', dl: 'от 2 месяцев', id: 4},
    {img: cli.tariffImg5, logo: 'market-grid.svg', title: 'Интернет-магазин', descr: ['Профессиональная разработка','UX/UI дизайн магазина','Последующее продвижение'], price: '200 000', dl: 'от 90 дней', id: 5},
    {img: cli.tariffImg6, logo: 'cloud-grid.svg',title: 'Веб-сервис', descr: ['Решение для профессионалов','Эксклюзивный дизайн','Последующая поддержка'], price: '300 000', dl: 'от 3 месяцев', id: 6}
]

 const MainTariffReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TARIFF_ELEMENT_ADD': {
           const result = [...state, {...state[state.length - 1], id: state[state.length - 1].id + 1}]
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainTariff', action.info.id)
            return result
        }
        case 'TARIFF_ELEMENT_DELETE': {
           const result =  state.filter((e)=>e.id !== action.info.id)
              useFetchingPost(null, 'mainTariff', action.info.id)
           return result
        }
        case 'TARIFF_TITLE_CHANGE': {
            const result = state.map((e,i)=>e.id == action.info.id ? {...e, title: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainTariff', action.info.id)
           return result
        }
        case 'TARIFF_PRICE_CHANGE': {
           const result = state.map((e,i)=>e.id == action.info.id ? {...e, price: action.info.text} : e)
              useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainTariff', action.info.id)
           return result
        }
        case 'TARIFF_DL_CHANGE': {
           const result = state.map((e,i)=>e.id == action.info.id ? {...e, dl: action.info.text} : e)
              useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainTariff', action.info.id)
           return result
        }
        case 'TARIFF_DESCR_CHANGE': {
           const result = state.map((e,i)=>e.id == action.info.id ? {...e, descr: e.descr.map((el,n)=>n === action.info.count ? action.info.text : el)} : e)
              useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainTariff', action.info.id)
           return result
        }
        case 'TARIFF_LOGO_CHANGE': {
           const result = state.map((e,i)=>e.id == action.info.id ? {...e, logo: action.info.text} : e)
              useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'mainTariff', action.info.id)
           return result
        }
        case 'TARIFF_CHANGE_STATE': {
           const result =  [...state, ...action.info.text].filter((el,i,arr)=> arr.filter((item,n)=>n< i &&el.id==item.id).length!==0 || arr.filter((item,n)=>el.id==item.id).length<=1).sort((a,b)=>a.id-b.id)
            
           return result
        }
        default:
            return state
    }
}

export const addTariff = (value)=>({
    type: 'TARIFF_ELEMENT_ADD', value
})

export const changeTitleTariff = (info)=>({
    type: 'TARIFF_TITLE_CHANGE', info
})
export const changePriceTariff = (info)=>({
    type: 'TARIFF_PRICE_CHANGE', info
})
export const changeDlTariff = (info)=>({
    type: 'TARIFF_DL_CHANGE', info
})

export const changeDescrTariff = (info)=>({
    type: 'TARIFF_DESCR_CHANGE', info
})

export const deleteTariff = (info)=>({
    type: 'TARIFF_ELEMENT_DELETE', info
})
export const logoTariffChange = (info)=>({
    type: 'TARIFF_LOGO_CHANGE', info
})

export default MainTariffReducer