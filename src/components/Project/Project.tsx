import './Project.css';
import React from 'react';

interface Iproject {
  title: string,
  description: string,
  imgLink: string,
}

interface IProps {
  data: Iproject;
}

const Project: React.FC<IProps> = ({ data }) => {
  return (
    <div className="project">
      <h3 className="project__title">{data.title}</h3>
      <p className="project__description">{data.description}</p>
      <img className="project__image" alt="project" src={data.imgLink}/>
  </div>
  )
}

export default Project;