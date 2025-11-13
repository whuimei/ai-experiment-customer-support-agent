import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import FAQChatbot from '../components/FAQChatbot';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* FAQ Chatbot */}
      <FAQChatbot />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-black py-20 px-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Advancing Cancer Research Through Hair Strand Analysis</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our groundbreaking research study using innovative diagnostic methods to detect early cancer markers in hair samples.
          </p>
          <Link to="/login">
            <Button variant="primary" className="bg-blue text-blue-600 hover:bg-blue-100 text-lg px-8 py-4">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">1. Request Your Kit</h3>
              <p className="text-gray-600">
                Complete a brief eligibility questionnaire and request your free diagnostic kit. We'll ship it to your address within 5-7 business days.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">✂️</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">2. Collect Your Sample</h3>
              <p className="text-gray-600">
                Follow our simple step-by-step guide to collect a small hair sample. The process is quick, painless, and can be done at home.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">📬</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">3. Send It Back</h3>
              <p className="text-gray-600">
                Mail your sample using the prepaid envelope. Our lab will analyze it and contribute to advancing cancer detection research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">About Our Research</h2>
          <div className="max-w-4xl mx-auto text-gray-700 text-lg space-y-6 leading-relaxed">
            <p className="text-center">
              Our research team is developing innovative methods to detect cancer biomarkers in hair strands.
              Hair contains metabolic information that can reveal early signs of cellular changes associated with cancer.
            </p>
            <p className="text-center">
              This non-invasive approach could revolutionize early cancer detection, making screening more accessible,
              affordable, and comfortable for millions of people worldwide.
            </p>
            <p className="font-semibold text-blue-600 text-center text-xl">
              Your participation helps advance life-saving research and brings us closer to earlier cancer detection.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Research Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Dr. Sarah Johnson', role: 'Principal Investigator', specialty: 'Oncology' },
              { name: 'Dr. Michael Chen', role: 'Lead Researcher', specialty: 'Biochemistry' },
              { name: 'Dr. Emily Rodriguez', role: 'Clinical Director', specialty: 'Pathology' },
              { name: 'Dr. James Wilson', role: 'Data Scientist', specialty: 'Bioinformatics' },
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-blue-600">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Your Privacy is Protected</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            All samples are anonymized and data is encrypted. We comply with HIPAA and international privacy standards.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/privacy">
              <Button variant="primary">Privacy Policy</Button>
            </Link>
            <Link to="/terms">
              <Button variant="primary">Terms of Use</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Diagnostic Kit Research. All rights reserved.</p>
          <div className="flex gap-6 justify-center mt-4">
            <Link to="/privacy" className="hover:text-blue-400">Privacy</Link>
            <Link to="/terms" className="hover:text-blue-400">Terms</Link>
            <a href="mailto:contact@example.com" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
