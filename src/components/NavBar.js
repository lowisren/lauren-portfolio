import React from "react";
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";

export default function NavBar() {
    return (
       <header className="nav-header">
           <div className="container mx-auto flex justify-between">
               <nav className="flex">
                   <NavLink 
                    to="/" 
                    exact
                    activeClassName="text-white" 
                    className="inline-flex items-center py-6 px-3 mr-4 text-white hover:text-gray-300 text-4xl font-bold mono tracking-widest mono">
                       Lauren
                   </NavLink>
                   <NavLink to="/post"
                    activeClassName="text-white bg-#558591"
                    className="inline-flex items-center py-3 px-3 mr-4 text-white hover:text-gray-300 text-2xl font-bold mono">
                       Blog Post
                   </NavLink>
                   <NavLink to="/project"
                    activeClassName="text-white bg-gray-800"
                    className="inline-flex items-center py-3 px-3 mr-4 text-white hover:text-gray-300 text-2xl font-bold mono">
                       Projects
                   </NavLink>
                   <NavLink to="/about"
                    activeClassName="text-white bg-gray-800"
                    className="inline-flex items-center py-3 px-3 mr-4 text-white hover:text-gray-300 text-2xl font-bold mono">
                       About Me!
                   </NavLink>
               </nav>
               <div className="inline-flex py-3 px-3 my-6">
                  <SocialIcon url="https://www.linkedin.com/in/lowisren" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                  <SocialIcon url="https://twitter.com/lowisren" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                  <SocialIcon url="https://github.com/lowisren/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
               </div>
           </div>
       </header> 
    )
}