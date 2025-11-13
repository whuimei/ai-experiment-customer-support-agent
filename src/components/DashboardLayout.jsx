import { Outlet } from 'react-router-dom';
import StepByStepGuide from './StepByStepGuide';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Step-by-Step Guide Chatbot - Only for authenticated users */}
      <StepByStepGuide />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
