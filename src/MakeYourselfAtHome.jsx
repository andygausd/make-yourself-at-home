
import { useState } from "react";

export default function MakeYourselfAtHome() {
  const [reflection, setReflection] = useState("");
  const [partnerNotes, setPartnerNotes] = useState("");
  const [chosenValues, setChosenValues] = useState("");
  const [valueReflection, setValueReflection] = useState("");
  const [willingStatement, setWillingStatement] = useState("");

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
      <h1>🏠 Make Yourself A(t) Home</h1>
      <p>This interactive worksheet helps you reflect on your experience of moving abroad,
        your comfort zone, and how to connect meaningfully with others.
      </p>

      <section>
        <h2>🤝 Fear Zone Reflection</h2>
        <p>1. What’s something you want to do, but feel nervous about?</p>
        <p>2. What are you afraid might happen?</p>
        <p>3. What value or goal could help you do it anyway?</p>
        <textarea
          placeholder="Your notes..."
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          style={{ width: '100%', minHeight: '80px', marginBottom: '1rem' }}
        />
        <textarea
          placeholder="Partner's notes (if shared)..."
          value={partnerNotes}
          onChange={(e) => setPartnerNotes(e.target.value)}
          style={{ width: '100%', minHeight: '80px' }}
        />
      </section>

      <section>
        <h2>💡 Values That Matter to You</h2>
        <textarea
          placeholder="Which values did you choose and why?"
          value={chosenValues}
          onChange={(e) => setChosenValues(e.target.value)}
          style={{ width: '100%', minHeight: '60px', marginBottom: '1rem' }}
        />
        <textarea
          placeholder="How could these values help you move through fear or discomfort?"
          value={valueReflection}
          onChange={(e) => setValueReflection(e.target.value)}
          style={{ width: '100%', minHeight: '60px' }}
        />
      </section>

      <section>
        <h2>✍️ Willingness Statement</h2>
        <p>Use this sentence: <em>I’m willing to feel ___ if it helps me ___</em></p>
        <input
          type="text"
          placeholder="Type your personal statement here..."
          value={willingStatement}
          onChange={(e) => setWillingStatement(e.target.value)}
          style={{ width: '100%', padding: '0.5rem' }}
        />
      </section>

      <div style={{ paddingTop: '1rem' }}>
        <button
          onClick={() => alert("Your responses are saved locally. Thank you!")}
          style={{ padding: '0.5rem 1rem', background: '#0070f3', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Finish & Save
        </button>
      </div>
    </div>
  );
}
