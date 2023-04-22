import {useFetchingPost} from './../src/hooks/useAdminChangeing';

const initialState = {
    mobileDevelop: {
     title: 'Услуги по разработке приложений',
        text: 'Обратитесь к нам и мы на ранней стадии поможем вам спроектировать бизнес-модель и стратегию его поэтапного развития. ' +
            'Важное место в нашей работе занимает аналитика:' +
            ' анализ требований и бизнес-процессов, маркетинговый и технический аудит, управление требованиями на всех этапах проекта.',
        cases: [
            {
                id:1,
                img: 'mob-analitic.svg',
                title: 'Аналитика',
                descr: 'Проводим конкурентный анализ рынка, используем лучшие решения для создания первоклассных продуктов.'
            },
            {
                id:2,
                img: 'mob-project.svg',
                title: 'Проектирование',
                descr: 'Реализуем бизнес-задачи с помощью дружественных пользователю интерфейсов на базе аналитики.'
            },
            {
                id:3,
                img: 'mob-design.svg',
                title: 'Дизайн',
                descr: 'Создаем лучший пользовательский опыт. Рисуем удобные и понятные интерфейсы, которые работают.'
            },
            {
                id:4,
                img: 'mob-develop.svg',
                title: 'Разработка',
                descr: 'Создаем лучший пользовательский опыт. Рисуем удобные и понятные интерфейсы, которые работают.'
            },
            {
                id:5,
                img:'mob-test.svg',
                title: 'Тестирование',
                descr: 'Тестируем сервис на разных устройствах и гарантируем выпуск качественного продукта точно в срок.'
            },
            {
                id:6,
                img:'mob-seo.svg',
                title: 'Продвижение',
                descr: 'Поддерживаем и улучшаем продукт на основе обратной связи. Тысячи скачиваний и вывод в топы сторов.'
            }
        ]
    },
    crmDevelop: {
        title: 'Возможности CRM-систем',
        cases: [
            {
                id:1,
                img: 'crm-settings.svg',
                title: 'Производительность',
                descr: 'Сотрудники компании могут совершать тысячи разнообразных действий с системой, и это никак не повлияет на скорость ее работы',
            }, {
                id:2,
                img: 'crm-int.svg',
                title: 'Интеграция',
                descr: 'CRM можно интегрировать с любым необходимым вам сервисом: чаты, интернет-телефония, склад, ФИАС, КЛАДР, платежные системы',
            }, {
                id:3,
                img: 'crm-control.svg',
                title: 'Контроль',
                descr: 'Системы разрабатываются с учетом требований безопасности. Данные вашей компании и ваших клиентов всегда будут в безопасности',
            }, {
                id:4,
                img: 'crm-screen.svg',
                title: 'Организация экрана',
                descr: 'Индивидуальная разработка позволяет расположить функции вашей системы в наиболее удачной для вас последовательности',
            }, {
                id:5,
                img: 'crm-design.svg',
                title: 'Индивидуальный дизайн',
                descr: 'Система создается в соответствии с разработанным с вашими корпоративными стандартами и пожеланиями дизайном',
            }, {
                id:6,
                img: 'crm-w.svg',
                title: 'Ничего лишнего',
                descr: 'Вы сами выбираете необходимый функционал, делая вашу систему такой, как вам нужно, не перегружая ее ненужными элементами',
            },

        ]
    }

}

