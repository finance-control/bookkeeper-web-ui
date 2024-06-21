import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app';
import { Menu, Modal } from 'antd'
import { css } from '@emotion/react'
import { BiCategoryAlt } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoMdList } from "react-icons/io";
import { LuSettings } from "react-icons/lu";
import type { MenuProps } from 'antd';
// import { LogoNav } from 'src/entities/logo';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"
import { PathRoutes } from 'src/data/constants';
import { changeShowModal, changeShowDrawer } from 'src/app';
import { AddSpendingModal } from 'src/features/add-spending-modal';

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
  getItem('History', PathRoutes.History, <IoMdList />),
  getItem('Categories', PathRoutes.Categories, <BiCategoryAlt />),
  // getItem('Accounts', PathRoutes.Accounts, <LuWalletCards />),
  // getItem('Reports', PathRoutes.Reports, <HiOutlineDocumentReport />),
  getItem('Settings', PathRoutes.Settings, <LuSettings />),
  getItem('Logout', PathRoutes.Logout, <MdLogout />),
]

const menuBarStyle = css`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 14px;
  border-radius: 8px;
  padding: 0 4px !important;
  background: transparent !important;
  gap: 4px;

  .ant-menu-item-divider{
    border-color: rgba(255, 255,255, 0.1) !important;
  }

  .ant-menu-item{
    margin: 0 !important;
    padding: 0 12px !important;
  }
`

export const SideBar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const [openModal, setOpenModal] = useState(false);
  const { isDarkMode, isDrawerOpened } = useAppSelector(state => state.rootSliceReducer)

  const handleOnClick: MenuProps['onClick'] = (e) => {
    const key = e.key

    // TODO: Refactor this shit, sidebar should not know about drawer
    if (isDrawerOpened) {
      dispatch(changeShowDrawer())
    }

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

  const handleOk = () => {
    Cookies.remove('userData')
    navigate("/login")
    setOpenModal(false);
  };

  const handleCancel = () => setOpenModal(false)

  return (
    <div>
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
