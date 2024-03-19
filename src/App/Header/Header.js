import Nav from './Nav.js';
function Header(props) {
   return (
      <header>
      <h1>site_name: {props.data.site_name}</h1>
      <h2>site_title: {props.data.site_title}</h2>
      {/* cюда импортируется cюда импортируется компонент nav */}
      <Nav nav={props.data.nav}/>
     </header>
   );
 }
export default Header;