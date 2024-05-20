import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { Divider, Menu, Modal, Flex, Switch } from 'antd'
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
import { changeShowModal } from 'src/store/reducers/RootSlice';
import AddSpendingModal from './modals/AddSpendingModal';

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
    type
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('Dashboard', PathRoutes.Home, <MdOutlineSpaceDashboard />),
  // getItem('Add operation', 'sub1', <MdOutlineAddCircleOutline />, [
  //   getItem('Earning', PathRoutes.AddEarning),
  //   getItem('Spending', PathRoutes.AddSpending),
  // ]),
  getItem('History', PathRoutes.History, <IoMdList />),
  getItem('Categories', PathRoutes.Categories, <BiCategoryAlt />),
  getItem('Accounts', PathRoutes.Accounts, <LuWalletCards />),
  getItem('Reports', PathRoutes.Reports, <HiOutlineDocumentReport />),
  getItem('Settings', PathRoutes.Settings, <LuSettings />),
  {
    type: 'divider'
  },
  getItem('Logout', PathRoutes.Logout, <MdLogout />),
]

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
  flex-direction: column;
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
  const { isDarkMode } = useAppSelector(state => state.rootSliceReducer)

  const handleOnClick: MenuProps['onClick'] = (e) => {
    const key = e.key
    switch (key) {
      case PathRoutes.Logout:
        showModal()
        break;

      case PathRoutes.AddSpending:
        dispatch(changeShowModal({
          isModalOpen: true,
          modalType: 'add_spending'
        }))
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

  const handleCancel = () => setOpenModal(false)

  return (
    <div>
      <div css={logoWrapperStyle}>
        <LogoNav isLogoMinified={isCollapsed} />
      </div>

      <Divider css={css`
        margin-top: 0px !important;
      `} />

      <Menu
        onClick={handleOnClick}
        mode='inline'
        theme={isDarkMode ? 'dark' : 'light'}
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

      <AddSpendingModal />
    </div>
  )
};

export default SideBar;
