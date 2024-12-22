

export default function SearchFilter({ searchTerm, setSearchTerm, region, setRegion }) {
    const regions = ['Filter Regions', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  
    return (
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-4 shadow-md rounded-md w-full md:w-96 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
        />
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="p-4  shadow-md rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
        >
          {regions.map((index) => (
            <option  key={index} value={index === 'All' ? '' : index}>
              {index}
            </option>
          ))}
        </select>
      </div>
    );
  }