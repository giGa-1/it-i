import React, {useEffect, useRef, useState, useCallback} from 'react';

import cl from '../style/keySite.module.css'
import { useDispatch,useSelector } from 'react-redux';
import {useDropzone} from 'react-dropzone'
import MyFormData from '../untils/ImgFetch';
import MyBtnBlank from "./UI/buttonborder/MyBtnBlank";
import MyAdminInput from './UI/admininput/MyAdminInput';
const KeyGenSitesItem = ({premission, id, infoObj})=>{
    const [changeModal, setChangeModal] = useState(false)
    const [isImg, setIsImg] = useState('')
    const [isLogo, setIsLogo] = useState('')
    const [sizeInfo, setSizeInfo] = useState({title: {width:0,height:0}})

    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)

    const dispatch = useDispatch()

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

      const confirmModal = (e)=>{
        e.preventDefault();
        dispatch({type:'CHANGE_IMG_GEN_KEYS', info: {id:infoObj.id, text: isLogo}})
        setChangeModal(false)
    }

      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div className={cl.photoWrap}>
             {isAdmin&& premission == '200'  ? 
                    <MyFormData  isImg={isImg} id={id} count={infoObj.id} typeAction={'CHANGE_IMG_GEN_KEYS'}/>
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
                    <MyBtnBlank classes={cl.tariffButton} onClick={e=>confirmModal(e)}>ПОДТВЕРДИТЬ</MyBtnBlank>
                    </div>
                </div>
            : ''}

            {infoObj.id!==1&&
             
                isAdmin && premission === '200' ? 
                <MyAdminInput width={sizeInfo.title.width} btnsDirection={0} id={id} height={sizeInfo.title.height} typeAction={'CHANGE_TITLE_IMG_GEN_KEYS'}>
                       <h1 className={infoObj.id==1?[cl.imageInfo,cl.imageInfoFirst].join` `:cl.imageInfo} onClick={e=>{e.preventDefault();setSizeInfo({...sizeInfo, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}}>{infoObj.title}</h1>
                </MyAdminInput>
                :
                <h1 className={infoObj.id==1?[cl.imageInfo,cl.imageInfoFirst].join` `:cl.imageInfo}>{infoObj.title}</h1>
            
               
            }
            {premission === '200'&&<img src={`/img${infoObj.img}`} alt="photo" className={cl.photo}/>}
            
        </div>
    )
}

export default KeyGenSitesItem