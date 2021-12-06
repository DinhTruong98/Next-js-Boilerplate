import { ReactNode } from 'react';

import Nav from '../components/header/index';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 px-1">
    {props.meta}

    <div className="max-w-screen-md mx-auto">
      <Nav />
      <div className="py-5 text-xl content">{props.children}</div>
    </div>
  </div>
);

export { Main };
