"use client";
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import JoinWaitlistButton from '@/components/ui/joinwaitlist';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    twitter: false,
    newsletter: false,
    linkedin: false,
    contactDetail: ""
  });
  const [active, setActive] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formState),
    });

    let data = await res.json();
    if (res.ok) {
      router.push('/success');
    } else {
      setMessage(data.message);
      setActive(true);
      setTimeout(() => {
        setActive(false);
        setMessage("");
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.id]: e.target.checked,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center  min-h-screen p-4 bg-[url('/div.svg')] opacity-100">
      <MaxWidthWrapper>
        <div className="flex justify-center items-center mb-6">
          <Image src="/logo.png" alt="Billy Logo" width={140} height={140} />
        </div>
        <h2 className="text-3xl mb-6 text-center font-bold">Join Waitlist & Get Early Access to Platform</h2>

        {/* Notification for successful form submission */}
        <div
          style={{
            right: active && message ? 24 : "-50%",
          }}
          className="fixed bottom-5 duration-200 px-4 py-2 font-semibold rounded bg-sky-200 text-black shadow-lg">
          <p>{message}</p>
        </div>

        <form onSubmit={handleSubmit} className="w-full text-center">
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="sr-only">Full Name</label>
            <input
              placeholder="Full Name"
              onChange={handleChange}
              id="name"
              type="text"
              required
              className="border border-gray-300 p-4 w-full rounded-md  placeholder:font-bold placeholder-gray-500"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="sr-only">Enter Email Address</label>
            <input
              placeholder="Enter Email Address"
              onChange={handleChange}
              id="email"
              type="email"
              required
              className="border border-gray-300 p-4 w-full rounded-md  placeholder:font-bold placeholder-gray-500"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mt-4 mb-2 text-3xl">I am a ______________ (select all that apply to you)</label>
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  checked={formState.newsletter}
                  onChange={handleCheckboxChange}
                  className="hidden"
                />
                <span className={`flex items-center gap-2 px-8 py-4 border rounded-lg cursor-pointer ${formState.newsletter ? 'bg-black text-white' : 'bg-white text-black'}`}>
                  Newsletter Creator
                  {formState.newsletter }
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="linkedin"
                  checked={formState.linkedin}
                  onChange={handleCheckboxChange}
                  className="hidden"
                />
                <span className={`flex items-center gap-2 px-8 py-4 border rounded-lg cursor-pointer ${formState.linkedin ? 'bg-black text-white' : 'bg-white text-black'}`}>
                  LinkedIn Influencer
                  {formState.linkedin }
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="twitter"
                  checked={formState.twitter}
                  onChange={handleCheckboxChange}
                  className="hidden"
                />
                <span className={`flex items-center gap-2 px-8 py-4 border rounded-lg cursor-pointer ${formState.twitter ? 'bg-black text-white' : 'bg-white text-black'}`}>
                  Twitter Influencer
                  {formState.twitter }
                </span>
              </label>
            </div>
          </div>

          {(formState.twitter || formState.newsletter || formState.linkedin) && (
            <div className="flex flex-col mb-4">
              <label htmlFor="contactDetail" className="sr-only">Enter Your Newsletter, X or LinkedIn Profile URL (any one)</label>
              <input
                placeholder="Enter Your Newsletter, X or LinkedIn Profile URL (any one)"
                onChange={handleChange}
                id="contactDetail"
                type="text"
                required
                className="border border-gray-300 p-4 w-full rounded-md  placeholder:font-bold placeholder-gray-500 "
              />
            </div>
          )}

          <button className="join-waitlist-button" >
            <JoinWaitlistButton/>
          </button>
        </form>
      </MaxWidthWrapper>
    </div>
  );
};

export default Contact;
