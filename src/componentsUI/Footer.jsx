import React, {useState} from "react";
import cl from '../style/Footer.module.css';
import FooterItem from "./FooterItem";
import MyBtnBlank from "./UI/buttonborder/MyBtnBlank"; 
import MyMail from "./UI/mail/MyMail";
import MyBtnFiled from "./UI/buttonback/MyBtnFiled";
import MyModal from "./UI/modal/MyModal";
import MyInput from "./UI/input/MyInput";
import MyMask from "./UI/maskinput/MyMask";
import ContactsService from "../API/ContactsService";
import Link from "next/link";
import MyThxModal from "./UI/thxmodal/MyThxModal";
import Image from "next/image";

const Footer = () => {

    const [modalInfo, setModalInfo] = useState({namePerson: '', tel: ''})

    let forServerInfo = {}

    const addModalInfo = (e) => {
        e.preventDefault();
        setModal(false);
        const newModal = {
            ...modalInfo, id: Date.now()
        }
        forServerInfo = {...newModal}
        setModalInfo({namePerson: '', tel: ''})
        ContactsService.setPhoneNName(modalInfo.tel, modalInfo.tel)
    }


    const [modal, setModal] = useState(false)
    const [thxModal, setThxModal] = useState(false)

    const infoItem = [{
        title: 'Продвижение сайтов',
        titleClass: cl.footerCItitleD,
        page: '/seo',
        info: [{link: 'Калькулятор стоимости', class: cl.footerCIItemD}, {
            link: 'Позиции в ТОП-10',
            class: cl.footerCIItemD
        }, {link: 'Оплата за трафик', class: cl.footerCIItemD}, {
            link: 'Оплата за лиды',
            class: cl.footerCIItemD
        }, {link: 'Интернет-магазин', class: cl.footerCIItemD}, {
            link: 'Молодым сайтам',
            class: cl.footerCIItemD
        }, {link: 'Комплексное продвижение', class: cl.footerCIItemD}, {
            link: 'Зарубежное SEO',
            class: cl.footerCIItemD
        }, {link: 'SEO-копирайтинг', class: cl.footerCIItemD}, {
            link: 'Продвижение в маркетплейсах',
            class: cl.footerCIItemD,
            page: '/marketplace-seo'
        }, {link: 'Smart-SEO. Быстрый CPA', class: cl.footerCIItemD}]
    },
        {
            title: 'Социальный маркетинг',
            titleClass: cl.footerCItitleD,
            page: '/crm-develop',
            info: [{link: 'Продвижение в социальных сетях', class: cl.footerCIItemD}, {
                link: 'Создание и ведение групп',
                class: cl.footerCIItemD
            }, {link: 'Управление репутацией SERM', class: cl.footerCIItemB}, {
                link: 'ORM',
                class: cl.footerCIItemD
            }, {link: 'Таргетированная реклама', class: cl.footerCIItemD}, {
                link: 'Партизанский маркетинг',
                class: cl.footerCIItemD
            }, {link: 'E-mail маркетинг', class: cl.footerCIItemD}]
        },
        {
            title: 'Контекстная реклама',
            titleClass: cl.footerCItitleD,
            info: [{link: 'Яндекс.Директ', class: cl.footerCIItemD}, {
                link: 'Google Adwords',
                class: cl.footerCIItemD
            }, {link: 'Медийная реклама', class: cl.footerCIItemD}]
        },
        {
            title: 'Аудиты и аналитика',
            titleClass: cl.footerCItitleD,
            info: [{link: 'SEO-аудит', class: cl.footerCIItemD}, {
                link: 'Технический аудит',
                class: cl.footerCIItemD
            }, {link: 'Коммерчесикй аудит', class: cl.footerCIItemD}, {
                link: 'Юзабилити аудит',
                class: cl.footerCIItemD
            }, {
                link: 'Создание системы сквозной аналитики',
                class: cl.footerCIItemM
            }, {link: 'Комплексная web-аналитика', class: cl.footerCIItemD}, {
                link: 'Настройка счетчиков',
                class: cl.footerCIItemD
            }]
        },
        {
            title: 'Меню',
            titleClass: cl.footerCItitleB,
            info: [{link: 'Услуги', class: cl.footerCIItemUM}, {
                link: 'Кейсы',
                class: cl.footerCIItemB,
                page: '/keys'
            }, {link: 'Тарифы', class: cl.footerCIItemB}, {
                link: 'О компании',
                class: cl.footerCIItemUM,
                page: '/about'
            }, {link: 'Вакансии', class: cl.footerCIItemUM,  page: '/vacancy'}, {
                link: 'Отзывы',
                class: cl.footerCIItemUM,
                page: '/reviews'
            }, {link: 'Контакты', class: cl.footerCIItemD,page: '/contacts'}]
        },
        {
            title: 'Разработка и развитие',
            titleClass: cl.footerCItitleD,
            info: [{link: 'Создание сайтов', class: cl.footerCIItemB}, {
                link: 'Техническая поддержка сайтов',
                class: cl.footerCIItemB
            }, {
                link: 'Создание мобильного приложения',
                page: '/mobile-develop',
                class: cl.footerCIItemB
            }, {
                link: 'Модернизация и поддержка приложений',
                class: cl.footerCIItemB
            }, {link: 'Продвижение мобильных приложений', class: cl.footerCIItemB}]
        }]

    return (
        <footer className={cl.footer}>
            <div className="container">
                <div className={cl.footerContent}>
                    <nav className={cl.footerMainList}>
                        <li className={cl.footerItem}>
                            <div className={cl.footerIMainInfo}>
                                <Link href="/" className={cl.achorMain}>
                                    <div className={cl.footerILogoBlock}>
                                        <div className={cl.company}>
                                            <div className={cl.logoWrap}>
                                                <Image width={42} height={43} className={cl.logo} src={`/img/logo-header.svg`} alt="logo"/>
                                            </div>
                                            <div className={cl.companyWrap}>
                                                <p className={cl.name}>IT-INDUSTRIAL</p>
                                                <p className={cl.whoWe}>интерактивное агентство</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <a href="" className={cl.footerumber}>+7(925) 117-00-46</a>
                                <MyMail href="mailto:info@it-industriul.ru"
                                        classes={cl.mail}>info@it-industriul.ru</MyMail>
                                <MyBtnBlank classes={cl.footerBtn} onClick={e => {
                                    e.preventDefault(e);
                                    setModal(true)
                                }}>Оставить заявку</MyBtnBlank>
                                <div className={cl.footerSocialBlock}>
                                    <span className={cl.textUs_span}>Написать нам:</span>
                                    <div className={cl.iconBlock}>
                                        <a href='#' className={cl.iconFirst}>
                                            <span className={[cl.icon, cl.whatsapp].join` `}>
                                                <svg width="18" height="18" viewBox="0 0 18 18"  fill="#969494" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.15561 0.212524H9.15124C4.32934 0.212524 0.408203 4.13476 0.408203 8.95775C0.408203 10.8708 1.02474 12.6439 2.07307 14.0835L0.983202 17.3324L4.34465 16.2578C5.72749 17.1739 7.37705 17.703 9.15561 17.703C13.9775 17.703 17.8986 13.7796 17.8986 8.95775C17.8986 4.13585 13.9775 0.212524 9.15561 0.212524ZM14.2442 12.5619C14.0333 13.1576 13.1959 13.6517 12.528 13.796C12.0711 13.8933 11.4742 13.9709 9.46497 13.138C6.89497 12.0732 5.23994 9.46169 5.11095 9.29225C4.98742 9.12281 4.07245 7.90941 4.07245 6.65447C4.07245 5.39954 4.70976 4.78846 4.96665 4.52611C5.17763 4.31075 5.52634 4.21237 5.86085 4.21237C5.96907 4.21237 6.06636 4.21784 6.15381 4.22221C6.41071 4.23314 6.5397 4.24845 6.70914 4.654C6.92011 5.16232 7.4339 6.41726 7.49511 6.54625C7.55742 6.67524 7.61973 6.85015 7.53228 7.01959C7.45029 7.19449 7.37815 7.27211 7.24915 7.42077C7.12016 7.56944 6.99773 7.68313 6.86874 7.84273C6.75068 7.98156 6.61731 8.13023 6.76598 8.38712C6.91465 8.63855 7.42843 9.47699 8.18489 10.1504C9.16108 11.0194 9.95252 11.2971 10.2356 11.4152C10.4466 11.5026 10.6981 11.4818 10.8522 11.3179C11.0479 11.1069 11.2894 10.7571 11.5354 10.4127C11.7103 10.1657 11.9311 10.1351 12.1629 10.2225C12.399 10.3045 13.6485 10.9221 13.9054 11.05C14.1623 11.179 14.3317 11.2403 14.394 11.3485C14.4552 11.4567 14.4552 11.965 14.2442 12.5619Z"/>
                                                </svg>
                                            </span>
                                        </a>
                                        <a href='#' className={cl.iconSec}>
                                            <span className={[cl.icon, cl.tg].join` `}>
                                                <svg width="20" height="17" fill="#969494" viewBox="0 0 20 17"  xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.21605 11.3189L7.89719 15.8039C8.35339 15.8039 8.55098 15.6079 8.78792 15.3726L10.9268 13.3285L15.3587 16.5742C16.1716 17.0272 16.7442 16.7886 16.9635 15.8264L19.8726 2.19479L19.8734 2.19399C20.1313 0.992429 19.4389 0.522568 18.647 0.817336L1.54723 7.36407C0.380208 7.81706 0.397878 8.46764 1.34885 8.76241L5.72056 10.1222L15.8752 3.76823C16.3531 3.45177 16.7876 3.62687 16.4302 3.94332L8.21605 11.3189Z"/>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={cl.footerItem}>
                            <div className={cl.footerIPromotion}>
                                <ul className={cl.footerIList}>
                                    <FooterItem titleClass={infoItem[0].titleClass} page={infoItem[0].page} title={infoItem[0].title}
                                                info={infoItem[0].info}/>
                                </ul>
                                <ul className={cl.footerIList}>
                                    <FooterItem titleClass={infoItem[1].titleClass} page={infoItem[1].page} title={infoItem[1].title}
                                                info={infoItem[1].info}/>
                                </ul>
                            </div>
                        </li>
                        <li className={cl.footerItem}>
                            <div className={cl.footerIAd}>
                                <ul className={cl.footerIList}>
                                    <FooterItem titleClass={infoItem[2].titleClass} page={infoItem[2].page} title={infoItem[2].title}
                                                info={infoItem[2].info}/>
                                </ul>
                                <ul className={cl.footerIList}>
                                    <FooterItem titleClass={infoItem[3].titleClass} page={infoItem[3].page} title={infoItem[3].title}
                                                info={infoItem[3].info}/>
                                </ul>
                                <ul className={cl.footerIList}>
                                    <FooterItem titleClass={infoItem[4].titleClass} page={infoItem[4].page} title={infoItem[4].title}
                                                info={infoItem[4].info}/>
                                </ul>
                            </div>
                        </li>
                        <li className={[cl.footerItem, cl.footerFI].join` `}>
                            <div className={cl.footerIDev}>
                                <ul className={[cl.footerIList].join` `}>
                                    <FooterItem titleClass={infoItem[5].titleClass} page={infoItem[5].page} title={infoItem[5].title} info={infoItem[5].info}/>
                                </ul>
                            </div>
                        </li>
                    </nav>
                </div>
            </div>
            <div className={cl.footerUnderContent}>
                <div className="container">
                    <div className={cl.footerUnderBlock}>
                        <p className={cl.footerUnderLeft}>©Все права защищены 2022</p>
                        <p className={cl.footerUnderRight}>Политика конфеденциальности</p>
                    </div>
                </div>
            </div>
            <MyModal  visible={modal} setVisible={setModal} title='Оставить заявку' setThx={setThxModal}/>
            <MyThxModal visible={thxModal} setVisible={setThxModal}/>
        </footer>

    )
}

export default Footer
