import React from 'react';
import cl from '/src/style/404.module.css'
import MyBtnFiled from "../src/componentsUI/UI/buttonback/MyBtnFiled";
const notFound = () => {
    return (
        <div className={cl.container}>
            <h1 className={cl.status}><b>4<span className={cl.zero}>0</span>4</b></h1>
            <h1 className={cl.title}><strong>К сожалению, данной страницы не существует</strong></h1>
            <a className={cl.href} href="/">
            <MyBtnFiled classes={cl.btn} >На домашнею страницу</MyBtnFiled>
            </a>
        </div>
    );
};

export default notFound;