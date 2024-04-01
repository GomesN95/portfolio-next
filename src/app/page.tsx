import bigPicture from '@/assets/floral-background.jpeg';
import profilePicture from '@/assets/profile-picture.jpg';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.big_picture} style={{backgroundImage: `url(${bigPicture.src})`}} />
      <div className={styles.profil_picture}>
        <div className={styles.name}>Gomes Nicolas</div>
        <div className={styles.picture} style={{backgroundImage: `url(${profilePicture.src})`}} />
        <div className={styles.job}>Full Stack developer</div>
      </div>
    </main>
  );
}
