import Insta from '../../images/icons/instagram.png';
import Facebook from '../../images/icons/facebook.png';

function Footer(){
    return (
        <footer class="bg-dark">
            <p>© San Diego Creative Arts 2021</p>
            <div id="socialMedia">
                <button id="FB"><a href="https://www.facebook.com/SDCreativeArtsProject/" target="_blank"
                        rel="noreferrer"><img src={Facebook} alt="facebook icon" /></a></button>

                <button id="insta"><a href="https://www.instagram.com/sdcreativearts/" target="_blank" rel="noreferrer">
                    <img src={Insta} alt="instagram icon" ></img>
                    </a></button>
            </div>
        </footer>
    )
}


export default Footer;