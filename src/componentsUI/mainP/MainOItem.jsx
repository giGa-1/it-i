import React, {useState, useCallback, useMemo, useRef, useEffect} from "react";
import MyBtnBlank from "../UI/buttonborder/MyBtnBlank";
import cl from '../../style/MainOther.module.css';
import { useDispatch, useSelector } from 'react-redux';

import MyViewElement from "../UI/viewelement/MyViewElement";
import MyAdminInput from "../UI/admininput/MyAdminInput";
import MyDeleteElement from "../UI/admindelel/MyDeleteElement";
import {useDropzone} from 'react-dropzone'
import Image from "next/image";
import MyFormData from '../../untils/ImgFetch';
import { useFetchingGet, useFetchingPost } from "../../hooks/useAdminChangeing";

const MainOItem = ({title, img,premissionTariff, setModalItem, id, element})=>{


    const dispatch = useDispatch()

    
    const [isImg, setIsImg] = useState('')
  

    const [modal, setModal] = useState(false)
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const [otherInfo, setOtherInfo ] = useState({title: {width:0,height:0}})
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
        // dispatch({type: 'OTHER_ITEM_IMG_CHANGE', info: {text:acceptedFiles[0].path, id: id}})
        
      }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

   


    return (
        <li className={cl.otherItem}>
            {isAdmin&& premissionTariff == '200'  ? 
                <MyFormData  isImg={isImg} id={id} typeAction={'OTHER_ITEM_IMG_CHANGE'}/>
            :
            ''}
          
             {isAdmin&& premissionTariff == '200' ?
                <span className={'changeItemBtn'} onClick={e=>setChangeImg(!changeImg)}>изменить</span>
            :''}
            {isAdmin&& premissionTariff == '200' ?
                <MyDeleteElement id={id} typeAction={'OTHER_DELETE_ITEM'}></MyDeleteElement>
            :''}
            
            {
                  isAdmin && premissionTariff == '200' ? 
                  <MyAdminInput width={otherInfo.title.width} id={id} fetchInfo={{item: element, category: 'mainOther', id: id}} height={otherInfo.title.height} typeAction={'OTHER_ITEM_TITLE_CHANGE'}>
                      <h3 className={cl.otherItemTitle} onClick={e=>setOtherInfo({...otherInfo, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{title}</h3>
                  </MyAdminInput>
                  :
                  <h3 className={cl.otherItemTitle}>{title}</h3>
            }
            {isAdmin && changeImg ? 
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
                premissionTariff=='200'&&<Image width={104} height={103}  className={cl.otherItemImgBlock} src={`/img/${img}`}/>
            }
           
            <MyBtnBlank classes={cl.otherItemBtn} onClick={e=>{e.preventDefault(e); setModalItem(true)}}>ЗАКАЗАТЬ</MyBtnBlank>
        </li>
    )
}

export default MainOItem