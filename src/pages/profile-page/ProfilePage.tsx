import PageWrapper from 'src/entities/ui/PageWrapper'
import { useGetUserQuery } from 'src/services/user/userApi';
import UserAvatar from 'src/shared/ui/UserAvatar';
import { Flex, Space, Typography } from 'antd';
import { css } from '@emotion/react';
import BlockContent from 'src/entities/ui/BlockContent';

const { Title } = Typography

const nameStyle = css`
	margin-bottom: 4px !important;
`

const surnameStyle = css`
	margin-top: 0 !important;
	margin-bottom: 0 !important;
`

export interface IProfilePageProps {
}

export default function ProfilePage(props: IProfilePageProps) {
	const { data, isLoading, isError } = useGetUserQuery({})

	return (
		<div>
			<PageWrapper>
				<BlockContent>
					<Space>
						<Flex align='center'>
							<UserAvatar size={128} css={css`margin-right: 16px;`} />
							<div>
								<Title level={3} css={nameStyle}>
									{data?.name}
								</Title>
								<Title level={5} css={surnameStyle}>
									{data?.surname}
								</Title>
							</div>
						</Flex>
					</Space>
				</BlockContent>

			</PageWrapper>
		</div>
	);
}