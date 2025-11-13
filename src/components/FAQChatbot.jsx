import { useEffect } from 'react';
import { VOICEFLOW_CONFIG } from '../config/voiceflow';

/**
 * FAQ Chatbot Component - Voiceflow Integration
 *
 * This component loads the Voiceflow FAQ chatbot on public-facing pages.
 * The chatbot answers general questions about the diagnostic kit program.
 */

const FAQChatbot = () => {
  useEffect(() => {
    // Check if script already loaded
    if (window.voiceflow) {
      console.log('Voiceflow FAQ widget already loaded');
      return;
    }

    // Create and load Voiceflow script using the exact format from Voiceflow
    const script = document.createElement('script');
    script.id = 'voiceflow-faq-widget-script';
    script.type = 'text/javascript';

    script.onload = function() {
      window.voiceflow.chat.load({
        verify: { projectID: VOICEFLOW_CONFIG.faq.projectID },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        voice: {
          url: "https://runtime-api.voiceflow.com"
        }
      }).then(() => {
        console.log('FAQ Chatbot loaded successfully');
      }).catch((error) => {
        console.error('Error loading FAQ Chatbot:', error);
      });
    };

    script.onerror = () => {
      console.error('Failed to load Voiceflow widget script');
    };

    // Use widget-next bundle as specified by Voiceflow
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";

    // Insert script
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.body.appendChild(script);
    }

    // Cleanup function
    return () => {
      // Remove script when component unmounts
      const existingScript = document.getElementById('voiceflow-faq-widget-script');
      if (existingScript) {
        existingScript.remove();
      }

      // Hide widget if it exists
      if (window.voiceflow && window.voiceflow.chat) {
        try {
          window.voiceflow.chat.hide();
        } catch (e) {
          console.log('Error hiding widget:', e);
        }
      }
    };
  }, []);

  // This component doesn't render anything visible
  // The Voiceflow widget will appear as a floating button
  return null;
};

export default FAQChatbot;
