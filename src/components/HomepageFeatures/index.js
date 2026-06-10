import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

const primaryCards = [
  {
    title: <Translate id="homepage.card.mcp.title">MCP Tool</Translate>,
    // eyebrow: <Translate id="homepage.card.mcp.eyebrow">Coming soon!</Translate>,
    description: (
      <Translate id="homepage.card.mcp.desc">
        Connect AI agents directly to Waanx through the official MCP server for trading workflows, market context, and faster tool-driven integration.
      </Translate>
    ),
    tags: [
      <Translate id="homepage.card.mcp.tag.1">AI agents</Translate>,
      <Translate id="homepage.card.mcp.tag.2">MCP</Translate>,
      <Translate id="homepage.card.mcp.tag.3">Tool access</Translate>,
    ],
  },
  {
    title: <Translate id="homepage.card.unified.title">Unified V5 APIs</Translate>,
    description: (
      <Translate id="homepage.card.unified.desc">
        Build on Waanx&apos;s core REST and WebSocket APIs across spot, derivatives, and options with one consistent integration surface.
      </Translate>
    ),
    link: '/v5/guide',
    linkLabel: <Translate id="homepage.card.unified.link">Read the guide</Translate>,
    internal: true,
    tags: [
      <Translate id="homepage.card.unified.tag.1">REST + WebSocket</Translate>,
      <Translate id="homepage.card.unified.tag.2">Spot / Derivatives</Translate>,
      <Translate id="homepage.card.unified.tag.3">Production-ready</Translate>,
    ],
  },
  {
    title: <Translate id="homepage.card.skills.title">Skills</Translate>,
    description: (
      <Translate id="homepage.card.skills.desc">
        Install ready-made Waanx skills that help AI coding agents understand API patterns, common flows, and exchange-specific workflows faster.
      </Translate>
    ),
    tags: [
      <Translate id="homepage.card.skills.tag.1">Agent-ready</Translate>,
      <Translate id="homepage.card.skills.tag.2">Workflow templates</Translate>,
      <Translate id="homepage.card.skills.tag.3">Faster onboarding</Translate>,
    ],
  },
  {
    title: <Translate id="homepage.card.sdks.title">SDKs</Translate>,
    description: (
      <Translate id="homepage.card.sdks.desc">
        Start faster with official SDKs for Python, TypeScript, Java, Go, and .NET when you need typed clients and language-native integration paths.
      </Translate>
    ),
  },
];

const secondaryCards = [];

function Card({title, eyebrow, description, link, linkLabel, external, internal, tags = [], links = [], secondary = false}) {
  const linkProps = link
    ? internal
      ? {to: link}
      : {href: link, ...(external ? {target: '_blank', rel: 'noopener noreferrer'} : {})}
    : null;
  const LinkComponent = internal ? Link : 'a';

  return (
    <article className={clsx(styles.card, secondary && styles.secondaryCard)}>
      <div className={styles.cardAccent} aria-hidden="true" />
      <div className={styles.cardInner}>
        {eyebrow && <div className={styles.cardEyebrow}>{eyebrow}</div>}
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        {tags.length > 0 && (
          <div className={styles.tagRow}>
            {tags.map((tag, idx) => (
              <span key={idx} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
        {links.length > 0 && (
          <div className={styles.linkCluster}>
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.miniLink}>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
      {linkProps && (
        <div className={styles.cardFooter}>
          <LinkComponent {...linkProps} className={styles.cardLink}>
            <span>{linkLabel}</span>
            <span className={styles.cardLinkArrow} aria-hidden="true">
              →
            </span>
          </LinkComponent>
        </div>
      )}
    </article>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionIntro}>
          <div className={styles.sectionEyebrow}>
            <Translate id="homepage.section.eyebrow">Developer Toolkit</Translate>
          </div>
          <h2 className={styles.sectionTitle}>
            <Translate id="homepage.section.title">Build faster with Waanx tools</Translate>
          </h2>
          <p className={styles.sectionDescription}>
            <Translate id="homepage.section.desc">
              Start with the official API and plug in agent tooling that matches your stack.
            </Translate>
          </p>
        </div>

        <div className={styles.primaryGrid}>
          {primaryCards.map((card, idx) => (
            <Card key={idx} {...card} />
          ))}
        </div>

        <div className={styles.secondaryGrid}>
          {secondaryCards.map((card, idx) => (
            <Card key={idx} {...card} secondary />
          ))}
        </div>
      </div>
    </section>
  );
}
