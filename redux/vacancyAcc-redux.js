import {useFetchingPost} from './../src/hooks/useAdminChangeing';


const initialState = [ {id:1,title: 'Программист', descr: 'Мы ищем дизайнера на продукт 1cloud-автоматизированный онлайн сервис аренды виртуальной инфраструктуры, ориентированный на малый, средний бизнес и физический лиц.', whatdo: 'Чем предстоит заниматься:', list: [{id:1,text: '​​​​​Разрабатывать концепций дизайна и интерфейсов web-сайтов, лендинг страниц, e-mail рассылок;'}, {id:2,text:'Проектировать логическую структуру и визуальное представление (прототипы);'}, {id:3,text:'Создавать дизайн-макеты (технический дизайн) разделов страниц, интерфейсов, модулей;'}, {id:4,text:'Участвовать в разработке креативов, создавать графические и стилистические элементы, дизайн баннеров (статичных, анимированных);'}, {id:5,text:'Взаимодействовать с разработчиками и менеджерами проекта;'}, {id:6,text:'Осуществлять авторский надзор и тестирование после вёрстки;'}, {id:7,text:'Внедрять улучшения на основе UX, выявлять сильные стороны конкурентов;'}, {id:8,text:'Визуализировать информацию, создавать презентации и демо-контент;'}, {id:9,text:'Визуализировать информацию, создавать презентации и демо-контент;'}, {id:10,text:'Сопровождать дизайн в социальных медиа и на Интернет-площадках;'}, {id:12,text:'Совершенствовать фирменный стиль, работать с брендбуком и гайдлайнами;'} ] },
{id:2,title: 'Веб-дизайнер', descr: 'Мы ищем дизайнера на продукт 1cloud-автоматизированный онлайн сервис аренды виртуальной инфраструктуры, ориентированный на малый, средний бизнес и физический лиц.', whatdo: 'Чем предстоит заниматься:', list: [{id:1,text: '​​​​​Разрабатывать концепций дизайна и интерфейсов web-сайтов, лендинг страниц, e-mail рассылок;'}, {id:2,text:'Проектировать логическую структуру и визуальное представление (прототипы);'}, {id:3,text:'Создавать дизайн-макеты (технический дизайн) разделов страниц, интерфейсов, модулей;'}, {id:4,text:'Участвовать в разработке креативов, создавать графические и стилистические элементы, дизайн баннеров (статичных, анимированных);'}, {id:5,text:'Взаимодействовать с разработчиками и менеджерами проекта;'}, {id:6,text:'Осуществлять авторский надзор и тестирование после вёрстки;'}, {id:7,text:'Внедрять улучшения на основе UX, выявлять сильные стороны конкурентов;'}, {id:8,text:'Визуализировать информацию, создавать презентации и демо-контент;'}, {id:9,text:'Визуализировать информацию, создавать презентации и демо-контент;'}, {id:10,text:'Сопровождать дизайн в социальных медиа и на Интернет-площадках;'}, {id:12,text:'Совершенствовать фирменный стиль, работать с брендбуком и гайдлайнами;'} ] },
{id:3,title: 'Копирайтер', descr: 'Мы ищем дизайнера на продукт 1cloud-автоматизированный онлайн сервис аренды виртуальной инфраструктуры, ориентированный на малый, средний бизнес и физический лиц.', whatdo: 'Чем предстоит заниматься:', list: [{id:1,text: '​​​​​Разрабатывать концепций дизайна и интерфейсов web-сайтов, лендинг страниц, e-mail рассылок;'}, {id:2,text:'Проектировать логическую структуру и визуальное представление (прототипы);'}, {id:3,text:'Создавать дизайн-макеты (технический дизайн) разделов страниц, интерфейсов, модулей;'}, {id:4,text:'Участвовать в разработке креативов, создавать графические и стилистические элементы, дизайн баннеров (статичных, анимированных);'}, {id:5,text:'Взаимодействовать с разработчиками и менеджерами проекта;'}, {id:6,text:'Осуществлять авторский надзор и тестирование после вёрстки;'}, {id:7,text:'Внедрять улучшения на основе UX, выявлять сильные стороны конкурентов;'}, {id:8,text:'Визуализировать информацию, создавать презентации и демо-контент;'}, {id:9,text:'Визуализировать информацию, создавать презентации и демо-контент;'}, {id:10,text:'Сопровождать дизайн в социальных медиа и на Интернет-площадках;'}, {id:12,text:'Совершенствовать фирменный стиль, работать с брендбуком и гайдлайнами;'} ] },
{id:4,title: 'Менеджер', descr: 'Мы ищем дизайнера на продукт 1cloud-автоматизированный онлайн сервис аренды виртуальной инфраструктуры, ориентированный на малый, средний бизнес и физический лиц.', whatdo: 'Чем предстоит заниматься:', list: [{id:1,text: '​​​​​Разрабатывать концепций дизайна и интерфейсов web-сайтов, лендинг страниц, e-mail рассылок;'}, {id:2,text:'Проектировать логическую структуру и визуальное представление (прототипы);'}, {id:3,text:'Создавать дизайн-макеты (технический дизайн) разделов страниц, интерфейсов, модулей;'}, {id:4,text:'Участвовать в разработке креативов, создавать графические и стилистические элементы, дизайн баннеров (статичных, анимированных);'}, {id:5,text:'Взаимодействовать с разработчиками и менеджерами проекта;'}, {id:6,text:'Осуществлять авторский надзор и тестирование после вёрстки;'}, {id:7,text:'Внедрять улучшения на основе UX, выявлять сильные стороны конкурентов;'}, {id:8,text:'Визуализировать информацию, создавать презентации и демо-контент;'}, {id:9,text:'Визуализировать информацию, создавать презентации и демо-контент;'}, {id:10,text:'Сопровождать дизайн в социальных медиа и на Интернет-площадках;'}, {id:12,text:'Совершенствовать фирменный стиль, работать с брендбуком и гайдлайнами;'} ] },
]



const VacancyAccReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'VACANCY_TITLE_CHANGE': {
            const result = state.map(e=> e.id == action.info.id ? {...e, title: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'vacancyAcc', action.info.id)
            return result
        }
        case 'VACANCY_DESCR_CHANGE': {
            const result = state.map(e=> e.id == action.info.id ? {...e, descr: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'vacancyAcc', action.info.id)
            return result
        }
        case 'VACANCY_QUESTION_CHANGE': {
            const result = state.map(e=> e.id == action.info.id ? {...e, whatdo: action.info.text} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'vacancyAcc', action.info.id)
            return result
        }
         case 'VACANCY_LIST_CHANGE': {
            const result = state.map(e=> e.id == action.info.id ? {...e, list: e.list.map(el=>el.id == action.info.count ? {...el, text: action.info.text} : el)} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'vacancyAcc', action.info.id)
            return result
        }
        case 'VACANCY_LIST_ADD_ELEMENT': {
            const result = state.map(e=> e.id == action.info.id ? {...e, list: [...e.list, {...e.list[e.list.length - 1], id: e.list.length + 1}]} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'vacancyAcc', action.info.id)
            return result
        }
        case 'VACANCY_LIST_DELETE_ELEMENT': {
            const result = state.map(e=> e.id == action.info.id ? {...e, list: e.list.filter(el=>el.id != action.info.count)} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'vacancyAcc', action.info.id)
            return result
        }
        case 'VACANCY_ADD_ELEMENT': {
            const result = [...state, {...state[state.length - 1], id: state.length + 1}]
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'vacancyAcc', action.info.id)
            return result
        }
        case 'VACANCY_DELETE_ELEMENT': {
            const result = state.filter(e=>e.id != action.info.id)
            useFetchingPost(null, 'vacancyAcc', action.info.id)
            return result
        }
        case 'ACC_VACANCY_CHANGE_STATE': {
            return  [...state, ...action.info.text].filter((el,i,arr)=> arr.filter((item,n)=>n< i &&el.id==item.id).length!==0 || arr.filter((item,n)=>el.id==item.id).length<=1).sort((a,b)=>a.id-b.id)
        }
        default:
            return state
           
    }
}
export const accVacancyChangeState = (value)=>({
    type: 'ACC_VACANCY_CHANGE_STATE', value
})
export const titleVacancyChange = (value)=>({
    type: 'VACANCY_TITLE_CHANGE', value
})
export const questionVacancyChange = (value)=>({
    type: 'VACANCY_QUESTION_CHANGE', value
})

export const descrVacancyChange = (value)=>({
    type: 'VACANCY_DESCR_CHANGE', value
})
export const listVacancyChange = (value)=>({
    type: 'VACANCY_LIST_CHANGE', value
})
export const addVacancyListElement = (value)=>({
    type: 'VACANCY_LIST_ADD_ELEMENT', value
})
export const deleteVacancyListElement = (value)=>({
    type: 'VACANCY_LIST_DELETE_ELEMENT', value
})

export const deleteVacancyElement = (value)=>({
    type: 'VACANCY_DELETE_ELEMENT', value
})
export const addVacancyElement = (value)=>({
    type: 'VACANCY_ADD_ELEMENT', value
})
export default VacancyAccReducer