import styled from '../../styled-components';

const ArticlesWrapper = styled.div`
  .wrapper-sm.articles {
    max-width: 1162px;
    margin: 0 auto 20px;
  }
  .arts {
    margin-bottom: 25px;
    &:after {
      content: '';
      display: block;
      clear: both;
    }
  }
  .arts_item {
    float: left;
    width: 48.7%;
    margin-left: 2.6%;
    margin-top: 9px;
    margin-bottom: 22px;
    &:nth-child(odd) {
      clear: both;
      margin-left: 0;
    }
    &:hover {
      .arts_title {
        color: #8d034e;
      }
      .arts_img img {
        transform: scale(1.1);
      }
    }
  }
  .arts_img {
    position: relative;
    overflow: hidden;
    margin-bottom: 12px;
    &:before {
      content: '';
      display: block;
      padding-bottom: 100%;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      transition: all 1s linear;
    }
  }
  .arts_title {
    line-height: 1.3;
    font-size: 24px;
    color: #242d4a;
    font-weight: 800;
  }

  @media screen and (max-width: 1023px) {
    .arts_title {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 767px) {
    .arts_item {
      float: none;
      width: 100%;
      margin-left: 0%;
      margin-top: 25px;
      margin-bottom: 28px;
    }
    .arts_img {
      margin-bottom: 10px;
    }
  }
`;

export default ArticlesWrapper;
