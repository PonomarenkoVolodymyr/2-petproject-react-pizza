import styles from './PizzaError/PizzaError.module.scss';

const PizzaNotFound: React.FC = () => {
  return (
    <>
      <div className={styles.root}>
        <h2>
          Виникла помилка<h4>😕</h4>
        </h2>
        <p>Обрана піцца відсутня в нашій піццерії</p>
      </div>
    </>
  );
};

export default PizzaNotFound;
