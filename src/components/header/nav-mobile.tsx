import React, { useEffect, useState } from 'react';

import { Drawer } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiLogoutBoxRFill, RiShoppingCartLine } from 'react-icons/ri';
import { VscGift, VscHome, VscMenu, VscPreview } from 'react-icons/vsc';
import { useMoralis } from 'react-moralis';
import { animated, useSpring } from 'react-spring';
import { Button, IconButton } from 'ui-neumorphism';

import { routes } from '../../router/index';

function NavMobile() {
  const [address, setAddress] = useState('');
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const [isNeedAnimate, setIsNeedAnimate] = useState(false);
  const router = useRouter();
  const { authenticate, isAuthenticated, user, logout, isAuthenticating } =
    useMoralis();
  const [isBtnExpaned, setIsBtnExpanded] = useState(!isAuthenticated);

  const props = useSpring({
    to: {
      width: isBtnExpaned ? '200px' : '130px',
      color: isBtnExpaned ? 'unset' : 'unset',
    },
    from: {
      width: isBtnExpaned ? '130px' : '200px',
      color: isBtnExpaned ? 'white' : 'white',
    },
  });

  // const props = useSpring({
  //   to: { opacity: 1, minWidth: isAuthenticated && 'auto' },
  //   from: { opacity: 0, minWidth: isAuthenticated && '200px' },
  //   delay: 200,
  // });

  useEffect(() => {
    const fullAddress = user?.get('ethAddress') || '';
    if (!fullAddress) {
      setIsBtnExpanded(true);
      return;
    }
    const shortAddress = `${fullAddress.substring(0, 4)}...${fullAddress.substr(
      fullAddress.length - 4
    )}`;

    setAddress(shortAddress);
    setIsBtnExpanded(false);
  }, [address, user]);

  const go = (path: string) => {
    setIsOpenMenu(false);
    router.push(path);
  };

  return (
    <div className="p-4 flex justify-between overflow-hidden">
      <Link href={routes.HOME.path}>
        <a className={`cursor-pointer no-underline`} title={routes.HOME.name}>
          <h1 className="text-2xl font-black no-underline">PLBN</h1>
          {/* <h2 className="font-mono -leading-1 text-sm font-extralight text-gray-600">
            Phân lô bán nền
          </h2> */}
        </a>
      </Link>
      <div className="flex">
        <animated.div
          className="mr-4"
          style={
            isNeedAnimate
              ? props
              : { width: !isAuthenticated ? '200px' : '130px' }
          }
        >
          {isAuthenticated ? (
            <Button
              outlined
              onClick={async () => {
                setIsNeedAnimate(true);
                logout();
              }}
            >
              <animated.span className="normal-case mr-1">
                {address}
              </animated.span>
              <RiLogoutBoxRFill size="20" />
            </Button>
          ) : (
            <Button
              outlined
              disabled={isAuthenticating}
              onClick={async () => {
                setIsNeedAnimate(true);
                await authenticate();
              }}
            >
              <img src="/icons/metamask.webp" height="20" width="20" />
              <animated.div className="normal-case ml-1 truncate">
                Đăng nhập với MetaMask
              </animated.div>
            </Button>
          )}
        </animated.div>
        <IconButton rounded text={false} onClick={() => setIsOpenMenu(true)}>
          <VscMenu />
        </IconButton>
        <div className="max-w-3/4">
          <Drawer
            anchor="right"
            open={isOpenMenu}
            onClose={() => setIsOpenMenu(false)}
          >
            <div className="flex flex-col p-4 w-64">
              <Button
                className="transform-none mt-2"
                onClick={() => go(routes.HOME.path)}
              >
                <div className="normal-case flex items-center">
                  <VscHome className="mr-1" />
                  Home
                </div>
              </Button>
              <Button onClick={() => go(routes.BLOG.path)} className="mt-2">
                <div className="normal-case flex items-center">
                  <VscPreview className="mr-1" />
                  Blog
                </div>
              </Button>
              <Button
                onClick={() => go(routes.PROMOTION.path)}
                className="mt-2"
              >
                <div className="normal-case flex items-center">
                  <VscGift className="mr-1" />
                  Khuyến mãi
                </div>
              </Button>
              <Button onClick={() => go(routes.CART.path)} className="mt-2">
                <div className="normal-case flex items-center">
                  <RiShoppingCartLine className="mr-1" />
                  Giỏ hàng
                </div>
              </Button>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default NavMobile;
