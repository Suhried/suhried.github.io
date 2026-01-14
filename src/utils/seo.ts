/**
 * SEO utility functions for managing meta tags and document title
 */

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

/**
 * Update document title
 */
export const updateTitle = (title: string): void => {
  document.title = title;
};

/**
 * Update meta tag content
 */
const updateMetaTag = (name: string, content: string, attribute: string = 'name'): void => {
  let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.content = content;
};

/**
 * Update Open Graph meta tag
 */
const updateOGTag = (property: string, content: string): void => {
  updateMetaTag(property, content, 'property');
};

/**
 * Update Twitter Card meta tag
 */
const updateTwitterTag = (name: string, content: string): void => {
  updateMetaTag(name, content, 'name');
};

/**
 * Update all SEO meta tags based on provided data
 */
export const updateSEO = (data: SEOData): void => {
  if (data.title) {
    updateTitle(data.title);
    updateMetaTag('title', data.title);
  }

  if (data.description) {
    updateMetaTag('description', data.description);
  }

  if (data.keywords) {
    updateMetaTag('keywords', data.keywords);
  }

  // Open Graph tags
  if (data.ogTitle) {
    updateOGTag('og:title', data.ogTitle);
  }

  if (data.ogDescription) {
    updateOGTag('og:description', data.ogDescription);
  }

  if (data.ogImage) {
    updateOGTag('og:image', data.ogImage);
  }

  // Twitter Card tags
  if (data.twitterTitle) {
    updateTwitterTag('twitter:title', data.twitterTitle);
  }

  if (data.twitterDescription) {
    updateTwitterTag('twitter:description', data.twitterDescription);
  }

  if (data.twitterImage) {
    updateTwitterTag('twitter:image', data.twitterImage);
  }
};

/**
 * Default SEO data for the portfolio
 */
export const defaultSEO: SEOData = {
  title: 'Suhried Datta - Best DevOps Engineer & SRE in Bangladesh | Cloud Infrastructure Architect',
  description: 'Suhried Datta is a Senior DevOps Engineer, SRE, and Cloud Infrastructure Architect based in Bangladesh. Expert in Kubernetes, CI/CD, AWS, cloud automation, and scalable infrastructure.',
  keywords: 'Suhried Datta, DevOps Engineer Bangladesh, Best DevOps Bangladesh, SRE Bangladesh, Cloud Infrastructure Engineer, Kubernetes Expert, CI/CD Engineer, AWS Architect',
  ogTitle: 'Suhried Datta - Best DevOps Engineer & SRE in Bangladesh | Cloud Infrastructure Architect',
  ogDescription: 'Senior DevOps Engineer, SRE, and Cloud Infrastructure Architect specializing in Kubernetes, CI/CD, AWS, and scalable cloud infrastructure. Based in Bangladesh with 4+ years of experience.',
  ogImage: 'https://suhried.github.io/profile.jpg',
  twitterTitle: 'Suhried Datta - Best DevOps Engineer & SRE in Bangladesh',
  twitterDescription: 'Senior DevOps Engineer, SRE, and Cloud Infrastructure Architect specializing in Kubernetes, CI/CD, AWS, and scalable cloud infrastructure.',
  twitterImage: 'https://suhried.github.io/profile.jpg',
};


