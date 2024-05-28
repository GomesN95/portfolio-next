import { IProject } from '@/models/project';

import ProjectCard from '../components/project-card/project-card';

import styles from './page.module.scss';


export default function Projects() {
  const projects: IProject[] = [
    {
      name: 'Project 1'
    },
    {
      name: 'Project 2'
    },
    {
      name: 'Project 3'
    }
  ];
  return (
    <div className={styles.main}>
      <h1>Projects</h1>
      {
        projects.map((project, index) => (
          <ProjectCard key={index} project={project}></ProjectCard>
        ))
      }
    </div>
  );
}
