import { SidebarItemsType } from "../../types/sidebar";

import {
  Bell,
  BookOpen,
  Calendar,
  CheckSquare,
  Grid,
  Heart,
  Layout,
  List,
  PieChart,
  Sliders,
  MapPin,
  Users,
  Share,
  Files,
  Mail,
  Trello,
  ShoppingBag,
  LayoutTemplate,
} from "lucide-react";

const navigationSection = [
  {
    href: "/dashboard",
    icon: Sliders,
    title: "Dashboards",
    badge: "5",
    children: [
      {
        href: "/dashboard/default",
        title: "Default",
      },
      {
        href: "/dashboard/analytics",
        title: "Analytics",
      },
      {
        href: "/dashboard/saas",
        title: "SaaS",
      },
      {
        href: "/dashboard/social",
        title: "Social",
      },
      {
        href: "/dashboard/crypto",
        title: "Crypto",
      },
    ],
  },
] as unknown as SidebarItemsType[];

const appsSection = [
  {
    href: "/ecommerce",
    icon: ShoppingBag,
    title: "E-Commerce",
    children: [
      {
        href: "/ecommerce/products",
        title: "Products",
        badge: "New",
      },
      {
        href: "/ecommerce/products-details",
        title: "Product Details",
        badge: "New",
      },
      {
        href: "/ecommerce/orders",
        title: "Orders",
        badge: "New",
      },
      {
        href: "/ecommerce/customers",
        title: "Customers",
      },
      {
        href: "/ecommerce/invoice",
        title: "Invoice",
      },
      {
        href: "/ecommerce/pricing",
        title: "Pricing",
      },
    ],
  },
  {
    href: "/projects",
    icon: Layout,
    title: "Projects",
    children: [
      {
        href: "/projects/overview",
        title: "Overview",
      },
      {
        href: "/projects/details",
        title: "Details",
      },
    ],
  },
  {
    href: "/chat",
    icon: List,
    title: "Chat",
  },
  {
    href: "/file-manager",
    icon: Files,
    title: "File Manager",
    badge: "New",
  },
  {
    href: "/calendar",
    icon: Calendar,
    title: "Calendar",
  },
  {
    href: "/email",
    icon: Mail,
    title: "Email",
    badge: "New",
    children: [
      {
        href: "/email/inbox",
        title: "Inbox",
      },
      {
        href: "/email/details",
        title: "Details",
      },
    ],
  },
  {
    href: "/tasks",
    icon: Trello,
    title: "Tasks",
    children: [
      {
        href: "/tasks/list",
        title: "List",
        badge: "New",
      },
      {
        href: "/tasks/kanban",
        title: "Kanban",
      },
    ],
  },
] as unknown as SidebarItemsType[];

const pagesSection = [
  {
    href: "/pages",
    icon: Layout,
    title: "Pages",
    children: [
      {
        href: "/pages/profile",
        title: "Profile",
      },
      {
        href: "/pages/settings",
        title: "Settings",
      },
      {
        href: "/pages/blank",
        title: "Blank Page",
      },
    ],
  },
  {
    href: "/auth",
    icon: Users,
    title: "Auth",
    children: [
      {
        href: "/auth/sign-in",
        title: "Sign In",
      },
      {
        href: "/auth-cover/sign-in",
        title: "Sign In Cover",
      },
      {
        href: "/auth/sign-up",
        title: "Sign Up",
      },
      {
        href: "/auth-cover/sign-up",
        title: "Sign Up Cover",
      },
      {
        href: "/auth/reset-password",
        title: "Reset Password",
      },
      {
        href: "/auth-cover/reset-password",
        title: "Reset Password Cover",
      },
      {
        href: "/auth/lock-screen",
        title: "Lock Screen",
      },
      {
        href: "/auth-cover/lock-screen",
        title: "Lock Screen Cover",
      },
      {
        href: "/auth/2fa",
        title: "2FA",
      },
      {
        href: "/auth-cover/2fa",
        title: "2FA Cover",
      },
      {
        href: "/auth/404",
        title: "404 Page",
      },
      {
        href: "/auth/500",
        title: "500 Page",
      },
    ],
  },
  {
    href: "/landing",
    icon: LayoutTemplate,
    title: "Landing",
    badge: "New",
  },
  {
    href: "/docs/introduction",
    icon: BookOpen,
    title: "Documentation",
  },
] as unknown as SidebarItemsType[];

