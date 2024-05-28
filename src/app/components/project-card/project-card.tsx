import { IProject } from '@/models/project';

export default function ProjectCard (props: {project: IProject}) {
  return (
    <div>
      <label>{props.project.name}</label>
    </div>
  );
}