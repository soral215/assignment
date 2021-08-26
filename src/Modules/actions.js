export const loadList = (num, order, category) => {
  return{
    type: "LOAD_LIST",
    num: num,
    order: order,
    category: category,
  };
};

export const loadListSuccess = list => {
  return{
    type: "LOAD_LIST_SUCCESS",
    list: list
  };
};

export const loadListFail = error => {
  return{
    type: "LOAD_LIST_FAIL",
    error
  };
};

export const loadAds = (num) => {
  return{
    type: "LOAD_ADS",
    num: num
  };
};

export const loadAdsSuccess = ads => {
  return{
    type: "LOAD_ADS_SUCCESS",
    ads: ads,
  };
};

export const loadAdsFail = error => {
  return{
    type: "LOAD_ADS_FAIL",
    error
  };
};

export const changeOrder = () => {
  return{
    type: "CHANGE_ORDER",
  };
};

export const viewDetail = (id) => {
  return{
    type: "VIEW_DETAIL",
    id: id
  };
};

export const viewDetailSuccess = detail => {
  return{
    type: "VIEW_DETAIL_SUCCESS",
    detail: detail,
  };
};

export const viewDetailFail = error => {
  return{
    type: "VIEW_DETAIL_FAIL",
    error
  };
};

export const viewDetailClear = () => {
  return{
    type: "VIEW_DETAIL_CLEAR",
  };
};

export const loadCategory = array => {
  return{
    type: "LOAD_CATEGORY",
    array: array,
  };
};
export const loadCategorySuccess = category => {
  return{
    type: "LOAD_CATEGORY_SUCCESS",
    category: category,
  };
};

export const loadCategoryFail = error => {
  return{
    type: "LOAD_CATEGORY_FAIL",
    error
  };
};
