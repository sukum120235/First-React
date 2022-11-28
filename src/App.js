import React from "react";
import Transaction from "./components/Transaction";
import "./App.css";
import FormComponents from "./components/FormComponents";
import { useState } from "react";
import DataContext from "./data/DataContext";
import ReportComponents from "./components/ReportComponents";



const Header = {color:"red", textAlign:"center", fontSize:"1.5rem"}

function App() {

  // const initData = [
  //   {id: 1 ,title: 'เงินเดือน' , amount: 20000},
  //   {id: 2 ,title: 'ค่ารถ' , amount: 2000},
  //   {id: 3 ,title: 'ค่าอาหาร' , amount: 9800},
  //   {id: 4 ,title: 'ค่าผ่อนบ้าน' , amount: 9800},
  //   {id: 5 ,title: 'ค่าน้ำ-ค่าไฟ' , amount: 1500},
  // ]
  // const [items,setItems] = useState(initData)
  const [items,setItems] = useState([])

  const onAddNewitem = (newItem) => {
    setItems((prevItem) =>{
      return [newItem,...prevItem]
    })
  }

  return (
    <DataContext.Provider value="ming">
      <h1 style={Header}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
      <ReportComponents/>
      <FormComponents onAdditem={onAddNewitem}/>
      <Transaction item={items}/>
    </DataContext.Provider>
  );
}

export default App;
