// components/Banner300.js
import { useEffect, useRef } from 'react';

const Banner300 = () => {
  const banner300 = useRef(null);

  const atOptions = {
    key: 'e695bd34e6efebc87b38b78690144d12',
    format: 'iframe',
    height: 250,
    width: 300,
    params: {},
  };

  useEffect(() => {
    if (banner300.current && !banner300.current.firstChild) {
      const conf = document.createElement('script');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `//www.topcreativeformat.com/${atOptions.key}/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      banner300.current.appendChild(conf);
      banner300.current.appendChild(script);
    }
  }, [banner300]);

  return (
    <div
      className="banner300-container"
      ref={banner300}
    ></div>
  );
};

export default Banner300;
