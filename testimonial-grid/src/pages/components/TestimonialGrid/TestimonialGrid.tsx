import React from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import "./index.css";

const TestimonialGrid: React.FC = () => {
  return (
    <div className="testimonial-grid">
      <TestimonialCard
        name="Daniel Clifford"
        title="Verified Graduate"
        highlight="I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth."
        description="I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people had an amazing experience..."
        image="images/image-daniel.jpg"
        className="area-daniel"
        bgColor="bg-purple-500"
        textColor="text-white"
      />
      <TestimonialCard
        name="Jonathan Walters"
        title="Verified Graduate"
        highlight="The team was very supportive and kept me motivated."
        description="I started as a total newbie with virtually no coding skills. Now I work as a mobile engineer for a big company."
        image="images/image-jonathan.jpg"
        className="area-jonathan"
        bgColor="bg-gray-500"
        textColor="text-white"
      />
      <TestimonialCard
        name="Jeanette Harmon"
        title="Verified Graduate"
        highlight="An overall wonderful and rewarding experience."
        description="Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love."
        image="images/image-jeanette.jpg"
        className="area-jeanette"
        bgColor="bg-slate-50"
        textColor="text-black"
      />
      <TestimonialCard
        name="Patrick Abrams"
        title="Verified Graduate"
        highlight="Awesome teaching support from TAs who did the bootcamp themselves."
        description="The staff seemed genuinely concerned about my progress which I find really refreshing."
        image="images/image-patrick.jpg"
        className="area-patrick"
        bgColor="bg-slate-800"
        textColor="text-white"
      />
      <TestimonialCard
        name="Kira Whittle"
        title="Verified Graduate"
        highlight="Such a life-changing experience. Highly recommended!"
        description="Before joining the bootcamp, I’ve never written a line of code. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particularm was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I've often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!"
        image="images/image-kira.jpg"
        className="area-kira"
        bgColor="bg-slate-100"
        textColor="text-black"
      />
    </div>
  );
};

export default TestimonialGrid;
