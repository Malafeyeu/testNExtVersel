import { Card } from '../../components';
import styles from '../../styles/Career.module.scss';


const Career = ({careerData, data}) => {
  const {title} = data;
  return (
    <section className={styles.container_career}>
      <div className={styles.block_flex}>
        <h2 className={styles.bloc_flex__title}>{title}</h2>
        <div className={styles.block_flex_w_cards}>
          {careerData.map((el, i) => 
            <Card {...el} key={el.requirements1 + i} />
          )}
        </div>
      </div>
    </section>
  );
}

export { Career };
