import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import './index.scss';

const Footer = () => {
    return (
        <div className='footer'>
              <div className='box'>
<NavLink className="email"
    to="/"> RAKIECIARA@email.com
  </NavLink>
  </div>
            <ul className='footer'>
                <li>
                    <NavLink>
                        <a
                            href=""
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="anchor-icon"
                            />
                        </a>
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                        <a
                            href=""
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="anchor-icon"
                            />
                        </a>
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                        <a
                            href=""
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className="anchor-icon"
                            />
                        </a>
                    </NavLink>
                </li>
            </ul>
        </div>)
}



export default Footer