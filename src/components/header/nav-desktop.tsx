import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiLogoutBoxRFill, RiShoppingCartLine } from 'react-icons/ri';
import { VscHome, VscPreview, VscGift } from 'react-icons/vsc';
import { useMoralis } from 'react-moralis';
import { Tabs, Tab, Button } from 'ui-neumorphism';

import { routes } from '../../router/index';

function Nav() {
  const [activeTab, setActiveTab] = useState(0);
  const [address, setAddress] = useState('');
  const router = useRouter();
  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  function getTabIndex() {
    switch (router.pathname) {
      case routes.HOME.path:
        return 0;
      case routes.BLOG.path:
        return 1;
      case routes.PROMOTION.path:
        return 2;
      case routes.CART.path:
        return 3;
      case routes.USER.path:
        return 4;
      default:
        return 0;
    }
  }
  useEffect(() => {
    setActiveTab(getTabIndex());
  }, []);
  useEffect(() => {
    const fullAddress = user?.get('ethAddress') || '';
    if (!fullAddress) return;
    const shortAddress = `${fullAddress.substring(0, 4)}...${fullAddress.substr(
      fullAddress.length - 4
    )}`;

    setAddress(shortAddress);
  }, [address, user]);
  const go = (path: string) => {
    router.push(path);
  };

  return (
    <div className="p-4 flex justify-between">
      <Link href={routes.HOME.path}>
        <a
          className="flex items-baseline cursor-pointer no-underline"
          title={routes.HOME.name}
        >
          <h1 className="text-2xl font-black no-underline">PLBN</h1>
          <h2 className=" ml-2 font-mono -leading-1 text-sm font-extralight text-gray-600">
            Phân lô bán nền
          </h2>
        </a>
      </Link>
      <div className="flex">
        <Tabs value={activeTab}>
          <Tab className="transform-none" onClick={() => go(routes.HOME.path)}>
            <div className="normal-case flex items-center">
              <VscHome className="mr-1" />
              Home
            </div>
          </Tab>
          <Tab onClick={() => go(routes.BLOG.path)}>
            <div className="normal-case flex items-center">
              <VscPreview className="mr-1" />
              Blog
            </div>
          </Tab>
          <Tab onClick={() => go(routes.PROMOTION.path)}>
            <div className="normal-case flex items-center">
              <VscGift className="mr-1" />
              Khuyến mãi
            </div>
          </Tab>
          <Tab onClick={() => go(routes.CART.path)}>
            <div className="normal-case flex items-center">
              <RiShoppingCartLine className="mr-1" />
              Giỏ hàng
            </div>
          </Tab>
        </Tabs>
        {isAuthenticated ? (
          <div>
            <Button className="ml-2" outlined onClick={() => logout()}>
              <span className="normal-case mr-1">{address}</span>
              <RiLogoutBoxRFill size="20" />
            </Button>
          </div>
        ) : (
          <Button
            className="ml-2"
            onClick={() => {
              authenticate({ provider: 'metamask' });
            }}
          >
            <img src="/icons/metamask.webp" height="20" width="20" />
            <div className="normal-case ml-1 truncate">
              Đăng nhập với MetaMask
            </div>
          </Button>
        )}
      </div>
    </div>
  );
}

export default Nav;
