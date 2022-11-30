import { SessionProvider } from './hooks/session-context';

import './App.css';
import My from './components/My';

function App() {
  return (
    <div className='App'>
      Hello world
      <SessionProvider>
        <My />
      </SessionProvider>
    </div>
  );
}

export default App;
