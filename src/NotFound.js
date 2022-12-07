import {  NavLink } from "react-router-dom";
 function NotFound() {
  return (
    <div>
      <h1>Oops, you seem to be lost!</h1>
      <p>Here are some useful links:</p>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/contact/signup">Signup</NavLink>
    </div>
  );
}


// function App() {
//     return (
//         <Routes>
//         <Route path='*' element={<NotFound />}/>
//         </Routes>
//     )
// }

export default NotFound ;
