import './index.scss';
import mainPhoto from "../../assets/images/main.jpg"

const Home = ()=>{
    return(
        <div className="container home-page">
            <div className="title">
            <h1>Cześć, jestem Milena,</h1>
            <h3>programuję kosmosy i robię rakiety.</h3>
            </div>
            <img className="main-photo" src={mainPhoto} alt="" ></img>

            <div className='about'>
            </div>

        </div>
    )
}

export default Home