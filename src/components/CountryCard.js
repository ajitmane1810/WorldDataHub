import { Link } from 'react-router-dom';

export default function CountryCard({ country }) {
  return (
    <Link to={`/country/${country.alpha3Code}`}>
      <div className=" bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <img
          src={country.flag}
          alt={`Flag of ${country.name}`}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
            {country.name}
          </h2>
          <div className="space-y-2 text-gray-600 dark:text-gray-300">
            <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
            <p><span className="font-semibold">Region:</span> {country.region}</p>
            <p><span className="font-semibold">Capital:</span> {country.capital}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}