import React from 'react';
import { 
  GoWraper,
} from './style';
import {
  ArrowLeftOutlined
} from '@ant-design/icons';
function GoBack (props){
  let { title }  = props;
  const goBack = () => {
    window.history.back()
  }
  return (
    <GoWraper>
      <ArrowLeftOutlined onClick={goBack}/>
      <div>
        {title}
      </div>
    </GoWraper>
  ); 
};


export default GoBack;