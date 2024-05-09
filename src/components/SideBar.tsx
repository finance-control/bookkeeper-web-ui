import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { Menu, Modal, Button } from 'antd'
import { css } from '@emotion/react'
import { BiCategoryAlt } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { MdOutlineSpaceDashboard, MdOutlineAddCircleOutline } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoMdList } from "react-icons/io";
import { LuSun, LuMoon, LuSettings, LuWalletCards } from "react-icons/lu";
import type { MenuProps } from 'antd';
import LogoNav from './LogoNav';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"
import { userLogout } from 'src/store/reducers/UserSlice'
import { PathRoutes } from 'src/data/constants';
import { changeColorMode } from 'src/store/reducers/CommonSlice';

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

const getItems = (isDarkMode: boolean = false): MenuProps['items'] => {
  return [
    getItem('Dashboard', PathRoutes.Home, <MdOutlineSpaceDashboard />),
    getItem('Add transaction', 'sub1', <MdOutlineAddCircleOutline />, [
      getItem('Transfer', PathRoutes.Categories),
      getItem('Spending', PathRoutes.AddSpending),
    ]),
    getItem('History', PathRoutes.History, <IoMdList />),
    getItem('Categories', PathRoutes.Categories, <BiCategoryAlt />),
    getItem('Accounts', PathRoutes.Accounts, <LuWalletCards />),
    getItem('Reports', PathRoutes.Reports, <HiOutlineDocumentReport />),
    getItem('Logout', PathRoutes.Logout, <MdLogout />),
    {
      type: 'divider'
    },
    getItem('Settings', PathRoutes.Settings, <LuSettings />),
    getItem(isDarkMode ? 'Set light mode' : 'Set dark mode',
      PathRoutes.ChangeColorMode,
      isDarkMode ? <LuSun /> : <LuMoon />),
  ];
}

// const items: MenuProps['items'] = [
//   getItem('Dashboard', PathRoutes.Home, <MdOutlineSpaceDashboard />),
//   getItem('Add operation', 'sub1', <MdOutlineAddCircleOutline />, [
//     getItem('Transfer', PathRoutes.Categories),
//     getItem('Spending', PathRoutes.AddCategory),
//   ]),
//   getItem('History', PathRoutes.Categories, <IoMdList />),
//   getItem('Categories', 'sub2', <BiCategoryAlt />, [
//     getItem('View categories', PathRoutes.Categories),
//     getItem('Add category', PathRoutes.AddCategory),
//   ]),
//   getItem('Accounts', 'sub3', <RiShoppingBasketLine />, [
//     getItem('Accounts', PathRoutes.Spendings),
//     getItem('Add account', PathRoutes.AddSpending),
//   ]),
//   getItem('Spendings', 'sub3', <RiShoppingBasketLine />, [
//     getItem('View spendings', PathRoutes.Spendings),
//     getItem('Add spending', PathRoutes.AddSpending),
//   ]),
//   getItem('Reports', PathRoutes.Reports, <HiOutlineDocumentReport />),
//   getItem('Logout', PathRoutes.Logout, <MdLogout />),
// ];

const menuBarStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 500;
  font-size: 16px;

  .ant-menu-item-divider{
    border-color: rgba(255, 255,255, 0.1) !important;
  }

  .ant-menu-item-icon{
    font-size: 18px !important;
  }
`

const logoWrapperStyle = css`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`

interface ISideBarProps {
  isCollapsed: boolean;
}

const SideBar: React.FunctionComponent<ISideBarProps> = ({ isCollapsed }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const [openModal, setOpenModal] = useState(false);
  const { isDarkMode } = useAppSelector(state => state.commonReducer)

  const handleOnClick: MenuProps['onClick'] = (e) => {
    const key = e.key
    switch (key) {
      case PathRoutes.Logout:
        showModal()
        break;

      case PathRoutes.ChangeColorMode:
        dispatch(changeColorMode())
        break;

      default:
        navigate(`${key}`)
        break;
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
        <LogoNav isLogoMinified={isCollapsed} />
      </div>

      <Menu
        onClick={handleOnClick}
        mode='inline'
        theme={isDarkMode ? 'dark' : 'light'}
        defaultSelectedKeys={['1']}
        items={getItems(isDarkMode)}
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
