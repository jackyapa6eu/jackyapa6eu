import styled from 'styled-components';
import { Drawer } from 'antd';

export const Modal = styled(Drawer)`
  background: #1e1e1e !important;
  box-shadow: 2px 0 8px #996515;
  height: 90vh !important;
  max-height: 800px;
  margin-bottom: 5vh;
  margin-top: 5vh;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;

  .ant-drawer-header {
    padding-left: 5px;
  }

  & .ant-drawer-close {
    margin-right: 5px !important;
  }

  & .anticon.anticon-close svg {
    fill: #dcdcdc;
    width: 32px;
    height: 32px;
  }

  .ant-drawer-title {
    font-weight: bold;
    font-size: 16px;
    color: #dcdcdc;
  }

  .ant-drawer-body {
    padding: 12px 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
