import { useState, useEffect } from 'react';

const useFetch = (url) => {
  // State variables to store data, loading state, and error
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

/* // Log the URL being used for the fetch request
    console.log("Fetching data from URL:", url); */



    // Define an asynchronous function fetchData to fetch data from the URL
    const fetchData = async () => {
      try {
        // Fetch data from the URL using fetch API
        const response = await fetch(url);

        // Check if the response is successful
        if (!response.ok) {
          // If not, throw an error
          throw Error('Could not fetch the data for that resource');
        }

        // Parse the response body as JSON
        const responseData = await response.json();

        // Update state variables with the fetched data
        setData(responseData);
        setIsPending(false);
        setError(null);
      } catch (err) {
        // If an error occurs during fetching, update the error state
        setIsPending(false);
        setError(err.message);
      }
    };

    // Call the fetchData function when the URL changes
    fetchData();

  }, [url]);

  // Return state variables
  return { data, isPending, error };
};

export default useFetch;
