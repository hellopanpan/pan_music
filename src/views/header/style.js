import styled from 'styled-components'

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background: #777;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .cont-wrap{
    height: 500px;
    background: green;
    width: 100%;
    flex: 1;
  }
  .player-wrap{
    height: 100px;
    background: green;
    width: 100%;
  }
`;

export const HeaderWraper = styled.div`
  width: 100%;
  background: #777;
`;

export const Nav = styled.div`
  height: 50px;
  width:100%;
  background: green;
  color: #fff;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  .search{
    font-size: 22px;
  }
  .more{
    font-size: 18px;
    opacity: 0;
  }
`;
export const NavTab = styled.div`
  height: 50px;
  width:100%;
  background: green;
  color: #fff;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 30px;
  box-sizing: border-box;
`;
export const NavTabItem = styled.div`
  height: 28px;
  line-height: 25px;
  width:50px;
  text-align: center;
  cursor: pointer;
  &.active{
    border-bottom: 2px solid #fff;
  }
`;
export const Recomand = styled.div`
  width:100%;
  background: green;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;  
  align-items: flex-start;
  padding: 20px 15px;
  .item{
    width: 30%;
    position: relative;
    margin: 10px 0;
    .con{
      margin-left: 5px;
      font-size: 10px;
    }
    .heder{
      position: absolute;
      top: 2px;
      right: 5px;
      text-align: right;
      font-size: 0.2rem;
    }
    img{
      width: 100%;
      height: 3rem;
    }
    .dis{
      font-size: 0.2rem;
      padding-top: 0.1rem;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical; 
    }
  }
  
`;
export const SlideIn = styled.div`
  height: 4rem;  
  width: 100%;
  background: #999;
  .img-pic{
    width: 100%;
    height: 4rem;
  }
  .ant-carousel .slick-slide {
    text-align: center;
    height: 4rem;
    background: #364d79;
    overflow: hidden;
  }
  .ant-carousel .slick-slide h3 {
    color: #fff;
  }
`;

export const HeaderSearch = styled.input.attrs({
  placeholder: '我搜搜'
})`
  width: 120px;
  height: 20px;
  background: #aaa;
  border: 1px solid #efefef;
  border-radius: 10px;
  outline: none;
  padding: 0 10px;
  &.search{
    background: green
  }
  &.fade-enter{
    transition: all 0.5s;
  }
  &.fade-enter-active{
    width: 300px;
  }
  &.fade-exit{
    transition: all 0.5s;
  }
  &.fade-exit-active{
    width: 100px;
  }
`