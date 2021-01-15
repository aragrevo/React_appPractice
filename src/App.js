import './App.css';
import 'antd/dist/antd.css';
import { Characters } from './components/Characters/Characters';
import { TopBar } from './components/Header/Header';

function App() {
  return (
    <div className='App'>
      <TopBar />
      <Characters />
    </div>
  );
}

export default App;
