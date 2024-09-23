import './button.scss';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Sizes } from '../../../../../../types/sizes';
import { clsx } from 'clsx';

/* eslint-disable-next-line */
export type ButtonProps = {
  text: string;
  size: Sizes;
};

export function Button(props: ButtonProps) {
  const { text, size } = props;

  const classes = clsx({
    button: true,
    xl: size === 'xl',
    l: size === 'l',
    m: size === 'm',
    s: size === 's',
    xs: size === 'xs',
  });

  return <button className={classes}>{text}</button>;
}
