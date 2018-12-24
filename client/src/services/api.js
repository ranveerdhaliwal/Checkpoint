import axios from 'axios';

// goes to express server
export default axios.create({
  baseURL: `/api/`
});



