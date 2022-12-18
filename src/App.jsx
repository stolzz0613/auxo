import { store } from './redux/store';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { DashBoard, Home, Legs } from "@pages";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fligths" element={<DashBoard />} />
          <Route path="/legs" element={<Legs />} />
        </Routes>
      </Router>
    </Provider>
  )
};

export default App;