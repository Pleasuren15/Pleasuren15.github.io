import React from 'react';

type Props = {
  src?: string;
  sizeClass?: string;
};

const AnimatedBorderAvatar: React.FC<Props> = ({
  src = 'https://via.placeholder.com/400',
  sizeClass = 'w-[28rem] h-[28rem]',
}) => {
  return (
    <div className={`relative ${sizeClass}`}>
      <style>{`
        @keyframes avatarFloat {
          0% { transform: translateY(0) scale(1) rotate(0deg); }
          50% { transform: translateY(-8px) scale(1.02) rotate(-1deg); }
          100% { transform: translateY(0) scale(1) rotate(0deg); }
        }
      `}</style>

      <div className="w-full h-full rounded-full overflow-hidden">
        <img
          src={src}
          alt="Avatar"
          className="w-full h-full object-cover"
          style={{ animation: 'avatarFloat 6s ease-in-out infinite', willChange: 'transform' }}
        />
      </div>

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          fill="none"
          stroke="url(#grad)"
          strokeWidth="2.6"
          strokeLinejoin="round"
          filter="url(#glow)"
          opacity="0.98"
          transform="translate(0,0) scale(1.06 1.06)"
        >
          <animate
            attributeName="d"
            dur="12s"
            repeatCount="indefinite"
            values="
              M100,6 C140,4 188,18 176,56 C164,94 146,128 116,148 C86,168 62,162 42,140 C22,118 12,88 26,58 C40,28 68,10 100,6 Z;
              M100,2 C156,12 188,40 170,76 C152,112 132,140 106,156 C80,172 56,160 36,136 C16,112 18,82 36,52 C54,22 78,8 100,2 Z;
              M100,10 C150,0 190,28 174,68 C158,108 138,136 110,154 C82,172 60,158 38,136 C16,114 12,84 30,50 C48,16 72,20 100,10 Z;
              M100,6 C140,4 188,18 176,56 C164,94 146,128 116,148 C86,168 62,162 42,140 C22,118 12,88 26,58 C40,28 68,10 100,6 Z
            "
            keyTimes="0;0.33;0.66;1"
            calcMode="spline"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
          />
        </path>

        <path
          fill="none"
          stroke="url(#grad)"
          strokeWidth="1.6"
          strokeLinejoin="round"
          filter="url(#glow)"
          opacity="0.7"
          transform="translate(0,0) scale(1.09 1.09)"
        >
          <animate
            attributeName="d"
            dur="8.5s"
            repeatCount="indefinite"
            values="
              M100,0 C132,8 164,28 178,60 C192,92 170,122 140,140 C110,158 80,154 54,140 C28,126 12,96 22,64 C32,32 64,12 100,0 Z;
              M100,6 C136,14 170,36 176,70 C182,104 152,132 122,148 C92,164 64,152 40,132 C16,112 8,86 26,56 C44,26 70,6 100,6 Z;
              M100,4 C140,18 176,34 174,70 C172,106 148,134 118,150 C88,166 60,152 38,130 C16,108 8,82 28,54 C48,26 74,6 100,4 Z;
              M100,0 C132,8 164,28 178,60 C192,92 170,122 140,140 C110,158 80,154 54,140 C28,126 12,96 22,64 C32,32 64,12 100,0 Z
            "
            keyTimes="0;0.33;0.66;1"
            calcMode="spline"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
          />
        </path>
      </svg>
    </div>
  );
};

export default AnimatedBorderAvatar;
