import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import AllUsers from "../components/users/users";
import { NextPageWithLayout } from './page';

const Users: NextPageWithLayout = () =>  {
 
  return (
    <>
    <AllUsers/>
    </>
  );
};

export default Users;


Users.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};