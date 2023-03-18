import Link from 'next/link';
import AuthButton from '../../buttons/auth/AuthButton';
import styles from './Header.module.css';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`${styles.header__container} ${className}`}
    >
      <div className={styles.header__left}>
        <Link href="/" className={styles.header__link}>Home</Link>
        <Link href="/card" className={styles.header__link}>Card</Link>
        <Link href="/users" className={styles.header__link}>Users</Link>
        <Link href="/googlesearch" className={styles.header__link}>Search</Link>
      </div>
      <div className={styles.header__right}>
        <Link href="https://mail.google.com/mail" className={styles.header__link}>Gmail</Link>
        <AuthButton />
      </div>
    </header>
  );
};

export default Header;
