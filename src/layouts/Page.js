import React from 'react'
import { Routes, Route } from 'react-router-dom';
import ListRaport from './../pages/ListRaport';
import FormRaport from './../pages/FormRaport';
import EditRecordForm from './../pages/FormEdit'


const Page = (props) => {
  return (
        <Routes>
          <Route path='/' element={<ListRaport />}/>
          <Route path='/add' element={<FormRaport />}/>
          <Route path='/edit' element={<EditRecordForm data={props}/>}/>
        </Routes>
  )
}

export default Page;