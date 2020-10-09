import styled from 'styled-components'

export const SingerWrap = styled.div`
  height: auto;
  width: 100%;
  background: #777;
  
  .list-wrapper{
    white-space: nowrap;
    overflow: hidden;
  }
  .cate{
    display: inline-block;
    padding:0 5px;
    height: 30px;
    line-height: 30px;
    background-color: #fff;
    .title{
      display: inline-block;
      font-size: 18px;
    }
    .cate-item{
      display: inline-block;
      font-size: 16px;
      margin-right: 10px;
    }
  }
`;

