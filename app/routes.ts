import { type RouteConfig, index } from "@react-router/dev/routes";

export interface IRoute {
  title: string;
  path: string;
  content: string | React.ReactNode;
  exact?: boolean;
}

export default [index("routes/home.tsx")] satisfies RouteConfig;
