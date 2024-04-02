"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HoverText } from "..";

const CookieConsent = () => {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const cookieConsent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookieConsent="));

    if (cookieConsent) {
      const consentValue = cookieConsent.split("=")[1];
      setAccepted(consentValue === "accepted");
    }
  }, []);

  const acceptCookies = () => {
    document.cookie =
      "cookieConsent=accepted; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    setAccepted(true);
  };

  const rejectCookies = () => {
    document.cookie =
      "cookieConsent=rejected; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    setAccepted(false);
  };

  if (accepted) {
    return null;
  }

  return (
    <div
      id="cookieConsent"
      className="flex items-center text-sm fixed z-50 bottom-10 left-1/2 -translate-x-1/2 rounded-xl p-3 bg-light-dark"
    >
      <div className="opacity-50">This website uses</div>
      <HoverText
        href="/"
        className="ml-1 pb-0.5 border-b"
        mainTextClass="opacity-50"
      >
        cookies
      </HoverText>
      <HoverText href="/" className="ml-5 pb-0.5 border-b">
        <button type="button" className="font-medium">
          Accept
        </button>
      </HoverText>
    </div>
  );
};

export default CookieConsent;
