
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function MakeYourselfAtHome() {
  const [reflection, setReflection] = useState("");
  const [partnerNotes, setPartnerNotes] = useState("");
  const [chosenValues, setChosenValues] = useState("");
  const [valueReflection, setValueReflection] = useState("");
  const [willingStatement, setWillingStatement] = useState("");

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">🏠 Make Yourself A(t) Home</h1>
      <p>
        This interactive worksheet helps you reflect on your experience of moving abroad,
        your comfort zone, and how to connect meaningfully with others.
      </p>

      <section>
        <h2 className="text-xl font-semibold">🤝 Fear Zone Reflection</h2>
        <p>1. What’s something you want to do, but feel nervous about?</p>
        <p>2. What are you afraid might happen?</p>
        <p>3. What value or goal could help you do it anyway?</p>
        <Textarea
          placeholder="Your notes..."
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
        />
        <Textarea
          placeholder="Partner's notes (if shared)..."
          value={partnerNotes}
          onChange={(e) => setPartnerNotes(e.target.value)}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold">💡 Values That Matter to You</h2>
        <Textarea
          placeholder="Which values did you choose and why?"
          value={chosenValues}
          onChange={(e) => setChosenValues(e.target.value)}
        />
        <Textarea
          placeholder="How could these values help you move through fear or discomfort?"
          value={valueReflection}
          onChange={(e) => setValueReflection(e.target.value)}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold">✍️ Willingness Statement</h2>
        <p>Use this sentence: <em>I’m willing to feel ___ if it helps me ___</em></p>
        <Input
          placeholder="Type your personal statement here..."
          value={willingStatement}
          onChange={(e) => setWillingStatement(e.target.value)}
        />
      </section>

      <div className="pt-4">
        <Button onClick={() => alert("Your responses are saved locally. Thank you!")}>Finish & Save</Button>
      </div>
    </div>
  );
}
