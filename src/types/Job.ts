export interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  type: string;
  salary: string;
  company: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  };
}
