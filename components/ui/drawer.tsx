'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  side?: 'left' | 'right' | 'top' | 'bottom';
  className?: string;
}

export function Drawer({ open, onClose, children, side = 'left', className }: DrawerProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  const sideClasses = {
    left: 'left-0 top-0 h-full',
    right: 'right-0 top-0 h-full',
    top: 'top-0 left-0 right-0',
    bottom: 'bottom-0 left-0 right-0',
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={cn(
          'fixed z-50 bg-slate-900 border-r border-slate-800 shadow-xl transition-transform duration-300',
          sideClasses[side],
          side === 'left' && 'w-64 sm:w-80',
          side === 'right' && 'w-64 sm:w-80',
          side === 'top' && 'h-64',
          side === 'bottom' && 'h-64',
          className
        )}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </>
  );
}

interface DrawerContentProps {
  children: React.ReactNode;
  className?: string;
}

export function DrawerContent({ children, className }: DrawerContentProps) {
  return (
    <div className={cn('h-full flex flex-col', className)}>
      {children}
    </div>
  );
}

interface DrawerHeaderProps {
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

export function DrawerHeader({ children, onClose, className }: DrawerHeaderProps) {
  return (
    <div className={cn('flex items-center justify-between p-4 border-b border-slate-800', className)}>
      {children}
      {onClose && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="text-slate-400 hover:text-white"
        >
          <X className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}

interface DrawerBodyProps {
  children: React.ReactNode;
  className?: string;
}

export function DrawerBody({ children, className }: DrawerBodyProps) {
  return (
    <div className={cn('flex-1 overflow-y-auto', className)}>
      {children}
    </div>
  );
}

