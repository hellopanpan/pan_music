import styled, {keyframes} from 'styled-components'

const rotate1 = keyframes`{
  0%{
    transform: translate3d(-260px, 500px, 0) scale(0);
    opacity: 0;
  }
  50%{
    transform: translate3d(-10px, 20px, 0) scale(1.1);
    opacity: 0.9;
  }
  100%{
    transform: translate3d(0px, 0px, 0) scale(1);
    opacity: 1;
  }
}`

const rotate2 = keyframes`{
  0%{
    transform: translate3d(0px, 0px, 0) scale(1);
  }
  50%{
    transform: translate3d(-10px, 20px, 0) scale(1.1);
  }
  100%{
    transform: translate3d(-260px, 500px, 0) scale(0);
  }
}`

const rotate3 = keyframes`{
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
}`

export const AudioWrap = styled.div`
  audio{
    display: none
  }
`
export const IPlayer = styled.div`

  box-shadow: 0px -2px 3px #efefef;
  position: absolute;
  bottom: 0;
  height: 100px;
  width: 100%;
  background:#fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  z-index: 88888999;
  padding: 0 20px;
  &.singer-mini-enter, &.singer-mini-appear {
    transform: translate3d(-260px, 500px, 0) scale(0);
    opacity: 0;
  }
  &.singer-mini-enter-active, &.singer-mini-appear-active{
    animation: ${rotate1} 0.6s cubic-bezier(0.25,0.1,0.25,1) forwards;
    animation-delay:0.8s;
    -webkit-animation-delay:0.8s; /* Safari 和 Chrome */
    
  }
  &.singer-mini-exit{
    animation:  ${rotate2} 1s cubic-bezier(0.25,0.1,0.25,1) forwards;
    opacity: 1;
  }
  &.singer-mini-exit-active{
    
  }
  &.singer-mini-exit-done{
    opacity: 0;
  }
  .pic{
    height: 60px;
    width: 60px;
    border-radius: 50%;
    &.play{
      animation: ${rotate3} 6s  linear infinite ;
      &.pause{
        animation-play-state: paused;
      }
    }
  }
  }
  .title-wrap{
    margin-left: 20px;
    flex:1;
  }
  .name{
    font-size: 16px;
    color: #333;
    line-height: 26px;
    width: 175px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
  }
  .singer{
    font-size: 16px;
    color: #999;
  }
  .ico{
    font-size: 30px;
  }
  .anticon{
    font-size: 30px;
    margin-left: 10px;
    color: green;
  }
  `;
export const Nplayer = styled.div`
  height: 100vh;
  background: green;
  position:absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index:100000;
  &.singer-enter, &.singer-appear {
    animation: ${rotate1} 1s cubic-bezier(0.25,0.1,0.25,1);
    animation-delay:0.5s;
    -webkit-animation-delay:0.5s; /* Safari 和 Chrome */
    .button{
      transform: translate(0, 130px);
      transition: transform 0.2s cubic-bezier(0.86, 0.18, 0.82, 1.32);;
    }
  }
  &.singer-enter-active, &.singer-appear-active{
    animation: ${rotate1} 0.6s cubic-bezier(0.25,0.1,0.25,1);
    .button{
      transform: translate(0, 0px);
    }
  }
  &.singer-exit{
    animation:  ${rotate2} 0.8s cubic-bezier(0.25,0.1,0.25,1) forwards;
    opacity: 1;
    .button{
      transform: translate(0, 130px);
      transition: transform 1s cubic-bezier(0.86, 0.18, 0.82, 1.32);;
    }
  }
  &.singer-exit-active{
    
  }
  &.singer-exit-done{
    opacity: 0;
    .button{
      transform: translate(0, 130px);
    }
  }
  .top{
    height: 100px;
    padding: 10px 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    .anticon{
      font-size: 30px;
      color: #fff;
    }
    .right{
      margin-left: 26px;
      font-size: 0.3rem;
      color: #fff;
    }
  }
  .wraper{
    width: 100%;
    position: absolute;
    z-index: 100000;
    background: #fff;
    top: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1rem 1rem 0.3rem 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  
  .audio{
    display:none;
  }
  .lrc-cont{
    flex: 1;
    height: 400px;
  }
  .progress{
    display: flex;
    flex-direction: row;
    align-items: center;
    color:#333;
    padding-top: 10px;
    .pro-bar{
      width: 6rem;
      margin: 0 0.5rem;
    }
    .cur{
      width: 50px;
    }
    .total{
      width: 50px;
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
    font-size: 35px; 
    color:green;
  }
`


export const PlayListI = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background:rgba(0,0, 0, 0.5);
    color: #fff;
    z-index:100001;
    .wrap{
      top: 200px;
      width: 100%;
      position:absolute;
      bottom: 0;
      left: 0;
      background: #fff;
      padding: 20px 0;
      transform: translate(0, 600px);
      transition: all 0.5s;
    }
    .wraper-list{
      height: 100%;
      width: 100%;
      overflow: hidden
    }
    
    .itemL{
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0.15rem 0.5rem;
      font-size: 0.4rem;
      cursor: pointer;
      color: #333
    }
    .playcon{
      width: 1rem;
      color: green
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
      color: green
    }
`