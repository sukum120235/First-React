import DataContext from "../data/DataContext"
import { useContext } from "react";


const ReportComponents = () =>{

    const name = useContext(DataContext)

    return (
        <div>
            {name}dsddsaddsdds
        </div>
    );
}

export default ReportComponents