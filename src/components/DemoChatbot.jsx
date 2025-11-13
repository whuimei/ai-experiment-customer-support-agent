import { useState } from 'react';

/**
 * Demo Chatbot Component
 *
 * This is a visual demo of what the FAQ chatbot will look like.
 * Replace this with the actual Voiceflow integration when you have credentials.
 */

const DemoChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const demoQuestions = [
    {
      question: 'What is this diagnostic method?',
      answer: 'We analyze hair strands to detect early cancer biomarkers. Hair contains metabolic information that can reveal cellular changes.'
    },
    {
      question: 'Who is eligible to participate?',
      answer: 'You must be 18+ years old, have at least 1/2 inch of hair, and not be undergoing chemotherapy.'
    },
    {
      question: 'How long does the process take?',
      answer: 'After requesting, your kit arrives in 5-7 days. Sample analysis takes 2-3 weeks. This is for research purposes only.'
    },
    {
      question: 'Is my data private?',
      answer: 'Yes! All samples are anonymized immediately. We comply with HIPAA and use industry-standard encryption.'
    }
  ];

  return (
    <>
      {/* Chat Widget Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">FAQ Assistant</h3>
              <p className="text-sm text-blue-100">Ask me anything about our program</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 text-2xl leading-none"
            >
              ×
            </button>
          </div>

          {/* Chat Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {/* Welcome Message */}
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p className="text-sm text-gray-800">
                👋 <strong>Welcome!</strong> I'm your FAQ assistant. Click any question below or type your own.
              </p>
            </div>

            {/* Demo Questions */}
            <div className="space-y-2">
              <p className="text-xs text-gray-500 font-semibold uppercase">Frequently Asked:</p>
              {demoQuestions.map((item, index) => (
                <details key={index} className="bg-gray-50 rounded-lg border border-gray-200">
                  <summary className="p-3 cursor-pointer hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-800">
                    {item.question}
                  </summary>
                  <div className="p-3 pt-0 text-sm text-gray-700 leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>

            {/* Demo Note */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-4">
              <p className="text-xs text-yellow-800">
                <strong>Demo Mode:</strong> This is a demo chatbot. Replace with your Voiceflow credentials in{' '}
                <code className="bg-yellow-100 px-1 rounded">src/config/voiceflow.js</code>
              </p>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your question..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled
              />
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium"
                disabled
              >
                Send
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Demo mode - input disabled</p>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition-all hover:scale-110 flex items-center justify-center z-50 group"
        aria-label="Open FAQ Chat"
      >
        {isOpen ? (
          <span className="text-2xl">×</span>
        ) : (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}

        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute right-20 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Have questions? Chat with us!
          </div>
        )}
      </button>

      {/* Demo Badge */}
      {isOpen && (
        <div className="fixed bottom-[540px] right-6 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg z-50">
          DEMO MODE
        </div>
      )}
    </>
  );
};

export default DemoChatbot;
