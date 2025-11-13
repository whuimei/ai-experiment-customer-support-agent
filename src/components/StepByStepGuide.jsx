import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { VOICEFLOW_CONFIG } from '../config/voiceflow';

/**
 * Step-by-Step Guide Chatbot Component - Voiceflow Integration
 *
 * This component loads the Voiceflow Step-by-Step Guide chatbot for authenticated users.
 * The chatbot provides guidance for sample collection and submission.
 * It only appears in the dashboard, not on public pages.
 */

const StepByStepGuide = () => {
  const { user, requests } = useAuth();

  useEffect(() => {
    // Only load the Step-by-Step Guide chatbot when user is authenticated
    if (!user) {
      return;
    }

    // Check if guide widget script already loaded
    const existingScript = document.getElementById('voiceflow-guide-widget-script');
    if (existingScript) {
      console.log('Step-by-Step Guide widget already loaded');
      return;
    }

    // Get active request for user context
    const activeRequest = requests.find(r => r.status !== 'Sample Received') || requests[0];

    // Create and load Voiceflow script using the exact format from Voiceflow
    const script = document.createElement('script');
    script.id = 'voiceflow-guide-widget-script';
    script.type = 'text/javascript';

    script.onload = function() {
      window.voiceflow.chat.load({
        verify: { projectID: VOICEFLOW_CONFIG.guide.projectID },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        voice: {
          url: "https://runtime-api.voiceflow.com"
        },
        // 💡 START OF HARD RESET CONFIGURATION 💡
        session: {
          // Setting storeHistory to false prevents the chat history from persisting 
          // in the user's browser (Local Storage) across new browser sessions.
          storeHistory: false, 
          
          // Setting resume to 'disabled' prevents the chat from automatically 
          // restoring the previous conversation state (variables, flow position) 
          // when the user returns, forcing a reset.
          resume: 'disabled' 
        }
        // 💡 END OF HARD RESET CONFIGURATION
        // Pass user context for personalization
      }).then(() => {
        console.log('Step-by-Step Guide chatbot loaded successfully');
        console.log('User context:', { name: user.name, requestID: activeRequest?.id });
      }).catch((error) => {
        console.error('Error loading Step-by-Step Guide chatbot:', error);
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

    // Cleanup function when user logs out or component unmounts
    return () => {
      // Remove script when component unmounts
      const scriptToRemove = document.getElementById('voiceflow-guide-widget-script');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }

      // Hide widget if it exists
      if (window.voiceflow && window.voiceflow.chat) {
        try {
          window.voiceflow.chat.hide();
        } catch (e) {
          console.log('Error hiding Step-by-Step Guide widget:', e);
        }
      }
    };
  }, [user, requests]);

  // This component doesn't render anything visible
  // The Voiceflow widget will appear as a floating button in the dashboard
  return null;
};

export default StepByStepGuide;
