import axios from "./request";
export function status_list () {
  const url = 'status/dev_list';
  const data = {};
  return axios.get(url,{params: data});
}