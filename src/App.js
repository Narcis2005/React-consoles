import { Provider } from 'react-redux';
import './App.css';
import BoxesContainer from './components/BoxesContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
        <div>
            <BoxesContainer />
        </div>
    </Provider>

  );
}

export default App;
