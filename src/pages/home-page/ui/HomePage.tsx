import { css } from '@emotion/react';
import PageWrapper from 'src/entities/ui/PageWrapper'
import BalanceBlock from 'src/widgets/ui/BalanceBlock';
import { OperationCards } from 'src/widgets/operation-cards';
import { BlockContent } from 'src/shared/ui'

interface IHomeProps {
}

export const HomePage: React.FunctionComponent<IHomeProps> = (props) => {
	return (
		<>
			<PageWrapper>
				<BlockContent css={css`
					margin-bottom: 16px;
				`}>
					<OperationCards css={css`
						width: 100%;
					`} />
				</BlockContent>

				{/* <BlockContent>
					<BalanceBlock />
				</BlockContent> */}

			</PageWrapper>
		</>
	)
};
