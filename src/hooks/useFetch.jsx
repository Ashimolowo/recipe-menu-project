import { useEffect, useState } from "react"

export const useFetch = (url, method = 'GET') => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState([])
    const [options, setOptions] = useState(null)

    const postData = (postData) => {
        setOptions({
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(postData)
        })
    }

    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async (fetchoptions) => {
            setIsLoading(true)
            try {
                const res = await fetch(url, {...fetchoptions, signal: controller.signal})
            if (!res.ok) throw new Error('could not fetch data')
                setIsLoading(false)
                const data = await res.json()
                setData(data)
            } catch (error) {
                
                if (error.name ==='AbortError') {
                    setIsLoading(false)
                    // setError(error.name)
                }
                else setError(error.message)
            }
        }
       if(method === 'GET') {
        fetchData()
       }
       if(method === 'POST' && options) {
        fetchData(options)
       }

        return () => controller.abort()
    }, [url,method,options])

    return {postData,data, error, isLoading}
}