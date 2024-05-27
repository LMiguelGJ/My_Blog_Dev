// components/Banner.js
import { useEffect, useRef } from 'react';

const Banner = () => {
  const banner = useRef(null);

  const atOptions = {
    key: '30df60a097f74fe877515b0ca56a1ab9',
    format: 'iframe',
    height: 90,
    width: 728,
    params: {},
  };

  useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
      const conf = document.createElement('script');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `//www.topcreativeformat.com/${atOptions.key}/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      banner.current.appendChild(conf);
      banner.current.appendChild(script);
    }
  }, [banner]);

  return (
    <div
      className="banner-container"
      ref={banner}
    ></div>
  );
};

export default Banner;
