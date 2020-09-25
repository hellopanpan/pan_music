import styled from 'styled-components'
export const AudioWrap = styled.div`
  audio{
    display: none
  }
`
export const IPlayer = styled.div`
  height: 90px;
  width: 100%;
  background:green;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
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
  .anticon{
    font-size: 40px;
    margin-left: 10px;
  }
`;
export const Nplayer = styled.div`
  height: 100vh;
  background: green;
  .top{
    height: 100px;
    padding: 10px 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .anticon{
      font-size: 40px;
      color: #fff;
    }
    .right{
      margin-left: 20px;
      font-size: 20px;
      color: #fff;
    }
  }
  .wraper{
    width: 100%;
    position: absolute;
    z-index: 100000;
    background: #666;
    top: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1rem;
    box-sizing: border-box;
  }
  
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
      width: 6rem;
      margin: 0 0.5rem;
    }
    .cur{
      width: 1rem;
    }
    .total{
      width: 1rem;
    }
  }
  .ico{
    font-size: 40px;
  }
  .button{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 40px; 
  }
`


export const PlayListI = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background:rgba(0,0, 0, 0.4);
    color: #fff;
    z-index:100001;
    .wrap{
      height: 600px;
      width: 100%;
      background:rgba(0,0, 0, 0.6);
      position: absolute;
      bottom: 0;
    }
    
    .itemL{
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0.15rem 0.5rem;
      font-size: 0.4rem;
      cursor: pointer;
    }
    .playcon{
      width: 1rem;

    }
    .name2{
      flex: 1;
      overflow: hidden;
      white-space:nowrap;
      text-overflow:ellipsis 
    }
    .icos{
      width: 1rem;
      padding-left: 0.2rem;
    }
`