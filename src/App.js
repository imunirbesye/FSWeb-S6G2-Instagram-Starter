/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React, {useState} from "react";

// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
// sahteVeri'yi import edin
import "./App.css";
import Gonderiler from "./bilesenler/Gonderiler/Gonderiler";
import AramaCubugu from "./bilesenler/AramaCubugu/AramaCubugu";
import sahteVeri from "./sahte-veri";

const App = () => {
  // Gönderi nesneleri dizisini tutmak için "gonderiler" adlı bir state oluşturun, **sahteVeri'yi yükleyin**. 
  // Artık sahteVeri'ye ihtiyacınız olmayacak.
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.
  const [gonderiler, setGonderiler] = useState(sahteVeri);
  const [aranacak, setAranacak] = useState();
  const [begenilenler, setBegenilenler] = useState([]);

  const yorumEkle = (gonderiId, yeniYorum) => {
    gonderiler.map((item) => {
      if(gonderiId === item.id){
        item.comments.push({
          id: Math.floor(Math.random() * 10000000),
          username: "imunirbesye",
          text: yeniYorum
        });
      }
    })
  };

  const aramaYap = (gelenArama) => {
    setAranacak(gelenArama); 
    if(gelenArama != ""){
      let aramaSonucu = gonderiler.filter(gonderi => {
        if(gonderi.username.includes(gelenArama))
          return gonderi;
      });
      setGonderiler(aramaSonucu);
    } else {
      setGonderiler(sahteVeri);
    }
  };

  const gonderiyiBegen = (gonderiID) => {
    /* 
      Bu fonksiyon, belirli bir id ile gönderinin beğeni sayısını bir artırma amacına hizmet eder.

      Uygulamanın durumu, React ağacının en üstünde bulunur, ancak iç içe geçmiş bileşenlerin stateleri değiştirememesi adil olmaz!
      Bu fonksiyon, belirli bir gönderinin beğeni sayısını artırılmasına olanak sağlamak amacıyla iç içe geçmiş bileşenlere aktarılır.

	  "setGonderi" yi çağırın ve state ine "posts.map" çağrısını iletin.
      `map` içine iletilen callback aşağıdaki mantığı gerçekleştirir:
        - gönderinin idsi "gonderiID" ile eşleşirse, istenen değerlerle yeni bir gönderi nesnesi döndürün.
        - aksi takdirde, sadece gönderi nesnesini değiştirmeden döndürün.
     */

    if(!begenilenler.includes(gonderiID)) {
      setGonderiler(gonderiler.map((gonderi) => {
        if(gonderiID === gonderi.id)
          gonderi.likes++;
          return gonderi;
      }));    
      begenilenler.push(gonderiID)
      setBegenilenler(begenilenler);
    }
  };

  return (
    <div className="App">
      {/* Yukarıdaki metni projeye başladığınızda silin*/}
      {/* AramaÇubuğu ve Gönderiler'i render etmesi için buraya ekleyin */}
      <AramaCubugu aramaYap={aramaYap}/> 
      <Gonderiler gonderiler={gonderiler} gonderiyiBegen={gonderiyiBegen} yorumEkle={yorumEkle}/>
      {/* Her bileşenin hangi proplara ihtiyaç duyduğunu kontrol edin, eğer ihtiyaç varsa ekleyin! */}
    </div>
  );
};

export default App;