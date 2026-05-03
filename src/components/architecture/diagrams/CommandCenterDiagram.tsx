import { DCaption, DEdge, DEdgeLabel, DLane, DNode, DiagramFrame, ICONS } from '../primitives';

/**
 * SFDC Command Center — full sprint-execution platform.
 *
 * Layer order: lanes → edges (under nodes) → nodes → labels (on top).
 */
export function CommandCenterDiagram() {
  return (
    <DiagramFrame
      ariaLabel="SFDC Command Center architecture"
      legend={
        <p>
          User stories enter via Webex bot or the LWR React UI, fan out through
          an Apex orchestration layer that calls Salesforce metadata APIs,
          a 3-tier LLM router, and a versioned prompt registry — then close
          the loop with Playwright-driven validation.
        </p>
      }
    >
      {/* 1. Lanes */}
      <DLane x={20} y={40} w={310} h={420} title="User entry" accent="cyan" />
      <DLane x={345} y={40} w={250} h={420} title="Salesforce LWR (org)" accent="brand" />
      <DLane x={610} y={40} w={170} h={420} title="External services" accent="violet" align="right" />

      {/* 2. Edges */}
      {/* User entry -> LWR React UI */}
      <DEdge d="M255 112 L 365 112" accent="cyan" />
      {/* Webex Bot -> Apex Orchestrator */}
      <DEdge d="M255 202 C 305 202, 320 232, 365 232" accent="cyan" />

      {/* LWR React UI -> Apex Orchestrator */}
      <DEdge d="M470 144 L 470 210" accent="brand" speed="fast" />

      {/* Orchestrator -> external services */}
      <DEdge d="M575 220 C 600 215, 605 115, 620 112" accent="violet" />
      <DEdge d="M575 245 L 620 245" accent="violet" />
      <DEdge d="M575 270 C 600 275, 605 365, 620 366" accent="violet" />

      {/* Orchestrator -> generated PR */}
      <DEdge d="M470 280 L 470 335" accent="brand" speed="fast" />

      {/* PR -> Playwright */}
      <DEdge d="M365 367 C 320 367, 290 332, 255 332" accent="emerald" />
      {/* Playwright -> Webex Bot (report back) */}
      <DEdge d="M150 300 L 150 234" accent="emerald" />

      {/* 3. Nodes */}
      {/* User entry column */}
      <DNode
        x={45}
        y={80}
        w={210}
        h={64}
        label="Developer"
        sublabel="@bot enhance #1234"
        accent="cyan"
        iconPath={ICONS.user}
      />
      <DNode
        x={45}
        y={170}
        w={210}
        h={64}
        label="Webex Bot"
        sublabel="prod / sandbox split"
        accent="cyan"
        iconPath={ICONS.bot}
      />
      <DNode
        x={45}
        y={300}
        w={210}
        h={64}
        label="Playwright Runner"
        sublabel="UI / backend tests"
        accent="emerald"
        iconPath={ICONS.gauge}
      />

      {/* Salesforce column */}
      <DNode
        x={365}
        y={80}
        w={210}
        h={64}
        label="LWR React UI"
        sublabel="native to Salesforce"
        accent="brand"
        iconPath={ICONS.layers}
        pulse
      />
      <DNode
        x={365}
        y={210}
        w={210}
        h={70}
        label="Apex Orchestrator"
        sublabel="auth · routing · audit"
        accent="brand"
        iconPath={ICONS.workflow}
      />
      <DNode
        x={365}
        y={335}
        w={210}
        h={64}
        label="Generated PR"
        sublabel="Apex · LWC · tests"
        accent="brand"
        iconPath={ICONS.pr}
      />

      {/* External services column */}
      <DNode
        x={620}
        y={80}
        w={150}
        h={62}
        label="Tooling / REST"
        sublabel="18K metadata"
        accent="violet"
        iconPath={ICONS.search}
      />
      <DNode
        x={620}
        y={210}
        w={150}
        h={70}
        label="Circuit LLM"
        sublabel="3-tier routing"
        accent="violet"
        iconPath={ICONS.brain}
        pulse
      />
      <DNode
        x={620}
        y={335}
        w={150}
        h={62}
        label="Firestore"
        sublabel="prompt registry"
        accent="violet"
        iconPath={ICONS.database}
      />

      {/* 4. Labels — placed in clear zones between boxes */}
      <DEdgeLabel x={310} y={112} text="story" accent="cyan" />
      <DEdgeLabel x={597} y={170} text="metadata" accent="violet" />
      <DEdgeLabel x={598} y={245} text="prompt" accent="violet" />
      <DEdgeLabel x={310} y={355} text="run e2e" accent="emerald" />
      <DEdgeLabel x={150} y={268} text="report" accent="emerald" />

      {/* Step numbers */}
      <DCaption text="1" x={272} y={104} fill="#22d3ee" fontSize={11} />
      <DCaption text="2" x={478} y={184} fill="#3b8ff6" fontSize={11} />
      <DCaption text="3" x={597} y={205} fill="#a78bfa" fontSize={11} />
      <DCaption text="4" x={478} y={320} fill="#3b8ff6" fontSize={11} />
      <DCaption text="5" x={272} y={395} fill="#10b981" fontSize={11} />
    </DiagramFrame>
  );
}
