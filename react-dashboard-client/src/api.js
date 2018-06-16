import axios from 'axios'

const API_URL = 'http://jsonplaceholder.typicode.com'

export function getPosts() {
    return axios.get(`${API_URL}/posts`).then(response => response.data)
}
