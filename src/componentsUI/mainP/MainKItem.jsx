import Link from "next/link";
import React, {useState}  from "react";
import cl from '../../style/MainKeys.module.css';
import MyViewElement from "../UI/viewelement/MyViewElement";
import { useSelector } from "react-redux";
import MyAdminInput from "../UI/admininput/MyAdminInput";
import MyDeleteElement from "../UI/admindelel/MyDeleteElement";
// import img from "next/img";

const MainKItem = ({count, infoArr, id, modalInfoChanging,premissionTariff, setModal, modalInfo})=>{
    <MyDeleteElement typeAction={'DELETE_KEYS_MAIN_ITEM_ELEMENT'} id={id}/>
    const [sizeInfo, setSizeInfo] = useState({descr: {width:0,height:0}})
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)

//  {premission=='200'&&

    return (
        <li className={cl.keysItem}>
            {isAdmin&&<MyDeleteElement id={id} typeAction={'DELETE_KEYS_MAIN_ITEM_ELEMENT'}></MyDeleteElement>}
            {count === 2 ?
                <div className={cl.keysIContentS}>
                    <MyViewElement element={

                            <figure  alt={infoArr[0].alt} className={cl.keysILeft} >
                                {isAdmin&&<span className={cl.changeItem} onClick={e=>{setModal(true);modalInfoChanging({...modalInfo,href: infoArr[0].href,color:infoArr[0].backColor, alt:infoArr[0].alt, id: id, count: 1})}}>ИЗМЕНИТЬ</span>}
                                 <Link href={'/keys/' + infoArr[0].href}>
                                {infoArr[0].classes == cl.imgEva ?  <div className={[cl.evaBlock, cl.img].join` `} style={{backgroundColor: infoArr[0].backColor}} onClick={e=>document.body.scrollTo({top:0,behavior:'smooth'})}>
                                    {premissionTariff=="200"&&<img src={`/img/${infoArr[0].img[0]}`} alt="logo Ekovtor" className={[cl.evaLogo].join` `}/>}
                                    {premissionTariff=="200"&&<img src={`/img/${infoArr[0].img[1]}`} alt="female Ekovtor" className={[cl.femaleimgSort].join` `}/>}
                                    {premissionTariff=="200"&&<img src={`/img/${infoArr[0].img[2]}`} alt='ekoM' className={[cl.ekoM].join` `}/>}
                                </div>
                                :
                                <div className={cl.imgCardWrapper} style={{backgroundColor: infoArr[0].backColor}} onClick={e=>document.body.scrollTo({top:0,behavior:'smooth'})}>
                                    <img src={`/img/${infoArr[0].img[0]}`} alt='info'   className={[cl.keysImg, infoArr[0].classes, cl.img ].join` `}/>
                                </div>}
                                </Link>
                                {
                                      isAdmin&&premissionTariff=='200' ?
                                      <MyAdminInput width={sizeInfo.descr.width} id={id} count={1} height={sizeInfo.descr.height} typeAction={'DESCR_KEYS_MAIN_ITEM_ELEMENT'}>
                                          <figcaption className={cl.keysIDescr} onClick={e=>{e.preventDefault();setSizeInfo({...sizeInfo, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}}>{infoArr[0].descr}</figcaption>
                                      </MyAdminInput>
                                      :
                                      <figcaption className={cl.keysIDescr}>{infoArr[0].descr}</figcaption>
                                }

                            </figure>

                    }/>
                    <MyViewElement element={

                        <figure alt={infoArr[1].alt} className={cl.keysIRight} >
                             {isAdmin&&<span className={cl.changeItem} onClick={e=>{setModal(true);modalInfoChanging({...modalInfo,href: infoArr[1].href,color:infoArr[1].backColor, alt:infoArr[1].alt, id: id, count: 2})}}>ИЗМЕНИТЬ</span>}
                              <Link href={'/keys/' + infoArr[1].href}>
                            {infoArr[1].classes == cl.imgMiniPad ?
                            <div className={[cl.padBlock, cl.img].join` `} style={{backgroundColor: infoArr[1].backColor}} onClick={e=>document.body.scrollTo({top:0,behavior:'smooth'})}>
                                {premissionTariff=="200"&&<img src={`/img/${infoArr[1].img[0]}`} alt='photo'  className={[infoArr[1].classes].join` `}/>}
                            </div>
                            :
                            <div className={cl.imgCardWrapper} style={{backgroundColor: infoArr[1].backColor}} onClick={e=>document.body.scrollTo({top:0,behavior:'smooth'})}>
                             {premissionTariff=="200"&&<img src={`/img/${infoArr[1].img[0]}`}alt='photo'  className={[cl.keysImg, infoArr[1].classes, cl.img].join` `}/>}
                            </div>  }
                            </Link>
                                {
                                      isAdmin&&premissionTariff=="200" ?
                                      <MyAdminInput width={sizeInfo.descr.width} id={id} count={2} height={sizeInfo.descr.height} typeAction={'DESCR_KEYS_MAIN_ITEM_ELEMENT'}>
                                          <figcaption className={cl.keysIDescr} onClick={e=>setSizeInfo({...sizeInfo, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{infoArr[1].descr}</figcaption>
                                      </MyAdminInput>
                                      :
                                      <figcaption className={cl.keysIDescr}>{infoArr[1].descr}</figcaption>
                                }

                        </figure>

                    }/>
                </div>
            :
                <MyViewElement element={

                    <figure  alt={infoArr[0].alt}  className={cl.keysIContentF}  >
                         {isAdmin&&<span className={cl.changeItem} onClick={e=>{setModal(true);modalInfoChanging({...modalInfo,href: infoArr[0].href,color:infoArr[0].backColor, alt:infoArr[0].alt, id: id, count: 1})}}>ИЗМЕНИТЬ</span>}
                          <Link href={'/keys/' + infoArr[0].href} >
                        <div className={[cl.keysImgBlockF, cl.img].join` `} style={{backgroundColor: infoArr[0].backColor}} onClick={e=>document.body.scrollTo({top:0,behavior:'smooth'})}>
                        {premissionTariff=="200"&&<img src={`/img/${infoArr[0].img[0]}`} className={[cl.keysImg, infoArr[0].classes[0]].join` `}/>}
                        {premissionTariff=="200"&& <img src={`/img/${infoArr[0].img[0]}`} className={[cl.keysImg, infoArr[0].classes[1]].join` `}/>}
                        </div>
                        </Link>
                            {
                                    isAdmin &&premissionTariff=="200" ?
                                    <MyAdminInput width={sizeInfo.descr.width} id={id} count={1} height={sizeInfo.descr.height} typeAction={'DESCR_KEYS_MAIN_ITEM_ELEMENT'}>
                                        <figcaption className={cl.keysIDescr} onClick={e=>setSizeInfo({...sizeInfo, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{infoArr[0].descr}</figcaption>
                                    </MyAdminInput>
                                    :
                                    <figcaption className={cl.keysIDescr}>{infoArr[0].descr}</figcaption>
                            }

                    </figure>

                }/>
            }
        </li>
    )
}

export default MainKItem
