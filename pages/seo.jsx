import React, { useRef, useEffect } from "react";
import MainApplication from "../src/componentsUI/mainP/MainApplication";
import MainLider from "../src/componentsUI/mainP/MainLider";
import MainOfferContainer from "../src/componentsUI/mainP/MainOffer";
import MainResult from "../src/componentsUI/mainP/MainResult";
import MainReview from "../src/componentsUI/mainP/MainReview";
import SeoMini from "../src/componentsUI/seomsc/SeoMini";
import SeoMonth from "../src/componentsUI/seomsc/SeoMonth";
import SeoQuestions from "../src/componentsUI/seomsc/SeoQuestions";
import SeoServices from "../src/componentsUI/seomsc/SeoServices";
import SeoStable from "../src/componentsUI/seomsc/SeoStable";
import MainSimple from '../src/componentsUI/mainP/MainSimple'
import MainQuestion from '../src/componentsUI/mainP/MainQuestion'
import SeoReport from '../src/componentsUI/seomsc/SeoReport'
import SeoTariff from '../src/componentsUI/seomsc/SeoTariff';
import KeysMainSeoSwiperContainer from "../src/componentsUI/seomsc/KeysMainSeoSwiper";
import MobileHero from '../src/componentsUI/MobileHero'
import Container from "../src/componentsUI/Container";
import { CheckAdminKey } from '../src/untils/checkAdminKey';


const SeoPage =()=>{
    CheckAdminKey()

    const seoI = useRef(false)
    useEffect(()=>{
        document.body.scrollTo({top:0,behavior:'smooth'})
        seoI.current.classList.toggle('seoI')
    },[seoI])
    return (
        <>
            <Container>
            <main ref={seoI} className='seo'>
                <MobileHero column='seo' actionTitle={'TITLE_SEO_HERO_CHANGE'} actionDescr={'DESCR_SEO_HERO_CHANGE'}/>
                <div className='seo-page-t'>
                   <SeoTariff/>
                </div>
                <SeoServices/>
                <KeysMainSeoSwiperContainer/>
                <SeoStable/>
                <SeoQuestions/>
                <SeoMini/>
                <SeoMonth/>
                <div className='seo-page-o' >
                   <MainOfferContainer/>
                </div>{/*</div>*/}
                <MainApplication/>
                <SeoReport/>
                <MainLider/>
                <MainReview/>
                <MainSimple/>
                <MainQuestion/>
            </main>
            </Container>
        </>
    )
}

export default SeoPage