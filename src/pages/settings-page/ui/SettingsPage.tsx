import PageWrapper from 'src/entities/ui/PageWrapper'
import { Button } from 'antd';
import { BlockContent } from 'src/shared/ui'

interface ISettingsPageProps {
}

export const SettingsPage: React.FC<ISettingsPageProps> = () => {
  return (
    <>
      <PageWrapper>
        <BlockContent>
          <Button danger disabled>
            Delete account
          </Button>
        </BlockContent>

      </PageWrapper >
    </>
  )
};
