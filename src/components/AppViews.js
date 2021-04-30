import React, { useState } from "react";
import { Route } from "react-router-dom";
import { GroceryList } from "./grocery/GroceryList"
import { GroceryListEditForm } from "./grocery/GroceryEdit"
import { GroceryListCreateForm } from "./grocery/GroceryCreate"
import { userStorageKey } from "../components/auth/authSettings"


export const AppViews = () => {
  //? no clue on how this works, but do know that it is checking for a login
  // const [isAuthenticated, setIsAuthenticated] = useState(
  //   sessionStorage.getItem(userStorageKey) !== null
  // );
  // const setAuthUser = (user) => {
  //   sessionStorage.setItem(userStorageKey, JSON.stringify(user));
  //   setIsAuthenticated(sessionStorage.getItem(userStorageKey) !== null);
  // };

  // const setUser = props.setUser;
  // const hasUser = true;
  return (
    <>
      <Route exact path="/">
        <GroceryList />
      </Route>

      <Route exact path="/GroceryLists/:groceryListId(\d+)/edit">
        <GroceryListEditForm />
      </Route>

      <Route exact path="/GroceryLists/create">
        <GroceryListCreateForm />
      </Route>

      {/* <Route exact path="/GroceryCreate">
        <GroceryCreate />
      </Route>

      <Route path="/:GroceryListEdit(\d+)/edit">
        <GroceryListEdit />
      </Route> */}

    </>
  );
};