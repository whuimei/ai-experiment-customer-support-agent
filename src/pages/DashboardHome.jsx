import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const DashboardHome = () => {
  const { user, requests } = useAuth();

  const stats = {
    total: requests.length,
    active: requests.filter(r => r.status !== 'Sample Received').length,
    completed: requests.filter(r => r.status === 'Sample Received').length,
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Welcome Section */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
        <p className="text-gray-600 mt-2 text-lg">Here's an overview of your diagnostic kit requests.</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <div className="text-center">
            <p className="text-gray-600 text-sm font-medium">Total Requests</p>
            <p className="text-4xl font-bold text-blue-600 mt-2">{stats.total}</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-gray-600 text-sm font-medium">Active Requests</p>
            <p className="text-4xl font-bold text-orange-600 mt-2">{stats.active}</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-gray-600 text-sm font-medium">Completed</p>
            <p className="text-4xl font-bold text-green-600 mt-2">{stats.completed}</p>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="flex gap-4">
          <Link to="/dashboard/request-kit">
            <Button variant="primary">Request New Kit</Button>
          </Link>
          <Link to="/dashboard/requests">
            <Button variant="outline">View All Requests</Button>
          </Link>
        </div>
      </Card>

      {/* Recent Activity */}
      <Card>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {requests.slice(0, 3).map((request) => (
            <div key={request.id} className="flex justify-between items-center pb-4 border-b last:border-b-0">
              <div>
                <p className="font-semibold text-gray-900">{request.id}</p>
                <p className="text-sm text-gray-600">Submitted: {new Date(request.submittedDate).toLocaleDateString()}</p>
              </div>
              <Badge status={request.status} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default DashboardHome;
