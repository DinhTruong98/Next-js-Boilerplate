import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiShoppingCartLine } from 'react-icons/ri';
import { VscHome, VscPreview, VscGift } from 'react-icons/vsc';
import { Tabs, Tab, Button } from 'ui-neumorphism';

import { routes } from '../../router/index';

function Nav() {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
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

  return (
    <div className="py-2 flex justify-between">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="flex">
        <Tabs value={activeTab} className="h-100">
          <Tab className="transform-none">
            <Link href={routes.HOME.path}>
              <div className="normal-case flex items-center">
                <VscHome className="mr-1" />
                Home
              </div>
            </Link>
          </Tab>
          <Tab>
            <Link href={routes.BLOG.path}>
              <div className="normal-case flex items-center">
                <VscPreview className="mr-1" />
                Blog
              </div>
            </Link>
          </Tab>
          <Tab className="normal-case">
            <Link href={routes.PROMOTION.path}>
              <div className="normal-case flex items-center">
                <VscGift className="mr-1" />
                Khuyến mãi
              </div>
            </Link>
          </Tab>
          <Tab>
            <Link href={routes.CART.path}>
              <div className="normal-case flex items-center">
                <RiShoppingCartLine className="mr-1" />
                Giỏ hàng
              </div>
            </Link>
          </Tab>
        </Tabs>
        <Button className="" outlined>
          <div className="normal-case">Đăng nhập</div>
        </Button>
      </div>
    </div>
  );
}

export default Nav;
