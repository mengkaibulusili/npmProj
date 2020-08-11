import "./index.css";
import React from "react";
import textInner from "./data";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
} from "react-router-dom";

import { Layout, Breadcrumb } from "antd";
import { genUUID } from "./component/globalFunction";

import { AddVip } from "./component/AddVip";

const { Sider, Header, Content } = Layout;
let Cxhy = () => {
  return <div>cx</div>;
};

let Czhy = () => {
  return <div>cz</div>;
};

let Tjhy = () => {
  return <AddVip />;
};

let Application = () => {
  function itemRender(route: any, params: any, routes: any, paths: any) {
    return (
      <Link key={genUUID()} className="Link" to={route.path}>
        {route.breadcrumbName}
      </Link>
    );
  }

  let AllRoute = (list: any) => {
    return list.map((x: any) => {
      const chirdenList = x.children.map((y: any) => {
        return (
          <Route key={genUUID()} exact path={y.path}>
            {typeof eval(y.nodeName) == "function"
              ? eval(y.nodeName + "()")
              : ""}
          </Route>
        );
      });

      const routeList = [
        <Route key={genUUID()} exact path={x.path}>
          {x.breadcrumbName}
        </Route>,
      ].concat(chirdenList);

      return routeList;
    });
  };

  return (
    <Layout>
      <Header style={{ backgroundColor: "#c8d6ec", height: "50px" }}>
        <Breadcrumb itemRender={itemRender} routes={textInner.head} />
      </Header>
      <Layout>
        <Content style={{ color: "black" }}>{AllRoute(textInner.head)}</Content>
      </Layout>
    </Layout>
  );
};
export default Application;
