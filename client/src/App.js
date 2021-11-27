import './App.css';
import Header from "./components/Header/Header";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {Users} from "./components/Users/Users";

function App() {
  return (
      <Provider store={store}>
            <div className="App">
                  <Header/>
                  <Users/>
            </div>
      </Provider>
  );
}

export default App;
