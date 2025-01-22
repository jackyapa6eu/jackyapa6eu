import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

import { DefaultLayout } from '../../layouts/';

const TimeTracker = React.lazy(async () => await import('./TimeTracker'));

export const TimeTrackerPage = (): React.ReactElement => {
  return (
    <>
      <Helmet>
        <title>Трекинг времени</title>
      </Helmet>
      <Suspense fallback={<div>fallback</div>}>
        <DefaultLayout>
          <TimeTracker />
        </DefaultLayout>
      </Suspense>
    </>
  );
};
