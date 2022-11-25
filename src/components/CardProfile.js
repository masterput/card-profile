import acsent from '../assets/acsent.png'

const CardProfile = () => {
    return (
        // 1. inline css
        <div style={{ 
            backgroundColor : '#9cbddb', 
            width: '100vw',
            height: '100vh',
            backgroundImage: `url(${acsent})`,
            backgroundPosition: 'bottom right',
            backgroundRepeat: 'no-repeat'
            }}
        >
            <div className='card'>
                <img />
                <div>Front End Developer</div>
                <div>Master Putra Praja</div>
                <div>Have idea to create some beautiful web</div>
                <button>Contact Me</button>
            </div>
        </div>
    )
}

export default CardProfile