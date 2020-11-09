import React from 'react';

// 样式
import { Input, Button, Form } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '@/style/login.styl';

// localStorage
// import { LOCAL_STORAGE } from '@/constants/app-constants';

// import { HOME_INDEX, HOME_PASSWORD } from '@/constants/route-constants';
// import { useHistory } from 'react-router-dom';

// redux
import { useSelector, useDispatch } from 'react-redux';
import userAction from '@/redux/action/user';

// 加密
import md5 from 'md5';

export default (props) => {
  // const token = localStorage.getItem(`${LOCAL_STORAGE}-token`),
  const { loginLoading } = useSelector((state) => state.userStore),
    dispatch = useDispatch();

  const onFinish = (values) => {
    values.password = md5(values.password);
    // 使用redux-saga
    dispatch(userAction.asyncSetUser(values));
    // if (token) {
    //   message.warn('检测到有其他账号登录,其他账号将下线');
    // }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item
        name='userName'
        rules={[{ required: true, message: '请输入账号!' }]}
      >
        <Input
          prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder='账号'
          size='large'
        />
      </Form.Item>
      <Form.Item
        name='password'
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input.Password
          prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder='密码'
          size='large'
        />
      </Form.Item>
      <Form.Item>
        <div className='login-button-box'>
          <Button
            size='large'
            type='primary'
            className='button'
            htmlType='submit'
            loading={loginLoading}
          >
            登录
          </Button>
        </div>
      </Form.Item>
      <Form.Item>
        <div className='form-text'>欢迎使用屏幕监测管理平台</div>
      </Form.Item>
    </Form>
  );
};
