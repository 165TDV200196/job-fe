import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import "../../scss/Admin/Nav.scss";
import Jobs from "../Jobs/Jobs";
import User from "../User/User";
import CheckCompany from "../CheckCompany/CheckCompany";
export default function Nav() {
  const match = useRouteMatch();
  // console.log(match);
  const { Header, Sider, Content } = Layout;
  const [state, setState] = useState({
    collapsed: false,
    visible: true,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };

  return (
    <div id="nav">
      <Layout>
        <Sider trigger={null} collapsible collapsed={state.collapsed}>
          <div className="logo">
            <Link to="/">
              <p className="text-center w-100">
                {state.collapsed === true ? (
                  <i className="fas fa-user-shield"></i>
                ) : (
                  <strong>Administration</strong>
                )}
              </p>
            </Link>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item
              key="4"
              icon={
                state.collapsed === true ? (
                  <span className="fas fa-check"></span>
                ) : (
                  <span className="fas fa-check mr-2"></span>
                )
              }
            >
              <Link to={`${match.url}/checkCompany`}>Kiểm tra tài khoản</Link>
            </Menu.Item>
            <Menu.Item
              key="6"
              icon={
                state.collapsed === true ? (
                  <span className="fas fa-briefcase"></span>
                ) : (
                  <span className="fas fa-briefcase mr-2"></span>
                )
              }
            >
              <Link to={`${match.url}/work`}>Công việc</Link>
            </Menu.Item>

            <Menu.Item
              key="11"
              icon={
                state.collapsed === true ? (
                  <span className="fas fa-user-injured"></span>
                ) : (
                  <span className="fas fa-user-injured mr-2"></span>
                )
              }
            >
              <Link to={`${match.url}/users`}>Cấp quyền</Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {/* <Headers /> */}
            {React.createElement(
              state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              },
            )}
          </Header>
          <Content
            className="site-layout-background h-100vh"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route exact path={`${match.path}/work`}>
                <Jobs url={match.url} />
              </Route>
              <Route exact path={`${match.path}/users`}>
                <User url={match.url} />
              </Route>
              <Route exact path={`${match.path}/checkCompany`}>
                <CheckCompany url={match.url} />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
