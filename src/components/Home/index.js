import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/images/nasa-logo.png";
import "./styles.scss";

export function Home() {
  const history = useHistory();
  const [newDate, setNewDate] = useState("");
  const [newUrl, setNewUrl] = useState("");

  async function handleDate(e) {
    e.preventDefault();
    setNewDate(e.target.value);

    // NASA API link
    let queryUrl = "https://api.nasa.gov/planetary/apod?";
    // API KEY
    let queryKey = "api_key=peQMQo9L4YJfEIz1sS5GB9Zr0aW6YT0MN2dLtpgX";
    // Selected date
    let queryDate = "date=" + newDate + "&";
    // Full query
    setNewUrl(queryUrl + queryDate + queryKey);

    await console.log(newUrl);
    return newUrl;
  }

  function handleSubmit(event) {
    event.preventDefault();
    history.push({
      pathname: "/nasaphoto",
      state: newUrl,
    });
  }

  return (
    <div>
      <div className="container">
        <img className="logo" src={logo} alt="Nasa Logo" />
        <h1>Astronomy Picture of the Day</h1>
        <form>
          <input type="date" id="date" value={newDate} onChange={handleDate} />
          <button type="submit" onClick={handleSubmit}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
