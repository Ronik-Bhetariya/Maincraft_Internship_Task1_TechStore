import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Notification from './components/Notification';
import Home from './pages/Home';
import Products from './pages/Products';
import { useNotification } from './hooks/useNotification';

function App() {
  const { notification, showNotification, hideNotification } = useNotification();

  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home showNotification={showNotification} />} />
          <Route
            path="/products"
            element={<Products showNotification={showNotification} />}
          />
        </Routes>
      </main>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={hideNotification}
        />
      )}
    </div>
  );
}

export default App;
