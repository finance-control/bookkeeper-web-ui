import * as React from 'react';
import PageWrapper from 'src/components/PageWrapper'
import PageHeader from 'src/components/PageHeader';
import BalanceBlock from 'src/components/BalanceBlock';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
	return (
		<>
			<PageWrapper>
				<PageHeader pageTitle='Dashboard' />
				<BalanceBlock />
			</PageWrapper>
		</>
	)
};

export default Home;
