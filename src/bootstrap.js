import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "@patternfly/react-core/dist/styles/base.css";
const CreateConnector = React.lazy(() => import('debeziumui/debeziumCreateConnector'));

function App() {
  return (
    <>
      <React.Suspense fallback='Loading Counter...'>
        <CreateConnector />
      </React.Suspense>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
