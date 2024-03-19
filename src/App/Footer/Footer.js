function Footer (props){
   return (
      <footer>
	      <h3>site_name</h3>
	      {/* сюда импортируем компонент nav */}
        <p>{props.data.site_name}</p> 
         <h5>{props.data.site_title}</h5>
      </footer>
   );
}
export default Footer;