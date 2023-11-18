import React, { useEffect } from 'react';

const HeadingTitle = ({ pageTitle }) => {
  useEffect(() => {
    document.title = `:: NEXUSBEANS - ${pageTitle} : :`;
  }, [pageTitle]);

  return <></>;
};

export default HeadingTitle;
