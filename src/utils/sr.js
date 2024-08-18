import dynamic from "next/dynamic";

const ScrollReveal = dynamic(() => import("scrollreveal"), { ssr: false });

const isSSR = typeof window === "undefined";
const sr = isSSR ? null : ScrollReveal;

export default sr;
