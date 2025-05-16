import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="inline-block py-1 px-3 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-lg font-mono text-sm mb-2">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Let's Work Together
          </h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out to me!
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row max-w-5xl mx-auto gap-8">
          <div className="w-full md:w-1/3 space-y-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start space-x-4">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-600 dark:text-purple-400">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Email</h4>
                <a href="mailto:contact@example.com" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  contact@example.com
                </a>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start space-x-4">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-600 dark:text-purple-400">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Phone</h4>
                <a href="tel:+1234567890" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start space-x-4">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-600 dark:text-purple-400">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Location</h4>
                <p className="text-slate-600 dark:text-slate-400">
                  San Francisco, CA
                </p>
              </div>
            </div>
            
            <div className="p-6 rounded-lg bg-gradient-to-br from-purple-600 to-teal-500 text-white shadow-md">
              <h4 className="text-lg font-semibold mb-2">Availability</h4>
              <p className="mb-4">
                I'm currently available for freelance work and full-time opportunities. Let's create something amazing together!
              </p>
              <div className="h-2 bg-white/20 rounded-full mb-1">
                <div className="h-2 bg-white rounded-full" style={{ width: '80%' }}></div>
              </div>
              <p className="text-sm text-white/80">Currently 80% available</p>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 bg-white dark:bg-slate-800 rounded-lg shadow-md p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-500 mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h4>
                <p className="text-slate-600 dark:text-slate-400 text-center max-w-md">
                  Thank you for reaching out! I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                  Send a Message
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name 
                          ? 'border-red-500 dark:border-red-500' 
                          : 'border-slate-300 dark:border-slate-600'
                      } bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email 
                          ? 'border-red-500 dark:border-red-500' 
                          : 'border-slate-300 dark:border-slate-600'
                      } bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                      placeholder="Your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.subject 
                        ? 'border-red-500 dark:border-red-500' 
                        : 'border-slate-300 dark:border-slate-600'
                    } bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                    placeholder="Subject of your message"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message 
                        ? 'border-red-500 dark:border-red-500' 
                        : 'border-slate-300 dark:border-slate-600'
                    } bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none`}
                    placeholder="Your message"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-teal-500 text-white rounded-lg font-medium flex items-center justify-center group hover:shadow-lg transition-all disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;