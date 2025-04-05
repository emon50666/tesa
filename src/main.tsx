
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from './Layout.tsx';

import AboutUs from './Pages/AboutUs.tsx';
import ServicePage from './Pages/ServicePage.tsx';
import PortfolioPage from './Pages/PortfolioPage.tsx';
import BlogPage from './Pages/BlogPage.tsx';
import ContactPage from './Pages/ContactPage.tsx';
import Blog1 from './components/Blog1.tsx';
import Blog2 from './components/Blog2.tsx';
import Blog3 from './components/Blog3.tsx';
import Blog4 from './components/Blog4.tsx';
import Portfolio1 from './components/Portfolio1.tsx';
import Portfolio2 from './components/Portfolio2.tsx';
import Portfolio3 from './components/Portfolio3.tsx';
import Portfolio4 from './components/Portfolio4.tsx';
import Portfolio5 from './components/Portfolio5.tsx';
import Portfolio6 from './components/Portfolio6.tsx';



createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
    <Route  element={<Layout />}>
      <Route path='/'element={<App/>} />
      <Route path='/about'element={<AboutUs/>} />
      <Route path='/service'element={<ServicePage/>} />
      <Route path='/portfolio'element={<PortfolioPage/>} />
      <Route path='/blog'element={<BlogPage/>} />
      <Route path='/contact'element={<ContactPage/>} />
      <Route path='/accessorizing-your-wedding-look-from-veils-to-shoes'element={<Blog1/>} />
      <Route path='/the-benefits-of-a-second-shooter-at-your-wedding-copy'element={<Blog2/>} />
      <Route path='/choosing-the-perfect-wedding-dress-a-brides-guide'element={<Blog3/>} />
      <Route path='/the-benefits-of-a-second-shooter-at-your-wedding'element={<Blog4/>} />
      <Route path='/fiona-mikael'element={<Portfolio1/>} />
      <Route path='/stacy'element={<Portfolio2/>} />
      <Route path='/john-miranda'element={<Portfolio3/>} />
      <Route path='/nathan-helen'element={<Portfolio4/>} />
      <Route path='/elena'element={<Portfolio5/>} />
      <Route path='/maria-carlo'element={<Portfolio6/>} />











     

    </Route>
  </Routes>
  </BrowserRouter>

)
