import React, { useState } from "react";
import {accData} from './Data'
import MyAccordian from './MyAccordian'
const Accordian = () => {
  const [data, setdata] = useState(accData);  
   



return <>

<div className="main-box container">
    <h1 >Know about react</h1>
{
    data.map((elm , index) => {
     return   <MyAccordian key={elm.id} index={index} question={elm.question} data={data}  answer={elm.answer} />
    })
}
   
</div>

  </>;
};

export default Accordian;
