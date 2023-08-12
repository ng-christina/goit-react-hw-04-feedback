import PropTypes from 'prop-types';
import style from './statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p className={style.stat}>Good : {good}</p>
      <p className={style.stat}>Neutral : {neutral} </p>
      <p className={style.stat}>Bad : {bad}</p>
      <p className={style.stat}>Total : {total}</p>
      <p className={style.stat}>Positive feedback : {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
