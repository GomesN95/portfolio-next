import { IProject } from '@/models/project';
import ProjectCard from '../components/project-card/project-card';
import { DESIGNMYBIC, LEFAUBOURG, MONSTERPLAYABLE, VOODOO } from '@/assets/projects-covers';

import styles from './page.module.scss';


export default function Projects() {
  const projects: IProject[] = [
    {
      name: 'Project 1',
      cover: DESIGNMYBIC,
    },
    {
      name: 'Project 2',
      cover: MONSTERPLAYABLE,
    },
    {
      name: 'Project 3',
      cover: VOODOO,
    },
    {
      name: 'Project 3',
      cover: LEFAUBOURG,
    },
    {
      name: 'Project 3',
      cover: DESIGNMYBIC,
    },
    {
      name: 'Project 3',
      cover: DESIGNMYBIC,
    },
    {
      name: 'Project 3',
      cover: DESIGNMYBIC,
    },
    {
      name: 'Project 3',
      cover: DESIGNMYBIC,
    },
    {
      name: 'Project 3',
      cover: DESIGNMYBIC,
    }
  ];
  return (
    <div className={styles.main}>
      <h1>Projects</h1>
      <div className={styles.projects}>
        {
          projects.map((project, index) => (
            <ProjectCard key={index} project={project}></ProjectCard>
          ))
        }  
      </div>
    </div>
  );
}
