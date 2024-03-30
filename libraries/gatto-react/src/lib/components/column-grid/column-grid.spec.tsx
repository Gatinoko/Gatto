import { render } from '@testing-library/react';

import { ColumnGrid } from './column-grid';

describe('ColumnGrid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ColumnGrid columnNumber={12} screenBreakpoint={'Desktop'} />
    );
    expect(baseElement).toBeTruthy();
  });
});
