import React from 'react';
import asset from "../Asset/asset"

import './PostComponent.scss'

const PostComponent = (props) => {
  const { element } = props;

  const changeCategoryId = (id) => {
    switch (id){
      case 1 :
        return "apple"
      case 2 :
        return "banana"
      case 3 :
        return "coconut"
    }
  }

  return (
    <div className='PostComponent'>
      <div className='info-wrap' >
        <span className='category-name'>
          {changeCategoryId(element.category_id)}
        </span>
        <span className='id'>
          {element.id}
        </span>
      </div>
      <div className='sub-info-wrap'>
        <span className='user-id'>
          {element.user_id}
        </span>
        <span className='created-date'>
          {asset.changeDate(element.created_at)}
        </span>
      </div>
      <div className='title'>
        <p>
          {element.title}
        </p>
      </div>
      <div className='contents'>
        {element.contents}
      </div>
    </div>
  )
}
export default PostComponent
