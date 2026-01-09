export default function DarkBlogSection() {
  return (
    <section id="about" className="py-12 md:py-20 px-6 md:pl-8 md:pr-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 md:mb-16">
          ABOUT
          <br />
          <span className="text-gradient">ME</span>
        </h2>

        <div className="space-y-8">
          <div className="bg-dark-lighter rounded-2xl p-8 md:p-12 border border-dark-border">
            <p className="text-sm md:text-xl text-gray-300 leading-relaxed max-w-4xl">
              Senior DevOps Engineer and Cloud Architect specializing in Kubernetes, CI/CD, and infrastructure as code. 
              Building GitOps workflows, autoscaling systems, and observability platforms for scalable operations. 
              Focused on reliability, security, and cost optimization.
            </p>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dark-lighter rounded-2xl p-6 border border-dark-border">
                <h4 className="text-xl font-bold mb-2">AWS Certified Solutions Architect – Associate</h4>
              </div>
              <div className="bg-dark-lighter rounded-2xl p-6 border border-dark-border">
                <h4 className="text-xl font-bold mb-2">Certified Kubernetes Administrator (CKA)</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
