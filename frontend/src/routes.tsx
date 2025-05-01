import React from "react";
import { lazy } from "@loadable/component";

// Layouts
import AuthLayout from "./layouts/Auth";
import AuthCoverLayout from "./layouts/AuthCover";
import DashboardLayout from "./layouts/Dashboard";
import DocLayout from "./layouts/Doc";
import LandingLayout from "./layouts/Landing";

// Guards
import AuthGuard from "./components/guards/AuthGuard";

// Presentation & Landing
const Presentation = lazy(() => import("./pages/landing/Presentation"));
const Landing = lazy(() => import("./pages/landing/Landing"));

// Dashboards
const Default = lazy(() => import("./pages/dashboards/Default"));
const Analytics = lazy(() => import("./pages/dashboards/Analytics"));
const SaaS = lazy(() => import("./pages/dashboards/SaaS"));
const Social = lazy(() => import("./pages/dashboards/Social"));
const Crypto = lazy(() => import("./pages/dashboards/Crypto"));

// App Pages (New Section)
const HomePage = lazy(() => import("./pages/app/HomePage"));
const NavigationIndex = lazy(() => import("./pages/app/NavigationIndex"));

// Exercise Pages (Previously Example)
const ExerciseTaskList = lazy(
  () => import("./pages/exercises/tasks/ExerciseTaskList")
);
const LlmQueryExercise = lazy(
  () => import("./pages/exercises/llm-query/LlmQuery")
);
const AnalyticsChartExercise = lazy(
  () => import("./pages/exercises/analytics/AnalyticsChart")
);

// Apps
const Calendar = lazy(() => import("./pages/apps/Calendar"));
const Chat = lazy(() => import("./pages/apps/Chat"));
const Customers = lazy(() => import("./pages/apps/Customers"));
const EmailDetails = lazy(() => import("./pages/apps/EmailDetails"));
const EmailInbox = lazy(() => import("./pages/apps/EmailInbox"));
const FileManager = lazy(() => import("./pages/apps/FileManager"));
const Invoice = lazy(() => import("./pages/apps/Invoice"));
const Orders = lazy(() => import("./pages/apps/Orders"));
const Pricing = lazy(() => import("./pages/apps/Pricing"));
const Products = lazy(() => import("./pages/apps/Products"));
const ProductsDetails = lazy(() => import("./pages/apps/ProductsDetails"));
const Projects = lazy(() => import("./pages/apps/Projects"));
const ProjectsDetails = lazy(() => import("./pages/apps/ProjectsDetails"));
const TasksKanban = lazy(() => import("./pages/apps/TasksKanban"));
const TasksList = lazy(() => import("./pages/apps/TasksList"));

// Pages
const Profile = lazy(() => import("./pages/pages/Profile"));
const Settings = lazy(() => import("./pages/pages/Settings"));
const Blank = lazy(() => import("./pages/pages/Blank"));

// Auth
const Page500 = lazy(() => import("./pages/auth/Page500"));
const Page404 = lazy(() => import("./pages/auth/Page404"));
const SignIn = lazy(() => import("./pages/auth/SignIn"));
const SignUp = lazy(() => import("./pages/auth/SignUp"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));
const TwoFactor = lazy(() => import("./pages/auth/TwoFactor"));
const LockScreen = lazy(() => import("./pages/auth/LockScreen"));

// UI components
const Alerts = lazy(() => import("./pages/ui/Alerts"));
const Buttons = lazy(() => import("./pages/ui/Buttons"));
const Cards = lazy(() => import("./pages/ui/Cards"));
const Carousel = lazy(() => import("./pages/ui/Carousel"));
const EmbedVideo = lazy(() => import("./pages/ui/EmbedVideo"));
const General = lazy(() => import("./pages/ui/General"));
const Grid = lazy(() => import("./pages/ui/Grid"));
const Modals = lazy(() => import("./pages/ui/Modals"));
const Offcanvas = lazy(() => import("./pages/ui/Offcanvas"));
const Tabs = lazy(() => import("./pages/ui/Tabs"));
const Typography = lazy(() => import("./pages/ui/Typography"));

// Icons
const Lucide = lazy(() => import("./pages/icons/Lucide"));
const FontAwesome = lazy(() => import("./pages/icons/FontAwesome"));

// Forms
const Layouts = lazy(() => import("./pages/forms/Layouts"));
const BasicInputs = lazy(() => import("./pages/forms/BasicInputs"));
const InputGroups = lazy(() => import("./pages/forms/InputGroups"));
const FloatingLabels = lazy(() => import("./pages/forms/FloatingLabels"));
const AdvancedInputs = lazy(() => import("./pages/forms/AdvancedInputs"));
const Formik = lazy(() => import("./pages/forms/Formik"));
const Editors = lazy(() => import("./pages/forms/Editors"));

