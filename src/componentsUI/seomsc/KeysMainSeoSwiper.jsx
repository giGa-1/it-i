import React from 'react';
import {connect} from "react-redux/lib/";
import KeysMainSeoItem from "../keysP/KeysMainSeoItem";
import cl from "../../style/KeysMainSeo.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from "swiper";
import { useDispatch, useSelector } from 'react-redux';


const KeysMainSeoSwiper = (props) => {
    const {KeysMainSeoPage} = useSelector(state=>state);
    const dispatch = useDispatch();
    let state = KeysMainSeoPage;
    return (
        <div>
            <Swiper
                modules={[Navigation,Pagination]}
                pagination={{
                    type: "fraction",
                    el: '.paginationRev',
                }}
                navigation ={{
                    prevEl: '.arrPrevRevSeo',
                    nextEl: '.arrNextRevSeo',
                    // disabledClass: cl.disabledMainRew
                }}
                autoHeight={true}
                >
                {state.map((e,i)=> <SwiperSlide key={i}>
                    <div className={"container " + cl.container} key={i}>
                    <KeysMainSeoItem element={e} key={i} permit={false} id={e.id} index={i} topTenTitle={e.topTenTitle} trafficTitle={e.trafficTitle} titleTopLeft={e.titleTopLeft} nameCompany={e.nameCompany} linkCompany={e.linkCompany} beenTopTen={e.changeSeo.beenChange.topTen}  schedule={e.schedule} scheduleSet={e.scheduleSet} beenTraffic={e.changeSeo.becameChange.traffic} becameTopTen={e.changeSeo.becameChange.topTen} graphImg={e.graphImg} becameTraffic={e.changeSeo.becameChange.traffic}/>
                    </div>
                    </SwiperSlide>
                )}
                    <div className={cl.controller}>
                        <div className={ cl.arrow + " arrPrevRevSeo " + cl.arrPrevRevSeo} />
                        <div className={"paginationRev " + cl.pag } />
                        <div className={ cl.arrow + " arrNextRevSeo " + cl.arrNextRevSeo}  />
                    </div>
            </Swiper>
        </div>
    );
};



export default KeysMainSeoSwiper;