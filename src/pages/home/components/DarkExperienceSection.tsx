export default function DarkExperienceSection() {
  const experiences = [
    {
      company: 'Senior DevOps Engineer – Next Ventures (FundedNext)',
      description: 'Architected and maintained Kubernetes-based infrastructure on AWS EKS, implementing GitOps workflows and observability platforms.',
      period: 'Current',
      bullets: [
        'Designed and deployed AWS EKS clusters with Docker containerization, implementing GitOps workflows using ArgoCD for declarative infrastructure management',
        'Built comprehensive observability stack with Prometheus, Grafana, Loki, and ELK for metrics, logging, and distributed tracing',
        'Implemented event-driven autoscaling strategies reducing infrastructure costs by 35% while maintaining 99.9% uptime',
        'Established DevSecOps practices with automated security scanning, secrets management, and compliance validation in CI/CD pipelines',
        'Optimized resource allocation and right-sizing, achieving 40% cost reduction across cloud infrastructure',
        'Designed disaster recovery architecture with automated failover, reducing RTO to under 15 minutes'
      ],
    },
    {
      company: 'Staff Software Engineer – DevOps – Augmedix Inc.',
      description: 'Led Kubernetes migrations and MLOps infrastructure for healthcare AI platform, ensuring HIPAA compliance and high availability.',
      period: 'Previous',
      bullets: [
        'Migrated production workloads from legacy infrastructure to Kubernetes on EKS and GKE, reducing deployment time by 60%',
        'Implemented KEDA-based event-driven autoscaling for ML inference workloads, handling 10x traffic spikes without manual intervention',
        'Built infrastructure as code platform using Terraform and Terraspace, enabling self-service infrastructure provisioning',
        'Architected centralized logging and monitoring with APM integration, reducing MTTR from hours to minutes',
        'Designed and implemented Vault-based secrets management system with automated rotation and audit logging',
        'Built CI/CD pipelines supporting multiple environments with automated testing, security scanning, and deployment validation',
        'Designed MLOps pipelines on Kubernetes for model training, serving, and A/B testing workflows',
        'Ensured HIPAA compliance through infrastructure controls, encryption at rest and in transit, and audit logging'
      ],
    },
  ];

  return (
    <section id="experience" className="py-12 md:py-20 px-6 md:pl-8 md:pr-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 md:mb-16">
          4+ YEARS OF
          <br />
          <span className="text-gradient">EXPERIENCE</span>
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-dark-lighter rounded-2xl p-8 border border-dark-border"
            >
              <div className="mb-4">
                <h3 className="text-2xl md:text-3xl font-bold mb-1">
                  {exp.company.split(' – ').slice(0, -1).join(' – ')}
                  <br />
                  <span className="text-lg md:text-xl text-gray-400 font-normal">
                    {exp.company.split(' – ').slice(-1)[0]}
                  </span>
                </h3>
                <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 max-w-3xl">{exp.description}</p>
              </div>
              <ul className="space-y-3">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="text-sm md:text-base text-gray-400 flex items-start">
                    <span className="text-[#F36A2F] mr-2 md:mr-3 mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