const componentsSection = [
  {
    href: "/ui",
    icon: Grid,
    title: "UI Elements",
    children: [
      {
        href: "/ui/alerts",
        title: "Alerts",
      },
      {
        href: "/ui/buttons",
        title: "Buttons",
      },
      {
        href: "/ui/cards",
        title: "Cards",
      },
      {
        href: "/ui/carousel",
        title: "Carousel",
      },
      {
        href: "/ui/embed-video",
        title: "Embed Video",
      },
      {
        href: "/ui/general",
        title: "General",
      },
      {
        href: "/ui/grid",
        title: "Grid",
      },
      {
        href: "/ui/modals",
        title: "Modals",
      },
      {
        href: "/ui/offcanvas",
        title: "Offcanvas",
      },
      {
        href: "/ui/tabs",
        title: "Tabs",
      },
      {
        href: "/ui/typography",
        title: "Typography",
      },
    ],
  },
  {
    href: "/icons",
    icon: Heart,
    title: "Icons",
    badge: "1500+",
    children: [
      {
        href: "/icons/lucide",
        title: "Lucide",
      },
      {
        href: "/icons/font-awesome",
        title: "Font Awesome",
      },
    ],
  },
  {
    href: "/forms",
    icon: CheckSquare,
    title: "Forms",
    children: [
      {
        href: "/forms/layouts",
        title: "Layouts",
      },
      {
        href: "/forms/basic-inputs",
        title: "Basic Inputs",
      },
      {
        href: "/forms/input-groups",
        title: "Input Groups",
      },
      {
        href: "/forms/floating-labels",
        title: "Floating Labels",
      },
    ],
  },
  {
    href: "/tables",
    icon: List,
    title: "Tables",
  },
] as unknown as SidebarItemsType[];

const pluginsSection = [
  {
    href: "/form-plugins",
    icon: CheckSquare,
    title: "Form Plugins",
    children: [
      {
        href: "/form-plugins/advanced-inputs",
        title: "Advanced Inputs",
      },
      {
        href: "/form-plugins/formik",
        title: "Formik",
        badge: "New",
      },
      {
        href: "/form-plugins/editors",
        title: "Editors",
      },
    ],
  },
  {
    href: "/advanced-tables",
    icon: List,
    title: "Advanced Tables",
    children: [
      {
        href: "/advanced-tables/pagination",
        title: "Pagination",
      },
      {
        href: "/advanced-tables/column-sorting",
        title: "Column Sorting",
      },
      {
        href: "/advanced-tables/column-filtering",
        title: "Column Filtering",
      },
      {
        href: "/advanced-tables/row-expanding",
        title: "Row Expanding",
      },
      {
        href: "/advanced-tables/row-selection",
        title: "Row Selection",
      },
    ],
  },
  {
    href: "/charts",
    icon: PieChart,
    title: "Charts",
    badge: "New",
    children: [
      {
        href: "/charts/chartjs",
        title: "Chart.js",
      },
      {
        href: "/charts/apexcharts",
        title: "ApexCharts",
        badge: "New",
      },
    ],
  },
  {
    href: "/notifications",
    icon: Bell,
    title: "Notifications",
  },
  {
    href: "/maps",
    icon: MapPin,
    title: "Maps",
    children: [
      {
        href: "/maps/google-maps",
        title: "Google Maps",
      },
      {
        href: "/maps/vector-maps",
        title: "Vector Maps",
      },
    ],
  },
  {
    href: "/404",
    icon: Share,
    title: "Multi Level",
    children: [
      {
        href: "/404",
        title: "Two Levels",
        children: [
          {
            href: "/404",
            title: "Item 1",
          },
          {
            href: "/404",
            title: "Item 2",
          },
        ],
      },
      {
        href: "/404",
        title: "Three Levels",
        children: [
          {
            href: "/404",
            title: "Item 1",
            children: [
              {
                href: "/404",
                title: "Item 1",
              },
              {
                href: "/404",
                title: "Item 2",
              },
            ],
          },
          {
            href: "/404",
            title: "Item 2",
          },
        ],
      },
    ],
  },
] as unknown as SidebarItemsType[];

const navItems = [
  {
    title: "Navigation",
    pages: navigationSection,
  },
  {
    title: "Apps",
    pages: appsSection,
  },
  {
    title: "Pages",
    pages: pagesSection,
  },
  {
    title: "Tools & Components",
    pages: componentsSection,
  },
  {
    title: "Plugins & Addons",
    pages: pluginsSection,
  },
];

export default navItems;
