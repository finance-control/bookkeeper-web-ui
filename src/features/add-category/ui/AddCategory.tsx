import { Button } from "antd"
import { changeShowModal } from 'src/app';
import { useAppDispatch } from 'src/app';

export const AddCategory = () => {
  const dispatch = useAppDispatch()
  return (
    <>
      <Button
        onClick={() => dispatch(changeShowModal(
          {
            isModalOpen: true,
            modalType: 'add_category'
          }
        ))}>
        Add category
      </Button>
    </>
  )
}