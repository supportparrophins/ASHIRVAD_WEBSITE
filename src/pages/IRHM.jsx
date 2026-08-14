import React from 'react';
import { Eye } from 'lucide-react';

export default function IRHM({ openLightbox }) {
  const irhmPhotos = [
    '/uploads/2023/05/DSC_8617-scaled.jpg',
    '/uploads/2023/05/DSC_8626-scaled.jpg',
    '/uploads/2023/05/DSC_8638-scaled.jpg',
    '/uploads/2023/05/DSC_8639-scaled.jpg',
    '/uploads/2023/05/DSC_8666-scaled.jpg',
    '/uploads/2023/05/DSC_8678-scaled.jpg',
    '/uploads/2023/05/DSC_8703-scaled.jpg',
    '/uploads/2023/05/DSC_8706-scaled.jpg',
    '/uploads/2023/05/DSC_8719-scaled.jpg',
    '/uploads/2023/05/DSC_8720-scaled.jpg',
    '/uploads/2023/05/DSC_8727-scaled.jpg',
    '/uploads/2023/05/DSC_8731-scaled.jpg'
  ];

  return (
    <div className="bg-white text-slate-800 min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section 1: IRHM Regular Monthly Meeting */}
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 font-sans tracking-tight">
            IRHM Regular Monthly Meeting
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-5xl">
            We organize meetings and programmes that involve community volunteers and members of the civil society and religious groups, encouraging them to share about their faith and practices thus sensitizing other groups and invoking a culture of acceptance. The meetings are held at different religious place of worship, involving lay persons along with their religious leaders in this movement to adapt a culture of acceptance and appreciation of the various faith and this has led to many lay persons getting involved in the process of building a safe environment to pursue communal harmony.
          </p>

          {/* Photo Grid (Exact FooGallery layout from ashirvad.org.in/irhm) */}
          <div className="pt-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
              {irhmPhotos.map((imgSrc, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightbox && openLightbox(imgSrc, 'IRHM Monthly Meeting', 'Inter-Religious Harmony Movement')}
                  className="group relative h-28 sm:h-32 rounded bg-slate-100 border-2 border-slate-800 overflow-hidden cursor-pointer shadow-sm hover:border-amber-600 transition-all"
                >
                  <img
                    src={imgSrc}
                    alt={`IRHM Meeting ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = '/uploads/2025/09/IRHM-1.png';
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

        {/* Section 2: IRHM Retreats */}
        <div className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-sans tracking-tight">
            IRHM Retreats
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-5xl">
            The Inter Religious Harmony Movement was initiated by Late Rev. Fr Ronnie Prabhu, SJ in 1973. The main objective of the movement was to foster an understanding of different religions and to create a sense of brotherhood among different faiths. Our vision has been to spread communal harmony within the society and stand united against fanatism through sensitized social activities, education, discussion and prayer meetings involving all religious groups.
          </p>
        </div>

      </div>
    </div>
  );
}
