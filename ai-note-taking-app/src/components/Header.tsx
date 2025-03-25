import { shadow } from "@/styles/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./DarkModeToogle";
import LogoutButton from "./LogoutButton";

const Header = () => {

    const user = "no";

  return (
    <header
      className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8"
      style={{
        boxShadow: shadow,
      }}
    >
      <Link href={"/"} className="flex items-end gap-2">
        <Image
          src={"/goatius.png"}
          height={60}
          width={60}
          alt="logo"
          className="rounded-full"
          priority
        />
        <h1 className="flex flex-col text-2xl pb-1 font-semibold leading-6">
          Goat <span>Notes</span>
        </h1>
          </Link>
          
          {/* login, dark mode */}

          <div className="flex gap-x-4">
              {user ?
                  (
                      <LogoutButton />
                  ) : (
                      <>
                          {/* login */}
                          {/* asChild - does it applies all styling from button to the Link Element, it does not add html as button -> anchor tag.
                          
                          It only adds anchor tag, and it feels like a button, but we donot need both, we need only anchor tag*/}
                          <Button asChild className="hidden sm:block">
                              <Link href={'/sign-up'}>Sign Up</Link>
                          </Button>
                          <Button asChild variant={"outline"}>
                              <Link href={'/sign-in'}>Login</Link>
                          </Button>
                          

                          {/* signup */}
                      </>
                  )}
              <ModeToggle />
          </div>
    </header>
  );
};

export default Header;
