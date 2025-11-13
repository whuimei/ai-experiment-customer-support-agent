const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 text-center">Terms of Use</h1>
          <p className="text-gray-600 mb-8 text-center">Last Updated: October 2024</p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Participation Requirements</h2>
              <p>To participate in this research study, you must:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Be 18 years of age or older</li>
                <li>Have at least 1/2 inch of hair growth</li>
                <li>Not be currently undergoing chemotherapy</li>
                <li>Provide informed consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Informed Consent</h2>
              <p>
                By requesting a diagnostic kit, you acknowledge that you have read and understood
                the purpose of this research study. You consent to:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Providing a hair sample for research purposes</li>
                <li>Having your anonymized data used in cancer research</li>
                <li>Potential publication of anonymized findings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Voluntary Participation</h2>
              <p>
                Your participation is entirely voluntary. You may withdraw from the study at any time
                without penalty. To withdraw, contact us at{' '}
                <a href="mailto:support@example.com" className="text-blue-600 hover:underline">
                  support@example.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Not a Diagnostic Service</h2>
              <p className="font-semibold text-red-600">
                IMPORTANT: This is a research study, not a clinical diagnostic service.
              </p>
              <p className="mt-2">
                We will NOT provide individual results or diagnoses. If you have health concerns,
                please consult with a qualified healthcare provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Sample Handling</h2>
              <p>
                All samples must be collected according to the provided instructions. Improperly
                collected samples may be excluded from analysis. We are not responsible for samples
                lost or damaged during shipping.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Intellectual Property</h2>
              <p>
                Any discoveries or intellectual property developed from this research will belong
                to the research institution. Participants waive any claim to future commercial
                applications or profits.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Limitation of Liability</h2>
              <p>
                The research team and institution are not liable for any damages arising from
                participation in this study, except in cases of gross negligence or willful misconduct.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Participants will be notified
                of significant changes via email. Continued participation constitutes acceptance of
                updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Contact Information</h2>
              <p>
                Questions about these terms? Contact us at:
                <br />
                <a href="mailto:legal@example.com" className="text-blue-600 hover:underline">
                  legal@example.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
