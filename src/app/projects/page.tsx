import { IProject } from '@/models/project';
import ProjectCard from '../components/project-card/project-card';
import { DESIGNMYBIC, LEFAUBOURG, MONSTERPLAYABLE, VOODOO } from '@/assets/projects-covers';

import styles from './page.module.scss';


export default function Projects() {
  const projects: IProject[] = [
    {
      name: 'Design My BIC',
      cover: DESIGNMYBIC,
    },
    {
      name: 'Monster Playable',
      cover: MONSTERPLAYABLE,
    },
    {
      name: 'GameUtils',
      cover: DESIGNMYBIC,
    },
    {
      name: 'YSO Network',
      cover: DESIGNMYBIC,
    },
    {
      name: 'Starliva',
      cover: DESIGNMYBIC,
    },
    {
      name: 'Voodoo Blog',
      cover: VOODOO,
    },
    {
      name: 'Le Faubourg',
      cover: LEFAUBOURG,
    },
    {
      name: 'InoVoiz',
      cover: DESIGNMYBIC,
    },
    {
      name: 'Votre garage moto',
      cover: DESIGNMYBIC,
    },
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
