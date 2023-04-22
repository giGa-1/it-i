
import {useFetchingPost} from './../src/hooks/useAdminChangeing';

const initialState = [{
    id: 1,
    nameCompany: 'Продвижение «Эковтор»',
    topTenTitle: 'В ТОП 10 Яндекс', 
    trafficTitle: 'Трафик',
    titleTopLeft: 'Количество запросов в ТОП-10',
    linkCompany: 'ec-vtor.ru',
    changeSeo: {
        beenChange: {topTen: '67 запросов', traffic: '312 пос/мес'},
        becameChange: {topTen: '453 запроса', traffic: '1 600 пос/мес'}
    },
    graphImg: 'graffik1-3.jpg',
    schedule: {step:50,max:550, min:50, change:false,crossing:5, inputs: [{id:1,name:'ДЕК',value:80},{id:2,name:'ЯНВ',value:80},{id:3,name:'ФЕВ',value:45},{id:4,name:'МАР',value:130},{id:5,name:'АПР',value:150},{id:6,name:'МАЙ',value:250},{id:7,name:'ИЮНЬ',value:280},{id:8,name:'ИЮЛЬ',value: 350},{id:9,name:'АВГ',value:410}]},
},
    {
        id: 2,
        nameCompany: 'Продвижение «Строймат»',
        topTenTitle: 'В ТОП 10 Яндекс', 
        trafficTitle: 'Трафик',
        linkCompany: 'строй-мат.рф',
        titleTopLeft: 'Количество запросов в ТОП-10',
        changeSeo: {
            beenChange: {topTen: '23 запроса', traffic: '200 пос/мес'},
            becameChange: {topTen: '550 запросов', traffic: '400 пос/мес'}
        },
        graphImg: 'graffik1-3.jpg',
        schedule: {step:50,max:550, min:50, change:false,crossing:5, inputs: [{id:1,name:'ДЕК',value:80},{id:2,name:'ЯНВ',value:80},{id:3,name:'ФЕВ',value:45},{id:4,name:'МАР',value:130},{id:5,name:'АПР',value:150},{id:6,name:'МАЙ',value:250},{id:7,name:'ИЮНЬ',value:280},{id:8,name:'ИЮЛЬ',value: 350},{id:9,name:'АВГ',value:410}]},
    },
    {
        id: 3,
        topTenTitle: 'В ТОП 10 Яндекс', 
        nameCompany: 'Продвижение «Вениколор»',
        titleTopLeft: 'Количество запросов в ТОП-10',

        trafficTitle: 'Трафик',
        linkCompany: 'venicolor.ru',
        changeSeo: {
            beenChange: {topTen: '5 запросов', traffic: '50 пос/мес'},
            becameChange: {topTen: '453 запроса', traffic: '2 300 пос/мес'}
        },
        graphImg: 'graffik1-3.jpg',
        schedule: {step:50,max:550, min:50, change:false,crossing:6, inputs: [{id:1,name:'ДЕК',value:80},{id:2,name:'ЯНВ',value:80},{id:3,name:'ФЕВ',value:45},{id:4,name:'МАР',value:130},{id:5,name:'АПР',value:150},{id:6,name:'МАЙ',value:70},{id:7,name:'ИЮНЬ',value:175},{id:8,name:'ИЮЛЬ',value: 320},{id:9,name:'АВГ',value:460}]},
    },
    {
        id: 4,
        nameCompany: 'Продвижение «Автоэстетика»',
        topTenTitle: 'В ТОП 10 Яндекс', 
        titleTopLeft: 'Количество запросов в ТОП-10',

        trafficTitle: 'Трафик',
        linkCompany: 'autoestetica-msk.ru',
        changeSeo: {
            beenChange: {topTen: '5 запросов', traffic: '50 пос/мес'},
            becameChange: {topTen: '453 запроса', traffic: '2 300 пос/мес'}
        }, 
        graphImg: 'graffik1-3.jpg',
        schedule: {step:50,max:550, min:50, change:false,crossing:3, inputs: [{id:1,name:'ДЕК',value:80},{id:2,name:'ЯНВ',value:80},{id:3,name:'ФЕВ',value:45},{id:4,name:'МАР',value:250},{id:5,name:'АПР',value:225},{id:6,name:'МАЙ',value:210},{id:7,name:'ИЮНЬ',value:280},{id:8,name:'ИЮЛЬ',value: 300},{id:9,name:'АВГ',value:430}]},
    },
    {
        id: 5,
        nameCompany: 'Продвижение «Люмар»',
        topTenTitle: 'В ТОП 10 Яндекс', 
        titleTopLeft: 'Количество запросов в ТОП-10',

        trafficTitle: 'Трафик',
        linkCompany: 'lumar.ru',
        changeSeo: {
            beenChange: {topTen: '20 запросов', traffic: '50 пос/мес'},
            becameChange: {topTen: '4000 запроса', traffic: '1 800 пос/мес'}
        },
        graphImg: 'graffik1-3.jpg',
        schedule: {max:5000, min:0, change:false,crossing:5, inputs: [{id:1,name:'ДЕК',value:1350},{id:2,name:'ЯНВ',value:1100},{id:3,name:'ФЕВ',value:950},{id:4,name:'МАР',value:1150},{id:5,name:'АПР',value:1300}, {id:6,name:'МАЙ',value:3200},{id:7,name:'ИЮНЬ',value:3000},{id:8,name:'ИЮЛЬ',value: 3300},{id:9,name:'АВГ',value:3900}]}
    }]

