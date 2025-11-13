/**
 * Voiceflow Configuration
 *
 * This file contains configuration settings for Voiceflow chatbot integrations.
 * Replace the placeholder values with your actual Voiceflow project IDs.
 */

export const VOICEFLOW_CONFIG = {
  // FAQ Chatbot (Public Pages)
  faq: {
    projectID: '68fa3da9327e94185fba3025', // Real Voiceflow project ID
    versionID: 'production',
    title: 'FAQ Assistant',
    description: 'Ask me anything about our diagnostic program',
    color: '#2563EB', // Blue color matching the app theme
    position: 'bottom-right',
  },

  // Step-by-Step Guide Chatbot (Dashboard - Milestone 4)
  guide: {
    projectID: '68fb282217054f3eaef34881', // Real Voiceflow project ID for Guide
    versionID: 'production',
    title: 'Sample Collection Guide',
    description: 'Get step-by-step help with your sample',
    color: '#2563EB',
    position: 'bottom-right',
  },

  // Voiceflow API settings
  api: {
    url: 'https://general-runtime.voiceflow.com',
    widgetUrl: 'https://cdn.voiceflow.com/widget/bundle.mjs',
  },
};

/**
 * Demo Mode Settings
 * Set to true to show a demo chatbot button without actual Voiceflow integration
 */
export const DEMO_MODE = false; // Now using real Voiceflow integration
