export const moduleManifest = {
  schemaVersion: 1,
  id: 'tiny-project-health',
  version: '0.1.0-foundation',
  name: { fa: 'سلامت پروژه', en: 'Project Health' },
  description: {
    fa: 'تبدیل سیگنال‌های کلیدی پروژه به یک وضعیت مدیریتی سریع و قابل توضیح.',
    en: 'Turn key project signals into a fast, explainable management health score.',
  },
  icon: 'Activity',
  route: '/modules/project-health',
  category: 'insight',
  maturity: 'foundation',
  capabilities: {
    dashboardWidget: true,
    globalSearch: true,
    exportData: true,
    sharedPeople: true,
    sharedProjects: true,
    notifications: true,
    assistantActions: true,
  },
  plannedAssistantActions: [
    'tiny-project-health.calculate',
    'tiny-project-health.explain',
    'tiny-project-health.recommend-next-action',
  ],
} as const;
