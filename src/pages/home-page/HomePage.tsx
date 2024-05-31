import { css } from '@emotion/react';
import PageWrapper from 'src/entities/ui/PageWrapper'
import BalanceBlock from 'src/widgets/ui/BalanceBlock';
import OperationCardsBlock from 'src/widgets/ui/OperationCardsBlock';
import BlockContent from 'src/entities/ui/BlockContent'

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
