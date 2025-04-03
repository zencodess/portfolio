
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="p-6 space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Sathya Sravya V</h1>
        <p className="text-muted-foreground">Software Developer | ML Infra | Systems | Backend</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Projects by Organization</h2>
        <Card>
          <CardContent className="space-y-2 p-4">
            <h3 className="text-lg font-medium">Micron Technology</h3>
            <ul className="list-disc pl-5">
              <li>GateKeeper - Distributed access control with Neo4j and Redis</li>
              <li>AutoCodeDoc - Design verification code generation tool</li>
              <li>Performance Predictor - ML pipeline on DRAM chip simulations</li>
              <li>AutoPkgVerify - Package pin validation and automation</li>
              <li>Simulation & Device Dashboards - Real-time drill-down dashboards</li>
              <li>Advanced Data Management - Abstracted SQL/NoSQL backend layer</li>
              <li>Time-Critical On-Call Support - 65+ issues resolved during chip releases</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-2 p-4">
            <h3 className="text-lg font-medium">Academic & Research</h3>
            <ul className="list-disc pl-5">
              <li>AIDB (UIUC) - Approximate aggregation engine for ML analytics</li>
              <li>TruthLens - Real-time QA validation using LLaMA and Wikidata</li>
              <li>Ride-Share Demand Viewer - High throughput Kafka pipeline</li>
              <li>Evolutionary Circuit Optimization - NSGA-II optimization on circuits</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Projects by Expertise</h2>
        <Card>
          <CardContent className="space-y-2 p-4">
            <ul className="list-disc pl-5">
              <li><strong>Backend & Systems:</strong> GateKeeper, AutoPkgVerify, Dashboards</li>
              <li><strong>Data & ML Engineering:</strong> Performance Predictor, AIDB, Ride-Share App</li>
              <li><strong>NLP & AI Safety:</strong> TruthLens, Morningstar Info Extractor</li>
              <li><strong>EDA / Semiconductors:</strong> AutoCodeDoc, AutoPkgVerify, Advanced Data Mgmt</li>
              <li><strong>Embedded & Circuits:</strong> FPGA calculator, Evolutionary Optimization</li>
              <li><strong>Cloud & DevOps:</strong> URL Shortener, GateKeeper, Docker/K8s tools</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Education</h2>
        <Card>
          <CardContent className="p-4">
            <p><strong>University of Amsterdam</strong> – MSc Computer Science (Big Data Engineering), 2024–2026</p>
            <p><strong>IIIT Hyderabad</strong> – B.Tech Electronics & Communication, 2016–2020</p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Awards & Recognitions</h2>
        <Card>
          <CardContent className="p-4 space-y-1">
            <p>Third Best Poster Award at Micron for AutoCodeDoc</p>
            <p>Excellent Execution, Customer Focus awards across DRAM teams</p>
            <p>UIUC collaboration selected on merit for AIDB project</p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Publications & Research</h2>
        <Card>
          <CardContent className="p-4 space-y-1">
            <p>Process Automation (Micron India Technical Seminar)</p>
            <p>Collaborative Platform for DRAM (Micron DRAM Seminar)</p>
            <p>Research collaboration with UIUC for AIDB</p>
            <p>LLM QA Verification via TruthLens</p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Other Responsibilities</h2>
        <Card>
          <CardContent className="p-4 space-y-1">
            <p>Resolved 65+ internal tooling issues during chip release cycles (Micron)</p>
            <p>Mentored interns and supported onboarding</p>
            <p>Coordinated feature rollout and debugging with cross-functional teams</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
