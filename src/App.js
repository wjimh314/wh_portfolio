import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
//  import Particles from "react-tsparticles";
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';

function App() {
  return(
  <>
  {/* {<Particles
    params={{
      particles:{
        number:{
          value:30,
          density:{
            enable:true,
            value_area:900
          }
        }
      }
    }}
  /> } */}
  <Navbar />
   <Header />
   <AboutMe/>
   </>
  );
}

export default App;
