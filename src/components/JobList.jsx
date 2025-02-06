import PropTypes from 'prop-types';

import jobs from '../jobs.json';
import Job from './Job';

const JobList = ({ isHome = false }) => {
  const jobsList = isHome ? jobs.slice(0, 4) : jobs;

  return (
    <section className="bg-blue-50 px-4 pt-6 pb-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'All Jobs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobsList.map((job) => (
            <Job key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

JobList.propTypes = {
  isHome: PropTypes.bool
};

export default JobList;
