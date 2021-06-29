import React, { useState, useEffect } from "react";

export function NasaPhoto() {
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=peQMQo9L4YJfEIz1sS5GB9Zr0aW6YT0MN2dLtpgX";
  // Hooks das states que irão receber os dados das fotos
  const [photoData, setPhotoData] = useState(null);

  // Utilizar useEffect pra rodar a função apenas quando mudar determinado parâmetro
  useEffect(() => {
    fetchPhoto();

    // função para fazer a requisição dos dados da API
    async function fetchPhoto() {
      const res = await fetch(url);
      // transformar o dado em Json
      const data = await res.json();

      //Colocar o dado dentro do state
      setPhotoData(data);
      console.log(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <div className="nasa-photo">
      <img src={photoData.url} alt={photoData.title} className="photo" />
      <div>
        <h1>{photoData.title}</h1>
        <p className="date">{photoData.date}</p>
        <p className="explanation">{photoData.explanation}</p>
      </div>
    </div>
  );
}
