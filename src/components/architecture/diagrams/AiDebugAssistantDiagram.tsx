import { DCaption, DEdge, DEdgeLabel, DLane, DNode, DiagramFrame, ICONS } from '../primitives';

/**
 * AI Debug Assistant — closed-loop diagram.
 *
 * Layer order (renders bottom → top):
 *   1. Lanes
 *   2. Edges (lines + arrows)
 *   3. Nodes (boxes mask any line crossing)
 *   4. Edge labels (always on top, placed in clear zones between boxes)
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
      {/* 1. Lanes */}
      <DLane x={20} y={40} w={310} h={420} title="Salesforce org" accent="brand" />
      <DLane x={350} y={40} w={250} h={420} title="Bridge / Apex" accent="emerald" />
      <DLane x={620} y={40} w={160} h={420} title="Cisco Circuit LLM" accent="violet" />

      {/* 2. Edges (under nodes) */}
      {/* Vertical inside Salesforce lane */}
      <DEdge d="M175 154 L 175 185" accent="brand" speed="fast" />
      <DEdge d="M175 249 L 175 280" accent="brand" />
      <DEdge d="M175 344 L 175 375" accent="emerald" speed="fast" />

      {/* LWC -> Apex Bridge */}
      <DEdge d="M300 217 L 370 217" accent="emerald" />
      {/* Tooling API -> Smart chunker */}
      <DEdge d="M300 312 C 330 312, 350 312, 370 318" accent="emerald" />

      {/* Apex Bridge -> Circuit LLM (prompt) */}
      <DEdge d="M580 200 C 605 200, 615 185, 630 185" accent="violet" speed="fast" />
      {/* Smart chunker -> Vision endpoint (image) */}
      <DEdge d="M580 318 C 605 318, 615 277, 630 277" accent="violet" />

      {/* Response loop: Circuit LLM back to Agent (root cause).
          Curve apex sits at y≈90 — between the lane title (y=58) and
          the Agent / Developer card (y=90). Lands at the TOP edge of
          the Agent card so the arrowhead is never inside the box. */}
      <DEdge
        d="M620 195 C 400 95, 280 95, 175 90"
        accent="violet"
        speed="slow"
      />

      {/* 3. Nodes (on top of edges) */}
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
      <DNode
        x={370}
        y={185}
        w={210}
        h={70}
        label="Apex Bridge"
        sublabel="chunker · OAuth2"
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
        label="Vision API"
        sublabel="screenshot RCA"
        accent="violet"
        iconPath={ICONS.sparkles}
      />

      {/* 4. Edge labels (always on top, dropped into the gaps between boxes) */}
      <DEdgeLabel x={335} y={217} text="logs" accent="emerald" />
      <DEdgeLabel x={605} y={170} text="prompt" accent="violet" />
      <DEdgeLabel x={605} y={300} text="image" accent="violet" />
      <DEdgeLabel x={400} y={78} text="root cause" accent="violet" />

      {/* Step numbers (also on top) */}
      <DCaption text="1" x={45} y={80} fill="#3b8ff6" fontSize={11} />
      <DCaption text="2" x={365} y={175} fill="#10b981" fontSize={11} />
      <DCaption text="3" x={625} y={140} fill="#a78bfa" fontSize={11} />
      <DCaption text="4" x={45} y={365} fill="#10b981" fontSize={11} />
    </DiagramFrame>
  );
}
