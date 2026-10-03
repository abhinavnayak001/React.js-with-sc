import React from "react";
import Card from "./components/card";

const App = () => {
  const jobs = [
    {
      brandlogo:
        "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/google.svg",
      name: "Google",
      datePosted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 45,
      location: "Mumbai",
    },
    {
      brandlogo: "https://www.microsoft.com/favicon.ico",
      name: "Microsoft",
      datePosted: "4 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 42,
      location: "Bengaluru",
    },
    {
      brandlogo: "https://www.amazon.com/favicon.ico",
      name: "Amazon",
      datePosted: "1 day ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 35,
      location: "Hyderabad",
    },
    {
      brandlogo:
        "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/meta.svg",
      name: "Meta",
      datePosted: "3 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 48,
      location: "Bengaluru",
    },
    {
      brandlogo:
        "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/apple.svg",
      name: "Apple",
      datePosted: "5 days ago",
      post: "UI/UX Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 46,
      location: "Mumbai",
    },
    {
      brandlogo:
        "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/netflix.svg",
      name: "Netflix",
      datePosted: "6 days ago",
      post: "Product Designer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: 52,
      location: "Mumbai",
    },
    {
      brandlogo:
        "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/nvidia.svg",
      name: "NVIDIA",
      datePosted: "2 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 50,
      location: "Pune",
    },
    {
      brandlogo: "https://www.adobe.com/favicon.ico",
      name: "Adobe",
      datePosted: "7 days ago",
      post: "Product Designer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 32,
      location: "Bengaluru",
    },
    {
      brandlogo: "https://www.oracle.com/favicon.ico",
      name: "Oracle",
      datePosted: "4 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 38,
      location: "Hyderabad",
    },
    {
      brandlogo: "https://www.salesforce.com/favicon.ico",
      name: "Salesforce",
      datePosted: "8 days ago",
      post: "Data Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 44,
      location: "Bengaluru",
    },
  ];

  console.log(jobs);

  return (
    <div className="parent">
      {jobs.map((elem, index) => {
        return (
          <div key={index}>
            <Card
              company={elem.name}
              post={elem.post}
              pay={elem.pay}
              datePosted={elem.datePosted}
              brandlogo={elem.brandlogo}
              location={elem.location}
              tag1={elem.tag1}
              tag2={elem.tag2}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
