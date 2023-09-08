import axios from "./request";
export function status_list () {
  const url = 'status/dev_list';
  return axios.get(url);
}