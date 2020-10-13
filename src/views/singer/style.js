import styled from 'styled-components'

export const SingerWraper = styled.div`
  width: 100%;
  background: #777;
  height: 100%;
`
export const SingerList  = styled.div`
  width: 100%; 
  background: green;
  height: 100%;
  .wraper{
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: #eee;
  }
  .list {
    height: auto;
    padding: 10px;
    border-bottom: 1px solid #efefef;
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
