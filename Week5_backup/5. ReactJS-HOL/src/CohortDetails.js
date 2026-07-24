import React from 'react';
import styles from './CohortDetails.module.css';   // Step 8: import CSS Module

// Sample data (replace with actual props if needed)
const CohortDetails = ({ cohort }) => {
  // Step 10: conditional style for h3 based on status
  const statusColor = cohort.status === 'ongoing' ? 'green' : 'blue';

  return (
    // Step 9: apply box class
    <div className={styles.box}>
      <h3 style={{ color: statusColor }}>{cohort.name}</h3>
      <dl>
        <dt>Started On</dt>
        <dd>{cohort.startDate}</dd>
        <dt>Current Status</dt>
        <dd>{cohort.status}</dd>
        <dt>Coach</dt>
        <dd>{cohort.coach}</dd>
        <dt>Trainer</dt>
        <dd>{cohort.trainer}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;