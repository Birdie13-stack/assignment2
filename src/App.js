import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import {ErrorBoundary} from 'react-error-boundary'
import { Routes, Route, NavLink, Outlet } from "react-router-dom";

function ErrorFallback({error}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{color: 'red'}}>{error.message}</pre>
    </div>
  )
  }
function Home() {
  return (
    <main className="homepage">
  
      <h1>Hola!!</h1>
      <p>Welcome to my Webpage 🙏🏿🙏🏿</p>
      <p>
        Click the link below to contact me if you have any questions or would
        like to connect.
      </p>
      <NavLink
        // style={({ isActive }) =>
        //   isActive ? { color: "red" } : { color: "black" }
        // }
        className="navigate"
        to="/"
      >
        Home Page
      </NavLink>
      <NavLink className="navigate" to="/blog">
        Read my Blog
      </NavLink>
      <NavLink className="navigate" to="users">Our Users</NavLink>
      <NavLink className="navigate" to="/contact">
        Contact page
      </NavLink>
      </main>
  );
}

function Blog() {
  return (
    <main className="blog">
      <h1>You can check out some of our recipees and food blogs here👇!</h1>
      <p className="like">PS: Be sure to leave a heart if you like them🥰🥰🥰</p>
      <NavLink
        className="navigate"
        to="/"
      >
        Home Page
      </NavLink>
      <NavLink className="navigate" to="/blog">
        Read my Blog
      </NavLink>
      <NavLink className="navigate" to="/users">Our Users</NavLink>
      <NavLink className="navigate" to="/contact">
        Contact page
      </NavLink>
    </main>
  );
}

function Users() {
  return (
    <main className="users">
      <h1>Our recipes have been tested and are trusted by many popular chefs, in Nigeria and beyond. Check out some of our users here!</h1>
   
      
      
      
      <NavLink
        className="navigate"
        to="/"
      >
        Home Page
      </NavLink>
      <NavLink className="navigate" to="/blog">
        Read my Blog
      </NavLink>
      <NavLink className="navigate" to="/users">Our Users</NavLink>
      <NavLink className="navigate" to="/contact">
        Contact page
      </NavLink>
    </main>
  );
}

function Contact() {
  return (
    <main className="contact-me">
      <h1> Contact me</h1>
      <p className="contact">Fill the form below to reach out to me.</p>

      <NavLink
        className="navigate"
        to="/"
      >
        Home Page
      </NavLink>
      <NavLink className="navigate" to="/blog">
        Read my Blog
      </NavLink>
      <NavLink className="navigate" to="/users">Our Users</NavLink>
      <NavLink className="navigate" to="/contact">
        Contact page
      </NavLink>
      <NavLink className="navigate" to="/contact/signup">
        Sign Up
      </NavLink>
      <div>
        <Outlet />
      </div>
    </main>
  );
}

function SignUp() {
  return (
    <main className="sign-up">
      <h1> Sign up to my weekly newsletter</h1>
    </main>
  );
}

function NotFound() {
  return (
    <div className="notFound">
      <h1>404!</h1>
      <h1>Oops, you seem to be lost!</h1>
      <p>Here are some useful links:</p>
      <NavLink to="/" className="navigate">
        Home
      </NavLink>
      <NavLink to="/contact" className="navigate">
        Contact
      </NavLink>
      <NavLink className="navigate" to="users">Our Users</NavLink>
      <NavLink to="/contact/signup" className="navigate">
        Signup
      </NavLink>
    </div>
  );
}

function App() {
  
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
    <main className="main-container">
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />}>
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </Router> */}
    </main>
    </ErrorBoundary>
  );
}
export default App;
