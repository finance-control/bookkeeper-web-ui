import { css } from '@emotion/react';
import PageWrapper from 'src/components/PageWrapper'
import PageHeader from 'src/components/PageHeader';
import BalanceBlock from 'src/components/BalanceBlock';
import OperationCardsBlock from 'src/components/OperationCardsBlock';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
	return (
		<>
			<PageWrapper>
				<PageHeader pageTitle='Dashboard' />
				<OperationCardsBlock css={css`
					margin-bottom: 24px;
				`} />
				<BalanceBlock />
			</PageWrapper>
		</>
	)
};

export default Home;