export function KeysMainSeoReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_KEYS_SEO_ELEMENT': {
           const result = [...state, {...state[state.length-1],id:  state.length+1}]
              useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysSeo', action.info.id) 
           return result
        }
        case 'DELETE_KEYS_SEO_ELEMENT': {
           const result = state.filter(e=>e.id != action.info.id)
              useFetchingPost(null, 'keysSeo', action.info.id) 
           return result
        }
        case 'NAME_KEYS_SEO_CHANGE': {
           const result = state.map(e=> e.id == action.info.id ? {...e, nameCompany: action.info.text} : e)
              useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysSeo', action.info.id) 
           return result
        }
        case 'LINK_KEYS_SEO_CHANGE': {
           const result = state.map(e=> e.id == action.info.id ? {...e, linkCompany: action.info.text} : e)
              useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysSeo', action.info.id) 
           return result
        }
        case 'IMG_GRAPH_KEYS_SEO_CHANGE': {
           const result = state.map(e=> e.id == action.info.id ? {...e, graphImg: action.info.text} : e)
              useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysSeo', action.info.id) 
           return result
        }


        case 'BEEN_TEN_SEO_CHANGE': {
           const result = state.map(e=> e.id == action.info.id ? {...e, changeSeo: {...e.changeSeo, beenChange: {...e.changeSeo.beenChange, topTen: action.info.text}}} : e)
              useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysSeo', action.info.id) 
           return result
        }
        case 'BEEN_TRAFFIS_SEO_CHANGE': {
           const result = state.map(e=> e.id == action.info.id ? {...e, changeSeo: {...e.changeSeo, beenChange: {...e.changeSeo.beenChange, traffic: action.info.text}}} : e)
              useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysSeo', action.info.id) 
           return result
        }
        case 'BECAME_TRAFFIS_SEO_CHANGE': {
           const result = state.map(e=> e.id == action.info.id ? {...e, changeSeo: {...e.changeSeo, becameChange: {...e.changeSeo.becameChange, topTen: action.info.text}}} : e)
              useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysSeo', action.info.id) 
           return result
        } 
        case 'BECAME_TEN_SEO_CHANGE': {
           const result = state.map(e=> e.id == action.info.id ? {...e, changeSeo: {...e.changeSeo, becameChange: {...e.changeSeo.becameChange, traffic: action.info.text}}} : e)
            useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysSeo', action.info.id) 
           return result
        }



        case 'TOP_TEN_TITLE_SEO_CHANGE': {
           const result = state.map(e=> e.id == action.info.id ? {...e, topTenTitle:  action.info.text} : e)
              useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysSeo', action.info.id) 
           return result
        }
        case 'TRAFFIC_TITLE_SEO_CHANGE': {
           const result = state.map(e=> e.id == action.info.id ? {...e, trafficTitle:  action.info.text} : e)
              useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysSeo', action.info.id) 
           return result
        }
        case 'TOP_TITLE_LEFT_SEO_CHANGE': {
           const result = state.map(e=> e.id == action.info.id ? {...e, titleTopLeft:  action.info.text} : e)
              useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysSeo', action.info.id) 
           return result
        }


        case 'ADD_INPUTS_KEYS_SEO_ELEMENT': {
           const result = state.map(e=> e.id == action.info.id ? {...e, schedule:  {...e.schedule, inputs: [...e.schedule.inputs, {...e.schedule.inputs[e.schedule.inputs.length-1], id:e.schedule.inputs.length+1}]}} : e)
              useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysSeo', action.info.id) 
           return result
        }
        case 'DELETE_INPUTS_KEYS_SEO_ELEMENT': {
           const result = state.map(e=> e.id == action.info.id ? {...e, schedule:  {...e.schedule, inputs: e.schedule.inputs.filter(el=>el.id!==action.info.count)}} : e)
              useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysSeo', action.info.id) 
           return result
        }
        case 'NAME_INPUTS_SEO_KEYS_CHANGE': {
           const result = state.map(e=> e.id == action.info.id ? {...e, schedule:  {...e.schedule, inputs: e.schedule.inputs.map(el=>el.id===action.info.count ? {...el, name: action.info.text} : el)}} : e)
              useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysSeo', action.info.id) 
           return result
        }
        case 'VALUE_INPUTS_SEO_KEYS_CHANGE': {
           const result = state.map(e=> e.id == action.info.id ? {...e, schedule:  {...e.schedule, inputs: e.schedule.inputs.map(el=>el.id===action.info.count ? {...el, value: action.info.text} : el)}} : e)
              useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysSeo', action.info.id) 
           return result
        }
        case 'CROSSING_INPUTS_SEO_KEYS_CHANGE': {
           const result = state.map(e=> e.id == action.info.id ? {...e, schedule:  {...e.schedule, crossing: action.info.text}} : e)
              useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysSeo', action.info.id) 
           return result
        }
        case 'MAX_VALUES_SEO_KEYS_CHANGE': {
           const result = state.map(e=> e.id == action.info.id ? {...e, schedule:  {...e.schedule, max: action.info.text}} : e)
              useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysSeo', action.info.id) 
           return result
        }
        case 'MIN_VALUES_SEO_KEYS_CHANGE': {
           const result = state.map(e=> e.id == action.info.id ? {...e, schedule:  {...e.schedule, min: action.info.text}} : e)
              useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysSeo', action.info.id) 
           return result
        }
        case 'CHANGE_VALUES_SEO_KEYS_CHANGE': {
           const result = state.map(e=> e.id == action.info.id ? {...e, schedule:  {...e.schedule, change: action.info.text}} : e)
              useFetchingPost(result.filter(e=>e.id==action.info.id)[0], 'keysSeo', action.info.id) 
           return result
        }
        case 'SEO_KEYS_CHANGE_STATE': {
           const result =  [...state, ...action.info.text].filter((el,i,arr)=> arr.filter((item,n)=>n< i &&el.id==item.id).length!==0 || arr.filter((item,n)=>el.id==item.id).length<=1).sort((a,b)=>a.id-b.id)
             
           return result
        }        
        default:
           return state
    }
 
}

