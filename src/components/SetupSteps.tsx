import { useEffect, useState } from 'react';
import './SetupSteps.css';

interface Step {
  title: string;
  body: string;
  effectiveDate: string;
}

interface Setup {
  id: string;
  stepNumber: string;
  versionedContent: Step[];
}

export const SetupSteps = () => {
  const [steps, setSteps] = useState<Setup[]>([]);

  useEffect(() => {
    fetch(
      'https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge'
    )
      .then((response) => response.json())
      .then((data: []) =>
        setSteps(
          //sort the data numerically 1-4
          data.sort(
            (a: Setup, b: Setup) =>
              parseInt(a.stepNumber) - parseInt(b.stepNumber)
          )
        )
      );

    setSteps((previousState): Setup[] => {
      // iterate through the array of stepUps
       previousState?.map((step): Setup[] => {
        if (step?.versionedContent?.length ?? 0 > 1) {
          // iterate through the array of versionedContent for steps
          step?.versionedContent?.filter((version, index, array): Step[] => {
            // compare the ISO date of each object in the array to each other
            version?.effectiveDate ?? '' > array[index + 1].effectiveDate
            // return the latest version
          });
        }
      });
    }
    );
  }, []);

  return (
    <div className="setup-steps">
      <div>
        <h3>How It Works</h3>
      </div>
      {steps?.map(({ id, stepNumber }) => (
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
