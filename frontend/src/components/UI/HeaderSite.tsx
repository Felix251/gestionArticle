import { Layout, Menu, Row, Col } from 'antd'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'

const { Header } = Layout

const HeaderSite = () => {
  const location = useLocation()
  return (
    <Header
      data-theme="light"
      className="site-layout-background site-layout-header"
    >
      <Row>
        <Col span={8}>
          <Logo />
        </Col>
        <Col span={8} offset={8}>
          <Menu
            style={{ border: 0, background: 'transparent' }}
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['/']}
            selectedKeys={[location.pathname]}
          >
            <Menu.Item key="/">
              <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="/articles">
              <NavLink to="/articles">Articles</NavLink>
            </Menu.Item>
            <Menu.Item key="/about">
              <NavLink to="/about">About Us</NavLink>
            </Menu.Item>
            <Menu.Item key="/contact-us">
              <NavLink to="/contact-us">Contact Us</NavLink>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  )
}

export default HeaderSite
