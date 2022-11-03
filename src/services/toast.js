import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastSuccess = name =>
  toast.success(`"${name}" is added to contacts`);

export const toastWarn = name => toast.warn(`"${name}" is already in contacts`);

export const toastInfo = name => toast.info(`"${name}" deleted`);
