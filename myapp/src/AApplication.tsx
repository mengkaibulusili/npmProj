import "./index.css";
import React from "react";
import ABrowserPath from "./ABrowserPath";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
} from "react-router-dom";

import { Layout, Breadcrumb, Row } from "antd";
import { genUUID } from "./component/globalFunction";

import { AddVipPanel } from "./component/AddVipPanel";
import { AddProjPanel } from "./component/AddProjPanel";
import { WatchProjPanel } from "./component/WatchProjPanel";

const { Sider, Header, Content } = Layout;
let Cxhy = () => {
  return <div>cx</div>;
};

let Czhy = () => {
  return <div>cz</div>;
};

let AddVip = () => {
  return <AddVipPanel />;
};

let AddProj = () => {
  return <AddProjPanel />;
};

let WatchProj = () => {
  return <WatchProjPanel />;
};

let AllRoute = (list: any) => {
  try {
    return list.map((x: any) => {
      let chirdenList = x.children.map((y: any) => {
        let node: any = "";
        try {
          node =
            typeof eval(y.nodeName) == "function" ? (
              eval(y.nodeName + "()")
            ) : (
              <div>错误节点</div>
            );
        } catch (err) {
          node = <div>未上线功能</div>;
        }
        return (
          <Route key={genUUID()} exact path={y.path}>
            {node}
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
  } catch (err) {
    return <Row>{String(err)}</Row>;
  }
};

let Application = () => {
  function itemRender(route: any, params: any, routes: any, paths: any) {
    return (
      <Link key={genUUID()} className="Link" to={route.path}>
        {route.breadcrumbName}
      </Link>
    );
  }

  return (
    <Layout>
      <Header style={{ backgroundColor: "#c8d6ec", height: "50px" }}>
        <Breadcrumb itemRender={itemRender} routes={ABrowserPath.head} />
      </Header>
      <Layout>
        <Content style={{ color: "black" }}>
          {AllRoute(ABrowserPath.head)}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Application;
