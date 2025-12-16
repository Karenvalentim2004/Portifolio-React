import AppRoutes from './routes';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <main>
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;
