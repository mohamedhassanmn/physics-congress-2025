"use client";

import { useEffect, useState } from "react";
import { X, Mic2, Sparkles, ArrowRight, Plane, Clock } from "lucide-react";

export default function SpeakerInvitationToast({
  onDismiss = () => {},
  onAction = () => console.log("Go to form"),
  className = "",
  delay = 0,
  type = "",
  data = {
    speakerInvitationTitle: "",
    speakerInvitationContent: "",
    speakerInvitationBadgeText: "",
    speakerInvitationButtonText: "",
    speakerInvitationButtonLink: "",
    visaSupportTitle: "",
    visaSupportContent: "",
    visaSupportBadgeText: "",
    visaSupportBadgeNudgeText: "",
    visaSupportButtonText: "",
    visaSupportButtonLink: "",
  },
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsEntering(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleDismiss = () => {
    setIsEntering(false);
    setTimeout(() => {
      setIsVisible(false);
      onDismiss?.();
    }, 300);
  };

  const handleBtnClick = () => {
    window.location.href =
      data?.speakerInvitationButtonLink || data?.visaSupportButtonLink || "#";
  };

  if (!isVisible) return null;

  return (
    <div
      className={`toast ${type === "visa" ? "visa-toast" : ""} ${isEntering ? "toast-enter" : "toast-exit"} ${className}`}
    >
      {/* Glow overlay */}
      <div className={`toast-glow ${type === "visa" ? "visa-glow" : ""}`} />

      {/* Decorative blobs */}
      <div
        className={
          type === "visa" ? "blob-visa blob-visa-top" : "blob blob-top"
        }
      />
      <div
        className={
          type === "visa" ? "blob-visa blob-visa-bottom" : "blob blob-bottom"
        }
      />

      {/* Pulsing border */}
      <div
        className={
          type === "visa" ? "toast-border visa-border" : "toast-border"
        }
      />

      <button
        className={`toast-close ${type === "visa" ? "toast-visa-close" : ""}`}
        onClick={handleDismiss}
      >
        <X size={14} />
      </button>

      <div className="toast-content">
        {/* Icon */}
        <div className="icon-wrapper">
          <div
            className={type === "visa" ? "icon-box visa-icon-box" : "icon-box"}
          >
            <span className="icon-animation">
              {type === "speaker" ? <Mic2 size={20} /> : <Plane size={20} />}
            </span>
          </div>

          <div className={type === "visa" ? "ring visa-ring" : "ring ring-1"} />
          <div
            className={
              type === "visa"
                ? "ring visa-ring ring-2 visa-ring-2"
                : "ring ring-2"
            }
          />

          {type === "visa" ? (
            <Clock className="sparkle visa-sparkle" size={16} />
          ) : (
            <Sparkles className="sparkle" size={16} />
          )}
        </div>

        {/* Text */}
        <div
          className={
            type === "visa" ? "text-content text-visa-content" : "text-content"
          }
        >
          <div className="badge-wrapper">
            <div className={type === "visa" ? "badge badge-visa" : "badge"}>
              {type === "speaker"
                ? data?.speakerInvitationBadgeText
                : data?.visaSupportBadgeText}
            </div>
            {type === "visa" && <div className="caution-text">Apply Early</div>}
          </div>

          <h3>
            {type === "speaker"
              ? data?.speakerInvitationTitle
              : data?.visaSupportTitle}
          </h3>

          <p>
            {type === "speaker"
              ? data?.speakerInvitationContent
              : data?.visaSupportContent}
          </p>

          <button
            className={
              type === "visa" ? "action-btn visa-action-btn" : "action-btn"
            }
            onClick={handleBtnClick}
          >
            {data &&
              (type === "speaker"
                ? data?.speakerInvitationButtonText
                : data?.visaSupportButtonText)}{" "}
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Bottom shimmer */}
      <div className="shimmer">
        <div
          className={
            type === "visa"
              ? "shimmer-inner visa-shimmer-inner"
              : "shimmer-inner"
          }
        />
      </div>
    </div>
  );
}
