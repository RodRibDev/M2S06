import '../assets/styles/Footer.css'

import facebookLogo from '../assets/images/facebook.svg';
import youtubeLogo from '../assets/images/youtube.svg';
import instagramLogo from '../assets/images/instagram.svg';

function Footer() {
    return (
        <><div className="footer">
            <div>
            <img src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" />
            </div>
            <div className="contato">
                <h3>CONTATO</h3>
                <p>+55 21 9999-9999 <br />
                contato@bikcraft.com <br />
                Rua Ali Perto, 42 - Botafogo <br />
                Rio de Janeiro - RJ
                </p>
                <div className="footer-redes">
                <a href="https://www.facebook.com">
                    <img src={facebookLogo} width="32" height="32" alt="Facebook" />
                </a>
                <a href="https://www.youtube.com">
          <         img src={youtubeLogo} width="32" height="32" alt="Youtube" />
                </a>
                <a href="https://www.instagram.com">
                    <img src={instagramLogo} width="32" height="32" alt="Instagram" />
                </a>
                </div>
            </div>
            <div className="info">
                <h3>INFORMAÇÕES</h3>
                <ul>
                    <li>Bicicletas</li>
                    <li>Seguros</li>
                    <li>Contato</li>
                    <li>Termos e Condições</li>
                </ul>
            </div>



        </div>
        <div>
            <p>Bikcraft © Alguns direitos reservados.</p>
        </div></>
    )
}

export default Footer