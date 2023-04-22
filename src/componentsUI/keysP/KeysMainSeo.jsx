import React, {useState} from 'react';
import cl from '../../style/KeysMainSeo.module.css';
import KeysMainSeoItem from './KeysMainSeoItem';
import ecoSchedule from '../../../public/img/keys-seo-eco.svg';
import stroySchedule from '../../../public/img/keys-seo-stroy.svg';
import veniSchedule from '../../../public/img/key-seo-veni.svg';
import autoSchedule from '../../../public/img/keys-seo-auto.svg';
import llumarSchedule from '../../../public/img/keys-seo-lumar.svg';
import { useChangeStateFirst } from '../../hooks/useChangeStateFirst';

import { useDispatch, useSelector } from 'react-redux';
import MyAddElement from '../UI/adminaddel/MyAddElement';

const KeysMainSeo = (props) => {
    const dispatch = useDispatch()
    const {KeysMainSeoPage} = useSelector(state=>state)
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)

    const [premissionLists, setPremissionLists] = useState(0) 
    const changeState = useChangeStateFirst( setPremissionLists,premissionLists, "-","/keysSeo",KeysMainSeoPage, 'SEO_KEYS_CHANGE_STATE') 


    return (
        <div className={[cl.seoBlock, props.classesTabs].join` `}>
              {isAdmin && 
            <div className={cl.adminBlock}><MyAddElement typeAction={'ADD_KEYS_SEO_ELEMENT'}></MyAddElement></div>}
   
            <ul className={cl.seoList}>
                {KeysMainSeoPage.map((e,i)=><KeysMainSeoItem element={e} key={i} premissionLists={premissionLists} id={e.id} index={i} topTenTitle={e.topTenTitle} trafficTitle={e.trafficTitle} titleTopLeft={e.titleTopLeft} nameCompany={e.nameCompany} linkCompany={e.linkCompany} beenTopTen={e.changeSeo.beenChange.topTen}  schedule={e.schedule} scheduleSet={e.scheduleSet} beenTraffic={e.changeSeo.becameChange.traffic} becameTopTen={e.changeSeo.becameChange.topTen} graphImg={e.graphImg} becameTraffic={e.changeSeo.becameChange.traffic} />)}
            </ul>
        </div>
    )
}


export default KeysMainSeo