import { getUser, signOut } from "@workos-inc/authkit-nextjs";
import '../health-services/ServiceButton.css';
import Link from "next/link";
import img from './health2.png'

export default async function Page() {
  const { user } = await getUser();
  await getUser({ ensureSignedIn: true });

  return (
    <div>

      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <div className="navbar"
          style={{
            border: 'none',
            position: 'relative',
            padding: '7px',
            marginLeft: '80%',
            
          }}
        >
        <button type="submit"
        style={{
          border: 'none',
          position: 'relative',
          padding: '7px',
          paddingLeft: '70px',
          paddingRight: '70px',
          marginRight: '30px',
          cursor: 'pointer',
          backgroundColor: '#84fab0',
          borderRadius: '40px',
          transition: 'background 0.5s, background-size 0.5s',
          backgroundSize: '200% auto',
          backgroundImage: 'linear-gradient(to right, #84fab0 0%, #8fd3f4 51%, #84fab0 100%)',
          textTransform: 'uppercase',
          textAlign: 'center',
          color: 'white',
          boxShadow: '0 0 20px #eee',
        }}>Sign out</button>
        </div>
        {/* <p>Welcome back {user?.firstName && `, ${user?.firstName}`}</p> */}
      </form>


      <div className="service-buttons">
        <div className="row">
          <div className="container">
            <div className="heading">
              <h2>Add Hospitals</h2>
            </div>
            <div className="image">
              <img src={img.src} alt="Healthcare" />
            </div>
            <div className="buttons">
              <Link href="http://localhost:3000/dashboard/health-services/addHospitals" className="btn">Visit</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
