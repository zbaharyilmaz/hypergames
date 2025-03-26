import { toast } from "react-toastify";

export const toastSuccess = (msg) => {
  toast.success(msg, {
    autoClose: 3000,
    position: "top-center",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export const toastWarn = (msg) => {
  toast.warn(msg, {
    autoClose: 3000,
    position: "top-center",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
export const toastError = (msg) => {
  toast.error(msg, {
    autoClose: 3000,
    position: "top-center",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
