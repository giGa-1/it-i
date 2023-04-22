import React, {useState} from 'react';
import cl from '../../style/MainSimple.module.css';
import MainSItem from './MainSItem';
// import {Swiper, SwiperSlide} from "swiper/react";
import Swiper, {Pagination} from "swiper";
import { useSelector } from 'react-redux';
import MyViewElement from '../UI/viewelement/MyViewElement';
import { useChangeStateFirst } from '../../hooks/useChangeStateFirst';

import MyAddElement from '../UI/adminaddel/MyAddElement';

const MainSimpleList = () => {
  
   



    const itemInfo = useSelector(state=>state.MainSimple)
  
    React.useEffect(() => {
        let swiperS = null;
        let mediaQuerySize = 576;

        function catalogSliderInit() {
            if (!swiperS) {
                swiperS = new Swiper(`.${cl.swiperSim}`, {
                    modules: [Pagination],
                    slidesPerView: "auto",
                    speed: 400,
                    // spaceBetween: 30,
                    // autoHeight: true,
                    pagination: {
                        el: '.pagS',
                        type: 'bullets',
                    },
                }, []);
            }
        }

        function catalogSliderDestroy() {
            try {
                if (swiperS) {
                    swiperS.destroy();
                    swiperS = null;

                }
            } catch (err) {}
        }

        function loadResize() {
            if (typeof window !== 'undefined') {

                let windowWidth = window.innerWidth
                if (windowWidth <= mediaQuerySize) {
                    catalogSliderInit()
                } else {
                    catalogSliderDestroy()
                }
            }

        }
        if (typeof window !== 'undefined') {
            loadResize()
            window.addEventListener('load', loadResize);
            window.addEventListener('resize', loadResize);
        }
    }, []);


 const [premissionLists, setPremissionLists] = useState(0) 
    const changeState = useChangeStateFirst( setPremissionLists,premissionLists, "-","/mainSimple",itemInfo, 'SIMPLE_MAIN_CHANGE_STATE') 


    return (
        <div>
            <div className={`swiper ${cl.swiperSim} ` + cl.mySwiper}>


                <div className={'swiper-wrapper ' + cl.simpleList}>
                   
                    {itemInfo.map((e, i) => (
                        <div className={'swiper-slide ' + cl.swipSl}  key={i}>
                            <MainSItem title={e.title} premissionLists={premissionLists} element={e} id={e.id} descr={e.descr} count={e.count}/>
                        </div>
                    ))}

                </div>
                <div className={'pagS ' + cl.pag}></div>


            </div>
           
        </div>
    )
}

export default MainSimpleList