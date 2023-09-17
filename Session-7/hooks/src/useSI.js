import { useState, useEffect } from "react";

const useSI = (obj) =>{
    const [interest,setInterest]=useState(null);

    useEffect(()=>{  
        
        setInterest((obj.pri*obj.time*obj.rate)/100)

      });

      return [interest];
}

export default useSI;