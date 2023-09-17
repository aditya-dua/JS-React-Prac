import { useState, useEffect } from "react";

const useCurrencyConverter = (obj) =>{
    const [currency,setCurrency]=useState(null);

    useEffect(()=>{  
        
        setCurrency(obj.price*83.09);

    });

      return [currency];
}

export default useCurrencyConverter;