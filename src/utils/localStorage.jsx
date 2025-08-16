const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Fix login bug",
        description: "Resolve issue preventing login on mobile devices.",
        date: "2025-08-10",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update dashboard UI",
        description: "Redesign main dashboard layout.",
        date: "2025-08-08",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Test payment integration",
        description: "Ensure Stripe integration works properly.",
        date: "2025-08-05",
        category: "QA",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Create marketing plan",
        description: "Draft Q4 marketing roadmap.",
        date: "2025-08-09",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Write blog post",
        description: "Publish new article on product features.",
        date: "2025-08-07",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Social media strategy",
        description: "Plan content for next 2 weeks.",
        date: "2025-08-06",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Email campaign review",
        description: "Analyze last week’s campaign results.",
        date: "2025-08-05",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Ravii",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Code review",
        description: "Review PR #349 for backend service.",
        date: "2025-08-10",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "API performance testing",
        description: "Test new endpoints for performance.",
        date: "2025-08-09",
        category: "QA",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Setup CI pipeline",
        description: "Configure CI/CD with GitHub Actions.",
        date: "2025-08-06",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Meer",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Product demo setup",
        description: "Prepare and test product demo environment.",
        date: "2025-08-07",
        category: "Product",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client feedback analysis",
        description: "Analyze recent feedback from beta users.",
        date: "2025-08-05",
        category: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Feature request triage",
        description: "Sort and tag new feature requests.",
        date: "2025-08-04",
        category: "Support",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Helpdesk training",
        description: "Conduct session for helpdesk team.",
        date: "2025-08-03",
        category: "Training",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Maan",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 2
    },
    tasks: [
      {
        title: "SEO audit",
        description: "Perform SEO audit on landing pages.",
        date: "2025-08-10",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Competitor analysis",
        description: "Research top 5 competitors’ strategies.",
        date: "2025-08-08",
        category: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Keyword planning",
        description: "Identify keywords for next campaign.",
        date: "2025-08-06",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Analytics dashboard setup",
        description: "Configure analytics in GA4.",
        date: "2025-08-04",
        category: "Data",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Email newsletter design",
        description: "Design layout for monthly email.",
        date: "2025-08-03",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = ()=> {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return {employees,admin}
}