import Home from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/about";
import Blog from "./pages/blog/blog";
import Project from "./pages/project/project";
import Contact from "./pages/contact/contact";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'


function App() {

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
