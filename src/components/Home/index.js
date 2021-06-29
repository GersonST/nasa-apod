import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/images/nasa-logo.png";
import "./styles.scss";

export function Home() {
  const history = useHistory();
  const [newDate, setNewDate] = useState("");
  const [newUrl, setNewUrl] = useState(null);

  useEffect(() => {
    // NASA API link
    const queryUrl = "https://api.nasa.gov/planetary/apod?";
    // API KEY
    const queryKey = "api_key=peQMQo9L4YJfEIz1sS5GB9Zr0aW6YT0MN2dLtpgX";
    // Selected date
    let queryDate = "date=" + newDate + "&";
    // Full query
    let queryfull = queryUrl + queryDate + queryKey;

    setNewUrl(queryfull);
    localStorage.nasaUrl = newUrl;
    console.log(newUrl);
  }, [newDate, newUrl]);

  console.log(newDate);

  function handleSubmit(e) {
    e.preventDefault();
    history.push("/nasaphoto");
  }

  return (
    <div>
      <div className="container">
        <img className="logo" src={logo} alt="Nasa Logo" />
        <h1>Astronomy Picture of the Day</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="date"
            id="date"
            onChange={(event) => setNewDate(event.target.value)}
          />{" "}
          <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
