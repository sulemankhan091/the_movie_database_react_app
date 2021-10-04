import React,{useState,useEffect} from 'react'

// API reference
import API from "../API";


   // This is intial State
   const intialState = {
    page:0,
    results:[],
    total_pages:0,
    total_results:0
}

export const useHomeFetch = () => {
    
    const [state, setState] = useState(intialState);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchMovies = async (page, searchTerm = "") => {
		try {
			setError(false);
			setLoading(true);
			const movies = await API.fetchMovies(searchTerm, page);
			setState((prevState) => ({
				...movies,
				results:
					page > 1
						? [...prevState.results, ...movies.results]
						: [...movies.results],
			}));
		} catch (error) {
			setError(true);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchMovies(1);
	}, []);

    return {state,loading,error};

};
