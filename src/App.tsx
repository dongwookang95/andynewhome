import Home from "./pages/home/home";
import Header from "./components/layout/Header";
import 'bootstrap/dist/css/bootstrap.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Layout from "./components/layout/Layout";


function App() {

  return (
    <Layout>
      <Header/>
    <main>
      <Home/>
    </main>
    </Layout>
  );
}

export default App;
