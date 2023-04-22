import React, {useRef, useEffect} from "react";
import MarketplaceSeoText from "../src/componentsUI/genericServices/marketplaceSeo/MarketplaceSeoText";
import MainApplication from "../src/componentsUI/mainP/MainApplication";
import MainLider from "../src/componentsUI/mainP/MainLider";
import MainOfferContainer from "../src/componentsUI/mainP/MainOffer";
import MainQuestion from "../src/componentsUI/mainP/MainQuestion";
import MainResult from "../src/componentsUI/mainP/MainResult";
import MainSimple from "../src/componentsUI/mainP/MainSimple";
import MobileHero from '../src/componentsUI/MobileHero';
import Container from '../src/componentsUI/Container';
import { CheckAdminKey } from '../src/untils/checkAdminKey';

const MarketplaceSeoPage = ()=>{
    CheckAdminKey()

    const marketI = useRef('')
    useEffect(()=>{
        document.body.scrollTo({top:0,behavior:'smooth'})
        marketI.current.classList.toggle('marketplaceI')
    },[marketI])
    return (
        <>
            <Container>
                <main ref={marketI} className="marketplace">
                    <MobileHero column='marketPlace' actionTitle={'TITLE_MARKETPLACE_HERO_CHANGE'}/>
                    <MarketplaceSeoText/>
                    <MainApplication/>
                    <MainOfferContainer/>
                    <MainLider/>
                    <MainResult/>
                    <MainSimple/>
                    <MainQuestion/>
                </main> 
            </Container>
            
        </>
    )
}

export default MarketplaceSeoPage