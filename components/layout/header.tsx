"use client";
import { Search } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { LoginModal } from "../login-modal";
import { Logo } from "../icons";

export function Header() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <header className="border-b">
      <div className="flex items-center h-20 px-4 max-w-screen-2xl mx-auto text-primary">
        <Link href="/" className="flex items-center">
          {/* <Image src="/airbnb-logo.svg" alt="Airbnb" width={102} height={32} /> */}
          <Logo />
        </Link>

        <div className="hidden md:flex items-center mx-auto">
          <div className="flex items-center border rounded-full p-1 shadow-sm hover:shadow-md transition-shadow">
            <button className="px-4 py-2 font-medium text-sm">Anywhere</button>
            <div className="border-l h-6" />
            <button className="px-4 py-2 font-medium text-sm">Any week</button>
            <div className="border-l h-6" />
            <button className="px-4 py-2 text-gray-500 text-sm">
              Add guests
            </button>
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full bg-primary hover:bg-primary hover:text-primary"
            >
              <Search className="h-4 w-4 text-white " />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden md:flex">
            NginepAja your home
          </Button>
          <div className="hidden">
            <LoginModal isOpen={isModalOpen} onClose={closeModal} />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <span className="sr-only">Menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={openModal}>Sign up</DropdownMenuItem>
              <DropdownMenuItem onClick={openModal}>Login</DropdownMenuItem>
              <DropdownMenuItem>NginepAja your home</DropdownMenuItem>
              <DropdownMenuItem>Help Center</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
