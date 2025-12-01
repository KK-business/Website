import { useEffect, useState } from 'react';

interface ShootingStar {
  id: number;
  left: string;
  top: string;
  delay: string;
  duration: string;
  isBright: boolean;
}

export default function AnimatedBackground() {
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    const stars: ShootingStar[] = [];
    for (let i = 0; i < 5; i++) {
      stars.push({
        id: i,
        left: `${Math.random() * 20}%`,
        top: `${Math.random() * 20}%`,
        delay: `${Math.random() * 2}s`,
        duration: `${3.5 + Math.random() * 1.5}s`,
        isBright: Math.random() > 0.5,
      });
    }
    setShootingStars(stars);
  }, []);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(rgba(59, 130, 246, 0.145), rgba(96, 165, 250, 0.082), transparent)',
            zIndex: 5,
          }}
        />

        <div
          className="absolute -top-40 -left-40 w-80 sm:w-96 h-80 sm:h-96 rounded-full blur-3xl animate-blob"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.19), rgba(59, 130, 246, 0.125), transparent)',
          }}
        />

        <div
          className="absolute -top-20 -right-20 w-60 sm:w-72 h-60 sm:h-72 rounded-full blur-3xl animate-blob"
          style={{
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.145), rgba(59, 130, 246, 0.082), transparent)',
            animationDelay: '2s',
          }}
        />

        <div
          className="absolute -bottom-40 -right-40 w-72 sm:w-80 h-72 sm:h-80 rounded-full blur-3xl animate-blob"
          style={{
            background: 'radial-gradient(circle, rgba(29, 78, 216, 0.208), rgba(59, 130, 246, 0.145), transparent)',
            animationDelay: '4s',
          }}
        />

        <div
          className="absolute -bottom-20 -left-20 w-56 sm:w-64 h-56 sm:h-64 rounded-full blur-3xl animate-blob"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.125), rgba(96, 165, 250, 0.082), transparent)',
            animationDelay: '6s',
          }}
        />

        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-48 h-40 sm:h-48 rounded-full blur-2xl animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.063), rgba(96, 165, 250, 0.063), transparent)',
          }}
        />

        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-2xl animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.082), transparent)',
            animationDelay: '2s',
          }}
        />

        <div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full blur-xl animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(29, 78, 216, 0.125), transparent)',
            animationDelay: '4s',
          }}
        />

        <div
          className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full blur-lg animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.145), transparent)',
            animationDuration: '3s',
          }}
        />

        <div
          className="absolute bottom-1/3 left-1/3 w-20 h-20 rounded-full blur-lg animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.125), transparent)',
            animationDuration: '4s',
            animationDelay: '2s',
          }}
        />

        <div
          className="absolute top-1/2 -left-10 w-28 h-40 rounded-full blur-2xl animate-drift"
          style={{
            background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.082), rgba(96, 165, 250, 0.063), transparent)',
          }}
        />

        <div
          className="absolute top-1/2 -right-10 w-28 h-40 rounded-full blur-2xl animate-drift"
          style={{
            background: 'linear-gradient(-45deg, rgba(59, 130, 246, 0.082), rgba(96, 165, 250, 0.063), transparent)',
            animationDelay: '4s',
          }}
        />

        <div
          className="absolute top-3/4 left-1/6 w-36 h-36 rounded-full blur-3xl animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.07), transparent)',
            animationDelay: '6s',
          }}
        />

        <div
          className="absolute top-1/6 right-1/6 w-44 h-44 rounded-full blur-3xl animate-blob"
          style={{
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.063), transparent)',
            animationDelay: '8s',
          }}
        />

        <div
          className="absolute top-10 left-10 w-20 h-20 rounded-full blur-xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.094), transparent)',
            animationDuration: '5s',
          }}
        />

        <div
          className="absolute bottom-10 right-10 w-24 h-24 rounded-full blur-xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.082), transparent)',
            animationDuration: '6s',
            animationDelay: '3s',
          }}
        />
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {shootingStars.map((star) => (
          <div
            key={star.id}
            className={`absolute ${star.isBright ? 'w-1.5 h-1.5' : 'w-1 h-1'} rounded-full animate-shooting-star`}
            style={{
              backgroundColor: star.isBright ? 'rgb(255, 255, 255)' : 'rgb(96, 165, 250)',
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
              animationDuration: star.duration,
              opacity: star.isBright ? 0.8 : 0.6,
              boxShadow: star.isBright
                ? '0 0 12px rgb(59, 130, 246), 0 0 24px rgb(96, 165, 250), 0 0 36px rgb(255, 255, 255)'
                : '0 0 6px rgb(96, 165, 250)',
              filter: star.isBright ? 'brightness(1.5)' : undefined,
            }}
          >
            <div
              className="absolute inset-0 rounded-full blur-sm"
              style={{
                backgroundColor: star.isBright ? 'rgb(255, 255, 255)' : 'rgb(96, 165, 250)',
              }}
            />
            {star.isBright && (
              <>
                <div
                  className="absolute inset-0 rounded-full blur-sm animate-pulse"
                  style={{
                    backgroundColor: 'rgb(255, 255, 255)',
                    animationDuration: '0.8s',
                  }}
                />
                <div
                  className="absolute -inset-2 rounded-full blur-md animate-pulse"
                  style={{
                    backgroundColor: 'rgb(96, 165, 250)',
                    opacity: 0.6,
                    animationDuration: '1.2s',
                    animationDelay: '0.3s',
                  }}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
