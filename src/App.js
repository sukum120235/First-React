import React, { useEffect, useReducer } from "react";
import Transaction from "./components/Transaction";
import "./App.css";
import FormComponents from "./components/FormComponents";
import { useState } from "react";
import DataContext from "./data/DataContext";
import ReportComponents from "./components/ReportComponents";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";

const Header = {color:"red", textAlign:"center", fontSize:"1.5rem"}

function App() {

  const initData = [
    {id: 1 ,title: 'เงินเดือน' , amount: 20000},
    {id: 2 ,title: 'ค่ารถ' , amount: -2000},
    {id: 3 ,title: 'ค่าอาหาร' , amount: -9800},
    {id: 4 ,title: 'ค่าผ่อนบ้าน' , amount: -9800},
    {id: 5 ,title: 'ค่าน้ำ-ค่าไฟ' , amount: -1500},
  ]
    const [items,setItems] = useState(initData)
    // const [items,setItems] = useState([])
    const [reportIncome,setIncome]= useState()
    const [reportExpense,setExpense]= useState()

    const onAddNewitem = (newItem) => {
      setItems((prevItem) =>{
          return [newItem,...prevItem]
        })
    }

    useEffect(() =>{
      const amounts = items.map((items) => items.amount)
      const income = amounts.filter(e => e>0).reduce((total,e) => total+=e,0)
      const expense = (amounts.filter(e => e<0).reduce((total,e) => total+=e,0))*-1
      setIncome(income)
      setExpense(expense)
    },[items,reportIncome,reportExpense])

    // const [showReport,setShowReport] = useState(true)

    // const reducer = (state,action) => {
    //     switch(action.type){
    //       case "SHOW" :
    //         return setShowReport(true)
    //       case "HIDE" :
    //         return setShowReport(false)
    //       default :
    //         return state
    //     }
    // }

    // const [result,dispatch] = useReducer(reducer,showReport)

    // {/* <button onClick={() => dispatch({type:"SHOW"})}>แสดง</button>
    //   <button onClick={() => dispatch({type:"HIDE"})}>ซ่อน</button>    */}
    //   {/* <input type="checkbox" onClick={(e) =>e.target.checked === true ? dispatch({type:"SHOW"}): dispatch({type:"HIDE"})} ></input> */}
    //   {/* {showReport && <ReportComponents/>} */}
  return (
    
    <DataContext.Provider value={{income : reportIncome,expense : reportExpense}}>
      <h1 style={Header}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>  
      <Router>
        <div>
          <ul className="horizontal-menu">
            <li>
              <Link to="/">ข้อมูลบัญชี</Link>
            </li>
            <li>
              <Link to="/insert">บันทึกข้อมูล</Link>
            </li>
          </ul>  
          <Routes>
            <Route index path="/" 
              element={<ReportComponents/>}>
            </Route>
            <Route path="/insert" 
              element={
              <>
                <FormComponents onAdditem={onAddNewitem}/> 
                <Transaction item={items}/>
              </>
              }
            ></Route>
          </Routes>   
        </div> 
      </Router>           
    </DataContext.Provider>
    
  );
}

export default App;
