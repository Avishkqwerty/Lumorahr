import { motion } from 'motion/react';

export function ClientLogos() {
  const logos = [
    { url: 'https://services.hashxinnovations.com/logo/Swift%20Hosting.png', name: 'Swift Hosting' },
    { url: 'https://services.hashxinnovations.com/logo/GIGGLES.png', name: 'GIGGLES' },
    { url: 'https://services.hashxinnovations.com/logo/CyberMass%20Solutions.webp', name: 'CyberMass Solutions' },
    { url: 'https://infiniteventures.lk/wp-content/uploads/2023/02/550x600.png', name: 'Infinite Ventures' },
    { url: 'https://services.hashxinnovations.com/logo/Mono-wordmark.png', name: 'Mono' },
    { url: 'https://services.hashxinnovations.com/logo/Rezpitch.png', name: 'Rezpitch' },
    { url: 'https://services.hashxinnovations.com/logo/BE%20DAPPER.jpg', name: 'BE DAPPER' },
    { url: 'https://services.hashxinnovations.com/logo/Jeewana%20Lanka%20Foundation.png', name: 'Jeewana Lanka Foundation' },
    { url: 'https://services.hashxinnovations.com/logo/MEASA%20Consultancies.png', name: 'MEASA Consultancies' },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 bg-white/50 backdrop-blur-sm border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
            Trusted By Leading Organizations
          </p>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-[#625aeb] bg-clip-text text-transparent">
            Our Valued Clients
          </h2>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white/50 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Logos */}
          <motion.div
            className="flex gap-16 items-center"
            animate={{
              x: [0, -1800],
            }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
