export default function DarkProjectsSection() {
  const projects = [
    {
      title: 'GitOps-Based Kubernetes Platform',
      problem: 'Manual deployments causing inconsistencies and deployment failures',
      approach: 'Designed declarative GitOps workflow using ArgoCD for continuous deployment. Implemented multi-environment promotion strategy with automated sync policies and health checks. Built self-service infrastructure provisioning with RBAC and namespace isolation.',
      tools: 'Kubernetes, ArgoCD, GitLab, Helm, Terraform',
      impact: 'Reduced deployment time by 75%, eliminated manual deployment errors, enabled zero-downtime deployments'
    },
    {
      title: 'Event-Driven Autoscaling System',
      problem: 'Fixed capacity unable to handle variable workloads, leading to over-provisioning and cost waste',
      approach: 'Implemented KEDA-based autoscaling for Kubernetes workloads using custom metrics from Prometheus and message queue depth. Designed scaling policies with predictive algorithms to handle traffic spikes. Integrated with cost monitoring to optimize resource allocation.',
      tools: 'Kubernetes, KEDA, Prometheus, RabbitMQ, AWS EKS',
      impact: 'Achieved 40% cost reduction while maintaining 99.9% availability during traffic spikes up to 10x baseline'
    },
    {
      title: 'Observability & Monitoring Platform',
      problem: 'Lack of visibility into system health, slow incident detection and resolution',
      approach: 'Built comprehensive observability stack with Prometheus for metrics, Loki for logs, and distributed tracing. Created unified Grafana dashboards with SLO-based alerting. Implemented log aggregation pipeline with ELK stack for search and analysis.',
      tools: 'Prometheus, Grafana, Loki, ELK Stack, OpenTelemetry, Jaeger',
      impact: 'Reduced MTTR from 2 hours to 15 minutes, improved system reliability visibility, enabled proactive issue detection'
    },
    {
      title: 'Secure CI/CD Pipeline',
      problem: 'Security vulnerabilities introduced in production due to lack of automated security checks',
      approach: 'Designed DevSecOps pipeline with automated security scanning at build, container, and infrastructure levels. Integrated Trivy for vulnerability scanning, Snyk for dependency analysis, and OPA Gatekeeper for policy enforcement. Implemented secrets management with Vault and automated rotation.',
      tools: 'Jenkins, GitLab CI, Trivy, Snyk, Vault, OPA Gatekeeper, SonarQube',
      impact: 'Eliminated critical vulnerabilities in production, reduced security review time by 80%, achieved SOC 2 compliance'
    },
    {
      title: 'MLOps Pipeline on Kubernetes',
      problem: 'Manual ML model deployment process causing delays and inconsistencies',
      approach: 'Architected end-to-end MLOps pipeline on Kubernetes for model training, versioning, serving, and A/B testing. Implemented model registry with automated testing and validation gates. Built scalable inference serving with auto-scaling based on request patterns.',
      tools: 'Kubernetes, Kubeflow, MLflow, Seldon Core, Prometheus, Argo Workflows',
      impact: 'Reduced model deployment time from days to hours, enabled A/B testing with 50% faster iteration cycles'
    },
  ];

  return (
    <section id="projects" className="py-12 md:py-20 px-6 md:pl-8 md:pr-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 md:mb-16">
          RECENT
          <br />
          <span className="text-gradient">PROJECTS</span>
        </h2>

        <div className="space-y-4 md:space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-dark-lighter rounded-2xl p-4 md:p-8 border border-dark-border"
            >
              <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">{project.title}</h3>
              <p className="text-sm md:text-base text-gray-400 mb-2 md:mb-4 font-medium">{project.problem}</p>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4 leading-relaxed line-clamp-3 md:line-clamp-none">{project.approach}</p>
              <div className="mb-3 md:mb-4">
                <p className="text-xs md:text-sm text-gray-500 mb-1 md:mb-2">Tools:</p>
                <p className="text-xs md:text-sm text-gray-400 line-clamp-2 md:line-clamp-none">{project.tools}</p>
              </div>
              <div className="pt-3 md:pt-4 border-t border-dark-border">
                <p className="text-xs md:text-sm text-[#F36A2F] font-semibold line-clamp-2 md:line-clamp-none">Impact: {project.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
