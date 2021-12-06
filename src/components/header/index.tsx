import React from 'react';

import dynamic from 'next/dynamic';

import { useWindowSize } from '../../hooks';

const NavDesktop = dynamic(() => import('./nav-desktop'));
const NavMobile = dynamic(() => import('./nav-mobile'));

export default function Header() {
  const { isMobile } = useWindowSize();
  return <div>{isMobile ? <NavMobile /> : <NavDesktop />}</div>;
}
