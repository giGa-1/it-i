import React from "react";
import Link from "next/link";
import cl from '../style/Footer.module.css';

const FooterItem = ({title, info, page, titleClass}) => {
    return (
        <div className={cl.footerIComponent}>
            {page !== undefined ? 
            <Link  href={page}><a className={[cl.footerICtitle, titleClass].join` `} onClick={e=>{document.body.scrollTo({top:0,behavior:'smooth'})}}>{title}</a></Link>
            :
            title !== 'Меню' ? <a className={[cl.footerICtitle, titleClass].join` `}>{title}</a> : <h4 className={[cl.footerICtitle, titleClass].join` `}>{title}</h4>
            }
            
            <nav>
                <ul className={cl.footerIClist}>
                    {info.map(e=>
                        <li className={[cl.footerICitem, e.class].join` `} key={e.link}>
                            {e.page !== undefined ? <Link href={e.page}  ><a onClick={e=>{document.body.scrollTo({top:0,behavior:'smooth'})}} className={cl.footerIClink}>{e.link}</a></Link>:<a href={e.page} className={cl.footerIClink}>{e.link}</a>}

                        </li>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default FooterItem