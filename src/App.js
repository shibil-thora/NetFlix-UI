import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { originalsURL } from "./Credentials/Credentials";
import { actionURL } from "./Credentials/Credentials";

function App() {
  return (
     <>
     <Navbar/>
     <Banner/>
     <RowPost webService={originalsURL} class_name='poster' title='Netflix Originals'/>
     <RowPost webService={actionURL} class_name='smallPoster' title='Comedy'/>
     </>
  );
}

export default App;
