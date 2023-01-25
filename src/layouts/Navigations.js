import React from 'react'
import { NavLink} from 'react-router-dom'


const Navigations = () => {
  return (
        <ul className="mx-10 text-slate-200 table-auto border-collapse border border-slate-500 mb-5 flex p-5">
          <li><NavLink className="mx-2" to="/" exact="true">Raporty</NavLink></li>
          <li><NavLink className="mx-2" to="/add">Dodaj raport</NavLink></li>
        </ul>
  )
}

export default Navigations