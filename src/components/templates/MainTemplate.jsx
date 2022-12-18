import React, { useState, useEffect } from 'react'
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import LogoutIcon from '@mui/icons-material/Logout';
import { Col, Layout, Menu, Row } from 'antd';
import logo from '@assets/logo.png';
import { useDispatch } from 'react-redux';
import { fetchItineraries } from '@slices/itinerariesSlice';
import { UserInfo } from '@atoms';
import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout
const component_name = 't-mainTemplate'

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  }
}

const items = [getItem(
  'Itineraries', '1', <Link to={'/fligths'}><ConnectingAirportsIcon /></Link>
)]

const MainTemplate = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItineraries())
  }, [])

  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout className={component_name}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        theme="light"
        width={280}
        collapsedWidth={0}
      >
        <div className={`${component_name}__sideBar`}>
          <div className={`${component_name}__sideBar--flex`}>
            <img src={logo} />
            <Menu
              theme="light"
              defaultSelectedKeys={['1']}
              mode="inline"
              items={items}
            />
          </div>
          <Menu
            theme="light"
            mode="inline"
            items={[getItem('Log out', '2', <Link to={'/'}><LogoutIcon /></Link>)]}
          />
        </div>
      </Sider>
      <Layout className={`${component_name}__header`}>
        <Header className={`${component_name}__header--container`}>
          <Row type="flex">
            <Col span={12}>
              <h1>Welcome</h1>
            </Col>
            <UserInfo />
          </Row>
        </Header>
        <Content>
          <div className={`${component_name}__content`}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
export default MainTemplate
