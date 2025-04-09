import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Avatar, AvatarFallback } from "../components/ui/Avatar";


const exerciseData = {
  diabetes: [ { name: "Walking", description: "Brisk walking for 30 minutes helps control blood sugar levels." }, { name: "Yoga", description: "Gentle yoga can improve insulin sensitivity and reduce stress." }],
  hypertension: [ { name: "Swimming", description: "A full-body workout that is easy on joints and lowers blood pressure." }, { name: "Cycling", description: "Improves cardiovascular health and helps with weight loss." }],
  obesity: [ { name: "HIIT", description: "Short bursts of intense exercise followed by rest can burn fat effectively." }, { name: "Strength Training", description: "Builds muscle mass and increases metabolism." }],
  anxiety: [ { name: "Breathing Exercises", description: "Helps to calm the mind and reduce stress." }, { name: "Mindfulness", description: "Improves emotional well-being and reduces anxiety symptoms." }],
  asthma: [ { name: "Pursed-lip Breathing", description: "Improves breathing efficiency and relieves shortness of breath." }, { name: "Walking", description: "Low-impact and helps improve lung capacity." }],
  arthritis: [ { name: "Tai Chi", description: "Gentle movements improve flexibility and balance." }, { name: "Water Aerobics", description: "Reduces stress on joints." }],
  backpain: [ { name: "Cat-Cow Stretch", description: "Improves flexibility and relieves tension in the spine." }, { name: "Bridge Pose", description: "Strengthens lower back and core muscles." }],
  thyroid: [ { name: "Stretching", description: "Gentle stretches help with energy levels and metabolism." }, { name: "Brisk Walking", description: "Boosts metabolism and supports weight management." }],
  pcod: [ { name: "Pilates", description: "Improves insulin sensitivity and hormone balance." }, { name: "Zumba", description: "Fun cardio workout for weight management." }],
  migraine: [ { name: "Neck Stretching", description: "Reduces tension that may trigger migraines." }, { name: "Muscle Relaxation", description: "Improves blood circulation and reduces stress." }],
  insomnia: [ { name: "Sleep Yoga", description: "Calms the nervous system and promotes better sleep." }, { name: "Walking in Nature", description: "Regulates the sleep cycle and reduces anxiety." }],
  postpartum: [ { name: "Pelvic Floor Exercises", description: "Strengthens muscles and improves recovery." }, { name: "Postnatal Yoga", description: "Supports emotional and physical recovery." }]
};

export default function WellnessRoutine() {
  const [condition, setCondition] = useState("");
  const [results, setResults] = useState([]);
  const [done, setDone] = useState({});
  const [notFound, setNotFound] = useState(false);
  const [showList, setShowList] = useState(false);

  const handleSearch = () => {
    const lowerCaseCondition = condition.toLowerCase().replace(/\s+/g, "");
    const data = exerciseData[lowerCaseCondition];
    if (data) {
      setResults(data);
      setNotFound(false);
    } else {
      setResults([]);
      setNotFound(true);
    }
  };

  const toggleDone = (index) => {
    setDone((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const diseaseList = Object.keys(exerciseData);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Personalized Wellness Routine</h1>

      <div className="relative mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter health condition (e.g., diabetes)"
            value={condition}
            onFocus={() => setShowList(true)}
            onBlur={() => setTimeout(() => setShowList(false), 150)} // delay so click registers
            onChange={(e) => setCondition(e.target.value)}
            className="border p-2 flex-grow rounded"
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
        {showList && (
          <ul className="absolute z-10 bg-white border mt-1 w-full max-h-60 overflow-y-auto rounded shadow-md p-2 text-sm">
            {diseaseList.map((item) => (
              <li
                key={item}
                onMouseDown={() => setCondition(item)}
                className="p-1 cursor-pointer hover:bg-gray-100 capitalize"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {results.length > 0 ? (
        <div className="grid gap-4">
          {results.map((exercise, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="p-4 flex items-center gap-4">
                <Avatar className="h-14 w-14">
                  <AvatarFallback>
                    {exercise.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-semibold">{exercise.name}</h2>
                  <p className="mb-2 text-sm text-gray-700">{exercise.description}</p>
                  <Button onClick={() => toggleDone(index)}>
                    {done[index] ? "✔️ Done" : "Mark as Done"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : notFound ? (
        <p className="text-gray-600">
          Sorry, we currently do not have exercise data for this condition. We are working to add it soon!
        </p>
      ) : null}
    </div>
  );
}
