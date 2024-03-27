import styles from './column-grid.module.scss';

/* eslint-disable-next-line */
export interface ColumnGridProps {}

export function ColumnGrid(props: ColumnGridProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ColumnGrid!</h1>
    </div>
  );
}

export default ColumnGrid;
