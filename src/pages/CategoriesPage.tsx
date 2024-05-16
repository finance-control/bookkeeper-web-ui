import { css } from "@emotion/react"
import PageWrapper from 'src/components/PageWrapper'
import { Space, Skeleton, Button, Typography, Empty, Alert } from 'antd';
import PageHeader from 'src/components/PageHeader';
import { useGetCategoriesQuery } from 'src/services/categories/categoriesApi';
import { ICategory } from 'src/models/models';
import CounterLabel from 'src/components/labels/CounterLabel';
import { lazy, Suspense } from 'react';
import AddCategoryModal from 'src/components/modals/AddCategoryModal';
import { changeShowModal } from 'src/store/reducers/RootSlice';
import { useAppDispatch } from 'src/hooks/redux';

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
				<PageHeader
					pageTitle='Categories'
					subtitle={data && data?.length > 0 && <CounterLabel count={data?.length ?? 0} />}
				>
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
				</PageHeader>
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
				<AddCategoryModal />
			</PageWrapper>
		</>
	)
};

export default CategoriesPage;
