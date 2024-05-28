import Image from 'next/image';

import { IProject } from '@/models/project';

import styles from './project-card.module.scss';

export default function ProjectCard(props: { project: IProject }) {

  return (
    <div className={styles.main}>
      <div className={styles.inner}>
        <Image src={props.project.cover} alt={props.project.name} />
        <label>{props.project.name}</label>
      </div>
    </div>
  );
}
