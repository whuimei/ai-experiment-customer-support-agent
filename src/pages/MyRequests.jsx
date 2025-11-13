import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Modal from '../components/ui/Modal';

const MyRequests = () => {
  const { requests } = useAuth();
  const [selectedRequest, setSelectedRequest] = useState(null);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-900">My Kit Requests</h1>
        <p className="text-gray-600 mt-2 text-lg">View and track all your diagnostic kit requests.</p>
      </div>

      <div className="grid gap-6">
        {requests.map((request) => (
          <Card key={request.id} onClick={() => setSelectedRequest(request)}>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{request.id}</h3>
                  <Badge status={request.status} />
                </div>
                <div className="space-y-1 text-gray-600">
                  <p><span className="font-medium">Submitted:</span> {new Date(request.submittedDate).toLocaleDateString()}</p>
                  {request.shippedDate && (
                    <p><span className="font-medium">Shipped:</span> {new Date(request.shippedDate).toLocaleDateString()}</p>
                  )}
                  {request.trackingNumber && (
                    <p><span className="font-medium">Tracking:</span> {request.trackingNumber}</p>
                  )}
                  <p><span className="font-medium">Address:</span> {request.address}</p>
                </div>
              </div>
              <div className="text-blue-600 hover:text-blue-800 font-medium">
                View Details →
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Request Detail Modal */}
      <Modal
        isOpen={!!selectedRequest}
        onClose={() => setSelectedRequest(null)}
        title={`Request ${selectedRequest?.id}`}
      >
        {selectedRequest && (
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Status</h3>
              <Badge status={selectedRequest.status} />
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Timeline</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-1 mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-900">Request Submitted</p>
                    <p className="text-sm text-gray-600">{new Date(selectedRequest.submittedDate).toLocaleString()}</p>
                  </div>
                </div>
                {selectedRequest.shippedDate && (
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-1 mr-3"></div>
                    <div>
                      <p className="font-medium text-gray-900">Kit Shipped</p>
                      <p className="text-sm text-gray-600">{new Date(selectedRequest.shippedDate).toLocaleString()}</p>
                    </div>
                  </div>
                )}
                {selectedRequest.receivedDate && (
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-1 mr-3"></div>
                    <div>
                      <p className="font-medium text-gray-900">Sample Received</p>
                      <p className="text-sm text-gray-600">{new Date(selectedRequest.receivedDate).toLocaleString()}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Shipping Information</h3>
              <p className="text-gray-700">{selectedRequest.address}</p>
              {selectedRequest.trackingNumber && (
                <p className="text-gray-700 mt-2">
                  <span className="font-medium">Tracking Number:</span> {selectedRequest.trackingNumber}
                </p>
              )}
              {selectedRequest.estimatedDelivery && (
                <p className="text-gray-700 mt-2">
                  <span className="font-medium">Estimated Delivery:</span> {new Date(selectedRequest.estimatedDelivery).toLocaleDateString()}
                </p>
              )}
            </div>

            {selectedRequest.quizResponses && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Quiz Responses</h3>
                <div className="space-y-1 text-gray-700">
                  <p>18 or older: {selectedRequest.quizResponses.age18OrOlder ? 'Yes' : 'No'}</p>
                  <p>Has sufficient hair: {selectedRequest.quizResponses.hasHair ? 'Yes' : 'No'}</p>
                  <p>Cancer diagnosis: {selectedRequest.quizResponses.cancerDiagnosis}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MyRequests;
