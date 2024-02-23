import { ReactNode } from 'react';

export interface DialogProps {
  onClose: () => void;
  children: ReactNode;
}
