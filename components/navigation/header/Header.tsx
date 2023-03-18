import Link from 'next/link';
import AuthButton from '../../buttons/auth/AuthButton';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-between ${className}`}
    >
      <div className="space-x-5 m-5">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/card" className="hover:underline">
          Card
        </Link>
        <Link href="/users" className="hover:underline">
          Users
        </Link>
        <Link
          href="https://mail.google.com/mail/u/0/?tab=rm#inbox"
          className="hover:underline  ">
          Gmail
        </Link>
      </div>
      <div className="space-x-5 m-5">
        <Link href="/" className="hover:underline  ">
          Gmail
        </Link>
        <Link href="/" className="hover:underline sm:inline">
          Images
        </Link>
        <AuthButton />
      </div>
    </header>
  );
};

export default Header;
