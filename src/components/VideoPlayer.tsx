"use client";

import { useRef, useState, useCallback } from "react";
import { Play, Pause, Maximize2, Volume2, VolumeX } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title: string;
}

export default function VideoPlayer({ src, poster, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
      setHasStarted(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  }, []);

  const handleProgressClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const video = videoRef.current;
      if (!video || !video.duration) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const pct = x / rect.width;
      video.currentTime = pct * video.duration;
    },
    []
  );

  const handleEnded = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handleFullscreen = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  }, []);

  return (
    <div className="space-y-4 pt-2 border-t border-border">
      <div className="flex items-center gap-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Concept Video
        </h3>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div
        className="group relative rounded-xl overflow-hidden bg-black/95 shadow-sm border border-border cursor-pointer select-none"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Video element */}
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted={isMuted}
          playsInline
          preload="metadata"
          className="w-full aspect-video object-contain"
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          onClick={togglePlay}
          aria-label={`Video: ${title}`}
        />

        {/* Initial play overlay — large centered button */}
        {!hasStarted && (
          <button
            type="button"
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40"
            aria-label={`Play video: ${title}`}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/90 text-primary-foreground shadow-lg backdrop-blur-sm transition-transform hover:scale-110">
              <Play className="h-7 w-7 ml-0.5" fill="currentColor" />
            </div>
          </button>
        )}

        {/* Bottom controls — visible on hover after first play */}
        {hasStarted && (
          <div
            className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pt-10 pb-3 px-4 transition-opacity duration-300 ${
              isHovering || !isPlaying ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Progress bar */}
            <div
              className="relative w-full h-1 bg-white/20 rounded-full mb-3 cursor-pointer group/progress"
              onClick={handleProgressClick}
            >
              <div
                className="absolute inset-y-0 left-0 bg-primary rounded-full transition-[width] duration-100"
                style={{ width: `${progress}%` }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-sm opacity-0 group-hover/progress:opacity-100 transition-opacity"
                style={{ left: `${progress}%`, marginLeft: "-6px" }}
              />
            </div>

            {/* Control buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={togglePlay}
                className="text-white/90 hover:text-white transition-colors"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5" fill="currentColor" />
                ) : (
                  <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
                )}
              </button>

              <button
                type="button"
                onClick={toggleMute}
                className="text-white/90 hover:text-white transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="h-5 w-5" />
                ) : (
                  <Volume2 className="h-5 w-5" />
                )}
              </button>

              <div className="flex-1" />

              <button
                type="button"
                onClick={handleFullscreen}
                className="text-white/90 hover:text-white transition-colors"
                aria-label="Fullscreen"
              >
                <Maximize2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
