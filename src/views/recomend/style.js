import styled from 'styled-components'
import logoPic from '@/statics/images/logo512.png'

export const HeaderWraper = styled.div`
  height: auto;
  width: 100%;
  background: #777;
`;

export const Hederimg = styled.a.attrs({
  href: '/'
})`
  display: inline-block;
  height: 30px;
  width: 40px;
  background: url(${logoPic});
  background-size: 100% 100%;
`;

export const Nav = styled.div`
  height: 50px;
  width:100%;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`;
export const NavTab = styled.div`
  height: 60px;
  width:100%;
  background: green;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  box-sizing: border-box;
`;
export const NavTabItem = styled.div`
  height: 40px;
  width:60px;
  text-align: center;
  &.active{
    border-bottom: 2px solid #fff;
  }
`;
export const Recomand = styled.div`
  width:100%;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;  
  align-items: flex-start;
  background: #fff;
  padding: 20px 15px;
  min-height: 400px;
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
      font-size: 13px;
      padding-top: 0.1rem;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical; 
      color: green;
    }
  }
  
`;
export const SlideWrap = styled.div`
  height: 165px;  
  width: 100%;
  position: relative;
  background: #fff;
  .bg-img{
    height: 120px;
    width: 100%;
    background: green;
  }
`
export const SlideIn = styled.div`
  position: absolute;
  top: 0px;
  left: 2%;
  height: 160px;  
  width: 96%;

  border-radius: 10px;
  overflow: hidden;
  .img-pic{
    width: 100%;
    height: 160px;  
  }
  .ant-carousel .slick-slide {
    text-align: center;
    height: 160px;  
    background: #364d79;
    overflow: hidden;
  }
  .ant-carousel .slick-slide h3 {
    color: #fff;
  }
`;
