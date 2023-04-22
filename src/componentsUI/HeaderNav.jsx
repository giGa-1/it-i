import React, {useMemo, useRef} from "react";
import cl from '../style/Header.module.css';
import HeaderItem from "./HeaderItem";

const HeaderNav = ({active, headerNav, mainBlock, setHeaderNav, burgerA, setBurgerItem})=>{
    const infoItem = [{title: 'Продвижение сайтов', page: '/seo', titleClass: cl.headerCItitleD , info: [{link: 'Калькулятор стоимости', class: cl.headerCIItemD}, {link: 'Позиции в ТОП-10', class: cl.headerCIItemD}, {link: 'Оплата за трафик', class: cl.headerCIItemD}, {link: 'Оплата за лиды', class: cl.headerCIItemD}, {link: 'Интернет-магазин', class: cl.headerCIItemD}, {link: 'Молодым сайтам', class: cl.headerCIItemD}, {link: 'Комплексное продвижение', class: cl.headerCIItemD}, {link: 'Зарубежное SEO', class: cl.headerCIItemD}, {link: 'SEO-копирайтинг', class: cl.headerCIItemD}, {link: 'Продвижение в маркетплейсах', class: cl.headerCIItemD, page: '/marketplace-seo'}, {link: 'Smart-SEO. Быстрый CPA', class: cl.headerCIItemD}]},
    {title: 'Социальный маркетинг',page:'/crm-develop', titleClass: [cl.headerCItitleD, cl.headerTopCI].join` ` , info: [{link: 'Продвижение в социальных сетях', class: cl.headerCIItemD}, {link: 'Создание и ведение групп', class: cl.headerCIItemD}, {link: 'Управление репутацией SERM', class: cl.headerCIItemB}, {link: 'ORM', class: cl.headerCIItemD}, {link: 'Таргетированная реклама', class: cl.headerCIItemD}, {link: 'Партизанский маркетинг', class: cl.headerCIItemD}, {link: 'E-mail маркетинг', class: cl.headerCIItemD}]},
    {title: 'Контекстная реклама', titleClass: cl.headerCItitleD , info: [{link: 'Яндекс.Директ', class: cl.headerCIItemD}, {link: 'Google Adwords', class: cl.headerCIItemD}, {link: 'Медийная реклама', class: cl.headerCIItemD}]},
    {title: 'Аудиты и аналитика', titleClass: [cl.headerCItitleD, cl.headerTopCI].join` `  , info: [{link: 'SEO-аудит', class: cl.headerCIItemD}, {link: 'Технический аудит', class: cl.headerCIItemD}, {link: 'Коммерчесикй аудит', class: cl.headerCIItemD}, {link: 'Юзабилити аудит', class: cl.headerCIItemD}, {link: 'Создание системы сквозной аналитики', class: cl.headerCIItemM}, {link: 'Комплексная web-аналитика', class: cl.headerCIItemD}, {link: 'Настройка счетчиков', class: cl.headerCIItemD}]},
    {title: 'Разработка и развитие',titleClass: cl.headerCItitleD , info: [{link: 'Создание сайтов', class: cl.headerCIItemB},{link: 'Техническая поддержка сайтов', class: cl.headerCIItemB},{link: 'Создание мобильного приложения', class: cl.headerCIItemB, page: '/mobile-develop'},{link: 'Модернизация и поддержка приложений', class: cl.headerCIItemB},{link: 'Продвижение мобильных приложений', class: cl.headerCIItemB}]},
    {title: 'Меню', titleClass: cl.headerCItitleD , info: [{link: 'Услуги', class: cl.headerCIItemD},{link: 'Кейсы', page:'/keys', class: cl.headerCIItemB},{link: 'Тарифы', page:'/tariffs', class: cl.headerCIItemB},{link: 'О компании', page: '/about', class: cl.headerCIItemB}, {link: 'Вакансии',page:'/vacancy', class: cl.headerCIItemB}, {link: 'Отзывы', page:'/reviews',class: cl.headerCIItemB}, {link: 'Контакты',page:'/contacts', class: cl.headerCIItemB}]}]


    const classesList = [cl.headerDropList, mainBlock]
    const classesOverflow = [cl.overflow]

    useMemo(()=>{
        headerNav && classesOverflow.push(cl.overflowA)
        headerNav && classesList.push(cl.navBlockMainActive)
      
    }, [headerNav])


    return (
        <div className={classesOverflow.join` `} onClick={e=>{setHeaderNav(false);setBurgerItem(false)}}>
            <div className={classesList.join` `}>
                <div className={cl.headerDropContent}>
                    <ul className={cl.headerDropMainList}>
                        <li className={cl.headerDropItem}>
                            <div className={cl.headerDropIPromotion}>
                                <ul className={cl.headerDropIList}>
                                    <HeaderItem burgerA={burgerA} setHeaderNav={setHeaderNav} setBurgerItem={setBurgerItem} titleClass={infoItem[0].titleClass} page={infoItem[0].page} title={infoItem[0].title} info={infoItem[0].info}/>
                                </ul>
                                <ul className={cl.headerDropIList}>
                                    <HeaderItem burgerA={burgerA} setHeaderNav={setHeaderNav} setBurgerItem={setBurgerItem} titleClass={infoItem[1].titleClass} page={infoItem[1].page} title={infoItem[1].title} info={infoItem[1].info}/>
                                </ul>
                            </div>
                        </li>
                        <li className={cl.headerDropItem}>
                            <div className={cl.headerDropIAd}>
                            <ul className={cl.headerIList}>
                                        <HeaderItem  burgerA={burgerA} setHeaderNav={setHeaderNav} setBurgerItem={setBurgerItem} titleClass={infoItem[2].titleClass} page={infoItem[2].page} title={infoItem[2].title} info={infoItem[2].info}/>
                                    </ul>
                                    <ul className={cl.headerIList}>
                                        <HeaderItem   burgerA={burgerA} setHeaderNav={setHeaderNav} setBurgerItem={setBurgerItem} titleClass={infoItem[3].titleClass} page={infoItem[3].page} title={infoItem[3].title} info={infoItem[3].info}/>
                                    </ul>
                            </div>
                        </li>
                        <li className={cl.headerDropItem}>
                            <div className={cl.headerDropIDev}>
                                <ul className={cl.headerDropIList}>
                                    <HeaderItem  burgerA={burgerA} setHeaderNav={setHeaderNav} setBurgerItem={setBurgerItem}  titleClass={infoItem[4].titleClass} page={infoItem[4].page} title={infoItem[4].title} info={infoItem[4].info}/>
                                </ul>
                            </div>
                        </li>
                        <li className={[cl.headerDropItem, cl.mHeaderDropItem].join` `}>
                            <div className={cl.headerDropIDev}>
                                <ul className={cl.headerDropIList}>
                                    <HeaderItem  burgerA={burgerA} setHeaderNav={setHeaderNav} setBurgerItem={setBurgerItem} titleClass={infoItem[5].titleClass} page={infoItem[5].page} title={infoItem[5].title} info={infoItem[5].info}/>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default HeaderNav