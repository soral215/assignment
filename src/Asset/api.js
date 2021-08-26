import axios from 'axios';

const BASE_URL = "https://problem.comento.kr"
const option = {
  headers: {
    Accept: "application/json"
  }
}
const loadCategory = async () => {
  const category = await axios.get(`${BASE_URL}/api/category`, option)

  return category.data
};

const searchList = async (params) => {


  const listParams = `list?page=${params.num}&ord=${params.order}&limit=8&${params.category.map((n) => `category[]=${n}`).join('&')}`
  const list = await axios.get(`${BASE_URL}/api/${listParams}`, option)

  return list
};

const loadAds = async (params) => {
  const ads = await axios.get(`${BASE_URL}/api/ads?page=${params.num}&limit=2`, option)

  return ads
};

const loadDetail = async (param) => {

  const detail = await axios.get(`${BASE_URL}/api/view?id=${param.id}`, option)

  return detail
};

const api = {
  searchList,
  loadAds,
  loadDetail,
  loadCategory,
};

export default api;