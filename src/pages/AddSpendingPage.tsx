import * as React from 'react';
import { css } from "@emotion/react"
import PageHeader from 'src/components/PageHeader';
import PageWrapper from 'src/components/PageWrapper';
import { Button, Form, Input, message, Select, InputNumber, DatePicker, Row, Col } from 'antd';
import { useGetCategoriesQuery } from 'src/services/categories/categoriesApi';
import { useGetCurrenciesQuery } from 'src/services/currencies/currenciesApi';
import dayjs from 'dayjs';
import { useAddSpendingMutation } from 'src/services/spendings/spendingsApi';

const dateFormat = 'YYYY-MM-DD'

const { TextArea } = Input

const filterOption = (input: string, option?: { label: string; value: string }) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

interface IAddSpendingPageProps {
}

const AddSpendingPage: React.FunctionComponent<IAddSpendingPageProps> = (props) => {
  const { data,
    isLoading,
    isError } = useGetCategoriesQuery(null, { refetchOnFocus: true })

  const {
    data: currenciesData,
    isLoading: currenciesLoading,
    isError: currenciesError
  } = useGetCurrenciesQuery(null, { refetchOnFocus: true })

  const [addSpending,
    { data: spendingData,
      isLoading: isSpendingLoading,
      isError: isSpendingError,
      isSuccess: isSpendingSuccess,
      reset: spendingReset }
  ] = useAddSpendingMutation()

  const [messageApi, contextHolder] = message.useMessage();

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

  const onFinish = (value: any) => {
    addSpending({
      money: {
        money: {
          amount: value.amount,
          digits: getDigitsCount(value.amount),
          currencyCode: value.currencyCode
        },
        accountId: null,
      },
      date: value.date.format(dateFormat),
      description: value.description,
      categoryId: value.categoryId
    })
    form.resetFields()
    spendingReset()
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

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Spending added',
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Something went wrong, try again',
    });
  };

  React.useEffect(() => {
    if (isSpendingSuccess) success()
    if (isSpendingError) error()
  }, [isSpendingSuccess, isSpendingError])

  return (
    <div>
      <PageWrapper>
        {contextHolder}
        <PageHeader pageTitle='Add spending' />
        <Form
          form={form}
          name="form_add_spending"
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            date: dayjs(getDate(), dateFormat),
            amount: 100,
            currencyCode: 'USD'
          }}
        >
          <Row gutter={[16, 16]}>
            <Col md={8} xs={24}>
              <Form.Item label="Category" name="categoryId" rules={[{ required: true, message: 'Please choose category' }]}>
                <Select
                  showSearch
                  placeholder="Select category"
                  optionFilterProp="children"
                  filterOption={filterOption}
                  options={getCategoriesData()}
                  size='large'
                  style={{ width: '100%' }}
                  title='categoryId'
                />
              </Form.Item>
            </Col>

            <Col md={8} xs={24}>
              <Form.Item label="Date" name="date" rules={[{ required: true, message: 'Please choose date' }]}>
                <DatePicker
                  size="large"
                  style={{ width: '100%' }}
                  maxDate={dayjs(getDate(), dateFormat)}
                  format={dateFormat}
                  inputReadOnly
                />
              </Form.Item>
            </Col>

            <Col md={8} xs={24}>
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
            </Col>
          </Row>

          <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please type spending description' }]}>
            <TextArea
              showCount
              maxLength={60}
              placeholder="More infomation about spending"
              style={{ height: 90, resize: 'none' }}
            />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Add spending
          </Button>
        </Form>
      </PageWrapper>
    </div>
  )
};

export default AddSpendingPage;
