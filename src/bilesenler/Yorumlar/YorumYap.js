import React, {useEffect, useState} from "react";
import Gonderi from "../Gonderiler/Gonderi";
import "./Yorumlar.css";

const YorumYap = (props) => {
  const [yeniYorum, setYeniYorum] = useState();
  const {gonderiId, yorumEkle} = props;
  
  const changeUygula = event => {
    setYeniYorum(event.target.value); 
  } 
  
  return (
    <div className="comment-form">
        <input id="comment-input" type="text"/>
        {
          useEffect(() => {
            let inputEl = document.querySelector('#comment-input');
            let i = 0;
            inputEl.addEventListener("keypress", (evnt) => {
              if(evnt.key === "Enter" && i == 0){
                setYeniYorum(inputEl.value);
                yorumEkle(gonderiId, yeniYorum);
                i++; 
              }
            })
          }) 
        }
    </div>
  );    
};

export default YorumYap;