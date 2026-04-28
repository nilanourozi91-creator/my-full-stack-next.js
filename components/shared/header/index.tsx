import { APP_NAME } from "@/constants";

import Image from "next/image";
import Link from "next/link";
import ToggleTheme from "./toggle-mode";
import { Button } from "@/components/ui/button";
import { ShoppingCart, UserIcon } from "lucide-react";
import Menu from "./menu";

function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image className=" rounded-full"
              src="/images/logo.png"
              alt={`${APP_NAME} logo`}
              height={49}
              width={49}
              priority={true}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <Menu />
      
      </div>
    </header>
  );
}

export default Header;
