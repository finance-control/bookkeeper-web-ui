import PageHeader from 'src/components/PageHeader';
import PageWrapper from 'src/components/PageWrapper';
import React, { useEffect } from 'react';
import { Button, Form, Input, message } from 'antd';
import { useAddCategoryMutation } from 'src/services/categories/categoriesApi'

const { TextArea } = Input

interface IAddCategoryPageProps {
}

const AddCategoryPage: React.FunctionComponent<IAddCategoryPageProps> = (props) => {

  const [addCategory, { data, isSuccess, isLoading, isError, reset }] = useAddCategoryMutation()
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Category added',
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Something went wrong, try again',
    });
  };

  const onFinish = (value: object) => {
    addCategory(value)
    form.resetFields()
    reset()
  }

  useEffect(() => {
    if (isSuccess) success()
    if (isError) error()
  }, [isSuccess, isError])

  return (
    <>
      <PageWrapper>
        {contextHolder}
        <PageHeader pageTitle='Add category' />

        <Form form={form} name="form_add_category" layout="vertical" onFinish={onFinish}>
          <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please type category title!' }]}>
            <Input
              placeholder='Salary, education, food, video games, etc...'
              maxLength={20}
            />
          </Form.Item>
          <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please type category description!' }]}>
            <TextArea
              showCount
              maxLength={100}
              placeholder="More infomation about category"
              style={{ height: 120, resize: 'none' }}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Add category
          </Button>
        </Form>
      </PageWrapper>
    </>
  )
};

export default AddCategoryPage;
