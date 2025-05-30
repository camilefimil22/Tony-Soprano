import './App.css'
import { Link, Routes, Route } from 'react-router';
import About from './page/About.tsx'
import Contact from './page/Contact.tsx'
import Home from './page/Home.jsx';
import FlowingMenu from './FlowingMenu.jsx'
import Terapia from './Terapia.tsx'
import CircularGallery from './CircularGallery.tsx'
import Sueños from './Sueños.tsx'
import tony from './assets/tony.jpg'


const demoItems = [
  { link: '/', text: 'Inicio', image: tony },
  { link: '/about', text: 'Biografia', image: tony },
  { link: '/contact', text: 'Trabajo', image: tony },
  { link: '/terapia', text: 'Terapia', image: tony},
  { link: '/sueños', text: 'Sueños', image: tony}
];

function App(){
  return(      
    
    <>
    

<div className="flex justify-center align-center font-sans bg-black ">
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