export const seoKeysChangeState = (info) => ({
    type: 'SEO_KEYS_CHANGE_STATE',info
})

export const maxValuesKeysSeoElement = (info) => ({
    type: 'MAX_VALUES_SEO_KEYS_CHANGE',info
})
export const minValuesKeysSeoElement = (info) => ({
    type: 'MIN_VALUES_SEO_KEYS_CHANGE',info
})
export const changeValuesKeysSeoElement = (info) => ({
    type: 'CHANGE_VALUES_SEO_KEYS_CHANGE',info
})

export const addInputsKeysSeoElement = (info) => ({
    type: 'ADD_INPUTS_KEYS_SEO_ELEMENT',info
})
export const deleteInputsKeysSeoElement = (info) => ({
    type: 'DELETE_INPUTS_KEYS_SEO_ELEMENT',info
})

export const nameInputsKeysSeoChange = (info) => ({
    type: 'NAME_INPUTS_SEO_KEYS_CHANGE',info
})
export const valueInputsKeysSeoChange = (info) => ({
    type: 'VALUE_INPUTS_SEO_KEYS_CHANGE',info
})
export const crossingInputsKeysSeoChange = (info) => ({
    type: 'CROSSING_INPUTS_SEO_KEYS_CHANGE',info
})



export const titleTopLeftSeoElement = (info) => ({
    type: 'TOP_TITLE_LEFT_SEO_CHANGE',info
})
export const topTenTitleSeoElement = (info) => ({
    type: 'TOP_TEN_TITLE_SEO_CHANGE',info
})
export const trafficTitleSeoElement = (info) => ({
    type: 'TRAFFIC_TITLE_SEO_CHANGE',info
})
export const deleteKeysSeoElement = (info) => ({
    type: 'DELETE_KEYS_SEO_ELEMENT',info
})
export const nameKeysSeoChange = (info) => ({
    type: 'NAME_KEYS_SEO_CHANGE',info
})
export const linkKeysSeoChange = (info) => ({
    type: 'LINK_KEYS_SEO_CHANGE',info
})

export const beenTenKeysSeoChange = (info) => ({
    type: 'BEEN_TEN_SEO_CHANGE',info
})
export const beenTrafficKeysSeoChange = (info) => ({
    type: 'BEEN_TRAFFIS_SEO_CHANGE',info
})
export const becameTrafficKeysSeoChange = (info) => ({
    type: 'BECAME_TRAFFIS_SEO_CHANGE',info
})
export const becameTenKeysSeoChange = (info) => ({
    type: 'BECAME_TEN_SEO_CHANGE',info
})