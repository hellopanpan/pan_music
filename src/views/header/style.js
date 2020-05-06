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
  background: green;
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
export const SlideIn = styled.div`
  height: 160px;
  width: 100%;
  background: #999;
  .img-pic{
    width: 100%;
    height: 160px;
  }
  .ant-carousel .slick-slide {
    text-align: center;
    height: 160px;
    line-height: 160px;
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