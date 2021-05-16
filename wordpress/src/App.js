import vita from './vita.png';
import rhoba from './rhoba.jpg';
import './App.css';

function App() {
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
          <img src={rhoba} id="rhoba" alt="rhoba" />;
          <div className="text1">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
              but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Why do we use it It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem 
              Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
               packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions 
               volved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)
            </p>
          </div>
          <div className="text2">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
              but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Why do we use it It is a long established fact that a reader will be distracted by the readable content of a page when looking
            </p>
          </div>

          <div className="text3">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
              but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Why do we use it It is a long established fact that a reader will be distracted by the readable content of a page when looking
            </p>
          </div>
          
          <div className="text4">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
              but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Why do we use it It is a long established fact that a reader will be distracted by the readable content of a page when looking
            </p>
          </div>
          
        </div>

        
        <div className="bas">

        </div>
      
    </div>
  );
}

export default App;