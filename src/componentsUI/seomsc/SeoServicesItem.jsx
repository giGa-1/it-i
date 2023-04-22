import React, {useState, useCallback} from "react";
import cl from '../../style/SeoServices.module.css';
import MyViewElement from "../UI/viewelement/MyViewElement";
import { useSelector, useDispatch } from 'react-redux';

import {useDropzone} from 'react-dropzone'

import MyAdminInput from "../UI/admininput/MyAdminInput";
import Image from "next/image";
import MyFormData from '../../untils/ImgFetch';



const SeoServicesItem = ({title, img,premissionLists, infoItem, id, element})=>{
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const seoTexts = useSelector(state=>state.AdminTexts.seoServices)
    const servicesData = useSelector(state=>state.SeoServices)
    const [servicesItem, setServicesItem] = useState({title:{width:0,height:0}, textItem: {width:0,height:0}})
    const dispatch = useDispatch()
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
        <li className={cl.servicesItem}>
            {isAdmin&& premissionLists == '200'  ? 
                <MyFormData  isImg={isImg} id={id} typeAction={'IMG_SEO_SERV_CHANGE'}/>
            :
            ''}
             {isAdmin && premissionLists == '200' ? 
                <span className={['changeItemBtn', cl.changeItemBtn].join` `} onClick={e=>setChangeImg(!changeImg)}>изменить</span>
            :'' }
            <div className={cl.servicesIHead}>
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
                <span className={cl.servicesImgBlock}>
                         {premissionLists=='200'&&<Image width={50} height={50}  src={`/img/${img}`} alt="photo" className={cl.itemImg}/>}
                </span>
                
            }
               
                <MyViewElement element={
                    isAdmin && premissionLists == '200' ?
                        <MyAdminInput width={servicesItem.title.width} fetchInfo={{item: element, category: 'seoServices', id: id}} id={id} height={servicesItem.title.height} typeAction={'TITLE_SEO_SERV_CHANGE'}>
                            <h4 className={cl.servicesITitle}  onClick={e=>setServicesItem({...servicesItem, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{title}</h4>
                        </MyAdminInput>
                    :
                    <h4 className={cl.servicesITitle}>{title}</h4>
                    
                   
                }/>
                </div>
            <ul className={cl.servicesIList}>
                {infoItem.map((e, i)=>
                <MyViewElement element={
                    isAdmin && premissionLists == '200' ?
                    <MyAdminInput width={servicesItem.textItem.width} id={id} count={e.id } fetchInfo={{item: element, category: 'seoServices', id: id}} height={servicesItem.textItem.height} typeAction={'LIST_SEO_SERV_CHANGE'}>

                        <li className={cl.servicesIItem} key={i} onClick={e=>setServicesItem({...servicesItem, textItem: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{e.text}</li>  
                    </MyAdminInput>
                :
                <li className={cl.servicesIItem} key={i}>{e.text}</li>  
                    
                }/>
                    
                )}
            </ul>
        </li>
    )
}

export default SeoServicesItem