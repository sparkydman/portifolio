import {
  About,
  Contact,
  Education,
  Hero,
  Jobs,
  Layout,
  Projects,
} from "components";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Jobs />
      <Education />
      <Contact />
    </Layout>
  );
}
