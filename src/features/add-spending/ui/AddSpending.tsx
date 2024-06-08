import { Button } from "antd"
import { changeShowModal, useAppDispatch } from 'src/app';

export const AddSpending = () => {
  const dispatch = useAppDispatch()
  return (
    <>
      <Button
        onClick={() => dispatch(changeShowModal(
          {
            isModalOpen: true,
            modalType: 'add_spending'
          }
        ))}>
        Add spending
      </Button>
    </>
  )
}