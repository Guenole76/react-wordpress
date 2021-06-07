import './App.css';
import vita from './vita.png';
import rhoba from './rhoba.jpg';




function Acc() {
  return (
    <div className="App">
      
        <div className="bandeau">
          <img src={vita} id="vitality" alt="vita" />;

          <div className="listeboutons">
              <div class="accueil">
                  <a className="accueilbutton" href="#">Accueil</a>
              </div>

              <div class="event">
                <a className="eventbutton" href="#">Event</a>
              </div>

              <div class="allumnis">
                  <a className="allumnisbutton" href="#">Allumnis</a>
              </div>
          </div>
        </div>

        <div className="profil">
          
          
        </div>

        
        <div className="bas">

        </div>
      
    </div>
  );
}

export default Acc;