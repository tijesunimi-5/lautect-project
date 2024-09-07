import Dashboard from '@/component/Dashboard';
import Header from '@/component/Header'
import React, { Fragment } from 'react'

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <Dashboard />
      <main className='shop'>{props.children}</main>
    </Fragment>
  );
}

export default Layout
