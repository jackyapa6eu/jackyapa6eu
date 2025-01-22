import { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Button, Form, Input, Select, message } from 'antd';
import { VALIDATION_MSG } from '../../const/validationMsgs';
import authStore from '../../stores/authStore';
import { IRegistrationFormValues } from '../../types';

import styles from '../../pages/AuthPage/styles/auth.module.scss';

export const SignUp: FC = () => {
  const [form] = Form.useForm<IRegistrationFormValues>();

  const { signUp } = authStore;

  const handleSubmit = (values: IRegistrationFormValues) => {
    void signUp(values);
  };

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      layout="vertical"
      className={styles.auth__form}
    >
      <Form.Item
        name="email"
        label="email"
        labelAlign="right"
        hasFeedback
        rules={[{ required: true, type: 'email' }]}
      >
        <Input allowClear />
      </Form.Item>

      <Form.Item
        name="password"
        label="пароль"
        hasFeedback
        rules={[{ required: true, min: 6 }]}
      >
        <Input.Password type="password" allowClear />
      </Form.Item>
      <Form.Item
        name="confirm-password"
        label="подтвердите пароль"
        hasFeedback
        rules={[
          { required: true, min: 6 },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error(VALIDATION_MSG.PASSWORD_CONFIRM));
            },
          }),
        ]}
      >
        <Input.Password type="password" allowClear />
      </Form.Item>

      <Form.Item style={{ marginLeft: 'auto' }}>
        <Button type="default" htmlType="submit">
          Регистрация
        </Button>
      </Form.Item>
    </Form>
  );
};
