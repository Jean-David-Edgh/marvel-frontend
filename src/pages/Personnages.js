import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Personnages = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/personnages");
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div className="personnages">
      {data.results.map((hero) => {
        return (
          <Link key={hero._id} to={`/personnages/hero/${hero._id}`}>
            <div>
              <img
                src={hero.thumbnail.path + "." + hero.thumbnail.extension}
                alt={hero.name}
              />
              <p>{hero.name}</p>
              <p>{hero.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Personnages;
