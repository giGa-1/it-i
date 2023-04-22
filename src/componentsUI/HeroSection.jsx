import React, {useState} from 'react';
import cl from '../style/HeroSection.module.css';
import MyBtnBlank from './UI/buttonborder/MyBtnBlank';
import MyModal from './UI/modal/MyModal';
import MyThxModal from './UI/thxmodal/MyThxModal';
import { useSelector } from 'react-redux';
import MyAdminInput from './UI/admininput/MyAdminInput';
const HeroSection = ({title, descr,premissionState, classesImg, gridCl, actionTitle,columnName,stateColumn, actionDescr})=>{
    const [modal, setModal] = useState(false)
    const [thxModal, setThxModal] = useState(false)
    const {isAdmin} = useSelector(state=>state.AdminKey)
    const [heroInfo, setHeroInfo] = useState({title: {width:0,height:0}, descr: {width:0,height:0}})
    return (
        <section className={cl.section}>
        <div className="container">
            <div className={[cl.content, gridCl].join` `}>
                <div className={cl.left}>
                    {isAdmin && premissionState == '200' ?
                        <MyAdminInput width={heroInfo.title.width} fetchInfo={{item: stateColumn,id: columnName, category: 'mobileHero'}} height={heroInfo.title.height} typeAction={actionTitle}>
                            <h1 className={cl.title} onClick={e=>setHeroInfo({...heroInfo, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{title}</h1>
                        </MyAdminInput>
                    :
                        <h1 className={cl.title}>{title}</h1>
                    }
                    {isAdmin && premissionState == '200' ?
                        <MyAdminInput width={heroInfo.descr.width} height={heroInfo.descr.height} typeAction={actionDescr}>
                            <p className={cl.descr}  onClick={e=>setHeroInfo({...heroInfo, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{descr}</p>
                        </MyAdminInput>
                    :
                        <p className={cl.descr}>{descr}</p>
                    }
                   
                    <MyBtnBlank classes={cl.btn} onClick={e => {
                        e.preventDefault(e);
                        setModal(true)
                    }}>получить консультацию</MyBtnBlank>
                </div>
                <div className={cl.right}>
                    <div className={[cl.img,classesImg].join` `}></div>
                </div>
            </div>
        </div>
        <MyModal visible={modal} id={columnName} setVisible={setModal} title='Оставить заявку' setThx={setThxModal}/>
        <MyThxModal visible={thxModal} setVisible={setThxModal} />
    </section>
    )
}

export default HeroSection