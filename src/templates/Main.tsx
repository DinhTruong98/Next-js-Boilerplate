import React, { ReactNode } from 'react';

import Nav from '../components/header/index';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="text-gray-700 px-1 relative">
    {props.meta}

    <div className="max-w-screen-xl mx-auto">
      <div className=" sticky top-0 bg-white shadow-md rounded-bl-xl rounded-br-xl">
        <Nav />
      </div>
      <div className="h-500px py-5 text-xl content">{props.children}</div>
    </div>
  </div>
);

export { Main };
