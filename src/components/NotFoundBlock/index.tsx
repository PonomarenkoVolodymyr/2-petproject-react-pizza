import styles from './NotFound.module.scss';
const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Упс! Нічого не знайдено!
      </h1>
      <p className={styles.description}>Сторінка відсутня в нашому магазині</p>
    </div>
  );
};

export default NotFoundBlock;
