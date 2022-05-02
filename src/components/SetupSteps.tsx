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
  versionContent: Step[];
}

export const SetupSteps = () => {
  const [steps, setSteps] = useState<Setup[] | undefined>(undefined);

  useEffect(() => {
    fetch(
      'https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge'
    )
      .then((response) => response.json())
      .then((data: Setup[]) =>
        setSteps(
          //sort the data numerically 1-4
          data
            .sort(
              (a: Setup, b: Setup) =>
                parseInt(a.stepNumber) - parseInt(b.stepNumber)
            )
            // each index of the Setup[] returns a modified Setup object.
            .map(
              (setUp: Setup): Setup => ({
                ...setUp,

                // update the versionContent of each index to only return one object of the most recent version
                versionContent: [
                  setUp.versionContent.reduce(
                    (previousValue: Step, currentValue: Step): Step => {
                      if (
                        previousValue.effectiveDate > currentValue.effectiveDate
                      ) {
                        return previousValue;
                      } else {
                        return currentValue;
                      }
                    }
                  ),
                ],
              })
            )
        )
      );
  }, []);

  return (
    <div className="setup-steps">
      <div>
        <h3>How It Works</h3>
      </div>
      <div className="steps">
        {' '}
        {steps?.map(({ id, stepNumber, versionContent }) => (
          <div className="step" key={id}>
            <p><span className='stepNumber'>0{stepNumber}</span></p>
            <hr />
            <p className='title'><strong>{versionContent[0].title.toUpperCase()}</strong></p>
            <p>{versionContent[0].body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
