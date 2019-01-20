import axios from 'axios';
import FETCH_USER from './types.js';

const fetchUser = () => {
  return (dispatch) => {
    axios.get('/api/currentuser')
    .then(res => dispatch({ type: FETCH_USER, payload: res }))
  }

};
