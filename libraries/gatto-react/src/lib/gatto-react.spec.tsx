import { render } from '@testing-library/react';

import GattoReact from './gatto-react';

describe('GattoReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GattoReact />);
    expect(baseElement).toBeTruthy();
  });
});
