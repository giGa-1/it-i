import { useEffect, useRef } from "react";
import cl from '../src/style/CRM.module.css'
import MobilePortfolio from "../src/componentsUI/mobilemsc/MobilePortfolio";
import MainApplication from "../src/componentsUI/mainP/MainApplication";
import MainSimple from '../src/componentsUI/mainP/MainSimple'
import MainReview from "../src/componentsUI/mainP/MainReview";
import MainQuestion from '../src/componentsUI/mainP/MainQuestion'
import MainLider from "../src/componentsUI/mainP/MainLider";
import MainOfferContainer from "../src/componentsUI/mainP/MainOffer";
import MainDevContainer from "../src/componentsUI/mainP/MainDev";
import MobileServiceContainer from "../src/componentsUI/mobilemsc/MobileService";
import MobileHero from '../src/componentsUI/MobileHero'
import CrmCount from '../src/componentsUI/crmseo/CrmCount';
import Container from "../src/componentsUI/Container";
import { CheckAdminKey } from '../src/untils/checkAdminKey';

const CRMPage = ()=>{
    CheckAdminKey()

    const mobileI = useRef('')
    useEffect(()=>{
        mobileI.current.classList.toggle('mobileI')
    },[mobileI])
    return (
        <>
            <Container>
            <main ref={mobileI} className="mobile">
                <MobileHero column='crm' actionTitle={'TITLE_HERO_CRM_PAGE_INFO'} actionDescr={'DESCR_HERO_CRM_PAGE_INFO'}/>
                <CrmCount/>
                <MobileServiceContainer column={'crmDevelop'} actionTitle={'TITLE_CRM_PAGE_CHANGE'} actionListAdd={'LIST_ADD_CRM_PAGE_CHANGE'} actionListTitle={'LIST_TITLE_CRM_PAGE_CHANGE'} actionListDescr={'LIST_DESCR_CRM_PAGE_CHANGE'} actionImg={'LIST_IMG_CRM_PAGE_CHANGE'} actionListDelete={'LIST_DELETE_CRM_PAGE_CHANGE'}/>
                <MobilePortfolio/>
                <MainDevContainer column={'developerCRM'} />
                <MainApplication/>
                <div className={cl.offer}>
                    <MainOfferContainer/>
                </div>
                <MainLider/>
                <MainReview/>
                <MainSimple/>
                <MainQuestion/>
            </main>
            </Container>
        </>
        
    )
}

export default CRMPage