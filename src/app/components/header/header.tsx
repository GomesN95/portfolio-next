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
              className={`link ${pathname === '/education' ? 'active' : ''}`}
              href="/education"
            >
            Education
            </Link>
          </li>
          <li>
            <Link
              className={`link ${pathname === '/experiences' ? 'active' : ''}`}
              href="/experiences"
            >
            Experiences
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
          <li>
            <Link
              className={`link ${pathname === '/contact' ? 'active' : ''}`}
              href="/contact"
            >
            Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