// Tables
const Tables = lazy(() => import("./pages/tables/Tables"));
const Pagination = lazy(() => import("./pages/tables/Pagination"));
const ColumnSorting = lazy(() => import("./pages/tables/ColumnSorting"));
const ColumnFiltering = lazy(() => import("./pages/tables/ColumnFiltering"));
const RowExpanding = lazy(() => import("./pages/tables/RowExpanding"));
const RowSelection = lazy(() => import("./pages/tables/RowSelection"));

// Charts
const Chartjs = lazy(() => import("./pages/charts/Chartjs"));
const ApexCharts = lazy(() => import("./pages/charts/ApexCharts"));

// Notifications
const Notifications = lazy(() => import("./pages/notifications/Notifications"));

// Maps
const GoogleMaps = lazy(() => import("./pages/maps/GoogleMaps"));
const VectorMaps = lazy(() => import("./pages/maps/VectorMaps"));

// Documentation
const Introduction = lazy(() => import("./pages/docs/Introduction"));
const GettingStarted = lazy(() => import("./pages/docs/GettingStarted"));
const Routing = lazy(() => import("./pages/docs/Routing"));
const Auth0 = lazy(() => import("./pages/docs/auth/Auth0"));
const Cognito = lazy(() => import("./pages/docs/auth/Cognito"));
const Firebase = lazy(() => import("./pages/docs/auth/Firebase"));
const JWT = lazy(() => import("./pages/docs/auth/JWT"));
const Guards = lazy(() => import("./pages/docs/Guards"));
const APICalls = lazy(() => import("./pages/docs/APICalls"));
const Redux = lazy(() => import("./pages/docs/Redux"));
const Internationalization = lazy(
  () => import("./pages/docs/Internationalization")
);
const EnvironmentVariables = lazy(
  () => import("./pages/docs/EnvironmentVariables")
);
const ESLintAndPrettier = lazy(() => import("./pages/docs/ESLintAndPrettier"));
const Deployment = lazy(() => import("./pages/docs/Deployment"));
const MigratingToNextJS = lazy(() => import("./pages/docs/MigratingToNextJS"));
const Support = lazy(() => import("./pages/docs/Support"));
const Changelog = lazy(() => import("./pages/docs/Changelog"));

// Protected routes
const ProtectedPage = lazy(() => import("./pages/protected/ProtectedPage"));

