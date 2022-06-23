import React from 'react';
import { Routes, Route } from "react-router-dom";
import  {Home} from '../Pages/Home';


export const Routing:React.FC<{}> = () =>{
    return(
        <Routes>
            <Route path="*" element={<Home/>}></Route>
        </Routes>
    )
}