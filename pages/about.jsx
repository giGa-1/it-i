import React, { useEffect, useRef } from 'react';
import AboutSimple from '../src/componentsUI/aboutP/AboutSimple';
import AboutText from '../src/componentsUI/aboutP/AboutText';
import MainApplication from '../src/componentsUI/mainP/MainApplication';
import NavPagesHead from '../src/componentsUI/UI/navpage/MyNavPages';
import Container from '../src/componentsUI/Container';
import { CheckAdminKey } from '../src/untils/checkAdminKey';

const AboutCompanyPage = ()=>{
    CheckAdminKey()
    const aboutI = useRef('')
    const infoNav = [{text: 'О компании'}]
    useEffect(()=>{
        document.body.scrollTo({top:0,behavior:'smooth'})
        aboutI.current.classList.toggle('aboutI')
    },[aboutI])
    return (
        <>
            <Container>
                <main ref={aboutI} className='about'>
                        <NavPagesHead navItems={infoNav}/>
                        <AboutText/>
                        <AboutSimple/>
                        <MainApplication/>
                </main>
            </Container>
        </>
       
    )
}

export default AboutCompanyPage 