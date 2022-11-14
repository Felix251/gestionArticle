import * as React from 'react'
import { Layout, Menu, Row, Col } from 'antd';
import { Outlet } from 'react-router-dom'

const { Header, Footer, Content } = Layout;

export default function BlogLayout () {
  return (
    <>
      <Layout className="layout">
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Row>
            <Col span={8}>Logo</Col>
            <Col span={8} offset={8}>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={new Array(3).fill(null).map((_, index) => ({
                  key: String(index + 1),
                  label: `nav ${index + 1}`,
                }))}
              />
            </Col>
          </Row>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: '0 50px', margin: ' 84px auto 0', maxWidth: 1200 }}
        >
          <Outlet />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  )
}