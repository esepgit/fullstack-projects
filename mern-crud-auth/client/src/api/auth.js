import axios from 'axios'

const baseUrl = 'http://localhost:3000/api'

export const registerRequest = user => axios.post(`${baseUrl}/register`, user)