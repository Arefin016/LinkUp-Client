import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";

const NotePad = () => {
  const [questions, setQuestions] = useState("");
  const [notes, setNotes] = useState("");

  // Load saved notes from localStorage when the component mounts
  useEffect(() => {
    const savedQuestions = localStorage.getItem("questions");
    const savedNotes = localStorage.getItem("notes");
    if (savedQuestions) setQuestions(savedQuestions);
    if (savedNotes) setNotes(savedNotes);
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("questions", questions);
    localStorage.setItem("notes", notes);
  }, [questions, notes]);

  const handleQuestionsChange = (e) => {
    setQuestions(e.target.value);
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleClear = () => {
    setQuestions("");
    setNotes("");
    localStorage.removeItem("questions");
    localStorage.removeItem("notes");
  };

  const handleSaveAsPDF = () => {
    const doc = new jsPDF();

    // Add text content
    doc.setFontSize(18);
    doc.text("Your Notes", 10, 10);

    doc.setFontSize(14);
    doc.text("Questions:", 10, 20);
    doc.setFontSize(12);
    doc.text(questions, 10, 30);

    doc.setFontSize(14);
    doc.text("Notes:", 10, 50);
    doc.setFontSize(12);
    doc.text(notes, 10, 60);

    // Save the PDF and trigger download
    doc.save("notes.pdf");
  };

  return (
    <div className="notepad-container mx-auto mt-10 p-6 max-w-lg">
      <h2 className="text-3xl font-bold text-center mb-6">NotePad</h2>

      {/* Questions Input */}
      <div className="mb-4">
        <label className="block font-medium text-lg mb-2">Questions</label>
        <textarea
          value={questions}
          onChange={handleQuestionsChange}
          rows="5"
          placeholder="Write down your questions here..."
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Notes Input */}
      <div className="mb-4">
        <label className="block font-medium text-lg mb-2">Notes</label>
        <textarea
          value={notes}
          onChange={handleNotesChange}
          rows="7"
          placeholder="Take your notes here..."
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          onClick={handleClear}
        >
          Clear All
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          onClick={handleSaveAsPDF}
        >
          Save as PDF
        </button>
      </div>
    </div>
  );
};

export default NotePad;
