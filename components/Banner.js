import { useEffect } from 'react';

const Banner = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//www.topcreativeformat.com/134d86162e04ded2e82ed51471c77458/invoke.js';
    document.body.appendChild(script);

    const inlineScript = document.createElement('script');
    inlineScript.type = 'text/javascript';
    inlineScript.innerHTML = `
      atOptions = {
        'key': '134d86162e04ded2e82ed51471c77458',
        'format': 'iframe',
        'height': 60,
        'width': 468,
        'params': {}
      };
    `;
    document.body.appendChild(inlineScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(inlineScript);
    };
  }, []);

  return (
    <div id="banner-container" style={{ width: '468px', height: '60px' }}>
      {/* El banner se insertará en este contenedor */}
    </div>
  );
};

export default Banner;
