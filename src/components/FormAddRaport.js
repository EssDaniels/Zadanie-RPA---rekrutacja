import React, { Component } from 'react';



class FormAddRaport extends Component{
  state = {
    data: '',
    city: '',
    temperature: '',
    unit: ''

  }

  

  handleChange = (e) =>{
      const name = e.target.name;
      const dataValue = e.target.value
      this.setState({
        [name] : dataValue
      })

  }
  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.add(this.state.data, this.state.city, this.state.temperature,this.state.unit);
  }

  render(){   
    return(
      <>
      <div className="w-full max-w-md space-y-8">
       <form  className="flex flex-col px-10" onSubmit={this.handleSubmit}>
        <label  className="text-slate-200 my-4" htmlFor="data">Data</label>
        <input className="border-2 border rounded-md text-center  p-2" type="date" name="data" id="data" value={this.state.data} onChange={this.handleChange}/>
        <label className="text-slate-200 my-4"  htmlFor="city">Miasto</label>
        <input className="border-2 border rounded-md p-2" type="text" name="city"  id="city" value={this.state.city} onChange={this.handleChange}/>
        <label className="text-slate-200 my-4"  htmlFor="temperature">Wartość temp</label>
        <input className="border-2 border rounded-md p-2" type="number" name="temperature" id="temperature" value={this.state.temperature} onChange={this.handleChange}/>
        <label className=" text-slate-200 my-4"  htmlFor="unit">Jednostka</label>
        <select className="border-2 border rounded-md text-center p-2" name="unit" id="unit" onChange={this.handleChange}>
          <option value="K" className='text-gray-700 block px-4 py-2 text-sm' selected="true" disabled="disabled">Wybierz jednostkę</option>
          <option value="K" className='text-gray-700 block px-4 py-2 text-sm'>K</option>
          <option value="C" className='text-gray-700 block px-4 py-2 text-sm'>C</option>
          <option value="F" className='text-gray-700 block px-4 py-2 text-sm'>F</option>
        </select>
        <button  className="enabled:hover:hover:bg-indigo-700 disabled:opacity-50 my-4 group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" disabled={!(this.state.data && this.state.city && this.state.temperature && this.state.unit)}>Dodaj raport</button>
      </form>
      </div>
      </>
    )
  }
  
}

export default FormAddRaport;