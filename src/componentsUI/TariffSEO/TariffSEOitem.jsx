import React, {useState} from "react";
import MyBtnFiled from '../UI/buttonback/MyBtnFiled';
import cl from '../../style/tariffSEO.module.css'
import MyAdminInput from "../UI/admininput/MyAdminInput";
import {useDispatch, useSelector} from 'react-redux';
import MyBtnBlank from "../UI/buttonborder/MyBtnBlank";


const TariffSEOitem = ({column,premission, infoItem,stateFetch,setActiveItem, sizeInfo, setSizeInfo, indexItem, setModal, element})=>{
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)

    const dispatch = useDispatch() 
    const [changeModal, setModalChange]  = useState(false)
    const [color, setColor] = useState({colorText:'',background:''})


    const confirmModal = (e, count)=>{
        console.log(color)
        dispatch({type: 'COLOR_TARIFF_SEO_CHANGE',info: {id:column,count:infoItem.id,text:color.colorText}})
        dispatch({type: 'BACKGROUND_TARIFF_SEO_CHANGE',info: {id:column,count:infoItem.id,text:color.background}})

        setModalChange(false)
    }
    return (
        <div key={indexItem} className={"swiper-slide " + cl.swiperSl}>
            {isAdmin?<span className={cl.changeItem} onClick={e=>setModalChange(true)}>ИЗМЕНИТЬ</span>:''}
            {isAdmin?<div className={changeModal ? [cl.changeModal, cl.activeModal].join` ` : cl.changeModal} onClick={e=>setModalChange(false)}>
                <div onClick={e=>e.stopPropagation()} className={cl.contetnModal}>
                    <label className={cl.labelColor}>
                        <span>Выберите цвет фона</span>
                        <input type="color" id="head" name="head" defaultValue={infoItem.color} className={cl.colorChange} onChange={e=>{setColor({...color, colorText: e.target.value})}}/>
                    </label>
                    <label className={cl.labelColor}>
                        <span>Выберите цвет текста</span>
                        <input type="color" id="head" name="head" defaultValue={infoItem.background} className={cl.colorChange} onChange={e=>{setColor({...color, background: e.target.value})}}/>
                    </label>
                    <MyBtnFiled classes={cl.modalBtn} onClick={e=>confirmModal(e)}>ПОДТВЕРДИТЬ</MyBtnFiled>
                </div>
            </div>:''}
            <div className={cl.titleCase } style={{backgroundColor: '#'+infoItem.background}}>
                {
                    isAdmin && premission == '200' ? 
                    <MyAdminInput width={sizeInfo.titleItem.width}  fetchInfo={{item: stateFetch, category: 'tariffSEO', id: column}} id={column} count={infoItem.id} height={sizeInfo.titleItem.height} typeAction={'TITLE_ITEM_TARIFF_SEO_CHANGE'}>
                            <div className={cl.titleCaseSpan} style={{color: '#'+infoItem.color}}   onClick={e=>setSizeInfo({...sizeInfo, titleItem: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{infoItem.title}</div>
                    </MyAdminInput>
                    :
                    <div className={cl.titleCaseSpan} style={{color: '#'+infoItem.color}}>{infoItem.title}</div>
                }
                
            </div>
            {Array.isArray(infoItem.list) ? <ul className={cl.wrapList}>
                {infoItem.list.map((li, i) => 
                <li key={i} className={cl.listItem}>
                    <div className={cl.circle}/>
                    {
                            isAdmin && premission == '200' ? 
                            <MyAdminInput width={sizeInfo.listItem.width}  fetchInfo={{item: stateFetch, category: 'tariffSEO', id: column}} id={column} count={infoItem.id} number={li.id} height={sizeInfo.listItem.height} typeAction={'LIST_ITEM_TARIFF_SEO_CHANGE'}>
                                <div className={cl.listTitle} onClick={e=>setSizeInfo({...sizeInfo, listItem: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{li.text}</div>
                            </MyAdminInput>
                            :
                            <div className={cl.listTitle}>{li.text}</div>
                    }
                    
                </li>)}

            </ul> : <div className={cl.wrapList}>
                {
                    isAdmin && premission == '200' ? 
                    <MyAdminInput width={sizeInfo.listText.width} id={column}  fetchInfo={{item: stateFetch, category: 'tariffSEO', id: column}} count={infoItem.id} height={sizeInfo.listText.height} typeAction={'LIST_TEXT_TARIFF_SEO_CHANGE'}>
                          <div className={cl.caserText}  onClick={e=>setSizeInfo({...sizeInfo, listText: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{infoItem.list}</div>
                    </MyAdminInput>
                    :
                    <div className={cl.caserText}>{infoItem.list}</div>
                }
              
            </div>}
            <div className={cl.btnWrap}>
                {
                        isAdmin && premission == '200' ? 
                        <MyAdminInput width={sizeInfo.price.width} id={column}  fetchInfo={{item: stateFetch, category: 'tariffSEO', id: column}} count={infoItem.id} height={sizeInfo.price.height} typeAction={'PRICE_ITEM_TARIFF_SEO_CHANGE'}>
                            <div className={cl.price} onClick={e=>setSizeInfo({...sizeInfo, price: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{infoItem.price}</div>
                        
                        </MyAdminInput>
                        :
                        <div className={cl.price}>{infoItem.price}</div>
                }
                
                <MyBtnBlank classes={cl.btn} onClick={e => {
                    e.preventDefault(e);
                    setActiveItem({title:element.title,price:element.price});
                    setModal(true)
                }}>Заказать</MyBtnBlank>
            </div>
        </div>
    )
}

export default TariffSEOitem