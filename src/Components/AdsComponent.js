import React from 'react';

import './AdsComponent.scss'

const AdsComponent = (props) => {
  const { ads } = props;

  return (
    <div className='AdsComponent'>
      <div className='sponsored'>
        sponsored
      </div>
      <div className='ads-content'>
        <span>
          <img src={`https://cdn.comento.kr/assignment/${ads.img}`}
          />
        </span>
        <span className='titles-wrap'>
          <div className='ads-title'>
            {ads.title}
          </div>
          <div className='ads-sub-title'>
            {ads.contents}
          </div>
        </span>
      </div>
    </div>
  )
}
export default AdsComponent
