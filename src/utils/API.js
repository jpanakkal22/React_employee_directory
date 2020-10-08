import axios from "axios";
const BASEURL;

export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
