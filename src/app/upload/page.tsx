"use client";
import Header from "../Header";
import Footer from "../Footer";
import React, { useState } from "react";

export default function Upload() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    const formData = new FormData(event.currentTarget);

    const data = {
      username: formData.get("username"),
      email: formData.get("emailAddress"),
      title: formData.get("title"),
      imageLink: formData.get("linkImage"),
      releaseDate: formData.get("date"),
      details: formData.get("details"),
    };

    // Fetch a API Route
    const response = await fetch("/api/movies", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Maneja la respuesta
    if (response.ok) {
      console.log("Funciona")
    } else {
      console.log("No funciona")
    }

    setSubmitting(false);
  };

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto border-2 border-white m-9 rounded-md">
        <section className="max-w-7xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800">
          <h1 className="text-xl font-bold text-white capitalize dark:text-white">
            Upload Content
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-white dark:text-gray-200" htmlFor="username">
                  Username
                </label>
                <input
                  name="username"
                  id="username"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-white dark:text-gray-200" htmlFor="emailAddress">
                  Email Address
                </label>
                <input
                  name="emailAddress"
                  id="emailAddress"
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-white dark:text-gray-200" htmlFor="Title">
                  Title
                </label>
                <input
                  name="title"
                  id="Title"
                  type="Title"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="titleConfirmation"
                >
                  Link Imagen
                </label>
                <input
                  name="linkImage"
                  id="titleConfirmation"
                  type="Title"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="titleConfirmation"
                >
                  Realease Date
                </label>
                <input
                  name="date"
                  id="date"
                  type="date"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="titleConfirmation"
                >
                  Details
                </label>
                <textarea
                  name="details"
                  id="textarea"
                  type="textarea"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                ></textarea>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-white">
                  Content
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-white"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span className="">Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          accept="video/*"
                        />
                      </label>
                      <p className="pl-1 text-white">or drag and drop</p>
                    </div>
                    <p className="text-xs text-white">MP4, WAV</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
              >
                {submitting ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
}
