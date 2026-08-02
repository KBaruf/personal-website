import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../../data/content';

const Portfolio = () => {
  return (
    <ul className='portfolio_grid'>
      {projects.map((project, i) => (
        <li key={project.title} data-aos='fade-up' data-aos-duration='800' data-aos-delay={Math.min((i % 3) * 80, 160)}>
          <article className='project_card'>
            <a className='media' href={project.liveUrl} target='_blank' rel='noreferrer' tabIndex={-1} aria-hidden='true'>
              <img src={project.image} alt='' width='1000' height='1000' loading='lazy' decoding='async' />
            </a>

            <div className='body'>
              <h4 className='title'>
                <a href={project.liveUrl} target='_blank' rel='noreferrer'>
                  {project.title}
                </a>
              </h4>
              <p className='desc'>{project.description}</p>

              <ul className='tag_list'>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <div className='actions'>
                <a href={project.liveUrl} target='_blank' rel='noreferrer' className='action primary'>
                  <FiExternalLink aria-hidden='true' focusable='false' />
                  Live demo
                  <span className='sr-only'>{` of ${project.title}`}</span>
                </a>
                <a href={project.codeUrl} target='_blank' rel='noreferrer' className='action'>
                  <FiGithub aria-hidden='true' focusable='false' />
                  Code
                  <span className='sr-only'>{` for ${project.title}`}</span>
                </a>
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default Portfolio;
