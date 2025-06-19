import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import {
  Plane,
  Users,
  Shield,
  BarChart3,
  CreditCard,
  Calendar,
  Database,
  Settings,
  Mail,
  LogOut,
  Menu,
  X,
  CheckCircle,
  UserPlus,
  Trash2,
  RefreshCw
} from 'lucide-react';
import logo from './assets/logo_travax.png';
import './App.css';

// Landing Page Component
const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="navbar-sticky fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="logo-container">
              <a href="">
                <img className="logo" src={logo} alt="Logo" />
              </a>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-travax-navy hover:text-travax-teal transition-colors">Home</Link>
              <Link to="#features" className="text-travax-navy hover:text-travax-teal transition-colors">Features</Link>
              <Link to="#modules" className="text-travax-navy hover:text-travax-teal transition-colors">Modules</Link>
              <Link to="#about" className="text-travax-navy hover:text-travax-teal transition-colors">About</Link>
              <Link to="#contact" className="text-travax-navy hover:text-travax-teal transition-colors">Contact</Link>
              <Button
                variant="outline"
                className="border-travax-teal text-travax-teal hover:bg-travax-teal hover:text-white"
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
              <Button
                className="btn-primary"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <Link to="/" className="text-travax-navy hover:text-travax-teal transition-colors">Home</Link>
                <Link to="#features" className="text-travax-navy hover:text-travax-teal transition-colors">Features</Link>
                <Link to="#modules" className="text-travax-navy hover:text-travax-teal transition-colors">Modules</Link>
                <Link to="#about" className="text-travax-navy hover:text-travax-teal transition-colors">About</Link>
                <Link to="#contact" className="text-travax-navy hover:text-travax-teal transition-colors">Contact</Link>
                <div className="flex space-x-4 pt-2">
                  <Button
                    variant="outline"
                    className="border-travax-teal text-travax-teal hover:bg-travax-teal hover:text-white flex-1"
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </Button>
                  <Button
                    className="btn-primary flex-1"
                    onClick={() => navigate('/signup')}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-bg hero-overlay pt-24 pb-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="hero-title text-5xl md:text-6xl font-bold mb-6 font-montserrat">
            Revolutionizing Travel Data Management
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-roboto">
            A unified platform that streamlines data, verification, and team management for travel agencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="btn-primary text-lg px-8 py-4"
              onClick={() => navigate('/signup')}
            >
              Get Started Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-travax-teal text-travax-teal bg-transparent"
              onClick={() => navigate('/login')}
            >
              Sign In
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-travax-navy mb-4 font-montserrat">
              Why Choose Travax?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-roboto">
              Streamline your travel business operations with our comprehensive data management platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="module-card text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-travax-teal mx-auto mb-4" />
                <CardTitle className="text-travax-navy font-montserrat">Secure & Reliable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-roboto">
                  Enterprise-grade security with role-based access control and data encryption.
                </p>
              </CardContent>
            </Card>

            <Card className="module-card text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-travax-teal mx-auto mb-4" />
                <CardTitle className="text-travax-navy font-montserrat">Team Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-roboto">
                  Effortlessly manage team roles, permissions, and collaboration across your organization.
                </p>
              </CardContent>
            </Card>

            <Card className="module-card text-center">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-travax-teal mx-auto mb-4" />
                <CardTitle className="text-travax-navy font-montserrat">Analytics & Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-roboto">
                  Comprehensive reporting and analytics to drive data-driven business decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-travax-navy mb-4 font-montserrat">
              Powerful Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-roboto">
              Everything you need to manage your travel business in one integrated platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="module-card">
              <CardHeader>
                <Database className="h-8 w-8 text-travax-teal mb-2" />
                <CardTitle className="text-travax-navy font-montserrat">Data Entry</CardTitle>
                <CardDescription className="font-roboto">Streamlined data input and management</CardDescription>
              </CardHeader>
            </Card>

            <Card className="module-card">
              <CardHeader>
                <Users className="h-8 w-8 text-travax-teal mb-2" />
                <CardTitle className="text-travax-navy font-montserrat">CRM</CardTitle>
                <CardDescription className="font-roboto">Customer relationship management</CardDescription>
              </CardHeader>
            </Card>

            <Card className="module-card">
              <CardHeader>
                <Calendar className="h-8 w-8 text-travax-teal mb-2" />
                <CardTitle className="text-travax-navy font-montserrat">Booking & Reservation</CardTitle>
                <CardDescription className="font-roboto">Manage bookings and reservations</CardDescription>
              </CardHeader>
            </Card>

            <Card className="module-card">
              <CardHeader>
                <CreditCard className="h-8 w-8 text-travax-teal mb-2" />
                <CardTitle className="text-travax-navy font-montserrat">Financial Management</CardTitle>
                <CardDescription className="font-roboto">Track finances and payments</CardDescription>
              </CardHeader>
            </Card>

            <Card className="module-card">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-travax-teal mb-2" />
                <CardTitle className="text-travax-navy font-montserrat">Reporting</CardTitle>
                <CardDescription className="font-roboto">Comprehensive business analytics</CardDescription>
              </CardHeader>
            </Card>

            <Card className="module-card">
              <CardHeader>
                <Shield className="h-8 w-8 text-travax-teal mb-2" />
                <CardTitle className="text-travax-navy font-montserrat">Verification Tools</CardTitle>
                <CardDescription className="font-roboto">Data verification and validation</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 travax-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 font-montserrat">
            Ready to Transform Your Travel Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-roboto">
            Join thousands of travel professionals who trust Travax for their data management needs.
          </p>
          <Button
            size="lg"
            className="btn-secondary text-lg px-10 py-4"
            onClick={() => navigate('/signup')}
          >
            Start Your Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center">
            {/* <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Plane className="h-6 w-6 text-travax-teal" />
              <span className="text-xl font-bold font-montserrat">Travax</span>
            </div> */}
            <p className="text-gray-400 font-roboto">
              © 2025 Travax. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Sign Up Component
