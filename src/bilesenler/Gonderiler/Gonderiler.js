import React from "react";
import Gonderi from "./Gonderi";
import "./Gonderiler.css";

const Gonderiler = (props) => {
  const { gonderiler, gonderiyiBegen, yorumEkle} = props;

  return (
    <div className="posts-container-wrapper">
      {/* gönderiler dizisini işleyip her döngüde bir Gönderi bileşeni çağırın*/
        gonderiler.map((post) => 
          <Gonderi key={post.id} gonderi={post} gonderiyiBegen={gonderiyiBegen} yorumEkle={yorumEkle}/> 
        )
      }
      {/* Gönderi'nin çağırılmasında hangi propları kullanmanız gerektiğine dikkat edin! */}
    </div>
  );
};
  
export default Gonderiler; 