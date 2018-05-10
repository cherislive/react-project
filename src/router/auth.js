
import React from 'react';
import { Redirect } from 'react-router-dom';
import { sessionStorage } from '@/utils/utils';
// 登录验证
const requireAuth = (Layout, props) => {
  const authLoggedUser = sessionStorage('authLoggedUser')
  if (!authLoggedUser) { // 未登录
    return <Redirect to={{ pathname: "/login", state: { from: props.location} }} />;
  } else {
    return <Layout {...props} />
  }
};
export default requireAuth;