import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Home from './pages/home';
import LogIn from './pages/login';
import SignUp from './pages/signup';
import Landing from './pages/landing';
import NewsItem from './pages/news-item';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route index element={<Landing />} />
              <Route path="/signup" element={<SignUp />}> </Route>
              <Route path="/login" element={<LogIn />}> </Route>
              <Route path="/home" element={<Home />}> </Route>
              <Route path="/news-item" element={<NewsItem />}> </Route>
          </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
