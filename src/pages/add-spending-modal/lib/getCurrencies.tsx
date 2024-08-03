import { ICurrency } from "src/shared/models"
import { css } from "@emotion/react"
import { Form, Select } from "antd"

export const getCurrencies = (data: ICurrency[] | null | undefined) => {
  let currencies = [{ value: '', label: '' }]
  if (data && data.length > 0) {
    currencies = data.map((item: ICurrency) => (
      {
        value: '' + item.code,
        label: item.code
      }
    ))
  }

  return (
    <Form.Item name="currencyCode" css={css`
      margin-bottom: 0;`
    }>
      <Select
        style={{ width: 80 }}
        options={[...currencies]}
      />
    </Form.Item>
  )
}