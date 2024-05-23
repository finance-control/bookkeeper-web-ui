import { css } from '@emotion/react';
import PageWrapper from 'src/components/PageWrapper'
import BalanceBlock from 'src/components/BalanceBlock';
import OperationCardsBlock from 'src/components/OperationCardsBlock';
import BlockContent from 'src/components/BlockContent'

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
	return (
		<>
			<PageWrapper>
				<BlockContent css={css`
					margin-bottom: 16px;
				`}>
					<OperationCardsBlock css={css`
						width: 100%;
					`} />
				</BlockContent>

				<BlockContent>
					<BalanceBlock />
				</BlockContent>

			</PageWrapper>
		</>
	)
};

export default Home;
