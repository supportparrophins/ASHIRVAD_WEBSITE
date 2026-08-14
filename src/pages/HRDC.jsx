import React from 'react';
import { Eye } from 'lucide-react';

export default function HRDC({ openLightbox }) {
  const jescolPhotos = [
    '/uploads/2023/05/DSC_4706-2-scaled.jpg',
    '/uploads/2023/05/DSC_4704-2-scaled.jpg',
    '/uploads/2023/05/DSC_4701-2-scaled.jpg',
    '/uploads/2023/05/DSC_4699-2-scaled.jpg',
    '/uploads/2023/05/DSC_4692-2-scaled.jpg',
    '/uploads/2023/05/DSC_4687-2-scaled.jpg',
    '/uploads/2023/05/DSC_4680-2-scaled.jpg',
    '/uploads/2023/04/DSC_4050-2-scaled.jpg',
    '/uploads/2023/04/DSC_4055-2-scaled.jpg',
    '/uploads/2023/04/DSC_4056-2-scaled.jpg',
    '/uploads/2023/04/DSC_4059-2-scaled.jpg',
    '/uploads/2023/05/DSC_4668-2-scaled.jpg',
    '/uploads/2020/04/DSC_4706-2-scaled-1.jpg',
    '/uploads/2020/04/Head-Slider-Ashirvad-1-1024x727-1-1-890x664.jpg'
  ];

  return (
    <div className="bg-white text-slate-800 min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section 1: JESCOL (Jesuit Collaborators) */}
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 font-sans tracking-tight">
            JESCOL (Jesuit Collaborators)
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-5xl">
            It is a three-stage program meant for training our collaborators in Educational apostolate in Jesuit Leadership and Charism. The first of these is held in the respective institutions. For the second stage the participants from three zones – Bengaluru, Mangaluru, Mysuru-Hassan- Harihar-North Karnataka are brought to Ashirvad for three-day intense training programs. The third stage comprises of a four-day Interreligious Ignatian Retreat, which is held on a totally volunatry basis.
          </p>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            So far we have had these programs as follows:
          </p>

          <div className="space-y-2 text-slate-700 text-sm sm:text-base font-medium">
            <p>2021-22: 5 JESCOL IIs and 2 JESCOL IIIs</p>
            <p>2022-23: 3 JESCOL IIs and 2 JESCOL IIIs</p>
          </div>

          {/* Photo Grid (Exact FooGallery layout from ashirvad.org.in/hrdc) */}
          <div className="pt-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {jescolPhotos.map((imgSrc, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightbox && openLightbox(imgSrc, 'JESCOL Training at Ashirvad', 'HRDC Leadership')}
                  className="group relative h-28 sm:h-32 rounded bg-slate-100 border-2 border-slate-800 overflow-hidden cursor-pointer shadow-sm hover:border-amber-600 transition-all"
                >
                  <img
                    src={imgSrc}
                    alt={`JESCOL Program ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = '/uploads/2020/04/Head-Slider-Ashirvad-1-1024x727-1-1-890x664.jpg';
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

        {/* Section 2: Training for Priests and Religious */}
        <div className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-sans tracking-tight">
            Training for Priests and Religious
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-5xl">
            These are 5-day formative programs related to different aspect of religious life. We have had 3 such programs in 2022-23
          </p>

          <ul className="list-disc list-inside space-y-1.5 text-slate-700 text-sm sm:text-base pl-2">
            <li>Governance and Leadership in Religious Life (June 2022)</li>
            <li>Governance and Leadership in Religious Life (July 2022)</li>
            <li>Discernment and Decision Making (February 2023)</li>
          </ul>
        </div>

        {/* Section 3: Laity Formation */}
        <div className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-sans tracking-tight">
            Laity Formation
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-5xl">
            These programs are aimed at the faith-formation of Catholic Laity of Bangalore Archdiocese. These are held in series with specific themes. We have had 2 such series so far.
          </p>

          <div className="space-y-2 text-slate-700 text-sm sm:text-base pl-2">
            <p>
              <strong>a.</strong> Christian Faith-life from the perspective of family life, Christian morals, pastoral care, Christian marriage and social teaching of the Catholic Church. (October and December, 2022, 3 days in total)
            </p>
            <p>
              <strong>b.</strong> ‘Know your Bible’ (8 Sundays in January and February, 2023, a total of 24 hours)
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
