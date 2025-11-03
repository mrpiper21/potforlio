import { useState } from 'react';
import { Download, Calendar, DollarSign, CheckCircle2, Circle, ChevronDown, ChevronUp } from 'lucide-react';

const LinknRunTimeline = () => {
  const [expandedMilestone, setExpandedMilestone] = useState<string | null>(null);

  const milestones = [
    {
      id: 1,
      title: "Foundation & Authentication",
      duration: "2 Weeks",
      payment: 1200,
      weeks: "Week 1-2",
      deliverables: [
        "Project setup (React Native with Expo/bare workflow)",
        "GitHub repo, CI/CD pipeline with GitHub Actions",
        "Backend API setup (NestJS + PostgreSQL + Redis)",
        "Database schema implementation (Users, Profiles tables)",
        "Phone OTP authentication (Twilio integration)",
        "JWT token management (access + refresh tokens)",
        "Basic user profile creation & editing",
        "Geolocation permissions & storage",
        "Docker containerization for backend",
        "Staging environment deployment"
      ],
      acceptance: [
        "Users can sign up with phone OTP",
        "Users can create and edit basic profile",
        "Auth tokens work correctly with auto-refresh",
        "Backend deployed and accessible"
      ]
    },
    {
      id: 2,
      title: "Matching & Events Core",
      duration: "2 Weeks",
      payment: 1500,
      weeks: "Week 3-4",
      deliverables: [
        "Geolocation matching algorithm implementation",
        "PostGIS setup for spatial queries",
        "Match API with scoring system",
        "Events/Sessions database tables",
        "Create event functionality (in-person & virtual)",
        "Join/RSVP event endpoints",
        "Event listing & filtering",
        "Attendee management system",
        "Map integration (Mapbox or Google Maps)",
        "Nearby users/events display",
        "Push notifications setup (FCM & APNs)",
        "Basic notification system"
      ],
      acceptance: [
        "Users can find nearby workout partners within radius",
        "Users can create and join events",
        "Map shows nearby events and users",
        "Push notifications work for event invites"
      ]
    },
    {
      id: 3,
      title: "Social Feed & Media",
      duration: "2 Weeks",
      payment: 1500,
      weeks: "Week 5-6",
      deliverables: [
        "Posts, Comments, Likes database tables",
        "Media upload to AWS S3 with pre-signed URLs",
        "Video transcoding pipeline (AWS MediaConvert or similar)",
        "Image optimization and thumbnail generation",
        "Feed API with cursor-based pagination",
        "Basic feed ranking algorithm (recency + engagement)",
        "Video player with controls",
        "Post creation UI (photo/video capture)",
        "Like and comment functionality",
        "Feed UI with TikTok-like full-screen videos",
        "CDN integration (CloudFront)"
      ],
      acceptance: [
        "Users can post photos and videos (max 60s)",
        "Users can view infinite-scroll feed",
        "Users can like and comment on posts",
        "Videos load quickly and play smoothly"
      ]
    },
    {
      id: 4,
      title: "Chat & Real-time Features",
      duration: "2 Weeks",
      payment: 1400,
      weeks: "Week 7-8",
      deliverables: [
        "WebSocket setup (Socket.IO)",
        "Chat database tables (Chats, Messages)",
        "1-on-1 chat implementation",
        "Event group chat functionality",
        "Message delivery and read receipts",
        "Real-time message synchronization",
        "Chat list with unread counts",
        "Streaks calculation logic",
        "Tribe points system implementation",
        "User engagement tracking",
        "In-app notification center",
        "Notification preferences management"
      ],
      acceptance: [
        "Users can send/receive real-time messages",
        "Chat history persists correctly",
        "Streaks update daily based on activity",
        "Tribe points awarded for participation"
      ]
    },
    {
      id: 5,
      title: "Tribes & Enhanced Features",
      duration: "2 Weeks",
      payment: 1300,
      weeks: "Week 9-10",
      deliverables: [
        "Tribes database tables",
        "Create and manage tribes functionality",
        "Tribe membership system (roles: owner/moderator/member)",
        "Tribe-specific events and posts",
        "Tribe discovery and search",
        "Enhanced feed ranking (social graph + engagement)",
        "ElasticSearch integration for search",
        "Follow/unfollow functionality",
        "User profiles with stats (events, followers, points)",
        "Content reporting and moderation queue",
        "Block/unblock users",
        "Analytics event tracking (Amplitude/Mixpanel setup)"
      ],
      acceptance: [
        "Users can create and join tribes",
        "Tribe members can see tribe-specific content",
        "Feed shows personalized content based on tribes and follows",
        "Users can report inappropriate content"
      ]
    },
    {
      id: 6,
      title: "Testing, Polish & Launch Prep",
      duration: "2 Weeks",
      payment: 1100,
      weeks: "Week 11-12",
      deliverables: [
        "Comprehensive end-to-end testing",
        "Bug fixes from QA testing",
        "Performance optimization (caching, indexes)",
        "Load testing and optimization",
        "UI/UX polish and animations",
        "Onboarding flow refinement",
        "Error handling and user feedback improvements",
        "App store builds (iOS & Android)",
        "Privacy policy and terms of service",
        "Admin dashboard for moderation",
        "Monitoring setup (Sentry, analytics)",
        "Production deployment",
        "Pilot user testing with 50-100 users",
        "Documentation (API docs, deployment guide)"
      ],
      acceptance: [
        "App passes QA with no critical bugs",
        "App submitted to App Store and Play Store",
        "Production environment stable and monitored",
        "Pilot users successfully onboarded and engaged"
      ]
    },
    {
      id: 7,
      title: "Post-Launch Support & Iteration",
      duration: "2 Weeks",
      payment: 1000,
      weeks: "Week 13-14",
      deliverables: [
        "Monitor production metrics and errors",
        "Quick bug fixes and hotfixes",
        "User feedback collection and analysis",
        "Performance tuning based on real usage",
        "App store review response handling",
        "Minor feature iterations based on feedback",
        "Data backup and disaster recovery testing",
        "Security audit and fixes",
        "Knowledge transfer and documentation",
        "Handover for ongoing maintenance"
      ],
      acceptance: [
        "App stable with < 1% crash rate",
        "Critical user feedback addressed",
        "Team trained on maintenance procedures",
        "Complete documentation delivered"
      ]
    }
  ];

  const totalPayment = milestones.reduce((sum, m) => sum + m.payment, 0);
  const totalWeeks = 14;

  const toggleMilestone = (id: string) => {
    setExpandedMilestone(expandedMilestone === id ? null : id);
  };

//   const getStatusColor = (id: string) => {
//     return 'bg-blue-100 text-blue-700';
//   };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                LinknRun Project Timeline
              </h1>
              <p className="text-gray-600 text-lg">
                React Native Mobile Application Development
              </p>
            </div>
            <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              <Download size={20} />
              Export PDF
            </button>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Calendar className="text-blue-600" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Total Duration</p>
                  <p className="text-2xl font-bold text-gray-900">{totalWeeks} Weeks</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <DollarSign className="text-green-600" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Total Budget</p>
                  <p className="text-2xl font-bold text-gray-900">GH₵ {totalPayment.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-purple-600" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Milestones</p>
                  <p className="text-2xl font-bold text-gray-900">{milestones.length} Phases</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Note */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
          <h3 className="font-semibold text-amber-900 mb-2">📱 Technology Stack</h3>
          <p className="text-sm text-amber-800">
            <strong>Frontend:</strong> React Native with Expo (iOS & Android) • 
            <strong> Backend:</strong> NestJS (TypeScript) + PostgreSQL + Redis • 
            <strong> Real-time:</strong> Socket.IO • 
            <strong> Media:</strong> AWS S3 + CloudFront • 
            <strong> Video:</strong> Agora SDK (post-MVP)
          </p>
        </div>

        {/* Milestones */}
        <div className="space-y-4">
            {milestones.map((milestone, _index: number) => (
            <div
              key={_index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Milestone Header */}
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleMilestone(milestone.id.toString())}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                      {milestone.id}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="flex items-center gap-1 text-gray-600">
                          <Calendar size={16} />
                          {milestone.weeks} ({milestone.duration})
                        </span>
                        <span className="flex items-center gap-1 text-green-600 font-semibold">
                          <DollarSign size={16} />
                          GH₵ {milestone.payment.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 transition">
                    {expandedMilestone === milestone.id.toString() ? (
                      <ChevronUp size={24} />
                    ) : (
                      <ChevronDown size={24} />
                    )}
                  </button>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedMilestone === milestone.id.toString() && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    {/* Deliverables */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-blue-600" />
                        Key Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {milestone.deliverables.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <Circle size={8} className="mt-1.5 flex-shrink-0 text-blue-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Acceptance Criteria */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-green-600" />
                        Acceptance Criteria
                      </h4>
                      <ul className="space-y-2">
                        {milestone.acceptance.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <CheckCircle2
                              size={16}
                              className="mt-0.5 flex-shrink-0 text-green-600"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Payment Schedule */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mt-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Schedule</h2>
          <div className="space-y-3">
            {milestones.map((milestone) => (
              <div
                key={milestone.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                    {milestone.id}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{milestone.title}</p>
                    <p className="text-sm text-gray-600">{milestone.weeks}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">GH₵ {milestone.payment.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">
                    {Math.round((milestone.payment / totalPayment) * 100)}% of total
                  </p>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white mt-4">
              <p className="font-bold text-lg">Total Project Cost</p>
              <p className="font-bold text-2xl">GH₵ {totalPayment.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mt-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Notes</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex gap-3">
              <span className="text-blue-600 font-bold">1.</span>
              <p>
                <strong>Payment Terms:</strong> Payment released upon successful completion and acceptance of each milestone deliverables.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 font-bold">2.</span>
              <p>
                <strong>Tech Stack Change:</strong> Original spec recommended Flutter, but React Native will be used as agreed. This may require minor adjustments to library choices.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 font-bold">3.</span>
              <p>
                <strong>Scope:</strong> This covers MVP features only. Advanced features like live video sessions (Agora), premium payments, and wearable integrations are post-MVP.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 font-bold">4.</span>
              <p>
                <strong>Third-party Costs:</strong> AWS, Twilio, Mapbox, and other service costs are separate from development fees and paid directly by client.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 font-bold">5.</span>
              <p>
                <strong>Testing:</strong> Client provides test devices/accounts for iOS and Android. Developer handles staging environment.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 font-bold">6.</span>
              <p>
                <strong>Changes:</strong> Scope changes may affect timeline and budget. All changes require written agreement.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-600 text-sm">
          <p>Generated on {new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</p>
        </div>
      </div>
    </div>
  );
};

export default LinknRunTimeline;