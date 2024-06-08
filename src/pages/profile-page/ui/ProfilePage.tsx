import PageWrapper from 'src/entities/ui/PageWrapper'
import { Flex, Space } from 'antd';
import { BlockContent } from 'src/shared/ui';
import { UserInfo } from './UserInfo'

export interface IProfilePageProps {
}

export const ProfilePage = (props: IProfilePageProps) => {
	return (
		<div>
			<PageWrapper>
				<BlockContent>
					<Space>
						<Flex align='center'>
							<UserInfo />
						</Flex>
					</Space>
				</BlockContent>

			</PageWrapper>
		</div>
	);
}
