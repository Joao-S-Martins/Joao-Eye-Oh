import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Mountain from '@site/static/img/undraw_docusaurus_mountain.svg';
import Tree from '@site/static/img/undraw_docusaurus_tree.svg';
import ReactIcon from '@site/static/img/undraw_docusaurus_react.svg';
import Translate, { translate } from '@docusaurus/Translate';
import Heading from '@theme/Heading';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: Mountain,
    description: (
      <>
        <Translate
          id="homepage.features.easyToUse"
          description="The homepage features easy to use">
          Docusaurus was designed from the ground up to be easily installed and
          used to get your website up and running quickly.
        </Translate>
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: Tree,
    description: (
      <>
        <Translate
          id="homepage.features.focusOnWhatMatters"
          description="The homepage features focus on what matters 2"
          values={{
            code: translate({
              id: 'homepage.features.focusOnWhatMatters.code',
              message: 'docs',
              description: 'The name of the docs folder'
            })
          }}>
          { 'Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and move your docs into the {code} directory.' }
        </Translate>
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: ReactIcon,
    description: (
      <>
        <Translate
          id="homepage.features.poweredByReact"
          description="The homepage features powered by React">
          Extend or customize your website layout by reusing React. Docusaurus can
          be extended while reusing the same header and footer.
        </Translate>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
