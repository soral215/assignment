import { takeEvery, put, call } from 'redux-saga/effects';
import api from '../Asset/api';
import {
  loadListSuccess,
  loadListFail,

  loadAdsSuccess,
  loadAdsFail,

  viewDetailSuccess,
  viewDetailFail,

  loadCategorySuccess,
  loadCategoryFail,
} from '../Modules/actions';

function* getList(params) {
  try{
    const { data } = yield call(api.searchList, params);
    yield put(loadListSuccess(data));
  }catch(error){
    yield put(loadListFail(error));
  }
}

function* getAds(params) {
  try{
    const { data } = yield call(api.loadAds, params);
    yield put(loadAdsSuccess(data));
  }catch(error){
    yield put(loadAdsFail(error));
  }
}

function* getDetail(params) {
  try{
    const view = yield call(api.loadDetail, params);

    yield put(viewDetailSuccess(view));
  }catch(error){
    yield put(viewDetailFail(error));
  }
}

function* getCategory(params) {
  try{
    const data = yield call(api.loadCategory, params);

    yield put(loadCategorySuccess(data));
  }catch(error){
    yield put(loadCategoryFail(error));
  }
}

function* rootSaga(){
  yield takeEvery("LOAD_LIST" || "CHANGE_ORDER", getList);
  yield takeEvery("LOAD_ADS", getAds);
  yield takeEvery("VIEW_DETAIL", getDetail);
  yield takeEvery("LOAD_CATEGORY", getCategory);
}

export default rootSaga;
