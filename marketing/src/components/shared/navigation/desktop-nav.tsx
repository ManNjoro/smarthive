"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default function NavigationMenuDemo() {
  return (
    <section className="">
        <div className="px-10 border-b-border border-b-[1.5px] h-[12vh] flex justify-center">
        <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
                </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
            <Link href="/upload" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Upload Data
                </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
            <Link href="/eda" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Exploratory Data Analysis
                </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <Link href="/modelinsights" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Model Insights
                </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <Link href="/privacy-policy" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                     Terms
                </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem style={{ paddingLeft: '80px'}}>
                <Link href="/register" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Register
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              |
              <NavigationMenuItem style={{ paddingLeft: '0px'}}>
                <Link href="/login" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Login
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            
        </NavigationMenuList>
        </NavigationMenu>
        </div>
    </section>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
