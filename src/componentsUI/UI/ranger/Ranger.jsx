import React from 'react';
import cl from './Ranger.module.css'

const Ranger = ({setTo, priceTo, setFrom, priceFrom}) => {
    let displayValOneWrap = React.useRef(false)
    let displayValTwoWrap = React.useRef(false)
    let sliderOne = React.useRef(false);
    let sliderTwo = React.useRef(false);
    let displayValOne = React.useRef(false);
    let displayValTwo = React.useRef(false);
    let minGap = 0;
    let sliderTrack = React.useRef(false);
    let sliderMaxValue = 250000
    let displayValThreeWrap = React.useRef(false)
    let displayValThree = React.useRef(false)
    const slideOne = () => {
        if(sliderOne.current.value<0) sliderOne.current.value = 0;

        if (parseInt(sliderTwo.current.value) - parseInt(sliderOne.current.value) <= minGap) {
            sliderOne.current.value = parseInt(sliderTwo.current.value) - minGap;
        }
        let number = +sliderOne.current.value + 10000
        displayValOne.current.innerHTML = (~~(number/1000) || '') +'  ' + (number+'').split('').slice(-3).join('') + ' руб.';
        setFrom(()=>number)
        // console.log(priceFrom)
        displayValOneWrap.current.style.display = `block`
        fillColor();
        sliderOne.current.style.zIndex = 1;
        sliderTwo.current.style.zIndex = 0;

    }
    const slideTwo = () => {
        if(sliderTwo.current.value<0) sliderTwo.current.value = 0;
        if (parseInt(sliderTwo.current.value) - parseInt(sliderOne.current.value) <= minGap) {
            sliderTwo.current.value = parseInt(sliderOne.current.value) + minGap;
        }
        let number = +sliderTwo.current.value + 10000
        displayValTwo.current.innerHTML = (~~(number/1000) || '') +'  ' + (number+'').split('').slice(-3).join('') + ' руб.';
        setTo(number)
        displayValTwoWrap.current.style.display = `block`
        fillColor();
        sliderOne.current.style.zIndex = 0;
        sliderTwo.current.style.zIndex = 1;

    }
    React.useEffect(()=> {
        let percent1 = ((sliderOne.current.value  ) / (sliderMaxValue- 10000)) * 100;
        let percent2 = ((sliderTwo.current.value  ) / (sliderMaxValue- 10000)) * 100;
        sliderTrack.current.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #607483 ${percent1}% , #607483 ${percent2}%, #dadae5 ${percent2}%)`;
        let number = +sliderOne.current.value + 10000
        displayValOne.current.innerHTML = (~~(number/1000) || '') +'  ' + (number+'').split('').slice(-3).join('') + ' руб.';

        let number1 = +sliderTwo.current.value + 10000
        displayValTwo.current.innerHTML = (~~(number1/1000) || '') +'  ' + (number1+'').split('').slice(-3).join('') + ' руб.';
        displayValOneWrap.current.style.left = `${percent1}%`
        displayValTwoWrap.current.style.left = `${percent2}%`
        displayValThreeWrap.current.style.display = 'none'


    },[sliderOne, sliderTwo])
    function fillColor() {
        let w1 = displayValOneWrap.current.getBoundingClientRect().x + displayValOneWrap.current.getBoundingClientRect().width
        let w2 = displayValTwoWrap.current.getBoundingClientRect().x

        let percent1 = ((sliderOne.current.value  ) / (sliderMaxValue- 10000)) * 100;
        let percent2 = ((sliderTwo.current.value  ) / (sliderMaxValue- 10000)) * 100;

        if (w2 <= w1) {
            // console.log(percent2 - percent1)
            displayValThreeWrap.current.style.display = 'block';
            displayValThreeWrap.current.style.left = `${(percent2 + percent1)/2}%`
            displayValThree.current.innerHTML = `${displayValOne.current.innerHTML.slice(0,displayValOne.current.innerHTML.length-1)} — ${displayValTwo.current.innerHTML.slice(0,displayValTwo.current.innerHTML.length-1)}`
            displayValOneWrap.current.style.opacity = 0
            displayValTwoWrap.current.style.opacity = 0
            if (!(percent2 - percent1)) {
                displayValThreeWrap.current.style.display = 'none';
                displayValOneWrap.current.style.opacity = 1
                displayValTwoWrap.current.style.opacity = 1

            }
        } else {
            displayValThreeWrap.current.style.display = 'none';
            displayValOneWrap.current.style.opacity = 1
            displayValTwoWrap.current.style.opacity = 1
        }
        sliderTrack.current.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #607483 ${percent1}% , #607483 ${percent2}%, #dadae5 ${percent2}%)`;
        displayValOneWrap.current.style.left = `${percent1}%`
        displayValTwoWrap.current.style.left = `${percent2}%`
    }

    return (
        <div className={cl.container}>

            <div className="container">
                <div className={cl.fuckingWrap}>
                    <div className={cl.wrapValues} ref={displayValOneWrap}>
                        <div className={cl.values}>
                            <span className={cl.rangeText} ref={displayValOne}>0</span>
                        </div>
                    </div>
                    <div className={cl.wrapValues} ref={displayValTwoWrap}>
                        <div className={cl.values}>
                            <span className={cl.rangeText} ref={displayValTwo}>0</span>
                        </div>
                    </div>
                    <div className={cl.wrapValues} ref={displayValThreeWrap}>
                        <div className={cl.values +' '+ cl.valuer}>
                            <span className={cl.rangeText} ref={displayValThree}>0</span>
                        </div>
                    </div>
                </div>
               <div className={cl.wrapSwipers}>
                <div className={cl.sliderTrack} ref={sliderTrack}></div>
                <input type="range" min="0" max="240000" step={1000} defaultValue={20000} ref={sliderOne} className={cl.slider + ' ' + cl.slider1} onInput={slideOne}></input>
                <input type="range" min="0" max="240000" step={1000} defaultValue={120000} ref={sliderTwo} className={cl.slider} onInput={slideTwo} list='tickmarks'></input>
               </div>
            </div>

            <datalist id="tickmarks" className={cl.rangeList}>
                <option>10 000</option>
                <option>50 000</option>
                <option>90 000</option>
                <option>130 000</option>
                <option>170 000</option>
                <option>210 000</option>
                <option>250 000</option>
            </datalist>
            <datalist id="tickmarks" className={cl.rangeListM}>
                <option>10 000</option>
                <option>90 000</option>
                <option>130 000</option>
                <option>210 000</option>
                <option>250 000</option>
            </datalist>
        </div>
    );
};

export default Ranger;