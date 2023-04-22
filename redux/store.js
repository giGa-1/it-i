import {applyMiddleware, combineReducers, createStore} from 'redux'
import {createWrapper} from 'next-redux-wrapper';
import sliderReducer from "./slider-redux";
import MainTariffReducer from "./mainTariff-redux";
import MainDevReducer from "./mainDev-redux";
import mainOfferReducer from "./mainOffer-redux";
import keysMainReducer from './keysNav-redux.js';
import {KeySiteReducer} from "./keySite-redux";
import {tarrifSEORedux} from "./tariffSEO-redux";
import {mobileServiceReducer} from "./mobileService-redux";
import {mobileHeroReducer} from "./mobileHero-redux";
import {KeysMainSeoReducer} from "./keysMainSeo-redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import {isAdminReducer} from './isAdmin-redux';
import { isAdminTextsReducer } from './adminTexts-redux';
import { isAdminListsReducer } from './adminLists-redux';
import  MainResReducer from './mainRes-redux';
import  MainOtherReducer from './mainOther-redux';
import MainSimpleReducer from './mainSimple-redux';
import MainReviewReducer from './mainReview-redux';
import ReviewsReducer from './reviews-redux';
import VacancyAccReducer from './vacancyAcc-redux';
import keysSitesReducer from './keysSites-redux';
import { SeoServicesReducer } from './seoServices-redux';
import { SeoStableReducer } from './seoStable-redux';
import { SeoAccReducer } from './seoAcc-redux';
import { SeoMonthReducer } from './seoMonth-redux';
import { SeoReportReducer } from './seoReport-redux';
import { crmPortfolioReducer } from './crmPortfolio-redux';
import MainKeysReducer from './mainKeys-redux';
import keysMobileReducer from './keysMobile-redux';
import keysCrmReducer from './keysCrm-redux';
import MainQuizReducer from './mainQuiz-redux';
import { isInternetReducer } from './adminPing-redux';



let reducers = combineReducers( {
    mainSliderPage: sliderReducer,
    MainTariffPage: MainTariffReducer,
    MainDevPage: MainDevReducer,
    mainOfferPage: mainOfferReducer,
    keysNavPage: keysMainReducer,
    KeySitePage: KeySiteReducer,
    KeySitesPage: keysSitesReducer,
    tarrifSEOPage: tarrifSEORedux,
    mobileServicePage: mobileServiceReducer,
    MobileHeroPage: mobileHeroReducer,
    KeysMainSeoPage: KeysMainSeoReducer,
    AdminKey: isAdminReducer,
    AdminTexts: isAdminTextsReducer,
    AdminList: isAdminListsReducer,
    MainRes: MainResReducer,
    MainOther: MainOtherReducer,
    MainSimple: MainSimpleReducer,
    MainReview: MainReviewReducer,
    Reviews: ReviewsReducer,
    VacancyAccordion: VacancyAccReducer,
    SeoServices: SeoServicesReducer,
    SeoStable: SeoStableReducer,
    SeoAcc: SeoAccReducer,
    SeoMonth: SeoMonthReducer,
    SeoReport: SeoReportReducer,
    CrmPortfolio: crmPortfolioReducer,
    MainKeys: MainKeysReducer,
    KeysMobile: keysMobileReducer,
    KeysCrm: keysCrmReducer,
    MainQuiz: MainQuizReducer,
    InternetKey: isInternetReducer,
})

const initStore = ()=>{
    return createStore(reducers, composeWithDevTools(
        applyMiddleware()
    ))
}


export const wrapper = createWrapper(initStore)