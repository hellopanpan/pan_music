import styled from 'styled-components'

export const Wrap = styled.div`
  .item{
    height: 40px;
    width: 40px;
    position: fixed;
    top: 40px;
    left: 0;
    pointer-events: none;
    z-index: 88887999;
    transform: translate3d(0, 0, 0);
    opacity: 0;
    transition: transform 1s cubic-bezier(.65,-0.12,.86,.57);
    .icon{
      pointer-events: none;
      transform: translate3d(0, 0, 0);
      transition: transform 1s cubic-bezier(.62,-0.1,.86,.57);
      .iconfont{
        font-size: 20px;
        pointer-events: none;
        color: green;
      }
    }
  }
  
`