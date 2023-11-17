import { Link } from 'react-router-dom';
import cartEmptyImg from '../assets/img/empty-cart.png';

const CartEmpty: React.FC = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>Корзина порожня</h2>
        <h4>😕</h4>
        <p>
          Скоріше за все, Ви ще не обрали піццу.
          <br />
          Для замовлення оберіть піццу на головній сторінці.
        </p>
        <img src={cartEmptyImg} alt="Empty cart" />

        <Link to="/" className="button button--black">
          <span>Повернутись назад</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
