import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
    return (
        <div className='lpar-banner'>
            <img src={logo} alt='Les recette au Ritton !!' className='lpar-logo' />
            <h1>Les Plantes au Ritton !!</h1>
        </div>
    )
}

export default Banner