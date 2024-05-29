import { useEffect } from 'react';

const PopunderScript = ({ uniqueKey }) => {
  useEffect(() => {
    const scriptId = `popunder-script-${uniqueKey}`;
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//pl23421167.highcpmgate.com/3a/82/3b/3a823bbfba5905f487eba3e930e7f4b7.js';
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

export default PopunderScript;
