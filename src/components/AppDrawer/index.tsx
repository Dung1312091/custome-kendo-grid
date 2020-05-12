import React, { Props } from "react";
import { Drawer, DrawerContent } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
const items: Array<any> = [
  { text: "Home", selected: true, route: "/" },
  { text: "Products", route: "/products" },
  { text: "About", route: "/about" }
];
export interface DrawerProps {
  children?: React.ReactElement;
}
const AppDrawer: React.FC<DrawerProps> = ({ children }) => {
  return (
    <div>
      <div className="custom-toolbar">
        <Button icon="menu" look="flat" />
        <span className="title">Navigational drawer</span>
      </div>
      <Drawer
        expanded={true}
        items={items.map(item => ({
          ...item,
          selected: false
        }))}
        position="start"
        mode="push"
        width={120}
      >
        <DrawerContent>{children}</DrawerContent>
      </Drawer>
    </div>
  );
};
export default AppDrawer;
