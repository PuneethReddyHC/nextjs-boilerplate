import React from 'react';
import { NextPageContext } from 'next';

type Props = {
  statusCode: number;
};

const ErrorPage = ({ statusCode }: Props) => {
  if (statusCode === 404) {
    return (
      <div>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for cannot be found.</p>
      </div>
    );
  } else if (statusCode === 500) {
    return (
      <div>
        <h1>500 - Internal Server Error</h1>
        <p>Sorry, there was a problem with the server.</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </h1>
        <p>Sorry, there was a problem with the server.</p>
      </div>
    );
  }
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;