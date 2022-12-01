import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route, useParams } from 'react-router-dom';
import countryList from './countries.json';

function App() {
  const selectCountry = countryList.map((country) => {
    if (country.alpha3Code == useParams) {
      console.log(country);
    }
  });

  return (
    <>
      {console.log(selectCountry)}
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList />
          <Routes>
            <Route
              path={`/${useParams}`}
              element={<CountryDetails country={[...countryList]} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}
export default App;
