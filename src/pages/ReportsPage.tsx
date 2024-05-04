import * as React from 'react';
import PageHeader from 'src/components/PageHeader';
import PageWrapper from 'src/components/PageWrapper';

interface IReportsPageProps {
}

const ReportsPage: React.FC<IReportsPageProps> = (props) => {
  return (
    <>
      <PageWrapper>
        <PageHeader pageTitle='Reports' />
      </PageWrapper>
    </>
  )
}

export default ReportsPage;
