import Link from "next/link";
import { GridContainer } from "../ui/grid-container";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";

interface HeaderContentProps {
  navData: NavigationData[];
}

export interface NavigationData {
  linkTitle: string;
  linkUrl: string;
}

const HeaderContent: React.FC<HeaderContentProps> = ({ navData }) => {
  return (
    <header className="py-6">
      <GridContainer className="flex items-center gap-20 w-full px-4 lg:px-0">
        <div>
          <span className="text-indigo-700 text-2xl font-semibold">ecsedev/</span>
        </div>

        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="gap-10">
            {navData.map((item) => (
              <NavigationMenuItem key={item.linkTitle} className="text-sm font-bold text-white">
                <Link href={item.linkUrl}>{item.linkTitle}</Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex w-full justify-end">
          <Button className="bg-indigo-700 font-semibold tracking-wide hover:bg-white hover:text-indigo-700">Entre em contato!</Button>
        </div>

        <div className="w-full flex justify-end lg:hidden">
            <MenuIcon color="white" />
        </div>
      </GridContainer>
    </header>
  );
};

export default HeaderContent;
