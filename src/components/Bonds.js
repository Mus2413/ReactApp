import React from 'react'
import DataTable from 'react-data-table-component'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import '../cssfiles/Bonds.css'
import axios from 'axios'
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";



const Bonds = () => {
  const style_icon = { fontSize: "1.5em" }
  const [bondsdata, setBonds] = useState([]);
  const getBonds = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v2/all");
      setBonds(response.data);

    } catch (error) {
      console.log(error);
    }
  };
  

  const columns = [
    {
      name: "Country Name",
      selector: row => row.name
    },
    {
      name: "Country Native Name",
      selector: row => row.nativeName,
      sortable: true,
    },
    {
      name: "Country Capital",
      selector: row => row.capital
    },
    {
      name: "Country Flag",
      selector: row =>

        <Button className={`${row.capital}` === "Kabul" ? "statusbutton" :
          `${row.capital}` === "Luanda" ? "color_yellow" : "color_red" } >
          {row.capital}   </Button>
    },
    {
      name: "Action",
      cell: row => <div><FiEdit style={style_icon} /> <MdDelete style={style_icon}></MdDelete></div>
    }
  ];
  useEffect(() => {
    getBonds();
  }, []);



  return (
    <DataTable 
      striped hover
      title="All Bonds "
      columns={columns}
      data={bondsdata}
      pagination
      fixedHeader
      fixedHeaderScrollHeight='800px'
      selectableRows
      selectableRowsHighlight
      highlightOnHover
      >
      
    </DataTable>
  )
}

export default Bonds