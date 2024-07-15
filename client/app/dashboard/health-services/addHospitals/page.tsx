import { getUser, signOut } from "@workos-inc/authkit-nextjs";
import HospitalForm from './HospitalForm';
import styles from './Page.module.css';

export default async function Page() {
  const { user } = await getUser();
  await getUser({ ensureSignedIn: true });

  return (
    <div>
      <div className={styles.navbar}>
        <span>Welcome, {user.email}</span>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button type="submit" className={styles.signOutButton}>Sign Out</button>
        </form>
      </div>

      <HospitalForm />
    </div>
  );
}
