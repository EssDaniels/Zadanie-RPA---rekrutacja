import React from "react";  

const GetRaportFetch = props =>(
  <div className="w-full max-w-md space-y-8 px-10 mb-10">
    <button  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={props.click}>Pobierz raporty</button>
  </div>
)

export default GetRaportFetch;