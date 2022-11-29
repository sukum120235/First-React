import Item from "./Item";

const Transaction = ({item}) => { 
      
    return (
        <>
            <ul style={{padding:0}}> 
                {item.map((e) => {
                    // return <Item key={index} title={e.title} amount={e.amount}/>
                    return <Item key={e.id} {...e}/>
                })} 
            </ul>                   
        </>
    );
}

export default Transaction;