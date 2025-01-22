import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

import { DefaultLayout } from '../../layouts/';

const Auth = React.lazy(async () => await import('./Auth'));

export const AuthPage = (): React.ReactElement => {
  return (
    <>
      <Helmet>
        <title>Авторизация</title>
      </Helmet>
      <Suspense fallback={<div>fallback</div>}>
        <DefaultLayout>
          <Auth />
        </DefaultLayout>
      </Suspense>
    </>
  );
};