export function mobileServiceReducer(state = initialState, action) {
    switch (action.type) {

        case 'TITLE_CRM_PAGE_CHANGE': {
            const result = {...state, crmDevelop: {...state.crmDevelop, title: action.info.text}}
            useFetchingPost(result['crmDevelop'], 'mobileService', 'crmDevelop')
            return result
        }
        case 'LIST_ADD_CRM_PAGE_CHANGE': {
            const result = {...state, crmDevelop: {...state.crmDevelop, cases: [...state.crmDevelop.cases, {...state.crmDevelop.cases[state.crmDevelop.cases.length-1], id:state.crmDevelop.cases[state.crmDevelop.cases.length]}]}}
            useFetchingPost(result['crmDevelop'], 'mobileService', 'crmDevelop')
            return result
        }
        case 'LIST_DELETE_CRM_PAGE_CHANGE': {
            const result = {...state, crmDevelop: {...state.crmDevelop, cases: state.crmDevelop.cases.filter(e=>e.id !== action.info.id)}}
            useFetchingPost(result['crmDevelop'], 'mobileService', 'crmDevelop')
            return result
        }
        case 'LIST_TITLE_CRM_PAGE_CHANGE': {
            const result = {...state, crmDevelop: {...state.crmDevelop, cases: state.crmDevelop.cases.map(e=>e.id == action.info.id ? {...e, title: action.info.text} : e)}}
            useFetchingPost(result['crmDevelop'], 'mobileService', 'crmDevelop')
            return result
        }
        case 'LIST_DESCR_CRM_PAGE_CHANGE': {
            const result = {...state, crmDevelop: {...state.crmDevelop, cases: state.crmDevelop.cases.map(e=>e.id == action.info.id ? {...e, descr: action.info.text} : e)}}
            useFetchingPost(result['crmDevelop'], 'mobileService', 'crmDevelop')
            return result
        }
        case 'LIST_IMG_CRM_PAGE_CHANGE': {
            const result = {...state, crmDevelop: {...state.crmDevelop, cases: state.crmDevelop.cases.map(e=>e.id == action.info.id ? {...e, img: action.info.text} : e)}}
            useFetchingPost(result['crmDevelop'], 'mobileService', 'crmDevelop')
            return result
        }



        case 'TITLE_MOBILE_PAGE_CHANGE': {
            const result = {...state, mobileDevelop: {...state.mobileDevelop, title: action.info.text}}
            useFetchingPost(result['mobileDevelop'], 'mobileService', 'mobileDevelop')
            return result
        }
        case 'DESCR_MOBILE_PAGE_CHANGE': {
            const result = {...state, mobileDevelop: {...state.mobileDevelop, descr: action.info.text}}
            useFetchingPost(result['mobileDevelop'], 'mobileService', 'mobileDevelop')
            return result
        }
        case 'LIST_ADD_MOBILE_PAGE_CHANGE': {
            const result = {...state, mobileDevelop: {...state.mobileDevelop, cases: [...state.mobileDevelop.cases, {...state.mobileDevelop.cases[state.mobileDevelop.cases.length-1], id:state.mobileDevelop.cases[state.mobileDevelop.cases.length]}]}}
            useFetchingPost(result['mobileDevelop'], 'mobileService', 'mobileDevelop')
            return result
        }
        case 'LIST_DELETE_MOBILE_PAGE_CHANGE': {
            const result = {...state, mobileDevelop: {...state.mobileDevelop, cases: state.mobileDevelop.cases.filter(e=>e.id !== action.info.id)}}
            useFetchingPost(result['mobileDevelop'], 'mobileService', 'mobileDevelop')
            return result
        }
        case 'LIST_TITLE_MOBILE_PAGE_CHANGE': {
            const result = {...state, mobileDevelop: {...state.mobileDevelop, cases: state.mobileDevelop.cases.map(e=>e.id == action.info.id ? {...e, title: action.info.text} : e)}}
            useFetchingPost(result['mobileDevelop'], 'mobileService', 'mobileDevelop')
            return result
        }
        case 'LIST_DESCR_MOBILE_PAGE_CHANGE': {
            const result = {...state, mobileDevelop: {...state.mobileDevelop, cases: state.mobileDevelop.cases.map(e=>e.id == action.info.id ? {...e, descr: action.info.text} : e)}}
            useFetchingPost(result['mobileDevelop'], 'mobileService', 'mobileDevelop')
            return result
        }
        case 'LIST_IMG_MOBILE_PAGE_CHANGE': {
            const result = {...state, mobileDevelop: {...state.mobileDevelop, cases: state.mobileDevelop.cases.map(e=>e.id == action.info.id ? {...e, img: action.info.text} : e)}}
            useFetchingPost(result['mobileDevelop'], 'mobileService', 'mobileDevelop')
            return result
        }
        case 'CHANGE_STATE_SERVICES_PAGES': {
            const result = {...state, ...action.info.text}
           
            return result
        }
        default:
            return state
        }
}
export const changeStateServicesPages = (info)=>({
    type: 'CHANGE_STATE_SERVICES_PAGES', info
})
export const titleCrmPageChange = (info)=>({
    type: 'TITLE_CRM_PAGE_CHANGE', info
})

export const listAddCrmPageElement = (info)=>({
    type: 'LIST_ADD_CRM_PAGE_CHANGE', info
})
export const listDeleteCrmPageElement = (info)=>({
    type: 'LIST_DELETE_CRM_PAGE_CHANGE', info
})
export const listTitleCrmPageChange = (info)=>({
    type: 'LIST_TITLE_CRM_PAGE_CHANGE', info
})
export const listDescrCrmPageChange = (info)=>({
    type: 'LIST_DESCR_CRM_PAGE_CHANGE', info
})
export const listImgCrmPageChange = (info)=>({
    type: 'LIST_IMG_CRM_PAGE_CHANGE', info
})

export const titleMobilePageChange = (info)=>({
    type: 'TITLE_MOBILE_PAGE_CHANGE', info
})
export const listAddMobilePageElement = (info)=>({
    type: 'LIST_ADD_MOBILE_PAGE_CHANGE', info
})
export const listDeleteMobilePageElement = (info)=>({
    type: 'LIST_DELETE_MOBILE_PAGE_CHANGE', info
})
export const listTitleMobilePageChange = (info)=>({
    type: 'LIST_TITLE_MOBILE_PAGE_CHANGE', info
})
export const listDescrMobilePageChange = (info)=>({
    type: 'LIST_DESCR_MOBILE_PAGE_CHANGE', info
})
export const listImgMobilePageChange = (info)=>({
    type: 'LIST_IMG_MOBILE_PAGE_CHANGE', info
})

export const descrMobilePageChange = (info)=>({
    type: 'DESCR_MOBILE_PAGE_CHANGE', info
})