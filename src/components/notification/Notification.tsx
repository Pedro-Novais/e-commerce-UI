import React, { useState } from "react";
import "./Notification.css"; // Para os estilos (opcional)

type NotificationProps = {
  message: string;
  type?: "error" | "success" | "info" | "warning"; // Tipos de notificação
  duration?: number; // Tempo em milissegundos para ocultar automaticamente
};

const Notification: React.FC<NotificationProps> = ({
  message,
  type = "info",
  duration = 5000,
}) => {
  const [visible, setVisible] = useState(true);

  // Ocultar notificação após "duration"
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className={`notification ${type}`}>
      <span>{message}</span>
      <button className="close-btn" onClick={() => setVisible(false)}>
        &times;
      </button>
    </div>
  );
};

export default Notification;
