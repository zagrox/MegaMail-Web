
import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  schemas?: object[];
}

const SEO: React.FC<SEOProps> = ({ title, description, schemas }) => {
  useEffect(() => {
    document.title = title;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Remove old schema script if it exists
    const oldScript = document.getElementById('json-ld-schema');
    if (oldScript) {
      oldScript.remove();
    }
    
    // Add new schema script
    if (schemas && schemas.length > 0) {
      const script = document.createElement('script');
      script.id = 'json-ld-schema';
      script.type = 'application/ld+json';
      
      const schemaPayload = schemas.length > 1 
        ? { "@context": "https://schema.org", "@graph": schemas }
        : { "@context": "https://schema.org", ...schemas[0] };
        
      script.innerHTML = JSON.stringify(schemaPayload);
      document.head.appendChild(script);
    }
    
    // Cleanup function
    return () => {
      const script = document.getElementById('json-ld-schema');
      if (script) {
        script.remove();
      }
    };
  }, [title, description, schemas]);

  return null; // This component does not render anything
};

export default SEO;