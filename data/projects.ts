export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  previewLink: string;
}

export const projects: Project[] = [
  {
    title: "Skin Lesion Classifier",
    description: "Fine-tuning of a Transformer-based model for Skin Lesion Classification in medical images.",
    image: "/skin-lesion-classifier.JPG",
    tags: ["Python", "PyTorch", "Transformers"],
    githubLink: "https://github.com/galassoandrea/skin-lesion-classification",
    previewLink: "https://huggingface.co/spaces/andreagalasso99/skin-lesion-classifier-deit",
  },
  {
    title: "Financial RAG Assistant",
    description: "A financial RAG system based on 10-K filings from different companies.",
    image: "/rag-assistant.JPG",
    tags: ["Python", "RAG", "Pinecone", "Transformers", "Groq"],
    githubLink: "https://github.com/galassoandrea/rag-assistant",
    previewLink: "https://huggingface.co/spaces/andreagalasso99/financial-rag-assistant"
  },
  {
    title: "ShellSLM",
    description: "A small language model fine-tuned to translate natural language instructions into shell commands.",
    image: "/shell-slm.PNG",
    tags: ["Python", "Transformers", "Unsloth", "Peft", "LoRA"],
    githubLink: "https://github.com/galassoandrea/shell-SLM",
    previewLink: "https://huggingface.co/spaces/andreagalasso99/shell-SLM"
  },
];