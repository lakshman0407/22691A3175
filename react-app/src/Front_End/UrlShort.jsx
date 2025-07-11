import { useState } from "react";

function UrlShortned() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = () => {
    if (!longUrl) {
      alert("Please enter a URL");
      return;
    }

    const code = Math.random().toString(36).substring(2, 8);
    const newShort = `https://short.ly/${code}`;

    setShortUrl(newShort);
    localStorage.setItem(code, longUrl);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Simple URL Shortener</h2>

      <input
        type="text"
        placeholder="Enter long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        style={{ padding: "8px", width: "300px", marginBottom: "10px" }}
      />

      <br />

      <button onClick={handleShorten} style={{ padding: "8px 16px" }}>
        Shorten
      </button>

      {shortUrl && (
        <div style={{ marginTop: "20px" }}>
          <p>Short URL:</p>
          <a href={shortUrl} target="_blank" rel="noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default UrlShortned;
