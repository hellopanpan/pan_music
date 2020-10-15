import styled from 'styled-components'

export const SingerWrap = styled.div`
  height: auto;
  width: 100%;
  background: green;
  
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
      font-size: 14px;
    }
    .cate-item{
      display: inline-block;
      font-size: 14px;
      margin-right: 10px;
      height: 22px;
      line-height: 18px;
      padding: 1px 4px;
      cursor: pointer;
      &.select{
        border: 1px solid #efefef;
        border-radius: 8px;
        background: green;
        color: #fff;
      }
    }
  }
`;

