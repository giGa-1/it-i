import React, { useEffect, useRef } from 'react';
import NavPagesHead from '../src/componentsUI/UI/navpage/MyNavPages';
import VacancyAcc from '../src/componentsUI/vacancyP/VacancyAcc';
import Container from '../src/componentsUI/Container'
import { CheckAdminKey } from '../src/untils/checkAdminKey';

const VacancyPage = ()=>{
    CheckAdminKey()
    const vacancyI = useRef('')
    useEffect(()=>{
        document.body.scrollTo({top:0,behavior:'smooth'})
        vacancyI.current.classList.toggle('vacancyI')
    },[vacancyI])
    const infoPage = [{text: 'Вакансии'}]
    return (
        <>
            <Container>
                <main ref={vacancyI} className='vacancy'>
                    <NavPagesHead navItems={infoPage}/>
                    <VacancyAcc/>
                </main>
            </Container>
        </>
    )
}

export default VacancyPage