import './ProjectPage.css';
import { useRouteMatch, useHistory } from "react-router-dom";
import { portfolioItems } from '../../utils/portfolioItems';
import { FC, useEffect, useState } from 'react';
import { Iproject, ProjectPageMatchParams } from '../../utils/interfaces'
import ProjectLink from '../ProjectLink/ProjectLink';


const ProjectPage: FC = () => {
  const routeMatch = useRouteMatch<ProjectPageMatchParams>("/portfolio/:name");
  const history = useHistory();
  const [project, setProject] = useState<Iproject>({} as Iproject);

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getData() {
    const currItem = portfolioItems.find(el => el.name === routeMatch?.params.name);
    currItem ? setProject(currItem) : history.push('/');
  }

  function goBack() {
    history.push('/portfolio');
  }
  return (
    <div className="project-page">
      <h3 className="project-page__title">{project.title}</h3>
      <button className="project-page__bwrd-button" type="button" onClick={goBack}>{`< назад`}</button>
      <img className="project-page__image" src={project.imgLink} alt={`скриншот ${project.description}`}/>
      <p className="project-page__description">
        {project.description}
      </p>
      {project.texts?.map((text, index) =>
        <p className="project-page__text" key={index}>{text}</p>
      )}
      {project.links?.map((link, index) =>
        <ProjectLink data={link} key={index}/>
      )}
    </div>
  )
}

export default ProjectPage;
