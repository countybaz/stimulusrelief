
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MD5 from 'crypto-js/md5';

interface RedTrackProtectionProps {
  secretKey: string;
  children: React.ReactNode;
}

const RedTrackProtection: React.FC<RedTrackProtectionProps> = ({ secretKey, children }) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Get the lpkeyua parameter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const lpkeyua = urlParams.get('lpkeyua');
    
    if (!lpkeyua) {
      // Redirect to 404 if no key provided
      navigate('*', { replace: true });
      return;
    }
    
    try {
      // Parse the hash and hash time from the key
      const [hash, hashTimeStr] = lpkeyua.split('.');
      const hashTime = parseInt(hashTimeStr, 10);
      
      // Check if the hash is valid and not expired
      const userAgent = window.navigator.userAgent;
      const inputString = secretKey + hashTime + userAgent;
      const expectedHash = MD5(inputString).toString();
      const isValidHash = expectedHash + '.' + hashTime === lpkeyua;
      const isExpired = Date.now() / 1000 > hashTime;
      
      if (!isValidHash || isExpired) {
        // Redirect to 404 if validation fails
        navigate('*', { replace: true });
      }
    } catch (error) {
      console.error('Error validating RedTrack protection:', error);
      navigate('*', { replace: true });
    }
    
  }, [secretKey, navigate]);
  
  return <>{children}</>;
};

export default RedTrackProtection;
