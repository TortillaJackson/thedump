
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  image?: string;
  sources?: string;
  createdAt: string;
  excerpt: string;
  externalUrl?: string;
}

export interface NewPost {
  title: string;
  content: string;
  image: string;
  sources: string;
}
