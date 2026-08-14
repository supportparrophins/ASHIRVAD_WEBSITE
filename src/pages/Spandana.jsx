import React from 'react';
import { Eye } from 'lucide-react';

export default function Spandana({ openLightbox }) {
  const cscPhotos = [
    '/uploads/2023/05/DSC_7376-scaled.jpg',
    '/uploads/2023/05/DSC_7380-2-scaled.jpg',
    '/uploads/2023/05/DSC_7381-scaled.jpg',
    '/uploads/2023/05/DSC_7384-2-scaled.jpg',
    '/uploads/2023/05/DSC_7395-scaled.jpg',
    '/uploads/2023/05/DSC_7397-scaled.jpg',
    '/uploads/2023/05/DSC_7659-scaled.jpg',
    '/uploads/2023/05/DSC_7661-scaled.jpg',
    '/uploads/2023/05/DSC_7664-scaled.jpg',
    '/uploads/2023/05/DSC_7665-scaled.jpg',
    '/uploads/2023/05/DSC_7676-scaled.jpg',
    '/uploads/2023/05/DSC_7677-scaled.jpg',
    '/uploads/2023/12/DSC_4790-1-scaled.jpg',
    '/uploads/2023/12/DSC_4792-1-scaled.jpg',
    '/uploads/2023/12/DSC_4852-scaled.jpg',
    '/uploads/2023/12/DSC_4862-scaled.jpg',
    '/uploads/2023/12/DSC_4864-scaled.jpg',
    '/uploads/2023/12/DSC_4877-scaled.jpg'
  ];

  return (
    <div className="bg-white text-slate-800 min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section 1: Spandana Study Centers */}
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 font-sans tracking-tight">
            Spandana Study Centers
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-5xl">
            The Spandana study programme has set up more centres to reach out to the migrant children. The centres at Avalahalli, Ramaiah Colony, Cheemasandra and Safal Factory colony in Bangalore city are functional. These study centres are units of intervention, assisting the students of the migrant communities in their academics. With local volunteers and students volunteering on a regular basis, this educative intervention has been a blessing to the students who have limited means to coaching. The Educational assistance is backed up by motivational and life skill building activities thus enabling the students towards a holistic growth.
          </p>

          {/* Photo Grid (Exact FooGallery layout from ashirvad.org.in/social-conern) */}
          <div className="pt-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
              {cscPhotos.map((imgSrc, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightbox && openLightbox(imgSrc, 'Spandana Study Centre Activity', 'Centre for Social Concern')}
                  className="group relative h-28 sm:h-32 rounded bg-slate-100 border-2 border-slate-800 overflow-hidden cursor-pointer shadow-sm hover:border-amber-600 transition-all"
                >
                  <img
                    src={imgSrc}
                    alt={`Spandana Study Centre ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = '/uploads/2025/09/DSC_5557-scaled.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: MAIN – Migrant Assistance and Information Network */}
        <div className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-sans tracking-tight">
            MAIN – Migrant Assistance and Information Network
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-5xl">
            MAIN – Migrant Assistance and Information Network is an initiative of the Jesuit Collective, which supports migrants in distress, across India. It is based on the perceived need for a coordinated, collective and innovative response to reach out to the distressed migrant workers – intra state and interstate.
          </p>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-5xl">
            The centre has been working for the migrants – both intra state and interstate, engaging in relief measures. Reaching out to the distressed and accompanying them has been more effective through the MAIN initiative with Ashirvad CSC being the sub hub. The centre with the collaboration of NGOs, people’s organization, legal agencies, religious congregations and institutions, volunteers, alumni and people of goodwill has been strengthened and continues to serve and reach out to the distress migrants.
          </p>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-5xl">
            The term ‘urban poor’ includes many groups and communities such as migrant workers, elderly, domestic workers, children, transgender, homeless etc. Ashirvad –CSC engages in consultation and action with these communities through collaboration, ensuring their concerns are converted into tangible actions of intervention. Ashirvad – CSC envisages itself to be a hub of interactive engagements and promotion of rights with the dalit groups, daily wage worker, women groups, minority rights organization and human rights concerned individuals and groups conducting intervention activities to address their concerns.
          </p>
        </div>

        {/* Section 3: Educational Support to Deserving Students */}
        <div className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-sans tracking-tight">
            Educational Support to Deserving Students
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-5xl">
            Education has been one of the important pillar of service for our institution. During the pandemic followed with lockdown, the children of the migrants were faced with a disastrous breakdown of education and learning activity. Having lost several months and left without assistance in their education, a non-formal educational initiative – Spandana study centre was set up at St Joseph’s University to cater to the educational needs of the children of KS Garden slum.
          </p>

          <h3 className="text-xl font-bold text-slate-900 font-sans tracking-tight pt-2">
            Distribution of Educational Materials
          </h3>
        </div>

      </div>
    </div>
  );
}
