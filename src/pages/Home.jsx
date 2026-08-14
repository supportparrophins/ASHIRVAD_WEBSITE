import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, ChevronRight, ArrowRight, Heart, Sparkles, 
  MapPin, Phone, Mail, Building, Users, Calendar, Eye, 
  CheckCircle2, Compass, ShieldCheck, BookOpen 
} from 'lucide-react';

export default function Home({ setCurrentRoute, openSupportModal, openLightbox, openVisionModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "ASHIRVAD",
      subtitle: "Accompanying the Marginalised",
      tagline: "Jesuit Centre for Social Research & Action • Bengaluru",
      desc: "Rooted in the charism of Karnataka Jesuits, fostering social research, grassroots education, and inter-religious harmony since 1973.",
      image: "/uploads/2020/04/Head-Slider-Ashirvad-1-1024x727-1-1-890x664.jpg",
      route: "about"
    },
    {
      title: "SPANDANA STUDY CENTRES",
      subtitle: "Centre for Social Concern (CSC)",
      tagline: "Grassroots Education in Bengaluru Slums & Migrant Colonies",
      desc: "Evening tuition coaching, stationery distribution, and holistic life-skill accompaniment for migrant children.",
      image: "/uploads/2025/09/DSC_3027-650x572.jpg",
      route: "csc"
    },
    {
      title: "INTER-RELIGIOUS HARMONY",
      subtitle: "IRHM Golden Jubilee",
      tagline: "Uniting Hearts Across Faiths & Communities",
      desc: "Regular monthly dialogue meetings and spiritual retreats fostering brotherhood and standing united against fanaticism.",
      image: "/uploads/2025/09/IRHM-1.png",
      route: "irhm"
    }
  ];

  const cardsData = {
    vision: {
      tag: "VISION",
      title: "Vision of Ashirvad",
      subtitle: "Karnataka Jesuit Mission",
      image: "/uploads/2025/09/about1.png",
      quote: "Reconciliation and service, with people of goodwill to transform relationships and structures in society.",
      description: `Rooted in the Ignatian charism and the preferential option for the marginalized, Ashirvad envisions an inclusive, fraternal, and just society where human dignity, equality, and inter-faith harmony flourish.

We work hand-in-hand with people of goodwill from all walks of life, faiths, and communities to dismantle prejudice, nurture mutual respect, and create compassionate structures of solidarity.`,
      points: [
        "Spiritual depth and reconciliation across religious communities.",
        "Dignity and empowerment for marginalized children and migrant workers.",
        "Forming leaders and collaborators in education and social action.",
        "Transforming societal relationships through dialogue and grassroots advocacy."
      ]
    },
    mission: {
      tag: "MISSION",
      title: "Mission of Ashirvad",
      subtitle: "Rooted in Compassion & Social Justice",
      image: "/uploads/2025/09/DSC_5964-1-650x572.jpg",
      quote: "Rooted in compassion, social justice, reconciliation and service, with people of goodwill to transform relationships and structures in society.",
      description: `Ashirvad translates its vision into daily reality through three core apostolates:

1. Human Resource Development Centre (HRDC): Equipping educators, youth, and religious personnel with values of leadership, ethics, and service through JESCOL and specialized formation seminars.

2. Centre for Social Concern (CSC): Providing non-formal evening coaching, life-skills, and nutritional support to hundreds of slum and migrant children through Spandana Study Centres, alongside relief and support for distressed interstate migrant workers through the MAIN network.

3. Inter-Religious Harmony Movement (IRHM): Fostering inter-faith understanding and communal unity through monthly dialogue gatherings across temples, mosques, gurdwaras, and churches.`,
      points: [
        "Grassroots educational intervention for slum children in Bengaluru.",
        "Inter-state and intra-state migrant accompaniment and relief.",
        "Jesuit Collaborators (JESCOL) formative training for educators.",
        "Active dialogue and peace assemblies with diverse religious leaders."
      ]
    },
    ashirvad: {
      tag: "ASHIRVAD",
      title: "About Ashirvad",
      subtitle: "Jesuit Centre for Social Research & Action • Bengaluru",
      image: "/uploads/2020/04/DSC_4706-2-scaled-1.jpg",
      quote: "Ashirvad is situated in the heart of the city of Bengaluru. True to its name, Ashirvad has been a blessing to the city through its various inter-religious activities.",
      description: `Established in 1973 by the visionary late Rev. Fr. Ronnie Prabhu, SJ, Ashirvad has stood for over half a century as a sanctuary of peace, intellectual inquiry, and social transformation in Bengaluru.

Situated on St. Mark's Road, Ashirvad serves as the central hub for the Karnataka Jesuit Province's social and inter-religious ministries. The centre houses seven well-equipped conference halls, residential facilities, a chapel, and dedicated project offices that coordinate education, migrant welfare, and peace-building initiatives across Karnataka.`,
      points: [
        "Established in 1973 with 50+ years of dedicated service.",
        "Community of Jesuit priests guiding social and intellectual ministries.",
        "7 conference & seminar halls hosting welfare meetings and seminars.",
        "Hub of active collaboration with civil society, NGOs, and educational institutions."
      ]
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const facilityGallery = [
    { title: "CHAPEL", image: "/uploads/2025/09/about3-1024x791.png" },
    { title: "DINING HALL", image: "/uploads/2026/01/DSC_3418-1-768x512.jpg" },
    { title: "CONFERENCE HALL", image: "/uploads/2023/02/Loyola-Hall-4-1024x683-2.jpg" },
    { title: "GARDEN & CAMPUS", image: "/uploads/2020/04/DSC_4706-2-scaled-1.jpg" }
  ];

  const navigateTo = (route, year) => {
    setCurrentRoute(route, year);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCardClick = (cardKey) => {
    if (openVisionModal && cardsData[cardKey]) {
      openVisionModal(cardsData[cardKey]);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 bg-white text-slate-900">
      
      {/* 1. HERO SLIDER */}
      <section className="relative h-[480px] sm:h-[580px] lg:h-[640px] bg-slate-950 overflow-hidden select-none">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover brightness-[0.45]"
              onError={(e) => {
                e.target.src = '/uploads/2020/04/DSC_4706-2-scaled-1.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
            
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
                <div className="max-w-3xl space-y-4 sm:space-y-5 animate-fade-in text-white">
                  <div className="inline-flex items-center gap-2 bg-[#0D2A45] text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow border border-slate-700">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{slide.subtitle}</span>
                  </div>

                  <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white drop-shadow-md">
                    {slide.title}
                  </h1>

                  <p className="text-amber-300 text-sm sm:text-base font-semibold tracking-wide">
                    {slide.tagline}
                  </p>

                  <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3 max-w-2xl font-light">
                    {slide.desc}
                  </p>

                  <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
                    <button
                      onClick={() => navigateTo(slide.route)}
                      className="bg-[#0D2A45] hover:bg-[#133A61] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-lg shadow-lg transition-all flex items-center gap-2 border border-slate-600 cursor-pointer"
                    >
                      <span>Explore More</span>
                      <ArrowRight className="w-4 h-4 text-amber-400" />
                    </button>
                    <button
                      onClick={() => navigateTo('contact')}
                      className="bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-lg transition-all cursor-pointer"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-[#0D2A45] transition-colors cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-[#0D2A45] transition-colors cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentSlide === idx ? 'w-8 bg-amber-400' : 'w-2 bg-white/50'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. VISION, MISSION, ASHIRVAD (Interactive Popup Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: VISION */}
          <div 
            onClick={() => handleCardClick('vision')}
            className="border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group bg-[#FAFAFA] cursor-pointer"
          >
            <div className="space-y-3">
              <div className="h-44 rounded-lg overflow-hidden bg-slate-100 relative">
                <img 
                  src="/uploads/2025/09/about1.png" 
                  alt="Vision Ashirvad"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 right-2 bg-slate-950/80 text-white text-[10px] font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to read details
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-[#0D2A45] transition-colors pt-2">
                VISION
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Reconciliation and service, with people of goodwill to transform relationships and structures in society.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
              <span className="text-xs font-bold text-[#0D2A45] uppercase tracking-wider">Karnataka Jesuit Mission</span>
              <span className="text-xs font-bold text-amber-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                <span>View Details</span>
                <span>→</span>
              </span>
            </div>
          </div>

          {/* Card 2: MISSION */}
          <div 
            onClick={() => handleCardClick('mission')}
            className="border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group bg-[#FAFAFA] cursor-pointer"
          >
            <div className="space-y-3">
              <div className="h-44 rounded-lg overflow-hidden bg-slate-100 relative">
                <img 
                  src="/uploads/2025/09/DSC_5964-1-650x572.jpg" 
                  alt="Mission Ashirvad"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 right-2 bg-slate-950/80 text-white text-[10px] font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to read details
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-[#0D2A45] transition-colors pt-2">
                MISSION
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Rooted in compassion, social justice, reconciliation and service, with people of goodwill to transform relationships and structures in society.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
              <span className="text-xs font-bold text-[#0D2A45] uppercase tracking-wider">Compassion & Justice</span>
              <span className="text-xs font-bold text-amber-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                <span>View Details</span>
                <span>→</span>
              </span>
            </div>
          </div>

          {/* Card 3: ASHIRVAD */}
          <div 
            onClick={() => handleCardClick('ashirvad')}
            className="border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group bg-[#FAFAFA] cursor-pointer"
          >
            <div className="space-y-3">
              <div className="h-44 rounded-lg overflow-hidden bg-slate-100 relative">
                <img 
                  src="/uploads/2020/04/DSC_4706-2-scaled-1.jpg" 
                  alt="Ashirvad Centre"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 right-2 bg-slate-950/80 text-white text-[10px] font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to read details
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-[#0D2A45] transition-colors pt-2">
                ASHIRVAD
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ashirvad is situated in the heart of the city of Bengaluru. True to its name, Ashirvad has been a blessing to the city through its various inter-religious activities.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
              <span className="text-xs font-bold text-[#0D2A45] uppercase tracking-wider">Bengaluru Centre</span>
              <span className="text-xs font-bold text-amber-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                <span>View Details</span>
                <span>→</span>
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. ASHIRVAD COMMUNITY / A Home of Blessing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold text-[#0D2A45] uppercase tracking-widest block">
              ASHIRVAD COMMUNITY
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              A Home of Blessing
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Ashirvad also organizes for students and teachers of schools and colleges educative programmes in understanding religions, spiritual training programmes, retreats and seminars.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Ashirvad conducts for Karnataka Jesuit Province personnel and their colleagues <strong className="text-slate-900">‘Jesuit Collaborators Training Programme’ (JESCOL)</strong>, for which teachers and professors from different schools and colleges of Karnataka come in batches for two to three days training programme.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Ashirvad is also a home of community of Jesuits. At present <strong className="text-slate-900">Fr Arun Luis</strong> is the Superior and Director, <strong className="text-slate-900">Fr Jerald D’Souza</strong>, <strong className="text-slate-900">Fr Anthony Arul</strong> and <strong className="text-slate-900">Fr Joseph Xavier</strong> are in the community.
            </p>

            <div className="pt-2">
              <button
                onClick={() => navigateTo('about')}
                className="bg-[#0D2A45] hover:bg-[#133A61] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-lg shadow transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
              <img
                src="/uploads/2025/09/DSC_6220-768x512.jpg"
                alt="Ashirvad Community"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. FACILITIES CAROUSEL */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">CAMPUS & INFRASTRUCTURE</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Facilities at Ashirvad
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-light">
              Serene sanctuary and collaborative spaces in the heart of Bengaluru
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilityGallery.map((item, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox && openLightbox(item.image, item.title, "Ashirvad Campus")}
                className="group relative h-64 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 cursor-pointer shadow-lg hover:border-amber-400/80 transition-all"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-90"
                  onError={(e) => {
                    e.target.src = '/uploads/2020/04/DSC_4706-2-scaled-1.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-serif font-bold text-white text-base tracking-wider">
                    {item.title}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-[#0D2A45] uppercase tracking-widest">
            OUR CORE INITIATIVES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            OUR SERVICES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* 1. IRHM */}
          <div className="bg-[#FAFAFA] border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="h-48 overflow-hidden bg-slate-100">
                <img
                  src="/uploads/2025/09/DSC_5964-1-650x572.jpg"
                  alt="IRHM"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-[#0D2A45] transition-colors leading-tight">
                  IRHM Inter-Religious Harmony Movement
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  The Inter-Religious Harmony Movement (IRHM), inspired by Jesuit values of inclusivity and justice, fosters unity among diverse faiths. Through Ashirvad’s vision, it promotes peace, dialogue, and collaborative action for the marginalized.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button
                onClick={() => navigateTo('irhm')}
                className="w-full bg-white border border-slate-300 hover:border-[#0D2A45] hover:text-[#0D2A45] py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors text-center cursor-pointer"
              >
                Know More
              </button>
            </div>
          </div>

          {/* 2. HRDC */}
          <div className="bg-[#FAFAFA] border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="h-48 overflow-hidden bg-slate-100">
                <img
                  src="/uploads/2025/09/DSC_0940-650x572.jpg"
                  alt="HRDC"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-[#0D2A45] transition-colors leading-tight">
                  HRDC Human Resource Development Centre
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  The Human Resource Development Centre (HRDC) trains youth and adults with lifeskills and personal growth programs, preparing them to be effective, responsible, and compassionate leaders in their communities.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button
                onClick={() => navigateTo('hrdc')}
                className="w-full bg-white border border-slate-300 hover:border-[#0D2A45] hover:text-[#0D2A45] py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors text-center cursor-pointer"
              >
                Know More
              </button>
            </div>
          </div>

          {/* 3. CSC */}
          <div className="bg-[#FAFAFA] border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="h-48 overflow-hidden bg-slate-100">
                <img
                  src="/uploads/2025/09/DSC_3027-650x572.jpg"
                  alt="CSC"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-[#0D2A45] transition-colors leading-tight">
                  CSC Centre For Social Concern
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  The Spandana Study Centre provides evening classes for disadvantaged children, offering academic support, life-skill development, and a nurturing space to grow and realize their full potential.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button
                onClick={() => navigateTo('csc')}
                className="w-full bg-white border border-slate-300 hover:border-[#0D2A45] hover:text-[#0D2A45] py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors text-center cursor-pointer"
              >
                Know More
              </button>
            </div>
          </div>

          {/* 4. MAIN */}
          <div className="bg-[#FAFAFA] border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="h-48 overflow-hidden bg-slate-100">
                <img
                  src="/uploads/2025/09/WhatsApp-Image-2024-08-23-at-6.27.34-PM-1-650x572.jpg"
                  alt="MAIN"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-[#0D2A45] transition-colors leading-tight">
                  MAIN Migration Asst & Information Network
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  MAIN, an initiative of the Jesuit Collective, provides care, guidance, and timely support to distressed migrant workers across India, serving as a compassionate bridge to resources and relief.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button
                onClick={() => navigateTo('csc')}
                className="w-full bg-white border border-slate-300 hover:border-[#0D2A45] hover:text-[#0D2A45] py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors text-center cursor-pointer"
              >
                Know More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EVENTS OF THE YEAR 2025 */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              EVENTS OF THE YEAR 2025
            </h2>
            <p className="text-amber-300/90 text-sm sm:text-base font-serif italic max-w-2xl mx-auto">
              "Ashirvad – Where Hearts Meet, Dreams Grow And Every Moment Becomes A Blessing."
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#0E233C] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
              <div className="md:col-span-6 h-64 sm:h-80 bg-slate-900 overflow-hidden">
                <img
                  src="/uploads/2025/09/IRHM-1.png"
                  alt="IRHM Golden Jubilee"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                  onClick={() => openLightbox && openLightbox("/uploads/2025/09/IRHM-1.png", "IRHM Golden Jubilee", "Events 2025")}
                />
              </div>

              <div className="md:col-span-6 p-6 sm:p-8 space-y-4">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                  HIGHLIGHTED EVENT
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                  03 AUGUST INAUGURATION OF GOLDEN JUBILEE OF IRHM
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Celebrating 50 glorious years of inter-religious harmony, compassion, and accompaniment across faiths in Karnataka.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => navigateTo('news', '2025')}
                    className="bg-[#0D2A45] hover:bg-[#133A61] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2 shadow border border-slate-600 cursor-pointer"
                  >
                    <span>View All 2025 Events</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FACILITIES HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FAF7F2] border border-slate-200 rounded-2xl p-8 sm:p-12 text-center space-y-6">
          <span className="text-xs font-bold text-[#0D2A45] uppercase tracking-widest block">
            CONFERENCE & MEETING FACILITIES
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Facilities
          </h2>

          <p className="text-slate-700 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Host your events, seminars, training’s meetings. We have 7 magnificent halls with all facilities.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 pt-2 text-xs sm:text-sm font-bold text-slate-800">
            <span className="bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">✓ ROOMS</span>
            <span className="bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">✓ IMPERIAL HALLS</span>
            <span className="bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">✓ PARKING SPACE</span>
            <span className="bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">✓ AUDIO-VISUAL AMENITIES</span>
          </div>

          <div className="pt-4">
            <button
              onClick={() => navigateTo('contact')}
              className="bg-[#0D2A45] hover:bg-[#133A61] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Know More & Book Facilities</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
