import {
  Modal,
  Form,
  Input,
  Select,
  InputNumber,
  DatePicker,
  message
} from 'antd';
import { useAppSelector, useAppDispatch, changeShowModal } from 'src/app';
import { useGetCategoriesQuery, useGetCurrenciesQuery } from 'src/shared/api';
import dayjs from 'dayjs';
import { useAddSpendingMutation } from 'src/services/spendings/spendingsApi';
import { getDigitsCount } from '../lib/getDigitsCount';
import { getCategoriesData } from '../lib/getCategoriesData';
import { getCurrencies } from '../lib/getCurrencies';
import { getFilterOption } from '../lib/getFilterOption';
import { useEffect } from 'react';

const dateRequestFormat = 'YYYY-MM-DD'
const dateViewFormat = 'DD.MM.YYYY'

const { TextArea } = Input

export const AddSpendingModal: React.FC = () => {
  const dispatch = useAppDispatch()
  const { isModalOpen, modalType } = useAppSelector(state => state.rootSliceReducer.modal)
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const { data, isLoading } = useGetCategoriesQuery(null, { refetchOnFocus: true })
  const { data: currenciesData } = useGetCurrenciesQuery(null, { refetchOnFocus: true })
  const [addSpending,
    { data: spendingData,
      isError: isSpendingError,
      isSuccess: isSpendingSuccess,
      reset: spendingReset }
  ] = useAddSpendingMutation()

  const getDate = () => new Date().toISOString().split('T')[0]

  useEffect(() => {
    messageApi.open({
      type: 'success',
      content: 'Catergory has been added',
    });
  }, [isSpendingSuccess])

  useEffect(() => {
    messageApi.open({
      type: 'error',
      content: 'Something went wrong, please try again.',
    });
  }, [isSpendingError])

  const handleOk = () => {
    addSpending({
      money: {
        money: {
          amount: form.getFieldsValue().amount,
          digits: getDigitsCount(form.getFieldsValue().amount),
          currencyCode: form.getFieldsValue().currencyCode
        },
        accountId: null,
      },
      date: form.getFieldsValue().date.format(dateRequestFormat),
      description: form.getFieldsValue().description ?? '',
      categoryId: form.getFieldsValue().categoryId
    })

    form.resetFields()
    spendingReset()
    dispatch(changeShowModal({
      isModalOpen: false,
      modalType: ''
    }))
  }

  const handleCancel = () => {
    dispatch(changeShowModal({
      isModalOpen: false,
      modalType: ''
    }))
  }

  return (
    <>
      {contextHolder}
      <Modal
        title="Add spending"
        open={isModalOpen && modalType === 'add_spending'}
        onOk={handleOk}
        onCancel={handleCancel}
        okText='Add spending'
        confirmLoading={isLoading}
      >
        {!spendingData &&
          < Form
            form={form}
            name="form_add_spending"
            layout="vertical"
            initialValues={{
              date: dayjs(getDate(), dateRequestFormat),
              amount: 100,
              currencyCode: 'USD'
            }}
          >
            <Form.Item
              name="amount"
              label="Amount"
              rules={[{ required: true, message: 'Please type amount' }]}
            >
              <InputNumber
                type="number"
                addonAfter={getCurrencies(currenciesData)}
                size="large"
                min={0.1}
                style={{ width: '100%' }}
              />
            </Form.Item>

            <Form.Item
              label="Date"
              name="date"
              rules={[{ required: true, message: 'Please choose date' }]}
            >
              <DatePicker
                style={{ width: '100%' }}
                maxDate={dayjs(getDate(), dateViewFormat)}
                format={dateViewFormat}
                inputReadOnly
              />
            </Form.Item>

            <Form.Item
              label="Category"
              name="categoryId"
              rules={[{ required: true, message: 'Please choose category' }]}
            >
              <Select
                showSearch
                placeholder="Select category"
                optionFilterProp="children"
                filterOption={getFilterOption}
                options={getCategoriesData(data)}
                style={{ width: '100%' }}
                title='categoryId'
              />
            </Form.Item>

            <Form.Item
              required={false}
              label="Description"
              name="description"
              rules={[{ required: true, message: 'Please type spending description' }]}
            >
              <TextArea
                showCount
                maxLength={60}
                placeholder="More infomation about spending"
                style={{ height: 90, resize: 'none' }}
              />
            </Form.Item>
          </Form>}
      </Modal >
    </>
  )
};
