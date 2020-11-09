import React from 'react';

// 路由
import {
  HOME_MONITOR,
  INDEX,
  HOME_ACCOUNT,
  HOME_CONSUMER_WELCOME,
} from '@/constants/route-constants';
import { useHistory } from 'react-router-dom';

// 请求
import proxyFetch from '@/util/request';
import { SAVE_PASSWORD } from '@/constants/api-constants';

// redux
import { useSelector, useDispatch } from 'react-redux';
import userAction from '@/redux/action/user';

// 工具
import md5 from 'md5';

// localStorage
import { LOCAL_STORAGE } from '@/constants/app-constants';

// 样式
import { Button, Input, Alert, Form } from 'antd';
import '@/style/home/public/password-modify.styl';

export default (props) => {
  const [form] = Form.useForm();
  const { userName, role } = useSelector((state) => state.userStore);
  const token = localStorage.getItem(`${LOCAL_STORAGE}-token`),
    history = useHistory(),
    dispatch = useDispatch();

  const onFinish = async (values) => {
    if (!token) {
      history.push(INDEX.path);
    }

    delete values.confirmPassword;

    const res = await proxyFetch(SAVE_PASSWORD, values);

    if (res) {
      // 处理加密密码
      values.userName = userName;
      values.password = md5(values.newPassword);
      // 使用redux-saga
      if (userName && values.password) {
        dispatch(userAction.asyncSetUser(values));
      }
      if (role === 1) {
        history.push(HOME_ACCOUNT.path);
      } else if (role === 5) {
        history.push(HOME_MONITOR.path);
      } else {
        history.push(HOME_CONSUMER_WELCOME.path);
      }
    }
  };

  return (
    <div className='password-modify-box'>
      <p className='title-box'>
        <span>密码修改</span>
      </p>
      <div className='password-modify-content-box'>
        <div className='content-left-box'>
          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            form={form}
          >
            <Form.Item
              label='原密码'
              name='oldPassword'
              hasFeedback
              rules={[
                {
                  required: true,
                  message: '请输入原密码！',
                },
                {
                  pattern: /^\S{6,12}$/,
                  message: '密码需要6-12位',
                },
              ]}
            >
              <Input.Password placeholder='请输入原密码' />
            </Form.Item>
            <Form.Item
              label='新密码'
              hasFeedback
              name='newPassword'
              rules={[
                {
                  required: true,
                  message: '请输入新密码！',
                },
                {
                  pattern: /^\S{6,12}$/,
                  message: '密码需要6-12位',
                },
              ]}
            >
              <Input.Password placeholder='请输入新密码' />
            </Form.Item>
            <Form.Item
              label='确认新密码'
              hasFeedback
              name='confirmPassword'
              rules={[
                {
                  required: true,
                  message: '请再次输入新密码！',
                },
                {
                  pattern: /^\S{6,12}$/,
                  message: '密码需要6-12位',
                },
                {
                  validator: (rule, value, callback) => {
                    console.log(value, form.getFieldValue('newPassword'));
                    if (value && value !== form.getFieldValue('newPassword')) {
                      callback('新密码和确认密码要一致！');
                    } else {
                      callback();
                    }
                  },
                },
              ]}
            >
              <Input.Password placeholder='请再次输入新密码' />
            </Form.Item>

            {/* 保存按钮 */}
            <Form.Item wrapperCol={{ offset: 6 }}>
              <Button
                type='primary'
                htmlType='submit'
                className='button'
                size='large'
              >
                保存
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className='content-right-box'>
          <Alert
            message='密码修改注意事项'
            description='用户首次登陆时,为保证账户安全使用,须修改原始密码,方可开始填写,如忘记密码,可联系超级管理员重置为初始密码'
            type='info'
            showIcon
          />
        </div>
      </div>
    </div>
  );
};
