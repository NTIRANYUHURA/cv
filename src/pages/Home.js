import React from 'react';
import Navigation from '../components/Navigation';
const Home = () => {
    return (
        <div className = "home">

            <Navigation/>
            <div className="homeContent">
                <div className= "content">
                    <h1>N.Floribert</h1>
                    <h2>Développeur Front-end</h2>
                     <div className= "pdf">
                         <a href="./media/cv.pdf"
                           target="_blank">Télécharger cv</a>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Home;