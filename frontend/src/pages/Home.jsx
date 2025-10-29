import React, { useEffect, useState } from "react";
import api from "../services/api";
const Home = () => {
  const [samples, setSamples] = useState([]);
  useEffect(() => { api.get("/samples").then((res) => setSamples(res.data)); }, []);
  return (
    <div style={{ padding: "2rem" }}>
      <h3>🚀 Deployed MERN App</h3>
      <ul>{samples.map((s) => (<li key={s._id}>{s.name}: {s.message}</li>))}</ul>
    </div>
  );
};
export default Home;
