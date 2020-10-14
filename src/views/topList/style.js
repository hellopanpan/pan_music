import styled from 'styled-components'

export const Wraper = styled.div`
  height: 100%;
  width: 100%;
  background: green;
  position: relative;
  .gov{
    padding: 20px;
    background: #fff;
    min-height: 200px;
    .title{
      font-size: 16px;
      font-weight: 600px;
      color: #333;
      line-height: 40px;
    }
    .list{
      .item{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        height: 90px;
        img{
          height: 80px;
          width: 80px;
        }
        .right{
          margin-left: 10px;
          font-size: 12px;
          color: #666;
          line-height: 24px;
        }
      }
    }
  }

  .global{
    padding: 0  20px;
    background: #fff;
    min-height: 500px;
    .title{
      font-size: 16px;
      font-weight: 600px;
      color: #333;
      line-height: 40px;
    }
    .list{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;
      .item{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        height: 120px;
        width: 111px; 
        img{
          height: 100px;
          width: 100px;
        }
      }
    }
  }
`