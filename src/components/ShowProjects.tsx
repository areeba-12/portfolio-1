"use client";

import { useState } from 'react';
import PortfolioCard from '@/components/PortfolioCard';
import { projects } from '../../utils/projectsdb';

interface Project {
  id?: string;
  title: string;
  description: string;
  image: string;
  url?: string;
  livePreview?: string;
  githubLink?: string;
}

function ShowProjects() {
  const [showAll, setShowAll] = useState<boolean>(false);

  // Slice the projects array based on the `showAll` state
  const displayedProjects: Project[] = showAll ? projects : projects.slice(0, 6);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {displayedProjects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>

      {/* Show 'Show More' button only if there are more than 6 projects */}
      {projects.length > 6 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-grad"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </>
  );
}

export default ShowProjects;
