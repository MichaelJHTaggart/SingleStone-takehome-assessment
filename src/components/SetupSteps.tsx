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
  const [version, setVersion] = useState<Setup[]>([]);

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

  console.log(
    [
      {
        id: 'd11b10ba-1cd8-48f8-93eb-454b716fd5a0',
        stepNumber: '2',
        versionContent: [
          {
            title: 'Request A Delivery',
            body: 'Once you’re ready for your first delivery, all it takes is a click to get your shipment on the way.',
            effectiveDate: '2019-05-04T03:04:05.000Z',
          },
          {
            title: 'We Deliver',
            body: 'Once you’re ready for your first delivery, all it takes is a click to get your shipment on the way.',
            effectiveDate: '2019-04-04T05:04:05.000Z',
          },
        ],
      },
      {
        id: 'dce2554e-00dc-45c1-99c1-93a554d7eba7',
        stepNumber: '4',
        versionContent: [
          {
            title: 'Request Another Delivery',
            body: 'Get your next gaming fix by updating your profile then initiating your next shipment.',
            effectiveDate: '2019-05-20T03:04:05.000Z',
          },
        ],
      },
      {
        id: '422e6b50-9c5a-43d5-90cb-839f4678cb75',
        stepNumber: '3',
        versionContent: [
          {
            title: 'Keep What You Like',
            body: 'Tell us “no” by returning any unwanted products in the enclosed packaging.',
            effectiveDate: '2019-04-04T03:04:05.000Z',
          },
          {
            title: 'Keep What You Want',
            body: 'Tell us “no thanks” by returning any unwanted products in the enclosed packaging.',
            effectiveDate: '2019-04-04T05:04:05.000Z',
          },
          {
            title: 'Keep Everything',
            body: 'Tell us “no thanks” by returning any unwanted products in the enclosed packaging.',
            effectiveDate: '2019-02-04T08:04:05.000Z',
          },
        ],
      },
      {
        id: 'd9a439d0-8dbf-4bab-8e08-626f8194a075',
        stepNumber: '1',
        versionContent: [
          {
            title: 'Fill Out a Profile',
            body: 'We only want you to get games and gear that you’ll love, so we’ll ask for your preferences up front.',
            effectiveDate: '2019-05-20T03:04:05.000Z',
          },
        ],
      },
    ].forEach((step: <Setup>) => {
      if (step?.versionedContent?.length ?? 0 > 1) {
        // iterate through the array of versionedContent for steps
        step?.versionedContent?.filter(
          (version: <Step>, index: number, array: <Step>[]) => {
            // compare the ISO date of each object in the array to each other
            return version?.effectiveDate ?? '' > array[index + 1];
            // return the latest version
          }
        );
      }
    })
  );

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
