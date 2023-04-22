
import React, {useRef,useState, useEffect} from "react";
import Container from "../../src/componentsUI/Container";
import KeyGenSites from "../../src/componentsUI/KeyGenSites";
import { CheckAdminKey } from '../../src/untils/checkAdminKey';





export default function () {
    CheckAdminKey()
    const genPage = useRef('')
    useEffect(()=>{
        genPage.current.classList.toggle('genPage')
    },[genPage])
    const [isUrl, setIsUrl] = useState('')
     useEffect(()=>{
        setIsUrl(document.location.pathname.split`/`.filter(e=>e&&e!=='keys').join``)
    },[])
    return (
        <>
        <Container>
              <main ref={genPage} className="gen-pages">
              {isUrl&&<KeyGenSites link={`/${isUrl}`}/>}
              </main>
          </Container>
      </>
    )
}