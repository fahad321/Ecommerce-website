import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> { }

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      className={`${styles.footer__container} ${className}`}
    >
      <Link href='/' className={styles.footer__link}>About Us</Link>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footer_link}
      >
        Powered by{' '}
      </a>
      <Image className={styles.footer__image} src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </footer>
  );
};

export default Footer;
