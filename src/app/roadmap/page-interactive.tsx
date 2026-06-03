"use client";
import React, { useState } from "react";
import Link from "next/link";

interface Topic {
  name: string;
  timeToFinish: string;
  freeResources: string[];
  caseBasedProblems: string[];
}

interface Phase {
  id: number;
  name: string;
  duration: string;
  topics?: Topic[];
  resources?: string[];
  status: string;
}

interface Roadmap {
  title: string;
  phases: Phase[];
  caseStudy: {
    title: string;
    description: string;
    technologies?: string[];
    challenges?: string[];
  };
}

interface Question {
  id: string;
  type: "mcq" | "blank";
  question: string;
  options: string[];
  answer: string;
}

// This component will be integrated into the main roadmap page
// It provides the interactive Begin Phase functionality with modals
export function PhaseInteractiveSection({ 
  roadmap, 
  expandedPhase, 
  setExpandedPhase,
  selectedTopic,
  setSelectedTopic,
  showFeedbackModal,
  setShowFeedbackModal,
  feedbackSummary,
  setFeedbackSummary
}: {
  roadmap: Roadmap;
  expandedPhase: number | null;
  setExpandedPhase: (id: number | null) => void;
  selectedTopic: { phaseId: number; topicName: string } | null;
  setSelectedTopic: (topic: { phaseId: number; topicName: string } | null) => void;
  showFeedbackModal: boolean;
  setShowFeedbackModal: (show: boolean) => void;
  feedbackSummary: string;
  setFeedbackSummary: (summary: string) => void;
}) {
  return (
    <div className="space-y-6">
      {roadmap.phases.map((phase, i) => (
        <div key={phase.id} className="ui-panel overflow-hidden">
          {/* Phase Header - Clickable */}
          <button
            onClick={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
            className="w-full p-6 flex flex-col md:flex-row gap-6 hover:bg-surface-container-high transition-colors text-left"
          >
            <div className="md:w-1/4 border-r border-outline-variant/30 pr-6">
              <span className="text-label-sm text-primary uppercase tracking-widest block mb-2">Phase 0{i + 1}</span>
              <h3 className="text-headline-md text-on-surface">{phase.name}</h3>
              <p className="text-body-sm text-on-surface-variant mt-2">{phase.duration}</p>
            </div>
            <div className="md:w-3/4 flex items-center justify-between">
              <span className="text-label-sm text-on-surface-variant uppercase tracking-widest">{phase.topics?.length || 0} Topics</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setExpandedPhase(expandedPhase === phase.id ? null : phase.id);
                }}
                className="px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-on-primary font-bold text-label-md uppercase rounded transition-all"
              >
                {expandedPhase === phase.id ? "Close Phase" : "Begin Phase"}
              </button>
            </div>
          </button>

          {/* Expanded Topics - With Animation Line */}
          {expandedPhase === phase.id && (
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary to-transparent opacity-60"></div>
              <div className="p-6 bg-surface-container-low border-t border-outline-variant space-y-3">
                <h4 className="text-label-sm text-on-surface-variant uppercase tracking-widest mb-4 font-bold ml-6">Learning Path</h4>
                {(phase.topics && phase.topics.length > 0) ? (
                  phase.topics.map((topic, topicIdx) => (
                    <button
                      key={topicIdx}
                      onClick={() => setSelectedTopic({ phaseId: phase.id, topicName: topic.name })}
                      className="w-full ml-6 text-left p-4 rounded border border-outline-variant bg-surface hover:bg-surface-container-high hover:border-primary transition-all group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h5 className="text-body-md font-bold text-on-surface group-hover:text-primary transition-colors">{topic.name}</h5>
                          <p className="text-label-xs text-on-surface-variant mt-1">⏱️ {topic.timeToFinish}</p>
                        </div>
                        <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">arrow_forward</span>
                      </div>
                    </button>
                  ))
                ) : (
                  <p className="text-body-sm text-on-surface-variant ml-6">No topics available for this phase.</p>
                )}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Topic Options Modal */}
      {selectedTopic && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-surface-lowest border border-outline-variant rounded-lg p-8 max-w-md w-full shadow-2xl">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-headline-md text-on-surface font-bold">{selectedTopic.topicName}</h3>
                <p className="text-label-sm text-on-surface-variant mt-1">Choose your learning path</p>
              </div>
              <button onClick={() => setSelectedTopic(null)} className="text-on-surface-variant hover:text-on-surface">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="space-y-3">
              <button className="w-full p-4 border border-outline-variant rounded bg-surface hover:bg-surface-container-high hover:border-primary transition-all text-left">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[24px]">library_books</span>
                  <div>
                    <p className="font-bold text-on-surface">Resources</p>
                    <p className="text-label-xs text-on-surface-variant">Free tutorials and materials</p>
                  </div>
                </div>
              </button>

              <button className="w-full p-4 border border-outline-variant rounded bg-surface hover:bg-surface-container-high hover:border-primary transition-all text-left">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[24px]">quiz</span>
                  <div>
                    <p className="font-bold text-on-surface">Test Understanding & Projects</p>
                    <p className="text-label-xs text-on-surface-variant">Practice problems & projects</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => {
                  setFeedbackSummary(`Based on your progress in "${selectedTopic.topicName}", here are personalized recommendations:\n\n📌 Focus Areas:\n• Strengthen your understanding of core concepts - practice 2-3 more problems\n• Work through the case-based problems to apply theory\n• Review areas where you scored below 70%\n\n💡 Strengths:\n• Good grasp of fundamentals\n• Quick problem-solving ability\n\n🎯 Next Steps:\n1. Complete 5 practice problems from the resources\n2. Build a small project applying these concepts\n3. Review your weak areas before moving to next topic`);
                  setShowFeedbackModal(true);
                  setSelectedTopic(null);
                }}
                className="w-full p-4 border border-outline-variant rounded bg-surface hover:bg-surface-container-high hover:border-primary transition-all text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[24px]">rate_review</span>
                  <div>
                    <p className="font-bold text-on-surface">Feedback Loop</p>
                    <p className="text-label-xs text-on-surface-variant">Personalized recommendations</p>
                  </div>
                </div>
              </button>
            </div>

            <button
              onClick={() => setSelectedTopic(null)}
              className="w-full mt-4 px-4 py-2 border border-outline-variant text-on-surface-variant hover:text-on-surface rounded font-bold text-label-md uppercase transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Feedback Modal */}
      {showFeedbackModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-surface-lowest border border-outline-variant rounded-lg p-8 max-w-2xl w-full shadow-2xl max-h-[80vh] overflow-y-auto">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-headline-md text-on-surface font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">insights</span>
                Your Personalized Feedback
              </h3>
              <button onClick={() => setShowFeedbackModal(false)} className="text-on-surface-variant hover:text-on-surface">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="space-y-4 text-body-sm text-on-surface-variant whitespace-pre-wrap">
              {feedbackSummary}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <button
                onClick={() => setShowFeedbackModal(false)}
                className="px-4 py-2 border border-outline-variant text-on-surface-variant hover:text-on-surface rounded font-bold text-label-md uppercase transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => setShowFeedbackModal(false)}
                className="px-4 py-2 bg-primary text-on-primary rounded font-bold text-label-md uppercase hover:opacity-90 transition-opacity"
              >
                Next Topic
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
