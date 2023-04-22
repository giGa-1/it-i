import React from "react";
import cl from '../style/Header.module.css';
import Link from "next/link";

const HeaderItem = ({title, info, titleClass, setHeaderNav, burgerA, page, setBurgerItem}) => {
    const changePage = (e)=>{
        document.body.scrollTo({top: 0,behavior:'smooth'})
        setBurgerItem(false)
        setHeaderNav(false)
    }
    return (
        
        <div className={cl.headerIComponent}>
            {page !== undefined ? 
                <Link href={page}>
                    <h4 className={[cl.headerICtitle, titleClass].join` `} onClick={e=>changePage(e)}>{title}</h4>
                </Link>
            :
                <h4 className={[cl.headerICtitle, titleClass].join` `} onClick={e=>changePage(e)}>{title}</h4>
            }           
            <ul className={cl.headerIClist}>
                {info.map(e=>
                    <li className={[cl.headerICitem, e.class].join` `} key={e.link} >
                        {e.page !== undefined ?   <Link href={e.page} className={cl.headerIClink}  onClick={e=>changePage(e)}><a onClick={e=>document.bosy.scrollTo({top:0,behavior:'smooth'})}>{e.link}</a></Link>:<a className={cl.headerIClink}>{e.link}</a>}

                    </li>
                )}
            </ul>
        </div>
    )
}

export default HeaderItem