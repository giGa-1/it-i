import React from "react";
import cl from '../../style/MobileService.module.css';
import MobileServItem from './MobileServItem';

const MobileOppServ = ({dataInfo})=>{
    return (
        <div className={cl.serviceListBlock}>
            <ul className={cl.serviceList}>
                {dataInfo.map(e=><MobileServItem element={e} title={e.title} descr={e.descr} img={e.img}/>)}
            </ul>
        </div>
    )
}

export default MobileOppServ