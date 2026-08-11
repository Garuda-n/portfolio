export const projects = [
  {
    id: "novaadmin",
    title: "NovaAdmin",
    tagline: "Comprehensive ERP & Business Application",
    description: "A robust ERP system designed to handle complex business workflows including inventory management, sales, purchasing, and comprehensive reporting.",
    coreTech: ["Laravel", "PHP 8.3", "MySQL", "Vite", "Tailwind CSS", "React/jQuery"],
    overview: "NovaAdmin is a centralized business management platform built on a Service Layer architecture. It handles everything from user authentication and role-based access control to complex inventory tracking and dynamic invoice generation.",
    modules: [
      {
        name: "Authentication & Security",
        features: ["Secure Login", "Role-Based Access Control (RBAC)", "Dynamic Menu Permissions"]
      },
      {
        name: "Master Data Management",
        features: ["Company & Branch Setup", "Counter Mapping", "Tax & UOM Configuration", "Customer & Supplier Directories", "Product Catalog"]
      },
      {
        name: "Inventory System",
        features: ["Bulk Stock Inward", "Individual Item Tracking", "Product Item Code Generation", "Stock Movements", "Available Stock Register", "Branch & Counter Transfers"]
      },
      {
        name: "Sales Workflow",
        features: ["Quotations", "Sales Processing", "Payments & Allocations", "Customer Receivables", "Invoice PDF Generation", "Sales Cancellation & Quotation Conversion"]
      },
      {
        name: "Reporting Engine",
        features: ["Inventory Reports", "Sales & Purchase Reports", "Customer/Supplier Reports", "Stock Registers"]
      }
    ],
    architecture: {
      layers: ["Frontend (Tailwind/JS)", "Laravel Controllers", "Service Layer", "Models", "MySQL Database"],
      decisions: [
        {
          title: "Service Layer Architecture",
          description: "Decoupled business logic into dedicated services (InventoryService, PricingService, SalesService) to keep controllers thin and improve testability."
        },
        {
          title: "Centralized Inventory Gateway",
          description: "Implemented a single, transaction-safe entry point for all stock movements to prevent data anomalies during concurrent operations."
        },
        {
          title: "Optimized Database Queries",
          description: "Utilized covering indexes and reporting indexes to ensure massive aggregate queries execute rapidly without locking tables."
        },
        {
          title: "Business-Date Logic",
          description: "Ensured all inventory calculations respect strict business-date boundaries rather than system timestamps for accurate historical reporting."
        }
      ]
    },
    flows: [
      {
        name: "Sales Lifecycle",
        steps: ["Quotation", "Sales Conversion", "Payment Allocation", "Receivables Updating"]
      },
      {
        name: "Inventory Lifecycle",
        steps: ["Inward Entry", "Physical Stock Mapping", "Allocation", "Sale / Transfer", "Reporting Update"]
      }
    ],
    links: {
      demo: "#", // Placeholder
      github: "#" // Placeholder
    }
  },
  {
    id: "ai-chatbot",
    title: "Local AI Chatbot",
    tagline: "React-based Interface for Local LLMs",
    description: "A modern web application integrating local Artificial Intelligence capabilities directly into a responsive UI without relying on cloud APIs.",
    coreTech: ["React", "Vite", "Axios", "Ollama", "Local LLM"],
    overview: "This project demonstrates the integration of local machine learning models into a web environment. It features a responsive chat interface capable of maintaining conversation state and handling loading sequences elegantly.",
    architecture: {
      layers: ["React UI", "Axios HTTP Client", "Local API Endpoint", "Ollama Engine", "Local LLM Model"],
      decisions: [
        {
          title: "State Management",
          description: "Utilized React hooks for complex conversation state, including streaming responses and message history."
        },
        {
          title: "Local Execution",
          description: "Routed all inference requests through Ollama to ensure complete data privacy and zero cloud API dependency."
        }
      ]
    },
    features: ["Responsive Chat UI", "Conversation Handling", "Sidebar Navigation", "Conversation State Persistence", "Dynamic Loading States"],
    links: {
      demo: "#", // Placeholder
      github: "#" // Placeholder
    }
  }
];
