/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // === LEGACY arcade tokens (retained for Versus and existing pages) ===
        bg: 'hsl(220 30% 5%)',
        bg2: 'hsl(220 30% 8%)',
        panel: 'hsl(220 30% 10%)',
        neonCyan: 'hsl(180 100% 50%)',
        neonMagenta: 'hsl(320 100% 50%)',
        neonPurple: 'hsl(270 100% 60%)',
        neonYellow: 'hsl(55 100% 60%)',
        neonGreen: 'hsl(140 100% 55%)',

        // === Cyberpunk command-centre palette ===
        cyberMagenta: '#E91E63',
        cyberMagentaGlow: '#FF4D8D',
        cyberPink: '#FF1F8F',
        cyberPurple: '#A020F0',
        credGreen: '#10F0A0',
        credGreenGlow: '#5BFFC5',
        cyberRed: '#FF2D55',  // BREAKING pills
        scanline: 'rgba(0, 255, 255, 0.04)',

        // === NEW: social MVP dark/purple theme ===
        surface: {
          DEFAULT: '#0A0A0F',
          elevated: '#13131A',
          overlay: '#1A1A24',
          inset: '#070709',
        },
        line: {
          DEFAULT: '#1F1F2A',
          strong: '#2A2A38',
        },
        fg: {
          DEFAULT: '#FAFAFA',
          muted: '#9CA3AF',
          dim: '#6B7280',
          inverse: '#0A0A0F',
        },
        brand: {
          DEFAULT: '#7C3AED',
          hover: '#8B4FF0',
          pressed: '#6B2FD6',
          glow: '#A78BFA',
          soft: '#7C3AED1A',
        },
        like: '#EC4899',
        info: '#3B82F6',
        ok: '#10B981',
        warn: '#F59E0B',
        danger: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        arcade: ['"VT323"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        card: '16px',
        button: '8px',
        input: '12px',
        pill: '9999px',
      },
      boxShadow: {
        glow: '0 0 24px -4px rgba(124, 58, 237, 0.5)',
        'glow-sm': '0 0 12px -2px rgba(124, 58, 237, 0.4)',
        card: '0 1px 3px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.6' },
        },
        scanmove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100vh' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        glowpulse: {
          '0%, 100%': { textShadow: '0 0 8px hsl(180 100% 50% / 0.6), 0 0 18px hsl(180 100% 50% / 0.4)' },
          '50%': { textShadow: '0 0 14px hsl(180 100% 50% / 0.9), 0 0 28px hsl(180 100% 50% / 0.6)' },
        },
        battleShake: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-6px, 3px)' },
          '20%': { transform: 'translate(5px, -4px)' },
          '30%': { transform: 'translate(-4px, 2px)' },
          '40%': { transform: 'translate(3px, -3px)' },
          '50%': { transform: 'translate(-2px, 1px)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        flicker: 'flicker 4s linear infinite',
        scanmove: 'scanmove 8s linear infinite',
        marquee: 'marquee 30s linear infinite',
        blink: 'blink 1s steps(1) infinite',
        glowpulse: 'glowpulse 2.5s ease-in-out infinite',
        battleShake: 'battleShake 0.35s ease-out',
        'fade-in': 'fade-in 0.2s ease-out',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
