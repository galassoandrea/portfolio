import { skills } from "@/data/skills";
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiVercel,
  SiGooglecolab
} from "react-icons/si";
import { MdSmartToy } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";

const skillIcons = {
  Python: SiPython,
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  HuggingFace: MdSmartToy,
  Pandas: SiPandas,
  Numpy: SiNumpy,
  SKlearn: SiScikitlearn,
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  ReactJS: SiReact,
  NextJS: SiNextdotjs,
  NodeJS: SiNodedotjs,
  TailwindCSS: SiTailwindcss,
  SQL: FaDatabase,
  Git: SiGit,
  GitHub: SiGithub,
  Vercel: SiVercel,
  Colab: SiGooglecolab
};

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-8 py-24">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
        <span className="h-px w-12 bg-blue-500"></span>
        Skills & Tools
      </h2>

      <div className="flex flex-wrap justify-center gap-4 w-full">
        {skills.map((skill) => {
          const IconComponent = skillIcons[skill];
          return (
            <div
              key={skill}
              className="flex items-center justify-center gap-4 max-w-xl h-10 px-4 bg-slate-800 rounded-lg border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-700 transition cursor-pointer"
            >
              {IconComponent && (
                <IconComponent size={20} className="mb-1 text-blue-400" />
              )}
              <span className="text-sm font-medium text-slate-300 text-center">
                {skill}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}