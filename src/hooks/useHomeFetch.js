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
    
	const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(intialState);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [isLoadingMore,setIsLoadingMore] = useState(false);

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

// intial render and search
	useEffect(() => {
		setState(intialState);
		fetchMovies(1, searchTerm);
	}, [searchTerm]);

//  Loading more functionality
	useEffect(() =>{
		
		if(!isLoadingMore) return ;
		fetchMovies(state.page + 1, searchTerm);
		setIsLoadingMore(false);
	},[isLoadingMore, state.page, searchTerm])

    return {state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore};

};
