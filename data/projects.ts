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
    title: "SearchSphere",
    description: "A simple RAG Q&A search engine based on SQuAD 2.0 dataset.",
    image: "/search-sphere.PNG",
    tags: ["Next.js", "TypeScript", "Tailwind", "Gemini", "Transformers"],
    githubLink: "https://github.com/galassoandrea/SearchSphere",
    previewLink: "https://search-sphere.vercel.app/"
  },
];