import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Build Apps",
    description: (
      <>
        Extend Tribe's functionality by creating and publishing apps to Tribe
        marketplace.
      </>
    ),
  },
  {
    title: "Build Integrations",
    description: (
      <>
        Create one-way or two-way integrations with other tools and products
        such as your CRM or user authentication platform.
      </>
    ),
  },
  {
    title: "Automate Tasks",
    description: (
      <>
        Automate tasks such as adding members to specific spaces or inviting
        members by creating private apps.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
