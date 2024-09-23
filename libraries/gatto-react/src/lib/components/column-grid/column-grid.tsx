import './column-grid.scss';
import clsx from 'clsx';

export type ColumnGridProps = {
  // columnNumber: 18 | 12 | 6 | 4;
  screenBreakpoint: 'Widescreen' | 'Desktop' | 'Tablet' | 'Mobile' | 'None';
};

export function ColumnGrid({
  // columnNumber = 12,
  screenBreakpoint,
}: ColumnGridProps) {
  const classes = clsx({
    'column-grid': true,
    'widescreen-breakpoint': screenBreakpoint == 'Widescreen',
    'desktop-breakpoint': screenBreakpoint == 'Desktop',
    'tablet-breakpoint': screenBreakpoint == 'Tablet',
    'mobile-breakpoint': screenBreakpoint == 'Mobile',
  });

  const;

  return (
    <div className={classes}>
      {Array.from(Array(12)).map((e, i) => (
        <div key={`column-${i}`} className={`column-${i}`} />
      ))}
    </div>
  );
}
