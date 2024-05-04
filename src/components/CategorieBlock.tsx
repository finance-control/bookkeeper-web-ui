import * as React from 'react';
import { css } from "@emotion/react"
import IconRemove from 'src/assets/icons/icon_remove_dark.svg'
import { useRemoveCategoryMutation } from 'src/services/categories/categoriesApi'
import { Card, Typography } from 'antd'

const { Text } = Typography;

const categorieStyle = css`
  height: 100%;
  &:hover > .iconDeleteStyle {
    display: block;
  }
  .ant-card-head{
    padding: 0 12px !important;
  }

  .ant-card-body{
    padding: 12px 12px !important;
  }
`

const iconDeleteStyle = css`
  width: 20px;
  height: 20px;
  opacity: 10%;
  &:hover{
    cursor: pointer;
    opacity: 100%;
  }
`

const iconDeleteWrapper = css`
  border-radius: 50%;
  border: none;
  background: none;
  padding: 0;
`

interface ICategorieBlockProps {
  title: string;
  description: string;
  id: number;
}

const CategorieBlock: React.FunctionComponent<ICategorieBlockProps> = ({ title, description, id }) => {

  const [removeCategory] = useRemoveCategoryMutation()
  const handleDelete = () => removeCategory(id)

  return (
    <>
      <Card
        title={title}
        extra={
          <button
            onClick={handleDelete}
            css={iconDeleteWrapper}>
            <img src={IconRemove} css={iconDeleteStyle} />
          </button>}
        hoverable
        css={categorieStyle}
      >
        <Text type="secondary">{description}</Text>
      </Card>
    </>
  )
};

export default CategorieBlock;
