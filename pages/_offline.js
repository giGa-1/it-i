import cl from '/src/style/offline.module.css'
import MyBtnFiled from '/src/componentsUI/UI/buttonback/MyBtnFiled';


const offline = () => (
    <>
        <div className={cl.container}>
            <img src="/icon-256x256.png" alt=""/>
            <h1 className={cl.title}>Данная страница OFFLINE!</h1>
            <h2>У вас отключен интернет, посетите данную страницу с
                включенным интернетом, после этого она будет работать offline</h2>
            <a className={cl.href} href="/">
                <MyBtnFiled classes={cl.btn} >На домашнею страницу</MyBtnFiled>
            </a>
        </div>
    </>
)

export default offline