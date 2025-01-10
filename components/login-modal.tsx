"use client";

import { Apple, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

import { FacebookIcon, GoogleIcon } from "./icons";

export function LoginModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTrigger asChild>
        <Button variant="ghost">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Log in or sign up</DialogTitle>
        </DialogHeader>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Welcome to NginepAja
          </h2>
          <form className="mt-4">
            <div className="space-y-4">
              <Select defaultValue="id">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="id">Indonesia (+62)</SelectItem>
                  <SelectItem value="us">United States (+1)</SelectItem>
                  <SelectItem value="uk">United Kingdom (+44)</SelectItem>
                  <SelectItem value="sg">Singapore (+65)</SelectItem>
                </SelectContent>
              </Select>
              <Input type="tel" placeholder="Phone number" className="w-full" />
              <p className="text-xs text-muted-foreground">
                {`We'll call or text you to confirm your number. Standard message
                and data rates apply.`}{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
              </p>
              <Button
                type="submit"
                className="w-full bg-[#FF385C] hover:bg-[#FF385C]/90"
              >
                Continue
              </Button>
            </div>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                or
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <Button variant="outline" className="w-full" onClick={() => {}}>
              <GoogleIcon className="mr-2 h-5 w-5" />
              Continue with Google
            </Button>
            <Button variant="outline" className="w-full" onClick={() => {}}>
              <Apple className="mr-2 h-5 w-5" />
              Continue with Apple
            </Button>
            <Button variant="outline" className="w-full" onClick={() => {}}>
              <Mail className="mr-2 h-5 w-5" />
              Continue with email
            </Button>
            <Button variant="outline" className="w-full" onClick={() => {}}>
              <FacebookIcon className="mr-2 h-5 w-5" />
              Continue with Facebook
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
