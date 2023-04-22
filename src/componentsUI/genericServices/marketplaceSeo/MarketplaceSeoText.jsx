import React, {useState, useEffect, useMemo} from "react";


import cl from '../../../style/genericServStyle/MarketplaceSeoText.module.css';
import { useSelector } from "react-redux";
import MyAdminInput from "../../UI/admininput/MyAdminInput";
import { useDispatch } from "react-redux";
import { getStartedInfo } from "../../../untils/getStartedInfo";
import { useChangeStateFirst } from '../../../hooks/useChangeStateFirst';

const MarketplaceSeoText = ()=>{
    const textData = useSelector(state=>state.AdminTexts.marketText)
    const [textInfo, setTextInfo] = useState({title: {width:0,height:0},descr: {width:0,height:0}, overDescr: {width:0,height:0}})
    const {isAdmin} = useSelector(state=>state.AdminKey)
    const replacerComments = (str, find, replace)=>{
        let parts = str.split(find);
        let res = []
        for(let i = 0, result = []; i < parts.length; i++) {
            result.push(parts[i]);
            result.push(replace);
            res = result
        }
        return (
            <>{res}</>
        );
    }
    const descrChange = replacerComments(textData.descr, '_', < br/>)
    const overDescrChange = replacerComments(textData.overDescr, '_', < br/>)
    const dispatch = useDispatch()


    const [premissionGet, setPremissionGet] = useState(0) 
    const changeStateTexts = useChangeStateFirst(setPremissionGet, premissionGet, 'marketText', 'AT',textData)

    



    return (
        <section className={cl.textSection}>
            <div className="container">
                <div className={cl.textCont}>
                    {isAdmin  && premissionGet === '200'? 
                        <MyAdminInput  width={textInfo.overDescr.width} fetchInfo={{item: textData, id: "mainResult", category: 'adminTexts'}} height={textInfo.overDescr.height} typeAction={'OVER_DESCR_MARKETPLACE_TEXTS_INFO'}>
                            <p className={cl.textTop}  onClick={e=>setTextInfo({...textInfo, overDescr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{textData.overDescr}</p>
                        </MyAdminInput>
                    :
                        <p className={cl.textTop}>{overDescrChange}</p>
                    }
                    {isAdmin && premissionGet === '200' ? 
                        <MyAdminInput  width={textInfo.title.width} fetchInfo={{item: textData, id: "mainResult", category: 'adminTexts'}} height={textInfo.title.height} typeAction={'TITLE_MARKETPLACE_TEXTS_INFO'}>
                             <h2 className={cl.title} onClick={e=>setTextInfo({...textInfo, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{textData.title}</h2>
                        </MyAdminInput>
                    :
                    <h2 className={cl.title}>{textData.title}</h2>
                    }
                    {isAdmin  && premissionGet === '200'? 
                        <MyAdminInput  width={textInfo.descr.width} fetchInfo={{item: textData, id: "mainResult", category: 'adminTexts'}} height={textInfo.descr.height} typeAction={'DESCR_MARKETPLACE_TEXTS_INFO'}>
                            <p className={cl.descr} onClick={e=>setTextInfo({...textInfo, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{textData.descr}</p>
                        </MyAdminInput>
                    :
                    <p className={cl.descr}>{descrChange}</p>
                    }
                   
                </div>
            </div>
        </section>
    )
}

export default MarketplaceSeoText