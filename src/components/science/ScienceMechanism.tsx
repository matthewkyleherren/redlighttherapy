'use client';

import { ATPDiagram } from './ATPDiagram';

export function ScienceMechanism() {
  return (
    <section id="mechanism" className="section scienceMechanismSection">
      <div className="aboutOriginGrid scienceMechanismGrid">
        <div className="aboutOriginText">
          <p className="label">The Mechanism</p>
          <h2 className="subtitle">
            It starts with an enzyme you&apos;ve{' '}
            <span className="subtitleItalic">never heard of.</span>
          </h2>
          <div className="aboutOriginBody">
            <p>
              Deep inside every cell in your body, there is a protein complex called cytochrome
              c oxidase — CCO, if you want to sound like you work at CERN.
            </p>
            <p>
              CCO is the final step in your mitochondria&apos;s electron transport chain: the machine
              that converts oxygen into the cellular energy your body runs on, called ATP.
            </p>
            <p>
              Here is the interesting part: CCO has a direct optical response to specific
              wavelengths of red and near-infrared light. When those wavelengths land on it, the
              enzyme absorbs the photons and changes its electrochemical state. The result:
              mitochondria produce more ATP, cells become more energetically active, and a
              cascade of secondary effects unfolds — reduced oxidative stress, increased nitric
              oxide, activation of tissue-repair pathways.
            </p>
            <p>
              This is not a theory. It has been replicated in peer-reviewed research for over
              fifty years.
            </p>
          </div>
        </div>
        <div className="scienceDiagramContainer">
          <ATPDiagram />
        </div>
      </div>
    </section>
  );
}
