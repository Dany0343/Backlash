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
      emailAddress: formData.get("emailAddress"),
      title: formData.get("title"),
      linkImage: formData.get("linkImage"),
      date: formData.get("date"),
      details: formData.get("details"),
    };

    // Fetch a API Route
    const response = await fetch("/api/submitForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Maneja la respuesta
    if (response.ok) {
      // Haz algo con la respuesta si es exitosa, por ejemplo, mostrar un mensaje de éxito
    } else {
      // Maneja el caso de error
    }

    setSubmitting(false);
  };

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto border-2 border-white m-9 rounded-md">
        <section class="max-w-7xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800">
          <h1 class="text-xl font-bold text-white capitalize dark:text-white">
            Upload Content
          </h1>
          <form onSubmit={handleSubmit}>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-white dark:text-gray-200" for="username">
                  Username
                </label>
                <input
                  name="username"
                  id="username"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label class="text-white dark:text-gray-200" for="emailAddress">
                  Email Address
                </label>
                <input
                  name="emailAddress"
                  id="emailAddress"
                  type="email"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label class="text-white dark:text-gray-200" for="Title">
                  Title
                </label>
                <input
                  name="title"
                  id="Title"
                  type="Title"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="text-white dark:text-gray-200"
                  for="titleConfirmation"
                >
                  Link Imagen
                </label>
                <input
                  name="linkImage"
                  id="titleConfirmation"
                  type="Title"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="text-white dark:text-gray-200"
                  for="titleConfirmation"
                >
                  Realease Date
                </label>
                <input
                  name="date"
                  id="date"
                  type="date"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="text-white dark:text-gray-200"
                  for="titleConfirmation"
                >
                  Details
                </label>
                <textarea
                  name="details"
                  id="textarea"
                  type="textarea"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                ></textarea>
              </div>
              <div className="col-span-2">
                <label class="block text-sm font-medium text-white">
                  Content
                </label>
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <svg
                      class="mx-auto h-12 w-12 text-white"
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
                    <div class="flex text-sm text-gray-600">
                      <label
                        for="file-upload"
                        class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span class="">Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          class="sr-only"
                          accept="video/*"
                        />
                      </label>
                      <p class="pl-1 text-white">or drag and drop</p>
                    </div>
                    <p class="text-xs text-white">MP4, WAV</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-end mt-6">
              <button
                type="submit"
                disabled={submitting}
                class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
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
