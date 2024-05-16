import * as React from 'react';
import { Tag } from 'antd';
import { css } from '@emotion/react';
import { useRemoveCategoryMutation } from 'src/services/categories/categoriesApi'

interface ICategoryTagProps {
  title: string;
  id: number;
}

const CategoryTag: React.FC<ICategoryTagProps> = ({ title, id }) => {
  const [removeCategory] = useRemoveCategoryMutation()
  const handleDelete = () => removeCategory(id)
  return (
    <>
      <Tag
        bordered={false}
        closable
        onClose={handleDelete}
        css={css`
					padding: 12px !important;
          margin-right: 0 !important;
					font-size: 12px !important;
					.anticon{
						font-size: 12px !important;
            margin-left: 8px !important;
					}
				`}>
        {title}
      </Tag>
    </>
  )
};

export default CategoryTag;