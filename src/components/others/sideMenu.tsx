import React from 'react';

import { Drawer } from '@mui/material';

type ISideMenuProps = {
  open: boolean;
};
export default function sideMenu(props: ISideMenuProps) {
  return <Drawer open={props.open}>sdasdaas</Drawer>;
}
