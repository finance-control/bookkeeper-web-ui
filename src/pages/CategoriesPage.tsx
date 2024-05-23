import { css } from "@emotion/react"
import PageWrapper from 'src/components/PageWrapper'
import { Space, Skeleton, Button, Typography, Empty, Alert, Flex } from 'antd';
import { useGetCategoriesQuery } from 'src/services/categories/categoriesApi';
import { ICategory } from 'src/models/models';
import { lazy, Suspense } from 'react';
import AddCategoryModal from 'src/components/modals/AddCategoryModal';
import { changeShowModal } from 'src/store/reducers/RootSlice';
import { useAppDispatch } from 'src/hooks/redux';
import BlockContent from 'src/components/BlockContent'

const CategoryTag = lazy(() => import('src/components/CategoryTag'));

const { Title } = Typography

interface ICategoriesPageProps {
}

const CategoriesPage: React.FunctionComponent<ICategoriesPageProps> = (props) => {
	const { data, isLoading, isError } = useGetCategoriesQuery(null, { refetchOnFocus: true })
	const dispatch = useAppDispatch()
	return (
		<>
			<PageWrapper>
				<BlockContent>
					<Flex align="center" justify="space-between">
						<Flex align="center">
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
							<Button
								onClick={() => dispatch(changeShowModal(
									{
										isModalOpen: true,
										modalType: 'add_category'
									}
								))}>
								Add category
							</Button>
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

export default CategoriesPage;
