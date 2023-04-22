import React, {useEffect, useRef} from "react";
import ContactMap from "../src/componentsUI/contactsP/ContactMap";
import ContactsLocationInfo from '../src/componentsUI/contactsP/ContactsLocationInfo';
import NavPagesHead from "../src/componentsUI/UI/navpage/MyNavPages";
import Container from '../src/componentsUI/Container'
import { CheckAdminKey } from '../src/untils/checkAdminKey';

const ContactsPage = ()=>{
    CheckAdminKey()

    const contactI = useRef('')
   
    useEffect(()=>{
        document.body.scrollTo({top:0,behavior:'smooth'})
        contactI.current.classList.toggle('contactsI')
    },[contactI])
    const infoPage = [{text: 'Контакты'}]
    return (
        <>
            <Container>
                <main ref={contactI} className="contacts">
                   <NavPagesHead navItems={infoPage}/>
                   <ContactsLocationInfo/>
                    <ContactMap/>
                </main>
            </Container>
        </>
        
    )
}
export default ContactsPage