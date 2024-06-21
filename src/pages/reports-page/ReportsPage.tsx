import * as React from 'react';
import PageHeader from 'src/entities/ui/PageHeader';
import PageWrapper from 'src/entities/ui/PageWrapper';

interface IReportsPageProps {
}

const ReportsPage: React.FC<IReportsPageProps> = () => {
  return (
    <>
      <PageWrapper>
        <PageHeader pageTitle='Reports' />
      </PageWrapper>
    </>
  )
}

export default ReportsPage;
