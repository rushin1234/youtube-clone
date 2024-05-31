import { createContext, useEffect, useState } from "react";
import {toast} from 'react-toastify'

export const APIContext = createContext(null)

export const APIProvider = (props) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchVideos = () => {
        setLoading(true)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${`podcast`}&type=video&key=AIzaSyCn7xdbNSUSXV1o6V8EeomcwE4E-1qJlY4`)
            .then(response => response.json()) // Parse JSON response
            .then(data => {
                console.log(data.items[0]);
                setData(data.items)
                setLoading(false)
            })
            .catch(error => {
                console.error(error);
                toast(error.message)
                setLoading(false)
            });
    }

    const fetchSearch = (search) => {
        setLoading(true)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${search}&type=video&key=AIzaSyCn7xdbNSUSXV1o6V8EeomcwE4E-1qJlY4`)
            .then(response => response.json()) // Parse JSON response
            .then(data => {
                console.log(data.items[0]);
                setData(data.items)
                setLoading(false)
            })
            .catch(error => {
                console.error(error);
                toast(error.message)
                setLoading(false)
            });
    }

    useEffect(() => {
        fetchVideos()
    }, [])

    return <APIContext.Provider value={{ data, loading, fetchVideos, fetchSearch }}>
        {props.children}
    </APIContext.Provider>
}