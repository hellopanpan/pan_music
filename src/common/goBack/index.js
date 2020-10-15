import React from 'react';
import { 
  GoWraper,
} from './style';
import {
  ArrowLeftOutlined
} from '@ant-design/icons';
function GoBack (props){
  let { title, Backfn }  = props;
  return (
    <GoWraper>
      <ArrowLeftOutlined onClick={Backfn}/>
      <div>
        {title}
      </div>
    </GoWraper>
  ); 
};

GoBack.defaultProps = {
  Backfn: () => {
    window.history.back()
  }
}
export default GoBack;