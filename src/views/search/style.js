import styled from 'styled-components'

export const SearchWraper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .serch{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: green;
    padding: 16px 20px;
    .input-it{
      background: none;
      border: none;
      border-bottom: 1px solid #fff;
      margin: 0 15px;
      font-size: 0.3rem;
      color: #fff;
      outline: none;
    }
    .anticon{
      font-size: 0.6rem;
      color: #fff;

    }
  }
  .suggest{
    position: absolute;
    top: 60px;
    width: 100%;
    padding: 20px;
    .title{
      font-size: 16px;
      color: #999;
    }
    .list{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding-top: 10px;
      .item{
        padding: 3px 8px;
        margin-top: 10px;
        background: #eee;
        border-radius: 2px;
        color: #111;
        margin-right: 10px;
        height: 16px;
        line-height: 16px;
        font-size: 12px;
        box-sizing: content-box;
        cursor: pointer;
      }
    }
  }
`;

export const SearList = styled.div`
  padding-top: 9px;
  box-sizing: border-box;
  height: 80vh;
  flex: 1;
  padding: 10px 0px 20px 30px;
  .list-item{
    height: 60px;
    margin: 2px 0;
    cursor: pointer;
    .title{
      font-size: 15px;
      width: 375px;
      color: #111;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
      line-height: 30px;
    }
  }
`;