const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CheckCircle className="h-16 w-16 text-travax-teal mx-auto mb-4" />
            <CardTitle className="text-2xl font-montserrat text-travax-navy">Registration Successful!</CardTitle>
            <CardDescription className="font-roboto">
              Check your email for a verification link to activate your company account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              className="w-full btn-primary"
              onClick={() => navigate('/login')}
            >
              Go to Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Plane className="h-8 w-8 text-travax-teal" />
            <span className="text-2xl font-bold text-travax-navy font-montserrat">Travax</span>
          </div>
          <CardTitle className="text-2xl font-montserrat text-travax-navy">Create Your Account</CardTitle>
          <CardDescription className="font-roboto">
            Sign up to start managing your travel data efficiently
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-travax-navy mb-2 font-roboto">
                Company Email
              </label>
              <Input
                type="email"
                className="form-input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-travax-navy mb-2 font-roboto">
                Create Password
              </label>
              <Input
                type="password"
                className="form-input"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-travax-navy mb-2 font-roboto">
                Confirm Password
              </label>
              <Input
                type="password"
                className="form-input"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
              />
            </div>
            <Button type="submit" className="w-full btn-primary">
              Submit
            </Button>
          </form>
          <p className="text-sm text-gray-600 mt-4 text-center font-roboto">
            After signing up, check your email for a verification link to activate your company account.
          </p>
          <div className="text-center mt-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/login')}
              className="text-travax-teal hover:text-travax-navy"
            >
              Already have an account? Sign in
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Login Component
const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate role-based redirection
    if (formData.email.includes('admin')) {
      navigate('/admin-dashboard');
    } else if (formData.email.includes('agent')) {
      navigate('/data-entry-dashboard');
    } else if (formData.email.includes('hq')) {
      navigate('/verification-dashboard');
    } else {
      navigate('/admin-dashboard'); // Default to admin dashboard
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Plane className="h-8 w-8 text-travax-teal" />
            <span className="text-2xl font-bold text-travax-navy font-montserrat">Travax</span>
          </div>
          <CardTitle className="text-2xl font-montserrat text-travax-navy">Welcome Back</CardTitle>
          <CardDescription className="font-roboto">
            Sign in to your account to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-travax-navy mb-2 font-roboto">
                Email
              </label>
              <Input
                type="email"
                className="form-input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-travax-navy mb-2 font-roboto">
                Password
              </label>
              <Input
                type="password"
                className="form-input"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>
            <Button type="submit" className="w-full btn-primary">
              Login
            </Button>
          </form>
          <div className="text-center mt-4">
            <Button variant="ghost" className="text-travax-teal hover:text-travax-navy">
              Forgot your password?
            </Button>
          </div>
          <div className="text-center mt-2">
            <Button
              variant="ghost"
              onClick={() => navigate('/signup')}
              className="text-travax-teal hover:text-travax-navy"
            >
              Don't have an account? Sign up
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Admin Dashboard Component
const AdminDashboard = () => {
  const [invitations, setInvitations] = useState([
    { id: 1, email: 'john@example.com', role: 'Agent', status: 'Pending' },
    { id: 2, email: 'sarah@example.com', role: 'HQ', status: 'Pending' }
  ]);
  const [newInvite, setNewInvite] = useState({ email: '', role: '' });
  const navigate = useNavigate();

  const handleInvite = (e) => {
    e.preventDefault();
    if (newInvite.email && newInvite.role) {
      setInvitations([
        ...invitations,
        {
          id: Date.now(),
          email: newInvite.email,
          role: newInvite.role,
          status: 'Pending'
        }
      ]);
      setNewInvite({ email: '', role: '' });
    }
  };

  const handleResend = (id) => {
    // Simulate resend functionality
    console.log('Resending invitation for ID:', id);
  };

  const handleRevoke = (id) => {
    setInvitations(invitations.filter(inv => inv.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-travax-teal" />
              <span className="text-2xl font-bold text-travax-navy font-montserrat">Travax</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/admin-dashboard" className="text-travax-navy hover:text-travax-teal font-roboto">Dashboard</Link>
              <Link to="#" className="text-travax-navy hover:text-travax-teal font-roboto">Invite Employees</Link>
              <Link to="#" className="text-travax-navy hover:text-travax-teal font-roboto">Settings</Link>
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="text-travax-navy hover:text-travax-teal"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-travax-navy mb-2 font-montserrat">
            Welcome, Admin!
          </h1>
          <p className="text-gray-600 font-roboto">
            Manage your team and oversee company operations from this dashboard.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Invite Team Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-travax-navy font-montserrat">
                <UserPlus className="h-5 w-5" />
                <span>Invite Your Team</span>
              </CardTitle>
              <CardDescription className="font-roboto">
                Add new team members and assign their roles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleInvite} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-travax-navy mb-2 font-roboto">
                    Employee Email
                  </label>
                  <Input
                    type="email"
                    className="form-input"
                    value={newInvite.email}
                    onChange={(e) => setNewInvite({ ...newInvite, email: e.target.value })}
                    placeholder="Enter employee email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-travax-navy mb-2 font-roboto">
                    Select Role
                  </label>
                  <Select value={newInvite.role} onValueChange={(value) => setNewInvite({ ...newInvite, role: value })}>
                    <SelectTrigger className="form-input">
                      <SelectValue placeholder="Choose a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Agent">Agent</SelectItem>
                      <SelectItem value="HQ">HQ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full btn-primary">
                  <Mail className="h-4 w-4 mr-2" />
                  Invite
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Pending Invitations */}
          <Card>
            <CardHeader>
              <CardTitle className="text-travax-navy font-montserrat">Pending Invitations</CardTitle>
              <CardDescription className="font-roboto">
                Manage sent invitations and their status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {invitations.map((invitation) => (
                  <div key={invitation.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium text-travax-navy font-roboto">{invitation.email}</p>
                      <p className="text-sm text-gray-600 font-roboto">Role: {invitation.role}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleResend(invitation.id)}
                        className="border-travax-teal text-travax-teal hover:bg-travax-teal hover:text-white"
                      >
                        <RefreshCw className="h-4 w-4 mr-1" />
                        Resend
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleRevoke(invitation.id)}
                        className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Revoke
                      </Button>
                    </div>
                  </div>
                ))}
                {invitations.length === 0 && (
                  <p className="text-gray-500 text-center py-8 font-roboto">
                    No pending invitations
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          <Card className="module-card text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-travax-teal mx-auto mb-2" />
              <p className="text-2xl font-bold text-travax-navy font-montserrat">12</p>
              <p className="text-sm text-gray-600 font-roboto">Team Members</p>
            </CardContent>
          </Card>
          <Card className="module-card text-center">
            <CardContent className="pt-6">
              <Database className="h-8 w-8 text-travax-teal mx-auto mb-2" />
              <p className="text-2xl font-bold text-travax-navy font-montserrat">1,234</p>
              <p className="text-sm text-gray-600 font-roboto">Data Entries</p>
            </CardContent>
          </Card>
          <Card className="module-card text-center">
            <CardContent className="pt-6">
              <Calendar className="h-8 w-8 text-travax-teal mx-auto mb-2" />
              <p className="text-2xl font-bold text-travax-navy font-montserrat">89</p>
              <p className="text-sm text-gray-600 font-roboto">Active Bookings</p>
            </CardContent>
          </Card>
          <Card className="module-card text-center">
            <CardContent className="pt-6">
              <BarChart3 className="h-8 w-8 text-travax-teal mx-auto mb-2" />
              <p className="text-2xl font-bold text-travax-navy font-montserrat">98%</p>
              <p className="text-sm text-gray-600 font-roboto">Data Accuracy</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Data Entry Dashboard (for Agents)
const DataEntryDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-travax-teal" />
              <span className="text-2xl font-bold text-travax-navy font-montserrat">Travax</span>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-travax-navy font-roboto">Agent Dashboard</span>
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="text-travax-navy hover:text-travax-teal"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-travax-navy mb-8 font-montserrat">
          Data Entry Dashboard
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="module-card">
            <CardHeader>
              <Database className="h-8 w-8 text-travax-teal mb-2" />
              <CardTitle className="text-travax-navy font-montserrat">New Entry</CardTitle>
              <CardDescription className="font-roboto">Create a new data entry</CardDescription>
            </CardHeader>
          </Card>

          <Card className="module-card">
            <CardHeader>
              <Calendar className="h-8 w-8 text-travax-teal mb-2" />
              <CardTitle className="text-travax-navy font-montserrat">Bookings</CardTitle>
              <CardDescription className="font-roboto">Manage customer bookings</CardDescription>
            </CardHeader>
          </Card>

          <Card className="module-card">
            <CardHeader>
              <Users className="h-8 w-8 text-travax-teal mb-2" />
              <CardTitle className="text-travax-navy font-montserrat">Customer Data</CardTitle>
              <CardDescription className="font-roboto">Update customer information</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Verification Dashboard (for HQ)
const VerificationDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-travax-teal" />
              <span className="text-2xl font-bold text-travax-navy font-montserrat">Travax</span>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-travax-navy font-roboto">HQ Dashboard</span>
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="text-travax-navy hover:text-travax-teal"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-travax-navy mb-8 font-montserrat">
          Verification & Management Dashboard
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="module-card">
            <CardHeader>
              <Shield className="h-8 w-8 text-travax-teal mb-2" />
              <CardTitle className="text-travax-navy font-montserrat">Data Verification</CardTitle>
              <CardDescription className="font-roboto">Verify and validate data entries</CardDescription>
            </CardHeader>
          </Card>

          <Card className="module-card">
            <CardHeader>
              <BarChart3 className="h-8 w-8 text-travax-teal mb-2" />
              <CardTitle className="text-travax-navy font-montserrat">Analytics</CardTitle>
              <CardDescription className="font-roboto">View comprehensive reports</CardDescription>
            </CardHeader>
          </Card>

          <Card className="module-card">
            <CardHeader>
              <Settings className="h-8 w-8 text-travax-teal mb-2" />
              <CardTitle className="text-travax-navy font-montserrat">Management Tools</CardTitle>
              <CardDescription className="font-roboto">Advanced management features</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/data-entry-dashboard" element={<DataEntryDashboard />} />
          <Route path="/verification-dashboard" element={<VerificationDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

