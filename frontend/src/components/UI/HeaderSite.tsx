import { Layout, Menu, Row, Col } from 'antd'
import Logo from './Logo'

const { Header } = Layout

const HeaderSite = () => {
  return (
    <Header
      data-theme='light'
      className='site-layout-background site-layout-header'
    >
      <Row>
        <Col span={8}>
          <Logo />
        </Col>
        <Col span={8} offset={8}>
          <Menu
            style={{ border: 0, background: 'transparent' }}
            theme='light'
            mode='horizontal'
            defaultSelectedKeys={['2']}
            items={new Array(3).fill(null).map((_, index) => ({
              key: String(index + 1),
              label: `nav ${index + 1}`
            }))}
          />
        </Col>
      </Row>
    </Header>
  )
}

export default HeaderSite
