import logo from './logo.svg';
import './App.css';

// imported pooja's part
import { Skills } from './components/Skills';

//imported ashish's part
import { Banner } from './components/Banner';
import { NavBar } from './components/NavBar';

// imported aditya's part(imported project cards inside projects component)
import { Projects } from './components/Projects';


// imported vipul's part
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

// imported shubham's part
import Contact from './components/Contact';
import MailchimpForm from './components/MailchimpForm';
// import Mailer from './components/mailer';
function App() {
  return (
    <div className="App">
      <Banner/>
      <NavBar/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/> 
    </div>
  );
}

export default App;
