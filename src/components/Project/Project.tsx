import './Project.css';
import React from 'react';
import { useHistory } from "react-router-dom";
import { IProps } from '../utils/interfaces'



const Project: React.FC<IProps> = ({ data }) => {
  const history = useHistory();
  function openProjectPage() {
    history.push(`portfolio/${data.name}`)
  }
  return (
    <div className="project" onClick={openProjectPage}>
      <h3 className="project__title">{data.title}</h3>
      <p className="project__description">{data.description}</p>
      <img className="project__image" alt="project" src={data.imgLink}/>
  </div>
  )
}

export default Project;