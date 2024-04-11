'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './header.module.scss';

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
            Home
            </Link>
          </li>
          <li>
            <Link
              className={`link ${pathname === '/contact' ? 'active' : ''}`}
              href="/contact"
            >
            Contact
            </Link>
          </li>
          <li>
            <Link
              className={`link ${pathname === '/projects' ? 'active' : ''}`}
              href="/projects"
            >
            Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
