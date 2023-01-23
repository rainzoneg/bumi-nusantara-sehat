
import { Layout, Image} from 'antd';
import React, { useState } from 'react';
import logoBns from "../../public/logo_bns.svg"
const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  return (
      <Layout className="h-[100vh] justify-center items-center bg-white">
          <div className="w-screen flex h-auto justify-center items-center self-center">
            <img
              src="/logo_bns.svg"
              className="w-4/5"
            />
          </div>
      </Layout>
  )
}