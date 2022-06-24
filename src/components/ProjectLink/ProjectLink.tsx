import './ProjectLink.css';
import React from 'react';
import { IProjectLinkProps } from '../../utils/interfaces';
import gitIcon from '../../images/contacts__github-icon.png';


const ProjectLink: React.FC<IProjectLinkProps> = ({ data }) => {
  return (
    <a className="project-link" target="_blank" href={data.url} rel="noreferrer">
      {data.type === 'git' && <img alt="иконка гитхаб" className="project-link__icon" src={gitIcon}/>}
      {data.urlText}
    </a>
  )
}

export default ProjectLink;
