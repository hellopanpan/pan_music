import styled from 'styled-components'

export const SearchWraper = styled.div`
  height: 100vh;
  width: 100%;
  overflow: scroll;
  .serch{
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: green;
    padding: 20px;
    .input-it{
      background: none;
      border: none;
      border-bottom: 1px solid #fff;
      margin: 0 15px;
      font-size: 0.3rem;
      color: #fff;
    }
    .anticon{
      font-size: 0.6rem;
      color: #fff;

    }
  }
`;

export const SearList = styled.div`
  padding-top: 9px;
  box-sizing: border-box;
  padding: 90px 0px 20px 30px;
  .list-item{
    height: 1.5rem;
    margin: 2px 0;
    cursor: pointer;
    .title{
      font-size: 0.4rem;
      width: 375px;
      color: #111;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
    }
  }
`;
