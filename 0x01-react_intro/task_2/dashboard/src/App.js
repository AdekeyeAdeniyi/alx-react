import logo from './holberton-logo.jpg';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={200} height={200} />
        <h1> School dashboard </h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email"> Email </label>
          <input type="text" id="email" />
          <label htmlFor="password"> Password </label>
          <input type="text" id="password" />

          <input type="submit" value="Ok" />
        </form>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()} </p>
      </div>
    </div>
  );
}

export default App;
