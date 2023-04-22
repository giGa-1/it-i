import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import cl from '../../style/MainTItem.module.css';
import MyBtnBlank from "../UI/buttonborder/MyBtnBlank";
import MyDeleteElement from '../UI/admindelel/MyDeleteElement';
import MyAdminInput from '../UI/admininput/MyAdminInput';
import {useDropzone} from 'react-dropzone'
import MyFormData from '../../untils/ImgFetch';

import Image from "next/image";
const MainTItem = ({img,premission, title, descr, price, dl, setModal, setTheme,logo, deleteAction, id, element})=>{
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const [tariffItem, setTariffItem] = useState({title: {width:0,height:0}, dl: {width:0,height:0}, price: {width:0,height:0}, descr: {first:{width:0,height:0},second:{width:0,height:0},third:{width:0,height:0}}})
    const dispatch = useDispatch()
    const [isLogo, setIsLogo] = useState('')
    const [premissionFetching, setPremissionFetching] = useState(0)
    const [changeModal, setChangeModal] = useState(false)

    const [isImg, setIsImg] = useState('')
    
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
          const reader = new FileReader()
    
          reader.onabort = () => console.log('file reading was aborted')
          reader.onerror = () => console.log('file reading has failed')
          reader.onload = () => {
       
            const binaryStr = reader.result
            setIsImg(file)
          }
          reader.readAsArrayBuffer(file)
        })
        setIsLogo(acceptedFiles[0].path)
      }, [])

      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  

 
    return (
        <li className={cl.tariffItem}> 
            {isAdmin&& premission == '200'  ? 
                    <MyFormData  isImg={isImg} id={id} typeAction={'TARIFF_LOGO_CHANGE'}/>
            :
            ''}
            {isAdmin && premission == '200' ? 
                <span className={cl.changeItemBtn} onClick={e=>setChangeModal(!changeModal)}>ИЗМЕНИТЬ</span>
            :''}
            {isAdmin && premission == '200' ? 
                <div className={changeModal ? [cl.modalChangeIcon, cl.modalChangeActive].join` ` : cl.modalChangeIcon }>
                    <div className={cl.modalContent}>
                        <div className={cl.imgBlock}>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                {
                                    isDragActive ?
                                    <p className={cl.drop}>Отпустите файлы, чтобы загрузить их</p> :
                                    <p className={cl.drag}>Преместите сюда изображени</p>
                                }
                            </div>
                        </div>
                    <MyBtnBlank classes={cl.tariffButton} onClick={e=>setChangeModal(false)}>ПОДТВЕРДИТЬ</MyBtnBlank>
                    </div>
                </div>
            : ''}
            {isAdmin && premission == '200' ? <MyDeleteElement typeAction={deleteAction} id={id}/> : ''}
            <div className={cl.tariffContent}>
                <div className={cl.tariffHeader}>
                    <span className={cl.tariffImg}>
                        {premission=='200'&&<Image width={38} height={39} src={'/img/' + logo}></Image>}
                    </span>
                    {isAdmin && premission == '200' ? 
                        <MyAdminInput premissionFetching={premissionFetching} setPremissionFetching={setPremissionFetching} width={tariffItem.title.width} height={tariffItem.title.height} typeAction={'TARIFF_TITLE_CHANGE'} id={id}>
                            <h3 className={cl.tariffTitle} onClick={e=>{setTariffItem({...tariffItem, title: {width:e.target.offsetWidth,height:e.target.offsetHeight}})}}>{title}</h3>
                        </MyAdminInput>
                    :
                        <h3 className={cl.tariffTitle} onClick={e=>{setTariffItem({...tariffItem, title: {width:e.target.offsetWidth,height:e.target.offsetHeight}})}}>{title}</h3>
                    }
                    
                </div>
                <div className={cl.tariffCIBlock}>
                    <ul className={cl.tariffCList}>
                        <li className={cl.tariffСlause}>
                             <span className={cl.tariffCycle}></span>
                             {isAdmin && premission == '200' ? 
                            <MyAdminInput premissionFetching={premissionFetching} setPremissionFetching={setPremissionFetching} width={tariffItem.descr.first.width} height={tariffItem.descr.first.height} typeAction={'TARIFF_DESCR_CHANGE'} id={id} count={0}>
                               <div className={cl.tariffClauseText} onClick={e=>{setTariffItem({...tariffItem, descr: {...tariffItem.descr ,first: {width:e.target.offsetWidth,height:e.target.offsetHeight}}})}}>{descr[0]}</div>
                            </MyAdminInput>
                            :
                            <div className={cl.tariffClauseText}>{descr[0]}</div>
                            }
                         </li>
                         <li className={cl.tariffСlause}>
                             <span className={cl.tariffCycle}></span>
                             {isAdmin && premission == '200' ? 
                            <MyAdminInput premissionFetching={premissionFetching} setPremissionFetching={setPremissionFetching} width={tariffItem.descr.second.width} height={tariffItem.descr.second.height} typeAction={'TARIFF_DESCR_CHANGE'} id={id} count={1}>
                               <div className={cl.tariffClauseText} onClick={e=>{setTariffItem({...tariffItem, descr: {...tariffItem.descr ,second: {width:e.target.offsetWidth,height:e.target.offsetHeight}}})}}>{descr[1]}</div>
                            </MyAdminInput>
                            :
                            <div className={cl.tariffClauseText}>{descr[1]}</div>
                            }
                         </li>
                        
                         <li className={cl.tariffСlause}>
                             <span className={cl.tariffCycle}></span>
                             {isAdmin && premission == '200' ? 
                            <MyAdminInput premissionFetching={premissionFetching} setPremissionFetching={setPremissionFetching} width={tariffItem.descr.third.width} height={tariffItem.descr.third.height} typeAction={'TARIFF_DESCR_CHANGE'} id={id} count={2}>
                               <div className={cl.tariffClauseText} onClick={e=>{setTariffItem({...tariffItem, descr: {...tariffItem.descr ,third: {width:e.target.offsetWidth,height:e.target.offsetHeight}}})}}>{descr[2]}</div>
                            </MyAdminInput>
                            :
                            <div className={cl.tariffClauseText}>{descr[2]}</div>
                            }
                         </li>
                         
                    </ul>
                </div>
                <div className={cl.tariffPriceBlock}>
                    <div className={cl.tariffPriceContent}>
                        <span className={cl.tariffPriceinside}>
                            от
                        </span>
                        {isAdmin && premission == '200' ? 
                            <MyAdminInput  width={tariffItem.price.width} height={tariffItem.price.height} typeAction={'TARIFF_PRICE_CHANGE'} id={id}> 
                                 <span className={cl.tariffPrice} onClick={e=>{setTariffItem({...tariffItem, price: {width:e.target.offsetWidth,height:e.target.offsetHeight}})}}>
                                    {price}
                                </span>
                            </MyAdminInput>
                        :
                            <span className={cl.tariffPrice}>
                                {price}
                            </span>
                        }
                        <span className={cl.tariffPriceRuble}>
                            руб.
                        </span>
                    </div>
                </div>
                <div className={cl.tariffTermBlock}>
                    {isAdmin && premission == '200' ? 
                        <MyAdminInput premissionFetching={premissionFetching} setPremissionFetching={setPremissionFetching} width={tariffItem.dl.width} height={tariffItem.dl.height} typeAction={'TARIFF_DL_CHANGE'} id={id}>
                            <span className={cl.tariffTerm} onClick={e=>{setTariffItem({...tariffItem, dl: {width:e.target.offsetWidth,height:e.target.offsetHeight}})}}>{dl}</span>
                        </MyAdminInput>
                    :
                        <span className={cl.tariffTerm}>{dl}</span>
                    }
                </div>
                <div className={cl.tariffBtnBlock}>
                    {setModal !== undefined ? <MyBtnBlank classes={cl.tariffButton} onClick={e=>{e.preventDefault(); setModal(true); setTheme(title)}}>ЗАКАЗАТЬ</MyBtnBlank> : console.log(1)}
                </div>
            </div>
           
        </li>
    )
}

export default MainTItem