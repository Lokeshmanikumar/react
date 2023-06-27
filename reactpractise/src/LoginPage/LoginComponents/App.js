import "./App.css"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Header from "./Header"
import Submit from "./SubmitForm"
import NotFound from "./NotFound"
import Projects from "./Projects"
import FeaturedProjects from "./FeaturedProjects"
import NewProjects from "./NewProjects"
import UsersComponent from "./UsersComponent"
import UsersDetails from "./UsersDetails"
import Login from "./Login"
import {Routes,Route} from "react-router-dom"
import {AuthProvider} from "./Auth"

const App = () => {
  return(
    <AuthProvider >
      <Header/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/Submit" element = {<Submit/>}/>
        <Route path = "/projects" element = {<Projects/>}/>
        <Route path = "/featuredprojects" element = {<FeaturedProjects/>}/>
        <Route path = "/newprojects" element = {<NewProjects/>}/>
        <Route path = "/users" element = {<UsersComponent/>}/>
        <Route path = "/users/:userId" element = {<UsersDetails/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "*" element = {<NotFound/>}/>
      </Routes>
    </AuthProvider>
  )
}

export default App  