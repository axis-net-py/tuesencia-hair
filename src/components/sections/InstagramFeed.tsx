import Image from "next/image";
import { ExternalLink, Heart, MessageCircle } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { SALON_DATA } from "@/lib/constants";

export default function InstagramFeed() {
  const posts = [
    {
      img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
      likes: "142",
      comments: "18",
    },
    {
      img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      likes: "219",
      comments: "24",
    },
    {
      img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80",
      likes: "185",
      comments: "15",
    },
    {
      img: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=600&q=80",
      likes: "134",
      comments: "12",
    },
    {
      img: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80",
      likes: "198",
      comments: "29",
    },
    {
      img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=600&q=80",
      likes: "267",
      comments: "31",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0908] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#dfc18c] block mb-1">
              COMUNIDAD & ACTUALIDAD
            </span>
            <h3 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl text-white font-normal">
              Sigue el día a día en {SALON_DATA.instagramHandle}
            </h3>
          </div>

          <a
            href={SALON_DATA.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#dfc18c]/40 bg-[#141312] text-xs font-mono uppercase tracking-widest text-[#dfc18c] hover:bg-[#dfc18c] hover:text-[#0a0908] transition-all duration-300"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Seguir en Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {posts.map((p, idx) => (
            <a
              key={idx}
              href={SALON_DATA.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden border border-white/10 bg-[#141312]"
              data-cursor="INSTAGRAM"
            >
              <Image
                src={p.img}
                alt="Instagram post Tu Esencia"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-[#0a0908]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 text-white text-xs font-mono">
                <span className="flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  {p.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  {p.comments}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
