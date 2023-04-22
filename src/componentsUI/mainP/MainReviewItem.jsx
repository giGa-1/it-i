
import React, {useMemo, useState, useCallback} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import arrPrevRev from '../../../public/img/arrPrevRev.svg'
// import arrNextRev from '../../../public/img/arrNextRev.svg'
import cl from '../../style/MainReview.module.css'
import MyViewElement from '../UI/viewelement/MyViewElement';
import { useSelector, useDispatch } from 'react-redux';
import MyAdminInput from "../UI/admininput/MyAdminInput";
import MyAddElement from '../UI/adminaddel/MyAddElement';
import MyAdminModal from '../UI/adminmodal/MyAdminModal';
import MyFormData from '../../untils/ImgFetch';

import {useDropzone} from 'react-dropzone'
import Image from "next/image";

const MainReviewItem = ({infoObj, premissionLists})=>{
  
    const [sizeInfo, setSizeInfo] = useState({title: {width:0,height:0}, name: {width:0,height:0}, position: {width:0,height:0}, descr: {width:0,height:0}})
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const [changeImg, setChangeImg] = useState(false)
    const dispatch = useDispatch()
    const [isImg, setIsImg] = useState('')

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
          const reader = new FileReader()
    
          reader.onabort = () => console.log('file reading was aborted')
          reader.onerror = () => console.log('file reading has failed')
          reader.onload = () => {
       
            const binaryStr = reader.result
            
          }
        
          reader.readAsArrayBuffer(file)
        })
        setChangeImg(false)
      }, [])

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

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
   
    return (
        <div className={cl.wrapper}>
             {isAdmin&& premissionLists == '200'  ? 
                <MyFormData  isImg={isImg} id={infoObj.id} typeAction={'IMG_REVIEW_MAIN_CHANGE'}/>
            :
            ''}
            {isAdmin ? 
                <span className={'changeItemBtn'} onClick={e=>setChangeImg(!changeImg)}>изменить</span>
            :'' }
            <div>
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
                    premissionLists=='200'&&<Image width={107} height={107} src={`/img/${infoObj.photo}`} alt="photo" className={cl.photo}/>
                }
               
                {
                         isAdmin&& premissionLists == '200' ? 
                         <MyAdminInput width={sizeInfo.name.width}  fetchInfo={{item: infoObj, category: 'mainReview', id: infoObj.id}} id={infoObj.id} height={sizeInfo.name.height} typeAction={'INITIALS_REVIEW_MAIN_CHANGE'}>
                             <p className={cl.name} onClick={e=>setSizeInfo({...sizeInfo, name: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{infoObj.name}</p>
                         </MyAdminInput>
                         :
                         <p className={cl.name}>{infoObj.name}</p>
                    }
                 {
                        isAdmin&& premissionLists == '200' ? 
                        <MyAdminInput width={sizeInfo.position.width} id={infoObj.id}  fetchInfo={{item: infoObj, category: 'mainReview', id: infoObj.id}} height={sizeInfo.position.height} typeAction={'POSITION_REVIEW_MAIN_CHANGE'}>
                            <p className={cl.position}  onClick={e=>setSizeInfo({...sizeInfo, position: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{infoObj.position}</p>
                        </MyAdminInput>
                        :
                        <p className={cl.position}>{infoObj.position}</p>
                    }
            </div>
            {
                isAdmin&& premissionLists == '200' ? 
                <MyAdminInput width={sizeInfo.descr.width} id={infoObj.id}  fetchInfo={{item: infoObj, category: 'mainReview', id: infoObj.id}} height={sizeInfo.descr.height} typeAction={'COMMENT_REVIEW_MAIN_CHANGE'}>
                    <div className={cl.comment}  onClick={e=>setSizeInfo({...sizeInfo, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{infoObj.comment}</div>
                </MyAdminInput>
                :
                <div className={cl.comment}>{replacerComments(infoObj.comment, '_', < br/>)}</div>
            }
        </div>
    )
}

export default MainReviewItem