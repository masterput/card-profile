import acsent from '../assets/acsent.png'
import '../css/style.css';

const CardProfile = () => {
    return (
        // 1. inline css
        <div style={{ 
            backgroundColor : '#9cbddb', 
            width: '100vw',
            height: '100vh',
            backgroundImage: `url(${acsent})`,
            backgroundPosition: 'bottom right',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
            }}
        >
            <div className='card'>
                <img />
                <div>Front End Developer</div>
                <div>Master Putra Praja</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                <button>Contact Me</button>
            </div>
        </div>
    )
}

export default CardProfile