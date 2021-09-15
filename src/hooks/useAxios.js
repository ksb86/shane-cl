import { useCallback, useState } from 'react';
import axios from 'axios';

const useAxios = () => {
    const [error, setError] = useState(false);
    const [pending, setPending] = useState(false);
    const [data, setData] = useState(null);

    const request = useCallback(async (config) => {
        setPending(true);

        try {
            const { data: resData } = await axios(config);
            setData(resData);
            setError(false);
        } catch (error) {
            setError(true);
        }
        setPending(false);
    }, []);

    return {
        pending,
        data,
        request,
        error,
    };
};

export default useAxios;
