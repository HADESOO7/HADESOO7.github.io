import React from "react";
import Link from "next/link";
import RandomQuote from "./random-quote";
import { Button } from "../ui/button";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full shrink-0 border-t border-border px-4 py-6 md:px-6">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        {/* Left Side: Copyright */}
        <div className="flex-1 flex justify-start w-full sm:w-auto text-center sm:text-left">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {year} {config.author}. All rights reserved.
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex-1 flex justify-center w-full sm:w-auto">
          <SocialMediaButtons />
        </div>

        {/* Right Side: Random Quote */}
        <div className="flex-1 flex justify-end w-full sm:w-auto">
          <RandomQuote />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
