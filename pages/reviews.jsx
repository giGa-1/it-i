import React, { useRef, useEffect } from "react";
import Reviews from "../src/componentsUI/reviewsP/Reviews";
import NavPagesHead from "../src/componentsUI/UI/navpage/MyNavPages";
import Container from '../src/componentsUI/Container'
import { CheckAdminKey } from '../src/untils/checkAdminKey';

const ReviewsPage = ()=>{
    CheckAdminKey()

    const reviewsI = useRef('')
    useEffect(()=>{
        reviewsI.current.classList.toggle('reviewsI')
        document.body.scrollTo({top:0,behavior:'smooth'})
    },[reviewsI])
    const infoPage = [{text: 'Отзывы'}]
    return (
        <>
             <Container>
                <main ref={reviewsI} className="reviews">
                    <NavPagesHead navItems={infoPage}/>
                    <Reviews/>
                </main>
            </Container>
        </>
       
    )
}

export default ReviewsPage