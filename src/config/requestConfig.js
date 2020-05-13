import axios from 'axios'
import store from '../redux/store'

const { userReducer: { token } } = store.getState()

const getHeaders = () => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
  return headers
}

export default axios.create({
  baseURL: `http://localhost:4000/api/`,
  headers: getHeaders()
});