import React from 'react';
import {useSelector} from "react-redux";

import './FilterModal.scss'

const FilterModal = ( props ) => {
  const { open, close, getCheckboxValue, applyFilter, category } = props;
  const store = useSelector((store) => store.categoryReducer);


  return (
    <div className={ open ? 'openModal modal' : 'modal' }>
      {
        open ? (
        <div className='filter-modal-wrap'>
          <div className='filter-modal'>
            <div>
              <div className="close" onClick={close}> x </div>
            </div>
            <div className='contents-wrap'>
              <h1>
                필터
              </h1>
              <ul>
                {
                  store.category.map((a,i) =>
                    <li key={i}>
                      <input
                        name='category'
                        value={a.id}
                        onClick={() => getCheckboxValue()}
                        type="checkbox"
                      />
                      {a.name}
                    </li>
                  )
                }
              </ul>
              <div>
                <div className="apply" onClick={() => applyFilter()}> <p>저장하기</p> </div>
              </div>
            </div>
          </div>
        </div>
        )
      : null
      }
    </div>
  )
}
export default FilterModal
