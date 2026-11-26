import React from 'react';
import ContentHub from '@site/src/components/ContentHub';

export default function StateOfDev(): React.JSX.Element {
  return (
    <ContentHub
      description="Periodic field notes from the point where an AI-assisted engineering workflow starts behaving like an automation platform."
      eyebrow="Chronicle"
      title="State of Dev"
      entries={[
        {
          title: "State of Dev: Week of 2026-11-16",
          description: "SubZeroDev engineering accomplishments and open work for the week of 2026-11-16.",
          href: "/state-of-dev-2026-11-16/",
          label: "Week of 2026-11-16",
        },
        {
          title: "State of Dev: Week of 2026-11-09",
          description: "SubZeroDev engineering accomplishments and open work for the week of 2026-11-09.",
          href: "/state-of-dev-2026-11-09/",
          label: "Week of 2026-11-09",
        },
        {
          title: "State of Dev: Week of 2026-11-02",
          description: "WindowManager completed one implementation program and most of another, FileManager proved real MSI upgrades without declaring release readiness, Platform built an owner-scoped game edge, and Game Engine published 0.14.0.",
          href: "/state-of-dev-2026-11-02/",
          label: "Week of 2026-11-02",
        },
        {
          title: "State of Dev: Week of 2026-10-26",
          description: "BibleStudy completed its first program, Dashboard reached a real portfolio rollout, Game Engine published two releases, and MemoryKit declined to make retrieval more complicated without evidence.",
          href: "/state-of-dev-2026-10-26/",
          label: "Week of 2026-10-26",
        },
        {
          title: "State of Dev: Week of 2026-10-19",
          description: "SubZeroDev engineering activity for the week of 2026-10-19.",
          href: "/state-of-dev-2026-10-19/",
          label: "Week of 2026-10-19",
        },
        {
          title: "State of Dev: Week of 2026-10-12",
          description: "SubZeroDev engineering activity for the week of 2026-10-12.",
          href: "/state-of-dev-2026-10-12/",
          label: "Week of 2026-10-12",
        },
        {
          title: "State of Dev: Week of 2026-10-05",
          description: "SubZeroDev engineering activity for the week of 2026-10-05.",
          href: "/state-of-dev-2026-10-05/",
          label: "Week of 2026-10-05",
        },
        {
          title: "State of Dev - Week of September 28, 2026",
          description: "AgentKit replaced its command pipeline with one resumable workflow, HotCorners became an updater-enabled licensed product, Licensing reached its final real-product proof, and the Game Engine made simulation physics campaign-owned.",
          href: "/state-of-dev-2026-09-28/",
          label: "Week of 2026-09-28",
        },
        {
          title: "State of Dev - Week of September 21, 2026",
          description: "AgentKit hardened its shared runtime, HotCorners reached v1.0.0, Docker-BuildAgent landed its first seven 2.0 slices, SkyNetHR completed S33-S37, and Licensing advanced through S10.",
          href: "/state-of-dev-2026-09-21/",
          label: "Week of 2026-09-21",
        },
        {
          title: "State of Dev - Week of September 14, 2026",
          description: "AgentKit became a home-installed development runtime, Licensing reached real activation, Platform finished D5, Adventures completed its frontend and offline program, and SkyNetHR turned forty runtime ideas into five buildable slices and several explicit refusals.",
          href: "/state-of-dev-2026-09-14/",
          label: "Week of 2026-09-14",
        },
        {
          title: "State of Dev - Week of September 7, 2026",
          description: "Game Engine reached 0.11 release readiness, Licensing went from architecture to a running authority, AgentKit taught design state about components, SkyNetHR continued learning Windows the hard way, and Sites started threatening several categories of boilerplate.",
          href: "/state-of-dev-2026-09-07/",
          label: "Week of 2026-09-07",
        },
        {
          title: "State of Dev - Week of August 31, 2026",
          description: "SubZeroDev.com went live, the Utilities line acquired licensing infrastructure, private WinGet distribution became machine management, and Dropbox was reminded that synchronizing half a million files is not a feature.",
          href: "/state-of-dev-2026-08-31/",
          label: "Week of 2026-08-31",
        },
        {
          title: "State of Dev - Week of August 24, 2026",
          description: "Nineteen repositories were active, AgentKit started optimizing the AI development process itself, Game of Life became a real content system, and HotCorners went from blank repository to sliced architecture before anyone had time to ask why.",
          href: "/state-of-dev-2026-08-24/",
          label: "Week of 2026-08-24",
        },
        {
          title: "State of Dev - Week of August 10, 2026",
          description: "The Game Engine stopped being a collection of campaigns and started becoming a content platform, Git Service became recursive, SkynetHR connected to reality, and telemetry revealed what the AI agents have been doing to the token budget.",
          href: "/state-of-dev-2026-08-10/",
          label: "Week of 2026-08-10",
        },
        {
          title: "State of Dev - Week of August 3, 2026",
          description: "Weekly development journal covering the continued accidental construction of the SubZeroDev ecosystem.",
          href: "/state-of-dev-2026-08-03/",
          label: "Issue 2"
        },
        {
          label: 'Issue 1',
          title: 'State of Dev – Week of July 27, 2026',
          description:
            'A humorous state-of-development report on an AI-assisted software workflow that keeps becoming an automation platform.',
          href: '/state-of-dev-week-of-july-27-2026/'
        }
      ]}
    />
  );
}
