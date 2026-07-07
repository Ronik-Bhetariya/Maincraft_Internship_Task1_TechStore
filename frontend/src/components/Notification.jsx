import { useEffect } from 'react';

function Notification({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`notification notification-${type}`} role="alert">
      <span>{message}</span>
      <button type="button" className="notification-close" onClick={onClose} aria-label="Close">
        ×
      </button>
    </div>
  );
}

export default Notification;
