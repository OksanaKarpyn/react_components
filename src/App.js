//import logo from './logo.svg';
import './App.css';
import Footer from './App/Footer/Footer';
import Header from './App/Header/Header';
import Main from './App/Main/Main';
const site = {
	site_name : "react test",
	site_title : "my first site with react",
	nav : [
    { "link": "nav1", "text": "my link" },
    { "link": "nav2", "text": "my link 2" },
    { "link": "nav3", "text": "my link 3" },
  ]
}
function App() {
  return (
    <div className="App">
   
      <Header data ={site} />
      <Main />
      <Footer data ={site} />
    </div>
  );
}

export default App;
