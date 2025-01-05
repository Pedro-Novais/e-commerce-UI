// NotificationContext.tsx
import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Instale com `npm install uuid`

type Notification = {
  id: string; // Altere o tipo do ID para string (UUID)
  message: string;
  type: "success" | "error";
};

type NotificationContextType = {
  addNotification: (message: string, type: "success" | "error") => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Adiciona notificação com UUID para garantir chaves únicas
  const addNotification = (message: string, type: "success" | "error") => {
    const id = uuidv4(); // Gera um ID único
    const newNotification: Notification = { id, message, type };

    // Atualiza o estado e remove automaticamente após 5 segundos
    setNotifications((prev) => [...prev, newNotification]);
    setTimeout(() => {
      setNotifications((prev) =>
        prev.filter((notification) => notification.id !== id)
      );
    }, 5000);
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          margin: "10px",
          zIndex: 9999,
        }}
      >
        {notifications.map((notification) => (
          <div
            key={notification.id} // Agora o ID é sempre único
            style={{
              backgroundColor:
                notification.type === "success" ? "green" : "red",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "5px",
              minWidth: "200px",
            }}
          >
            {notification.message}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

// Hook para usar o contexto
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};
