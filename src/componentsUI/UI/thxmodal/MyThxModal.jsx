import React, {useMemo} from "react";
import cl from './MyThxModal.module.css';

const MyThxModal = ({visible, setVisible})=>{
    const rootClasses = [cl.modalBlock]
    const rootContentClasses = [cl.modalContent]
    visible && rootClasses.push(cl.active) && rootContentClasses.push(cl.activeContent)
    // useMemo(()=>{
    //     if (visible){
    //         document.body.classList.add('desable-scroll');
    //         document.documentElement.classList.add('html-overflow')
    //         rootContentClasses.push(cl.contentM)
    //     }else{
    //         // rootContentClasses.pop(cl.contentM)
    //         document.documentElement.classList.remove('html-overflow')
    //         document.body.classList.remove('desable-scroll');
    //     }},[visible])
    return (
        <div className={rootClasses.join` `} onClick={(e)=>{e.preventDefault();setVisible(false)}}>
            <div className={rootContentClasses.join` `} onClick={e=>e.stopPropagation()}>
                    <h2 className={cl.modalTitle}>Спасибо</h2>
                    <p className={cl.modalDescr}>Ваша заявка принята. Ожидайте звонка менеджера</p>
                <span className={cl.modalExit} onClick={e=>{e.preventDefault();setVisible(false)}}></span>
            </div>
        </div>
    )
}

export default MyThxModal