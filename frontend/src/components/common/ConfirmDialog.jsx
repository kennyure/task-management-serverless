import { FaExclamationTriangle, FaTimes } from 'react-icons/fa';
import Button from './Button';

/**
 * Confirmation Dialog Component
 */
const ConfirmDialog = ({ isOpen, onClose, onConfirm, title, message, type = 'danger' }) => {
  if (!isOpen) return null;

  const typeStyles = {
    danger: {
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      gradient: 'from-red-600 to-rose-600',
    },
    warning: {
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      gradient: 'from-yellow-600 to-orange-600',
    },
    info: {
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      gradient: 'from-blue-600 to-indigo-600',
    },
  };

  const style = typeStyles[type] || typeStyles.danger;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full transform transition-all animate-slideIn overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition-all z-10"
          aria-label="Close dialog"
        >
          <FaTimes size={20} />
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Icon */}
          <div className={`inline-flex items-center justify-center w-16 h-16 ${style.iconBg} rounded-full mb-6`}>
            <FaExclamationTriangle className={`text-3xl ${style.iconColor}`} />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {title}
          </h3>

          {/* Message */}
          <p className="text-gray-600 mb-8 leading-relaxed">
            {message}
          </p>

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              variant="secondary"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className="flex-1"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
