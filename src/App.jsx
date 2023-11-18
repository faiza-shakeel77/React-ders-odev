import "./App.css";

function Yazi({id,url,baslik,yazar,yorum_sayisi,puan}){

  return(
    <li key={id}>
              <span>
                <a href={url}>{baslik}</a>, 
              </span>
              <span><b>Yazar:</b> {yazar},{""} </span>
              <span><b>Yorum Sayısı:</b> {yorum_sayisi},{""} </span>
              <span><b>Puan:</b> {puan}</span>
            </li>


  );
}
function Liste(props) {
  return(
    <ul>
     {props.yazilar.map(function(yazi){
      return <Yazi key={yazi.id} {...yazi}/>;

   })}{""}
    </ul>     

  );
}
import React from 'react'
function Arama({aramaMetni,onSearch}) {
  const handleChange=(event)=>onSearch(event);
  
  return (
    <div>
    <label htmlFor="arama">Ara: </label>
    <input id="arama" type="text" onChange={handleChange} value={aramaMetni}/>

    </div>
  );
}

function App() {
  const [aramaMetni,setAramaMetni]=React.useState(localStorage.getItem("aranan")||"React");
  React.useEffect(()=>{
    localStorage.setItem("aranan",aramaMetni);
  },[aramaMetni]);
  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Asim Yuksel",
      yorum_sayisi: 5,
      puan: 3,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Sinan Yuksel",
      yorum_sayisi: 4,
      puan: 3,
      id: 1,
    },
    {
      baslik: "React Native",
      url: "wwww.google.com.tr",
      yazar: "Faiza Shakeel",
      yorum_sayisi: 3,
      puan: 5,
      id: 2,
    },
    {
      baslik: "Node JS",
      url: "wwww.google.com.tr",
      yazar: "Faiza Shakeel",
      yorum_sayisi: 1,
      puan: 4,
      id: 4,
    },
    {
      baslik: "Algoritma Ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Faiza Shakeel",
      yorum_sayisi: 0,
      puan: 1,
      id: 5,
    },

  ];

  const arananYazilar=yaziListesi.filter(
    (item) =>
      item.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      item.yazar.toLowerCase().includes(aramaMetni.toLowerCase())
  );

  //1. asama: callback metodu olusturma 
  //State-> her bilesen kendini ait durumu tututar (sinav soru)
  // state nedir props nedir Effect nedir? (sinav soru)
  //For the callBack handler function
  const handleSearch = (event) => setAramaMetni(event.target.value);

    //localStorage.setItem("aranan",event.target.value);
  
  
  return (
    <div>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch}/>
      <p>
         <strong>{aramaMetni + " aranıyor.."}</strong>
      </p>
      <hr />
       {arananYazilar.length === 0 ? (
        <b style={{ color: "black", fontSize: 25}}>ARANAN İÇERİK BULUNAMADI!</b>
      ) : (
        <Liste yazilar={arananYazilar} />
      )}
    </div>
  );
}
export default App;