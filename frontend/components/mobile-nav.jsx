"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Car, PlusCircle, BarChart3, Settings, User, Home } from "lucide-react"

const mobileNavItems = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Vehicles",
    href: "/dashboard/vehicles",
    icon: Car,
  },
  {
    title: "Add Vehicle",
    href: "/dashboard/add-vehicle",
    icon: PlusCircle,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function MobileNav({ className }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className={cn("md:hidden", className)}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 sm:max-w-xs">
        <div className="px-7">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => {
              setOpen(false)
            }}
          >
            <span className="font-bold text-xl">Vehicle Dashboard</span>
          </Link>
        </div>
        <div className="mt-8 px-7">
          <nav className="flex flex-col gap-4">
            {mobileNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  setOpen(false)
                }}
                className={cn(
                  "flex items-center gap-3 text-base font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
