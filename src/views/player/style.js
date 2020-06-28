import styled from 'styled-components'

export const IPlayer = styled.div`
  height: 90px;
  width: 100%;
  background:green;
  display: flex;
  flex-direction: row;
  .audio{
    display:none;
  }
  .pic{
    height: 60px;
    width: 60px;
  }
  .title-wrap{
    margin-left: 20px;
    flex:1;
  }
  .name{
    font-size: 16px;
    color: #333;
  }
  .singer{
    font-size: 16px;
    color: #888;
  }
  .ico{
    font-size: 40px;
  }
`;
export const Nplayer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 100000;
  background: #666;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1rem;
  .audio{
    display:none;
  }
  .lrc-cont{
    height: 400px;
  }
  .progress{
    display: flex;
    flex-direction: row;
    align-items: center;
    .pro-bar{
      flex: 1;
      margin: 0 0.5rem;
    }
  }
  .ico{
    font-size: 40px;
  }
`