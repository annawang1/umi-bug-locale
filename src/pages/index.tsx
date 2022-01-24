import styles from './index.less';
import { FormattedMessage, SelectLang } from 'umi';;


export default function IndexPage() {
  return (
    <div>
      <SelectLang/>
      <h1 className={styles.title}><FormattedMessage id="navbar.lang" /></h1>
    </div>
  );
}
