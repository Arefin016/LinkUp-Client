import React from 'react';

const ApiDocumentation = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">LinkUp API Documentation</h1>

      <h2 className="text-2xl font-semibold mt-4">Table of Contents</h2>
      <ul className="list-disc list-inside mb-4">
        <li><a href="#overview" className="text-emerald-500 hover:underline">Overview</a></li>
        <li><a href="#authentication" className="text-emerald-500 hover:underline">Authentication</a></li>
        <li><a href="#endpoints" className="text-emerald-500 hover:underline">Endpoints</a></li>
        <li><a href="#error-handling" className="text-emerald-500 hover:underline">Error Handling</a></li>
        <li><a href="#rate-limiting" className="text-emerald-500 hover:underline">Rate Limiting</a></li>
        <li><a href="#contact" className="text-emerald-500 hover:underline">Contact</a></li>
      </ul>

      <h2 id="overview" className="text-2xl font-semibold mt-4">Overview</h2>
      <p className="mb-4">
        The LinkUp API provides endpoints for managing users, meetings, and notifications for an efficient scheduling experience. The API follows RESTful conventions and returns JSON responses.
      </p>

      <h2 id="authentication" className="text-2xl font-semibold mt-4">Authentication</h2>
      <p className="mb-4">
        The API uses JSON Web Tokens (JWT) for authentication. Users must authenticate to access protected routes.
      </p>

      <h3 className="font-semibold">Authentication Flow:</h3>
      <ol className="list-decimal list-inside mb-4">
        <li>Register a new user.</li>
        <li>Login to receive a JWT.</li>
        <li>Include the JWT in the <code className="bg-gray-200">Authorization</code> header for subsequent requests.</li>
      </ol>

      <h2 id="endpoints" className="text-2xl font-semibold mt-4">Endpoints</h2>

      <h3 className="text-lg font-semibold mt-4">1. User Registration</h3>
      <p className="mb-2"><strong>POST</strong> <code className="bg-gray-200">/api/auth/register</code></p>
      <h4 className="font-semibold">Request Body:</h4>
      <pre className="bg-gray-100 p-2 rounded">
        {JSON.stringify(
          {
            username: "exampleUser",
            email: "user@example.com",
            password: "yourSecurePassword"
          },
          null,
          2
        )}
      </pre>
      <h4 className="font-semibold">Response:</h4>
      <pre className="bg-gray-100 p-2 rounded">
        {JSON.stringify(
          {
            message: "User registered successfully."
          },
          null,
          2
        )}
      </pre>

      {/* Repeat similar structure for other endpoints */}
      
      <h3 className="text-lg font-semibold mt-4">2. User Login</h3>
      <p className="mb-2"><strong>POST</strong> <code className="bg-gray-200">/api/auth/login</code></p>
      <h4 className="font-semibold">Request Body:</h4>
      <pre className="bg-gray-100 p-2 rounded">
        {JSON.stringify(
          {
            email: "user@example.com",
            password: "yourSecurePassword"
          },
          null,
          2
        )}
      </pre>
      <h4 className="font-semibold">Response:</h4>
      <pre className="bg-gray-100 p-2 rounded">
        {JSON.stringify(
          {
            token: "yourJWTtoken"
          },
          null,
          2
        )}
      </pre>

      {/* Continue adding the rest of the endpoints in the same format */}

      <h3 className="text-lg font-semibold mt-4">3. Get User Profile</h3>
      <p className="mb-2"><strong>GET</strong> <code className="bg-gray-200">/api/user/profile</code></p>
      <h4 className="font-semibold">Headers:</h4>
      <pre className="bg-gray-100 p-2 rounded">
        Authorization: Bearer yourJWTtoken
      </pre>
      <h4 className="font-semibold">Response:</h4>
      <pre className="bg-gray-100 p-2 rounded">
        {JSON.stringify(
          {
            id: "userId",
            username: "exampleUser",
            email: "user@example.com"
          },
          null,
          2
        )}
      </pre>

      {/* Add other endpoints similarly */}

      <h2 id="error-handling" className="text-2xl font-semibold mt-4">Error Handling</h2>
      <p className="mb-4">
        Errors are returned with an appropriate status code and a message. Example error response:
      </p>
      <pre className="bg-gray-100 p-2 rounded">
        {JSON.stringify(
          {
            error: "Message describing the error."
          },
          null,
          2
        )}
      </pre>

      <h2 id="rate-limiting" className="text-2xl font-semibold mt-4">Rate Limiting</h2>
      <p className="mb-4">
        The API implements rate limiting to prevent abuse. Users are limited to 100 requests per hour.
      </p>

      <h2 id="contact" className="text-2xl font-semibold mt-4">Contact</h2>
      <p className="mb-4">
        For support, contact us at <a href="mailto:support@linkup.com" className="text-emerald-500 hover:underline">support@linkup.com</a>.
      </p>
    </div>
  );
};

export default ApiDocumentation;
