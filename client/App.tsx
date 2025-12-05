import "./global.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Products from "@/pages/Products";
import SetCrm from "@/pages/products/SetCrm";
import Cxb from "@/pages/products/Cxb";
import Projects from "@/pages/Projects";
import FreshBasket from "@/pages/projects/FreshBasket";
import ApplyNext from "@/pages/projects/ApplyNext";
import Integrations from "@/pages/Integrations";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/set-crm" element={<SetCrm />} />
          <Route path="/products/cxb" element={<Cxb />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/fresh-basket" element={<FreshBasket />} />
          <Route path="/projects/applynext-crm" element={<ApplyNext />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </TooltipProvider>
);

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
