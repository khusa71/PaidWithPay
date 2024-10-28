import { useNotifications } from '@/contexts/NotificationContext';

export const useNotificationCenter = () => {
  const { addNotification } = useNotifications();

  const notify = {
    success: (title, message) => {
      addNotification({
        type: 'success',
        title,
        message,
      });
    },
    warning: (title, message) => {
      addNotification({
        type: 'warning',
        title,
        message,
      });
    },
    error: (title, message) => {
      addNotification({
        type: 'error',
        title,
        message,
      });
    },
    info: (title, message) => {
      addNotification({
        type: 'info',
        title,
        message,
      });
    },
    transactionUpdate: (transaction) => {
      addNotification({
        type: 'info',
        title: `Transaction Update: ${transaction.id}`,
        message: `Status changed to: ${transaction.status}`,
        data: transaction,
      });
    },
    escrowRelease: (transaction) => {
      addNotification({
        type: 'success',
        title: 'Payment Released',
        message: `Payment of ${transaction.amount} has been released to ${transaction.recipient}`,
        data: transaction,
      });
    },
    disputeAlert: (dispute) => {
      addNotification({
        type: 'warning',
        title: 'Dispute Raised',
        message: `A dispute has been raised for transaction ${dispute.transactionId}`,
        data: dispute,
      });
    },
  };

  return notify;
};