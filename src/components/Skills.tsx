import { motion } from 'framer-motion'
import SectionReveal, { RevealItem } from './SectionReveal'
import { fadeUp, EASE } from '../lib/animations'

const skillGroups = [
  {
    label: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C#', 'HTML/CSS'],
  },
  {
    label: 'Frameworks',
    skills: ['React Native', 'React.js', 'Next.js', 'Tailwind CSS', 'Expo'],
  },
  {
    label: 'Monitoring & ITSM',
    skills: ['Splunk', 'Grafana', 'AppDynamics', 'ServiceNow'],
  },
  {
    label: 'Reliability',
    skills: ['Root Cause Analysis', 'Postmortem', 'Observability', 'P1/P2 Response', 'Automation', 'On-Call'],
  },
  {
    label: 'Cloud & Infra',
    skills: ['GCP', 'BigQuery', 'GKE', 'Kubernetes', 'Vercel', 'Supabase', 'REST APIs'],
  },
]

export default function Skills() {
  return (
    <SectionReveal
      id="skills"
      className="py-24 md:py-32 px-6 md:px-16 max-w-[70rem] mx-auto"
    >
      {/* Eyebrow */}
      <motion.div
        className="flex items-center gap-4 mb-6"
        variants={fadeUp}
      >
        <div className="w-8 h-px bg-text-muted/30" />
        <span className="text-text-muted text-xs tracking-[0.3em] uppercase font-body font-medium">
          Skills & Tools
        </span>
      </motion.div>

      <RevealItem>
        <h2 className="font-display text-3xl md:text-4xl text-text-primary font-semibold mb-12">
          What I work with
        </h2>
      </RevealItem>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: gi * 0.08, duration: 0.5, ease: EASE.out }}
          >
            <h3 className="text-text-muted text-xs tracking-[0.2em] uppercase font-body font-medium mb-4">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-body text-text-body bg-surface border border-border rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionReveal>
  )
}
