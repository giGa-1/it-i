import React, {useState} from "react";
import Link from "next/link";
import cl from './MyNavPages.module.css';
import { useSelector } from "react-redux";
import MyAdminInput from "../admininput/MyAdminInput";

const NavPagesHead = ({navItems, action, premission, id})=>{
    const [sizeInfo,setSizeInfo] = useState({link:''})
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)

    return (
        <div className="container">
            <div className={cl.pag}>
                <ul className={cl.pagList}>
                    <li className={cl.pagItem}>
                        <Link href='/'>
                            <span className={cl.disablePage}>Главная</span>
                        </Link>
                    </li>
                    {navItems.map((e,i,arr)=>
                        e.link !== undefined  ? 
                        <li className={cl.pagItem} key={i}>
                            <span className={cl.pagSec}></span>
                            <Link href={e.link}>
                                <span className={i+1 == arr.length ? cl.activePage : cl.disablePage}>{e.text}</span>
                            </Link>
                        </li>
                        :
                        <li className={cl.pagItem} key={i}>
                            <span className={cl.pagSec}></span>
                            {
                                isAdmin && premission === '200' ? 
                                <MyAdminInput btnsDirection={0} width={sizeInfo.link.width} id={id} height={sizeInfo.link.height} typeAction={action}>
                                      <span className={i+1 == arr.length ? cl.activePage : cl.disablePage} onClick={e=>{setSizeInfo({...sizeInfo, link: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}}>{e.text}</span>
                                </MyAdminInput>
                                :
                                <span className={i+1 == arr.length ? cl.activePage : cl.disablePage}>{e.text}</span>
                            }
                          
                        </li>
                       
                    )}
                </ul>
            </div>
        </div>
    )
}

export default NavPagesHead