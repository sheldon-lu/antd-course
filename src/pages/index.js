import React from 'react';
import { Button } from 'antd';
import router from 'umi/router';
import styles from './index.css';

export default function () {
  const testClick = () => {
    router.push('/testPage');
  };
  const btnClick = () => {
    router.push('/dataTransfer');
  };
  return (
    <React.Fragment>
      <div className={styles.welcome} />
      <div className={styles.btns}>
        <Button type="primary" onClick={testClick} style={{ marginRight: 10 }}>
        传递数据页面
        </Button>
        <Button type="primary" onClick={btnClick}>数据流页面</Button>
      </div>
    </React.Fragment>
  );
}
