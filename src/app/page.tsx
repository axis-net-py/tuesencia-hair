"use client";

import { useState } from "react";
import SmoothScrollProvider from "@/components/common/SmoothScrollProvider";
import CustomCursor from "@/components/common/CustomCursor";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import EssenceDiagnostic from "@/components/sections/EssenceDiagnostic";
import AtelierServices from "@/components/sections/AtelierServices";
import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";
import LookbookGallery from "@/components/sections/LookbookGallery";
import SanctuaryExperience from "@/components/sections/SanctuaryExperience";
import FounderSection from "@/components/sections/FounderSection";
import ClientVoices from "@/components/sections/ClientVoices";
import InstagramFeed from "@/components/sections/InstagramFeed";
import Footer from "@/components/sections/Footer";
import BookingModal from "@/components/sections/BookingModal";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedRitual, setPreselectedRitual] = useState<string | undefined>();

  const handleOpenBooking = (ritual?: string) => {
    setPreselectedRitual(ritual);
    setBookingModalOpen(true);
  };

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#0a0908] text-[#f8f6f0] selection:bg-[#dfc18c] selection:text-[#0a0908]">
        {/* Dynamic Custom Cursor */}
        <CustomCursor />

        {/* Global Navigation Header */}
        <Navbar onOpenBooking={handleOpenBooking} />

        <main>
          {/* Hero Section */}
          <Hero onOpenBooking={() => handleOpenBooking()} />

          {/* Interactive Hair & Mood Diagnostic Quiz */}
          <EssenceDiagnostic />

          {/* Sensorial Atelier Rituals Menu */}
          <AtelierServices onSelectRitual={handleOpenBooking} />

          {/* Interactive Before & After Transformation Slider */}
          <BeforeAfterSlider />

          {/* Editorial Lookbook & Collections */}
          <LookbookGallery />

          {/* The Physical Sanctuary & Philosophy */}
          <SanctuaryExperience />

          {/* Founder Spotlight: Camila Bessing */}
          <FounderSection onOpenBooking={() => handleOpenBooking()} />

          {/* Client Testimonials */}
          <ClientVoices />

          {/* Instagram Connection */}
          <InstagramFeed />
        </main>

        {/* Editorial Footer */}
        <Footer />

        {/* VIP Booking Concierge Modal */}
        <BookingModal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          preselectedRitual={preselectedRitual}
        />
      </div>
    </SmoothScrollProvider>
  );
}
