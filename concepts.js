const dataConcepts = [
  {
    title: "Data Engineering",
    category: "Data Engineering",
    definition: "The discipline of building systems and processes that turn raw data into reliable and usable information."
  },
  {
    title: "Data Engineering Lifecycle",
    category: "Data Engineering",
    definition: "A framework that describes the journey of data through generation, storage, ingestion, transformation, and serving."
  },
  {
    title: "Source Systems",
    category: "Data Engineering",
    definition: "The systems where data is created, such as applications, databases, APIs, logs, files, or streams."
  },
  {
    title: "Data Storage",
    category: "Data Engineering",
    definition: "The process of saving data in a persistent, secure, and accessible way for future use."
  },
  {
    title: "Data Ingestion",
    category: "Data Engineering",
    definition: "The process of collecting data from source systems and moving it into a data platform."
  },
  {
    title: "Data Transformation",
    category: "Data Engineering",
    definition: "The process of cleaning, changing, enriching, or modeling data to make it useful for analysis."
  },
  {
    title: "Serving Data",
    category: "Data Engineering",
    definition: "The stage where data is made available for analytics, machine learning, dashboards, or business applications."
  },
  {
    title: "Data Management",
    category: "Data Governance",
    definition: "A set of practices used to manage data quality, governance, metadata, master data, and data lifecycle."
  },
  {
    title: "DataOps",
    category: "Data Engineering",
    definition: "The application of DevOps principles to data workflows to improve automation, quality, and reliability."
  },
  {
    title: "Data Architecture",
    category: "Data Architecture",
    definition: "The logical and technical design of data systems that support current and future business needs."
  },
  {
    title: "Orchestration",
    category: "Data Engineering",
    definition: "The automated coordination of tasks, jobs, and pipelines based on schedules and dependencies."
  },
  {
    title: "Software Engineering for Data",
    category: "Software Engineering",
    definition: "The use of software engineering practices to build data pipelines that are robust, testable, versioned, and maintainable."
  },
  {
    title: "Security",
    category: "Data Governance",
    definition: "The protection of data, access, and systems across the entire data lifecycle."
  },
  {
    title: "Data Warehouse",
    category: "Data Modeling",
    definition: "A system designed to store structured, historical, and organized data for reporting and business analysis."
  },
  {
    title: "Data Lake",
    category: "Data Architecture",
    definition: "A repository that stores raw or semi-processed data in different formats, often on object storage."
  },
  {
    title: "Data Lakehouse",
    category: "Data Architecture",
    definition: "An architecture that combines the flexibility of a data lake with the analytical features of a data warehouse."
  },
  {
    title: "Data Platform",
    category: "Data Architecture",
    definition: "An integrated set of tools for data ingestion, storage, transformation, governance, and consumption."
  },
  {
    title: "Modern Data Stack",
    category: "Data Architecture",
    definition: "A modular combination of cloud tools for ingestion, warehousing, transformation, business intelligence, and governance."
  },
  {
    title: "Lambda Architecture",
    category: "Data Architecture",
    definition: "An architecture that separates batch and speed layers to handle both historical and near real-time data."
  },
  {
    title: "Kappa Architecture",
    category: "Data Architecture",
    definition: "A streaming-oriented architecture that uses one data flow to process both historical and new data."
  },
  {
    title: "Data Mesh",
    category: "Data Architecture",
    definition: "A decentralized approach where business domains manage data as a product."
  },
  {
    title: "Event-Driven Architecture",
    category: "Data Architecture",
    definition: "An architecture where events produced by systems trigger processes, pipelines, or updates."
  },
  {
    title: "Batch Processing",
    category: "Data Engineering",
    definition: "The processing of data collected in groups and executed at scheduled intervals."
  },
  {
    title: "Streaming Data",
    category: "Data Engineering",
    definition: "Data that arrives continuously and can be processed in near real time."
  },
  {
    title: "Change Data Capture",
    category: "Data Engineering",
    definition: "A technique used to detect changes in source databases and propagate them to other systems."
  },
  {
    title: "ETL",
    category: "Data Engineering",
    definition: "A process where data is extracted from sources, transformed, and then loaded into a target system."
  },
  {
    title: "ELT",
    category: "Data Engineering",
    definition: "A process where data is extracted, loaded into a data platform, and transformed inside the target system."
  },
  {
    title: "Schema Evolution",
    category: "Data Management",
    definition: "The way a data structure changes over time, such as adding new columns or changing data types."
  },
  {
    title: "Late-Arriving Data",
    category: "Data Engineering",
    definition: "Data that arrives after the expected time and may affect already calculated reports or aggregations."
  },
  {
    title: "Dead-Letter Queue",
    category: "Data Engineering",
    definition: "A queue where failed or unprocessable messages are stored for debugging, inspection, or recovery."
  },
  {
    title: "Data Modeling",
    category: "Data Modeling",
    definition: "The design of data structures used to represent business entities, relationships, and processes."
  },
  {
    title: "Conceptual Data Model",
    category: "Data Modeling",
    definition: "A high-level model that describes business concepts without technical implementation details."
  },
  {
    title: "Logical Data Model",
    category: "Data Modeling",
    definition: "A model that organizes entities, attributes, and relationships in a precise but technology-independent way."
  },
  {
    title: "Physical Data Model",
    category: "Data Modeling",
    definition: "A model that translates the data design into real tables, columns, data types, indexes, and constraints."
  },
  {
    title: "Normalization",
    category: "Data Modeling",
    definition: "A modeling technique that reduces redundancy and avoids anomalies by separating data into coherent tables."
  },
  {
    title: "Denormalization",
    category: "Data Modeling",
    definition: "A technique that adds controlled redundancy to make some analytical queries simpler or faster."
  },
  {
    title: "Fact Table",
    category: "Data Modeling",
    definition: "The central table in an analytical model that stores measurable events or numeric business metrics."
  },
  {
    title: "Dimension Table",
    category: "Data Modeling",
    definition: "A descriptive table connected to a fact table, used to filter, group, and explain business metrics."
  },
  {
    title: "Query Optimizer",
    category: "Databases",
    definition: "The database component that chooses the most efficient execution plan for a query."
  },
  {
    title: "Data Product",
    category: "Data Analytics",
    definition: "A dataset or data service designed as a reliable, documented, and useful product for specific users."
  },
  {
    title: "Reverse ETL",
    category: "Data Engineering",
    definition: "The process of moving data from a warehouse back into operational tools such as CRM or marketing platforms."
  },
  {
    title: "pandas",
    category: "Python",
    definition: "A Python library used to manipulate, clean, transform, and analyze tabular data."
  },
  {
    title: "NumPy ndarray",
    category: "Python",
    definition: "An efficient multidimensional array structure used for numerical computing and vectorized operations in Python."
  },
  {
    title: "DataFrame",
    category: "Python",
    definition: "A pandas data structure similar to a table, with rows, columns, indexes, and data types."
  },
  {
    title: "Series",
    category: "Python",
    definition: "A one-dimensional pandas data structure with values and an index, similar to a labeled column."
  },
  {
    title: "Missing Data",
    category: "Data Cleaning",
    definition: "Values that are absent or unavailable and must be detected, filtered, or filled during data preparation."
  },
  {
    title: "Data Cleaning",
    category: "Data Analytics",
    definition: "The process of correcting, filtering, standardizing, and preparing raw data for analysis."
  },
  {
    title: "Data Wrangling",
    category: "Data Analytics",
    definition: "The process of joining, merging, reshaping, and combining data to create datasets ready for analysis."
  },
  {
    title: "GroupBy",
    category: "Data Analytics",
    definition: "A split-apply-combine operation that divides data into groups, applies calculations, and combines the results."
  },
  {
    title: "Time Series",
    category: "Data Analytics",
    definition: "Data ordered by time, useful for analyzing trends, seasonality, frequencies, and moving windows."
  }
];

let index = 0;

function updateConcept() {
  const concept = dataConcepts[index % dataConcepts.length];
  document.getElementById("concept-title").textContent = concept.title;
  document.getElementById("concept-category").textContent = concept.category;
  document.getElementById("concept-definition").textContent = concept.definition;
  index++;  
}

updateConcept();
setInterval(updateConcept, 10000);
