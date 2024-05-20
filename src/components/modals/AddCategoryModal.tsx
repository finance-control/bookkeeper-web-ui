import { Modal, Form, Input, Alert, Button } from 'antd';
import { css } from '@emotion/react';
import { useAppSelector, useAppDispatch } from 'src/hooks/redux';
import { changeShowModal } from 'src/store/reducers/RootSlice';
import { useAddCategoryMutation } from 'src/services/categories/categoriesApi'

interface IAddCategoryModalProps {
}

const AddCategoryModal: React.FC<IAddCategoryModalProps> = (props) => {
  const [addCategory, { data, isSuccess, isLoading, isError, reset }] = useAddCategoryMutation()
  const dispatch = useAppDispatch()
  const { isModalOpen, modalType } = useAppSelector(state => state.rootSliceReducer.modal)
  const [form] = Form.useForm();

  const handleOk = () => {
    addCategory({
      title: form.getFieldsValue().title,
      description: ''
    })
    form.resetFields()
    reset
  }

  const handleCancel = () => dispatch(changeShowModal({
    isModalOpen: false,
    modalType: ''
  }))

  return (
    <>
      <Modal
        title="Add category"
        open={isModalOpen && modalType === 'add_category'}
        onOk={handleOk}
        onCancel={handleCancel}
        okText='Add category'
        confirmLoading={isLoading}
        css={css`
          padding-bottom: 32px;
        `}
      >
        {!data && (!isSuccess || !isError) &&
          <Form
            form={form}
            name="form_add_category"
            layout="vertical"
          >
            <Form.Item
              label="Title"
              name="title"
              rules={[
                {
                  required: true,
                  message: 'Please type category title!'
                }]}>
              <Input
                placeholder='Salary, education, food, video games, etc...'
                maxLength={20}
              />
            </Form.Item>
          </Form>}
        {
          isSuccess &&
          <Alert
            message="Catergory has been added"
            type="success"
            showIcon
            action={
              <Button type='text'>
                Add one more
              </Button>
            }
          />
        }
        {
          isError &&
          <Alert
            message="Something went wrong, please try again."
            type="error"
            showIcon
          />
        }
      </Modal>
    </>
  )
};

export default AddCategoryModal;
