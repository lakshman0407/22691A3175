import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

const style = document.createElement("style");
style.innerHTML = `
body { font-family: Arial; margin: 0; background: #f0f4f8; }
.container, .stats-container {
  max-width: 800px; margin: 30px auto; padding: 20px;
  background: white; border-radius: 10px;
}
.input, .button { padding: 10px; margin: 5px; }
.result, .error, .stat-card { background: #f9f9f9; margin-top: 20px; padding: 15px; border-radius: 8px; }
.nav a { margin: 0 10px; text-decoration: none; color: white; background: #2b6cb0; padding: 8px 12px; border-radius: 6px; }
`;
document.head.appendChild(style);

// URL Shortener Page
const URLShortenerPage = () => {
  const [urls, setUrls] = useState([{ longUrl: "", validity: "", shortcode: "" }]);
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const code = location.pathname.substring(1);
    const map = JSON.parse(localStorage.getItem("urlMappings") || "{}");
    if (code && map[code]) {
      const clicks = JSON.parse(localStorage.getItem("clickStats") || "{}");
      if (!clicks[code]) clicks[code] = [];
      clicks[code].push({
        timestamp: Date.now(),
        referrer: document.referrer,
        location: Intl.DateTimeFormat().resolvedOptions().timeZone,
      });
      localStorage.setItem("clickStats", JSON.stringify(clicks));
      window.location.replace(map[code].longUrl);
    }
  }, [location]);

  const handleChange = (i, field, val) => {
    const updated = [...urls];
    updated[i][field] = val;
    setUrls(updated);
  };

  const validate = () => {
    const err = [];
    urls.forEach((u, i) => {
      if (!u.longUrl.trim()) err.push(`Row ${i + 1}: Long URL is required`);
      else if (!/^https?:\/\//.test(u.longUrl)) err.push(`Row ${i + 1}: Invalid URL`);
      if (u.validity && (!/^[0-9]+$/.test(u.validity) || u.validity <= 0))
        err.push(`Row ${i + 1}: Validity must be positive number`);
      if (u.shortcode && !/^[a-zA-Z0-9]+$/.test(u.shortcode))
        err.push(`Row ${i + 1}: Shortcode must be alphanumeric`);
    });
    return err;
  };

  const generateCode = () => Math.random().toString(36).substring(2, 8);

  const handleSubmit = () => {
    const errs = validate();
    if (errs.length) return setErrors(errs);
    const map = JSON.parse(localStorage.getItem("urlMappings") || "{}");
    const now = Date.now();
    c
