import * as React from 'react';
import { useAppDispatch } from 'src/hooks/redux';
import { Menu, Modal } from 'antd'
import { css } from '@emotion/react'
import { AiOutlineUser } from 'react-icons/ai'
import { RiShoppingBasketLine } from "react-icons/ri";
import { BiCategoryAlt } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import type { MenuProps } from 'antd';
import LogoNav from './LogoNav';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Cookies from "js-cookie"
import { userLogout } from 'src/store/reducers/UserSlice'
import { PathRoutes } from 'src/data/constants';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('Dashboard', PathRoutes.Home, <MdOutlineSpaceDashboard />),
  getItem('Categories', 'sub1', <BiCategoryAlt />, [
    getItem('View categories', PathRoutes.Categories),
    getItem('Add category', PathRoutes.AddCategory),
  ]),
  getItem('Spendings', 'sub2', <RiShoppingBasketLine />, [
    getItem('View spendings', PathRoutes.Spendings),
    getItem('Add spending', PathRoutes.AddSpending),
    getItem('Reports', PathRoutes.SpendingsReport),
  ]),
  getItem('Profile', PathRoutes.Profile, <AiOutlineUser />),
  getItem('Logout', PathRoutes.Logout, <MdLogout />),
];

const menuBarStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 500;
  font-size: 16px;

  .ant-menu-item-divider{
    border-color: rgba(255, 255,255, 0.1) !important;
  }
`

const logoWrapperStyle = css`
  margin-top: 16px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`

interface ISideBarProps {
  isCollapsed: boolean;
}

const SideBar: React.FunctionComponent<ISideBarProps> = ({ isCollapsed }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const [openModal, setOpenModal] = useState(false);

  const handleOnClick: MenuProps['onClick'] = (e) => {
    const key = e.key
    if (key === PathRoutes.Logout) {
      showModal()
    } else {
      navigate(`${key}`)
    }
  };

  const showModal = () => {
    setOpenModal(true);
  };

  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(userLogout())
    Cookies.remove('userData')
    navigate("/login")
    setOpenModal(false);
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    setOpenModal(false);
  };

  return (
    <div>
      <div css={logoWrapperStyle}>
        <LogoNav
          colorStyle='dark'
          isLogoMinified={isCollapsed}
        />
      </div>

      <Menu
        onClick={handleOnClick}
        mode='inline'
        theme='light'
        defaultSelectedKeys={['1']}
        items={items}
        css={menuBarStyle}
      />

      <Modal
        title="Are you sure you want to Logout?"
        open={openModal}
        onOk={handleOk}
        onCancel={handleCancel}>
        <p>Your account will remain in our database and you can log in again</p>
      </Modal>
    </div>
  )
};

export default SideBar;
