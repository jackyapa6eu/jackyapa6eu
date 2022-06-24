import Project from '../Project/Project';
import { portfolioItems } from '../../utils/portfolioItems.js'
import './Portfolio.css';

function Portfolio() {

  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__items-container">
        <ul className="portfolio__items-list">
          {portfolioItems.map((el, index) => (
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
