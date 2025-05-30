import './App.css'
import { Link, Routes, Route } from 'react-router';
import About from './page/About.tsx'
import Contact from './page/Contact.tsx'
import Home from './page/Home.jsx';
import FlowingMenu from './FlowingMenu.jsx'
import Terapia from './Terapia.tsx'
import CircularGallery from './CircularGallery.tsx'
import Sueños from './Sueños.tsx'

const demoItems = [
  { link: '/', text: 'Inicio', image: './assets/tony.jpg' },
  { link: '/about', text: 'Biografia', image: './assets/tony.jpg' },
  { link: '/contact', text: 'Trabajo', image: './assets/tony.jpg' },
  { link: '/terapia', text: 'Terapia', image: './assets/tony.jpg'},
  { link: '/sueños', text: 'Sueños', image: './assets/tony.jpg'}
];

function App(){
  return(      
    
    <>
    

<div className=" font-sans bg-black w-475 h-50 block ">
  <FlowingMenu items={demoItems} />
</div>
<div className="">

         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terapia" element={<Terapia />} />
          <Route path="/sueños" element={<Sueños />} />

        </Routes>
</div>

   <div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#000000" borderRadius={0.05} />
</div>
    </>

  );

}
export default App