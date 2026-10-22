/**
 * Model: skills
 * Each item: { name, slug, desc }
 * slug → simple-icons CDN identifier (null = monogram fallback)
 * desc → short description shown on hover inside the index card
 * title/desc are { en, fr }; read them through useLang().t().
 */
export const skillCategories = [
  {
    id: 'web',
    title: { en: 'web & backend', fr: 'web & backend' },
    rotation: -1.5,
    bg: '#ffffff',
    topColor: '#c8f24a',
    items: [
      { name: 'TypeScript', slug: 'typescript',    desc: { en: 'typed JS, safer code', fr: 'du JS typé, du code plus sûr' }       },
      { name: 'React.js',   slug: 'react',         desc: { en: 'my main UI library', fr: 'ma librairie UI principale' }          },
      { name: 'Vue.js',     slug: 'vuedotjs',      desc: { en: 'used it on Skillios', fr: 'utilisé sur Skillios' }         },
      { name: 'Angular',    slug: 'angular',       desc: { en: '+ RxJS, .NET stack', fr: '+ RxJS, stack .NET' }          },
      { name: 'Node.js',    slug: 'nodedotjs',     desc: { en: 'Express, REST, sockets', fr: 'Express, REST, sockets' }      },
      { name: 'ASP.NET',    slug: 'dotnet',        desc: { en: 'gRPC microservices', fr: 'microservices gRPC' }          },
      { name: 'gRPC',       slug: null, localImg: '/assets/icons/grpc--logo.svg',                          desc: { en: 'service-to-service RPC', fr: 'RPC entre services' }      },
      { name: 'Kafka',      slug: 'apachekafka',   desc: { en: 'event streaming bus', fr: "bus d'événements en streaming" }         },
      { name: 'Java',       slug: 'openjdk',       desc: { en: 'Java 21 microservices', fr: 'microservices Java 21' }       },
      { name: 'Spring Boot', slug: 'springboot',   desc: { en: '+ Cloud Gateway, Eureka', fr: '+ Cloud Gateway, Eureka' }   },
    ],
  },
  {
    id: 'ai',
    title: { en: 'AI & data', fr: 'IA & data' },
    rotation: 1,
    bg: '#fefbf2',
    topColor: '#1a1a1a',
    items: [
      { name: 'Python',     slug: 'python',        desc: { en: 'for everything AI', fr: "pour tout ce qui touche à l'IA" }              },
      { name: 'RAG',        slug: null, localImg: '/assets/icons/database-search.svg',  desc: { en: 'retrieval-augmented LLMs', fr: 'LLM augmentés par recherche' }       },
      { name: 'Embeddings', slug: null, localImg: '/assets/icons/brain.svg',             desc: { en: 'vector reps of text', fr: 'représentations vectorielles du texte' }            },
      { name: 'LangChain',  slug: 'langchain',     desc: { en: 'agent + chain orchestration', fr: "orchestration d'agents et de chaînes" }    },
      { name: 'PGVector',   slug: 'postgresql',    desc: { en: 'vector DB in Postgres', fr: 'base vectorielle dans Postgres' }          },
      { name: 'Power BI',   slug: null, localImg: '/assets/icons/Microsoft-Power-Bi--Streamline-Svg-Logos.svg', desc: { en: 'dashboards & KPIs', fr: 'dashboards & KPI' }           },
      { name: 'Pentaho',    slug: null, localImg: '/assets/icons/pentaho-logo.png',                              desc: { en: 'ETL pipelines', fr: 'pipelines ETL' }                  },
    ],
  },
  {
    id: 'devops',
    title: { en: 'devops & cloud', fr: 'devops & cloud' },
    rotation: -1,
    bg: '#ffffff',
    topColor: '#c8f24a',
    items: [
      { name: 'Docker',     slug: 'docker',              desc: { en: 'containerize everything', fr: 'tout conteneuriser' }   },
      { name: 'Terraform',  slug: 'terraform',           desc: { en: 'Provisioning Infra using code (IaC)', fr: "provisionner l'infra par le code (IaC)" }               },
      { name: 'Ansible',    slug: 'ansible',             desc: { en: 'config management', fr: 'gestion de configuration' }         },
      { name: 'AWS',        slug: null, localImg: '/assets/icons/Amazon-Web-Service-Logo--Streamline-Ultimate.png', desc: { en: 'EC2, S3, RDS, IAM', fr: 'EC2, S3, RDS, IAM' }         },
      { name: 'CI/CD',      slug: 'githubactions',       desc: { en: 'auto build + deploy', fr: 'build + déploiement auto' }       },
      { name: 'Prometheus', slug: 'prometheus',          desc: { en: 'metrics scraping', fr: 'collecte de métriques' }          },
      { name: 'Grafana',    slug: 'grafana',             desc: { en: 'observability dashboards', fr: "dashboards d'observabilité" }  },
      { name: 'Keycloak',   slug: 'keycloak',            desc: { en: 'SSO & identity provider', fr: "SSO & fournisseur d'identité" } },
    ],
  },
  {
    id: 'data',
    title: { en: 'data & ORM', fr: 'données & ORM' },
    rotation: 1.5,
    bg: '#fefbf2',
    topColor: '#1a1a1a',
    items: [
      { name: 'PostgreSQL', slug: 'postgresql',  desc: { en: 'my default DB', fr: 'ma base par défaut' }             },
      { name: 'MySQL',      slug: 'mysql',       desc: { en: 'legacy projects', fr: 'projets legacy' }           },
      { name: 'Oracle',     slug: null, localImg: '/assets/icons/oracle logo.png', desc: { en: 'university coursework', fr: 'cours à la fac' }     },
      { name: 'Prisma',     slug: 'prisma',      desc: { en: 'typesafe ORM', fr: 'ORM typé' }              },
      { name: 'TypeORM',    slug: null, localImg: '/assets/icons/Typeorm--Streamline-Simple-Icons.svg', desc: { en: '.NET-friendly ORM', fr: 'ORM compatible .NET' }         },
      { name: 'MinIO',      slug: 'minio',       desc: { en: 'S3-compatible object store', fr: 'stockage objet compatible S3' }},
      { name: 'Supabase',   slug: 'supabase',    desc: { en: 'Postgres, auth & edge functions', fr: 'Postgres, auth & edge functions' }},
    ],
  },
  {
    id: 'mobile',
    title: { en: 'mobile', fr: 'mobile' },
    rotation: -1,
    bg: '#ffffff',
    topColor: '#c8f24a',
    items: [
      { name: 'Flutter',    slug: 'flutter',     desc: { en: 'Android & iOS from one codebase', fr: 'Android & iOS avec un seul code' } },
      { name: 'Dart',       slug: 'dart',        desc: { en: "Flutter's language", fr: 'le langage de Flutter' }        },
      { name: 'Firebase',   slug: 'firebase',    desc: { en: 'Firestore, functions, push', fr: 'Firestore, functions, push' } },
    ],
  },
];
