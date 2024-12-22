import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function CountryDetail() {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/alpha/${code}`)
      .then(res => res.json())
      .then(data => {
        setCountry(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching country:', error);
        setLoading(false);
      });
  }, [code]);

  if (loading || !country) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-gray-800 dark:text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div className=" min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4 transition-colors duration-200">
      <div className="container mx-auto px-8">
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 rounded-md shadow-md text-gray-800 dark:text-white mb-8"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          <img
            src={country.flag}
            alt={`Flag of ${country.name}`}
            className="w-full h-auto shadow-md rounded-sm"
          />
          
          <div className="text-gray-800 dark:text-white">
            <h1 className="text-3xl font-bold mb-8">{country.name}</h1>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-2">
                <p><span className="font-semibold">Native Name:</span> {country.nativeName}</p>
                <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
                <p><span className="font-semibold">Region:</span> {country.region}</p>
                <p><span className="font-semibold">Sub Region:</span> {country.subregion}</p>
                <p><span className="font-semibold">Capital:</span> {country.capital}</p>
              </div>
              
              <div className="space-y-2">
                <p><span className="font-semibold">Top Level Domain:</span> {country.topLevelDomain.join(', ')}</p>
                <p><span className="font-semibold">Currencies:</span> {country.currencies?.map(c => c.name).join(', ')}</p>
                <p><span className="font-semibold">Languages:</span> {country.languages?.map(l => l.name).join(', ')}</p>
              </div>
            </div>

            {country.borders && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Border Countries:</h2>
                <div className="flex flex-wrap gap-2">
                  {country.borders.map(border => (
                    <Link
                      key={border}
                      to={`/country/${border}`}
                      className="px-4 py-1 bg-white dark:bg-gray-800 shadow-md rounded text-sm"
                    >
                      {border}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* <hr className="my-8 border-t-2 border-gray-300 dark:border-white" /> */}

        
      </div>
    </div>
  );
}