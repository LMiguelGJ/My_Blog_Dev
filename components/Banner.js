import React, { useEffect } from 'react';

const Banner = ({ count, prefix }) => {
  useEffect(() => {
    const loadAd = (iframeId, options) => {
      const iframe = document.getElementById(iframeId);
      const src = `//www.topcreativeformat.com/${options.key}/invoke.js`;
      const content = `
        <script type="text/javascript">
          var atOptions = ${JSON.stringify(options)};
        <\/script>
        <script type="text/javascript" src="${src}"><\/script>
      `;
      iframe.contentWindow.document.open();
      iframe.contentWindow.document.write(content);
      iframe.contentWindow.document.close();
    };

    for (let i = 1; i <= count; i++) {
      const options = {
        key: 'e695bd34e6efebc87b38b78690144d12',
        format: 'iframe',
        height: 250,
        width: 300,
        params: {}
      };
      loadAd(`${prefix}_ad_iframe${i}`, options);
    }
  }, [count, prefix]);

  return (
    <div>
      {Array.from({ length: count }, (_, i) => (
        <iframe
          key={i}
          id={`${prefix}_ad_iframe${i + 1}`}
          width="320"
          height="270"
          title={`Ad iframe ${i + 1}`}
        ></iframe>
      ))}
    </div>
  );
};

export default Banner;
