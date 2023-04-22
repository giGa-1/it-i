import React from 'react';
import cl from './MyBtns.module.css';
import {Swiper} from "swiper";
import {useDispatch} from 'react-redux';

const MyBtns = ({arrBtns, selectBtn, btnsClasses, btnClasses, setTabActive, itemSwipeClasses}) => {
    React.useEffect(() => {
        let swiper = null;
        let mediaQuerySize = 900;

        function catalogSliderInit() {
            if (!swiper) {
                swiper = new Swiper('.swiperBtnsCase', {
                    slidesPerView: 'auto',
                    speed: 400,
                    spaceBetween: 10,
                })
            }
        }

        function catalogSliderDestroyd() {
            try {
                if (swiper) {
                    swiper.destroy();
                    swiper = null;

                }
            } catch (err) {
            }
        }

        function loadResize() {
            if (typeof window !== 'undefined') {
                let windowWidth = window.innerWidth
                if (windowWidth <= mediaQuerySize) {
                    catalogSliderInit()
                } else {
                    catalogSliderDestroyd()
                }
            }
        }
        if (typeof window !== 'undefined') {

            loadResize()
            window.addEventListener('load', loadResize);
            window.addEventListener('resize', loadResize);
        }
    });

    const dispatch = useDispatch();

    return (

        // <div className={[cl.btns, btnsClasses].join` `}>
        <div className="swiperBtnsCase swiper ">
            <div className={"swiper-wrapper " + [cl.btns, btnsClasses].join` `}>
                {arrBtns.map((el, i) => (
                    <div className={"swiper-slide " + cl.swipeSl + ' ' + itemSwipeClasses} key={i}>
                        <button
                            className={el.selected ? [cl.btn, cl.btnSelected, btnClasses].join` ` : [btnClasses, cl.btn].join` `}
                            key={i} my_key={i}
                            onClick={(e, i) => {
                                e.preventDefault();
                                dispatch({type: 'SELECT_BTN', key: e.target.getAttribute('my_key')})
                                setTabActive(e.target.getAttribute('my_key'))
                            }}>
                            {el.text}
                        </button>
                    </div>
                ))}
            </div>
            <div className="swiper-scrollbar"></div>
        </div>

        // </div>
    )
}


export default MyBtns