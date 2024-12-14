'use client';

import { useScrollManager } from '../hooks/useScrollManager';

export default function ScrollHandler() {
  useScrollManager();
  return null; // This component doesn't render anything
}
