import { ColumnGrid } from '../../../../dist/libraries/gatto-react';
import './app.css';

export function App() {
  return (
    <div>
      <h1>
        <ColumnGrid columnNumber={12} screenBreakpoint={'Desktop'} />
        <span> Hello there, </span>
        Welcome react-demo-app 👋
      </h1>
    </div>
  );
}

export default App;
