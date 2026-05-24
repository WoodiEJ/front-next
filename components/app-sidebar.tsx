import * as React from "react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LayoutDashboardIcon, ListIcon, ChartBarIcon, FolderIcon, UsersIcon, CameraIcon, FileTextIcon, Settings2Icon, CircleHelpIcon, SearchIcon, DatabaseIcon, FileChartColumnIcon, FileIcon, CommandIcon, File, Store, StoreIcon, UserStar, Package } from "lucide-react"
import { getUser } from "@/actions/user-get"
import { TooltipProvider } from "./ui/tooltip"



export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const usuario = await getUser();

  const navAdmin = [
    { title: "Dashboard", url: "/admin/dashboard", icon: <LayoutDashboardIcon /> },
    { title: "Solicitações", url: "/admin/requests", icon: <File /> },
    { title: "Lojas", url: "/admin/stores", icon: <StoreIcon /> },
    { title: "Admins", url: "/admin/admins", icon: <UserStar /> },
  ]

  const navStore = [
    { title: "Dashboard", url: "/store/dashboard", icon: <LayoutDashboardIcon /> },
    { title: "Produtos", url: "/store/products", icon: <Package /> },
  ]

  const navMain = usuario?.role === "store" ? navStore : navAdmin

  const data = {
    user: {
      name: usuario?.name,
      email: usuario?.email,
      avatar: "/avatars/shadcn.jpg",
    },
    navMain
  }

  return (
    <TooltipProvider>
      <Sidebar collapsible="offcanvas" {...props}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="data-[slot=sidebar-menu-button]:p-1.5!"
              >
                <a href="#">
                  <Store />
                  <span className="text-base font-semibold">Stores Control</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={data.navMain} />
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} role={usuario?.role ?? "admin"} />
        </SidebarFooter>
      </Sidebar>
    </TooltipProvider>
  )
}
