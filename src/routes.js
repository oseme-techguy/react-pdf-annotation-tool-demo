import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import UserProfileLite from "./views/UserProfileLite";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";

import Dashboard from "./views/Dashboard";
import UploadDocument from "./views/UploadDocument";
import ManageNamedEntities from "./views/ManageNamedEntities";
import ManageUsers from "./views/ManageUsers";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/dashboard" />
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: Dashboard
  },
  {
    path: "/upload-document",
    layout: DefaultLayout,
    component: UploadDocument
  },
  {
    path: "/manage-named-entities",
    layout: DefaultLayout,
    component: ManageNamedEntities
  },
  {
    path: "/manage-users",
    layout: DefaultLayout,
    component: ManageUsers
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
];
