import * as React from 'react';
import { css } from "@emotion/react"
import PageWrapper from 'src/components/PageWrapper'
import { Col, Space, Row, Skeleton } from 'antd';
import PageHeader from 'src/components/PageHeader';
import { useGetCategoriesQuery } from 'src/services/categories/categoriesApi';
import { ICategory } from 'src/models/models';
import CounterLabel from 'src/components/labels/CounterLabel';
import ErrorLabel from 'src/components/labels/ErrorLabel';
import { lazy, Suspense } from 'react';

const CategorieBlock = lazy(() => import('src/components/CategorieBlock'));

interface ICategoriesPageProps {
}

const CategoriesPage: React.FunctionComponent<ICategoriesPageProps> = (props) => {

	const { data, isLoading, isError } = useGetCategoriesQuery(null, { refetchOnFocus: true })

	return (
		<>
			<PageWrapper>
				<PageHeader pageTitle='Categories'>
					{data && data?.length > 0 && <CounterLabel count={data?.length ?? 0} />}
				</PageHeader>
				<Space>
					<Row gutter={[16, 16]}>
						{data && data.length > 0 && data.map((item: ICategory) => (
							<Col className="gutter-row" xl={4} lg={6} md={8} sm={12} xs={24} key={item.id}>
								<Suspense fallback={<Skeleton active />}>
									<CategorieBlock
										title={item.title}
										description={item.description}
										id={item.id}
									/>
								</Suspense>
							</Col>
						))
						}
					</Row>
				</Space>
				{!data && !isLoading && !isError && <h5>No available categories</h5>}
				{isError && <ErrorLabel />}
			</PageWrapper>
		</>
	)
};

export default CategoriesPage;
