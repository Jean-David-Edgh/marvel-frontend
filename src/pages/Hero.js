import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Hero = () => {
  const { id } = useParams();
  const params = useParams();
  console.log(params);

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/hero/${id}`);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div className="hero-container">
      <div className="hero">
        <p>{data.name}</p>
        {/* <img
          src={data.thumbnail.path + "." + data.thumbnail.extension}
          alt={data.name}
        /> */}
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Hero;
