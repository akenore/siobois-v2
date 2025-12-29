"use client";

import Image from "next/image";
import { useEffect, useCallback } from "react";

interface LightboxProps {
     src: string;
     alt: string;
     onClose: () => void;
}

/**
 * Simple Lightbox component for displaying fullscreen images.
 * - Click outside or press X to close
 * - Press Escape key to close
 * - Smooth fade animation
 */
export default function Lightbox({ src, alt, onClose }: LightboxProps) {
     // Handle escape key
     const handleKeyDown = useCallback(
          (e: KeyboardEvent) => {
               if (e.key === "Escape") {
                    onClose();
               }
          },
          [onClose]
     );

     useEffect(() => {
          document.addEventListener("keydown", handleKeyDown);
          // Prevent body scroll when lightbox is open
          document.body.style.overflow = "hidden";

          return () => {
               document.removeEventListener("keydown", handleKeyDown);
               document.body.style.overflow = "";
          };
     }, [handleKeyDown]);

     return (
          <div
               className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
               onClick={onClose}
          >
               {/* Close button */}
               <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
                    aria-label="Fermer"
               >
                    <i className="fa fa-times text-2xl"></i>
               </button>

               {/* Image container */}
               <div
                    className="relative max-w-[90vw] max-h-[90vh] w-full h-full"
                    onClick={(e) => e.stopPropagation()}
               >
                    <Image
                         src={src}
                         alt={alt}
                         fill
                         sizes="90vw"
                         className="object-contain"
                         priority
                    />
               </div>
          </div>
     );
}
