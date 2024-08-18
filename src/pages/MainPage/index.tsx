import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { DefaultLayout } from '../../layouts/DefaultLayout';

const Main = React.lazy(async () => await import('./Main'));

export const MainPage = (): React.ReactElement => {
  return (
    <>
      <Helmet>
        <title>Денисов Евгений</title>
      </Helmet>
      <Suspense fallback={<div>fallback</div>}>
        <DefaultLayout>
          <Main />
        </DefaultLayout>
      </Suspense>
    </>
  );
};
