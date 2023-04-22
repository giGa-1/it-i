import React, {useEffect, useState,useMemo, useCallback} from "react";
import cl from '../../style/MobileService.module.css';
import MyDeleteElement from "../UI/admindelel/MyDeleteElement";
import MyViewElement from "../UI/viewelement/MyViewElement";
import { useDispatch, useSelector } from "react-redux";
import MyFormData from '../../untils/ImgFetch';

import {useDropzone} from 'react-dropzone'

import MyAdminInput from "../UI/admininput/MyAdminInput";
import Image from "next/image";
const MobileServItem = ({title,premissionLists, descr,element, img,id, actionListDelete,actionImg,actionListDescr,actionListTitle})=> {
    useEffect(() => {})
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
 
    const [changeImg, setChangeImg] = useState(false)
    const dispatch = useDispatch()
    const [isImg, setIsImg] = useState('')
    const [permitView, setPermitView] = useState(1)
    if(typeof window !== "undefined"){
        useMemo(()=>{
            if(window.innerWidth<=576){
                setPermitView(0)
            }
        },[window.innerWidth])
    }

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
        
      }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
    const [crmData, setCrmData] = useState({listTitle: {width:0,height:0},listDescr: {width:0,height:0}})
    return (
        
        <div className={cl.serviceItem}>
            {isAdmin&& premissionLists == '200'  ? 
                <MyFormData  isImg={isImg} id={id} typeAction={actionImg}/>
            :
            ''}
             {isAdmin && premissionLists=='200' ? 
                <span className={['changeItemBtn', cl.changeItemBtn].join` `} onClick={e=>setChangeImg(!changeImg)}>изменить</span>
            :'' }
             {isAdmin && premissionLists=='200' ? 
             <MyDeleteElement typeAction={actionListDelete} id={id}/>

            :'' }
            <div className={cl.serviceItemBlock}>
                <MyViewElement permit={permitView} element={
                     isAdmin && changeImg ? 
                        <div className={cl.imgBlock}>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                {
                                    isDragActive ?
                                    <p className={cl.drop}>Отпустите файл</p> :
                                    <p className={cl.drag}>Переместите изображение</p>
                                }
                            </div>
                        </div>
                        :
                        <span className={cl.serviceImg}>
                             {premissionLists=='200'&&<Image width={35} height={35} src={'/img/'+img} />}
                        </span>
                }/>
                <MyViewElement permit={permitView} element={
                    isAdmin && premissionLists=='200' ? 
                    <MyAdminInput width={crmData.listTitle.width}  fetchInfo={{item: element, category: 'mobileServicePage', id: id}}  id={id} height={crmData.listTitle.height} typeAction={actionListTitle}>
                        <h4 className={cl.serviceItemTitle} onClick={e=>setCrmData({...crmData, listTitle: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{title}</h4>
                    </MyAdminInput>
                    :
                    <h4 className={cl.serviceItemTitle}>{title}</h4>
                
                }/>
                <MyViewElement permit={permitView} element={
                    isAdmin && premissionLists=='200' ? 
                    <MyAdminInput width={crmData.listDescr.width} fetchInfo={{item: element, category: 'mobileServicePage', id: id}}  id={id} height={crmData.listDescr.height} typeAction={actionListDescr}>
                        <p className={cl.serviceItemDescr}  onClick={e=>setCrmData({...crmData, listDescr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{descr}</p>
                    </MyAdminInput>
                    :
                    <p className={cl.serviceItemDescr} >{descr}</p>
                
            }/>

            </div>
        </div>
      
    )
}

export default MobileServItem