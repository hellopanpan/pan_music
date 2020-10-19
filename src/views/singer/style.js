import styled from 'styled-components'

export const SingerWraper = styled.div`
  width: 100%;
  background: #777;
  height: 100%;
  display: flex;
  flex-direction: column;

`
export const SingerList  = styled.div`
  width: 100%; 
  background: green;
  height: 80vh;
  flex: 1;
  .wraper{
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: #eee;
  }
  
  .list {
    height: auto;
    padding: 5px 10px;
    line-height: 50px;
    border-bottom: 1px solid #efefef;
    display: flex;
    flex-direction: row;
    img{
      height: 50px;
      width: 50px;
      
    }
    span{
      margin-left: 10px;
      font-size: 16px;
      color: #000;
    }
  }

`
