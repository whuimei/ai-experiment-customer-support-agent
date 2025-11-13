const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 text-center">Privacy Policy</h1>
          <p className="text-gray-600 mb-8 text-center">Last Updated: October 2024</p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Data Collection</h2>
              <p>
                We collect hair samples and associated health information solely for research purposes.
                All data is anonymized immediately upon receipt to protect your identity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Data Anonymization</h2>
              <p>
                Your personal information is separated from your biological sample. Each sample receives
                a unique identification code that cannot be traced back to you. We use industry-standard
                encryption methods to protect all digital records.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Data Usage</h2>
              <p>
                Your anonymized data will be used exclusively for cancer research. This includes:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Biomarker detection and analysis</li>
                <li>Development of diagnostic algorithms</li>
                <li>Publication in peer-reviewed scientific journals</li>
                <li>Presentation at medical conferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">HIPAA Compliance</h2>
              <p>
                We comply with the Health Insurance Portability and Accountability Act (HIPAA) and
                all applicable federal and state privacy laws. Your protected health information
                is handled with the highest level of security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Data Retention</h2>
              <p>
                Samples and associated data may be retained for up to 10 years for ongoing research.
                After this period, all biological samples will be properly disposed of and digital
                records will be securely deleted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Withdraw from the study at any time</li>
                <li>Request destruction of your sample</li>
                <li>Access your research data</li>
                <li>Request corrections to your personal information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Contact Us</h2>
              <p>
                If you have questions about our privacy practices, please contact our Privacy Officer at:
                <br />
                <a href="mailto:privacy@example.com" className="text-blue-600 hover:underline">
                  privacy@example.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
