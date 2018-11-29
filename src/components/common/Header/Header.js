import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const Header = ({postId, logged, userLogged, userId, onRemove, onUserLogUp, onUserLogIn}) => (
    <header className={cx('header')}>
        <div className={cx('header-content')}>
            <div className={cx('brand')}>
                <Link to="/">BIBS</Link>
            </div>
            {
                !logged && <div className={cx('right')}>
                { !userLogged &&
                    <Button key="userLogup" theme="outline" onClick={onUserLogUp}>회원가입</Button>
                }
                    <Button key="userLogin" theme="outline" onClick={onUserLogIn}>
                        {userLogged ? '로그아웃' : '로그인'}
                    </Button>
                </div>
            }
            { logged && <div className={cx('right')}>
                {
                    // flex를 유지하기위해 배열 형태로 렌더링
                    postId && [
                        <Button key="edit" theme="outline" to={`/editor?id=${postId}`}>수정</Button>,
                        <Button key="remove" theme="outline" onClick={onRemove}>삭제</Button>
                    ]
                }
                <Button theme="outline" to="/editor">새 포스트</Button>
            </div> }
        </div>
    </header>
);

export default Header;