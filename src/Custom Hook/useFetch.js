import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async (url) => {
            let response = await fetch(url);
            if(!response.ok) {
                throw new Error("Couldn't fetch data from the source");
            }
            let data = await response.json();
            if(data) {
                setData(data);
                setIsPending(false);
                setError(null);
            }
        }

        fetchData(url)
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
                setData(null);
            })

    }, [url])

    return {data, isPending, error};
}

export default useFetch;