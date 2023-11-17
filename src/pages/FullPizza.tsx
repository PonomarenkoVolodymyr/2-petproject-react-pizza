import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Loader from '../components/Loader';

const FullPizza: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          'https://64da6791e947d30a260b38d1.mockapi.io/items/' + id
        );
        setPizza(data);
      } catch (error) {
        alert(
          'Такої піцци не існує! Ви будете направлені на головну сторінку!'
        );

        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  return (
    <div className="container">
      {!pizza ? (
        <Loader />
      ) : (
        <>
          <img src={pizza.imageUrl} alt={pizza.title} />
          <br />
          <h2>{pizza.title}</h2>
          <br />
          <h2>{pizza.price} ₴</h2>
          <br />
        </>
      )}
      <Link to="/" className="button button--outline button--add go-back-btn">
        <span>🡰 На головну</span>
      </Link>
    </div>
  );
};

export default FullPizza;
