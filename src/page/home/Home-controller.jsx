import React, { useEffect, lazy, Suspense } from 'react';

// redux
import userAction from '@/redux/action/user';
import { useSelector, useDispatch } from 'react-redux';

// 路由
import { useRouteMatch, useHistory } from 'react-router-dom';
import * as ROUTES from '@/constants/route-constants';

// controller
// import HomeIndexController from '@/page/home/Home-index-controller.jsx';
// import PasswordModifyController from '@/page/home/admin/Password-modify-controller.jsx';
// import HomeAccountController from '@/page/home/admin/Home-account-controller.jsx';
// import HomeMonitorController from '@/page/home/monitor/Home-monitor-controller.jsx';
// import HomeMonitorListController from '@/page/home/monitor/Home-monitor-list-controller.jsx';
// import HomeMonitorTextController from '@/page/home/monitor/Home-monitor-text-controller.jsx';
// import HomeConsumerController from '@/page/home/monitor/Home-consumer-controller.jsx';
// import HomeConsumerWelcomeController from '@/page/home/consumer/Home-consumer-welcome-controller.jsx';

// localStorage
import { LOCAL_STORAGE } from '@/constants/app-constants';

// components
import Nav from '@/components/home/Nav.jsx';

// 样式
import '@/style/home/home.styl';
// 样式
import { EyeFilled } from '@ant-design/icons';
import { Layout, Empty } from 'antd';
const { Content, Footer, Sider } = Layout;

const HomeConsumerWelcomeController = lazy(() =>
  import('@/page/home/consumer/Home-consumer-welcome-controller.jsx')
);
const PasswordModifyController = lazy(() =>
  import('@/page/home/admin/Password-modify-controller.jsx')
);
const HomeIndexController = lazy(() =>
  import('@/page/home/Home-index-controller.jsx')
);
const HomeAccountController = lazy(() =>
  import('@/page/home/admin/Home-account-controller.jsx')
);
const HomeMonitorController = lazy(() =>
  import('@/page/home/monitor/Home-monitor-controller.jsx')
);
const HomeMonitorListController = lazy(() =>
  import('@/page/home/monitor/Home-monitor-list-controller.jsx')
);
const HomeMonitorTextController = lazy(() =>
  import('@/page/home/monitor/Home-monitor-text-controller.jsx')
);
const HomeConsumerController = lazy(() =>
  import('@/page/home/monitor/Home-consumer-controller.jsx')
);

export default (props) => {
  const token = localStorage.getItem(`${LOCAL_STORAGE}-token`);
  // 各个路由控制
  const { uuid } = useSelector((state) => state.userStore),
    history = useHistory(),
    dispatch = useDispatch();

  // 如果没有token就跳到首页
  useEffect(() => {
    if (!token) {
      history.push(ROUTES.INDEX.path);
    }
  }, [token, history]);

  // 刷新页面会导致uuid消失,需要用token再请求一遍
  useEffect(() => {
    if (!uuid && token) {
      // 由token获取manager信息
      dispatch(userAction.asyncSetUserByToken(token));
    }
  }, [uuid, token, dispatch]);

  const homeIndex = useRouteMatch({
    path: ROUTES.HOME_INDEX.path,
    exact: true,
  });

  // 管理员
  const homeAccount = useRouteMatch({
    path: ROUTES.HOME_ACCOUNT.path,
    exact: true,
  });
  const homePassword = useRouteMatch({
    path: ROUTES.HOME_PASSWORD.path,
    exact: true,
  });

  // 监测员
  const homeMonitor = useRouteMatch({
    path: ROUTES.HOME_MONITOR.path,
    exact: true,
  });
  const homeMonitorList = useRouteMatch({
    path: ROUTES.HOME_MONITOR_LIST.path,
    exact: true,
  });
  const homeMonitorText = useRouteMatch({
    path: ROUTES.HOME_MONITOR_TEXT.path,
    exact: true,
  });
  const homeConsumerList = useRouteMatch({
    path: ROUTES.HOME_CONSUMER_LIST.path,
    exact: true,
  });
  const homeConsumerWelcome = useRouteMatch({
    path: ROUTES.HOME_CONSUMER_WELCOME.path,
    exact: true,
  });

  // const roleToText = (role) => {
  //   switch (role) {
  //     case 1:
  //       return '超级管理员';
  //     case 5:
  //       return '监测员';
  //     case 10:
  //       return '普通用户';
  //     default:
  //       return '未知';
  //   }
  // };

  let content = null;

  if (homeIndex) {
    // 主首页
    content = <HomeIndexController />;
  } else if (homePassword) {
    content = <PasswordModifyController />;
  } else if (homeAccount) {
    content = <HomeAccountController />;
  } else if (homeMonitor) {
    content = <HomeMonitorController />;
  } else if (homeMonitorList) {
    content = <HomeMonitorListController />;
  } else if (homeMonitorText) {
    content = <HomeMonitorTextController />;
  } else if (homeConsumerList) {
    content = <HomeConsumerController />;
  } else if (homeConsumerWelcome) {
    content = <HomeConsumerWelcomeController />;
  }

  return (
    <Layout>
      <Sider className='home-sider' theme='light'>
        <div className='logo'>
          <EyeFilled />
          <span>屏幕监测管理平台</span>
        </div>
        {/* <div className='user-info'>
          <span>
            欢迎:{userName}({roleToText(role)})
          </span>
        </div> */}
        <Nav />
      </Sider>
      <Layout className='home-content'>
        {/* <Header className='home-header'>
          <div className='exit-box'>
            <Button
              type='link'
              className='exit-button'
              onClick={() => {
                history.push(ROUTES.INDEX.path);
                localStorage.removeItem(`${LOCAL_STORAGE}-token`);
              }}
            >
              [退出登录]
            </Button>
          </div>
        </Header> */}
        <Content className='content-box'>
          <div className='content-inner-box'>
            <Suspense
              fallback={
                <div>
                  <Empty />
                </div>
              }
            >
              {content}
            </Suspense>
          </div>
        </Content>
        <Footer className='home-footer'>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
