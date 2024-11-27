'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const JobsPage = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Wind Turbine Technician', company: 'GreenTech Ltd', location: 'New York, USA', description: 'A job for a technician to assist with wind turbine installation and maintenance.' },
    { id: 2, title: 'Solar Panel Engineer', company: 'SolarMax Inc.', location: 'California, USA', description: 'Looking for an experienced engineer to design and install solar power systems.' },
    { id: 3, title: 'Mechanical Design Engineer', company: 'Machinery Works', location: 'Texas, USA', description: 'Designing mechanical systems for industrial applications.' },
  ]);

  return (
    <div className="min-h-screen bg-green-600 flex flex-col justify-between">
      <div className="flex flex-col justify-center items-center py-10">
        <h1 className="text-3xl font-bold mb-4 text-white text-center">Job Listings</h1>
        <p className="mb-8 text-white text-center">Browse through available engineering job opportunities and find the perfect match for your skills.</p>

        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
          <h2 className="text-2xl font-semibold text-black mb-4">Available Engineering Jobs</h2>
          <div className="space-y-4">
            <ul>
              {jobs.map((job) => (
                <li key={job.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-black">{job.title}</h4>
                  <p className="text-sm text-gray-700"><strong>Company:</strong> {job.company}</p>
                  <p className="text-sm text-gray-700"><strong>Location:</strong> {job.location}</p>
                  <p className="text-base text-gray-900">{job.description}</p>
                  <Link href={`/jobs/${job.id}`}>
                    <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
                      View Job
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;





