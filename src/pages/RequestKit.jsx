import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const RequestKit = () => {
  const [step, setStep] = useState(1);
  const [quizData, setQuizData] = useState({
    age18OrOlder: '',
    hasHair: '',
    cancerDiagnosis: '',
  });
  const [formData, setFormData] = useState({
    address: '',
    phone: '',
    deliveryNotes: '',
  });
  const [referenceNumber] = useState(`KR-2024-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`);
  const navigate = useNavigate();

  const handleQuizChange = (field, value) => {
    setQuizData({ ...quizData, [field]: value });
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const canProceedQuiz = () => {
    return quizData.age18OrOlder && quizData.hasHair && quizData.cancerDiagnosis;
  };

  const canSubmitForm = () => {
    return formData.address && formData.phone;
  };

  const handleQuizSubmit = () => {
    if (canProceedQuiz()) {
      setStep(2);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (canSubmitForm()) {
      setStep(3);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-900">Request Diagnostic Kit</h1>
        <p className="text-gray-600 mt-2 text-lg">Complete the process to request your kit.</p>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center flex-1">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                s === step
                  ? 'bg-blue-600 text-white'
                  : s < step
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-300 text-gray-600'
              }`}
            >
              {s < step ? '✓' : s}
            </div>
            {s < 3 && (
              <div
                className={`flex-1 h-1 mx-2 ${
                  s < step ? 'bg-green-600' : 'bg-gray-300'
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Qualification Quiz */}
      {step === 1 && (
        <Card>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 1: Qualification Quiz</h2>
          <div className="space-y-6">
            <div>
              <p className="font-medium text-gray-900 mb-3">1. Are you 18 years of age or older?</p>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="age18OrOlder"
                    checked={quizData.age18OrOlder === 'yes'}
                    onChange={() => handleQuizChange('age18OrOlder', 'yes')}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="age18OrOlder"
                    checked={quizData.age18OrOlder === 'no'}
                    onChange={() => handleQuizChange('age18OrOlder', 'no')}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>

            <div>
              <p className="font-medium text-gray-900 mb-3">2. Do you have at least 1/2 inch of hair growth?</p>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="hasHair"
                    checked={quizData.hasHair === 'yes'}
                    onChange={() => handleQuizChange('hasHair', 'yes')}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="hasHair"
                    checked={quizData.hasHair === 'no'}
                    onChange={() => handleQuizChange('hasHair', 'no')}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>

            <div>
              <p className="font-medium text-gray-900 mb-3">3. Have you been diagnosed with cancer?</p>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="cancerDiagnosis"
                    checked={quizData.cancerDiagnosis === 'yes'}
                    onChange={() => handleQuizChange('cancerDiagnosis', 'yes')}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="cancerDiagnosis"
                    checked={quizData.cancerDiagnosis === 'no'}
                    onChange={() => handleQuizChange('cancerDiagnosis', 'no')}
                    className="mr-2"
                  />
                  No
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="cancerDiagnosis"
                    checked={quizData.cancerDiagnosis === 'prefer-not-to-say'}
                    onChange={() => handleQuizChange('cancerDiagnosis', 'prefer-not-to-say')}
                    className="mr-2"
                  />
                  Prefer not to say
                </label>
              </div>
            </div>

            <Button onClick={handleQuizSubmit} disabled={!canProceedQuiz()}>
              Continue
            </Button>
          </div>
        </Card>
      )}

      {/* Step 2: Request Form */}
      {step === 2 && (
        <Card>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 2: Shipping Information</h2>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Shipping Address *
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleFormChange}
                required
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your complete shipping address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Notes (Optional)
              </label>
              <textarea
                name="deliveryNotes"
                value={formData.deliveryNotes}
                onChange={handleFormChange}
                rows="2"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Best time to deliver, gate code, etc."
              />
            </div>

            <div className="flex gap-4">
              <Button type="button" variant="secondary" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button type="submit" disabled={!canSubmitForm()}>
                Submit Request
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Step 3: Confirmation */}
      {step === 3 && (
        <Card className="text-center">
          <div className="text-6xl mb-4">✓</div>
          <h2 className="text-3xl font-bold text-green-600 mb-4">Request Submitted Successfully!</h2>
          <p className="text-gray-700 mb-2">Your kit request has been submitted.</p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6 inline-block">
            <p className="text-sm text-gray-600 mb-1">Reference Number</p>
            <p className="text-2xl font-bold text-blue-600">{referenceNumber}</p>
          </div>
          <div className="text-left bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-gray-900 mb-3">Next Steps:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Your request will be reviewed within 1-2 business days</li>
              <li>✓ You'll receive a confirmation email once approved</li>
              <li>✓ Your kit will be shipped within 5-7 business days</li>
              <li>✓ Track your request status in the dashboard</li>
            </ul>
          </div>
          <Button onClick={() => navigate('/dashboard')}>Return to Dashboard</Button>
        </Card>
      )}
    </div>
  );
};

export default RequestKit;
