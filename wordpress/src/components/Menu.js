import React from 'react';
import vita from './vita.png';

import { Link , NavLink} from 'react-router-dom';

function Menu() {

    return(
        <div className="App">
            
            <div className="bandeau">
                <img src={vita} id="vitality" alt="vita" />;

                <div className="listeboutons">
                    <div class="accueil">
                        <Link className="accueilbutton"  to="/">Accueil</Link>
                    </div>

                    <div class="event">
                    <Link className="eventbutton" to="/event">Event</Link>
                    </div>

                    <div class="allumnis">
                        <NavLink className="allumnisbutton" to="/allumnis">Allumnis</NavLink>
                    </div>
                </div>
            </div>

            
            
        </div>
    )

    
}

export default Menu;