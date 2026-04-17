"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Quote, Star } from "lucide-react";
import reviewsData from "@/testimonials.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-[#F37021] font-black uppercase tracking-[0.3em] text-[10px] mb-4">
            Client Stories
          </h4>
          <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1B] tracking-tighter">
            Words From Our <span className="text-[#F37021]">Partners.</span>
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-20"
        >
          {reviewsData.reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm  transition-all duration-500 flex flex-col h-full group">
                
                {/* Quote Icon */}
                <div className="mb-6 flex justify-between items-center">
                  <div className="p-3 bg-gray-50 rounded-2xl text-[#F37021] group-hover:bg-[#F37021] group-hover:text-white transition-colors">
                    <Quote size={24} />
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#F37021" color="#F37021" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-600 text-lg leading-relaxed font-medium mb-8 flex-1 ">
                  "{review.content}"
                </p>

                {/* Client Info */}
                <div className="pt-6 border-t border-gray-50">
                  <h5 className="text-[#1A1A1B] font-black uppercase tracking-tight text-base">
                    {review.name}
                  </h5>
                  <p className="text-[#F37021] text-[10px] font-bold uppercase tracking-widest mt-1">
                    {review.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #F37021 !important;
          width: 20px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;