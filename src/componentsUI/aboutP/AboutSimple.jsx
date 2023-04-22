import MainSimpleList from '../mainP/MainSimpleList';
import cl from '../../style/AboutSimple.module.css';

const AboutSimple = ()=>{
    return (
        <div className={cl.simpleSection}>
            <div className="container">
                <MainSimpleList/>
            </div>
        </div>
    )
}

export default AboutSimple