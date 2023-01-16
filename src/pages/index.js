
import { Layout, Menu, Button } from 'antd';
import React, { useState } from 'react';
const { Header, Sider, Content } = Layout;

export default function Home() {
  return (
      <Layout className="layout ">
        <Layout className="site-layout ">
          <Header
              className="site-layout-background"
              style={{
                padding: 0,
              }}
          >
          </Header>
          <Content
              className="site-layout-background flex flex-row justify-center "
              style={{
                margin: '24px 16px',
                padding: 24,
                
              }}
          >
            <Button type="primary">Bumi Nusantara Sehat</Button>
          </Content>
        </Layout>
      </Layout>
  )
}