import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';
import NotFound from './pages/NotFound';
import Header from './components/layout/Header';
import ErrorBoundary from './components/error/ErrorBoundary';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<MovieList />} />
              <Route path="/movie/:movieId" element={<MovieDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;