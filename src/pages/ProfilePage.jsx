import { useAuth } from '../contexts/AuthContext';
import Card from '../components/ui/Card';

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-900">My Profile</h1>
        <p className="text-gray-600 mt-2 text-lg">View your account information.</p>
      </div>

      <Card>
        <h2 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
            <p className="text-lg text-gray-900">{user?.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <p className="text-lg text-gray-900">{user?.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Phone</label>
            <p className="text-lg text-gray-900">{user?.phone}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Address</label>
            <p className="text-lg text-gray-900">{user?.address}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Member Since</label>
            <p className="text-lg text-gray-900">{user?.memberSince}</p>
          </div>
        </div>
      </Card>

      <Card className="bg-gray-50">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Account Settings</h2>
        <p className="text-gray-600">
          This is a demo version with hardcoded user data. Profile editing is not available in this version.
        </p>
      </Card>
    </div>
  );
};

export default ProfilePage;
