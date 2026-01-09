export default function DarkToolsSection() {
  const toolCategories = [
    {
      category: 'Cloud Platforms',
      tools: ['AWS (EKS, EC2, S3, RDS)', 'Google Cloud Platform (GKE)', 'Azure'],
      description: 'Multi-cloud infrastructure design and deployment'
    },
    {
      category: 'Containers & Orchestration',
      tools: ['Kubernetes', 'Docker', 'Helm', 'KEDA'],
      description: 'Container orchestration and event-driven scaling'
    },
    {
      category: 'CI/CD & GitOps',
      tools: ['ArgoCD', 'Jenkins', 'GitLab CI', 'GitHub Actions'],
      description: 'Automated deployment pipelines and declarative infrastructure'
    },
    {
      category: 'Infrastructure as Code',
      tools: ['Terraform', 'Terraspace', 'Ansible', 'CloudFormation'],
      description: 'Version-controlled infrastructure provisioning'
    },
    {
      category: 'Observability & Monitoring',
      tools: ['Prometheus', 'Grafana', 'Loki', 'ELK Stack', 'Datadog'],
      description: 'Metrics, logging, tracing, and APM'
    },
    {
      category: 'Security & DevSecOps',
      tools: ['HashiCorp Vault', 'Trivy', 'Snyk', 'OPA Gatekeeper'],
      description: 'Secrets management and security automation'
    },
    {
      category: 'Programming & Scripting',
      tools: ['Python', 'Bash', 'Go', 'YAML', 'JSON'],
      description: 'Automation scripts and tooling development'
    },
    {
      category: 'Databases',
      tools: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB'],
      description: 'Relational and NoSQL database management'
    },
  ];

  return (
    <section id="tools" className="py-12 md:py-20 px-6 md:pl-8 md:pr-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8">
          TECH
          <br />
          <span className="text-gradient">STACK</span>
        </h2>
        
        <p className="text-sm md:text-lg text-gray-400 mb-8 md:mb-12 max-w-3xl">
          Production-grade infrastructure requires the right tools. Here's the tech stack I use to design, deploy, and operate systems at scale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {toolCategories.map((category, index) => (
            <div
              key={index}
              className="bg-dark-lighter rounded-2xl p-6 border border-dark-border"
            >
              <h3 className="text-lg md:text-xl font-bold mb-2">{category.category}</h3>
              <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool, toolIndex) => {
                  // Alternate between orange and green, or use orange for first half, green for second
                  const isOrange = toolIndex % 2 === 0;
                  const bgColor = isOrange ? 'bg-[#F36A2F]/20' : 'bg-[#C8FF3D]/20';
                  const textColor = isOrange ? 'text-[#F36A2F]' : 'text-[#C8FF3D]';
                  const borderColor = isOrange ? 'border-[#F36A2F]/30' : 'border-[#C8FF3D]/30';
                  
                  return (
                    <span
                      key={toolIndex}
                      className={`px-3 py-1 ${bgColor} ${textColor} border ${borderColor} rounded-lg text-sm font-medium`}
                    >
                      {tool}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
