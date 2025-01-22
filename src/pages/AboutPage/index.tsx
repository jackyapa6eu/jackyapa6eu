import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

import { DefaultLayout } from '../../layouts/';

const About = React.lazy(async () => await import('./About'));

export const AboutPage = (): React.ReactElement => {
  return (
    <>
      <Helmet>
        <title>Обо мне</title>
      </Helmet>
      <Suspense fallback={<div>fallback</div>}>
        <DefaultLayout>
          <About />
        </DefaultLayout>
      </Suspense>
    </>
  );
};

export default AboutPage;
