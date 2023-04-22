import { usePing } from "../hooks/useAdminChangeing"



export const checkInternetConnect = (dispatch)=>{
    const status = usePing()
    status.then((result)=>{
        if(result.status == 'ok') {
            dispatch({type: 'CHANGE_INTERNET_KEY', info: {text: true}})
        }else {
            dispatch({type: 'CHANGE_INTERNET_KEY', info: {text: false}})
        }
    })
    return
}