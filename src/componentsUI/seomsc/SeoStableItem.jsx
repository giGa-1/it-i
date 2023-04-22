import React, {useState, useCallback} from "react";
import cl from '../../style/SeoStable.module.css';
import MyDeleteElement from "../UI/admindelel/MyDeleteElement";
import MyViewElement from "../UI/viewelement/MyViewElement";
import { useSelector } from "react-redux";
import MyAdminInput from "../UI/admininput/MyAdminInput";

import {useDropzone} from 'react-dropzone'

import Image from "next/image";
import MyFormData from '../../untils/ImgFetch';
const SeoStableItem = ({title, descr, img, id,premissionLists, element})=>{
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const [stableItem, setStableItem] = useState({title: {width:0,height:0}, descr: {width:0,height:0}})
    const [isImg, setIsImg] = useState('')
    const [changeImg, setChangeImg] = useState(false)

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
        setChangeImg(false)
      }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


    return (
        <li className={cl.stableItem}>
             {isAdmin&& premissionLists == '200'  ? 
                <MyFormData  isImg={isImg} id={id} typeAction={'IMG_SEO_STABLE_CHANGE'}/>
            :
            ''}
              {isAdmin&& premissionLists == '200' ?
                <span className={'changeItemBtn'} onClick={e=>setChangeImg(!changeImg)}>изменить</span>
                :''}
             {isAdmin?<MyDeleteElement id={id} typeAction={'DELETE_SEO_STABLE_ELEMENT'}></MyDeleteElement>:''}
            <MyViewElement element={
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
                 <span className={cl.stableImgBlock}>
                     {premissionLists=='200'&&<Image src={`/img/${img}`} width={75} height={75} />}
                </span>
            }/>
            <MyViewElement element={
                isAdmin && premissionLists == '200' ? 
                <MyAdminInput width={stableItem.title.width}  fetchInfo={{item: element, category: 'seoStable', id: id}} id={id} height={stableItem.title.height} typeAction={'TITLE_SEO_STABLE_CHANGE'}>
                    <h4 className={cl.stableITitle} onClick={e=>setStableItem({...stableItem, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{title}</h4> 

                </MyAdminInput>
                :
                <h4 className={cl.stableITitle}>{title}</h4> 
            }/>
            <MyViewElement element={
                isAdmin && premissionLists == '200' ? 
                <MyAdminInput width={stableItem.descr.width}  fetchInfo={{item: element, category: 'seoStable', id: id}} id={id} height={stableItem.descr.height} typeAction={'DESCR_SEO_STABLE_CHANGE'}>
                    <p className={cl.stableIDescr} onClick={e=>setStableItem({...stableItem, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{descr}</p>
                </MyAdminInput>
                :
                <p className={cl.stableIDescr}>{descr}</p>
               
            }/>
        </li>
    )
}

export default SeoStableItem