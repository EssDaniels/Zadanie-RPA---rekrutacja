import React, { useState } from "react";
import DeleteRaport from "./DeleteRaport";


const Sort = props => {
  

  const [sortType, setSortType] = useState({ column: 'date', direction: 'asc' });
  const [cityFilter, setCityFilter] = useState(''); // nowy stan dla filtrowania po mieście

  const handleSort = column => {
    if (sortType.column === column) {
      setSortType({
        column,
        direction: sortType.direction === "asc" ? "desc" : "asc"
      });
    } else {
      setSortType({ column, direction: "asc" });
    }
  };

  const sortIcon = column => {
    if (sortType.column === column) {
      return sortType.direction === "asc" ? "↑" : "↓";
    }
  };

  const handleCityFilter = e => {
    setCityFilter(e.target.value);
  }

  const handleFilterSubmit = e => {
    e.preventDefault();
    // tutaj możesz dodać jakąś akcję po kliknięciu przycisku filtruj
  }
  const sortData = (data, column, direction) => {
    // filtrowanie po mieście
    let filteredData = data.filter(item => item.city.toLowerCase().includes(cityFilter.toLowerCase()));
    // sortowanie po wybranej kolumnie
    return filteredData.sort((a, b) => {
      if (direction === "asc") {
        if (a[column] > b[column]) return 1;
        if (a[column] < b[column]) return -1;
        return 0;
      } else {
        if (a[column] < b[column]) return 1;
        if (a[column] > b[column]) return -1;
        return 0;
      }
    });
  };

  return (
    <>
      <thead>
        <th className="bg-slate-900 border border-slate-600 py-2 px-4" onClick={() => handleSort("date")}>
          Data {sortIcon("date")}
        </th>
        <th className="bg-slate-900 border border-slate-600 py-2 px-4"  onClick={() => handleSort("city")}>
          Miasto {sortIcon("city")}
        </th>
        <th className="bg-slate-900 border border-slate-600 py-2 px-4" onClick={() => handleSort("temperature")}>
          Wartość {sortIcon("temperature")}
        </th>
        <th className="bg-slate-900 border border-slate-600 py-2 px-4" onClick={() => handleSort("unit")}>
        Jednostka {sortIcon("unit")}
        </th>
        <th className="bg-slate-900 border border-slate-600 py-2 px-4">

        </th>
      </thead>
      {props.children(sortType.column && sortData(props.data, sortType.column, sortType.direction))}
     
    </>
    );
};


const RaportsList = props => {
  return (
          <table className="mx-10 text-slate-200 table-auto border-collapse border border-slate-500">
              <Sort data={props.raports}>
              {sortedData => {
              const raports = sortedData.map(raport => (
              <tr key={raport.id}>
              <td className="border border-slate-600 py-2 px-4">{`${raport.date}`}</td>
              <td className="border border-slate-600 py-2 px-4">{`${raport.city}`}</td>
              <td className="border border-slate-600 py-2 px-4">{`${raport.temperature}`}</td>
              <td className="border border-slate-600 py-2 px-4">{`${raport.unit}`}</td>
              <td className="border border-slate-600 py-2 px-4">< DeleteRaport click={raport.id} onClick={() => this.handleSort("id")} /></td>
              </tr>  
              ));
              return <tbody>{raports}</tbody>;
              }}
              </Sort>
          </table>
          );
      };

export default RaportsList;  