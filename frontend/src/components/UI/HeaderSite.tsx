import { Layout, Menu, Row, Col, Badge } from 'antd'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'
import type { MenuProps } from 'antd'

const { Header } = Layout

const items: MenuProps['items'] = [
  { label: <NavLink to="/">Home</NavLink>, key: '/' },
  { label: <NavLink to="/articles">Articles</NavLink>, key: '/articles' },
  { label: <NavLink to="/about">About Us</NavLink>, key: '/about' },
  { label: <NavLink to="/contact-us">Contact Us</NavLink>, key: '/contact-us' },
]

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
            items={items}
          />
        </Col>
      </Row>
    </Header>
  )
}

export default HeaderSite
