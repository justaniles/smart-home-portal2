import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeRoutes } from "./home";
import { LoginRoutes } from "./login";
import { ManageHomesRoutes } from "./manage-homes";
import { SignupRoutes } from "./sign-up";

export const routes: RouterConfig = [
    ...HomeRoutes,
    ...LoginRoutes,
    ...ManageHomesRoutes,
    ...SignupRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
];
