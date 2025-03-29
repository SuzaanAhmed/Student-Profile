import React from 'react'

export default function Navbar(){
  return (
    <div>
        <nav className="flex bg-yellow-100 h-[80px]">
    <img className="w-[90px] h-[90px]" src="image.png"/>
    <div className="flex items-center gap-2">
    </div>
    <div className="flex">  
      <a href="/" className="hover:bg-yellow-200 m-4 px-3 pb-9 pt-3 rounded">About Me</a>
      <a href="/resume" className="hover:bg-yellow-200 m-4 px-3 pb-9 pt-3 rounded">Resume</a>
      <a href="https://github.com/" className="hover:bg-yellow-200 m-4 px-3 pb-9 pt-3 rounded">Projects</a>
    </div>
    </nav>
    </div>
  );
}
