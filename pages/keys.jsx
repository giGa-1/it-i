import React, {useEffect, useRef} from 'react';
import MainApplication from '../src/componentsUI/mainP/MainApplication';
import KeysMain from '../src/componentsUI/keysP/KeysMain';
import NavPagesHead from '../src/componentsUI/UI/navpage/MyNavPages';
import Container from '../src/componentsUI/Container';
import { CheckAdminKey } from '../src/untils/checkAdminKey';

const KeysPage = () => {
    CheckAdminKey()

    const keysI = useRef('')
    useEffect(() => {
        keysI.current.classList.toggle('keysI')
        document.body.scrollTo({top:0,behavior:'smooth'})
    }, [keysI])
    const infoPage = [{text: 'Кейсы'}]
    return (
        <>
          <Container>
                <main ref={keysI} className='keys'>
                    <NavPagesHead navItems={infoPage}/>
                    <KeysMain/>
                    <MainApplication/>
                </main>
            </Container>
        </>
      
    )
}

export default KeysPage