import React, { useEffect, useState } from "react";
import Api from "./Api";

export default function App() {
  const [prod,infoProd] = useState({});
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  const [invalid, setInvalid] = useState("");
  const [numberInvalid, setNumberInvalid] = useState("");
  function showList() {
   if (text) { setOpen(true)
   }
   if(!prod.products){
    return setInvalid("Digite um valor");
   } else {
     setInvalid("")
   }

   if(text !== prod.products.name) {
     return setNumberInvalid('error100');
   } else {
    setNumberInvalid("")
   }
  }
  
  
  useEffect (() => {
    if (text) {
      fetch('https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=camiseta&source=nanook')
      .then((response) => response.json())
      .then((response) => {
         infoProd(response);
      })
    }

  }, [text]);
  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <Api 
       value={text}
       onChange={(search) => setText(search)}
      />
      <button onClick={showList}>
        Buscar 
      </button> 
      { open && prod.products && (
        <ul>
          {prod.products.map( produtos => (
            <li key={produtos.products}>
              {produtos.products}
              {produtos.name}
              {produtos.type}
              
            </li>
          ))}
        </ul>
      )}
      <h1>{invalid}</h1>
    </div>
  );
}


    
 