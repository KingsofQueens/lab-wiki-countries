import { Link } from 'react-router-dom';
import countryList from '../countries.json';

const CountriesList = () => {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countryList.map((country) => {
          return (
            <div
              key={country.alpha3Code}
              className="list-group-item list-group-item-action"
            >
              <Link to={`/${country.alpha3Code}`}>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt={country.name.common}
                />{' '}
                <strong>{country.name.common}</strong>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;

//alpha3Code
