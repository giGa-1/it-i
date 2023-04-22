import React, {useRef, useState, useEffect, useMemo, useCallback} from 'react';
import cl from '../../style/KeysMainSeo.module.css';
import {togglePhoto} from "../../../redux/keysMainSeo-redux";
import { useSelector } from "react-redux";

import KeysMainSeoInput from './KeysMainSeoInput';
import mediumZoom from 'medium-zoom';
import MyViewElement from '../UI/viewelement/MyViewElement';
import MyDeleteElement from '../UI/admindelel/MyDeleteElement';
import MyAdminInput from "../UI/admininput/MyAdminInput";
import MyInput from '../UI/input/MyInput';
import {useDropzone} from 'react-dropzone'
import MyBtnFiled from '../UI/buttonback/MyBtnFiled';
import { useDispatch } from 'react-redux';
import Image from "next/image";

import MyFormData from '../../untils/ImgFetch';

const KeysMainSeoItem = ({nameCompany,premissionLists,permit, linkCompany,id,element, beenTopTen,graphImg,topTenTitle,setModal,modalInfoChanging,trafficTitle,titleTopLeft, becameTopTen, beenTraffic, becameTraffic, schedule, index,countSchedule})=>{
    const [checkImg, setCheckImg] = useState(false)
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const imgItem = useRef('')
    const figureItem = useRef('')
    const [sizeInfo, setSizeInfo] = useState({title: {width:0,height:0}, link: {width:0,height:0},topTenTitle:{width:0,height:0},beenTopTen: {width:0,height:0},trafficTitle:{width:0,height:0}, beenTraffic: {width:0,height:0}, becameTopTen: {width:0,height:0}, becameTraffic: {width:0,height:0},countValue: {width:0,height:0},topRequests: {width:0,height:0}, titleTopLeft:{width:0,height:0}, graphName: {width:0,height:0}})
    const countArr = [schedule.max];

    const dispatch = useDispatch()

    const [modalInfo, setModalInfo] = useState({img: ''})
    const [modalChange, setModalChange] = useState(false)
    const [inputCount, setInputCount] = useState('')
    const [inputMax, setInputMax] = useState('')
    const [inputMin, setInputMin] = useState('')

   

    const max = schedule.max;
    const min = schedule.min;
    for (let i = 1; i<=10;i++){
        countArr.push(max-(~~((max - min) / 10))*i)
    }


    
    

    const confirmModal = ()=>{
        modalInfo.img && dispatch({type: 'IMG_GRAPH_KEYS_SEO_CHANGE', info: {id: id,text:modalInfo.img}})
        inputCount && dispatch({type: 'CROSSING_INPUTS_SEO_KEYS_CHANGE', info: {id: id,text:inputCount}})
        inputMax && dispatch({type: 'MAX_VALUES_SEO_KEYS_CHANGE', info: {id: id,text:inputMax}})
        inputMin && dispatch({type: 'MIN_VALUES_SEO_KEYS_CHANGE', info: {id: id,text:inputMin}})
        inputMax && dispatch({type: 'CHANGE_VALUES_SEO_KEYS_CHANGE', info: {id:id,text:true}})
        setModalChange(false)
    }

    const monthsGrey = [];
    const monthsPink = [];
    schedule.inputs.map((e,i)=> e.id <= schedule.crossing  ? monthsGrey.push(e) : monthsPink.push(e))

    const figureMove = e=>{
        let rect = e.target.getBoundingClientRect()
        let x = e.clientX - rect.left
        let y = e.clientY - rect.top
        if (typeof window !== 'undefined') {
            if (window.innerWidth > 576) {
                imgItem.current.style.transformOrigin = `${x}px ${y}px`
                imgItem.current.style.transform = `scale(2)`
            }
        }
    }
    const figureLeave = e=>{
        imgItem.current.style.transform = 'none'
    }
    const figureActive = (e)=>{
        if (typeof window !== 'undefined') {
            if (window.innerWidth <= 576) {
                e.target.classList.toggle(cl.figureActive)
            }
        }
    }

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
            setChangeImg(false)
          }
          reader.readAsArrayBuffer(file)
        })
      
        
      }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


    return (
        <MyViewElement permit={permit} element={
            <li className={cl.seoItem}>
                {isAdmin&& premissionLists == '200'  ? 
                    <MyFormData  isImg={isImg} id={id} typeAction={'IMG_GRAPH_KEYS_SEO_CHANGE'}/>
                :
                ''}
                {isAdmin && premissionLists == '200' ?<MyDeleteElement typeAction={'DELETE_KEYS_SEO_ELEMENT'} id={id}/>:''}
                {isAdmin && premissionLists == '200' ?
                 <div className={modalChange ? [cl.overlayBlock, cl.overlayActive].join` ` : cl.overlayBlock} onClick={e=>{modalChange ? setModalChange(false) : ''}}>
                 <div className={cl.modalContent} onClick={e=>e.stopPropagation()}>
                     <form id='seo' className={cl.formAdmin}>
                         <label>
                             <span className={cl.titleModal}>Количество инпутов в колонке БЫЛО</span>
                             <MyInput place='Число' setCheckInputSite={setInputCount} type={'number'}/>
                         </label>
                         <label>
                             <span className={cl.titleModal}>Максимальное значение в графике</span>
                             <MyInput place='Число' setCheckInputSite={setInputMax} type={'number'}/>
                         </label>
                         <label>
                             <span className={cl.titleModal}>Минимальное значение в графике</span>
                             <MyInput place='Число' setCheckInputSite={setInputMin} type={'number'}/>
                         </label>
                         <label>
                             <span className={cl.titleModal}>Изображение в графике</span>
                             <div {...getRootProps()}>
                                 <input {...getInputProps()} />
                                 {
                                     isDragActive ?
                                     <p className={cl.drop}>Отпустите файлы, чтобы загрузить их</p> :
                                     <p className={cl.drag}>Преместите сюда изображени</p>
                                 }
                             </div>
                         </label>
                         <MyBtnFiled onClick={e=>{e.preventDefault(); confirmModal()}}>ПОДТВЕРДИТЬ</MyBtnFiled>
                     </form>
                 </div>
             </div>
                :''}
                {isAdmin && premissionLists == '200' ?
                 <span className={cl.changeItem} onClick={e=>{setModalChange(true)}}>ИЗМЕНИТЬ</span>
                :''}
               
            <div className={cl.seoItemBlock}>
                <div className={cl.seoLeftBlock}>
                    {
                         isAdmin && premissionLists == '200' ? 
                         <MyAdminInput id={id} width={sizeInfo.title.width} fetchInfo={{item: element, category: 'KeysMainSeoPage', id: id}}  height={sizeInfo.title.height} typeAction={'NAME_KEYS_SEO_CHANGE'}>
                             <h3 className={cl.seoItemTitle}  onClick={e=>setSizeInfo({...sizeInfo, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{nameCompany}</h3>
                         </MyAdminInput>
                         :
                         <h3 className={cl.seoItemTitle}>{nameCompany}</h3>
                    }
                    {
                         isAdmin && premissionLists == '200' ? 
                         <MyAdminInput id={id} width={sizeInfo.link.width}  fetchInfo={{item: element, category: 'KeysMainSeoPage', id: id}}   height={sizeInfo.link.height} typeAction={'LINK_KEYS_SEO_CHANGE'}>
                              <a className={cl.seoItemLink} target='_blank' href={'https://' + linkCompany}  onClick={e=>{e.preventDefault();setSizeInfo({...sizeInfo, link: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}}>{linkCompany}</a>
                         </MyAdminInput>
                         :
                         <a className={cl.seoItemLink} target='_blank' href={'https://' + linkCompany}>{linkCompany}</a>
                    }

                    <div className={cl.seoChangeBlock}>
                        <div className={cl.seoChangeTop}>
                            <p className={cl.seoChangeTopTitle}>Было:</p>
                            <div className={cl.seoChangeCard}>
                                <div className={cl.seoChangeGridBlock}>
                                    {  isAdmin && premissionLists == '200' ? 
                                        <MyAdminInput id={id} width={sizeInfo.topTenTitle.width}  fetchInfo={{item: element, category: 'KeysMainSeoPage', id: id}}   height={sizeInfo.topTenTitle.height} typeAction={'TOP_TEN_TITLE_SEO_CHANGE'}>
                                             <p className={cl.seoChangeTopDescr}  onClick={e=>setSizeInfo({...sizeInfo, topTenTitle: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{topTenTitle}</p>
                                        </MyAdminInput>
                                        :
                                        <p className={cl.seoChangeTopDescr}>{topTenTitle}</p>
                                    }
                                    {  isAdmin && premissionLists == '200' ? 
                                        <MyAdminInput id={id} width={sizeInfo.beenTopTen.width}  fetchInfo={{item: element, category: 'KeysMainSeoPage', id: id}}   height={sizeInfo.beenTopTen.height} typeAction={'BEEN_TEN_SEO_CHANGE'}>
                                            <p className={cl.seoChangeTopCount} onClick={e=>setSizeInfo({...sizeInfo, beenTopTen: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{beenTopTen}</p>
                                        </MyAdminInput>
                                        :
                                        <p className={cl.seoChangeTopCount}>{beenTopTen}</p>
                                    }
                                   
                                    
                                </div>
                                <div className={cl.seoChangeGridBlock}>
                                    {  isAdmin && premissionLists == '200' ? 
                                        <MyAdminInput id={id} width={sizeInfo.trafficTitle.width}  fetchInfo={{item: element, category: 'KeysMainSeoPage', id: id}}   height={sizeInfo.trafficTitle.height} typeAction={'TRAFFIC_TITLE_SEO_CHANGE'}>
                                             <p className={cl.seoChangeTopDescr} onClick={e=>setSizeInfo({...sizeInfo, trafficTitle: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{trafficTitle}</p>
                                        </MyAdminInput>
                                        :
                                        <p className={cl.seoChangeTopDescr}>{trafficTitle}</p>
                                    }
                                    {  isAdmin && premissionLists == '200' ? 
                                        <MyAdminInput id={id} width={sizeInfo.beenTraffic.width}  fetchInfo={{item: element, category: 'KeysMainSeoPage', id: id}}   height={sizeInfo.beenTraffic.height} typeAction={'BEEN_TRAFFIS_SEO_CHANGE'}>
                                              <p className={cl.seoChangeTopCount} onClick={e=>setSizeInfo({...sizeInfo, beenTraffic: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{beenTraffic}</p>
                                        </MyAdminInput>
                                        :
                                        <p className={cl.seoChangeTopCount}>{beenTraffic}</p>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={cl.seoChangeBottom}>
                            <p className={cl.seoChangeBottomTitle}>Стало:</p>
                            <div className={cl.seoChangeCard}>
                                <div className={cl.seoChangeGridBlock}>
                                     {  isAdmin && premissionLists == '200' ? 
                                        <MyAdminInput id={id} width={sizeInfo.topTenTitle.width}  fetchInfo={{item: element, category: 'KeysMainSeoPage', id: id}}  height={sizeInfo.topTenTitle.height} typeAction={'TOP_TEN_TITLE_SEO_CHANGE'}>
                                             <p className={cl.seoChangeBottomDescr}  onClick={e=>setSizeInfo({...sizeInfo, topTenTitle: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{topTenTitle}</p>
                                        </MyAdminInput>
                                        :
                                        <p className={cl.seoChangeBottomDescr}>{topTenTitle}</p>
                                    }
                                    {  isAdmin && premissionLists == '200' ? 
                                        <MyAdminInput id={id} width={sizeInfo.becameTopTen.width}  fetchInfo={{item: element, category: 'KeysMainSeoPage', id: id}}  height={sizeInfo.becameTopTen.height} typeAction={'BECAME_TEN_SEO_CHANGE'}>
                                             <p className={cl.seoChangeBottomCount}  onClick={e=>setSizeInfo({...sizeInfo, becameTopTen: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{becameTopTen}</p>
                                        </MyAdminInput>
                                        :
                                        <p className={cl.seoChangeBottomCount}>{becameTopTen}</p>
                                    }
                                </div>
                                <div className={cl.seoChangeGridBlock}>
                                    {  isAdmin && premissionLists == '200' ? 
                                        <MyAdminInput id={id} width={sizeInfo.trafficTitle.width}  fetchInfo={{item: element, category: 'KeysMainSeoPage', id: id}}  height={sizeInfo.trafficTitle.height} typeAction={'TRAFFIC_TITLE_SEO_CHANGE'}>
                                             <p className={cl.seoChangeBottomDescr} onClick={e=>setSizeInfo({...sizeInfo, trafficTitle: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{trafficTitle}</p>
                                        </MyAdminInput>
                                        :
                                        <p className={cl.seoChangeBottomDescr}>{trafficTitle}</p>
                                    }
                                    {  isAdmin && premissionLists == '200' ? 
                                        <MyAdminInput id={id} width={sizeInfo.becameTraffic.width} fetchInfo={{item: element, category: 'KeysMainSeoPage', id: id}}   height={sizeInfo.becameTraffic.height} typeAction={'BECAME_TRAFFIS_SEO_CHANGE'}>
                                         <p className={cl.seoChangeBottomCount} onClick={e=>setSizeInfo({...sizeInfo, becameTraffic: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{becameTraffic}</p>
                                        </MyAdminInput>
                                        :
                                        <p className={cl.seoChangeBottomCount}>{becameTraffic}</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cl.seoRightBlock}>
                    {  isAdmin && premissionLists == '200' ? 
                        <MyAdminInput id={id} width={sizeInfo.titleTopLeft.width}  fetchInfo={{item: element, category: 'KeysMainSeoPage', id: id}}  height={sizeInfo.titleTopLeft.height} typeAction={'TOP_TITLE_LEFT_SEO_CHANGE'}>
                            <p className={cl.seoRightTopTen}  onClick={e=>setSizeInfo({...sizeInfo, titleTopLeft: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{titleTopLeft}</p>
                        </MyAdminInput>
                        :
                        <p className={cl.seoRightTopTen}>{titleTopLeft}</p>
                    }
                  
                    <div className={cl.seoSwitchBlock}>
                        <div className={cl.seoSwitch} onClick={ e => {e.preventDefault();e.target.classList.toggle(cl.active); setCheckImg(!checkImg)}}>
                            <span className={cl.seoSwitchitem}></span>
                        </div>
                        <p className={cl.seoSwitchDescr}>Скриншот</p>
                    </div>
                    <div>
                         
                                <div className={checkImg?[cl.activeChangeCard,cl.imgCard].join` `:cl.imgCard}>
                                  
                                    <figure ref={figureItem} className={cl.imgBlock} onClick={e=>figureActive(e)} onMouseMove={e=>figureMove(e)} onMouseLeave={e=>figureLeave(e)}>
                                    { premissionLists == '200'&&<img ref={imgItem} src={`/img/${graphImg}`} className={cl.img} id='graph'/>}
                                    </figure>
                                </div>  
                       
                          
                       
                            <div className={!checkImg?[cl.activeChangeCard,cl.seoRightCard].join` `:cl.seoRightCard}>
                                <div className={cl.seoCountBlock}>
                                    <ul className={cl.seoCountList}>
                                            {countArr.map((e, i)=><li className={cl.seoCountItem} key={i}>{e}</li>)}
                                    </ul>
                                </div>
                                <div className={cl.seoGraphBlock}>
                                    <div className={cl.seoLeftGraph}>
                                        <div className={cl.seoGraphTop}>
                                            <ul className={cl.seoGraphRightL}>
                                                {monthsGrey.map((e, i)=><li key={i} className={cl.seoGraphItem}>
                                                    <KeysMainSeoInput id={id} count={e.id} schedule={schedule} inputInfo={e} position={false}/>
                                                    {
                                                         isAdmin && premissionLists == '200' ? 
                                                         <MyAdminInput id={id} count={e.id} width={sizeInfo.graphName.width}  fetchInfo={{item: element, category: 'KeysMainSeoPage', id: id}}  height={sizeInfo.graphName.height} typeAction={'NAME_INPUTS_SEO_KEYS_CHANGE'}>
                                                              <p className={cl.seoGraphNameM}  onClick={e=>setSizeInfo({...sizeInfo, graphName: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{e.name}</p>
                                                         </MyAdminInput>
                                                         :
                                                         <p className={cl.seoGraphNameM}>{e.name}</p>
                                                    }
                                                   
                                                </li>)}
                                                
                                            </ul>
                                        </div>
                                        <div className={cl.seoGraphBottom}>БЫЛО</div>
                                    </div>
                                    <div className={cl.sepRightGraph}>
                                        <div className={cl.seoGraphTop}>
                                            <ul className={cl.seoGraphRightR}>
                                                {monthsPink.map((e,i)=><li key={i} className={cl.seoGraphItem}>
                                                    <KeysMainSeoInput id={id} count={e.id} schedule={schedule} inputInfo={e} position={true}/>
                                                    {
                                                         isAdmin && premissionLists == '200' ? 
                                                         <MyAdminInput id={id} count={e.id}  fetchInfo={{item: element, category: 'KeysMainSeoPage', id: id}}  width={sizeInfo.graphName.width}  height={sizeInfo.graphName.height} typeAction={'NAME_INPUTS_SEO_KEYS_CHANGE'}>
                                                              <p className={cl.seoGraphNameM}  onClick={e=>setSizeInfo({...sizeInfo, graphName: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{e.name}</p>
                                                         </MyAdminInput>
                                                         :
                                                         <p className={cl.seoGraphNameM}>{e.name}</p>
                                                    }
                                                </li>)}
                                            </ul>
                                        </div>
                                        <div className={cl.seoGraphBottom}>СТАЛО</div>
                                    </div>
                                </div>
                            </div>
                        
                        
                    </div>
                </div>
            </div>
        </li>
        }/>
        
    )
}

export default KeysMainSeoItem