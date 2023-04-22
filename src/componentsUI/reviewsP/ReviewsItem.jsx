import React, {useState, useCallback} from "react";
import cl from '../../style/Reviews.module.css';
import MyViewElement from "../UI/viewelement/MyViewElement";
import { useDispatch, useSelector } from "react-redux";
import MyDeleteElement from '../UI/admindelel/MyDeleteElement'
import MyAdminInput from "../UI/admininput/MyAdminInput";
import MyFormData from '../../untils/ImgFetch';


import {useDropzone} from 'react-dropzone'
import Image from "next/image";

const ReviewsItem = ({imgPerson, namePerson, positionPerson,premissionLists, commentPerson, id, element})=>{
    const reviewsInfo = useSelector(state=>state.Reviews)
    const [changeImg, setChangeImg] = useState(false)
    const dispatch = useDispatch()
    const {isAdmin} = useSelector(state=>state.AdminKey)
    const [reviewsData, setReviewsData] = useState({name: {width:0,height:0}, position: {width:0,height:0}, descr: {width:0,height:0}})
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
          setChangeImg(false)
        })
        setChangeImg(false)
      }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


    const descrItem = replacerComments(commentPerson, '_', < br/>)
    return (
        <MyViewElement element={
            <li className={cl.reviewsItem}>
                {isAdmin&& premissionLists == '200'  ? 
                    <MyFormData isImg={isImg} id={id} typeAction={'IMG_REVIEWS_CHANGE'}/>
                :
                ''}
                 {isAdmin && premissionLists == '200' ? 
                    <span className={'changeItemBtn'} onClick={e=>setChangeImg(!changeImg)}>изменить</span>
                :'' }
                {isAdmin && premissionLists == '200'?<MyDeleteElement typeAction={'DELETE_REVIEWS_ELEMENT'} id={id}></MyDeleteElement>:''}
                <div className={cl.reviewsLeft}>
                    <div className={cl.reviewsImgCard}>
                        <div className={cl.reviewsImgBlock}>
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
                            premissionLists=='200'&&<Image   src={'/img/'+imgPerson} alt="Personality image" width={109} height={110} className={cl.reviewsImg}/>
                        }
                          
                        </div>
                        {isAdmin && premissionLists == '200' ?
                            <MyAdminInput width={reviewsData.name.width} fetchInfo={{item: element, category: 'Reviews', id: id}}  id={id} height={reviewsData.name.height} typeAction={'INITIALS_REVIEWS_CHANGE'}>
                                <h4 className={cl.reviewsTitleItem} onClick={e=>setReviewsData({...reviewsData, name: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{namePerson}</h4>
                            </MyAdminInput>
                        :
                            <h4 className={cl.reviewsTitleItem}>{namePerson}</h4>
                        }
                    </div>
                        {isAdmin && premissionLists == '200' ?
                            <MyAdminInput width={reviewsData.position.width}  fetchInfo={{item: element, category: 'Reviews', id: id}} id={id} height={reviewsData.position.height} typeAction={'POSITION_REVIEWS_CHANGE'}>
                                <p className={cl.reviewsDescrItem} onClick={e=>setReviewsData({...reviewsData, position: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{positionPerson}</p>
                            </MyAdminInput>
                        :
                        <p className={cl.reviewsDescrItem}>{positionPerson}</p>
                        }
                    
                </div>
                <div className={cl.reviewsRight}>
                    {isAdmin && premissionLists == '200' ?
                            <MyAdminInput width={reviewsData.descr.width} fetchInfo={{item: element, category: 'Reviews', id: id}} id={id} height={reviewsData.descr.height} typeAction={'COMMENT_REVIEWS_CHANGE'}>
                                <div className={cl.reviewsDescr} onClick={e=>setReviewsData({...reviewsData, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{commentPerson}</div>
                            </MyAdminInput>
                        :
                            <div className={cl.reviewsDescr}>{descrItem}</div>
                        }
                    
                </div>
            </li>
        }/>
         
       
       
    )
}

export default ReviewsItem