import React, { useEffect, useRef } from "react";
import Header from '../src/componentsUI/Header';
import MainTariffContainer from "../src/componentsUI/mainP/MainTariff";
import MainQuiz from "../src/componentsUI/mainP/MainQuiz";
// import '../style/main.css'
import MainResult from "../src/componentsUI/mainP/MainResult";
import SliderContainer from "../src/componentsUI/mainP/MainSlider";
import MainApplication from "../src/componentsUI/mainP/MainApplication";
import MainOther from "../src/componentsUI/mainP/MainOther";
import MainKeys from "../src/componentsUI/mainP/MainKeys";
import MainLider from "../src/componentsUI/mainP/MainLider";
import MainSimple from "../src/componentsUI/mainP/MainSimple";
import MainQuestion from '../src/componentsUI/mainP/MainQuestion';
import Footer from "../src/componentsUI/Footer";
import MainOfferContainer from "../src/componentsUI/mainP/MainOffer";
import MainReview from "../src/componentsUI/mainP/MainReview";
import MainDevContainer from "../src/componentsUI/mainP/MainDev";
import cl from "../src/style/MainTariff.module.css";
import Container from '../src/componentsUI/Container'
import { CheckAdminKey } from '../src/untils/checkAdminKey';

const MainPage = ()=>{
    CheckAdminKey()


    const mainI = useRef('')
    useEffect(()=>{
        mainI.current.classList.toggle('mainL')
    },[mainI])
    return (
        <div>
            <Container>
            <main ref={mainI} className="main">
                <SliderContainer />

                <MainTariffContainer title={true}/>

                <MainQuiz />
                <MainApplication/>


                <MainDevContainer column={'turnkeyWebsite'}/>

                <MainOfferContainer/>
                <MainResult />

                <MainOther/>

                <MainKeys/>
                <MainLider/>
                <MainReview/>

                <MainSimple/>

                <MainQuestion/>
            </main>
            </Container>


        </div>
    )
}

export default MainPage
