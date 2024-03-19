function Nav(props){
   return (
      <nav>
         <ul className="main-navigation">
            здесь будет распечатан props
           {props.nav.map(item=>(
            <li key={item.link}>
               <a href={item.link}>{item.text}</a>
            </li>
           ))}
         </ul>
      </nav>

   );
}
export default Nav;