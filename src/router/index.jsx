import { createHashRouter } from "react-router-dom";
import { 
  PrincipalScreen,
  RootScreen,
  SenhaScreen,
} from "../ui/screens";

export const router = createHashRouter([
  {
    path: "*",
    element: <RootScreen />,
  },
  { 
    path: `/`,
    element: <RootScreen />,
    children: [
      {
        path: `/`,
        element: <SenhaScreen />,
      },
      {
        path: `/te-amo`,
        element: <PrincipalScreen />,
      },
    ],
  },
]);
