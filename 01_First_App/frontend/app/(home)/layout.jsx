import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import Link from "next/link";

const RootLayout = async ({ children }) => {
  return (
    <div className="">
      <nav className="flex justify-between mt-4">
        <h2 className="text-primary-100 pl-4 text-3xl capitalize"> attento</h2>
        <Button>
          {" "}
          <Link
            href={"/addUser"}
          >
            Add New User
          </Link>
        </Button>
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;
