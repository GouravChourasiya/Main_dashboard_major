import React from 'react'
import "../Editor/asset/css/maindashboard.css"
function maindashboard() {
  return (
    <div>
    <nav>
        <ul>
          <li className='Logo'>CODERAGE</li>
          <li>Prepare</li>
          <li>Profile </li>
          <li>Compete</li>
        </ul>
    </nav>
    <div className='main'>
    <ul>
      <li><div className='Container'><h2>C</h2><button className='main_btn'>Prepare C</button></div></li>
      <li><div className='Container'><h2>C++</h2><button className='main_btn'>Prepare C++</button> </div></li>
      <li><div className='Container'><h2>Java</h2><button className='main_btn'>Prepare Java</button></div></li>
      <li><div className='Container'><h2>Python</h2><button className='main_btn'>Prepare Python</button></div></li>
    </ul>
    </div>
    </div>
  
  )
}

export default maindashboard