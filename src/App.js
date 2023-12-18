import "./App.css";

import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <ImageComponent
        src="https://upload.wikimedia.org/wikipedia/it/8/8f/Gigante_di_ferro.JPG"
        alt="Gigante di Ferro"
      />
      <ImageComponent
        src="https://media-assets.wired.it/photos/63713ce82e5d6199480baebd/16:9/w_1280,c_limit/Il%20Pianeta%20del%20Tesoro.jpg"
        alt="Il pianeta del Tesoro"
      />
      <div>
        <ButtonComponent name="First Button" />
        <ButtonComponent name="Second Button" />
      </div>
    </div>
  );
}

export default App;
