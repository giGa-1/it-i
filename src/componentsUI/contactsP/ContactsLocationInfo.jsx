import React, {useState, useEffect, useMemo} from "react";

import cl from '../../style/ContactsInfo.module.css';
import MyTitle from "../UI/titlepage/MyTitle";
import MyViewElement from "../UI/viewelement/MyViewElement";
import { useSelector } from "react-redux";
import MyAdminInput from "../UI/admininput/MyAdminInput";
import { useChangeStateFirst } from '../../hooks/useChangeStateFirst';

import { getStartedInfo } from "../../untils/getStartedInfo";
import { useDispatch } from "react-redux";

const ContactsLocationInfo = ()=>{
    const {isAdmin} = useSelector(state=>state.AdminKey)
    const adminTexts = useSelector(state=>state.AdminTexts)
    const contactTexts = useSelector(state=>state.AdminTexts.contactTexts)
    
    const dispatch = useDispatch()
    
    const [premissionGet, setPremissionGet] = useState(0) 
    const changeStateTexts = useChangeStateFirst(setPremissionGet, premissionGet, 'contactTexts', 'AT',contactTexts)

    
    
    const [contactData, setContactData] = useState({titleFirst: {width:0,height:0}, titleSec: {width:0,height:0}, titleNumber: {width:0,height:0}, titleEmail: {width:0,height:0}, valueNumber: {width:0,height:0}, valueEmail: {width:0,height:0}, titleAddres: {width:0,height:0}, valueAddres: {width:0,height:0}})
    return (
        <section className={cl.contact}>
            <div className={["container", cl.contactContainer].join` `}>
                <div className={cl.contactCont}>
                    <MyViewElement element={
                        <MyTitle title={contactTexts.title} fetchInfo={{item: contactTexts,id: "contactTexts", category: 'adminTexts'}} typeAction={'TITLE_CONTACT_PAGE_CHANGE'} classes={cl.titleCont}/>                    }/>
                    
                    <div className={cl.contentInfo}>
                        <div className={cl.contactLeft}>
                            <ul className={cl.contactListInfo}>
                            <MyViewElement element={
                                <li className={cl.contactImg}>
                                    <div className={cl.contactImgBlock}>
                                        <span className={cl.contactImgCard}>
                                            <svg width="31" height="35" viewBox="0 0 31 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M1.84105 14.0282H2.02172C2.29111 14.0295 2.55222 13.9351 2.75853 13.7619C2.96484 13.5887 3.10296 13.3478 3.14827 13.0823C3.6405 10.1787 5.14481 7.54305 7.39459 5.64256C9.64437 3.74207 12.4943 2.69943 15.4394 2.69943C18.3844 2.69943 21.2344 3.74207 23.4842 5.64256C25.734 7.54305 27.2383 10.1787 27.7305 13.0823C27.7406 13.241 27.7839 13.3959 27.8576 13.5369C27.9313 13.6778 28.0337 13.8018 28.1583 13.9007C28.2829 13.9996 28.4268 14.0712 28.5808 14.1111C28.7348 14.1509 28.8954 14.1579 29.0523 14.1318C29.2092 14.1056 29.3589 14.0468 29.4917 13.9592C29.6244 13.8716 29.7374 13.7572 29.8231 13.6232C29.9089 13.4892 29.9656 13.3388 29.9896 13.1815C30.0135 13.0243 30.0043 12.8638 29.9624 12.7103C29.4623 9.69273 28.0274 6.90834 25.86 4.75005C23.9465 2.83794 21.5437 1.48926 18.9147 0.851693C16.2858 0.21413 13.5321 0.312276 10.9553 1.13538C8.3784 1.95849 6.07771 3.47481 4.30516 5.5183C2.53262 7.56178 1.35656 10.0536 0.905795 12.7209C0.856639 13.0183 0.92753 13.323 1.10289 13.5681C1.27826 13.8132 1.54375 13.9787 1.84105 14.0282ZM1.69923 26.6464C2.33703 27.2841 3.20206 27.6425 4.10404 27.6425C5.00602 27.6425 5.87105 27.2841 6.50885 26.6464C7.14664 26.0086 7.50495 25.1435 7.50495 24.2415V19.7034C7.50495 18.8015 7.14664 17.9364 6.50885 17.2986C5.87105 16.6608 5.00602 16.3025 4.10404 16.3025H1.84031C1.53871 16.3025 1.24946 16.4223 1.0362 16.6356C0.822935 16.8489 0.703125 17.1381 0.703125 17.4397V24.2415C0.703125 25.1435 1.06143 26.0086 1.69923 26.6464ZM2.96686 24.2415V18.5663H4.09341C4.39501 18.5663 4.68426 18.6861 4.89752 18.8993C5.11078 19.1126 5.23059 19.4018 5.23059 19.7034V24.2415C5.20331 24.5228 5.07227 24.7838 4.86303 24.9738C4.65378 25.1637 4.38131 25.2689 4.09873 25.2689C3.81614 25.2689 3.54367 25.1637 3.33443 24.9738C3.12518 24.7838 2.99415 24.5228 2.96686 24.2415ZM10.7686 7.23697C10.5212 7.22818 10.2834 7.13886 10.0913 6.98259C9.89922 6.82631 9.7634 6.61161 9.70448 6.37111C9.64556 6.1306 9.66674 5.87744 9.76482 5.65008C9.8629 5.42271 10.0325 5.23357 10.2479 5.11139C11.8576 4.29785 13.636 3.87399 15.4396 3.87399C17.2432 3.87399 19.0216 4.29785 20.6313 5.11139C20.7695 5.17751 20.8929 5.27087 20.9942 5.38587C21.0954 5.50087 21.1724 5.63515 21.2204 5.78063C21.2685 5.92611 21.2866 6.0798 21.2738 6.23247C21.261 6.38515 21.2174 6.53365 21.1457 6.66908C21.0741 6.8045 20.9758 6.92405 20.8568 7.02054C20.7378 7.11704 20.6005 7.18849 20.4532 7.23061C20.3059 7.27273 20.1516 7.28465 19.9996 7.26565C19.8476 7.24666 19.7009 7.19713 19.5685 7.12006C18.2842 6.46165 16.8616 6.11826 15.4183 6.11826C13.9751 6.11826 12.5525 6.46165 11.2682 7.12006C11.1129 7.19692 10.9419 7.23693 10.7686 7.23697ZM26.7829 16.3025H29.0573C29.357 16.3053 29.6435 16.4264 29.8545 16.6393C30.0655 16.8523 30.1838 17.1399 30.1838 17.4397V26.5159C30.181 28.0174 29.5833 29.4566 28.5216 30.5183C27.4599 31.58 26.0207 32.1778 24.5192 32.1806H18.6313C18.3643 32.9372 17.8383 33.5751 17.1463 33.9814C16.4544 34.3877 15.641 34.5363 14.8501 34.4008C14.0592 34.2653 13.3417 33.8546 12.8244 33.2411C12.3071 32.6277 12.0234 31.8511 12.0234 31.0487C12.0234 30.2463 12.3071 29.4697 12.8244 28.8563C13.3417 28.2428 14.0592 27.8321 14.8501 27.6966C15.641 27.5611 16.4544 27.7097 17.1463 28.116C17.8383 28.5223 18.3643 29.1602 18.6313 29.9168H24.5192C25.2495 29.9144 25.9596 29.6763 26.5437 29.2377C27.1278 28.7992 27.5546 28.1838 27.7607 27.4831C27.4444 27.5842 27.1149 27.638 26.7829 27.6425C25.8809 27.6425 25.0159 27.2842 24.3781 26.6464C23.7403 26.0086 23.382 25.1435 23.382 24.2416V19.7034C23.382 18.8015 23.7403 17.9364 24.3781 17.2986C25.0159 16.6608 25.8809 16.3025 26.7829 16.3025ZM14.8112 31.9889C14.9982 32.1139 15.2181 32.1806 15.443 32.1806C15.7446 32.1806 16.0338 32.0608 16.2471 31.8475C16.4603 31.6342 16.5802 31.345 16.5802 31.0434C16.5802 30.8185 16.5135 30.5986 16.3885 30.4116C16.2635 30.2246 16.0859 30.0788 15.8782 29.9928C15.6704 29.9067 15.4417 29.8842 15.2211 29.9281C15.0005 29.9719 14.7979 30.0802 14.6389 30.2393C14.4798 30.3983 14.3715 30.6009 14.3276 30.8215C14.2838 31.0421 14.3063 31.2708 14.3924 31.4786C14.4784 31.6864 14.6242 31.864 14.8112 31.9889ZM27.5525 24.9738C27.7618 24.7839 27.8928 24.5228 27.9201 24.2416L27.9307 18.5663H26.7935C26.4919 18.5663 26.2027 18.6861 25.9894 18.8993C25.7762 19.1126 25.6563 19.4018 25.6563 19.7034V24.2416C25.6836 24.5228 25.8147 24.7839 26.0239 24.9738C26.2332 25.1637 26.5056 25.2689 26.7882 25.2689C27.0708 25.2689 27.3433 25.1637 27.5525 24.9738Z" fill="#F84263"/>
                                            </svg>
                                        </span>
                                    </div>
                                    {
                                         isAdmin && premissionGet === '200' ? 
                                         <MyAdminInput width={contactData.titleFirst.width} fetchInfo={{item: contactTexts,id: "contactTexts", category: 'adminTexts'}} height={contactData.titleFirst.height} typeAction={'TITLE_ITEM_FIRST_CONTACT_PAGE_CHANGE'}>
                                            <p className={cl.contactDescr} onClick={e=>setContactData({...contactData, titleFirst: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{contactTexts.firstColumn.titleItem}</p>
                                         </MyAdminInput>
                                         :
                                         <p className={cl.contactDescr}>{contactTexts.firstColumn.titleItem}</p>
                                    }
                                   
                                    <span className={cl.contactLine}></span>
                                </li>
                                 }/>
                                  <MyViewElement element={
                                <li className={cl.contactTel}>
                                     {
                                         isAdmin && premissionGet === '200' ? 
                                         <MyAdminInput width={contactData.titleNumber.width} fetchInfo={{item: contactTexts,id: "contactTexts", category: 'adminTexts'}} height={contactData.titleNumber.height} typeAction={'TITLE_NUMBER_FIRST_CONTACT_PAGE_CHANGE'}>
                                           <span className={cl.contactTelName}  onClick={e=>setContactData({...contactData, titleNumber: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{contactTexts.firstColumn.titleNumber}</span>
                                         </MyAdminInput>
                                         :
                                         <span className={cl.contactTelName}>{contactTexts.firstColumn.titleNumber}</span>
                                    }
                                     {
                                         isAdmin && premissionGet === '200' ? 
                                         <MyAdminInput width={contactData.valueNumber.width} fetchInfo={{item: contactTexts,id: "contactTexts", category: 'adminTexts'}} height={contactData.valueNumber.height} typeAction={'VALUE_NUMBER_FIRST_CONTACT_PAGE_CHANGE'}>
                                            <a href="tel:+79251170046" className={cl.telLocation} onClick={e=>setContactData({...contactData, valueNumber: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{contactTexts.firstColumn.valueNumber}</a>
                                         </MyAdminInput>
                                         :
                                         <a href="tel:+79251170046" className={cl.telLocation}>{contactTexts.firstColumn.valueNumber}</a>
                                    }
                                    
                                   
                                </li>
                                 }/>
                                 <MyViewElement element={
                                <li className={cl.contactTel}>
                                     {
                                         isAdmin && premissionGet === '200' ? 
                                         <MyAdminInput width={contactData.titleEmail.width} fetchInfo={{item: contactTexts,id: "contactTexts", category: 'adminTexts'}} height={contactData.titleEmail.height} typeAction={'TITLE_EMAIL_FIRST_CONTACT_PAGE_CHANGE'}>
                                            <span className={cl.contactTelName} onClick={e=>setContactData({...contactData, titleEmail: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{contactTexts.firstColumn.titleEmail}</span>
                                         </MyAdminInput>
                                         :
                                         <span className={cl.contactTelName}>{contactTexts.firstColumn.titleEmail}</span>
                                    }
                                     {
                                         isAdmin && premissionGet === '200' ? 
                                         <MyAdminInput width={contactData.titleFirst.width} fetchInfo={{item: contactTexts,id: "contactTexts", category: 'adminTexts'}} height={contactData.titleFirst.height} typeAction={'VALUE_EMAIL_FIRST_CONTACT_PAGE_CHANGE'}>
                                             <a href="mailto:info@it-industriul.ru" className={cl.mail}>{contactTexts.firstColumn.valueEmail}</a>
                                         </MyAdminInput>
                                         :
                                         <a href="mailto:info@it-industriul.ru" className={cl.mail}>{contactTexts.firstColumn.valueEmail}</a>
                                    }
                                   
                                   
                                </li>
                                  }/>
                            </ul>
                        </div>
                        <div className={cl.contactRight}>
                            <ul className={cl.contactListInfo}>
                            <MyViewElement element={

                                <li className={cl.contactImg}>
                                    <div className={cl.contactImgBlock}>
                                        <span className={cl.contactImgCard}>
                                            <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M16.0081 26.8371C16.1448 26.8936 16.2914 26.9226 16.4394 26.9225C16.6641 26.9239 16.8842 26.8588 17.0719 26.7353C17.2596 26.6117 17.4064 26.4354 17.494 26.2284C17.5815 26.0215 17.6058 25.7933 17.5638 25.5725C17.5217 25.3518 17.4152 25.1485 17.2577 24.9882C17.1727 24.9032 9.08491 16.741 9.08491 9.91792C9.08491 7.96316 9.86143 6.08847 11.2437 4.70625C12.6259 3.32402 14.5006 2.5475 16.4553 2.5475C18.4101 2.5475 20.2848 3.32402 21.667 4.70625C23.0492 6.08847 23.8258 7.96316 23.8258 9.91792C23.8258 13.8183 21.1688 18.1651 18.9476 21.1197C18.8471 21.238 18.772 21.3756 18.7268 21.5241C18.6816 21.6725 18.6672 21.8287 18.6846 21.9829C18.702 22.1371 18.7507 22.2861 18.8279 22.4208C18.905 22.5554 19.0089 22.6729 19.1331 22.7659C19.2574 22.8589 19.3993 22.9255 19.5503 22.9615C19.7012 22.9976 19.8579 23.0024 20.0108 22.9756C20.1637 22.9488 20.3094 22.8911 20.4391 22.8058C20.5688 22.7206 20.6797 22.6097 20.7649 22.48C23.1775 19.2492 26.0789 14.4454 26.0789 9.91792C25.9958 7.41817 24.9444 5.04855 23.1467 3.30959C21.349 1.57063 18.9458 0.59848 16.4447 0.59848C13.9436 0.59848 11.5404 1.57063 9.74267 3.30959C7.94498 5.04855 6.89358 7.41817 6.81055 9.91792C6.81055 17.6656 15.281 26.2317 15.6423 26.593C15.747 26.6976 15.8713 26.7805 16.0081 26.8371ZM16.44 12.7449C15.7674 12.7449 15.1098 12.5455 14.5505 12.1718C13.9913 11.7981 13.5554 11.2669 13.298 10.6455C13.0406 10.0241 12.9732 9.34025 13.1044 8.68053C13.2357 8.02082 13.5596 7.41483 14.0352 6.93921C14.5108 6.46358 15.1168 6.13968 15.7765 6.00845C16.4362 5.87722 17.12 5.94457 17.7415 6.20198C18.3629 6.45939 18.8941 6.89529 19.2678 7.45457C19.6415 8.01385 19.8409 8.67138 19.8409 9.34402C19.8409 10.246 19.4826 11.111 18.8448 11.7488C18.207 12.3866 17.342 12.7449 16.44 12.7449ZM16.44 8.20684C16.2151 8.20684 15.9952 8.27353 15.8082 8.39849C15.6212 8.52344 15.4754 8.70105 15.3894 8.90884C15.3033 9.11663 15.2808 9.34528 15.3247 9.56587C15.3685 9.78646 15.4769 9.98909 15.6359 10.1481C15.7949 10.3072 15.9976 10.4155 16.2181 10.4593C16.4387 10.5032 16.6674 10.4807 16.8752 10.3946C17.083 10.3086 17.2606 10.1628 17.3855 9.9758C17.5105 9.78879 17.5772 9.56893 17.5772 9.34402C17.5772 9.04242 17.4574 8.75317 17.2441 8.53991C17.0308 8.32665 16.7416 8.20684 16.44 8.20684ZM0.5625 25.7853C0.5625 30.7166 7.2368 34.2876 16.4405 34.2876C25.6336 34.2876 32.3079 30.7166 32.3186 25.7747C32.3186 22.6607 30.4587 20.3864 26.8027 18.9941C26.6624 18.9374 26.5122 18.9093 26.3608 18.9114C26.2095 18.9135 26.0601 18.9458 25.9214 19.0063C25.7828 19.0669 25.6576 19.1546 25.5532 19.2641C25.4488 19.3737 25.3674 19.503 25.3136 19.6445C25.2598 19.786 25.2349 19.9368 25.2401 20.088C25.2454 20.2392 25.2808 20.3879 25.3442 20.5253C25.4077 20.6627 25.4979 20.786 25.6097 20.8881C25.7214 20.9902 25.8524 21.0689 25.995 21.1197C29.6297 22.5013 30.0442 24.4462 30.0442 25.7853C30.0442 28.8355 24.9428 32.0239 16.4405 32.0239C7.93824 32.0239 2.82623 28.8461 2.82623 25.7853C2.82623 24.4462 3.25135 22.5013 6.89671 21.1303C7.03926 21.0795 7.17025 21.0008 7.28199 20.8987C7.39373 20.7967 7.48398 20.6733 7.54744 20.5359C7.6109 20.3985 7.64629 20.2499 7.65156 20.0986C7.65682 19.9474 7.63184 19.7966 7.57808 19.6551C7.52432 19.5137 7.44287 19.3844 7.33849 19.2748C7.23412 19.1652 7.10892 19.0775 6.97023 19.017C6.83154 18.9564 6.68216 18.9241 6.53084 18.922C6.37952 18.9199 6.2293 18.948 6.08899 19.0047C2.42238 20.3864 0.5625 22.6714 0.5625 25.7853Z" fill="#F84263"/>
                                            </svg>
                                        </span>
                                    </div>
                                    {
                                         isAdmin && premissionGet === '200' ? 
                                         <MyAdminInput width={contactData.titleSec.width} fetchInfo={{item: contactTexts,id: "contactTexts", category: 'adminTexts'}} height={contactData.titleSec.height} typeAction={'TITLE_ITEM_SEC_CONTACT_PAGE_CHANGE'}>
                                            <p className={cl.contactDescr} onClick={e=>setContactData({...contactData, titleSec: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{contactTexts.secondColumn.titleItem}</p> 
                                        </MyAdminInput>
                                         :
                                         <p className={cl.contactDescr}>{contactTexts.secondColumn.titleItem}</p>
                                    }
                                    
                                    <span className={cl.contactLine}></span>
                                </li>
                                  }/>

                                 <MyViewElement element={

                                <li className={[cl.contactTel, cl.contactMail].join` `}>
                                     {
                                         isAdmin && premissionGet === '200' ? 
                                         <MyAdminInput width={contactData.titleAddres.width} fetchInfo={{item: contactTexts,id: "contactTexts", category: 'adminTexts'}} height={contactData.titleAddres.height} typeAction={'ADDRES_ITEM_SEC_CONTACT_PAGE_CHANGE'}>
                                            <span className={cl.contactTelName} onClick={e=>setContactData({...contactData, titleAddres: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{contactTexts.secondColumn.addressItem}</span>
                                        </MyAdminInput>
                                         :
                                         <span className={cl.contactTelName}>{contactTexts.secondColumn.addressItem}</span>
                                    }
                                   
                                    {
                                         isAdmin  && premissionGet === '200'? 
                                         <MyAdminInput width={contactData.valueAddres.width} fetchInfo={{item: contactTexts,id: "contactTexts", category: 'adminTexts'}} height={contactData.valueAddres.height} typeAction={'ADDRES_VALUE_SEC_CONTACT_PAGE_CHANGE'}>
                                            <p className={cl.telLocation} onClick={e=>setContactData({...contactData, valueAddres: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{contactTexts.secondColumn.addressValue}</p>
                                        </MyAdminInput>
                                         :
                                         <p className={cl.telLocation}>{contactTexts.secondColumn.addressValue}</p>
                                    }
                                   
                                </li>
                                  }/>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cl.contactBackImg}></div>
        </section>
    )
}

export default ContactsLocationInfo