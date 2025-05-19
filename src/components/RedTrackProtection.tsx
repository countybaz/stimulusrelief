
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
      // Redirect to 404 or home if no key provided
      navigate('/not-found', { replace: true });
      return;
    }
    
    // Parse the hash and hash time from the key
    const [hash, hashTimeStr] = lpkeyua.split('.');
    const hashTime = parseInt(hashTimeStr, 10);
    
    // Check if the hash is valid and not expired
    const userAgent = window.navigator.userAgent;
    const expectedHash = generateMD5(secretKey + hashTime + userAgent);
    const isValidHash = expectedHash + '.' + hashTime === lpkeyua;
    const isExpired = Date.now() / 1000 > hashTime;
    
    if (!isValidHash || isExpired) {
      // Redirect to 404 or home if validation fails
      navigate('/not-found', { replace: true });
    }
    
  }, [secretKey, navigate]);
  
  return <>{children}</>;
};

// Simple MD5 implementation for client-side (note: in a real app, use a proper crypto library)
const generateMD5 = (input: string) => {
  // This is a placeholder - in a real app, you would use a proper MD5 implementation
  // For security reasons, the proper implementation should be done server-side
  console.log('Validating with input:', input);
  
  // Return a mock hash for demonstration purposes
  // In production, use an actual crypto library or implement server-side validation
  return 'mock-hash-' + input.length;
};

export default RedTrackProtection;
