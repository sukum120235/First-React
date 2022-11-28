import { useEffect, useState } from 'react'
import './FormComponents.css'
import { v4 as uuidv4 } from 'uuid';

const FormComponents = props =>{

    const [title,setTitle] = useState("")
    const [amount,setAmount] = useState("")
    const [formValid,setFormvalid] = useState(false)

    const inputTiltle = (e) =>{
        setTitle(e.target.value)
    }
    const inputAmount = (e) =>{
        setAmount(e.target.value)
    }
    const saveItem = (e) =>{        
        e.preventDefault()    
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAdditem(itemData)
        setTitle('')
        setAmount('')
    }

    useEffect(() => {
        const checkdata = title.trim().length > 0 && amount !== ""
        setFormvalid(checkdata)
    },[title,amount])

    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุรายการ" onChange={inputTiltle} value={title}></input>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="จำนวนเงิน" onChange={inputAmount} value={amount}></input>
                </div>
                <div>
                    <button type="submit" className="btn" disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    );
}

export default FormComponents