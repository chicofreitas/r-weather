import axios from "axios";
import React from "react";

const baseURL = "https://api.openweathermap.org/data/2.5/forecast?lat=-5.091003859078568&lon=-42.78639675351683&units=metric&appid=d04dce313275a411851e5bc70fe91408"

export default function App() {

  const [post, setPost] = React.useState(null);

  React.useEffect(() =>{
    axios.get(baseURL).then((response)=>{
      setPost(response.data);
    });
  }, []);

  if(!post) return null;
  console.log(post.list[0].weather[0].main);
  return (
    <div>
      <h1>{post.city.name}</h1>
      <p>{post.list[0].weather[0].main}</p>
      <p>{post.list[0].weather[0].description}</p>
      <h2>Temperature:</h2>
      <strong>{post.list[0].main.temp} °C</strong>
      <p>Min: {post.list[0].main.temp_min} °C</p>
      <p>Max: {post.list[0].main.temp_max} °C</p>

      <h1>Velocidade do vento</h1>
    </div>
  )
}