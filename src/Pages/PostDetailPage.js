import React from 'react'
import { useHistory } from "react-router-dom";
import {useSelector} from "react-redux";

import './PostDetailPage.scss'

const PostDetailPage = () => {
  const history = useHistory();

  const onClickTab = (path) => {
    history.push(path)
  }

  const viewStore = useSelector((store) => store.viewReducer);
  const postDetail = viewStore ? viewStore.data : {}

  const changeDate = (date) => {
    let d = new Date(date);
    let dateString =
      d.getFullYear() + "-" +
      (d.getMonth() + 1) + "-" +
      d.getDate();

    return dateString
  }

  return (
    <div className='PostDetailComponent'>
      {
        postDetail &&
        <>
          <div className='post'>
            <div className='title'>
              <p>
                {postDetail.title}
              </p>
            </div>
            <div className='contents'>
              {postDetail.contents}
            </div>
            <div className='created-date'>
              {changeDate(postDetail.created_at)}
            </div>
          </div>

          <div className='reply'>
            <div>
               <span className='text'>
                답변
              </span>
              <span className='strong'>
               {postDetail.reply.length}
              </span>
            </div>
            <ul>
              {
                postDetail.reply.map((a,i) =>
                  <li key={i}>
                    <div className='user'>
                      {a.user.name}
                    </div>
                    <div className='contents'>
                      {a.contents}
                    </div>
                    <div className='created-date'>
                      {changeDate(a.created_at)}
                    </div>
                  </li>
                )
              }
            </ul>
          </div>
        </>
      }
    </div>
  )
}

export default PostDetailPage
