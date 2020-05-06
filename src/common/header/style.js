import styled from 'styled-components'
import logoPic from '@/statics/images/logo512.png'

export const HeaderWraper = styled.div`
  height: 60px;
  width: 300px;
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
  height: 20px;
  width: 300px;
  background: #999;
`;

export const HeaderSearch = styled.input.attrs({
  placeholder: '我搜搜'
})`
  width: 100px;
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
