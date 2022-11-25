import acsent from '../assets/acsent.png';
import '../css/style.css';
import styleButton from '../css/CardProfile.module.css';
import profile from '../assets/profile.png';

const CardProfile = () => {
    // css variabel
    const wrapper = {
        backgroundColor: '#9cbddb', 
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${acsent})`,
        backgroundPosition: 'bottom right',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        // 1. inline css
        <div style={wrapper}
        >
            {/* 2. CSS File */}
            <div className='card'>
                <img src={profile} />
                <div className='profile'>Front End Developer</div>
                <div className='name'>Master Putra Praja</div>
                <div className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                <button className='button'>Contact Me</button>
            </div>

            {/* Css Module */}
            <div className='card'>
                <img src={profile} />
                <div className='profile'>Front End Developer</div>
                <div className='name'>Master Putra Praja</div>
                <div className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                <button className={styleButton.button}>Contact Me</button>
            </div>
        </div>
    )
}

export default CardProfile