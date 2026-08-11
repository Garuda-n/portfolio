export const skills = {
  categories: [
    {
      title: "Backend",
      items: [
        { name: "PHP", usage: "Core language for backend logic and web applications." },
        { name: "Laravel", usage: "Used in NovaAdmin (Authentication, RBAC, Service Layer, Inventory, Sales, Reporting)." },
        { name: "REST APIs", usage: "Building stateless communication layers between frontend and database." }
      ]
    },
    {
      title: "Database",
      items: [
        { name: "MySQL", usage: "Primary relational database for ERP systems." },
        { name: "SQL", usage: "Writing optimized aggregate queries for complex reporting." },
        { name: "Query Optimization", usage: "Improving performance of massive inventory movement registers." },
        { name: "Indexing", usage: "Implemented covering indexes and reporting indexes in NovaAdmin." }
      ]
    },
    {
      title: "Frontend",
      items: [
        { name: "JavaScript", usage: "Dynamic interactions, DOM manipulation, and asynchronous API calls." },
        { name: "React", usage: "Used in modern single-page applications and local AI Chatbot integration." },
        { name: "jQuery", usage: "Maintaining legacy applications and integrating with older UI libraries." },
        { name: "Tailwind CSS", usage: "Rapid, utility-first UI styling in NovaAdmin." },
        { name: "HTML/CSS", usage: "Semantic markup and fundamental styling." }
      ]
    },
    {
      title: "Engineering",
      items: [
        { name: "ERP Systems", usage: "Architecting end-to-end business workflows." },
        { name: "Inventory Systems", usage: "Building centralized stock movement gateways." },
        { name: "RBAC", usage: "Implementing role-based access control and dynamic menu permissions." },
        { name: "Reporting", usage: "Generating sales, purchase, and stock register reports." },
        { name: "Git / GitHub", usage: "Version control and collaborative development." }
      ]
    },
    {
      title: "AI",
      items: [
        { name: "Ollama", usage: "Local LLM hosting and execution." },
        { name: "Local LLM Integration", usage: "Connecting application logic with local AI models." },
        { name: "React AI Chat UI", usage: "Building responsive conversation interfaces with loading states." }
      ]
    }
  ]
};
