import React, {useEffect, useMemo, useRef, useState} from "react";
import Link from "next/link";
import cl from '../style/Header.module.css';

import MyMail from "./UI/mail/MyMail";
import MyBtnFiled from "./UI/buttonback/MyBtnFiled";
import MyNavLink from "./UI/navlink/MyNavLink";
import MyModal from "./UI/modal/MyModal";
import HeaderNav from "./HeaderNav";

import MyThxModal from "./UI/thxmodal/MyThxModal";
let deferredPrompt;


const Header = () => {
    const [installable, setInstallable] = useState(false);
    const [pwa, pwaSet] = useState(false)
    const [pwaDown, setPwaDown] = useState(false)
    const [deferredPrompt, setDeferredPrompt] = useState('')

    
    useEffect(() => {

        pwaSet(localStorage.getItem('pwaSet'))
        window.addEventListener("beforeinstallprompt", (e) => {
         
            e.preventDefault();
            setDeferredPrompt(e)
            // Stash the event so it can be triggered later.
            // Update UI notify the user they can install the PWA
            setInstallable(true);
        });

        window.addEventListener('appinstalled', () => {
            // Log install to analytics
          
        });
    }, [pwa]);

    const handleInstallClick = (e) => {
        // Hide the app provided install promotion
        setInstallable(false);
        // Show the install prompt
        try {
        
        console.log(deferredPrompt)
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                localStorage.setItem('pwaSet', true)
                pwaSet(true)
            } else {
                console.log('User dismissed the install prompt');
            }
        });
        } catch (err) {
           console.log(err)
        }
    };
 
    const [burger, setBurger] = useState(false)
    const headerI = useRef('')
    const topHeader = useRef('')



    const [navItem, setNavItem] = useState(false)
    const [arrowItem, setArrowItem] = useState(false)
    const [modal, setModal] = useState(false)
    const [thxModal, setThxModal] = useState(false)
    const headerNavV = [cl.nav_span]
    const [docItem, setDocItem] = useState(false)

    useMemo(()=>{
        setArrowItem(!arrowItem)
    },[navItem])

    const navActive = (e)=>{
        // e.preventDefault()
        // arrowItem.current.classList.toggle(cl.navArrowActive)
        setNavItem(!navItem)
        // e.target.classList.toggle(cl.activeNav)
    }

    useEffect(()=>{setDocItem(true)},[docItem])

    useMemo(()=>{
        if(burger && docItem)  {document.body.classList.add('desable-scroll-h')
        document.documentElement.classList.add('html-overflow')}
        if(!burger && docItem)   {document.documentElement.classList.remove('html-overflow')
        document.body.classList.remove('desable-scroll-h')}
    },[burger])

    useMemo(()=>{
        if(navItem && docItem) {
            document.body.classList.add('desable-scroll-h');
            document.documentElement.classList.add('html-overflow')
        }
        if(!navItem && docItem) {
            document.documentElement.classList.remove('html-overflow')
            document.body.classList.remove('desable-scroll-h');
        }
    },[navItem])

    

   

    let  tempScrollTop, currentScrollTop = 0

    useEffect(()=>{

        document.body.addEventListener('scroll', (el)=>{
            currentScrollTop = document.body.scrollTop
            if (typeof window !== 'undefined') {
            if(topHeader.current !== null) if (window.innerWidth > 768 && tempScrollTop < currentScrollTop && !topHeader.current.classList.contains(cl.topHeaderActive)) {topHeader.current.classList.add(cl.topHeaderActive); headerI.current.classList.add(cl.headerActive)}
            if(topHeader.current !== null) if (window.innerWidth > 768 && tempScrollTop > currentScrollTop && topHeader.current.classList.contains(cl.topHeaderActive)) {topHeader.current.classList.remove(cl.topHeaderActive);  headerI.current.classList.remove(cl.headerActive)}
            tempScrollTop = currentScrollTop
            }
        })
    },[topHeader])


    useEffect(()=>{
        headerI.current.classList.add(cl.headerL)
    },[headerI])

    const scrollTopPage = ()=>{
        document.body.scrollTo({top:0,behavior:'smooth'})
    }

    return (
        <header ref={headerI} className={cl.header}>
            <div className={cl.topCard}>
                <div className="container">
                    <div  className={cl.topHeader}>
                        <div className={cl.topList}>
                            <Link href='/about' >
                                <a className={[cl.links, cl.fLink].join` `} >О компании</a>
                            </Link>
                            <Link href='/reviews'><a className={cl.links } onClick={()=>scrollTopPage}>
                                Отзывы
                                </a></Link>
                            <Link href='/vacancy'><a className={cl.links} onClick={()=>scrollTopPage} >Вакансии</a></Link>
                        </div>
                        <div className={cl.topLinks}>
                            <div className={cl.textUs}>
                                <MyMail href="mailto:info@it-industriul.ru" classes={cl.mail}>info@it-industriul.ru</MyMail>
                                <span className={cl.textUs_span}>Написать нам:</span>

                                    <div className={cl.iconBlock}>
                                        <div className={cl.iconFirst}>
                                            <a href="#">
                                                <span className={[cl.icon, cl.whatsapp].join` `}>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="#ACB8C0" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.15561 0.212524H9.15124C4.32934 0.212524 0.408203 4.13476 0.408203 8.95775C0.408203 10.8708 1.02474 12.6439 2.07307 14.0835L0.983202 17.3324L4.34465 16.2578C5.72749 17.1739 7.37705 17.703 9.15561 17.703C13.9775 17.703 17.8986 13.7796 17.8986 8.95775C17.8986 4.13585 13.9775 0.212524 9.15561 0.212524ZM14.2442 12.5619C14.0333 13.1576 13.1959 13.6517 12.528 13.796C12.0711 13.8933 11.4742 13.9709 9.46497 13.138C6.89497 12.0732 5.23994 9.46169 5.11095 9.29225C4.98742 9.12281 4.07245 7.90941 4.07245 6.65447C4.07245 5.39954 4.70976 4.78846 4.96665 4.52611C5.17763 4.31075 5.52634 4.21237 5.86085 4.21237C5.96907 4.21237 6.06636 4.21784 6.15381 4.22221C6.41071 4.23314 6.5397 4.24845 6.70914 4.654C6.92011 5.16232 7.4339 6.41726 7.49511 6.54625C7.55742 6.67524 7.61973 6.85015 7.53228 7.01959C7.45029 7.19449 7.37815 7.27211 7.24915 7.42077C7.12016 7.56944 6.99773 7.68313 6.86874 7.84273C6.75068 7.98156 6.61731 8.13023 6.76598 8.38712C6.91465 8.63855 7.42843 9.47699 8.18489 10.1504C9.16108 11.0194 9.95252 11.2971 10.2356 11.4152C10.4466 11.5026 10.6981 11.4818 10.8522 11.3179C11.0479 11.1069 11.2894 10.7571 11.5354 10.4127C11.7103 10.1657 11.9311 10.1351 12.1629 10.2225C12.399 10.3045 13.6485 10.9221 13.9054 11.05C14.1623 11.179 14.3317 11.2403 14.394 11.3485C14.4552 11.4567 14.4552 11.965 14.2442 12.5619Z"/>
                                                    </svg>
                                                </span>
                                            </a>

                                        </div>
                                        <div className={cl.iconSec}>
                                            <a href="#">
                                                <span className={[cl.icon, cl.tg].join` `}>
                                                    <svg width="20" height="17"  viewBox="0 0 20 17" fill="#ACB8C0" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.21605 11.3189L7.89719 15.8039C8.35339 15.8039 8.55098 15.6079 8.78792 15.3726L10.9268 13.3285L15.3587 16.5742C16.1716 17.0272 16.7442 16.7886 16.9635 15.8264L19.8726 2.19479L19.8734 2.19399C20.1313 0.992429 19.4389 0.522568 18.647 0.817336L1.54723 7.36407C0.380208 7.81706 0.397878 8.46764 1.34885 8.76241L5.72056 10.1222L15.8752 3.76823C16.3531 3.45177 16.7876 3.62687 16.4302 3.94332L8.21605 11.3189Z" />
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={topHeader} className={["container",  cl.headerI].join` `}>
            <HeaderNav  headerNav={navItem} setHeaderNav={setNavItem} setBurgerItem={setBurger} mainBlock={cl.navBlockMain}/>
                <div className={cl.defaultHeader}>
                <div className={cl.clear}></div>
                <div className={cl.bottomHeader}>
                    <Link href='/' className={cl.achorMain}>
                        <div className={cl.company}  onClick={scrollTopPage}>
                            <div className={cl.logoWrap}>
                                <span className={cl.logo}></span>
                            </div>
                            <div className={cl.companyWrap}>
                                <p className={cl.name}>IT-INDUSTRIAL</p>
                                <p className={cl.whoWe}>интерактивное агентство</p>
                            </div>
                        </div>
                    </Link>

                    <div className={cl.changeitem}>
                        <nav className={cl.nav}>
                            <div className={!arrowItem ? [cl.navBlock,cl.navArrowActive].join` `:cl.navBlock}>
                                <MyNavLink classes={cl.nav_span} onClick={e=>navActive(e)}>Услуги</MyNavLink>
                                <span className={cl.navArrow}>
                                    <svg width="8" height="6" fill="#4C6171" viewBox="0 0 8 6"  xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.56289 0.966217L4.13341 3.55246L6.70393 0.966217L7.56077 1.8283L4.13341 5.27663L0.706055 1.8283L1.56289 0.966217Z" />
                                    </svg>
                                </span>
                            </div>
                            <Link href='/keys' onClick={scrollTopPage} className={cl.navPage}>
                                <MyNavLink classes={cl.nav_span}>Кейсы</MyNavLink>
                            </Link>
                            <Link href='/tariffs' onClick={scrollTopPage}>
                                <MyNavLink classes={cl.nav_span}>Тарифы</MyNavLink>
                            </Link>
                            <Link href='/contacts'>
                                <MyNavLink classes={cl.nav_span}>Контакты</MyNavLink>
                            </Link>
                        </nav>

                        <div className={cl.fix}>
                            <MyMail href="mailto:info@it-industriul.ru" classes={cl.mail}>info@it-industriul.ru</MyMail>
                            <div className={cl.fixLinks}>
                                <span className={[cl.textUs_span, cl.textUs_spanF].join` `}>Написать&nbsp;нам:</span>
                                <div className={cl.iconBlock}>

                                        <a href="#">
                                            <span className={[cl.icon, cl.whatsapp].join` `}>
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="#ACB8C0" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.15561 0.212524H9.15124C4.32934 0.212524 0.408203 4.13476 0.408203 8.95775C0.408203 10.8708 1.02474 12.6439 2.07307 14.0835L0.983202 17.3324L4.34465 16.2578C5.72749 17.1739 7.37705 17.703 9.15561 17.703C13.9775 17.703 17.8986 13.7796 17.8986 8.95775C17.8986 4.13585 13.9775 0.212524 9.15561 0.212524ZM14.2442 12.5619C14.0333 13.1576 13.1959 13.6517 12.528 13.796C12.0711 13.8933 11.4742 13.9709 9.46497 13.138C6.89497 12.0732 5.23994 9.46169 5.11095 9.29225C4.98742 9.12281 4.07245 7.90941 4.07245 6.65447C4.07245 5.39954 4.70976 4.78846 4.96665 4.52611C5.17763 4.31075 5.52634 4.21237 5.86085 4.21237C5.96907 4.21237 6.06636 4.21784 6.15381 4.22221C6.41071 4.23314 6.5397 4.24845 6.70914 4.654C6.92011 5.16232 7.4339 6.41726 7.49511 6.54625C7.55742 6.67524 7.61973 6.85015 7.53228 7.01959C7.45029 7.19449 7.37815 7.27211 7.24915 7.42077C7.12016 7.56944 6.99773 7.68313 6.86874 7.84273C6.75068 7.98156 6.61731 8.13023 6.76598 8.38712C6.91465 8.63855 7.42843 9.47699 8.18489 10.1504C9.16108 11.0194 9.95252 11.2971 10.2356 11.4152C10.4466 11.5026 10.6981 11.4818 10.8522 11.3179C11.0479 11.1069 11.2894 10.7571 11.5354 10.4127C11.7103 10.1657 11.9311 10.1351 12.1629 10.2225C12.399 10.3045 13.6485 10.9221 13.9054 11.05C14.1623 11.179 14.3317 11.2403 14.394 11.3485C14.4552 11.4567 14.4552 11.965 14.2442 12.5619Z"/>
                                                </svg>
                                            </span>
                                        </a>



                                        <a href="#">
                                            <span className={[cl.icon, cl.tg].join` `}>
                                                <svg width="20" height="17"  viewBox="0 0 20 17" fill="#ACB8C0" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.21605 11.3189L7.89719 15.8039C8.35339 15.8039 8.55098 15.6079 8.78792 15.3726L10.9268 13.3285L15.3587 16.5742C16.1716 17.0272 16.7442 16.7886 16.9635 15.8264L19.8726 2.19479L19.8734 2.19399C20.1313 0.992429 19.4389 0.522568 18.647 0.817336L1.54723 7.36407C0.380208 7.81706 0.397878 8.46764 1.34885 8.76241L5.72056 10.1222L15.8752 3.76823C16.3531 3.45177 16.7876 3.62687 16.4302 3.94332L8.21605 11.3189Z" />
                                                </svg>
                                            </span>
                                        </a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cl.numberBtnBlock}>
                        <div className={cl.numberWrap}>
                            <a href=""className={cl.number}>+7(925) 117-00-46</a>
                        </div>
                        {
                            pwa ?
                            <MyBtnFiled classes={cl.btn}  onClick={e=>setModal(true)} >оставить заявку</MyBtnFiled>:
                               <MyBtnFiled classes={cl.btn}  onClick={handleInstallClick} >НАШЕ ПРИЛОЖЕНИЕ</MyBtnFiled>
                        }

                    </div>
                            <MyModal id={'Header'} block={headerI}  visible={modal} isHeader={true} setVisible={setModal} title='Оставить заявку' setThx={setThxModal}/>
                            <MyThxModal visible={thxModal} setVisible={setThxModal} />
                        <div  className={burger ? [cl.burgerBlock, cl.burgerActive].join` ` : [cl.burgerBlock].join` `} onClick={e=>{setBurger(!burger); navActive(e); }}>
                            <span className={cl.burgerLine}></span>
                        </div>
                </div>
                </div>
            </div>
        </header>
    )
}


export default Header
