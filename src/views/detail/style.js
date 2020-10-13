import styled from 'styled-components'

export const Wraper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const NoPlayer = styled.div`
  height: 100px;
  width: 100%;
  background: #444;
`;

export const DetailHeader = styled.div`
  height: 180px;
  width: 100%;
  background: green;
  box-sizing: border-box;
  padding: 20px;
  .img-wrap{
    height: 120px;
    width: 120px;
    float: left;
    img{
      height: 120px;
      width: 120px;
    }
  }
  .right{
    width: 170px;
    float: left;
    margin-left: 18px;
    .title{
      font-size: 18px;
      color: #fff;
      overflow:hidden; 
      text-overflow:ellipsis;
      display:-webkit-box; 
      -webkit-box-orient:vertical;
      -webkit-line-clamp:3; 
      height: 80px;
    }
    .author{
      padding-top: 15px;
      img{
        height: 18px;
        width: 18px;
      }
      span{
        margin-left: 10px;
        color: #efefef;
        font-size: 14px;
      }
    }
  }
`;

export const PlayList = styled.div`
  height: 300px;
  flex: 1;
  width: 100%;
  box-sizing: border-box;
`;

export const PlayListItem = styled.div`
  height: auto;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  .num{
    width: 60px;
    text-align: center;
    color: #2E3030;
    font-size: 24px;
  }
  .right{
    flex: 1;
    border-bottom: 1px solid #e4e4e4;
    .title{
      color: #2E3030;
      font-size: 100%
    }
    .discribe{
      font-size: 12px;
      color: #bba8a8;
    }
  }
`;