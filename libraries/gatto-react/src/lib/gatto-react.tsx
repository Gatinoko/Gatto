import styles from './gatto-react.module.scss';

/* eslint-disable-next-line */
export interface GattoReactProps {}

export function GattoReact(props: GattoReactProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to GattoReact!</h1>
    </div>
  );
}

export default GattoReact;
