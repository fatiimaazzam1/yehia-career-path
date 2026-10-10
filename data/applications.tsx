
export type Application = {
  id: string;
  opportunityTitle: string;
  company: string;
  status: "Applied" | "Under review";
 //this is a typescript union type that restricts the status property to only two possible string values: "Applied" or "Under review". This ensures that any application object can only have one of these two statuses, providing type safety and preventing invalid status values from being assigned.
};

export const applications: Application[] = [
  {
    id: "1",
    opportunityTitle: "Junior Front-End Developer",
    company: "Cedar Digital",
    status: "Applied",
  },
  {
    id: "2",
    opportunityTitle: "Graduate Software Engineer",
    company: "Code Harbor",
    status: "Under review",
  },
];
