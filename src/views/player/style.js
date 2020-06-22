import styled from 'styled-components'

export const PlayList = styled.div`
  height: auto;
  width: 100%;
`;

export const PlayListItem = styled.div`
  height: auto;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
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