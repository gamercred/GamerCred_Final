import { SVGProps } from 'react';

type IconName =
  | 'gamercred-logo'
  | 'home' | 'compass' | 'users' | 'sword' | 'gamepad'
  | 'trophy' | 'bell' | 'mail' | 'bookmark' | 'user' | 'settings' | 'more'
  | 'image' | 'controller' | 'medal' | 'poll'
  | 'heart' | 'comment' | 'share' | 'bookmark-fill'
  | 'arrow-right' | 'chevron-right' | 'check' | 'x'
  | 'community' | 'game' | 'globe' | 'tv'
  | 'steam' | 'google' | 'discord' | 'xbox' | 'playstation';

interface Props extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 18, className, ...rest }: Props) {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
    ...rest,
  };

  switch (name) {
    case 'gamercred-logo':
      // Hexagon frame + chunky G inside
      return (
        <svg {...props} viewBox="0 0 32 32" fill="none" stroke="currentColor">
          <path d="M16 2 L29 9 L29 23 L16 30 L3 23 L3 9 Z" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M21 11 C20 10 18 9 16 9 C12.5 9 10 11.5 10 16 C10 20.5 12.5 23 16 23 C18 23 20 22 21 21 L21 16 L16 16" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'home':
      return <svg {...props}><path d="M3 9.5L12 2l9 7.5V20a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z" /></svg>;
    case 'compass':
      return <svg {...props}><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>;
    case 'users':
    case 'community':
      return <svg {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
    case 'sword':
      return <svg {...props}><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" y1="19" x2="19" y2="13"/><line x1="16" y1="16" x2="20" y2="20"/><line x1="19" y1="21" x2="21" y2="19"/></svg>;
    case 'gamepad':
    case 'controller':
    case 'game':
      return <svg {...props}><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><rect x="2" y="6" width="20" height="12" rx="2"/></svg>;
    case 'trophy':
    case 'medal':
      return <svg {...props}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>;
    case 'bell':
      return <svg {...props}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>;
    case 'mail':
      return <svg {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
    case 'bookmark':
      return <svg {...props}><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>;
    case 'bookmark-fill':
      return <svg {...props} fill="currentColor"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>;
    case 'user':
      return <svg {...props}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
    case 'settings':
      return <svg {...props}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
    case 'more':
      return <svg {...props}><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>;
    case 'image':
      return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>;
    case 'poll':
      return <svg {...props}><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>;
    case 'heart':
      return <svg {...props}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
    case 'comment':
      return <svg {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
    case 'share':
      return <svg {...props}><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>;
    case 'arrow-right':
      return <svg {...props}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
    case 'chevron-right':
      return <svg {...props}><polyline points="9 18 15 12 9 6"/></svg>;
    case 'check':
      return <svg {...props}><polyline points="20 6 9 17 4 12"/></svg>;
    case 'x':
      return <svg {...props}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
    case 'globe':
      return <svg {...props}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
    case 'tv':
      return <svg {...props}><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>;
    case 'steam':
      return <svg {...props} viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 0C5.5 0 .2 4.9 0 11l6.4 2.7c.5-.4 1.2-.6 2-.6h.2l2.9-4.2v-.1c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.6l-4.1 2.9v.2c0 1.5-1.2 2.8-2.7 2.8-1.3 0-2.4-.9-2.7-2.1L1.5 16C2.8 20.6 7 24 12 24c6.6 0 12-5.4 12-12S18.6 0 12 0zM7.5 18.2c-.6.2-1.3.2-1.9 0L4 17.6c.5.7 1.3 1.2 2.2 1.4 1.7.4 3.4-.7 3.8-2.4l-.5-.3c-.4 1-1.2 1.7-2 1.9zm9-7.1c0-1.7-1.3-3-3-3s-3 1.4-3 3 1.3 3 3 3 3-1.4 3-3z"/></svg>;
    case 'google':
      return <svg {...props} viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"/></svg>;
    case 'discord':
      return <svg {...props} viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515.07.07 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.6 12.6 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.7 19.7 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>;
    case 'xbox':
      return <svg {...props} viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M4.102 21.033A11.949 11.949 0 0 0 12 24c2.961 0 5.687-1.07 7.787-2.847.476-.4.43-.62-.123-1.262C16.91 17.143 12.27 11.4 12 11c-.27.4-4.91 6.143-7.664 8.891-.553.642-.6.862-.234 1.142zm9.488-15.215c.49-.49 4.305-1.59 6.395-1.875 1.13-.15 1.55.45 1.55.45 1.55 2.04 2.465 4.594 2.465 7.347 0 2.165-.566 4.197-1.555 5.961 0 0-.084.13-.207.16-.123.029-.232-.054-.232-.054-1.96-1.74-7.51-8.04-8.42-9.295-1.245-1.713-.515-2.205.004-2.694zm-3.183 0c.52.49 1.249.98.004 2.694C9.5 9.766 3.95 16.066 1.99 17.806c0 0-.108.083-.231.054-.123-.03-.207-.16-.207-.16-.99-1.764-1.555-3.796-1.555-5.961 0-2.753.915-5.306 2.466-7.347 0 0 .42-.6 1.55-.45 2.09.285 5.904 1.386 6.394 1.876zm1.582-2.27c-1.31 0-2.61.21-3.83.6 0 0-.21.07-.45-.06 0 0-.31-.13.16-.5 2.06-1.62 4.41-2.16 4.12-2.16-.29 0 2.06.54 4.12 2.16.47.37.16.5.16.5-.24.13-.45.06-.45.06a12.34 12.34 0 0 0-3.83-.6z"/></svg>;
    case 'playstation':
      return <svg {...props} viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M9.5 6.5v9.36c0 .58.21 1.15.58 1.61.45.51 1.05.74 1.71.74.27 0 .54-.04.81-.12.74-.22 1.27-.79 1.5-1.62.06-.21.08-.43.08-.65V8.5a.5.5 0 0 0-.34-.47L9.84 6.16a.25.25 0 0 0-.34.23zM5.5 18.16c0 .27.21.49.48.5.06 0 .12-.01.18-.03l2.62-.94v-2.16l-2.62.95c-.39.14-.66.51-.66.92v.76zm14.18 1.2c.5-.15.82-.6.82-1.13v-1.55c0-.42-.27-.79-.66-.93l-7.13-2.57v2.16l5.46 1.97c.06.02.13.03.19.03.27 0 .49-.22.49-.49v-.71l1.85.67-.02 2.55z"/></svg>;
    default:
      return null;
  }
}
