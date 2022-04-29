import { useEffect, useState } from 'react';
import './SetupSteps.css';

interface Step {
  title: string;
  body: string;
  effectiveDate: string;
}

interface SetupSteps {
  id: string;
  stepNumber: string;
  versionedContent: Step[];
}

export const SetupSteps = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    fetch(
      'https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge'
    )
      .then((response) => response.json())
      .then((data: []) =>
        setSteps(
          data.sort(
            (a: SetupSteps, b: SetupSteps) =>
              parseInt(a.stepNumber) - parseInt(b.stepNumber)
          )
        )
      );
  }, []);

  const filterContent = (setUpSteps: Partial<SetupSteps[]>) => {
    // sort by effectiveDate property
    console.log(
     steps.map((step: SetupSteps) => {
       step.versionedContent.sort((a: Step, b: Step) => {
         return a.effectiveDate > b.effectiveDate ? 1 : -1;
       });
     })
   );
    // return an array of objects
  };
  

  return (
    <div className="setup-steps">
      <div>
        <h3>How It Works</h3>
      </div>
      {steps.map(({ id, stepNumber, versionContent }) => (
        <div key={id}>
          <p>{id}</p>
          <span></span>
          <p>{stepNumber}</p>
          {/* <p>{versionContent[0]}</p> */}
        </div>
      ))}
    </div>
  );
};