const routes = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "navigation",
        element: <NavigationIndex />,
      },
    ],
  },
  {
    path: "exercises",
    element: <DashboardLayout />,
    children: [
      {
        path: "tasks",
        children: [
          {
            path: "list",
            element: <ExerciseTaskList />,
          },
        ],
      },
      {
        path: "llm-query",
        element: <LlmQueryExercise />,
      },
      {
        path: "analytics-chart",
        element: <AnalyticsChartExercise />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "default",
        element: <HomePage />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "saas",
        element: <SaaS />,
      },
      {
        path: "social",
        element: <Social />,
      },
      {
        path: "crypto",
        element: <Crypto />,
      },
    ],
  },
  {
    path: "ecommerce",
    element: <DashboardLayout />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products-details",
        element: <ProductsDetails />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "invoice",
        element: <Invoice />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
    ],
  },
  {
    path: "projects",
    element: <DashboardLayout />,
    children: [
      {
        path: "overview",
        element: <Projects />,
      },
      {
        path: "details",
        element: <ProjectsDetails />,
      },
    ],
  },
  {
    path: "chat",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Chat />,
      },
    ],
  },
  {
    path: "file-manager",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <FileManager />,
      },
    ],
  },
  {
    path: "calendar",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Calendar />,
      },
    ],
  },
  {
    path: "email",
    element: <DashboardLayout />,
    children: [
      {
        path: "inbox",
        element: <EmailInbox />,
      },
      {
        path: "details",
        element: <EmailDetails />,
      },
    ],
  },
  {
    path: "tasks",
    element: <DashboardLayout />,
    children: [
      {
        path: "list",
        element: <TasksList />,
      },
      {
        path: "kanban",
        element: <TasksKanban />,
      },
    ],
  },
  {
    path: "pages",
    element: <DashboardLayout />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "blank",
        element: <Blank />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "2fa",
        element: <TwoFactor />,
      },
      {
        path: "lock-screen",
        element: <LockScreen />,
      },
      {
        path: "404",
        element: <Page404 />,
      },
      {
        path: "500",
        element: <Page500 />,
      },
    ],
  },
  {
    path: "auth-cover",
    element: <AuthCoverLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "2fa",
        element: <TwoFactor />,
      },
      {
        path: "lock-screen",
        element: <LockScreen />,
      },
      {
        path: "404",
        element: <Page404 />,
      },
      {
        path: "500",
        element: <Page500 />,
      },
    ],
  },
  {
    path: "landing",
    element: <LandingLayout />,
    children: [
      {
        path: "",
        element: <Landing />,
      },
    ],
  },
  {
    path: "ui",
    element: <DashboardLayout />,
    children: [
      {
        path: "alerts",
        element: <Alerts />,
      },
      {
        path: "buttons",
        element: <Buttons />,
      },
      {
        path: "cards",
        element: <Cards />,
      },
      {
        path: "carousel",
        element: <Carousel />,
      },
      {
        path: "embed-video",
        element: <EmbedVideo />,
      },
      {
        path: "general",
        element: <General />,
      },
      {
        path: "grid",
        element: <Grid />,
      },
      {
        path: "modals",
        element: <Modals />,
      },
      {
        path: "tabs",
        element: <Tabs />,
      },
      {
        path: "offcanvas",
        element: <Offcanvas />,
      },
      {
        path: "typography",
        element: <Typography />,
      },
    ],
  },
  {
    path: "icons",
    element: <DashboardLayout />,
    children: [
      {
        path: "lucide",
        element: <Lucide />,
      },
      {
        path: "font-awesome",
        element: <FontAwesome />,
      },
    ],
  },
  {
    path: "forms",
    element: <DashboardLayout />,
    children: [
      {
        path: "layouts",
        element: <Layouts />,
      },
      {
        path: "basic-inputs",
        element: <BasicInputs />,
      },
      {
        path: "input-groups",
        element: <InputGroups />,
      },
      {
        path: "floating-labels",
        element: <FloatingLabels />,
      },
    ],
  },
  {
    path: "tables",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Tables />,
      },
    ],
  },
  {
    path: "form-plugins",
    element: <DashboardLayout />,
    children: [
      {
        path: "advanced-inputs",
        element: <AdvancedInputs />,
      },
      {
        path: "formik",
        element: <Formik />,
      },
      {
        path: "editors",
        element: <Editors />,
      },
    ],
  },
  {
    path: "advanced-tables",
    element: <DashboardLayout />,
    children: [
      {
        path: "pagination",
        element: <Pagination />,
      },
      {
        path: "column-sorting",
        element: <ColumnSorting />,
      },
      {
        path: "column-filtering",
        element: <ColumnFiltering />,
      },
      {
        path: "row-expanding",
        element: <RowExpanding />,
      },
      {
        path: "row-selection",
        element: <RowSelection />,
      },
    ],
  },
  {
    path: "charts",
    element: <DashboardLayout />,
    children: [
      {
        path: "chartjs",
        element: <Chartjs />,
      },
      {
        path: "apexcharts",
        element: <ApexCharts />,
      },
    ],
  },
  {
    path: "notifications",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Notifications />,
      },
    ],
  },
  {
    path: "maps",
    element: <DashboardLayout />,
    children: [
      {
        path: "google-maps",
        element: <GoogleMaps />,
      },
      {
        path: "vector-maps",
        element: <VectorMaps />,
      },
    ],
  },
  {
    path: "calendar",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Calendar />,
      },
    ],
  },
  {
    path: "docs",
    element: <DocLayout />,
    children: [
      {
        path: "introduction",
        element: <Introduction />,
      },
      {
        path: "getting-started",
        element: <GettingStarted />,
      },
      {
        path: "routing",
        element: <Routing />,
      },
      {
        path: "auth/auth0",
        element: <Auth0 />,
      },
      {
        path: "auth/cognito",
        element: <Cognito />,
      },
      {
        path: "auth/firebase",
        element: <Firebase />,
      },
      {
        path: "auth/jwt",
        element: <JWT />,
      },
      {
        path: "guards",
        element: <Guards />,
      },
      {
        path: "api-calls",
        element: <APICalls />,
      },
      {
        path: "redux",
        element: <Redux />,
      },
      {
        path: "internationalization",
        element: <Internationalization />,
      },
      {
        path: "environment-variables",
        element: <EnvironmentVariables />,
      },
      {
        path: "eslint-and-prettier",
        element: <ESLintAndPrettier />,
      },
      {
        path: "deployment",
        element: <Deployment />,
      },
      {
        path: "migrating-to-next-js",
        element: <MigratingToNextJS />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "changelog",
        element: <Changelog />,
      },
    ],
  },
  {
    path: "private",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <ProtectedPage />,
      },
    ],
  },
  {
    path: "*",
    element: <AuthLayout />,
    children: [
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
];

export default routes;
