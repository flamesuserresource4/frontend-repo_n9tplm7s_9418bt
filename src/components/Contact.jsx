import React from 'react';

const Contact = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Contact</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="mailto:alex.rivera.iot@example.com"
            className="block border border-gray-200 p-4 text-gray-900 hover:bg-gray-50"
          >
            alex.rivera.iot@example.com
          </a>
          <a
            href="https://www.linkedin.com/in/alexrivera-iot"
            target="_blank"
            rel="noreferrer"
            className="block border border-gray-200 p-4 text-gray-900 hover:bg-gray-50"
          >
            linkedin.com/in/alexrivera-iot
          </a>
        </div>
        <p className="mt-8 text-xs text-gray-600">© {new Date().getFullYear()} Alex Rivera. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
