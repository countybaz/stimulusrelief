
import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

interface Notification {
  name: string;
  timestamp: string;
}

const names = [
  "Michael Johnson", "Sarah Williams", "David Brown", "Emily Davis", 
  "James Wilson", "Jennifer Taylor", "Robert Martinez", "Lisa Anderson",
  "John Smith", "Mary Garcia", "Thomas Rodriguez", "Patricia Lee",
  "William Thompson", "Elizabeth Clark", "Charles White", "Susan Lewis"
];

export const NotificationToast = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Generate initial notifications
    const initialNotifications = Array(10).fill(null).map(() => ({
      name: names[Math.floor(Math.random() * names.length)],
      timestamp: getRandomTimeAgo()
    }));
    setNotifications(initialNotifications);

    // Set up the interval for showing new notifications
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % 10);
    }, 8000); // Show a new notification every 8 seconds

    return () => clearInterval(interval);
  }, []);

  function getRandomTimeAgo() {
    const minutes = Math.floor(Math.random() * 59) + 1;
    return `${minutes} min ago`;
  }

  if (notifications.length === 0) return null;

  const currentNotification = notifications[currentIndex];

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-notification-slide">
      <div className="bg-white shadow-lg rounded-lg p-4 max-w-xs">
        <div className="flex items-center">
          <div className="bg-stimulus-green rounded-full p-1 mr-3">
            <Check className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="font-medium text-sm">
              {currentNotification.name} <span className="font-normal">just received their</span>{" "}
              <span className="text-stimulus-green font-bold">$1,400</span> <span className="font-normal">check</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">{currentNotification.timestamp}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationToast;
