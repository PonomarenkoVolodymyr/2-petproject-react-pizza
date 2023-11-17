import styles from './PizzaError.module.scss';

const PizzaError: React.FC = () => {
  return (
    <>
      <div className={styles.root}>
        <h2>
          Виникла помилка<h4>😕</h4>
        </h2>
        <p>Схоже щось пішло не так</p>
      </div>
    </>
  );
};

export default PizzaError;
