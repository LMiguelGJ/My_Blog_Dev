import React, { useEffect } from 'react';

const BannerHead = ({ count }) => {
  useEffect(() => {
    const loadAd = (iframeId, options) => {
      const iframe = document.getElementById(iframeId);
      const src = `//www.topcreativeformat.com/${options.key}/invoke.js`;
      iframe.contentWindow.document.open();
      iframe.contentWindow.document.write(`<script type="text/javascript">var atOptions = ${JSON.stringify(options)};<\/script>`);
      iframe.contentWindow.document.write(`<script type="text/javascript" src="${src}"><\/script>`);
      iframe.contentWindow.document.close();
    };

    for (let i = 1; i <= count; i++) {
      const options = {
        key: '30df60a097f74fe877515b0ca56a1ab9',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {}
      };
      loadAd(`ad_iframe${i}`, options);
    }
  }, [count]);

  return (
    <div>
      {Array.from({ length: count }, (_, i) => (
        <iframe
          key={i}
          id={`ad_iframe${i + 1}`}
          height="110"
          width="748"
          title={`Ad iframe ${i + 1}`}
        ></iframe>
      ))}
    </div>
  );
};

export default BannerHead;
