import styled from 'styled-components'

export const Wraper = styled.div`
  height: 100vh;
  width: 100%;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: right bottom;
  transition: transform .3s cubic-bezier(0.25,0.1,0.25,1);
  z-index: 3000;
  &.singer-enter, &.singer-appear {
    transform: rotateZ(40deg) translate3d(100%, 0, 0);
  }
  &.singer-enter-active, &.singer-appear-active{
    transform: rotateZ(10deg) translate3d(0, 0, 0);
  }
  &.singer-exit{
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.singer-exit-active{
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
  .top-banner{
    height: 300px;
    width: 100%;
    position: relative;
    overflow:hidden;
    img{
      height: 300px;
      transform-origin: top;
      width: 100%;
    }
    .btn{
      width: 100px;
      height: 30px;
      line-height: 30px;
      position: absolute;
      bottom: 10px;
      left: 50%;
      color: #fff;
      background: red;
      text-align: center;
      transform: translateX(-50%);
      border-radius: 14px;  
    }
  }
  .scoll-wrap{
    position: absolute;
    top: 330px;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    overflow: hidden;
    padding: 0 10px;
    &.open-player{
      bottom: 100px; 
    }
    .title{
      height: 35px;
      line-height: 30px;
      font-size: 16px;
      border-bottom: 1px solid #efefef;
      .anticon {
        margin-left: 8px;
        margin-right: 5px;
      }
      .play-text{
        font-size: 14px
      }
      .all{
        font-size: 12px
        ;margin-left: 5px;
      }
      
    }
    .list{
      .list-item{
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        .num{
          width: 30px;
          text-align: center;
        }
        .name{
          font-size: 14px;
          font-weight: 600;  
        }
      }
    }
  }

`