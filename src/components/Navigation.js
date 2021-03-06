import React from 'react';
import { NavLink} from 'react-router-dom';
const Navigation = () => {
    return (
        <div className ="sidebar">
            <div className = "id">
                <div className = "idContent">
                    <img src ="./media/profil2.jpg" alt = "mon profil"/>
                    <h3>N.Floribert </h3>
                </div>
            </div>

            <div className = "navigation">
                <ul>
                    <li>
                    <NavLink exact to = "/" activeclassname= "navActive">
                        <i className = "fas fa-home"></i>
                        <span>Accueil</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to = "/knowledges" activeclassname= "navActive">
                        <i className = "fas fa-mountain"></i>
                        <span>Competences</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to = "/portfolio" activeclassname= "navActive">
                        <i className = "fas fa-images"></i>
                        <span>Portfolio</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to = "/contact" activeclassname= "navActive">
                        <i className = "fas fa-address-book"></i>
                        <span>Contact</span>
                    </NavLink>
                    </li>
                </ul>
            </div>
            <div className = "socialNetwork">
                <ul>
                    <li>
                        <a href='https://www.google.com' target ="_blank"
                        rel = "noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href='https://www.google.com' target ="_blank"
                        rel = "noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href='https://www.google.com' target ="_blank"
                        rel = "noopener noreferrer"><i className="fab fa-github"></i></a>
                    </li>
                </ul>
            </div>
    
        </div>
    );
};

export default Navigation;