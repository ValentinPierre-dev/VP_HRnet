import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AddEmployee from './pages/AddEmployee';
import EmployeesList from './pages/EmployeesList';

const App = () => {
  return (
    <div className='root'>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<AddEmployee />}
        />
        <Route
          path="/employees-list"
          element={<EmployeesList />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
