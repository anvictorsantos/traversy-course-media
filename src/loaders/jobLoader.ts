import { LoaderFunction } from 'react-router-dom';
import { Job } from '../types/Job';

export const jobLoader: LoaderFunction = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);

  if (!res.ok) {
    throw new Response('Not Found', { status: 404 });
  }

  const data = (await res.json()) as Job;
  return data;
};
