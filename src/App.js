import logo from './logo.svg';
import './App.css';
import Route from './components/Routes/Route/Route';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	
  return (
		<div className='App'>
		  <Route></Route>
		  <ToastContainer />
		</div>
	);
}

export default App;
