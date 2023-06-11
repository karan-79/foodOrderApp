import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import React, { FC, Fragment } from "react";
import { useSelector } from "react-redux";
type Props = {
  openOrders: (id: string) => void;
};
const UserMenu: FC<Props> = ({ openOrders }) => {
  const { name, userId } = useSelector((state: any) => state.user);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleOrders = () => {
    handleClose();
    openOrders(userId);
  };
  return (
    <Fragment>
      <IconButton onClick={handleMenu}>
        <Avatar sx={{ width: 30, height: 30 }}>
          {name
            .split(" ")
            .reduce((a: string, c: string) => a + c.charAt(0), "")
            .toUpperCase()}
        </Avatar>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleOrders}>My Orders</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Fragment>
  );
};

export default UserMenu;
