import React, {useEffect, useState} from 'react';
import cl from './../src/style/Admin.module.css';
import MyInput from './../src/componentsUI/UI/input/MyInput';
import MyBtn from './../src/componentsUI/UI/buttonborder/MyBtnBlank'; 
import { memo } from 'react';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useFetchingPost } from '../src/hooks/useAdminChangeing';
import Link from 'next/link';
const Admin = ()=>{
    const adminKeys = {login: 'it-industrial',password: '20222022' }
    const [isLogin, setIsLogin] = useState('')
    const [isPassword, setIsPassword] = useState('')
    const dispatch = useDispatch()
    const isAdmin = useSelector(state=>state.AdminKey)


   
    const checkForm = (e)=>{
        if(isLogin === adminKeys.login && isPassword === adminKeys.password) {
         dispatch({type: 'IS_ADMIN_CHANGE', info: {...isAdmin, isAdmin: !isAdmin.isAdmin}})&&useFetchingPost({...isAdmin, isAdmin: !isAdmin.isAdmin}, 'AdminKey', 1)
         }else{ e.preventDefault()}
    }

    // CHANGE_STATE_KEY
    
    return (
        <>
            <div className={cl.blockAdmin}>
                <div className={cl.cardAdmin}>
                    <h1 className={cl.titleAdmin}>Вход в админку</h1>
                    <form className={cl.fromAdmin} id='admin' >
                        <MyInput place="Логин" type='text' form='admin' className={cl.login} valueInput={isLogin} setCheckInputSite={setIsLogin}/>
                        <MyInput place="Пароль" type='text' form='admin' className={cl.password}  valueInput={isPassword} setCheckInputSite={setIsPassword}/>
                        <div className={cl.btnBlock}>
                            <Link href={isAdmin ? '/' : '/admin-it-industrial-private-page'}>
                                <MyBtn type='submit' form='admin' classes={cl.btn}  onClick={e=>checkForm(e)}>Войти</MyBtn>
                            </Link>
                            
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Admin