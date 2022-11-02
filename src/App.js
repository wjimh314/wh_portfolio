import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
//  import Particles from "react-tsparticles";
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Languages from './components/Languages';
import Resume from './components/Resume';
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
   <Languages/>
   <Resume/>
   </>
  );
}

export default App;
