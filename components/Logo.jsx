import React from 'react';
import Image from 'next/image';

export default function Logo({ className = "", variant = "default" }) {
    const isWhite = variant === 'white';
    const mainColor = isWhite ? "#FFFFFF" : "#000000";
    const accentColor = isWhite ? "#FFFFFF" : "#FF6B00";

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* Hexagon Icon */}
            <div className="relative flex-shrink-0">
                <svg
                    width="48"
                    height="48"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Circuit Lines - Top Right */}
                    <path d="M72 32L88 16M78 38L94 22M64 28L80 12" stroke={mainColor} strokeWidth="3" strokeLinecap="round" />
                    <circle cx="88" cy="16" r="2.5" fill={mainColor} />
                    <circle cx="94" cy="22" r="2.5" fill={mainColor} />
                    <circle cx="80" cy="12" r="2.5" fill={mainColor} />

                    {/* Hexagon Outline */}
                    <path
                        d="M50 15L80 32.5V67.5L50 85L20 67.5V32.5L50 15Z"
                        stroke={mainColor}
                        strokeWidth="5"
                        strokeLinejoin="round"
                    />

                    {/* The "I" */}
                    <rect x="44" y="32" width="12" height="36" rx="1" fill={accentColor} />
                </svg>
            </div>

            {/* Text part */}
            <div className="flex flex-col">
                <span className={`text-2xl font-black tracking-tight leading-none ${isWhite ? 'text-white' : 'text-black'}`}>
                    INFNOVA
                </span>
                <span className={`text-[10px] font-bold tracking-[0.25em] uppercase italic -mt-0.5 ${isWhite ? 'text-white/80' : 'text-[#FF6B00]'}`}>
                    Technologies
                </span>
            </div>
        </div>
    );
}
