import Project from '../Project/Project';
import './Portfolio.css';

function Portfolio() {
  const projects = [
    {
      title: 'Project title',
      description: 'Project description',
      imgLink: 'http://joxi.ru/Vm6pPxvURg4KzA.jpg'
    },
    {
      title: 'Project title',
      description: 'Project description',
      imgLink: 'http://joxi.ru/Vm6pPxvURg4KzA.jpg'
    },
    {
      title: 'Project title',
      description: 'Project description',
      imgLink: 'http://joxi.ru/Vm6pPxvURg4KzA.jpg'
    },
    {
      title: 'Project title',
      description: 'Project description',
      imgLink: 'http://joxi.ru/Vm6pPxvURg4KzA.jpg'
    },
    {
      title: 'Project title',
      description: 'Project description',
      imgLink: 'http://joxi.ru/Vm6pPxvURg4KzA.jpg'
    },
    {
      title: 'Project title',
      description: 'Project description',
      imgLink: 'http://joxi.ru/Vm6pPxvURg4KzA.jpg'
    }
  ]
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__items-container">
        <ul className="portfolio__items-list">
          {projects.map((el, index) => (
            <li className="portfolio__list-item" key={index}>
              <Project data={el}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Portfolio;