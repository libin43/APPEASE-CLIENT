import toast from 'react-hot-toast';

const toastOptions = {
    duration: 3000, // Duration for which the toast is shown (in milliseconds)
    // hideProgressBar: false,
    // closeOnClick: true,
    // pauseOnHover: true,
    // draggable: true,
  };

export const showToast = (message: string, type = 'success') => {
    toast.dismiss()
    switch (type) {
      case 'success':
        toast.success(message, toastOptions);
        break;
      case 'error':
        toast.error(message, toastOptions);
        break;
      default:
        break;
    }
  };