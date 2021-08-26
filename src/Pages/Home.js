import React from 'react'
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import * as actions from "../Modules/actions";

import FilterModal from "../Components/FilterModal";
import SideComponent from "../Components/SideComponent";
import PostComponent from "../Components/PostComponent";
import AdsComponent from "../Components/AdsComponent";

import './Home.scss'

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [ count, setCount ] = useState(1);
  const [ order, setOrder ] = useState('asc');
  const [ modalOpen, setModalOpen ] = useState(false);
  const [ category, setCategory ] = useState([1,2,3]);

  const getCheckboxValue =() => {
    const query = 'input[name="category"]:checked';
    const selectedEls =
      document.querySelectorAll(query);

    let result = [];
    selectedEls.forEach((el) => {
      result.push(Number(el.value));
    });

    setCategory(result)
  }

  const applyFilter = () => {
    dispatch(actions.changeOrder());

    setTimeout(() =>   {
      dispatch(actions.loadList(1, order, category))
      dispatch(actions.loadAds(1))
    }, 500 )

    closeModal()
  }

  const handleOrder = (reOrder) => {
    if (reOrder !== order) {
      dispatch(actions.changeOrder());

      setTimeout(() =>   {
        dispatch(actions.loadList(count, reOrder, category));
        dispatch(actions.loadAds(1));
      }, 500)

      setOrder(reOrder);
      setCount(1);
    }
  }

  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }

  const viewDetail = (id) => {
    dispatch(actions.viewDetail(id));
    setTimeout(() => history.push(`/detailPage?id=${id}`), 300)
  }

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 30) {

      setCount(count + 1)
    }
  };
  const store = useSelector((store) => store.reducer);

  useEffect(() => {
    dispatch(actions.loadCategory());

    setTimeout(() =>   {
      dispatch(actions.loadList(count, order, category));
      dispatch(actions.loadAds(count));
    }, 500 )

    {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [count]);

  const postList = store[1] ? store[1] : []
  const adsList = store[0] ? store[0] : []

  return (
    <div className='Home'>
      {/*<HeadComponent/>*/}
      <SideComponent/>
      <span className='wrap'>
          <div className='options-wrap'>
            <span>
              <span className='order-btn' onClick={() => handleOrder('asc')}>
                <span className={`dot ${order == "asc" ? "on" : "off"}`}/>
                <span className={`text ${order == "asc" ? "on" : "off"}`}>
                  오름차순
                </span>
              </span>
              <span className='order-btn' onClick={() => handleOrder('desc')}>
                <span className={`dot ${order == "desc" ? "on" : "off"}`}/>
                <span className={`text ${order == "desc" ? "on" : "off"}`}>
                  내림차순
                </span>
              </span>
            </span>
            <span className='filter-btn' onClick={ openModal }>
              <p>
                필터
              </p>
            </span>
          </div>
          <div>
            {
              postList.length == 0 &&
                <div>
                  로딩중...(로딩이 오래 걸리면 새로고침 해주세요)
                </div>
            }
            <ul>
              {
                postList.length > 0 && postList.map((element,i) =>  {
                  if ( i % 4 === 3 ) {
                    const ads = adsList[(i -3) / 4]

                    return (
                      <React.Fragment>
                        <li key={i} onClick={() => viewDetail(element.id)}>
                          <PostComponent
                            key={i}
                            element={element}
                          />
                        </li>
                        {
                          ads &&
                            <AdsComponent ads ={ads}/>
                         }
                      </React.Fragment>
                    )
                  }
                    return (
                      <li key={i} onClick={() => viewDetail(element.id)}>
                        <PostComponent
                          key={i}
                          element={element}
                        />
                      </li>
                    )
                  }
                )
              }
            </ul>
          </div>
      </span>

      <FilterModal
        open={ modalOpen }
        close={ closeModal }
        getCheckboxValue ={getCheckboxValue}
        applyFilter ={applyFilter}
        category ={category}
      />
    </div>
  )
}

export default Home
