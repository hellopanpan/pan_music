import styled from 'styled-components'

export const Wrap = styled.div`
  .item{
    height: 40px;
    width: 40px;
    position: fixed;
    top: 40px;
    left: 0;
  
    z-index: 888888000000;
    transform: translate3d(0, 0, 0);
    opacity: 0;
    transition: transform 1s cubic-bezier(.62,-0.1,.86,.57);
    .icon{
      transform: translate3d(0, 0, 0);
      transition: transform 1s cubic-bezier(.62,-0.1,.86,.57);
      .iconfont{
        font-size: 20px;
        color: green;
      }
    }
  }
  
`