import { FC } from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import authStore from '../../stores/authStore';
import { IRegistrationFormValues } from '../../types';

import styles from '../../pages/AuthPage/styles/auth.module.scss';

interface ISignInProps {
  from?: string | null;
}

export const SignIn: FC<ISignInProps> = ({ from }) => {
  const [form] = Form.useForm<IRegistrationFormValues>();
  const navigate = useNavigate();
  const { signIn } = authStore;

  const handleSubmit = async (values: IRegistrationFormValues) => {
    try {
      await signIn(values);
      navigate(from || '/', { state: { from: null } });
    } catch (e) {
      /* empty */
    }
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

      <Form.Item style={{ marginLeft: 'auto' }}>
        <Button type="default" htmlType="submit">
          Вход
        </Button>
      </Form.Item>
    </Form>
  );
};
