import {
  Modal,
  Form,
  Input,
  Alert,
  Button,
  Select,
  InputNumber,
  DatePicker
} from 'antd';
import { css } from '@emotion/react';
import { useAppSelector, useAppDispatch, changeShowModal } from 'src/app';
import { useGetCategoriesQuery } from 'src/shared/api/categoriesApi';
import { useGetCurrenciesQuery } from 'src/services/currencies/currenciesApi';
import dayjs from 'dayjs';
import { useAddSpendingMutation } from 'src/services/spendings/spendingsApi';

const dateRequestFormat = 'YYYY-MM-DD'
const dateViewFormat = 'DD.MM.YYYY'

const { TextArea } = Input

const filterOption = (input: string, option?: { label: string; value: string }) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

interface IAddSpendingModalProps {
}

export const AddSpendingModal: React.FC<IAddSpendingModalProps> = () => {
  const { data, isLoading } = useGetCategoriesQuery(null, { refetchOnFocus: true })

  const {
    data: currenciesData
  } = useGetCurrenciesQuery(null, { refetchOnFocus: true })

  const [addSpending,
    { data: spendingData,
      isError: isSpendingError,
      isSuccess: isSpendingSuccess,
      reset: spendingReset }
  ] = useAddSpendingMutation()
  const dispatch = useAppDispatch()
  const { isModalOpen, modalType } = useAppSelector(state => state.rootSliceReducer.modal)
  const [form] = Form.useForm();

  const getDigitsCount = (number: number): number => {
    const numberString = number.toString()
    if (numberString.includes('.')) {
      const parts = numberString.split('.')
      if (Array.isArray(parts) && parts.length > 1) {
        return parts.pop()!.length
      }
    }
    return 0;
  }

  const getCategoriesData = () => {
    if (data && data.length > 0) {
      const categories = data.map((item: any) => (
        {
          value: '' + item.id,
          label: item.title
        }
      ))
      return [...categories]
    }
    return [{ value: '', label: '' }]
  }

  const getCurrencies = () => {
    let currencies = [{ value: '', label: '' }]
    if (currenciesData && currenciesData.length > 0) {
      currencies = currenciesData.map((item: any) => (
        {
          value: '' + item.code,
          label: item.code
        }
      ))
    }

    return (
      <Form.Item name="currencyCode" css={css`margin-bottom: 0;`}>
        <Select
          style={{ width: 80 }}
          options={[...currencies]}
        />
      </Form.Item>
    )
  }

  const getDate = () => new Date().toISOString().split('T')[0]

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
      description: form.getFieldsValue().description,
      categoryId: form.getFieldsValue().categoryId
    })
    form.resetFields()
    spendingReset()
  }

  const handleCancel = () => dispatch(changeShowModal({
    isModalOpen: false,
    modalType: ''
  }))

  return (
    <>
      <Modal
        title="Add spending"
        open={isModalOpen && modalType === 'add_spending'}
        onOk={handleOk}
        onCancel={handleCancel}
        okText='Add spending'
        confirmLoading={isLoading}
      >
        {!spendingData && (!isSpendingSuccess || !isSpendingError) &&
          <Form
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
                addonAfter={getCurrencies()}
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
                filterOption={filterOption}
                options={getCategoriesData()}
                style={{ width: '100%' }}
                title='categoryId'
              />
            </Form.Item>

            <Form.Item
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
        {
          isSpendingSuccess &&
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
          isSpendingError &&
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
