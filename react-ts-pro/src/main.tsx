import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.tsx";
import { fetchChannelAPI } from "@/apis/list.tsx";

fetchChannelAPI().then((res) => {
  console.log(res.data);
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
