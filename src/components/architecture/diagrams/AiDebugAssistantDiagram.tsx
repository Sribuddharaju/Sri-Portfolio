import { DCaption, DEdge, DLane, DNode, DiagramFrame, ICONS } from '../primitives';

/**
 * AI Debug Assistant — closed-loop diagram.
 *
 * The agent triggers a request from the LWC, the Apex bridge ships logs +
 * screenshots through Cisco Circuit LLM (OAuth2), and a structured
 * root-cause analysis flows back into the same panel.
 */
export function AiDebugAssistantDiagram() {
  return (
    <DiagramFrame
      ariaLabel="AI Debug Assistant architecture"
      legend={
        <p>
          The same Salesforce session that opened the panel powers every
          downstream call. Logs are chunked (head/tail strategy past 20 MB),
          screenshots ride along for multimodal grounding, and the response
          is rendered back inline — incidents become a one-click action.
        </p>
      }
    >
      <DLane x={20} y={40} w={310} h={420} title="Salesforce org" accent="brand" />
      <DLane x={350} y={40} w={250} h={420} title="Bridge / Apex" accent="emerald" />
      <DLane x={620} y={40} w={160} h={420} title="Cisco Circuit LLM" accent="violet" />

      {/* Salesforce side */}
      <DNode
        x={50}
        y={90}
        w={250}
        h={64}
        label="Agent / Developer"
        sublabel="opens AI Debug LWC"
        accent="brand"
        iconPath={ICONS.user}
      />
      <DNode
        x={50}
        y={185}
        w={250}
        h={64}
        label="AI Debug LWC"
        sublabel="logs + screenshot capture"
        accent="brand"
        iconPath={ICONS.message}
        pulse
      />
      <DNode
        x={50}
        y={280}
        w={250}
        h={64}
        label="Tooling API"
        sublabel="ApexLog · ApexClass"
        accent="brand"
        iconPath={ICONS.search}
      />
      <DNode
        x={50}
        y={375}
        w={250}
        h={56}
        label="Incident record"
        sublabel="ContentVersion attached"
        accent="emerald"
        iconPath={ICONS.shield}
      />

      {/* Apex bridge */}
      <DNode
        x={370}
        y={185}
        w={210}
        h={70}
        label="Apex Bridge"
        sublabel="chunker · OAuth2 · audit"
        accent="emerald"
        iconPath={ICONS.cog}
        pulse
      />
      <DNode
        x={370}
        y={290}
        w={210}
        h={56}
        label="Smart chunker"
        sublabel="head/tail @ 20 MB"
        accent="emerald"
        iconPath={ICONS.layers}
      />

      {/* LLM */}
      <DNode
        x={630}
        y={150}
        w={140}
        h={70}
        label="Circuit LLM"
        sublabel="multimodal"
        accent="violet"
        iconPath={ICONS.brain}
        pulse
      />
      <DNode
        x={630}
        y={245}
        w={140}
        h={64}
        label="Vision endpoint"
        sublabel="screenshot RCA"
        accent="violet"
        iconPath={ICONS.sparkles}
      />

      {/* Edges — request flow */}
      <DEdge d="M175 154 L 175 185" accent="brand" speed="fast" />
      <DEdge d="M300 217 L 370 217" accent="emerald" label="logs" labelX={335} labelY={205} />
      <DEdge d="M300 250 C 330 250, 350 290, 370 305" accent="emerald" />
      <DEdge d="M175 249 L 175 280" accent="brand" />
      <DEdge d="M580 217 C 605 217, 615 185, 630 185" accent="violet" label="prompt" labelX={605} labelY={170} />
      <DEdge d="M580 305 C 605 305, 615 275, 630 275" accent="violet" label="image" labelX={605} labelY={290} />

      {/* Response back */}
      <DEdge
        d="M630 200 C 615 130, 320 110, 175 110"
        accent="violet"
        speed="slow"
        label="root cause"
        labelX={400}
        labelY={100}
      />

      {/* Incident creation */}
      <DEdge d="M175 344 L 175 375" accent="emerald" />

      {/* Step numbers */}
      <DCaption text="1" x={45} y={80} fill="#3b8ff6" fontSize={11} />
      <DCaption text="2" x={365} y={175} fill="#10b981" fontSize={11} />
      <DCaption text="3" x={625} y={140} fill="#a78bfa" fontSize={11} />
      <DCaption text="4" x={45} y={365} fill="#10b981" fontSize={11} />
    </DiagramFrame>
  );
}
