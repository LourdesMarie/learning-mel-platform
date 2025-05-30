
// Fixed LearningMELPlatform.jsx — ESF Visual Identity Integrated
// ✅ JSX structure corrected for deployment

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Sparkles, ClipboardList, RefreshCw, Map } from "lucide-react";

export default function LearningMELPlatform() {
  const [preAnswer, setPreAnswer] = useState("");
  const [selectedOutcome, setSelectedOutcome] = useState("");
  const [reflectionType, setReflectionType] = useState("insight");
  const [outcomeReflection, setOutcomeReflection] = useState("");
  const [reflectorName, setReflectorName] = useState("");
  const [zoneOfInfluence, setZoneOfInfluence] = useState("");
  const [forceFieldDrivers, setForceFieldDrivers] = useState("");
  const [forceFieldBarriers, setForceFieldBarriers] = useState("");
  const [postAnswer, setPostAnswer] = useState("");
  const [peerWall, setPeerWall] = useState([]);

  const outcomeReflections = {
    expand: {
      insight: "🌍 What idea or moment made you go 'Ah-ha!'?",
      story: "🌍 Share a story where you began reframing a challenge.",
      commitment: "🌍 What mindset shift do you want to nurture?"
    },
    complexity: {
      insight: "💡 What complexity or contradiction stood out to you?",
      story: "💡 Describe a moment when engaging with complexity.",
      commitment: "💡 How can you work with ambiguity?"
    },
    trust: {
      insight: "🧱 When did you notice trust being built?",
      story: "🧱 Tell a story about trust in your work.",
      commitment: "🧱 How will you strengthen collaboration?"
    },
    adaptation: {
      insight: "🦎 What experience helped you learn?",
      story: "🦎 Describe learning-by-doing.",
      commitment: "🦎 What practice will you adapt?"
    },
    agency: {
      insight: "✍️ What commitment do you feel empowered to make?",
      story: "✍️ Tell a story about influencing change.",
      commitment: "✍️ What step will you take to own the outcome?"
    }
  };

  const handleAddToPeerWall = () => {
    if (outcomeReflection && reflectorName) {
      setPeerWall([...peerWall, { name: reflectorName, text: outcomeReflection }]);
      setOutcomeReflection("");
    }
  };

  return (
    <div className="p-8 space-y-10 bg-gray-50 text-gray-900 font-sans max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold flex items-center gap-3 text-esf-blue">
        <Sparkles className="w-8 h-8" /> Learning Cycle Engagement Hub
      </h1>
      <Tabs defaultValue="pre">
        <TabsList className="grid grid-cols-4 w-full bg-esf-lime text-black rounded-lg p-1 shadow">
          <TabsTrigger value="pre"> <ClipboardList className="inline-block mr-1" /> Pre-Engage</TabsTrigger>
          <TabsTrigger value="direct"> <Sparkles className="inline-block mr-1" /> Direct Engage</TabsTrigger>
          <TabsTrigger value="post"> <RefreshCw className="inline-block mr-1" /> Re-Engage</TabsTrigger>
          <TabsTrigger value="systems"> <Map className="inline-block mr-1" /> Systems Tools</TabsTrigger>
        </TabsList>

        <TabsContent value="pre" className="mt-6">
          <Card><CardContent className="space-y-6 p-6">
            <p className="text-esf-fuchsia text-sm italic">
              🌱 Frame your intention and learning edge.
            </p>
            <label className="font-semibold text-lg text-esf-blue">What are you most curious about?</label>
            <Textarea className="bg-gray-100" value={preAnswer} onChange={(e) => setPreAnswer(e.target.value)} />
            <Button onClick={() => alert("Saved")} className="w-full bg-esf-green hover:bg-esf-blue text-white">Submit</Button>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="direct" className="mt-6">
          <Card><CardContent className="space-y-6 p-6">
            <label className="font-semibold text-esf-blue">Choose Outcome</label>
            <Select onValueChange={setSelectedOutcome}>
              <SelectTrigger className="w-full bg-gray-100">{selectedOutcome || "Select"}</SelectTrigger>
              <SelectContent>
                <SelectItem value="expand">🌍 Expand</SelectItem>
                <SelectItem value="complexity">💡 Complexity</SelectItem>
                <SelectItem value="trust">🧱 Trust</SelectItem>
                <SelectItem value="adaptation">🦎 Adapt</SelectItem>
                <SelectItem value="agency">✍️ Agency</SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={setReflectionType}>
              <SelectTrigger className="w-full bg-gray-100 capitalize">{reflectionType}</SelectTrigger>
              <SelectContent>
                <SelectItem value="insight">Insight</SelectItem>
                <SelectItem value="story">Story</SelectItem>
                <SelectItem value="commitment">Commitment</SelectItem>
              </SelectContent>
            </Select>
            {selectedOutcome && (
              <div className="space-y-2">
                <p className="text-sm italic text-esf-fuchsia">{outcomeReflections[selectedOutcome][reflectionType]}</p>
                <Textarea className="bg-white" value={outcomeReflection} onChange={(e) => setOutcomeReflection(e.target.value)} />
                <input className="w-full p-2 border rounded-md" placeholder="Your name" value={reflectorName} onChange={(e) => setReflectorName(e.target.value)} />
                <Button onClick={handleAddToPeerWall} className="w-full bg-esf-green hover:bg-esf-blue text-white">Share</Button>
              </div>
            )}
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="post" className="mt-6">
          <Card><CardContent className="space-y-6 p-6">
            <p className="text-esf-fuchsia text-sm italic">🔁 Revisit learning and share experience.</p>
            <label className="font-semibold text-esf-blue">What changes have you noticed?</label>
            <Textarea className="bg-gray-100" value={postAnswer} onChange={(e) => setPostAnswer(e.target.value)} />
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="systems" className="mt-6">
          <Card><CardContent className="space-y-6 p-6">
            <p className="text-esf-fuchsia text-sm italic">🗺️ Explore influence and resistance.</p>
            <div className="space-y-2">
              <label className="font-semibold text-esf-orange">Zone of Influence</label>
              <Textarea className="bg-gray-100" value={zoneOfInfluence} onChange={(e) => setZoneOfInfluence(e.target.value)} />
            </div>
            <div className="space-y-2">
              <label className="font-semibold text-esf-orange">Force Field Analysis</label>
              <Textarea className="bg-gray-100" placeholder="Driving Forces" value={forceFieldDrivers} onChange={(e) => setForceFieldDrivers(e.target.value)} />
              <Textarea className="bg-gray-100" placeholder="Restraining Forces" value={forceFieldBarriers} onChange={(e) => setForceFieldBarriers(e.target.value)} />
            </div>
          </CardContent></Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
