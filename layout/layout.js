import Header from '@/component/Header'
import React, { Fragment } from 'react'

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout
