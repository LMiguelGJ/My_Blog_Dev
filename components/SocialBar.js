import { useEffect } from 'react';

const SocialBar = ({ uniqueKey }) => {
  useEffect(() => {
    const scriptId = `social-bar-${uniqueKey}`;
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//pl23422628.highcpmgate.com/31/24/84/312484316662331a3d8f85e715e08430.js';
      script.id = scriptId;
      document.head.appendChild(script);

      return () => {
        const scriptElement = document.getElementById(scriptId);
        if (scriptElement) {
          document.head.removeChild(scriptElement);
        }
      };
    }
  }, [uniqueKey]);

  return null;
};

export default SocialBar;
