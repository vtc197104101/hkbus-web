import axios from 'axios'

const host = ''
const fetch = async (url, { method, body } = { method: "get" }) => {
    
    const mainFetch = () => {
        if (method === "post") return axios.post(host + url, body, header).then(res => res.data)
        return axios.get(host + url, header).then(res => res.data)
    }

    try {
        const res = await mainFetch()
        return res
    }
    catch (err) {
        throw err
    }
}

export default fetch