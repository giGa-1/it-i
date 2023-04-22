import React, {useState, useMemo, useRef, useCallback} from "react";
import cl from './MyAdminModal.module.css';
import MyBtnFiled from "../buttonback/MyBtnFiled";
import MyInput from "../input/MyInput";
import MyMask from "../maskinput/MyMask";
import postRequest from "../../../../redux/requests";
import ContactsService from "../../../API/ContactsService";
import { useDispatch } from "react-redux";
import {useDropzone} from 'react-dropzone'
import MyFormData from '../../../untils/ImgFetch';

const MyAdminModal = ({visible, setVisible, colorValue,keysIdintificator, hrefValue, imgValue,altValue, id, count, actionHref, actionColor, actionAlt, actionImg})=>{
    const dispatch = useDispatch()
    const [modalInfo, setModalInfo] = useState({img: ''})
    const [color, setColor] = useState('F84263')
    const [inputValue, setInputValue] = useState('')
    const [altInput, setAltInput] = useState('')
    const blockModal = useRef('')
    let forServerInfo = {}
    const rootClasses = [cl.modalBlock]
    const rootContentClasses = [cl.modalContent]


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
        // dispatch({type: 'OTHER_ITEM_IMG_CHANGE', info: {text:acceptedFiles[0].path, id: id}})
        
      }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
      

    const addModalInfo = (e)=>{
        e.preventDefault();
       
        colorValue && color && dispatch({type: actionColor, info: {text: color.match(/\w/g).join``, id: id, count: count}})
        hrefValue && inputValue && dispatch({type: actionHref, info: {text: inputValue, id: id, count: count}})
        altValue && altInput && dispatch({type: actionAlt, info: {text: altInput, id: id, count: count}})
        imgValue && modalInfo.img && dispatch({type: actionImg, info: {text: modalInfo.img, id: id, count: count}})

        hrefValue && keysIdintificator && dispatch({type: 'ADD_KEY_SITE_GEN_KEYS', info: {text:inputValue}})
        visible.sites ? setVisible({...visible, sites: false}) : setVisible(false)
        setColor('');setInputValue('');setAltInput('');setModalInfo({img:''})
        // postRequest(forServerInfo)
        // console.log(forServerInfo)
        // ContactsService.setPhoneNName(modalInfo.tel, modalInfo.tel)
    }


    let clean = false

    let [distance, setDistance] = useState(0) 

   
  


        
  
    visible && rootClasses.push(cl.active) && rootContentClasses.push(cl.activeContent)
  

    return (
        <div ref={blockModal} className={rootClasses.join` `} onClick={(e)=>{e.preventDefault();setColor('');setInputValue('');setAltInput('');setModalInfo({img:''});setVisible(false)}}>

               
                    <MyFormData  isImg={isImg} id={id} count={count} typeAction={actionImg}/>
                
                <div  className={rootContentClasses.join` `} onClick={e=>e.stopPropagation()}>
                  
                 
               
                    <form action="" id='modal' className={cl.modalForm} >
                        {colorValue && <label className={cl.labelColor}>
                            <span>Выберете цвет</span>
                            <input type="color" id="head" name="head" defaultValue={'#'+color} className={cl.colorChange} onChange={e=>{setColor( e.target.value)}}/>
                        </label>
                       }

                       {imgValue && 
                        <div className={cl.imgBlock}>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            {
                                isDragActive ?
                                <p className="changeImgBlockActive" style={{'marginBottom':'25px'}}>Отпустите файлы, чтобы загрузить их</p> :
                                <p className="changeImgBlock"  style={{'marginBottom':'25px'}}>Преместите сюда изображени</p>
                            }
                        </div>
                        </div>
                        }
                        
                       
                        
                       { hrefValue && <MyInput valueInput={inputValue}  required clean={clean} classesInput={cl.modalInput} classesPlace={cl.modalPlace} place='Ссылка на страницу' setCheckInputSite={setInputValue} input={modalInfo}/>}
                       { altValue && <MyInput valueInput={altInput}  required clean={clean} classesInput={cl.modalInput} classesPlace={cl.modalPlace} place='Alt img' setCheckInputSite={setAltInput} input={modalInfo}/>}
                        <span className={cl.modalExit} onClick={e=>{e.preventDefault();setVisible(false)}}></span>
                        <div className={cl.btnBlock}>
                            <MyBtnFiled  type='submit' form='modal' classes={cl.modalBtn} onClick={e=>{addModalInfo(e);setColor('');setInputValue('');setAltInput('');setModalInfo({img:''}); clean = true; }}>ОТПРАВИТЬ</MyBtnFiled>
                        </div>
                    </form>
                </div>
           
        </div>
    )
}

export default MyAdminModal