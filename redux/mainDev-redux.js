import cl from '../src/style/MainDev.module.css';
import {useFetchingPost} from './../src/hooks/useAdminChangeing';

let initialState = {
    turnkeyWebsite: [
        {   
            id: 1,
            title: 'Аналитика',
            img: 'dev-sixth.svg',
            lists: [
                'Погружение в проект, анализ и исследование',
                'Построение общей логики работы сайта',
                'Формирование требований к функционалу']
        },
        {
            id: 2,
            title: 'Проектирование',
            img: 'dev-first.svg',
            lists: [
                'Проработка структуры сайта под продвижение',
                'Разработка интерактивных прототипов',
                'Разработка пользовательских сценариев']
        },
        {
            id: 3,
            title: 'Разработка дизайна',
           img: 'dev.-second.svg',
            lists: [
                'Разработка концепции дизайна сайта',
                'Отрисовка всех необходимых макетов дизайна',
                'Создание инфографики, иллюстраций, пиктограмм']
        },
        {
            id: 4,

            title: 'Техническая реализация',
           img: 'dev-third.svg',
            lists: [
                'HTML-вёрстка шаблонов страниц',
                'Программирование функционала ',
                'Интеграция с внешними сервисами']
        },
        {
            id: 5,
            title: 'Наполнение и тестирование',
           img: 'dev-fourth.svg',
            lists: [
                'Базовое наполнение контентом',
                'Тестирование отображения вёрстки',
                'Тестирование работы функционала']
        },
        {
            id: 6,

            title: 'Поддержка и развитие',
           img: 'dev-first.svg',
            lists: [
                'Обучение работе с системой управления сайтом',
                'Техническая оперативная поддержка',
                'Наращивание функционала']
        },

    ],
    developerCRM : [
        {
            id: 1,
            title: 'Сбор требований',
           img: '1stepIconCRM.svg',
            lists: 'Функциональные требования описывают необходимый пользовательский ' +
                'и системный функционал, содержат информацию о необходимых мастерах и алгоритмах автоматических операций.'
        },
        {
            id: 2,

            title: 'Прототипирование',
           img: '2stepIconCRM.svg',
            lists: 'Прототип показывает интерфейс и взаимодействия элементов будущей CRM.' +
                ' Техническое задание описывает, как и что будет выполнять система.'
        },
        {
            id: 3,

            title: 'Дизайн',
           img: '3stepIconCRM.svg',
            lists: 'По решению заказчика отрисовывается дизайн всей системы или только разделов, доступных клиентам.'
        },
        {
            id: 4,

            title: 'Разбивка на спринты',
           img: '4stepIconCRM.svg',
            lists:
                'Бэклог – список всех функций, которые ' +
                'будут реализованы в проекте. Спринты – этапы разработки, содержат часть функций реализуемых в рамках этапа.'
        },
        {
            id: 5,

            title: 'Разработка',
           img: '5stepIconCRM.svg',
            lists: {
                title : 'Производится в 6 шагов:',
                list: ['Планирование блока;', 'Программирование задач блока;' , 'Тестирование и отладка;' , 'Релиз блока;',
                    'Анализ качества организации разработки в блоке;', 'Обновление бэклога, корректировка будущих блоков.']
            }
        },
        {
            id: 6,

            title: 'Поддержка и развитие',
           img: '6stepIconCRM.svg',
            lists: 'Создаем базу знаний для персонала, приглашаем сотрудников и проводим обучение ' +
                'согласно каждой пользовательской роли: менеджеры отдела продаж, руководитель, администратор и т. д.  '
        },
    ],
    developerMobile : [
            {
            id: 1,

                title: 'Идея',
               img: '1devMobile.svg',
                lists: 'На этом первоначальном этапе крайне важно получить согласованное и непротиворечивое описание того, что будет создано впоследствии. Мы обсуждаем и ' +
                    'формализуем идею, предлагаем оптимальные пути реализации и вместе составляем список базовых требований.'
            },
            {
            id: 2,

                title: 'Проектирование',
               img: '2devMobile.svg',
                lists: 'Создаем карту, которая наглядно демонстрирует все функции продукта, и прототипы, которые отражают все экраны приложения и схему переходов по ним.' +
                    ' В зависимости от наших потребностей прототипы могут быть статичными или интерактивными.'
            },
            {
                title: 'Дизайн',
               img: '',
                lists: 'Создаем дизайн всех экранов будущего приложения и отрисовываем различные состояния для всех сценариев пользования. Все элементы графического интерфейса мы подвергаем юзабилити-исследованию,' +
                    ' чтобы удостовериться, что принятые дизайн-решения эргономичны и позволяют пользователю эффективно решать свои задачи.'
            },
            {
            id: 3,

                title: 'Разработкка',
               img: '3devMobile.svg',
                lists:
                    'Процесс создания мобильного приложения состоит из нескольких этапов, на каждом этапе вы получаете промежуточные сборки приложения для ознакомления. ' +
                    'В мобильной разработке мы пишем чистый нативный код и не используем кросс-платформенные решения.'
            },
            {
            id: 4,

                title: 'Тестирование',
               img: '4devMobile.svg',
                lists: 'Приложение передается вам для тестирования и проверки соответствия ТЗ. Приложение устанавливается на ваши тестовые устройства, и работает в точности' +
                    ' так же, как если бы было скачано из Google.Play или AppStore. Все несоответствия и найденные проблемы исправляются на этом этапе.'
            },
            {
            id: 5,

                title: 'Публикация',
               img: '5devMobile.svg',
                lists: 'После приемки заказчиком приложения и подписания акта приемки – приложение передается в AppStore или Google.Play для публикации. Каждое приложение перед публикацией проверяется командами Google и Apple.' +
                    ' Приемка в Google.Play занимает не больше суток, процесс приемки в AppStore занимает не менее недели.'
            },
        ]

}

const MainDevReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MAINDEV_ADD_ELEMENT': {
            const result = {...state, turnkeyWebsite: [...state.turnkeyWebsite, {...state.turnkeyWebsite[state.turnkeyWebsite.length - 1], id: state.turnkeyWebsite[state.turnkeyWebsite.length - 1].id + 1}]}
            useFetchingPost(result['turnkeyWebsite'], 'mainDev', 'turnkeyWebsite')
            return result
        }
        case 'MAINDEV_DELETE_ELEMENT': {
            const result = {...state, turnkeyWebsite: state.turnkeyWebsite.filter(e=>e.id !== action.info.id)}
            useFetchingPost(null, 'mainDev', 'turnkeyWebsite')
            return result
        }
        case 'MAINDEV_TITLE_CHANGE': {
            const result = {...state, turnkeyWebsite: state.turnkeyWebsite.map((e,i,arr)=>e.id === action.info.id ? {...e, title: action.info.text} : e )}
            useFetchingPost(result['turnkeyWebsite'], 'mainDev', 'turnkeyWebsite')
            return result} 

        case 'MAINDEV_DESCR_CHANGE': {
            const result = {...state, turnkeyWebsite: state.turnkeyWebsite.map((e,i,arr)=>e.id === action.info.id ? {...e, lists: e.lists.map((e,i)=>i === action.info.count? action.info.text : e)} : e )}
            useFetchingPost(result['turnkeyWebsite'], 'mainDev', 'developerMobile')
            return result
        }
        case 'MAINDEV_IMG_CHANGE': {
            const result = {...state, turnkeyWebsite: state.turnkeyWebsite.map((e,i,arr)=>e.id === action.info.id ? {...e, img: action.info.text} : e )}
            useFetchingPost(result['turnkeyWebsite'], 'mainDev','turnkeyWebsite')
            return result}




        case 'CRMDEV_ADD_ELEMENT': {
            const result = {...state, developerCRM: [...state.developerCRM, {...state.developerCRM[state.developerCRM.length - 1], id: state.developerCRM[state.developerCRM.length - 1].id + 1}]}
            useFetchingPost(result['developerCRM'], 'mainDev', 'developerCRM')
            return result
        }
        case 'CRMDEV_DELETE_ELEMENT': {
            const result = {...state, developerCRM: state.developerCRM.filter(e=>e.id !== action.info.id)}
            useFetchingPost(null, 'mainDev', 'developerCRM')
            return result
        }
        case 'CRMDEV_TITLE_CHANGE': {
            const result = {...state, developerCRM: state.developerCRM.map((e,i,arr)=>e.id === action.info.id ? {...e, title: action.info.text} : e )}
            useFetchingPost(result['developerCRM'], 'mainDev', 'developerCRM')
            return result} 

        case 'CRMDEV_DESCR_CHANGE': {
            const result =  {...state, developerCRM: state.developerCRM.map((e,i,arr)=>e.id === action.info.id ? {...e, lists: action.info.text} : e )}
            useFetchingPost(result['developerCRM'], 'mainDev', 'developerCRM')
            return result
        }
        case 'CRMDEV_IMG_CHANGE': {
            const result = {...state, developerCRM: state.developerCRM.map((e,i,arr)=>e.id === action.info.id ? {...e, img: action.info.text} : e )}
            useFetchingPost(result['developerCRM'], 'mainDev', 'developerCRM')
            return result} 




        case 'MOBILEDEV_ADD_ELEMENT': {
            const result = {...state, developerMobile: [...state.developerMobile, {...state.developerMobile[state.developerMobile.length - 1], id: state.developerMobile[state.developerMobile.length - 1].id + 1}]}
            useFetchingPost(result['developerMobile'], 'mainDev', 'developerMobile')
            return result
        }
        case 'MOBILEDEV_DELETE_ELEMENT': {
            const result = {...state, developerMobile: state.developerMobile.filter(e=>e.id !== action.info.id)}
            useFetchingPost(null, 'mainDev', 'developerMobile')
            return result
        }
        case 'MOBILEDEV_TITLE_CHANGE': {
            const result = {...state, developerMobile: state.developerMobile.map((e,i,arr)=>e.id === action.info.id ? {...e, title: action.info.text} : e )}
            useFetchingPost(result['developerMobile'], 'mainDev', 'developerMobile')
            return result} 

        case 'MOBILEDEV_DESCR_CHANGE': {
            const result =  {...state, developerMobile: state.developerMobile.map((e,i,arr)=>e.id === action.info.id ? {...e, lists: action.info.text} : e )}
            useFetchingPost(result['developerMobile'], 'mainDev', 'developerMobile')
            return result
        }
        case 'MOBILEDEV_IMG_CHANGE': {
            const result = {...state, developerMobile: state.developerMobile.map((e,i,arr)=>e.id === action.info.id ? {...e, img: action.info.text} : e )}
            useFetchingPost(result['developerMobile'], 'mainDev', 'developerMobile')
            return result}

        case 'CHANGE_STATE_DEV': {
            const result = {...state, ...action.info.text}
           
            return result
        }
        default:
        return state
    }
}
export const changeStateDev = (info)=>({
    type: 'CHANGE_STATE_DEV', info
})
export const addMainDevElement = (info)=>({
    type: 'MAINDEV_ADD_ELEMENT', info
})
export const deleteMainDevElement = (info)=>({
    type: 'MAINDEV_DELETE_ELEMENT', info
})
export const changeTitleMainDev = (info)=>({
    type: 'MAINDEV_TITLE_CHANGE', info
})
export const changeDescrMainDev = (info)=>({
    type: 'MAINDEV_DESCR_CHANGE', info
})
export const changeImgMainDev = (info)=>({
    type: 'MAINDEV_IMG_CHANGE', info
})

export const addCrmDevElement = (info)=>({
    type: 'CRMDEV_ADD_ELEMENT', info
})
export const deleteCrmDevElement = (info)=>({
    type: 'CRMDEV_DELETE_ELEMENT', info
})
export const changeTitleCrmDev = (info)=>({
    type: 'CRMDEV_TITLE_CHANGE', info
})
export const changeDescrCrmDev = (info)=>({
    type: 'CRMDEV_DESCR_CHANGE', info
})
export const changeImgCrmDev = (info)=>({
    type: 'CRMDEV_IMG_CHANGE', info
})

export const addMobileDevElement = (info)=>({
    type: 'MOBILEDEV_ADD_ELEMENT', info
})
export const deleteMobileDevElement = (info)=>({
    type: 'MOBILEDEV_DELETE_ELEMENT', info
})
export const changeTitleMobileDev = (info)=>({
    type: 'MOBILEDEV_TITLE_CHANGE', info
})
export const changeDescrMobileDev = (info)=>({
    type: 'MOBILEDEV_DESCR_CHANGE', info
})

export const changeImgMobileDev = (info)=>({
    type: 'MOBILEDEV_IMG_CHANGE', info
})

export default MainDevReducer