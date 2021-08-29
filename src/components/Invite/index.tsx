import React, { useState } from 'react';
import './index.sass';
import queryInviteInfo from '../../services/queryInviteInfo';
import buttonStatus from '../../configs/buttonStatus';
import Input from '../Input';
import { validateFullName, validateEmail } from '../../utils/validator';

type Status = 'init' | 'loading' | 'success' | 'failed';
interface UserInfo {
  fullName: string;
  email: string;
  confirmEmail: string;
}

function Invite(props: {
  onSuccess: Function,
}) {
  const { onSuccess } = props;
  const [status, setStatus] = useState<Status>('init');
  const [error, setError] = useState<string>('');
  const [userInfo, setUserInfo] = useState<UserInfo>({
    fullName: '',
    email: '',
    confirmEmail: '',
  });

  const handleInput = (name: string, value: string) => {
    setError('');
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleClick = async () => {
    if (status === 'loading') {
      return;
    }

    if (status === 'success') {
      onSuccess();
      return;
    }

    if (!validateFullName(userInfo.fullName)) {
      setError('Full name needs be at least 3 characters long');
      return;
    }

    if (!validateEmail(userInfo.email)) {
      setError('Email address is invalid');
      return;
    }

    if (userInfo.email !== userInfo.confirmEmail) {
      setError('Confirm Email needs to match Email');
      return;
    }

    setStatus('loading');

    const res = await queryInviteInfo({
      name: userInfo.fullName,
      email: userInfo.email,
    }).catch((e) => {
      setError(e);
      setStatus('failed');
    });

    if (res) {
      setStatus('success');
    }
  };

  const handleStopPropagation = (e: React.FormEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="invite"
      onClick={handleStopPropagation}
    >
      <div className="invite-title">
        {status === 'success' ? 'All done' : 'Request an invite'}
      </div>
      {
        status === 'success'
          ? (
            <div className="invite-tips">You will be one of the first to experience when we launch.</div>
          )
          : (
            <div className="invite-form">
              <Input
                className="invite-form-input"
                inputClassName="invite-form-input-item"
                name="fullName"
                value={userInfo.fullName}
                placeholder="Full name"
                onInput={handleInput}
              />
              <Input
                className="invite-form-input"
                inputClassName="invite-form-input-item"
                name="email"
                value={userInfo.email}
                placeholder="Email"
                onInput={handleInput}
              />
              <Input
                className="invite-form-input"
                inputClassName="invite-form-input-item"
                name="confirmEmail"
                value={userInfo.confirmEmail}
                placeholder="Confirm email"
                onInput={handleInput}
              />
            </div>
          )
      }
      {
        error && (
          <div className="invite-error">{error}</div>
        )
      }
      <button
        className={`invite-button invite-button-${status}`}
        type="submit"
        disabled={status === 'loading'}
        onClick={handleClick}
      >
        {buttonStatus[status]}
      </button>
    </div>
  );
}

export default Invite;
