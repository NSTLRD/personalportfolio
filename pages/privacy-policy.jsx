import React from 'react';
import Head from 'next/head';

const PrivacyPolicy = () => {
  return (
    <>
        <Head>
            <title>Privacy Policy</title>
            <meta name='description' content='This privacy policy explains how we dont collect, use, and share personal and sensitive user data.' />
           <link rel='icon' href='/starlingprofile.png' />`
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Privacy Policy</h2>
        <br />
        <p>
          This privacy policy explains how user data is handled by the DogsFlappy game application.
        </p>

        <h5 className='text-center underline text-[18px] py-4'>Developer Information</h5>
        <p>
          Developer: Starling Diaz
        </p>
        <p>
          Contact: starlingdiaz70@gmail.com
        </p>
        <p>
          Website: <a href="https://starlingdiaz.com" target="_blank" rel="noreferrer">starlingdiaz.com</a>
        </p>

        <h5 className='text-center underline text-[18px] py-4'>Data Collection and Usage</h5>
        <p>
          The DogsFlappy game does not access or collect any personal or sensitive user data.
        </p>

        <h5 className='text-center underline text-[18px] py-4'>Data Handling Procedures</h5>
        <p>
          Since DogsFlappy does not collect any personal or sensitive user data, there are no data handling procedures required.
        </p>

        <h5 className='text-center underline text-[18px] py-4'>Data Retention and Deletion</h5>
        <p>
          As no user data is collected, there are no data retention or deletion policies required for the DogsFlappy game.
        </p>

        <h5 className='text-center underline text-[18px] py-4'>Privacy Policy Labeling</h5>
        <p>
          This document is labeled as the "Privacy Policy" and is intended to provide clear and comprehensive information about the data practices of the DogsFlappy game application.
        </p>

        <h5 className='text-center underline text-[18px] py-4'>Policy Accessibility</h5>
        <p>
          This privacy policy is available on a live URL, publicly accessible, and not geofenced. It cannot be edited.
        </p>

        <p>
          For any privacy-related queries or issues, please contact us at starlingdiaz70@gmail.com.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
