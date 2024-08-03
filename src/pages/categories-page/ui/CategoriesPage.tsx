import { css } from "@emotion/react"
import PageWrapper from 'src/entities/ui/PageWrapper'
import { Space, Skeleton, Button, Typography, Empty, Alert, Flex } from 'antd'
import { useGetCategoriesQuery } from 'src/shared/api'
import { ICategory } from 'src/shared/models';
import { lazy, Suspense } from 'react';
import { AddCategoryModal } from 'src/pages/add-category-modal'
import { BlockContent } from 'src/shared/ui'
import { AddCategory } from "src/features/add-category"

const CategoryTag = lazy(() => import('src/entities/category-tag'))

const { Title } = Typography

interface ICategoriesPageProps {
}

export const CategoriesPage: React.FC<ICategoriesPageProps> = () => {
	const { data, isLoading, isError } = useGetCategoriesQuery(null, { refetchOnFocus: true })
	return (
		<>
			<PageWrapper>
				<BlockContent>
					<Flex
						align="center"
						justify="space-between"
						wrap
						css={css`
							margin-bottom: 12px;
						`}
					>
						<Flex align="center" wrap>
							<Title level={4} css={css`
								margin-right: 8px;
							`}>
								Categories
							</Title>
							{data && data.length &&
								<Title level={4} css={css`
									opacity: 20%;
									font-weight: 500 !important;
								`}>
									{data?.length ?? 0}
								</Title>}
						</Flex>

						<Space>
							<AddCategory />
							<Button disabled>Add group</Button>
						</Space>
					</Flex>

					<Title level={5} style={{ marginBottom: 8, opacity: '20%' }}>
						Out of group
					</Title>
					<Space wrap size={8}>
						{data && data.length > 0 && data.map((item: ICategory) => (
							<Suspense fallback={<Skeleton active />} key={item.id}>
								<CategoryTag
									title={item.title}
									id={item.id}
								/>
							</Suspense>
						))}
					</Space>
					{!data && !isLoading && !isError &&
						<Empty description={
							<span>No available categories</span>
						} />}
					{isError &&
						<Alert
							message="Something went wrong, please try again"
							type="error"
							showIcon
						/>}
				</BlockContent>
				<AddCategoryModal />
			</PageWrapper>
		</>
	)
};
