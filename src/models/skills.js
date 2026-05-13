/**
 * Model: skills
 * Each item: { name, slug, desc }
 * slug → simple-icons CDN identifier (null = monogram fallback)
 * desc → short description shown on hover inside the index card
 */
export const skillCategories = [
  {
    id: 'web',
    title: 'web & backend',
    rotation: -1.5,
    bg: '#ffffff',
    topColor: '#c8f24a',
    items: [
      { name: 'TypeScript', slug: 'typescript',    desc: 'typed JS — safer code'       },
      { name: 'React.js',   slug: 'react',         desc: 'my main UI library'          },
      { name: 'Vue.js',     slug: 'vuedotjs',      desc: 'used it on Skillios'         },
      { name: 'Angular',    slug: 'angular',       desc: '+ RxJS, .NET stack'          },
      { name: 'Node.js',    slug: 'nodedotjs',     desc: 'Express, REST, sockets'      },
      { name: 'ASP.NET',    slug: 'dotnet',        desc: 'gRPC microservices'          },
      { name: 'gRPC',       slug: null, localImg: '/assets/icons/grpc--logo.svg',                          desc: 'service-to-service RPC'      },
      { name: 'Kafka',      slug: 'apachekafka',   desc: 'event streaming bus'         },
    ],
  },
  {
    id: 'ai',
    title: 'AI & data',
    rotation: 1,
    bg: '#fefbf2',
    topColor: '#1a1a1a',
    items: [
      { name: 'Python',     slug: 'python',        desc: 'for everything AI'              },
      { name: 'RAG',        slug: null, localImg: 'https://api.iconify.design/mdi:database-search.svg',  desc: 'retrieval-augmented LLMs'       },
      { name: 'Embeddings', slug: null, localImg: 'https://api.iconify.design/mdi:brain.svg',             desc: 'vector reps of text'            },
      { name: 'LangChain',  slug: 'langchain',     desc: 'agent + chain orchestration'    },
      { name: 'PGVector',   slug: 'postgresql',    desc: 'vector DB in Postgres'          },
      { name: 'Power BI',   slug: null, localImg: '/assets/icons/Microsoft-Power-Bi--Streamline-Svg-Logos.svg', desc: 'dashboards & KPIs'           },
      { name: 'Pentaho',    slug: null, localImg: '/assets/icons/pentaho-logo.png',                              desc: 'ETL pipelines'                  },
    ],
  },
  {
    id: 'devops',
    title: 'devops & cloud',
    rotation: -1,
    bg: '#ffffff',
    topColor: '#c8f24a',
    items: [
      { name: 'Docker',     slug: 'docker',              desc: 'containerize everything'   },
      { name: 'Terraform',  slug: 'terraform',           desc: 'IaC for AWS'               },
      { name: 'Ansible',    slug: 'ansible',             desc: 'config management'         },
      { name: 'AWS',        slug: null, localImg: '/assets/icons/Amazon-Web-Service-Logo--Streamline-Ultimate.png', desc: 'EC2, S3, RDS, IAM'         },
      { name: 'CI/CD',      slug: 'githubactions',       desc: 'auto build + deploy'       },
      { name: 'Prometheus', slug: 'prometheus',          desc: 'metrics scraping'          },
      { name: 'Grafana',    slug: 'grafana',             desc: 'observability dashboards'  },
    ],
  },
  {
    id: 'data',
    title: 'data & ORM',
    rotation: 1.5,
    bg: '#fefbf2',
    topColor: '#1a1a1a',
    items: [
      { name: 'PostgreSQL', slug: 'postgresql',  desc: 'my default DB'             },
      { name: 'MySQL',      slug: 'mysql',       desc: 'legacy projects'           },
      { name: 'Oracle',     slug: null, localImg: '/assets/icons/oracle logo.png', desc: 'university coursework'     },
      { name: 'Prisma',     slug: 'prisma',      desc: 'typesafe ORM'              },
      { name: 'TypeORM',    slug: null, localImg: '/assets/icons/Typeorm--Streamline-Simple-Icons.svg', desc: '.NET-friendly ORM'         },
      { name: 'MinIO',      slug: 'minio',       desc: 'S3-compatible object store'},
    ],
  },
];
