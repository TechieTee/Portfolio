import Product from "pages/Components/Landing/Product";

interface RouteObject {
  path: string;
  component: React.ComponentType<any>; // Use React.ComponentType to specify the type of the component
  exact?: boolean;
}

const publicRoutes = [{ path: "/", component: Product }];

export { publicRoutes };
