import { useDispatch, useSelector } from 'react-redux';
import { useChangeStateFirst } from '../hooks/useChangeStateFirst';
import { useState } from 'react';

export const CheckAdminKey = ()=>{
    const {isAdmin} = useSelector(state=>state.AdminKey)
    const [premissionKey, setPremissionKey] = useState(0) 
    const changeStateKey = useChangeStateFirst( setPremissionKey,premissionKey, "-","/AdminKey",isAdmin, 'CHANGE_STATE_KEY') 
}

