import Item from "./Item";
import DataContext from "../data/DataContext";
import { useContext } from "react";

const Transaction = ({item}) => { 
      
    const name = useContext(DataContext)
    return (
        <>
            <ul style={{padding:0}}> 
                {item.map((e) => {
                    // return <Item key={index} title={e.title} amount={e.amount}/>
                    return <Item key={e.id} {...e}/>
                })} 
            </ul>
            {name}             
        </>
    );
}

export default Transaction;