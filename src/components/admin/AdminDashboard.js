import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  Users, 
  Calendar, 
  MessageCircle, 
  Bot, 
  TrendingUp, 
  LogOut,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { toast } from 'sonner';

export const AdminDashboard = ({ token, onLogout }) => {
  const [stats, setStats] = useState({});
  const [contacts, setContacts] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [chatbotQuotes, setChatbotQuotes] = useState([]);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(true);

  const apiHeaders = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    setIsLoading(true);
    try {
      // Fetch dashboard stats
      const statsResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/admin/dashboard/stats`, {
        headers: apiHeaders
      });
      if (statsResponse.ok) {
        const statsData = await statsResponse.json();
        setStats(statsData);
      }

      // Fetch contacts
      const contactsResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/admin/contacts`, {
        headers: apiHeaders
      });
      if (contactsResponse.ok) {
        const contactsData = await contactsResponse.json();
        setContacts(contactsData);
      }

      // Fetch bookings
      const bookingsResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/admin/bookings`, {
        headers: apiHeaders
      });
      if (bookingsResponse.ok) {
        const bookingsData = await bookingsResponse.json();
        setBookings(bookingsData);
      }

      // Fetch chatbot quotes
      const quotesResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/admin/chatbot-quotes`, {
        headers: apiHeaders
      });
      if (quotesResponse.ok) {
        const quotesData = await quotesResponse.json();
        setChatbotQuotes(quotesData);
      }

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast.error('Error loading dashboard data');
    } finally {
      setIsLoading(false);
    }
  };

  const updateContactStatus = async (contactId, newStatus) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/admin/contacts/${contactId}/status`, {
        method: 'PUT',
        headers: apiHeaders,
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok) {
        toast.success(`Contact marked as ${newStatus}`);
        fetchDashboardData(); // Refresh data
      } else {
        toast.error('Failed to update contact status');
      }
    } catch (error) {
      console.error('Error updating contact status:', error);
      toast.error('Error updating contact status');
    }
  };

  const updateBookingStatus = async (bookingId, newStatus) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/admin/bookings/${bookingId}/status`, {
        method: 'PUT',
        headers: apiHeaders,
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok) {
        toast.success(`Booking marked as ${newStatus}`);
        fetchDashboardData(); // Refresh data
      } else {
        toast.error('Failed to update booking status');
      }
    } catch (error) {
      console.error('Error updating booking status:', error);
      toast.error('Error updating booking status');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const getStatusColor = (status) => {
    const colors = {
      new: 'bg-red-100 text-red-800',
      read: 'bg-yellow-100 text-yellow-800',
      replied: 'bg-green-100 text-green-800',
      pending: 'bg-blue-100 text-blue-800',
      confirmed: 'bg-green-100 text-green-800',
      completed: 'bg-gray-100 text-gray-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-light-gray flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-navy-blue text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_swift-movers-1/artifacts/3vyram8e_Gemini_Generated_Image_tphblstphblstphb.png" 
              alt="SwiftMove & Clean Logo" 
              className="rounded"
              style={{height: '12px', width: '40px', objectFit: 'cover'}}
            />
            <h1 className="text-xl font-bold">SwiftMove & Clean Admin</h1>
          </div>
          <Button
            onClick={onLogout}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-navy-blue"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'dashboard'
                  ? 'border-sky-blue text-sky-blue'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('contacts')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'contacts'
                  ? 'border-sky-blue text-sky-blue'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Contacts ({contacts.length})
            </button>
            <button
              onClick={() => setActiveTab('bookings')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'bookings'
                  ? 'border-sky-blue text-sky-blue'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Bookings ({bookings.length})
            </button>
            <button
              onClick={() => setActiveTab('chatbot')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'chatbot'
                  ? 'border-sky-blue text-sky-blue'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Chatbot Quotes ({chatbotQuotes.length})
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Overview */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="bg-sky-100 p-3 rounded-full mr-4">
                        <Users className="h-6 w-6 text-sky-blue" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Total Contacts</p>
                        <p className="text-2xl font-bold text-gray-900">{stats.total_contacts || 0}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="bg-green-100 p-3 rounded-full mr-4">
                        <Calendar className="h-6 w-6 text-vibrant-green" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Total Bookings</p>
                        <p className="text-2xl font-bold text-gray-900">{stats.total_bookings || 0}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="bg-orange-100 p-3 rounded-full mr-4">
                        <Bot className="h-6 w-6 text-bright-orange" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Chatbot Quotes</p>
                        <p className="text-2xl font-bold text-gray-900">{stats.chatbot_quotes || 0}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="bg-red-100 p-3 rounded-full mr-4">
                        <AlertCircle className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Pending Items</p>
                        <p className="text-2xl font-bold text-gray-900">{stats.pending_contacts || 0}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Recent Activity (7 days)</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">New Contacts</span>
                        <span className="font-semibold">{stats.recent_contacts || 0}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">New Bookings</span>
                        <span className="font-semibold">{stats.recent_bookings || 0}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <Button
                        onClick={() => setActiveTab('contacts')}
                        className="w-full bg-sky-blue text-white hover:opacity-90"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        View All Contacts
                      </Button>
                      <Button
                        onClick={() => setActiveTab('bookings')}
                        className="w-full bg-vibrant-green text-white hover:opacity-90"
                      >
                        <Calendar className="h-4 w-4 mr-2" />
                        View All Bookings
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Contacts Tab */}
        {activeTab === 'contacts' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Contact Messages</h2>
              <Button onClick={fetchDashboardData} variant="outline">
                Refresh
              </Button>
            </div>

            <div className="space-y-4">
              {contacts.map((contact) => (
                <Card key={contact.id} className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-sky-100 p-2 rounded-full">
                          <MessageCircle className="h-4 w-4 text-sky-blue" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                          <p className="text-sm text-gray-600">{formatDate(contact.createdAt)}</p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(contact.status)}>
                        {contact.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      {contact.email && (
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">{contact.email}</span>
                        </div>
                      )}
                      {contact.phone && (
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">{contact.phone}</span>
                        </div>
                      )}
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="h-4 w-4 text-gray-400" />
                        <span className="text-sm capitalize">{contact.subject}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-gray-700">{contact.message}</p>
                    </div>

                    <div className="flex space-x-2">
                      {contact.status === 'new' && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateContactStatus(contact.id, 'read')}
                        >
                          Mark as Read
                        </Button>
                      )}
                      {contact.status !== 'replied' && (
                        <Button
                          size="sm"
                          className="bg-vibrant-green text-white hover:opacity-90"
                          onClick={() => updateContactStatus(contact.id, 'replied')}
                        >
                          Mark as Replied
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Service Bookings</h2>
              <Button onClick={fetchDashboardData} variant="outline">
                Refresh
              </Button>
            </div>

            <div className="space-y-4">
              {bookings.map((booking) => (
                <Card key={booking.id} className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-green-100 p-2 rounded-full">
                          <Calendar className="h-4 w-4 text-vibrant-green" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{booking.name}</h3>
                          <p className="text-sm text-gray-600">{formatDate(booking.createdAt)}</p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(booking.status)}>
                        {booking.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">{booking.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">{booking.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">{formatDate(booking.preferredDate)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">{booking.serviceType}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-700">From:</p>
                          <p className="text-sm text-gray-600">{booking.currentAddress}</p>
                        </div>
                        {booking.newAddress && (
                          <div>
                            <p className="text-sm font-medium text-gray-700">To:</p>
                            <p className="text-sm text-gray-600">{booking.newAddress}</p>
                          </div>
                        )}
                      </div>
                      
                      {booking.specialRequests && (
                        <div className="mt-3">
                          <p className="text-sm font-medium text-gray-700">Special Requests:</p>
                          <p className="text-sm text-gray-600">{booking.specialRequests}</p>
                        </div>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      {booking.status === 'pending' && (
                        <Button
                          size="sm"
                          className="bg-vibrant-green text-white hover:opacity-90"
                          onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                        >
                          Confirm Booking
                        </Button>
                      )}
                      {booking.status === 'confirmed' && (
                        <Button
                          size="sm"
                          className="bg-gray-600 text-white hover:opacity-90"
                          onClick={() => updateBookingStatus(booking.id, 'completed')}
                        >
                          Mark Completed
                        </Button>
                      )}
                      {booking.status !== 'cancelled' && booking.status !== 'completed' && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-red-500 text-red-500 hover:bg-red-50"
                          onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                        >
                          Cancel
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Chatbot Quotes Tab */}
        {activeTab === 'chatbot' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Chatbot Quote Requests</h2>
              <Button onClick={fetchDashboardData} variant="outline">
                Refresh
              </Button>
            </div>

            <div className="space-y-4">
              {chatbotQuotes.map((quote) => (
                <Card key={quote.id} className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-orange-100 p-2 rounded-full">
                          <Bot className="h-4 w-4 text-bright-orange" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{quote.name}</h3>
                          <p className="text-sm text-gray-600">{formatDate(quote.createdAt)}</p>
                        </div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">
                        Chatbot Quote
                      </Badge>
                    </div>

                    <div className="mb-4">
                      <p className="text-gray-700">{quote.message}</p>
                    </div>

                    {quote.sessionId && (
                      <div className="text-xs text-gray-500 mb-4">
                        Session: {quote.sessionId}
                      </div>
                    )}

                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        className="bg-vibrant-green text-white hover:opacity-90"
                        onClick={() => updateContactStatus(quote.id, 'replied')}
                      >
                        Mark as Replied
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(`tel:${quote.phone}`, '_self')}
                      >
                        Call Customer
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};